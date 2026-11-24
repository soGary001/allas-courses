/* =========================================================
 * All A's 课程中心 · 前端逻辑
 * 路由（hash）/ 三语切换 / 筛选 / 卡片与详情渲染 / 咨询弹窗 / 一对一定制页
 * ========================================================= */

(function () {
  'use strict';

  var state = {
    lang: localStorage.getItem('allas_lang') || 'en',
    cat: 'all',
    subject: 'all',
    grade: 'all',
    time: 'all',
    price: 'all',
    q: '',
    archiveReturnId: '',
    signupUrl: ''   // 当前详情页课程的专属报名表单链接
  };

  function T(key) { return (I18N[state.lang] && I18N[state.lang][key]) || I18N.zh[key] || key; }
  function L(obj) { if (typeof obj === 'string') return obj; if (!obj) return ''; return obj[state.lang] || obj.zh || obj.en || ''; }
  function gradeText(c) {
    // grades 兼容三语对象与纯字符串
    return (c.grades && typeof c.grades === 'object') ? L(c.grades) : c.grades;
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function fmtPrice(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

  /* 年级表格 weeks 单元格：括号内备注用小号字渲染，节省宽度让全部内容可见 */
  function fmtWeeks(w) {
    var s = String(w == null ? '' : w);
    var m = s.match(/^(.*?)\s*\((.*)\)\s*$/);
    if (m) return esc(m[1]) + ' <small class="grade-note">(' + esc(m[2]) + ')</small>';
    return esc(s);
  }

  /* ---------- SVG 封面（无实拍图课程的兜底方案，含课程名，保证不重复） ---------- */
  function coverSVG(course) {
    var s = SUBJECTS[course.subject] || SUBJECTS.science;
    var name = L(course.name);
    if (name.length > 18) name = name.slice(0, 17) + '…';
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="' + s.c1 + '"/><stop offset="1" stop-color="' + s.c2 + '"/>' +
      '</linearGradient></defs>' +
      '<rect width="640" height="360" fill="url(#g)"/>' +
      '<circle cx="560" cy="60" r="120" fill="rgba(217,169,59,0.18)"/>' +
      '<circle cx="80" cy="320" r="140" fill="rgba(255,255,255,0.08)"/>' +
      '<circle cx="320" cy="150" r="80" fill="rgba(255,255,255,0.12)"/>' +
      '<text x="320" y="172" font-size="76" text-anchor="middle">' + s.icon + '</text>' +
      '<text x="320" y="278" font-size="30" font-family="sans-serif" fill="rgba(255,255,255,0.95)" text-anchor="middle" font-weight="700">' + esc(name) + '</text>' +
      '<text x="320" y="316" font-size="20" font-family="sans-serif" fill="rgba(247,236,210,0.9)" text-anchor="middle">' + esc(gradeText(course)) + '</text>' +
      '<rect x="0" y="348" width="640" height="12" fill="#d9a93b"/>' +
      '</svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  function courseCover(course) {
    if (course.cover) return course.cover;
    if (course.imgs && course.imgs.length) return course.imgs[0];
    return coverSVG(course);
  }

  /* ---------- 文案辅助 ---------- */
  function priceText(c) {
    // 区间价格：拆成 数字 + THB 单位，与其他卡片格式统一（允许换行）
    if (c.feeRange) {
      var fr = L(c.feeRange).replace(/[ ]*THB[ ]*$/i, '').replace(/[ ]*฿[ ]*$/, '');
      return '<span class="price-num price-range">' + esc(fr) + '</span> <span class="price-unit">' + T('thb') + '</span>';
    }
    if (c.feeEnquiry) return '<span class="chip chip-tbd">' + T('feeEnquiry') + '</span>';
    if (c.price == null) return '<span class="chip chip-tbd">' + T('tbd') + '</span>';
    return '<span class="price-num">' + fmtPrice(c.price) + '</span> <span class="price-unit">' + T('thb') + '</span>';
  }
  function startText(c) {
    if (c.startMonth === 'rolling') return T('timeRolling');
    if (!c.startMonth) return null;
    var map = { '2026-08': 'timeAug', '2026-09': 'timeSep', '2026-10': 'timeOct', '2026-12': 'timeDec', 'term2': 'timeTerm2', '2027-01': 'timeJan' };
    return T(map[c.startMonth] || 'timeTbd');
  }

  /* ---------- 筛选 ---------- */
  function passFilters(c) {
    if (c.comingSoon) {
      // 即将上架课程：不属于任何类别/科目，只在"全部课程 + 无任何筛选"时显示
      var noFilter = state.cat === 'all' && state.subject === 'all' && state.grade === 'all' &&
                     state.time === 'all' && state.price === 'all' && !state.q;
      return noFilter;
    }
    if (state.cat !== 'all' && c.cat !== state.cat) return false;
    if (state.subject !== 'all' && c.subject !== state.subject) return false;
    if (state.grade !== 'all') {
      var ranges = { g1: [1, 6], g2: [7, 9], g3: [10, 13] };
      var r = ranges[state.grade];
      if (r && (c.gmax < r[0] || c.gmin > r[1])) return false;
    }
    if (state.time !== 'all') {
      if (state.time === 'tbd') { if (c.startMonth) return false; }
      else if (c.startMonth !== state.time) return false;
    }
    if (state.price !== 'all') {
      if (state.price === 'p0') { if (c.price != null) return false; }
      else {
        if (c.price == null) return false;
        if (state.price === 'p1' && c.price > 10000) return false;
        if (state.price === 'p2' && (c.price <= 10000 || c.price > 15000)) return false;
        if (state.price === 'p3' && (c.price <= 15000 || c.price > 22000)) return false;
        if (state.price === 'p4' && c.price <= 22000) return false;
      }
    }
    if (state.q) {
      var q = state.q.toLowerCase();
      var hay = [L(c.name), c.name.zh, c.name.en, c.name.th, L(c.archiveTitle), L(SUBJECTS[c.subject].name),
        c.organizer ? L(c.organizer) : '', L(c.mentor), c.searchTerms || ''].join(' ').toLowerCase();
      if (hay.indexOf(q) === -1) return false;
    }
    return true;
  }

  /* ---------- 列表页 ---------- */
  function renderTabs() {
    var html = '<button class="tab' + (state.cat === 'all' ? ' active' : '') + '" data-cat="all">' + T('catAll') + '</button>';
    Object.keys(CATEGORIES).forEach(function (k) {
      html += '<button class="tab' + (state.cat === k ? ' active' : '') + '" data-cat="' + k + '">' + L(CATEGORIES[k]) + '</button>';
    });
    document.getElementById('catTabs').innerHTML = html;
    document.querySelectorAll('#catTabs .tab').forEach(function (b) {
      b.addEventListener('click', function () { state.cat = b.dataset.cat; renderList(); });
    });
  }

  function renderFilters() {
    var subjOpts = '<option value="all">' + T('fAll') + '</option>';
    Object.keys(SUBJECTS).forEach(function (k) {
      subjOpts += '<option value="' + k + '"' + (state.subject === k ? ' selected' : '') + '>' + L(SUBJECTS[k].name) + '</option>';
    });
    document.getElementById('selSubject').innerHTML = subjOpts;

    var gradeOpts = [
      ['all', T('fAll')], ['g1', T('gradeG1')], ['g2', T('gradeG2')], ['g3', T('gradeG3')]
    ].map(function (o) { return '<option value="' + o[0] + '"' + (state.grade === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('');
    document.getElementById('selGrade').innerHTML = gradeOpts;

    var timeOpts = [
      ['all', T('fAll')], ['2026-08', T('timeAug')], ['2026-09', T('timeSep')],
      ['2026-10', T('timeOct')], ['2026-12', T('timeDec')], ['2027-01', T('timeJan')], ['term2', T('timeTerm2')], ['rolling', T('timeRolling')], ['tbd', T('timeTbd')]
    ].map(function (o) { return '<option value="' + o[0] + '"' + (state.time === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('');
    document.getElementById('selTime').innerHTML = timeOpts;

    var priceOpts = [
      ['all', T('fAll')], ['p1', T('priceP1')], ['p2', T('priceP2')],
      ['p3', T('priceP3')], ['p4', T('priceP4')], ['p0', T('priceTbd')]
    ].map(function (o) { return '<option value="' + o[0] + '"' + (state.price === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('');
    document.getElementById('selPrice').innerHTML = priceOpts;

    document.getElementById('lblSubject').textContent = T('fSubject');
    document.getElementById('lblGrade').textContent = T('fGrade');
    document.getElementById('lblTime').textContent = T('fTime');
    document.getElementById('lblPrice').textContent = T('fPrice');
    var si = document.getElementById('searchInput');
    si.placeholder = T('fSearch');
    document.getElementById('resetBtn').textContent = T('fReset');
  }

  function cardHTML(c) {
    var st = startText(c);
    var stHtml = st
      ? '<span class="meta-item">🗓 ' + esc(st) + '</span>'
      : '<span class="meta-item meta-tbd">🗓 ' + T('tbd') + '</span>';
    var soonBadge = c.comingSoon ? '<span class="badge-soon">' + T('comingSoon') + '</span>' : '';
    var footHtml = c.comingSoon
      ? '<div class="card-foot card-foot-soon"><span class="coming-soon-tag">⏳ ' + T('comingSoon') + '</span></div>'
      : '<div class="card-foot">' +
          '<div class="card-price">' + priceText(c) + '</div>' +
          '<div class="card-actions">' +
            '<button class="btn btn-ghost btn-line" data-line="' + c.id + '" title="' + T('cardLine') + '">' + T('heroLine') + '</button>' +
            '<button class="btn btn-primary btn-detail" data-detail="' + c.id + '">' + T('cardDetail') + '</button>' +
          '</div>' +
        '</div>';
    return '' +
      '<article class="card card-soon' + (c.comingSoon ? ' is-soon' : '') + (c.fullCover ? ' full-cover' : '') + '" data-id="' + c.id + '">' +
        '<div class="card-cover">' + soonBadge + '<img src="' + courseCover(c) + '" alt="' + esc(L(c.name)) + '" loading="lazy">' +
          (c.comingSoon || c.fullCover ? '' : '<span class="badge-cat">' + L(CATEGORIES[c.cat]) + '</span>') +
        '</div>' +
        '<div class="card-body">' +
          (c.fullCover ? '<span class="badge-cat">' + esc(L(CATEGORIES[c.cat])) + '</span>' : '') +
          '<h3 class="card-title">' + esc(L(c.name)) + '</h3>' +
          '<div class="card-meta">' +
            '<span class="meta-item">' + (SUBJECTS[c.subject].icon) + ' ' + esc(L(SUBJECTS[c.subject].name)) + '</span>' +
            '<span class="meta-item">🎓 ' + esc(gradeText(c)) + '</span>' +
            stHtml +
          '</div>' +
          '<p class="card-summary">' + esc(L(c.summary)) + '</p>' +
          footHtml +
        '</div>' +
      '</article>';
  }

  function archiveCardHTML(c) {
    return '<li class="card archive-card"><a class="archive-item" data-archive-id="' + esc(c.id) + '" href="#/course/' + esc(c.id) + '">' +
      '<div class="card-cover"><img loading="lazy" alt="" src="' + esc(c.archiveCover || courseCover(c)) + '">' +
        '<span class="badge-cat">' + esc(L(CATEGORIES[c.cat])) + '</span>' +
        '<span class="archive-band"><i aria-hidden="true" class="archive-calendar"></i>' + T('signupClosed') + '</span></div>' +
      '<div class="card-body"><h3 class="card-title">' + esc(L(c.archiveTitle || c.name)) + '</h3>' +
        '<div class="card-meta"><span class="meta-item">' + esc(L(SUBJECTS[c.subject].name)) + '</span><span class="meta-item">' + esc(gradeText(c)) + '</span></div>' +
        '<p class="card-summary">' + esc(L(c.archiveSummary || c.summary)) + '</p>' +
        '<div class="card-foot"><span class="archive-read">' + T('archiveLink') + '</span><span aria-hidden="true" class="archive-arrow">→</span></div>' +
      '</div></a></li>';
  }

  function renderArchive(courses) {
    var jump = document.getElementById('archiveJump');
    document.getElementById('archiveBox').hidden = !courses.length;
    jump.hidden = !courses.length;
    jump.textContent = T('archiveHeading') + ' (' + courses.length + ') ↓';
    document.getElementById('archiveHeading').textContent = T('archiveHeading');
    document.getElementById('archiveNote').textContent = T('archiveNote');
    document.getElementById('archiveList').innerHTML = courses.map(archiveCardHTML).join('');
  }

  function renderList() {
    renderTabs();
    renderFilters();
    var list = COURSES.filter(passFilters);
    // Coming Soon 课程始终排在最底部（最后两个）
    list.sort(function (a, b) {
      var sa = a.comingSoon ? 1 : 0, sb = b.comingSoon ? 1 : 0;
      return sa - sb;
    });
    document.getElementById('resultCount').textContent = T('resultCount').replace('{n}', list.length);
    var grid = document.getElementById('courseGrid');
    renderArchive(list.filter(function (c) { return c.registrationClosed; }));
    if (!list.length) {
      grid.innerHTML = '<div class="no-result">' + T('noResult') + '</div>';
      return;
    }
    grid.innerHTML = list.filter(function (c) { return !c.registrationClosed; }).map(cardHTML).join('');
    grid.querySelectorAll('.btn-detail').forEach(function (b) {
      b.addEventListener('click', function (e) { e.stopPropagation(); location.hash = '#/course/' + b.dataset.detail; });
    });
    grid.querySelectorAll('.btn-line').forEach(function (b) {
      b.addEventListener('click', function (e) { e.stopPropagation(); openContactModal(); });
    });
    grid.querySelectorAll('.card:not(.is-soon)').forEach(function (card) {
      card.addEventListener('click', function () { location.hash = '#/course/' + card.dataset.id; });
    });
  }

  /* ---------- 详情页 ---------- */
  function factRow(label, value, isLink) {
    if (value == null || value === '') return '';
    var v = isLink ? '<a href="mailto:' + esc(value) + '">' + esc(value) + '</a>' : esc(value).replace(/\n/g, '<br>');
    return '<div class="fact"><div class="fact-label">' + esc(label) + '</div><div class="fact-value">' + v + '</div></div>';
  }
  function factRowTbd(label) {
    return '<div class="fact"><div class="fact-label">' + esc(label) + '</div><div class="fact-value"><span class="chip chip-tbd">' + T('tbd') + '</span></div></div>';
  }

  /* Curriculum Overview 大纲块渲染（详情页 / 1:1 定制页共用） */
  function overviewBlocksHTML(blocks) {
    return blocks.map(function (b) {
      if (b.tag) return '<p class="ov-tag">' + esc(b.tag) + '</p>';
      if (b.quote) return '<p class="ov-quote">' + esc(b.quote) + '</p>';
      var s = '';
      if (b.h) s += '<h3 class="ov-h">' + esc(b.h) + '</h3>';
      if (b.p) s += '<p class="ov-p">' + esc(b.p) + '</p>';
      if (b.table) {
        s += '<div class="ov-table-wrap"><table class="ov-table"><thead><tr>' +
          b.table.head.map(function (x) { return '<th>' + esc(x) + '</th>'; }).join('') +
          '</tr></thead><tbody>' +
          b.table.rows.map(function (r) {
            return '<tr>' + r.map(function (x) { return '<td>' + esc(x).replace(/\n/g, '<br>') + '</td>'; }).join('') + '</tr>';
          }).join('') + '</tbody></table></div>';
      }
      if (b.list) s += '<ul class="ov-list">' + b.list.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
      if (b.checks) s += '<ul class="ov-checks">' + b.checks.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
      if (b.note) s += '<p class="ov-note">' + esc(b.note) + '</p>';
      if (b.img) s += '<div class="ov-img"><img src="' + esc(b.img) + '" alt="" loading="lazy"></div>';
      return '<div class="ov-block">' + s + '</div>';
    }).join('');
  }

  function setSignup(course) {
    var closed = course && course.registrationClosed;
    var emails = course && course.enquiryEmails;
    var button = document.getElementById('barSignupBtn');
    button.disabled = Boolean(closed);
    document.getElementById('barSignup').textContent = T(closed ? 'signupClosed' : emails ? 'signupEnquiry' : 'barSignup');
    document.getElementById('barSignupNote').textContent = closed ? '' : T(emails ? 'signupEmailNote' : 'barSignupNote');
    state.signupUrl = '';
    if (closed) return;
    if (emails) {
      state.signupUrl = 'mailto:' + emails.join(',') + '?subject=' + encodeURIComponent(L(course.name));
    } else {
      state.signupUrl = (course && FORM_URLS[course.id]) || CONFIG.googleFormUrl;
    }
  }

  function renderDetail(id) {
    var c = null;
    for (var i = 0; i < COURSES.length; i++) if (COURSES[i].id === id) { c = COURSES[i]; break; }
    if (!c) { location.hash = '#/'; return; }
    if (c.comingSoon) { location.hash = '#/'; return; }

    setSignup(c);
    state.archiveReturnId = c.registrationClosed ? c.id : '';
    if (c.registrationClosed) document.getElementById('bottomBar').classList.add('hidden');

    var gallery = '';
    if (c.imgs && c.imgs.length) {
      // 瀑布流画廊：图片按自然比例完整显示（不裁切），CSS columns 自动错落排列
      gallery = '<div class="gallery">' + c.imgs.map(function (src) {
        return '<figure class="g-item"><img src="' + src + '" alt="' + esc(L(c.name)) + '" loading="lazy"></figure>';
      }).join('') + '</div>';
    }

    var facts = '';
    if (c.scheduleName) facts += factRow(T('courseNameCol'), L(c.scheduleName));
    facts += factRow(T('factSubject'), L(SUBJECTS[c.subject].name));
    facts += factRow(T('factGrades'), gradeText(c));
    if (c.organizer) facts += factRow(T('factOrg'), L(c.organizer));
    if (c.format) facts += factRow(T('factFormat'), L(c.format));
    if (c.start) facts += factRow(T('factStart'), L(c.start));
    else facts += factRowTbd(T('factStart'));
    if (c.finish) facts += factRow(T('finishCol'), L(c.finish));
    if (c.duration) facts += factRow(T('factDuration'), L(c.duration));
    if (c.hours) facts += factRow(T('factHours'), L(c.hours));
    if (c.location) facts += factRow(T('factLocation'), c.location);
    if (c.schedule) {
      var schedule = L(c.schedule);
      if (c.scheduleGroups) {
        schedule += '\n' + c.scheduleGroups.map(function (group) { return group.grade + '  ' + group.time; }).join('\n');
      }
      facts += factRow(T('factSchedule'), schedule);
    }
    if (c.classDates) facts += factRow(T('classDates'), c.classDates);
    if (c.competitionDate) facts += factRow(T('competitionDate'), L(c.competitionDate));
    if (c.examDate) facts += factRow(T('examDate'), L(c.examDate));
    if (c.mentor) facts += factRow(T('factMentor'), L(c.mentor));
    if (c.curriculum) facts += factRow(T('factCurriculum'), c.curriculum);
    if (c.price != null || c.feeRange) {
      var feeVal = c.feeRange ? L(c.feeRange) : (fmtPrice(c.price) + ' ' + T('thb'));
      facts += factRow(T('factFee'), feeVal);
    } else if (c.feeEnquiry) {
      facts += factRow(T('factFee'), T('feeEnquiry'));
    } else facts += factRowTbd(T('factFee'));
    (c.enquiryEmails || [CONFIG.email]).forEach(function (email) {
      facts += factRow(c.enquiryLabel ? L(c.enquiryLabel) : T('factBooking'), email, true);
    });

    var gradeTable = '';
    if (c.gradeRows && c.gradeRows.length) {
      if (c.gradeRows[0].day !== undefined) {
        // 结构化格式（含 day/weeks/hours/mentor/fee/start/finish 等字段）→ 真表格 + 表头
        gradeTable = '<section class="detail-sec"><h2>' + T('dGrades') + '</h2>' +
          '<div class="grade-table-wrap"><table class="grade-table">' +
          '<colgroup>' +
            '<col style="width:9%"><col style="width:17%"><col style="width:19%"><col style="width:8%">' +
            '<col style="width:11%"><col style="width:11%"><col style="width:12%"><col style="width:13%">' +
          '</colgroup>' +
          '<thead><tr>' +
            '<th>' + T('gradeCol') + '</th>' +
            '<th>' + T('dayCol') + '</th>' +
            '<th>' + T('weeksCol') + '</th>' +
            '<th>' + T('hoursCol') + '</th>' +
            '<th>' + T('mentorCol') + '</th>' +
            '<th>' + T('feeCol') + '</th>' +
            '<th>' + T('startCol') + '</th>' +
            '<th>' + T('finishCol') + '</th>' +
          '</tr></thead><tbody>' +
          c.gradeRows.map(function (r) {
            return '<tr>' +
              '<td class="grade-cell">' + esc(r.grade) + '</td>' +
              '<td>' + esc(L(r.day)) + '</td>' +
              '<td>' + fmtWeeks(L(r.weeks)) + '</td>' +
              '<td>' + esc(r.hours) + '</td>' +
              '<td>' + esc(r.mentor) + '</td>' +
              '<td>' + esc(r.fee) + '</td>' +
              '<td>' + esc(r.start) + '</td>' +
              '<td>' + esc(r.finish) + '</td>' +
            '</tr>';
          }).join('') +
          '</tbody></table></div></section>';
      } else {
        // 旧格式（仅 grade + info）→ 原两列渲染
        gradeTable = '<section class="detail-sec"><h2>' + T('dGrades') + '</h2><div class="grade-table">' +
          c.gradeRows.map(function (r) {
            return '<div class="grade-row"><div class="grade-cell">' + esc(r.grade) + '</div><div class="grade-info">' + esc(r.info) + '</div></div>';
          }).join('') + '</div></section>';
      }
    }

    var outcomes = '';
    if (c.outcomes) {
      outcomes = '<section class="detail-sec"><h2>' + T('dOutcomes') + '</h2><ul class="outcomes">' +
        (c.outcomes[state.lang] || c.outcomes.zh).map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') +
        '</ul></section>';
    }

    /* Curriculum Overview 课程大纲（来源：各课程 Curriculum Overview 谷歌文档，见 data4/data5.js）
     * bare: true → 纯公告类内容，不带 "Curriculum Overview" 标题（如 MUN 集训营占位说明） */
    var ovSec = '';
    if (typeof COURSE_OVERVIEW_MAP !== 'undefined' && typeof COURSE_OVERVIEWS !== 'undefined' &&
        COURSE_OVERVIEW_MAP[id] && COURSE_OVERVIEWS[COURSE_OVERVIEW_MAP[id]]) {
      var ovData = COURSE_OVERVIEWS[COURSE_OVERVIEW_MAP[id]];
      var ovBlocks = ovData[state.lang] || ovData.en;
      ovSec = '<section class="detail-sec ov-sec">' +
        (ovData.bare ? '' : '<h2>' + T('dOverview') + '</h2>') +
        overviewBlocksHTML(ovBlocks) + '</section>';
    }

    /* 服务优势 / 服务流程（升学指导课程） */
    var advSec = '';
    if (c.serviceAdvantages) {
      advSec = '<section class="detail-sec"><h2>' + T('dAdv') + '</h2><ul class="outcomes adv-list">' +
        (c.serviceAdvantages[state.lang] || c.serviceAdvantages.zh).map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') +
        '</ul></section>';
    }
    var stepsSec = '';
    if (c.serviceSteps) {
      var steps = c.serviceSteps[state.lang] || c.serviceSteps.zh;
      stepsSec = '<section class="detail-sec"><h2>' + T('dSteps') + '</h2><div class="steps-grid">' +
        steps.map(function (s, i) {
          return '<div class="step"><span class="step-num">' + (i + 1 < 10 ? '0' : '') + (i + 1) + '</span><span class="step-text">' + esc(s) + '</span></div>';
        }).join('') + '</div></section>';
    }
    var noteSec = '';
    if (c.serviceNote) {
      noteSec = '<div class="service-note">🤝 ' + esc(L(c.serviceNote)) + '</div>';
    }
    // 富文本解析 desc：输出与 Curriculum Overview 相同的 ov-block 块状结构（隶属感一致）
    function parseDesc(raw) {
      var lines = raw.split('\n');
      var html = '';
      var inList = false, blockOpen = false;
      function closeList() { if (inList) { html += '</ul>'; inList = false; } }
      function closeBlock() { closeList(); if (blockOpen) { html += '</div>'; blockOpen = false; } }
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (!line) { closeBlock(); continue; }
        // 小标题行 → 开新块（与 ov-block 一致）
        // 规则：大写/中文开头 + 无冒号（Label 行另有分支）+ 不以句号结尾（允许 ?）+ 长度 ≤ 110 + 非列表
        if (line.length <= 110 && !line.includes(':') && !/[。.!]$/.test(line) && /^[A-Z\u4e00-\u9fff]/.test(line) && !line.includes('  ') && !/^[•\-*]/.test(line)) {
          closeBlock();
          html += '<div class="ov-block"><h3 class="ov-h">' + esc(line) + '</h3>';
          blockOpen = true;
          continue;
        }
        // 列表项
        if (line.indexOf('•') === 0 || /^[-*]\s/.test(line)) {
          if (!blockOpen) { html += '<div class="ov-block">'; blockOpen = true; }
          if (!inList) { html += '<ul class="ov-list">'; inList = true; }
          html += '<li>' + esc(line.replace(/^[•\-*]\s*/, '')) + '</li>';
          continue;
        }
        if (inList) { html += '</ul>'; inList = false; }
        // Label: 行（如 Organiser: xxx / Competition Date: xxx / Programme Aim: xxx）
        var lm = line.match(/^([A-Za-z][^:]{1,40}?):\s*(.*)$/);
        if (lm && line.length < 500) {
          if (!blockOpen) { html += '<div class="ov-block">'; blockOpen = true; }
          html += '<p class="ov-p"><strong>' + esc(lm[1]) + ':</strong> ' + esc(lm[2]) + '</p>';
          continue;
        }
        // 正文段落
        if (!blockOpen) { html += '<div class="ov-block">'; blockOpen = true; }
        html += '<p class="ov-p">' + esc(line) + '</p>';
      }
      closeBlock();
      return html;
    }
    var description = L(c.desc);
    var guideLink = c.guideUrl ? '<p><a href="' + esc(c.guideUrl) + '" target="_blank" rel="noopener noreferrer">' + T('courseGuide') + '</a></p>' : '';
    var descParas;
    if (guideLink && c.guideAfterFirstParagraph) {
      var paragraphs = description.split(/\n\s*\n/);
      descParas = parseDesc(paragraphs.shift()) + guideLink + parseDesc(paragraphs.join('\n\n'));
    } else {
      descParas = parseDesc(description);
    }
    if (c.introImage) {
      var imageAlt = c.introImageAlt ? L(c.introImageAlt) : T('dOverview') + ' · ' + L(c.name);
      descParas += '<img class="intro-illustration" src="' + esc(c.introImage) + '" alt="' + esc(imageAlt) + '" loading="lazy">';
    }
    if (!c.guideAfterFirstParagraph) descParas += guideLink;
    if (c.scheduleGroups) {
      var headers = ['courseNameCol', 'organiserCountryCol', 'gradeCol', 'examMonthCol', 'startCol', 'finishCol', 'weeksCol', 'hoursCol', 'dayCol', 'mentorCol', 'feeCol'];
      var scheduleRows = c.scheduleGroups.map(function (group) {
        return [L(c.scheduleName), L(c.organizer), group.grade, L(group.exam), L(c.start), L(c.finish),
          L(c.duration), L(c.hours), L(c.schedule) + ' ' + group.time, L(c.mentor), fmtPrice(c.price) + ' ' + T('thb')];
      });
      descParas = overviewBlocksHTML([{ h: T('dGrades'), table: { head: headers.map(T), rows: scheduleRows } }]) + descParas;
    }
    var introSec = (descParas || noteSec)
      ? ('<section class="detail-sec ov-sec"><h2>' + (c.introTitle ? esc(L(c.introTitle)) : (c.cat === 'competition' ? T('dIntroComp') : T('dIntro'))) + '</h2>' + descParas + noteSec + '</section>')
      : '';

    document.getElementById('detailRoot').innerHTML = '' +
      '<div class="detail-wrap">' +
        '<a class="back-link" href="#/">' + T('backToList') + '</a>' +
        (c.registrationClosed ? '<div class="archive-notice"><h2>' + T('archiveDetail') + '</h2><p>' + T('archiveDetailNote') + '</p></div>' : '') +
        '<div class="detail-hero' + (c.fullCover ? ' full-cover' : '') + '">' +
          '<img class="detail-cover" src="' + courseCover(c) + '" alt="' + esc(L(c.name)) + '">' +
          '<div class="detail-hero-text">' +
            '<span class="badge-cat">' + L(CATEGORIES[c.cat]) + '</span>' +
            '<h1>' + esc(L(c.name)) + '</h1>' +
            '<div class="detail-tags">' +
              '<span class="chip chip-green">' + (SUBJECTS[c.subject].icon) + ' ' + esc(L(SUBJECTS[c.subject].name)) + '</span>' +
              '<span class="chip chip-green">🎓 ' + esc(gradeText(c)) + '</span>' +
              '<span class="chip ' + (c.price == null ? 'chip-tbd' : 'chip-wheat') + '">' +
                (c.feeRange ? esc(L(c.feeRange)) : c.price != null ? fmtPrice(c.price) + ' ' + T('thb') : T(c.feeEnquiry ? 'feeEnquiry' : 'tbd')) + '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        gallery +
        '<div class="detail-grid">' +
          '<div class="detail-main">' +
            introSec +
            ovSec +
            outcomes +
            advSec +
            stepsSec +
          '</div>' +
          '<aside class="detail-aside"><div class="facts-card"><h2>' + T('dFacts') + '</h2>' + facts + '</div></aside>' +
        '</div>' +
        gradeTable +
      '</div>';

    window.scrollTo(0, 0);
  }

  /* ---------- 一对一课程定制页 ---------- */
  function renderCustom() {
    var progs = (CUSTOM_PAGE.programmes && (CUSTOM_PAGE.programmes[state.lang] || CUSTOM_PAGE.programmes.en)) || [];

    /* 项目大纲（Academic Tutoring & Subject Performance Programme.docx 内容，
       与课程详情页共用 COURSE_OVERVIEWS.tutoring 三语数据，见 data4.js） */
    var tutOv = (typeof COURSE_OVERVIEWS !== 'undefined' && COURSE_OVERVIEWS.tutoring) ? COURSE_OVERVIEWS.tutoring : null;
    var overviewHtml = '';
    if (tutOv) {
      var ovBlocks = tutOv[state.lang] || tutOv.en;
      overviewHtml = '<div class="custom-card custom-overview"><h2>' + T('dOverview') + '</h2>' +
        overviewBlocksHTML(ovBlocks) + '</div>';
    }

    var programmesHtml = '';
    if (progs.length) {
      programmesHtml = '<div class="custom-card custom-programmes">' +
        '<h2>' + esc(L(CUSTOM_PAGE.programmesTitle)) + '</h2>' +
        '<p class="custom-programmes-intro">' + esc(L(CUSTOM_PAGE.programmesIntro)) + '</p>' +
        progs.map(function (prog) {
          var infoRows = [
            ['Programme Aim', prog.aim],
            ['Focus', prog.focus]
          ].map(function (r) {
            return '<tr><th>' + esc(r[0]) + '</th><td>' + esc(r[1]).replace(/\n/g, '<br>') + '</td></tr>';
          }).join('');
          var subjRows = prog.subjects.map(function (s) {
            return '<tr><td class="subj-no">' + esc(s[0]) + '</td><td class="subj-name">' + esc(s[1]) + '</td><td class="subj-year">' + esc(s[2]) + '</td></tr>';
          }).join('');
          return '<div class="prog-block">' +
            '<div class="prog-head">' + esc(prog.name) + '</div>' +
            '<table class="prog-info-table"><tbody>' + infoRows + '</tbody></table>' +
            '<table class="prog-subj-table">' +
              '<thead><tr><th>#</th><th>Subject</th><th>Year</th></tr></thead>' +
              '<tbody>' + subjRows + '</tbody>' +
            '</table>' +
          '</div>';
        }).join('') +
      '</div>';
    }

    document.getElementById('customRoot').innerHTML = '' +
      '<div class="detail-wrap custom-wrap">' +
        '<a class="back-link" href="#/">' + T('backToList') + '</a>' +
        '<div class="custom-hero">' +
          '<h1>' + esc(L(CUSTOM_PAGE.title)) + '</h1>' +
          '<p class="custom-sub">' + esc(L(CUSTOM_PAGE.subtitle)) + '</p>' +
        '</div>' +
        overviewHtml +
        programmesHtml +
        '<button class="btn btn-wheat custom-signup" id="customSignupBtn">📝 ' + T('barSignup') + '</button>' +
      '</div>';
    document.getElementById('customSignupBtn').addEventListener('click', function () {
      window.open(CONFIG.googleFormUrl, '_blank');
    });
    window.scrollTo(0, 0);
  }

  /* ---------- 咨询弹窗（LINE + 微信 双二维码） ---------- */
  function openContactModal() {
    var m = document.getElementById('lineModal');
    m.classList.add('open');
    document.body.classList.add('modal-open');
  }
  function closeContactModal() {
    document.getElementById('lineModal').classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  /* ---------- 静态文案与语言切换 ---------- */
  function renderStatic() {
    document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : state.lang;
    document.title = T('siteTitle') + ' · ' + T('siteSub');
    var map = {
      siteTitle: 'siteTitle', schoolName: 'schoolName', siteSub: 'siteSub',
      heroTitle: 'heroTitle', heroSub: 'heroSub', heroTags: 'heroTags', heroCta: 'heroCta',
      heroLine: 'heroLine', heroCustom: 'heroCustom', navCourses: 'navCourses', navContact: 'navContact',
      modalTitle: 'modalTitle', modalCloseBtn: 'modalClose',
      footContact: 'footContact', footNote: 'footNote',
      barContact: 'barContact', barLine: 'barLine', barQr: 'barQr', barSignup: 'barSignup',
      barSignupNote: 'barSignupNote', modalLineLabel: 'modalLine', modalWechatLabel: 'modalWechat',
      modalEmailLabel: 'footContact'
    };
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.textContent = T(map[id]);
    });
    var footEmail = document.getElementById('footEmail');
    if (footEmail) { footEmail.textContent = CONFIG.email; footEmail.href = 'mailto:' + CONFIG.email; }
    var modalEmailAddr = document.getElementById('modalEmailAddr');
    if (modalEmailAddr) { modalEmailAddr.textContent = CONFIG.email; modalEmailAddr.href = 'mailto:' + CONFIG.email; }
    var mLineQr = document.getElementById('modalLineQr');
    if (mLineQr) mLineQr.src = CONFIG.lineQr;
    var mWechatQr = document.getElementById('modalWechatQr');
    if (mWechatQr) mWechatQr.src = CONFIG.wechatQr;
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.lang === state.lang);
    });
  }

  /* ---------- 路由 ---------- */
  function route() {
    closeContactModal();
    var h = location.hash || '#/';
    var listPage = document.getElementById('listPage');
    var detailPage = document.getElementById('detailPage');
    var customPage = document.getElementById('customPage');
    var bar = document.getElementById('bottomBar');
    var m = h.match(/^#\/course\/([\w-]+)/);
    listPage.classList.add('hidden');
    detailPage.classList.add('hidden');
    customPage.classList.add('hidden');
    if (m) {
      detailPage.classList.remove('hidden');
      bar.classList.remove('hidden');
      renderDetail(m[1]);
    } else if (h === '#/custom') {
      customPage.classList.remove('hidden');
      bar.classList.remove('hidden');
      setSignup(null);
      renderCustom();
    } else {
      bar.classList.add('hidden');
      state.signupUrl = '';
      listPage.classList.remove('hidden');
      renderList();
      if (state.archiveReturnId) {
        var card = document.querySelector('[data-archive-id="' + state.archiveReturnId + '"]');
        if (card) {
          card.focus({ preventScroll: true });
          card.scrollIntoView({ block: 'center', behavior: 'instant' });
        }
        state.archiveReturnId = '';
      }
    }
  }

  /* ---------- 初始化 ---------- */
  function init() {
    document.getElementById('archiveJump').addEventListener('click', function () {
      document.getElementById('archiveBox').scrollIntoView({ block: 'start' });
      document.getElementById('archiveHeading').focus({ preventScroll: true });
    });
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        state.lang = b.dataset.lang;
        localStorage.setItem('allas_lang', state.lang);
        renderStatic();
        route();
      });
    });

    document.getElementById('selSubject').addEventListener('change', function () { state.subject = this.value; renderList(); });
    document.getElementById('selGrade').addEventListener('change', function () { state.grade = this.value; renderList(); });
    document.getElementById('selTime').addEventListener('change', function () { state.time = this.value; renderList(); });
    document.getElementById('selPrice').addEventListener('change', function () { state.price = this.value; renderList(); });
    document.getElementById('searchInput').addEventListener('input', function () { state.q = this.value.trim(); renderList(); });
    document.getElementById('resetBtn').addEventListener('click', function () {
      state.cat = 'all'; state.subject = 'all'; state.grade = 'all'; state.time = 'all'; state.price = 'all'; state.q = '';
      document.getElementById('searchInput').value = '';
      renderList();
    });

    ['heroLineBtn', 'barQrBtn'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('click', openContactModal);
    });
    document.getElementById('heroCustomBtn').addEventListener('click', function () {
      location.hash = '#/custom';
    });
    document.getElementById('modalCloseBtn').addEventListener('click', closeContactModal);
    document.getElementById('lineModal').addEventListener('click', function (e) {
      if (e.target === this) closeContactModal();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeContactModal(); });

    document.getElementById('barSignupBtn').addEventListener('click', function () {
      if (!state.signupUrl) return;
      if (state.signupUrl.indexOf('mailto:') === 0) window.location.href = state.signupUrl;
      else window.open(state.signupUrl, '_blank', 'noopener');
    });

    window.addEventListener('hashchange', route);
    renderStatic();
    route();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
