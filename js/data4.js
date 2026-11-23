/* =========================================================
 * All A's 课程数据 · Part 4 —— Curriculum Overview 课程大纲
 * 来源：All As Programmes 26-27-by Lynn.xlsx 各课程 "Curriculum Overview"
 *       谷歌文档全文（2026-08-06 抓取），中/泰文为对照翻译
 * 数据结构：COURSE_OVERVIEWS[setKey][lang] = blocks 数组
 *   block 类型：{tag} 标语 / {h,p} 段落 / {h,list} 列表 / {h,checks} 勾选列表
 *               {h,table:{head,rows}} 表格（单元格内 \n 换行）/ {h,note} 备注 / {quote} 结语
 * 课程 → 大纲集 的映射见 data5.js 末尾 COURSE_OVERVIEW_MAP
 * ========================================================= */

const COURSE_OVERVIEWS = {

  /* ========== 学术辅导（1对1）· 适用于全部 11 门辅导课 ========== */
  tutoring: {
    en: [
      { tag: 'Personalised Learning. Measurable Progress.' },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Programme Name', 'Academic Tutoring & Subject Performance Programme'],
        ['Target Students', 'Year 1 – Year 13'],
        ['Format', '1:1 Personalised Tutoring'],
        ['Focus', 'Subject support, academic improvement and exam preparation'],
        ['Curriculum Alignment', 'UK Curriculum (KS1–KS5), IGCSE, A-Level, AP, IB']
      ] } },
      { h: 'Programme Aim', p: 'This programme is designed to provide individualised academic support tailored to each student’s needs, with the goal of improving subject understanding, boosting confidence, and achieving measurable academic progress.' },
      { h: 'Key Features', list: [
        '1:1 personalised learning plans',
        'Alignment with school curriculum and exam boards',
        'Focus on weak areas and targeted improvement',
        'Regular feedback and progress tracking',
        'Flexible scheduling'
      ] },
      { h: 'Learning Outcomes', list: [
        'Improved subject understanding and academic performance',
        'Increased confidence in class and exams',
        'Stronger exam techniques (IGCSE / A-Level / AP / IB)',
        'Clear academic progress with measurable results'
      ] },
      { h: 'Why Choose This Programme', checks: [
        'Tailored support for each individual student',
        'Direct improvement in school performance',
        'Experienced tutors aligned with school curriculum',
        'Flexible and results-driven approach'
      ] },
      { quote: 'Targeted support, personalised learning, and real academic results' }
    ],
    zh: [
      { tag: '个性化学习，看得见的进步。' },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['项目名称', '学术辅导与学科表现提升项目（Academic Tutoring & Subject Performance Programme）'],
        ['适合学生', 'Y1 – Y13'],
        ['课程形式', '一对一个性化辅导'],
        ['课程重点', '学科支持、学业提升与考试备考'],
        ['课程体系', '英国课程（KS1–KS5）、IGCSE、A-Level、AP、IB']
      ] } },
      { h: '项目目标', p: '本项目旨在根据每位学生的需求提供个性化的学术支持，帮助学生加深学科理解、增强学习信心，并取得可衡量的学业进步。' },
      { h: '课程特色', list: [
        '一对一个性化学习计划',
        '与学校课程及考试局大纲紧密对齐',
        '聚焦薄弱环节，针对性提升',
        '定期反馈与进度跟踪',
        '时间安排灵活'
      ] },
      { h: '学习成果', list: [
        '学科理解与学业成绩显著提升',
        '课堂与考试中更加自信',
        '更强的考试技巧（IGCSE / A-Level / AP / IB）',
        '清晰可见、可衡量的学业进步'
      ] },
      { h: '为什么选择本项目', checks: [
        '为每位学生量身定制的支持',
        '直接提升校内学业表现',
        '熟悉学校课程的经验丰富导师',
        '灵活且以结果为导向的教学方式'
      ] },
      { quote: '针对性支持 · 个性化学习 · 真实的学业成果' }
    ],
    th: [
      { tag: 'การเรียนรู้เฉพาะบุคคล ความก้าวหน้าที่วัดผลได้' },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หัวข้อ', 'รายละเอียด'], rows: [
        ['ชื่อโปรแกรม', 'โปรแกรมติวเตอร์วิชาการและผลการเรียน (Academic Tutoring & Subject Performance Programme)'],
        ['กลุ่มนักเรียน', 'ปี 1 – ปี 13'],
        ['รูปแบบ', 'ติวเตอร์ตัวต่อตัวแบบเฉพาะบุคคล'],
        ['จุดเน้น', 'เสริมวิชาเรียน พัฒนาผลการเรียน และเตรียมสอบ'],
        ['หลักสูตรที่สอดคล้อง', 'หลักสูตรอังกฤษ (KS1–KS5), IGCSE, A-Level, AP, IB']
      ] } },
      { h: 'เป้าหมายของโปรแกรม', p: 'โปรแกรมนี้ออกแบบมาเพื่อให้การสนับสนุนทางวิชาการเฉพาะบุคคลตามความต้องการของนักเรียนแต่ละคน โดยมีเป้าหมายเพื่อพัฒนาความเข้าใจในรายวิชา เพิ่มความมั่นใจ และสร้างความก้าวหน้าทางการเรียนที่วัดผลได้' },
      { h: 'จุดเด่นของหลักสูตร', list: [
        'แผนการเรียนเฉพาะบุคคลแบบตัวต่อตัว',
        'สอดคล้องกับหลักสูตรโรงเรียนและคณะกรรมการสอบ',
        'มุ่งเน้นจุดอ่อนและพัฒนาอย่างตรงจุด',
        'มีการให้ feedback และติดตามความก้าวหน้าอย่างสม่ำเสมอ',
        'ตารางเรียนยืดหยุ่น'
      ] },
      { h: 'ผลการเรียนรู้', list: [
        'พัฒนาความเข้าใจในรายวิชาและผลการเรียน',
        'มั่นใจมากขึ้นในห้องเรียนและการสอบ',
        'เทคนิคการสอบที่แข็งแกร่งขึ้น (IGCSE / A-Level / AP / IB)',
        'ความก้าวหน้าทางการเรียนที่ชัดเจนและวัดผลได้'
      ] },
      { h: 'ทำไมต้องเลือกโปรแกรมนี้', checks: [
        'การสนับสนุนที่ออกแบบเฉพาะนักเรียนแต่ละคน',
        'พัฒนาผลการเรียนในโรงเรียนโดยตรง',
        'ครูผู้มีประสบการณ์ที่สอดคล้องกับหลักสูตรโรงเรียน',
        'แนวทางที่ยืดหยุ่นและมุ่งเน้นผลลัพธ์'
      ] },
      { quote: 'การสนับสนุนตรงจุด การเรียนรู้เฉพาะบุคคล และผลการเรียนที่เป็นรูปธรรม' }
    ]
  },

  /* ========== 竞赛备赛（1对1）· 适用于 bbo / usabo / econ-biz ========== */
  'comp-prep': {
    en: [
      { tag: 'Challenge Excellence. Achieve Distinction.' },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Programme Name', 'Academic Competition Preparation Programme'],
        ['Target Students', 'Year 2 – Year 13'],
        ['Format', 'Small group training'],
        ['Focus', 'Subject-specific competition training and high-level academic development'],
        ['Curriculum Alignment', 'UK Curriculum, IGCSE, A-Level, and international competition standards']
      ] } },
      { h: 'Programme Aim', p: 'This programme is designed to prepare students for subject-specific academic competitions, helping them develop advanced thinking skills, deepen subject knowledge, and achieve outstanding results in national and international contests.' },
      { h: 'Competition Focus', p: 'Students will be trained for participation in:', list: [
        'School-level competitions',
        'National competitions',
        'Regional (Asia-level) competitions',
        'International academic competitions'
      ] },
      { h: 'Learning Outcomes', list: [
        'Stronger performance in academic competitions',
        'Deeper subject mastery beyond school curriculum',
        'Increased confidence in tackling challenging questions',
        'Enhanced academic profile for university applications'
      ] },
      { h: 'Why Parents Choose This Programme', checks: [
        'Focused preparation for high-level competitions',
        'Targeted learning with personalised guidance',
        'Development of advanced academic and thinking skills',
        'Clear pathway to awards and recognition'
      ] },
      { quote: 'From strong students to competition winners' }
    ],
    zh: [
      { tag: '挑战卓越，成就非凡。' },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['项目名称', '学术竞赛备赛项目（Academic Competition Preparation Programme）'],
        ['适合学生', 'Y2 – Y13'],
        ['课程形式', '小班培训'],
        ['课程重点', '学科专项竞赛训练与高水平学术发展'],
        ['课程体系', '英国课程、IGCSE、A-Level 及国际竞赛标准']
      ] } },
      { h: '项目目标', p: '本项目旨在帮助学生备战学科专项学术竞赛，培养高阶思维能力、深化学科知识，并在国家级与国际赛事中取得优异成绩。' },
      { h: '竞赛方向', p: '学生将接受以下级别赛事的参赛训练：', list: [
        '校级竞赛',
        '国家级竞赛',
        '地区级（亚洲级别）竞赛',
        '国际学术竞赛'
      ] },
      { h: '学习成果', list: [
        '学术竞赛表现显著提升',
        '掌握超越校内课程的学科深度',
        '更有信心应对高难度问题',
        '为大学申请增添学术亮点'
      ] },
      { h: '家长为什么选择本项目', checks: [
        '聚焦高水平竞赛的定向备赛',
        '个性化指导的针对性学习',
        '培养高阶学术与思维能力',
        '通往奖项与荣誉的清晰路径'
      ] },
      { quote: '从优秀学生，到竞赛赢家。' }
    ],
    th: [
      { tag: 'ท้าทายความเป็นเลิศ สร้างความโดดเด่น' },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หัวข้อ', 'รายละเอียด'], rows: [
        ['ชื่อโปรแกรม', 'โปรแกรมเตรียมการแข่งขันวิชาการ (Academic Competition Preparation Programme)'],
        ['กลุ่มนักเรียน', 'ปี 2 – ปี 13'],
        ['รูปแบบ', 'การฝึกอบรมกลุ่มย่อย'],
        ['จุดเน้น', 'การฝึกซ้อมการแข่งขันเฉพาะวิชาและการพัฒนาวิชาการระดับสูง'],
        ['หลักสูตรที่สอดคล้อง', 'หลักสูตรอังกฤษ, IGCSE, A-Level และมาตรฐานการแข่งขันนานาชาติ']
      ] } },
      { h: 'เป้าหมายของโปรแกรม', p: 'โปรแกรมนี้ออกแบบมาเพื่อเตรียมนักเรียนสำหรับการแข่งขันวิชาการเฉพาะวิชา ช่วยพัฒนาทักษะการคิดขั้นสูง เจาะลึกความรู้ในรายวิชา และสร้างผลงานที่โดดเด่นในการแข่งขันระดับประเทศและนานาชาติ' },
      { h: 'ระดับการแข่งขัน', p: 'นักเรียนจะได้รับการฝึกซ้อมเพื่อเข้าร่วมการแข่งขันในระดับต่างๆ:', list: [
        'การแข่งขันระดับโรงเรียน',
        'การแข่งขันระดับประเทศ',
        'การแข่งขันระดับภูมิภาค (ระดับเอเชีย)',
        'การแข่งขันวิชาการระดับนานาชาติ'
      ] },
      { h: 'ผลการเรียนรู้', list: [
        'ผลงานการแข่งขันวิชาการที่แข็งแกร่งขึ้น',
        'เชี่ยวชาญรายวิชาลึกกว่าหลักสูตรโรงเรียน',
        'มั่นใจมากขึ้นในการรับมือโจทย์ท้าทาย',
        'เสริมประวัติทางวิชาการสำหรับการสมัครมหาวิทยาลัย'
      ] },
      { h: 'เหตุผลที่ผู้ปกครองเลือกโปรแกรมนี้', checks: [
        'การเตรียมตัวอย่างมุ่งมั่นสำหรับการแข่งขันระดับสูง',
        'การเรียนรู้ตรงจุดพร้อมคำแนะนำเฉพาะบุคคล',
        'การพัฒนาทักษะวิชาการและการคิดขั้นสูง',
        'เส้นทางที่ชัดเจนสู่รางวัลและการยอมรับ'
      ] },
      { quote: 'จากนักเรียนเก่ง สู่ผู้ชนะการแข่งขัน' }
    ]
  },
  'comp-prep-mathleague': {
    en: [
      { tag: 'Challenge Excellence. Achieve Distinction.' },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Programme Name', 'Academic Competition Preparation Programme'],
        ['Target Students', 'Y2–Y10'],
        ['Format', 'Small group training'],
        ['Focus', 'Subject-specific competition training and high-level academic development'],
        ['Curriculum Alignment', 'UK Curriculum, IGCSE, A-Level, and international competition standards']
      ] } },
      { h: 'Programme Aim', p: 'This programme is designed to prepare students for subject-specific academic competitions, helping them develop advanced thinking skills, deepen subject knowledge, and achieve outstanding results in national and international contests.' },
      { h: 'Competition Focus', p: 'Students will be trained for participation in:', list: [
        'School-level competitions',
        'National competitions',
        'Regional (Asia-level) competitions',
        'International academic competitions'
      ] },
      { h: 'Learning Outcomes', list: [
        'Stronger performance in academic competitions',
        'Deeper subject mastery beyond school curriculum',
        'Increased confidence in tackling challenging questions',
        'Enhanced academic profile for university applications'
      ] },
      { h: 'Why Parents Choose This Programme', checks: [
        'Focused preparation for high-level competitions',
        'Targeted learning with personalised guidance',
        'Development of advanced academic and thinking skills',
        'Clear pathway to awards and recognition'
      ] },
      { quote: 'From strong students to competition winners' }
    ],
    zh: [
      { tag: '挑战卓越，成就非凡。' },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['项目名称', '学术竞赛备赛项目（Academic Competition Preparation Programme）'],
        ['适合学生', 'Y2–Y10'],
        ['课程形式', '小班培训'],
        ['课程重点', '学科专项竞赛训练与高水平学术发展'],
        ['课程体系', '英国课程、IGCSE、A-Level 及国际竞赛标准']
      ] } },
      { h: '项目目标', p: '本项目旨在帮助学生备战学科专项学术竞赛，培养高阶思维能力、深化学科知识，并在国家级与国际赛事中取得优异成绩。' },
      { h: '竞赛方向', p: '学生将接受以下级别赛事的参赛训练：', list: [
        '校级竞赛',
        '国家级竞赛',
        '地区级（亚洲级别）竞赛',
        '国际学术竞赛'
      ] },
      { h: '学习成果', list: [
        '学术竞赛表现显著提升',
        '掌握超越校内课程的学科深度',
        '更有信心应对高难度问题',
        '为大学申请增添学术亮点'
      ] },
      { h: '家长为什么选择本项目', checks: [
        '聚焦高水平竞赛的定向备赛',
        '个性化指导的针对性学习',
        '培养高阶学术与思维能力',
        '通往奖项与荣誉的清晰路径'
      ] },
      { quote: '从优秀学生，到竞赛赢家。' }
    ],
    th: [
      { tag: 'ท้าทายความเป็นเลิศ สร้างความโดดเด่น' },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หัวข้อ', 'รายละเอียด'], rows: [
        ['ชื่อโปรแกรม', 'โปรแกรมเตรียมการแข่งขันวิชาการ (Academic Competition Preparation Programme)'],
        ['กลุ่มนักเรียน', 'Y2–Y10'],
        ['รูปแบบ', 'การฝึกอบรมกลุ่มย่อย'],
        ['จุดเน้น', 'การฝึกซ้อมการแข่งขันเฉพาะวิชาและการพัฒนาวิชาการระดับสูง'],
        ['หลักสูตรที่สอดคล้อง', 'หลักสูตรอังกฤษ, IGCSE, A-Level และมาตรฐานการแข่งขันนานาชาติ']
      ] } },
      { h: 'เป้าหมายของโปรแกรม', p: 'โปรแกรมนี้ออกแบบมาเพื่อเตรียมนักเรียนสำหรับการแข่งขันวิชาการเฉพาะวิชา ช่วยพัฒนาทักษะการคิดขั้นสูง เจาะลึกความรู้ในรายวิชา และสร้างผลงานที่โดดเด่นในการแข่งขันระดับประเทศและนานาชาติ' },
      { h: 'ระดับการแข่งขัน', p: 'นักเรียนจะได้รับการฝึกซ้อมเพื่อเข้าร่วมการแข่งขันในระดับต่างๆ:', list: [
        'การแข่งขันระดับโรงเรียน',
        'การแข่งขันระดับประเทศ',
        'การแข่งขันระดับภูมิภาค (ระดับเอเชีย)',
        'การแข่งขันวิชาการระดับนานาชาติ'
      ] },
      { h: 'ผลการเรียนรู้', list: [
        'ผลงานการแข่งขันวิชาการที่แข็งแกร่งขึ้น',
        'เชี่ยวชาญรายวิชาลึกกว่าหลักสูตรโรงเรียน',
        'มั่นใจมากขึ้นในการรับมือโจทย์ท้าทาย',
        'เสริมประวัติทางวิชาการสำหรับการสมัครมหาวิทยาลัย'
      ] },
      { h: 'เหตุผลที่ผู้ปกครองเลือกโปรแกรมนี้', checks: [
        'การเตรียมตัวอย่างมุ่งมั่นสำหรับการแข่งขันระดับสูง',
        'การเรียนรู้ตรงจุดพร้อมคำแนะนำเฉพาะบุคคล',
        'การพัฒนาทักษะวิชาการและการคิดขั้นสูง',
        'เส้นทางที่ชัดเจนสู่รางวัลและการยอมรับ'
      ] },
      { quote: 'จากนักเรียนเก่ง สู่ผู้ชนะการแข่งขัน' }
    ]
  },

  'comp-prep-imc': {
    en: [
      { tag: 'Challenge Excellence. Achieve Distinction.' },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Programme Name', 'Academic Competition Preparation Programme'],
        ['Target Students', 'Y9/10/11'],
        ['Format', 'Small group training'],
        ['Focus', 'Subject-specific competition training and high-level academic development'],
        ['Curriculum Alignment', 'UK Curriculum, IGCSE, A-Level, and international competition standards']
      ] } },
      { h: 'Programme Aim', p: 'This programme is designed to prepare students for subject-specific academic competitions, helping them develop advanced thinking skills, deepen subject knowledge, and achieve outstanding results in national and international contests.' },
      { h: 'Competition Focus', p: 'Students will be trained for participation in:', list: [
        'School-level competitions',
        'National competitions',
        'Regional (Asia-level) competitions',
        'International academic competitions'
      ] },
      { h: 'Learning Outcomes', list: [
        'Stronger performance in academic competitions',
        'Deeper subject mastery beyond school curriculum',
        'Increased confidence in tackling challenging questions',
        'Enhanced academic profile for university applications'
      ] },
      { h: 'Why Parents Choose This Programme', checks: [
        'Focused preparation for high-level competitions',
        'Targeted learning with personalised guidance',
        'Development of advanced academic and thinking skills',
        'Clear pathway to awards and recognition'
      ] },
      { quote: 'From strong students to competition winners' }
    ],
    zh: [
      { tag: '挑战卓越，成就非凡。' },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['项目名称', '学术竞赛备赛项目（Academic Competition Preparation Programme）'],
        ['适合学生', 'Y9/10/11'],
        ['课程形式', '小班培训'],
        ['课程重点', '学科专项竞赛训练与高水平学术发展'],
        ['课程体系', '英国课程、IGCSE、A-Level 及国际竞赛标准']
      ] } },
      { h: '项目目标', p: '本项目旨在帮助学生备战学科专项学术竞赛，培养高阶思维能力、深化学科知识，并在国家级与国际赛事中取得优异成绩。' },
      { h: '竞赛方向', p: '学生将接受以下级别赛事的参赛训练：', list: [
        '校级竞赛',
        '国家级竞赛',
        '地区级（亚洲级别）竞赛',
        '国际学术竞赛'
      ] },
      { h: '学习成果', list: [
        '学术竞赛表现显著提升',
        '掌握超越校内课程的学科深度',
        '更有信心应对高难度问题',
        '为大学申请增添学术亮点'
      ] },
      { h: '家长为什么选择本项目', checks: [
        '聚焦高水平竞赛的定向备赛',
        '个性化指导的针对性学习',
        '培养高阶学术与思维能力',
        '通往奖项与荣誉的清晰路径'
      ] },
      { quote: '从优秀学生，到竞赛赢家。' }
    ],
    th: [
      { tag: 'ท้าทายความเป็นเลิศ สร้างความโดดเด่น' },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หัวข้อ', 'รายละเอียด'], rows: [
        ['ชื่อโปรแกรม', 'โปรแกรมเตรียมการแข่งขันวิชาการ (Academic Competition Preparation Programme)'],
        ['กลุ่มนักเรียน', 'Y9/10/11'],
        ['รูปแบบ', 'การฝึกอบรมกลุ่มย่อย'],
        ['จุดเน้น', 'การฝึกซ้อมการแข่งขันเฉพาะวิชาและการพัฒนาวิชาการระดับสูง'],
        ['หลักสูตรที่สอดคล้อง', 'หลักสูตรอังกฤษ, IGCSE, A-Level และมาตรฐานการแข่งขันนานาชาติ']
      ] } },
      { h: 'เป้าหมายของโปรแกรม', p: 'โปรแกรมนี้ออกแบบมาเพื่อเตรียมนักเรียนสำหรับการแข่งขันวิชาการเฉพาะวิชา ช่วยพัฒนาทักษะการคิดขั้นสูง เจาะลึกความรู้ในรายวิชา และสร้างผลงานที่โดดเด่นในการแข่งขันระดับประเทศและนานาชาติ' },
      { h: 'ระดับการแข่งขัน', p: 'นักเรียนจะได้รับการฝึกซ้อมเพื่อเข้าร่วมการแข่งขันในระดับต่างๆ:', list: [
        'การแข่งขันระดับโรงเรียน',
        'การแข่งขันระดับประเทศ',
        'การแข่งขันระดับภูมิภาค (ระดับเอเชีย)',
        'การแข่งขันวิชาการระดับนานาชาติ'
      ] },
      { h: 'ผลการเรียนรู้', list: [
        'ผลงานการแข่งขันวิชาการที่แข็งแกร่งขึ้น',
        'เชี่ยวชาญรายวิชาลึกกว่าหลักสูตรโรงเรียน',
        'มั่นใจมากขึ้นในการรับมือโจทย์ท้าทาย',
        'เสริมประวัติทางวิชาการสำหรับการสมัครมหาวิทยาลัย'
      ] },
      { h: 'เหตุผลที่ผู้ปกครองเลือกโปรแกรมนี้', checks: [
        'การเตรียมตัวอย่างมุ่งมั่นสำหรับการแข่งขันระดับสูง',
        'การเรียนรู้ตรงจุดพร้อมคำแนะนำเฉพาะบุคคล',
        'การพัฒนาทักษะวิชาการและการคิดขั้นสูง',
        'เส้นทางที่ชัดเจนสู่รางวัลและการยอมรับ'
      ] },
      { quote: 'จากนักเรียนเก่ง สู่ผู้ชนะการแข่งขัน' }
    ]
  },

  'comp-prep-jmc': {
    en: [
      { tag: 'Challenge Excellence. Achieve Distinction.' },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Programme Name', 'Academic Competition Preparation Programme'],
        ['Target Students', 'Y7–Y8'],
        ['Format', 'Small group training'],
        ['Focus', 'Subject-specific competition training and high-level academic development'],
        ['Curriculum Alignment', 'UK Curriculum, IGCSE, A-Level, and international competition standards']
      ] } },
      { h: 'Programme Aim', p: 'This programme is designed to prepare students for subject-specific academic competitions, helping them develop advanced thinking skills, deepen subject knowledge, and achieve outstanding results in national and international contests.' },
      { h: 'Competition Focus', p: 'Students will be trained for participation in:', list: [
        'School-level competitions',
        'National competitions',
        'Regional (Asia-level) competitions',
        'International academic competitions'
      ] },
      { h: 'Learning Outcomes', list: [
        'Stronger performance in academic competitions',
        'Deeper subject mastery beyond school curriculum',
        'Increased confidence in tackling challenging questions',
        'Enhanced academic profile for university applications'
      ] },
      { h: 'Why Parents Choose This Programme', checks: [
        'Focused preparation for high-level competitions',
        'Targeted learning with personalised guidance',
        'Development of advanced academic and thinking skills',
        'Clear pathway to awards and recognition'
      ] },
      { quote: 'From strong students to competition winners' }
    ],
    zh: [
      { tag: '挑战卓越，成就非凡。' },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['项目名称', '学术竞赛备赛项目（Academic Competition Preparation Programme）'],
        ['适合学生', 'Y7–Y8'],
        ['课程形式', '小班培训'],
        ['课程重点', '学科专项竞赛训练与高水平学术发展'],
        ['课程体系', '英国课程、IGCSE、A-Level 及国际竞赛标准']
      ] } },
      { h: '项目目标', p: '本项目旨在帮助学生备战学科专项学术竞赛，培养高阶思维能力、深化学科知识，并在国家级与国际赛事中取得优异成绩。' },
      { h: '竞赛方向', p: '学生将接受以下级别赛事的参赛训练：', list: [
        '校级竞赛',
        '国家级竞赛',
        '地区级（亚洲级别）竞赛',
        '国际学术竞赛'
      ] },
      { h: '学习成果', list: [
        '学术竞赛表现显著提升',
        '掌握超越校内课程的学科深度',
        '更有信心应对高难度问题',
        '为大学申请增添学术亮点'
      ] },
      { h: '家长为什么选择本项目', checks: [
        '聚焦高水平竞赛的定向备赛',
        '个性化指导的针对性学习',
        '培养高阶学术与思维能力',
        '通往奖项与荣誉的清晰路径'
      ] },
      { quote: '从优秀学生，到竞赛赢家。' }
    ],
    th: [
      { tag: 'ท้าทายความเป็นเลิศ สร้างความโดดเด่น' },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หัวข้อ', 'รายละเอียด'], rows: [
        ['ชื่อโปรแกรม', 'โปรแกรมเตรียมการแข่งขันวิชาการ (Academic Competition Preparation Programme)'],
        ['กลุ่มนักเรียน', 'Y7–Y8'],
        ['รูปแบบ', 'การฝึกอบรมกลุ่มย่อย'],
        ['จุดเน้น', 'การฝึกซ้อมการแข่งขันเฉพาะวิชาและการพัฒนาวิชาการระดับสูง'],
        ['หลักสูตรที่สอดคล้อง', 'หลักสูตรอังกฤษ, IGCSE, A-Level และมาตรฐานการแข่งขันนานาชาติ']
      ] } },
      { h: 'เป้าหมายของโปรแกรม', p: 'โปรแกรมนี้ออกแบบมาเพื่อเตรียมนักเรียนสำหรับการแข่งขันวิชาการเฉพาะวิชา ช่วยพัฒนาทักษะการคิดขั้นสูง เจาะลึกความรู้ในรายวิชา และสร้างผลงานที่โดดเด่นในการแข่งขันระดับประเทศและนานาชาติ' },
      { h: 'ระดับการแข่งขัน', p: 'นักเรียนจะได้รับการฝึกซ้อมเพื่อเข้าร่วมการแข่งขันในระดับต่างๆ:', list: [
        'การแข่งขันระดับโรงเรียน',
        'การแข่งขันระดับประเทศ',
        'การแข่งขันระดับภูมิภาค (ระดับเอเชีย)',
        'การแข่งขันวิชาการระดับนานาชาติ'
      ] },
      { h: 'ผลการเรียนรู้', list: [
        'ผลงานการแข่งขันวิชาการที่แข็งแกร่งขึ้น',
        'เชี่ยวชาญรายวิชาลึกกว่าหลักสูตรโรงเรียน',
        'มั่นใจมากขึ้นในการรับมือโจทย์ท้าทาย',
        'เสริมประวัติทางวิชาการสำหรับการสมัครมหาวิทยาลัย'
      ] },
      { h: 'เหตุผลที่ผู้ปกครองเลือกโปรแกรมนี้', checks: [
        'การเตรียมตัวอย่างมุ่งมั่นสำหรับการแข่งขันระดับสูง',
        'การเรียนรู้ตรงจุดพร้อมคำแนะนำเฉพาะบุคคล',
        'การพัฒนาทักษะวิชาการและการคิดขั้นสูง',
        'เส้นทางที่ชัดเจนสู่รางวัลและการยอมรับ'
      ] },
      { quote: 'จากนักเรียนเก่ง สู่ผู้ชนะการแข่งขัน' }
    ]
  },

  'comp-prep-amc8': {
    en: [
      { tag: 'Challenge Excellence. Achieve Distinction.' },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Programme Name', 'Academic Competition Preparation Programme'],
        ['Target Students', 'Y6/7/8/9'],
        ['Format', 'Small group training'],
        ['Focus', 'Subject-specific competition training and high-level academic development'],
        ['Curriculum Alignment', 'UK Curriculum, IGCSE, A-Level, and international competition standards']
      ] } },
      { h: 'Programme Aim', p: 'This programme is designed to prepare students for subject-specific academic competitions, helping them develop advanced thinking skills, deepen subject knowledge, and achieve outstanding results in national and international contests.' },
      { h: 'Competition Focus', p: 'Students will be trained for participation in:', list: [
        'School-level competitions',
        'National competitions',
        'Regional (Asia-level) competitions',
        'International academic competitions'
      ] },
      { h: 'Learning Outcomes', list: [
        'Stronger performance in academic competitions',
        'Deeper subject mastery beyond school curriculum',
        'Increased confidence in tackling challenging questions',
        'Enhanced academic profile for university applications'
      ] },
      { h: 'Why Parents Choose This Programme', checks: [
        'Focused preparation for high-level competitions',
        'Targeted learning with personalised guidance',
        'Development of advanced academic and thinking skills',
        'Clear pathway to awards and recognition'
      ] },
      { quote: 'From strong students to competition winners' }
    ],
    zh: [
      { tag: '挑战卓越，成就非凡。' },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['项目名称', '学术竞赛备赛项目（Academic Competition Preparation Programme）'],
        ['适合学生', 'Y6/7/8/9'],
        ['课程形式', '小班培训'],
        ['课程重点', '学科专项竞赛训练与高水平学术发展'],
        ['课程体系', '英国课程、IGCSE、A-Level 及国际竞赛标准']
      ] } },
      { h: '项目目标', p: '本项目旨在帮助学生备战学科专项学术竞赛，培养高阶思维能力、深化学科知识，并在国家级与国际赛事中取得优异成绩。' },
      { h: '竞赛方向', p: '学生将接受以下级别赛事的参赛训练：', list: [
        '校级竞赛',
        '国家级竞赛',
        '地区级（亚洲级别）竞赛',
        '国际学术竞赛'
      ] },
      { h: '学习成果', list: [
        '学术竞赛表现显著提升',
        '掌握超越校内课程的学科深度',
        '更有信心应对高难度问题',
        '为大学申请增添学术亮点'
      ] },
      { h: '家长为什么选择本项目', checks: [
        '聚焦高水平竞赛的定向备赛',
        '个性化指导的针对性学习',
        '培养高阶学术与思维能力',
        '通往奖项与荣誉的清晰路径'
      ] },
      { quote: '从优秀学生，到竞赛赢家。' }
    ],
    th: [
      { tag: 'ท้าทายความเป็นเลิศ สร้างความโดดเด่น' },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หัวข้อ', 'รายละเอียด'], rows: [
        ['ชื่อโปรแกรม', 'โปรแกรมเตรียมการแข่งขันวิชาการ (Academic Competition Preparation Programme)'],
        ['กลุ่มนักเรียน', 'Y6/7/8/9'],
        ['รูปแบบ', 'การฝึกอบรมกลุ่มย่อย'],
        ['จุดเน้น', 'การฝึกซ้อมการแข่งขันเฉพาะวิชาและการพัฒนาวิชาการระดับสูง'],
        ['หลักสูตรที่สอดคล้อง', 'หลักสูตรอังกฤษ, IGCSE, A-Level และมาตรฐานการแข่งขันนานาชาติ']
      ] } },
      { h: 'เป้าหมายของโปรแกรม', p: 'โปรแกรมนี้ออกแบบมาเพื่อเตรียมนักเรียนสำหรับการแข่งขันวิชาการเฉพาะวิชา ช่วยพัฒนาทักษะการคิดขั้นสูง เจาะลึกความรู้ในรายวิชา และสร้างผลงานที่โดดเด่นในการแข่งขันระดับประเทศและนานาชาติ' },
      { h: 'ระดับการแข่งขัน', p: 'นักเรียนจะได้รับการฝึกซ้อมเพื่อเข้าร่วมการแข่งขันในระดับต่างๆ:', list: [
        'การแข่งขันระดับโรงเรียน',
        'การแข่งขันระดับประเทศ',
        'การแข่งขันระดับภูมิภาค (ระดับเอเชีย)',
        'การแข่งขันวิชาการระดับนานาชาติ'
      ] },
      { h: 'ผลการเรียนรู้', list: [
        'ผลงานการแข่งขันวิชาการที่แข็งแกร่งขึ้น',
        'เชี่ยวชาญรายวิชาลึกกว่าหลักสูตรโรงเรียน',
        'มั่นใจมากขึ้นในการรับมือโจทย์ท้าทาย',
        'เสริมประวัติทางวิชาการสำหรับการสมัครมหาวิทยาลัย'
      ] },
      { h: 'เหตุผลที่ผู้ปกครองเลือกโปรแกรมนี้', checks: [
        'การเตรียมตัวอย่างมุ่งมั่นสำหรับการแข่งขันระดับสูง',
        'การเรียนรู้ตรงจุดพร้อมคำแนะนำเฉพาะบุคคล',
        'การพัฒนาทักษะวิชาการและการคิดขั้นสูง',
        'เส้นทางที่ชัดเจนสู่รางวัลและการยอมรับ'
      ] },
      { quote: 'จากนักเรียนเก่ง สู่ผู้ชนะการแข่งขัน' }
    ]
  },

  'comp-prep-amc1012': {
    en: [
      { tag: 'Challenge Excellence. Achieve Distinction.' },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Programme Name', 'Academic Competition Preparation Programme'],
        ['Target Students', 'Y9 and above'],
        ['Format', 'Small group training'],
        ['Focus', 'Subject-specific competition training and high-level academic development'],
        ['Curriculum Alignment', 'UK Curriculum, IGCSE, A-Level, and international competition standards']
      ] } },
      { h: 'Programme Aim', p: 'This programme is designed to prepare students for subject-specific academic competitions, helping them develop advanced thinking skills, deepen subject knowledge, and achieve outstanding results in national and international contests.' },
      { h: 'Competition Focus', p: 'Students will be trained for participation in:', list: [
        'School-level competitions',
        'National competitions',
        'Regional (Asia-level) competitions',
        'International academic competitions'
      ] },
      { h: 'Learning Outcomes', list: [
        'Stronger performance in academic competitions',
        'Deeper subject mastery beyond school curriculum',
        'Increased confidence in tackling challenging questions',
        'Enhanced academic profile for university applications'
      ] },
      { h: 'Why Parents Choose This Programme', checks: [
        'Focused preparation for high-level competitions',
        'Targeted learning with personalised guidance',
        'Development of advanced academic and thinking skills',
        'Clear pathway to awards and recognition'
      ] },
      { quote: 'From strong students to competition winners' }
    ],
    zh: [
      { tag: '挑战卓越，成就非凡。' },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['项目名称', '学术竞赛备赛项目（Academic Competition Preparation Programme）'],
        ['适合学生', 'Y9 及以上'],
        ['课程形式', '小班培训'],
        ['课程重点', '学科专项竞赛训练与高水平学术发展'],
        ['课程体系', '英国课程、IGCSE、A-Level 及国际竞赛标准']
      ] } },
      { h: '项目目标', p: '本项目旨在帮助学生备战学科专项学术竞赛，培养高阶思维能力、深化学科知识，并在国家级与国际赛事中取得优异成绩。' },
      { h: '竞赛方向', p: '学生将接受以下级别赛事的参赛训练：', list: [
        '校级竞赛',
        '国家级竞赛',
        '地区级（亚洲级别）竞赛',
        '国际学术竞赛'
      ] },
      { h: '学习成果', list: [
        '学术竞赛表现显著提升',
        '掌握超越校内课程的学科深度',
        '更有信心应对高难度问题',
        '为大学申请增添学术亮点'
      ] },
      { h: '家长为什么选择本项目', checks: [
        '聚焦高水平竞赛的定向备赛',
        '个性化指导的针对性学习',
        '培养高阶学术与思维能力',
        '通往奖项与荣誉的清晰路径'
      ] },
      { quote: '从优秀学生，到竞赛赢家。' }
    ],
    th: [
      { tag: 'ท้าทายความเป็นเลิศ สร้างความโดดเด่น' },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หัวข้อ', 'รายละเอียด'], rows: [
        ['ชื่อโปรแกรม', 'โปรแกรมเตรียมการแข่งขันวิชาการ (Academic Competition Preparation Programme)'],
        ['กลุ่มนักเรียน', 'ปี 9 ขึ้นไป'],
        ['รูปแบบ', 'การฝึกอบรมกลุ่มย่อย'],
        ['จุดเน้น', 'การฝึกซ้อมการแข่งขันเฉพาะวิชาและการพัฒนาวิชาการระดับสูง'],
        ['หลักสูตรที่สอดคล้อง', 'หลักสูตรอังกฤษ, IGCSE, A-Level และมาตรฐานการแข่งขันนานาชาติ']
      ] } },
      { h: 'เป้าหมายของโปรแกรม', p: 'โปรแกรมนี้ออกแบบมาเพื่อเตรียมนักเรียนสำหรับการแข่งขันวิชาการเฉพาะวิชา ช่วยพัฒนาทักษะการคิดขั้นสูง เจาะลึกความรู้ในรายวิชา และสร้างผลงานที่โดดเด่นในการแข่งขันระดับประเทศและนานาชาติ' },
      { h: 'ระดับการแข่งขัน', p: 'นักเรียนจะได้รับการฝึกซ้อมเพื่อเข้าร่วมการแข่งขันในระดับต่างๆ:', list: [
        'การแข่งขันระดับโรงเรียน',
        'การแข่งขันระดับประเทศ',
        'การแข่งขันระดับภูมิภาค (ระดับเอเชีย)',
        'การแข่งขันวิชาการระดับนานาชาติ'
      ] },
      { h: 'ผลการเรียนรู้', list: [
        'ผลงานการแข่งขันวิชาการที่แข็งแกร่งขึ้น',
        'เชี่ยวชาญรายวิชาลึกกว่าหลักสูตรโรงเรียน',
        'มั่นใจมากขึ้นในการรับมือโจทย์ท้าทาย',
        'เสริมประวัติทางวิชาการสำหรับการสมัครมหาวิทยาลัย'
      ] },
      { h: 'เหตุผลที่ผู้ปกครองเลือกโปรแกรมนี้', checks: [
        'การเตรียมตัวอย่างมุ่งมั่นสำหรับการแข่งขันระดับสูง',
        'การเรียนรู้ตรงจุดพร้อมคำแนะนำเฉพาะบุคคล',
        'การพัฒนาทักษะวิชาการและการคิดขั้นสูง',
        'เส้นทางที่ชัดเจนสู่รางวัลและการยอมรับ'
      ] },
      { quote: 'จากนักเรียนเก่ง สู่ผู้ชนะการแข่งขัน' }
    ]
  },



  /* ========== NSL 美国国家科学联盟 ========== */
  nsl: {
    en: [
      { tag: 'Inspire Curiosity. Build Scientific Thinking.' },
      { h: 'Programme Aim', p: 'The NSL programme is designed as an all-ages STEM learning pathway to support students across the K–12 system, helping them build a strong foundation for upper KS3 and IGCSE Science.' },
      { h: 'Curriculum Structure ① Core Science Knowledge', p: 'Students develop a broad understanding across key scientific disciplines:', list: [
        'Physics', 'Chemistry', 'Biology', 'Geology', 'Earth Science', 'History of Science', 'Mathematics'
      ], note: 'Focus on building conceptual understanding and connecting topics across subjects.' },
      { h: '② Applied Learning & Experiments', list: [
        'Hands-on practical experiments',
        'Real-world scientific applications',
        'Observation and data collection'
      ], note: 'Encourages students to learn by doing and develop scientific enquiry skills.' },
      { h: '③ In-Class Quizzes & Problem Solving', list: [
        'Regular quizzes to reinforce learning',
        'Competition-style questions',
        'Logical and analytical problem-solving tasks'
      ], note: 'Builds confidence in tackling unfamiliar questions.' },
      { h: '④ Interactive Lesson Activities', list: [
        'Group discussions',
        'Challenge-based learning',
        'STEM problem-solving tasks'
      ], note: 'Keeps lessons engaging and develops collaboration skills.' },
      { h: 'Competition Integration', p: 'Students may choose to participate in the National Science League (NSL) competition (held in April 2027). This allows students to:', list: [
        'Apply what they have learned',
        'Experience international-level challenges',
        'Gain recognition for their achievements'
      ] },
      { h: 'Learning Outcomes', list: [
        'Stronger foundation in science subjects',
        'Improved confidence in academic problem-solving',
        'Increased interest in STEM fields',
        'Preparation for future competitions and IGCSE pathways'
      ] },
      { h: 'Progression Pathway', p: 'NSL supports progression into:', list: [
        'IGCSE / A-Level / IB Science',
        'Other higher level Physics / Chemistry / Biology related competitions',
        'Can be useful for university applications in Y12 and Y13'
      ] }
    ],
    zh: [
      { tag: '点燃好奇心，培养科学思维。' },
      { h: '项目目标', p: 'NSL 项目是一条面向全年龄段的 STEM 学习路径，支持 K–12 各学段的学生，帮助他们为高年级 KS3 及 IGCSE 科学课程打下坚实基础。' },
      { h: '课程结构 ① 核心科学知识', p: '学生将在多个核心科学学科中建立广泛的理解：', list: [
        '物理', '化学', '生物', '地质学', '地球科学', '科学史', '数学'
      ], note: '重点在于建立概念性理解，并将跨学科知识相互联系。' },
      { h: '② 应用学习与实验', list: [
        '动手实践实验',
        '真实世界中的科学应用',
        '观察与数据收集'
      ], note: '鼓励学生“做中学”，培养科学探究能力。' },
      { h: '③ 课堂测验与问题解决', list: [
        '定期测验巩固学习成果',
        '竞赛风格题目',
        '逻辑与分析性解题任务'
      ], note: '建立应对陌生题型的信心。' },
      { h: '④ 互动课堂活动', list: [
        '小组讨论',
        '挑战式学习',
        'STEM 问题解决任务'
      ], note: '让课堂保持吸引力，同时培养协作能力。' },
      { h: '竞赛衔接', p: '学生可选择参加美国国家科学联盟（NSL）竞赛（2027 年 4 月举行）。这将让学生能够：', list: [
        '学以致用，应用所学知识',
        '体验国际级别的学术挑战',
        '为自己的成就赢得认可'
      ] },
      { h: '学习成果', list: [
        '更扎实的科学学科基础',
        '学术解题信心显著提升',
        '对 STEM 领域兴趣增强',
        '为未来竞赛与 IGCSE 路径做好准备'
      ] },
      { h: '进阶路径', p: 'NSL 支持学生进阶至：', list: [
        'IGCSE / A-Level / IB 科学课程',
        '其他更高水平的物理 / 化学 / 生物相关竞赛',
        '对 Y12–Y13 的大学申请亦有帮助'
      ] }
    ],
    th: [
      { tag: 'จุดประกายความอยากรู้ สร้างความคิดทางวิทยาศาสตร์' },
      { h: 'เป้าหมายของโปรแกรม', p: 'โปรแกรม NSL เป็นเส้นทางการเรียนรู้ STEM สำหรับทุกช่วงวัย รองรับนักเรียนตั้งแต่ระดับ K–12 ช่วยสร้างพื้นฐานที่แข็งแกร่งสำหรับวิทยาศาสตร์ระดับ KS3 ตอนปลายและ IGCSE' },
      { h: 'โครงสร้างหลักสูตร ① ความรู้วิทยาศาสตร์หลัก', p: 'นักเรียนจะพัฒนาความเข้าใจที่กว้างขวางในสาขาวิทยาศาสตร์สำคัญ:', list: [
        'ฟิสิกส์', 'เคมี', 'ชีววิทยา', 'ธรณีวิทยา', 'วิทยาศาสตร์โลก', 'ประวัติศาสตร์วิทยาศาสตร์', 'คณิตศาสตร์'
      ], note: 'มุ่งเน้นการสร้างความเข้าใจเชิงแนวคิดและเชื่อมโยงหัวข้อข้ามวิชา' },
      { h: '② การเรียนรู้เชิงประยุกต์และการทดลอง', list: [
        'การทดลองปฏิบัติจริง',
        'การประยุกต์ใช้วิทยาศาสตร์ในโลกจริง',
        'การสังเกตและเก็บรวบรวมข้อมูล'
      ], note: 'ส่งเสริมให้นักเรียนเรียนรู้ผ่านการลงมือทำและพัฒนาทักษะการสืบเสาะทางวิทยาศาสตร์' },
      { h: '③ แบบทดสอบในชั้นเรียนและการแก้ปัญหา', list: [
        'แบบทดสอบสม่ำเสมอเพื่อเสริมการเรียนรู้',
        'โจทย์สไตล์การแข่งขัน',
        'งานแก้ปัญหาเชิงตรรกะและการวิเคราะห์'
      ], note: 'สร้างความมั่นใจในการรับมือโจทย์ที่ไม่คุ้นเคย' },
      { h: '④ กิจกรรมเชิงโต้ตอบในชั้นเรียน', list: [
        'อภิปรายกลุ่ม',
        'การเรียนรู้แบบท้าทาย',
        'งานแก้ปัญหา STEM'
      ], note: 'ทำให้บทเรียนสนุกและพัฒนาทักษะการทำงานร่วมกัน' },
      { h: 'การเชื่อมสู่การแข่งขัน', p: 'นักเรียนสามารถเลือกเข้าร่วมการแข่งขัน National Science League (NSL) (จัดในเดือนเมษายน 2027) ซึ่งช่วยให้นักเรียน:', list: [
        'นำสิ่งที่เรียนมาประยุกต์ใช้',
        'สัมผัสความท้าทายระดับนานาชาติ',
        'ได้รับการยอมรับจากผลงานของตน'
      ] },
      { h: 'ผลการเรียนรู้', list: [
        'พื้นฐานวิทยาศาสตร์ที่แข็งแกร่งขึ้น',
        'ความมั่นใจในการแก้ปัญหาทางวิชาการดีขึ้น',
        'ความสนใจในสาขา STEM เพิ่มขึ้น',
        'เตรียมพร้อมสำหรับการแข่งขันและเส้นทาง IGCSE ในอนาคต'
      ] },
      { h: 'เส้นทางต่อยอด', p: 'NSL รองรับการต่อยอดสู่:', list: [
        'วิทยาศาสตร์ IGCSE / A-Level / IB',
        'การแข่งขันฟิสิกส์ / เคมี / ชีววิทยาระดับสูงอื่นๆ',
        'เป็นประโยชน์สำหรับการสมัครมหาวิทยาลัยในปี 12 และ 13'
      ] }
    ]
  },

  /* ========== JPC 英国少年物理挑战赛 ========== */
  jpc: {
    en: [
      { tag: 'Think Deeper. Solve Smarter. Compete Stronger.' },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Programme Name', 'Physics Excellence Programme'],
        ['Target Students', 'Year 7 – Year 10'],
        ['Programme Type', 'Physics Enrichment + Competition Preparation'],
        ['Organiser (Competition)', 'British Physics Olympiad (BPhO)'],
        ['Country', 'United Kingdom'],
        ['Academic Level', 'KS3 → Early IGCSE bridging']
      ] } },
      { h: 'Programme Aim', p: 'The Physics Excellence Programme is designed to introduce students to problem-solving in Physics, developing logical thinking, analytical skills, and scientific reasoning. It supports students in strengthening their academic performance and building a solid foundation for IGCSE and A-Level Physics, enabling them to approach more advanced concepts with confidence. In addition, the programme offers structured preparation for students who are interested in academic competitions, with the opportunity to participate in the Junior Physics Challenge (JPC).' },
      { h: 'Curriculum Highlights · Core Topics', list: [
        'Forces & Motion',
        'Energy',
        'Electricity',
        'Waves',
        'Astronomy'
      ] },
      { h: 'Learning Approach', list: [
        'Concept-focused teaching beyond textbook learning',
        'Problem-solving strategies for unfamiliar questions',
        'Competition-style practice questions',
        'Guided discussion and reasoning'
      ] },
      { h: '🏆 Competition Integration', p: 'Students will be prepared to participate in the Junior Physics Challenge (JPC), part of the UK physics competition pathway. The competition provides:', list: [
        'Exposure to UK academic standards',
        'Experience with non-routine problem-solving',
        'Recognition of student achievement'
      ] },
      { h: 'Learning Outcomes', list: [
        'Stronger understanding of core Physics concepts',
        'Increased confidence in tackling challenging questions',
        'Preparation for higher-level physics competitions',
        'Solid foundation for IGCSE / A-Level Physics'
      ] },
      { h: 'Why study physics?', checks: [
        'Builds strong thinking skills early',
        'Bridges KS3 to IGCSE Physics',
        'Prepares students for competitive academic environments',
        'Enhances academic profile for future pathways'
      ] },
      { quote: 'Not just learning Physics — learning how to think like a physicist' }
    ],
    zh: [
      { tag: '更深地思考，更巧地解题，更强地竞赛。' },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['项目名称', '物理卓越课程'],
        ['适合学生', 'Y7 – Y10'],
        ['项目类型', '物理拓展 + 竞赛备赛'],
        ['赛事主办方', '英国物理奥林匹克（BPhO）'],
        ['国家', '英国'],
        ['学术水平', 'KS3 衔接 IGCSE 早期阶段']
      ] } },
      { h: '项目目标', p: '本课程旨在引导学生进入物理问题解决的世界，培养逻辑思维、分析能力与科学推理能力，帮助学生巩固学业表现，为 IGCSE 与 A-Level 物理打下坚实基础，从而自信地接触更高阶的概念。此外，项目为有兴趣参加学术竞赛的学生提供系统化备赛训练，学生将有机会参加少年物理挑战赛（JPC）。' },
      { h: '课程亮点 · 核心主题', list: [
        '力与运动（Forces & Motion）',
        '能量（Energy）',
        '电学（Electricity）',
        '波（Waves）',
        '天文学（Astronomy）'
      ] },
      { h: '学习方式', list: [
        '超越课本的概念导向教学',
        '应对陌生题型的解题策略',
        '竞赛风格练习题',
        '引导式讨论与推理训练'
      ] },
      { h: '🏆 竞赛衔接', p: '学生将为参加少年物理挑战赛（JPC）做好充分准备——该赛事是英国物理竞赛体系的一部分。竞赛将为学生带来：', list: [
        '接触英国学术标准',
        '非常规问题解决的经验',
        '对学生成就的权威认可'
      ] },
      { h: '学习成果', list: [
        '更深入理解核心物理概念',
        '更有信心应对高难度问题',
        '为更高水平的物理竞赛做好准备',
        '为 IGCSE / A-Level 物理打下坚实基础'
      ] },
      { h: '课程特色', checks: [
        '尽早培养强大的思维能力',
        '衔接 KS3 与 IGCSE 物理',
        '为竞争性学术环境做好准备',
        '为未来发展路径增添学术亮点'
      ] },
      { quote: '不只是学习物理——而是学会像物理学家一样思考' }
    ],
    th: [
      { tag: 'คิดลึกกว่า แก้โจทย์ชาญกว่า แข่งขันแข็งแกร่งกว่า' },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หัวข้อ', 'รายละเอียด'], rows: [
        ['ชื่อโปรแกรม', 'หลักสูตรฟิสิกส์สู่ความเป็นเลิศ'],
        ['กลุ่มนักเรียน', 'ปี 7 – ปี 10'],
        ['ประเภทโปรแกรม', 'เสริมฟิสิกส์ + เตรียมการแข่งขัน'],
        ['ผู้จัดการแข่งขัน', 'British Physics Olympiad (BPhO)'],
        ['ประเทศ', 'สหราชอาณาจักร'],
        ['ระดับวิชาการ', 'เชื่อม KS3 สู่ IGCSE ช่วงต้น']
      ] } },
      { h: 'เป้าหมายของโปรแกรม', p: 'หลักสูตรนี้ออกแบบมาเพื่อแนะนำนักเรียนสู่การแก้ปัญหาทางฟิสิกส์ พัฒนาตรรกะ ทักษะการวิเคราะห์ และการให้เหตุผลทางวิทยาศาสตร์ ช่วยเสริมผลการเรียนและสร้างพื้นฐานที่มั่นคงสำหรับฟิสิกส์ IGCSE และ A-Level ให้นักเรียนเข้าหาแนวคิดขั้นสูงด้วยความมั่นใจ นอกจากนี้ยังมีการเตรียมความพร้อมอย่างเป็นระบบสำหรับผู้ที่สนใจการแข่งขันวิชาการ พร้อมโอกาสเข้าร่วม Junior Physics Challenge (JPC)' },
      { h: 'ไฮไลต์หลักสูตร · หัวข้อหลัก', list: [
        'แรงและการเคลื่อนที่ (Forces & Motion)',
        'พลังงาน (Energy)',
        'ไฟฟ้า (Electricity)',
        'คลื่น (Waves)',
        'ดาราศาสตร์ (Astronomy)'
      ] },
      { h: 'แนวทางการเรียน', list: [
        'การสอนที่เน้นแนวคิด เหนือกว่าการเรียนจากตำรา',
        'กลยุทธ์การแก้โจทย์ที่ไม่คุ้นเคย',
        'แบบฝึกหัดสไตล์การแข่งขัน',
        'การอภิปรายและให้เหตุผลแบบมีคำแนะนำ'
      ] },
      { h: '🏆 การเชื่อมสู่การแข่งขัน', p: 'นักเรียนจะได้รับการเตรียมพร้อมเพื่อเข้าร่วม Junior Physics Challenge (JPC) ซึ่งเป็นส่วนหนึ่งของเส้นทางการแข่งขันฟิสิกส์ของสหราชอาณาจักร การแข่งขันนี้มอบ:', list: [
        'การสัมผัสมาตรฐานวิชาการของสหราชอาณาจักร',
        'ประสบการณ์การแก้ปัญหาที่ไม่เป็นไปตามแบบ',
        'การยอมรับผลงานของนักเรียน'
      ] },
      { h: 'ผลการเรียนรู้', list: [
        'เข้าใจแนวคิดฟิสิกส์หลักลึกซึ้งยิ่งขึ้น',
        'มั่นใจมากขึ้นในการรับมือโจทย์ท้าทาย',
        'เตรียมพร้อมสำหรับการแข่งขันฟิสิกส์ระดับสูง',
        'พื้นฐานที่มั่นคงสำหรับฟิสิกส์ IGCSE / A-Level'
      ] },
      { h: 'จุดเด่นของหลักสูตร', checks: [
        'สร้างทักษะการคิดที่แข็งแกร่งตั้งแต่เนิ่นๆ',
        'เชื่อมโยง KS3 สู่ฟิสิกส์ IGCSE',
        'เตรียมนักเรียนสำหรับสภาพแวดล้อมการแข่งขันทางวิชาการ',
        'เสริมประวัติทางวิชาการสำหรับเส้นทางในอนาคต'
      ] },
      { quote: 'ไม่ใช่แค่เรียนฟิสิกส์ แต่เรียนรู้วิธีคิดแบบนักฟิสิกส์' }
    ]
  }
};
