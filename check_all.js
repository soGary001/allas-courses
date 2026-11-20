/* All A's 网站全量健康检查脚本（本地校验用，非站点文件） */
const fs = require('fs');
const vm = require('vm');

const ctx = {};
vm.createContext(ctx);
const files = ['js/data.js','js/data2.js','js/data3.js','js/data4.js','js/data5.js','js/i18n.js'];

let collected = '';
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  // 将顶层 const/let/var 声明改为挂载到 globalThis（仅处理行首声明）
  let modified = content.replace(/^(const|let|var)\s+([A-Za-z_$][\w$]*)\s*=/gm, 'globalThis.$2 =');
  collected += modified + '\n';
}
try {
  vm.runInContext(collected, ctx, { filename: 'combined' });
} catch (e) {
  console.log('EVAL ERROR:', e.message);
  process.exit(1);
}

// 收集课程对象（所有数组中的带 id 对象）
const COURSES = [];
const seen = {};
for (const k of Object.keys(ctx)) {
  const v = ctx[k];
  if (Array.isArray(v)) {
    for (const item of v) {
      if (item && typeof item === 'object' && item.id && !seen[item.id]) {
        seen[item.id] = true;
        COURSES.push(item);
      }
    }
  }
}

console.log('========== 课程清单 ==========');
console.log('课程总数:', COURSES.length);
console.log('ID:', COURSES.map(c => c.id).join(', '));

console.log('\n========== 报名链接覆盖 ==========');
const formUrls = ctx.FORM_URLS || {};
console.log('FORM_URLS 条目:', Object.keys(formUrls).length);
const missingForm = COURSES.filter(c => !formUrls[c.id]);
console.log('无专属链接(回退统一表单):', missingForm.length ? missingForm.map(c => c.id).join(', ') : '无');

console.log('\n========== 图片引用 ==========');
let imgRefs = [];
for (const c of COURSES) {
  if (c.imgs) imgRefs.push(...(Array.isArray(c.imgs) ? c.imgs : [c.imgs]));
  if (c.cover) imgRefs.push(c.cover);
}
if (ctx.CONFIG) {
  if (ctx.CONFIG.lineQr) imgRefs.push(ctx.CONFIG.lineQr);
  if (ctx.CONFIG.wechatQr) imgRefs.push(ctx.CONFIG.wechatQr);
}
const uniq = [...new Set(imgRefs)];
const missingImgs = uniq.filter(p => !fs.existsSync(p));
console.log('图片引用(去重):', uniq.length, '| 缺失:', missingImgs.length);
missingImgs.forEach(m => console.log('  MISSING:', m));

console.log('\n========== 三语完整性 ==========');
const langIssues = [];
for (const c of COURSES) {
  for (const f of ['name', 'summary']) {
    const v = c[f];
    if (v && typeof v === 'object') {
      for (const lang of ['zh', 'en', 'th']) {
        if (!v[lang]) langIssues.push(c.id + '.' + f + ' 缺 ' + lang);
      }
    }
  }
}
console.log('三语问题:', langIssues.length ? langIssues.join('; ') : '无');

console.log('\n========== 课程大纲映射 ==========');
const map = ctx.COURSE_OVERVIEW_MAP || {};
console.log('COURSE_OVERVIEW_MAP 覆盖课程数:', Object.keys(map).length);
const noOv = COURSES.filter(c => !map[c.id]);
console.log('未映射大纲的课程:', noOv.length ? noOv.map(c => c.id).join(', ') : '无');

console.log('\n========== 分类统计 ==========');
const cats = ctx.CATEGORIES || {};
const byCat = {};
for (const c of COURSES) {
  const cat = c.category || 'unknown';
  byCat[cat] = (byCat[cat] || 0) + 1;
}
console.log(JSON.stringify(byCat, null, 2));

console.log('\n✅ 检查完成');
