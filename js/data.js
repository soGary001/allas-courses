/* =========================================================
 * All A's · 兰纳国际学校 Academic Programmes 2026–2027
 * 课程数据（来源：All Programmes 2026-2027 Course Guide）
 * 报名链接说明：CONFIG.googleFormUrl 为统一报名表单（学校提供，
 * 2026-08-07）；无专属链接的课程与一对一定制页均回退到此表单
 * ========================================================= */

const CONFIG = {
  contactName: 'LYNN',
  lineId: '0659392782',
  lineQr: 'assets/img/line-qr.jpg',
  wechatQr: 'assets/img/wechat-qr.jpg',
  lineUrl: 'https://line.me/R/ti/p/0659392782',
  googleFormUrl: 'https://docs.google.com/forms/d/1gwmq2JUI8W-Leq0ypHR_BlT3PJJGzkbd1X_SIhcLJ3g/edit',  // 统一报名表单（无专属链接课程的回退）
  email: 'allas@lannaist.ac.th'
};

/* =========================================================
 * 课程专属报名链接（来源：All As Programmes 26-27-by Lynn.xlsx
 * 各子表 "Register here" 列，2026-08-05 提取；
 * 2026-08-07 由学校统一指定学术辅导 11 门使用同一表单链接）
 * 详情页【我要报名】优先使用此处链接；未列出的课程回退 CONFIG.googleFormUrl
 * ========================================================= */
const FORM_URLS = {
  // 学术辅导（11 门 · 学校统一指定同一表单）
  'eng-rw':    'https://docs.google.com/forms/d/1gwmq2JUI8W-Leq0ypHR_BlT3PJJGzkbd1X_SIhcLJ3g/edit',
  'math-tut':  'https://docs.google.com/forms/d/1gwmq2JUI8W-Leq0ypHR_BlT3PJJGzkbd1X_SIhcLJ3g/edit',
  'sci-tut':   'https://docs.google.com/forms/d/1gwmq2JUI8W-Leq0ypHR_BlT3PJJGzkbd1X_SIhcLJ3g/edit',
  'chem-tut':  'https://docs.google.com/forms/d/1gwmq2JUI8W-Leq0ypHR_BlT3PJJGzkbd1X_SIhcLJ3g/edit',
  'bio-tut':   'https://docs.google.com/forms/d/1gwmq2JUI8W-Leq0ypHR_BlT3PJJGzkbd1X_SIhcLJ3g/edit',
  'phys-tut':  'https://docs.google.com/forms/d/1gwmq2JUI8W-Leq0ypHR_BlT3PJJGzkbd1X_SIhcLJ3g/edit',
  'cs-tut':    'https://docs.google.com/forms/d/1gwmq2JUI8W-Leq0ypHR_BlT3PJJGzkbd1X_SIhcLJ3g/edit',
  'hist-tut':  'https://docs.google.com/forms/d/1gwmq2JUI8W-Leq0ypHR_BlT3PJJGzkbd1X_SIhcLJ3g/edit',
  'geo-tut':   'https://docs.google.com/forms/d/1gwmq2JUI8W-Leq0ypHR_BlT3PJJGzkbd1X_SIhcLJ3g/edit',
  'soc-tut':   'https://docs.google.com/forms/d/1gwmq2JUI8W-Leq0ypHR_BlT3PJJGzkbd1X_SIhcLJ3g/edit',
  'psy-tut':   'https://docs.google.com/forms/d/1gwmq2JUI8W-Leq0ypHR_BlT3PJJGzkbd1X_SIhcLJ3g/edit',
  // 数学竞赛
  'amc1012':    'https://docs.google.com/forms/d/e/1FAIpQLScWx95YroR73qxpZOSr0iWNyci_smztqq1R38pr_bjFszAscg/viewform?usp=header',
  'amc8':       'https://docs.google.com/forms/d/e/1FAIpQLScklTUoQ2ZYq5l6MRhRsFdJba3HFd-C8Dq9TU2hsqVxXOwUmg/viewform?usp=header',
  'mathleague': 'https://docs.google.com/forms/d/e/1FAIpQLSdWoQqmA7L6CULa4ckfTfYGe0MRnrJU0w8UdmAn9vZrkf4Eag/viewform?usp=header',
  'imc':        'https://docs.google.com/forms/d/e/1FAIpQLSeCvPgMS12duJuYyE1deoO9JFt5DalHwbKv5EF3WvtQUk1v-A/viewform?usp=header',
  'jmc':        'https://docs.google.com/forms/d/e/1FAIpQLScjCmWg_CNUpmAiKPdW_5gErP5g81-J-czF2mIevEGzvMwmuA/viewform?usp=header',
  // 科学 / 物理 / 化学 / 生物竞赛
  'nsl':        'https://docs.google.com/forms/d/e/1FAIpQLScVkOyYy2E-O30zf1vybUZXy1jOO6uDhhhhnXvt877njXHUoQ/viewform?usp=header',
  'jpc':        'https://docs.google.com/forms/d/e/1FAIpQLSfcrMbnLn3227aS9cMQnKNAgkIIKR-STflw-kdsASj9Ii81uw/viewform?usp=header',
  'c3l6':       'https://docs.google.com/forms/d/e/1FAIpQLSfngbPINPf3rLVA2aPiCczuuxFJuv2ld7twEWroWhpRGabowg/viewform?usp=header',
  'icq':        'https://docs.google.com/forms/d/e/1FAIpQLSfngbPINPf3rLVA2aPiCczuuxFJuv2ld7twEWroWhpRGabowg/viewform?usp=header',
  'bbo':        'https://docs.google.com/forms/d/1eGzbiWuql0HGbi9o4wznSEnjK1fSIqZbSetforDkXq4/edit?ts=6a672913',
  // 医学项目（Medical Exploration / Medical pathway 共用一张表）
  'future-doctor':   'https://docs.google.com/forms/d/e/1FAIpQLSdxHlVWfdKyua7QANVUEnFw_tEG6PFKyvevKOJ_-j4NkgqUCA/viewform?usp=header',
  'medical-pathway': 'https://docs.google.com/forms/d/e/1FAIpQLSdxHlVWfdKyua7QANVUEnFw_tEG6PFKyvevKOJ_-j4NkgqUCA/viewform?usp=header',
  // 演讲辩论（Public Speaking Excellence Programme）
  'debate-intro': 'https://docs.google.com/forms/d/e/1FAIpQLScOWmdcaUqBu837J_9SrvYW8vSdSjXtL5erVdvO9kHmtWYXtQ/viewform?usp=header',
  'debate-comp':  'https://docs.google.com/forms/d/e/1FAIpQLScOWmdcaUqBu837J_9SrvYW8vSdSjXtL5erVdvO9kHmtWYXtQ/viewform?usp=header',
  // MUN 十月集训营（用户指定专属表单，2026-08-19）
  'mun-intro': 'https://docs.google.com/forms/d/11CX_0t5umsAepBBGXYl94lgve0WzM3Q-FBiAtGWKpIA/edit',
  'mun-comp':  'https://docs.google.com/forms/d/e/1FAIpQLScKjXPNaHcND1tnBK6ZEaJwD5gutxlaGNP0QJh-xTVg-1ra_A/viewform?usp=header',
  // 大学升学规划（用户指定专属报名表单，2026-08-19）
  'mentorship':   'https://docs.google.com/forms/d/e/1FAIpQLSdDwy3bY-I7BbfYA8IkkQcA5BKGbfjFeBt57OfihvJtisIHmw/viewform?usp=header'
};

/* 科目元数据：图标 + SVG 封面配色（森林绿 / 麦穗黄系） */
const SUBJECTS = {
  english:    { icon: '📖', c1: '#1f4d2e', c2: '#3a7d4d', name: { zh: '英语', en: 'English', th: 'ภาษาอังกฤษ' } },
  math:       { icon: '🔢', c1: '#173d24', c2: '#2e6b40', name: { zh: '数学', en: 'Mathematics', th: 'คณิตศาสตร์' } },
  science:    { icon: '🔬', c1: '#2e6b40', c2: '#5c9a6a', name: { zh: '科学', en: 'Science', th: 'วิทยาศาสตร์' } },
  chemistry:  { icon: '🧪', c1: '#0f5132', c2: '#2e8b57', name: { zh: '化学', en: 'Chemistry', th: 'เคมี' } },
  biology:    { icon: '🧬', c1: '#2f7a3e', c2: '#6aa84f', name: { zh: '生物', en: 'Biology', th: 'ชีววิทยา' } },
  physics:    { icon: '⚛️', c1: '#245c37', c2: '#4c8c5c', name: { zh: '物理', en: 'Physics', th: 'ฟิสิกส์' } },
  cs:         { icon: '💻', c1: '#1b3a2a', c2: '#3d6b4f', name: { zh: '计算机科学', en: 'Computer Science', th: 'วิทยาการคอมพิวเตอร์' } },
  history:    { icon: '🏛️', c1: '#5c4a1e', c2: '#8a7340', name: { zh: '历史', en: 'History', th: 'ประวัติศาสตร์' } },
  geography:  { icon: '🌍', c1: '#276a4c', c2: '#4f9d7a', name: { zh: '地理', en: 'Geography', th: 'ภูมิศาสตร์' } },
  sociology:  { icon: '👥', c1: '#3f5d3a', c2: '#6b8f5e', name: { zh: '社会学', en: 'Sociology', th: 'สังคมวิทยา' } },
  psychology: { icon: '🧠', c1: '#4a3f66', c2: '#6e5f8f', name: { zh: '心理学', en: 'Psychology', th: 'จิตวิทยา' } },
  econ:       { icon: '📈', c1: '#8a6d1f', c2: '#c99a2c', name: { zh: '经济与商务', en: 'Economics & Business', th: 'เศรษฐศาสตร์และธุรกิจ' } },
  speaking:   { icon: '🎤', c1: '#7a5c14', c2: '#d9a93b', name: { zh: '演讲 · 辩论 · MUN', en: 'Public Speaking & MUN', th: 'การพูด โต้วาที และ MUN' } },
  medicine:   { icon: '🩺', c1: '#14532d', c2: '#3f7a54', name: { zh: '医学方向', en: 'Medicine', th: 'เส้นทางการแพทย์' } },
  mentorship: { icon: '🎓', c1: '#2d4a22', c2: '#5c7a3a', name: { zh: '升学指导', en: 'University Mentorship', th: 'แนะแนวมหาวิทยาลัย' } }
};

/* 分类 Tab */
const CATEGORIES = {
  tutoring:    { zh: '学术辅导', en: 'Academic Tutoring', th: 'ติวเตอร์วิชาการ' },
  competition: { zh: '学科竞赛备赛', en: 'Competition Preparation', th: 'เตรียมการแข่งขัน' },
  speaking:    { zh: '演讲辩论与 MUN', en: 'Public Speaking & MUN', th: 'การพูดและ MUN' },
  medicine:    { zh: '医学方向', en: 'Medicine', th: 'การแพทย์' },
  mentorship:  { zh: '大学升学指导', en: 'University Mentorship', th: 'แนะแนวมหาวิทยาลัย' }
};

/* 一对一辅导通用字段 */
const TUT_FORMAT = { zh: '一对一个性化辅导', en: '1-on-1 personalised tutoring', th: 'ติวเตอร์ตัวต่อตัวแบบเฉพาะบุคคล' };

const COURSES = [
  /* ============ Part 1 学术辅导（时间与价格：待定） ============ */
  {
    id: 'eng-rw', cat: 'tutoring', subject: 'english',
    name: { zh: '英语阅读与写作', en: 'English Reading and Writing', th: 'การอ่านและเขียนภาษาอังกฤษ' },
    grades: 'Y1–Y13', gmin: 1, gmax: 13,
    curriculum: 'UK (KS1–KS5) • IGCSE • A-Level • AP • IB',
    format: TUT_FORMAT, startMonth: null, price: null,
    imgs: ['assets/img/eng-rw.jpg'],
    summary: {
      zh: '贯穿全学段的读写进阶课程，从自然拼读、流利阅读到 IGCSE / A-Level / IB 文学分析与考试技巧。',
      en: 'A progressive literacy and literature programme spanning the full school journey, from phonics to IGCSE, A-Level and IB literary analysis.',
      th: 'หลักสูตรการอ่านและเขียนแบบก้าวหน้าครอบคลุมทุกระดับชั้น ตั้งแต่โฟนิกส์จนถึงการวิเคราะห์วรรณกรรม IGCSE, A-Level และ IB'
    },
        desc: {
      zh: '课程目标：本课程旨在为每位学生提供量身定制的个性化学术支持，帮助提升学科理解、增强自信，并取得可衡量的学业进步。课程重点：学科支持、学业提升与备考辅导，覆盖英国课程（KS1–KS5）、IGCSE、A-Level / AP / IB。',
      en: 'Programme Aim: This programme is designed to provide individualised academic support tailored to each student’s needs, with the goal of improving subject understanding, boosting confidence, and achieving measurable academic progress. Focus: Subject support, academic improvement, and exam preparation. UK Curriculum (KS1–KS5), IGCSE, A-Level / AP / IB.',
      th: 'เป้าหมายโปรแกรม: โปรแกรมนี้ออกแบบมาเพื่อให้การสนับสนุนทางวิชาการแบบเฉพาะบุคคลตามความต้องการของนักเรียนแต่ละคน โดยมีเป้าหมายเพื่อพัฒนาความเข้าใจในวิชา เพิ่มความมั่นใจ และสร้างความก้าวหน้าทางการเรียนที่วัดผลได้ จุดเน้น: การสนับสนุนวิชา การพัฒนาผลการเรียน และการเตรียมสอบ ครอบคลุมหลักสูตร UK (KS1–KS5), IGCSE, A-Level / AP / IB'
    },
    outcomes: {
      zh: ['系统提升阅读理解与学术、创意写作能力', '掌握 IGCSE / A-Level / IB 文学分析与考试技巧', '覆盖 Y1–Y13 全学段的清晰进阶路径'],
      en: ['Progressive mastery of reading comprehension and academic & creative writing', 'Literary analysis and exam technique aligned to IGCSE, A-Level and IB objectives', 'A clear pathway across the whole school journey (Y1–Y13)'],
      th: ['พัฒนาการอ่านจับใจความและการเขียนเชิงวิชาการอย่างก้าวหน้า', 'เชี่ยวชาญการวิเคราะห์วรรณกรรมและเทคนิคการสอบ IGCSE, A-Level และ IB', 'เส้นทางการเรียนชัดเจนครอบคลุม Y1–Y13']
    }
  },
  {
    id: 'math-tut', cat: 'tutoring', subject: 'math',
    name: { zh: '数学', en: 'Mathematics', th: 'คณิตศาสตร์' },
    grades: 'Y1–Y13', gmin: 1, gmax: 13,
    curriculum: 'UK (KS1–KS5) • IGCSE • A-Level • AP • IB',
    format: TUT_FORMAT, startMonth: null, price: null,
    imgs: ['assets/img/math-tut.jpg'],
    summary: {
      zh: '从基础算术到高等微积分的结构化数学课程，覆盖 IGCSE、A-Level（纯数/力学/统计）与 IB（AA/AI）。',
      en: 'A structured mathematics programme from foundational numeracy to advanced calculus, covering IGCSE, A-Level and IB (AA/AI).',
      th: 'หลักสูตรคณิตศาสตร์มีโครงสร้างตั้งแต่การคำนวณพื้นฐานถึงแคลคูลัสขั้นสูง ครอบคลุม IGCSE, A-Level และ IB (AA/AI)'
    },
        desc: {
      zh: '课程目标：本课程旨在为每位学生提供量身定制的个性化学术支持，帮助提升学科理解、增强自信，并取得可衡量的学业进步。课程重点：学科支持、学业提升与备考辅导，覆盖英国课程（KS1–KS5）、IGCSE、A-Level / AP / IB。',
      en: 'Programme Aim: This programme is designed to provide individualised academic support tailored to each student’s needs, with the goal of improving subject understanding, boosting confidence, and achieving measurable academic progress. Focus: Subject support, academic improvement, and exam preparation. UK Curriculum (KS1–KS5), IGCSE, A-Level / AP / IB.',
      th: 'เป้าหมายโปรแกรม: โปรแกรมนี้ออกแบบมาเพื่อให้การสนับสนุนทางวิชาการแบบเฉพาะบุคคลตามความต้องการของนักเรียนแต่ละคน โดยมีเป้าหมายเพื่อพัฒนาความเข้าใจในวิชา เพิ่มความมั่นใจ และสร้างความก้าวหน้าทางการเรียนที่วัดผลได้ จุดเน้น: การสนับสนุนวิชา การพัฒนาผลการเรียน และการเตรียมสอบ ครอบคลุมหลักสูตร UK (KS1–KS5), IGCSE, A-Level / AP / IB'
    },
    outcomes: {
      zh: ['扎实的解题能力与数学推理', '覆盖 IGCSE、A-Level 与 IB 各路径考试要点', '个性化进度，针对薄弱环节强化'],
      en: ['Strong problem-solving skills and mathematical reasoning', 'Exam readiness across IGCSE, A-Level and IB (AA/AI) pathways', 'Personalised pacing targeting each student’s weak areas'],
      th: ['ทักษะการแก้ปัญหาและการให้เหตุผลทางคณิตศาสตร์อย่างแข็งแกร่ง', 'พร้อมสอบทุกเส้นทาง IGCSE, A-Level และ IB (AA/AI)', 'ปรับจังหวะการเรียนเฉพาะบุคคลตามจุดที่ต้องเสริม']
    }
  },
  {
    id: 'sci-tut', cat: 'tutoring', subject: 'science',
    name: { zh: '综合科学', en: 'Science', th: 'วิทยาศาสตร์ทั่วไป' },
    grades: 'Y2–Y9', gmin: 2, gmax: 9,
    curriculum: 'UK (KS1–KS3)',
    format: TUT_FORMAT, startMonth: null, price: null,
    imgs: ['assets/img/sci-tut.jpg'],
    summary: {
      zh: '在 IGCSE 分科之前打牢物理、化学、生物三大科学基础，并嵌入实验技能训练。',
      en: 'Builds foundational knowledge across the three core sciences before IGCSE specialisation, with laboratory skills embedded throughout.',
      th: 'สร้างพื้นฐานวิทยาศาสตร์ทั้งสามสาขาก่อนแยกวิชาระดับ IGCSE พร้อมฝึกทักษะห้องปฏิบัติการตลอดหลักสูตร'
    },
        desc: {
      zh: '课程目标：本课程旨在为每位学生提供量身定制的个性化学术支持，帮助提升学科理解、增强自信，并取得可衡量的学业进步。课程重点：学科支持、学业提升与备考辅导，覆盖英国课程（KS1–KS5）、IGCSE、A-Level / AP / IB。',
      en: 'Programme Aim: This programme is designed to provide individualised academic support tailored to each student’s needs, with the goal of improving subject understanding, boosting confidence, and achieving measurable academic progress. Focus: Subject support, academic improvement, and exam preparation. UK Curriculum (KS1–KS5), IGCSE, A-Level / AP / IB.',
      th: 'เป้าหมายโปรแกรม: โปรแกรมนี้ออกแบบมาเพื่อให้การสนับสนุนทางวิชาการแบบเฉพาะบุคคลตามความต้องการของนักเรียนแต่ละคน โดยมีเป้าหมายเพื่อพัฒนาความเข้าใจในวิชา เพิ่มความมั่นใจ และสร้างความก้าวหน้าทางการเรียนที่วัดผลได้ จุดเน้น: การสนับสนุนวิชา การพัฒนาผลการเรียน และการเตรียมสอบ ครอบคลุมหลักสูตร UK (KS1–KS5), IGCSE, A-Level / AP / IB'
    },
    outcomes: {
      zh: ['扎实的科学探究与实验技能', '理化生三科核心概念词汇', '顺利衔接 IGCSE 科学课程'],
      en: ['A solid foundation in scientific enquiry and practical skills', 'Core vocabulary across physics, chemistry and biology', 'Readiness for IGCSE Science courses'],
      th: ['พื้นฐานการสืบเสาะทางวิทยาศาสตร์และทักษะปฏิบัติการที่มั่นคง', 'คำศัพท์หลักครบทั้งฟิสิกส์ เคมี และชีววิทยา', 'พร้อมเข้าสู่หลักสูตรวิทยาศาสตร์ IGCSE']
    }
  },
  {
    id: 'chem-tut', cat: 'tutoring', subject: 'chemistry',
    name: { zh: '化学（IGCSE / A-Level）', en: 'Chemistry — IGCSE / A-Level', th: 'เคมี — IGCSE / A-Level' },
    imgs: ['assets/img/chem-tut.jpg'],
    grades: 'Y7–Y13', gmin: 7, gmax: 13,
    curriculum: 'IGCSE • A-Level • IB',
    format: TUT_FORMAT, startMonth: null, price: null,
    summary: {
      zh: '覆盖 IGCSE（CIE 0620 / Edexcel）与 A-Level（CIE 9701 / AQA / Edexcel）化学全体系，含 IB 化学衔接。',
      en: 'Covers IGCSE Chemistry (CIE 0620 / Edexcel) and A-Level Chemistry (CIE 9701 / AQA / Edexcel), with IB Chemistry alignment.',
      th: 'ครอบคลุมเคมี IGCSE (CIE 0620 / Edexcel) และ A-Level (CIE 9701 / AQA / Edexcel) พร้อมสอดคล้อง IB Chemistry'
    },
        desc: {
      zh: '课程目标：本课程旨在为每位学生提供量身定制的个性化学术支持，帮助提升学科理解、增强自信，并取得可衡量的学业进步。课程重点：学科支持、学业提升与备考辅导，覆盖英国课程（KS1–KS5）、IGCSE、A-Level / AP / IB。',
      en: 'Programme Aim: This programme is designed to provide individualised academic support tailored to each student’s needs, with the goal of improving subject understanding, boosting confidence, and achieving measurable academic progress. Focus: Subject support, academic improvement, and exam preparation. UK Curriculum (KS1–KS5), IGCSE, A-Level / AP / IB.',
      th: 'เป้าหมายโปรแกรม: โปรแกรมนี้ออกแบบมาเพื่อให้การสนับสนุนทางวิชาการแบบเฉพาะบุคคลตามความต้องการของนักเรียนแต่ละคน โดยมีเป้าหมายเพื่อพัฒนาความเข้าใจในวิชา เพิ่มความมั่นใจ และสร้างความก้าวหน้าทางการเรียนที่วัดผลได้ จุดเน้น: การสนับสนุนวิชา การพัฒนาผลการเรียน และการเตรียมสอบ ครอบคลุมหลักสูตร UK (KS1–KS5), IGCSE, A-Level / AP / IB'
    },
    outcomes: {
      zh: ['深入理解化学原理与实验能力', '掌握 A-Level / IB 考试分析技能', '为大学化学相关学习打基础'],
      en: ['Deep conceptual understanding of chemical principles', 'Practical laboratory competency and analytical exam skills', 'Preparation for university-level chemistry study'],
      th: ['เข้าใจหลักการทางเคมีอย่างลึกซึ้ง', 'ทักษะปฏิบัติการและการวิเคราะห์ข้อสอบ', 'เตรียมพร้อมสำหรับการเรียนเคมีระดับมหาวิทยาลัย']
    }
  },
  {
    id: 'bio-tut', cat: 'tutoring', subject: 'biology',
    name: { zh: '生物（IGCSE / A-Level）', en: 'Biology — IGCSE / A-Level', th: 'ชีววิทยา — IGCSE / A-Level' },
    grades: 'Y7–Y13', gmin: 7, gmax: 13,
    curriculum: 'IGCSE • A-Level • IB',
    format: TUT_FORMAT, startMonth: null, price: null,
    imgs: ['assets/img/bio-tut.jpg'],
    summary: {
      zh: '覆盖 IGCSE（CIE 0610）与 A-Level（CIE 9700 / AQA）生物全体系，从分子到生态系统，含 IB 生物。',
      en: 'Covers IGCSE Biology (CIE 0610) and A-Level Biology (CIE 9700 / AQA), from molecular to ecosystem level, plus IB Biology.',
      th: 'ครอบคลุมชีววิทยา IGCSE (CIE 0610) และ A-Level (CIE 9700 / AQA) ตั้งแต่ระดับโมเลกุลถึงระบบนิเวศ พร้อม IB Biology'
    },
        desc: {
      zh: '课程目标：本课程旨在为每位学生提供量身定制的个性化学术支持，帮助提升学科理解、增强自信，并取得可衡量的学业进步。课程重点：学科支持、学业提升与备考辅导，覆盖英国课程（KS1–KS5）、IGCSE、A-Level / AP / IB。',
      en: 'Programme Aim: This programme is designed to provide individualised academic support tailored to each student’s needs, with the goal of improving subject understanding, boosting confidence, and achieving measurable academic progress. Focus: Subject support, academic improvement, and exam preparation. UK Curriculum (KS1–KS5), IGCSE, A-Level / AP / IB.',
      th: 'เป้าหมายโปรแกรม: โปรแกรมนี้ออกแบบมาเพื่อให้การสนับสนุนทางวิชาการแบบเฉพาะบุคคลตามความต้องการของนักเรียนแต่ละคน โดยมีเป้าหมายเพื่อพัฒนาความเข้าใจในวิชา เพิ่มความมั่นใจ และสร้างความก้าวหน้าทางการเรียนที่วัดผลได้ จุดเน้น: การสนับสนุนวิชา การพัฒนาผลการเรียน และการเตรียมสอบ ครอบคลุมหลักสูตร UK (KS1–KS5), IGCSE, A-Level / AP / IB'
    },
    outcomes: {
      zh: ['从分子到生态系统的系统理解', '熟练使用显微镜与数据分析', 'IGCSE / A-Level / IB 生物应试就绪'],
      en: ['Comprehensive understanding from molecular to ecosystem level', 'Proficiency in microscopy and data analysis', 'Examination readiness for IGCSE, A-Level and IB Biology'],
      th: ['เข้าใจระบบชีวภาพตั้งแต่ระดับโมเลกุลถึงระบบนิเวศ', 'ชำนาญการใช้กล้องจุลทรรศน์และการวิเคราะห์ข้อมูล', 'พร้อมสอบชีววิทยา IGCSE, A-Level และ IB']
    }
  },
  {
    id: 'phys-tut', cat: 'tutoring', subject: 'physics',
    name: { zh: '物理（IGCSE / A-Level）', en: 'Physics — IGCSE / A-Level', th: 'ฟิสิกส์ — IGCSE / A-Level' },
    grades: 'Y7–Y13', gmin: 7, gmax: 13,
    curriculum: 'IGCSE • A-Level • IB',
    format: TUT_FORMAT, startMonth: null, price: null,
    imgs: ['assets/img/phys-tut.jpg'],
    summary: {
      zh: '覆盖 IGCSE（CIE 0625）与 A-Level（CIE 9702 / AQA）物理，含天体物理、医学物理等选修与 IB 物理。',
      en: 'Covers IGCSE Physics (CIE 0625) and A-Level Physics (CIE 9702 / AQA), with optional topics and IB Physics support.',
      th: 'ครอบคลุมฟิสิกส์ IGCSE (CIE 0625) และ A-Level (CIE 9702 / AQA) พร้อมหัวข้อเลือกและ IB Physics'
    },
        desc: {
      zh: '课程目标：本课程旨在为每位学生提供量身定制的个性化学术支持，帮助提升学科理解、增强自信，并取得可衡量的学业进步。课程重点：学科支持、学业提升与备考辅导，覆盖英国课程（KS1–KS5）、IGCSE、A-Level / AP / IB。',
      en: 'Programme Aim: This programme is designed to provide individualised academic support tailored to each student’s needs, with the goal of improving subject understanding, boosting confidence, and achieving measurable academic progress. Focus: Subject support, academic improvement, and exam preparation. UK Curriculum (KS1–KS5), IGCSE, A-Level / AP / IB.',
      th: 'เป้าหมายโปรแกรม: โปรแกรมนี้ออกแบบมาเพื่อให้การสนับสนุนทางวิชาการแบบเฉพาะบุคคลตามความต้องการของนักเรียนแต่ละคน โดยมีเป้าหมายเพื่อพัฒนาความเข้าใจในวิชา เพิ่มความมั่นใจ และสร้างความก้าวหน้าทางการเรียนที่วัดผลได้ จุดเน้น: การสนับสนุนวิชา การพัฒนาผลการเรียน และการเตรียมสอบ ครอบคลุมหลักสูตร UK (KS1–KS5), IGCSE, A-Level / AP / IB'
    },
    outcomes: {
      zh: ['严谨理解物理原理', '数学建模与实验精度', '自信应对 A-Level / IB 物理考题'],
      en: ['Rigorous understanding of physical principles', 'Mathematical modelling and experimental precision', 'Confidence in solving A-Level and IB Physics questions'],
      th: ['เข้าใจหลักการทางฟิสิกส์อย่างเข้มงวด', 'ทักษะการสร้างแบบจำลองทางคณิตศาสตร์และการทดลอง', 'มั่นใจในการแก้ข้อสอบฟิสิกส์ A-Level และ IB']
    }
  },
  {
    id: 'cs-tut', cat: 'tutoring', subject: 'cs',
    name: { zh: '计算机科学（IGCSE / A-Level）', en: 'Computer Science — IGCSE / A-Level', th: 'วิทยาการคอมพิวเตอร์ — IGCSE / A-Level' },
    grades: 'Y7–Y13', gmin: 7, gmax: 13,
    curriculum: 'IGCSE • A-Level • IB',
    format: TUT_FORMAT, startMonth: null, price: null,
    imgs: ['assets/img/cs-tut.jpg'],
    summary: {
      zh: '覆盖 IGCSE（CIE 0478）与 A-Level（CIE 9618 / AQA / OCR）计算机科学，含编程项目（NEA）与 IB CS。',
      en: 'Covers IGCSE Computer Science (CIE 0478) and A-Level CS (CIE 9618 / AQA / OCR), including the NEA programming project and IB CS.',
      th: 'ครอบคลุมวิทยาการคอมพิวเตอร์ IGCSE (CIE 0478) และ A-Level (CIE 9618 / AQA / OCR) รวมถึงโปรเจกต์ NEA และ IB CS'
    },
        desc: {
      zh: '课程目标：本课程旨在为每位学生提供量身定制的个性化学术支持，帮助提升学科理解、增强自信，并取得可衡量的学业进步。课程重点：学科支持、学业提升与备考辅导，覆盖英国课程（KS1–KS5）、IGCSE、A-Level / AP / IB。',
      en: 'Programme Aim: This programme is designed to provide individualised academic support tailored to each student’s needs, with the goal of improving subject understanding, boosting confidence, and achieving measurable academic progress. Focus: Subject support, academic improvement, and exam preparation. UK Curriculum (KS1–KS5), IGCSE, A-Level / AP / IB.',
      th: 'เป้าหมายโปรแกรม: โปรแกรมนี้ออกแบบมาเพื่อให้การสนับสนุนทางวิชาการแบบเฉพาะบุคคลตามความต้องการของนักเรียนแต่ละคน โดยมีเป้าหมายเพื่อพัฒนาความเข้าใจในวิชา เพิ่มความมั่นใจ และสร้างความก้าวหน้าทางการเรียนที่วัดผลได้ จุดเน้น: การสนับสนุนวิชา การพัฒนาผลการเรียน และการเตรียมสอบ ครอบคลุมหลักสูตร UK (KS1–KS5), IGCSE, A-Level / AP / IB'
    },
    outcomes: {
      zh: ['实用编程能力与算法设计', '理解计算理论与系统架构', '项目式软件开发经验（NEA）'],
      en: ['Practical programming proficiency and algorithm design', 'Understanding of computational theory and system architecture', 'Project-based software development experience (NEA)'],
      th: ['ทักษะการเขียนโปรแกรมเชิงปฏิบัติและการออกแบบอัลกอริทึม', 'เข้าใจทฤษฎีการคำนวณและสถาปัตยกรรมระบบ', 'ประสบการณ์พัฒนาซอฟต์แวร์แบบโปรเจกต์ (NEA)']
    }
  },
  {
    id: 'hist-tut', cat: 'tutoring', subject: 'history',
    name: { zh: '历史（IGCSE / A-Level）', en: 'History — IGCSE / A-Level', th: 'ประวัติศาสตร์ — IGCSE / A-Level' },
    grades: 'Y7–Y13', gmin: 7, gmax: 13,
    curriculum: 'IGCSE • A-Level • IB',
    format: TUT_FORMAT, startMonth: null, price: null,
    imgs: ['assets/img/hist-tut.jpg'],
    summary: {
      zh: '覆盖 IGCSE（CIE 0470）与 A-Level（CIE 9489 / AQA）历史，强化史料分析与论文写作，含 IB 历史。',
      en: 'Covers IGCSE History (CIE 0470) and A-Level History (CIE 9489 / AQA), with strong source analysis and essay skills, plus IB History.',
      th: 'ครอบคลุมประวัติศาสตร์ IGCSE (CIE 0470) และ A-Level (CIE 9489 / AQA) เน้นการวิเคราะห์หลักฐานและการเขียนเรียงความ พร้อม IB History'
    },
        desc: {
      zh: '课程目标：本课程旨在为每位学生提供量身定制的个性化学术支持，帮助提升学科理解、增强自信，并取得可衡量的学业进步。课程重点：学科支持、学业提升与备考辅导，覆盖英国课程（KS1–KS5）、IGCSE、A-Level / AP / IB。',
      en: 'Programme Aim: This programme is designed to provide individualised academic support tailored to each student’s needs, with the goal of improving subject understanding, boosting confidence, and achieving measurable academic progress. Focus: Subject support, academic improvement, and exam preparation. UK Curriculum (KS1–KS5), IGCSE, A-Level / AP / IB.',
      th: 'เป้าหมายโปรแกรม: โปรแกรมนี้ออกแบบมาเพื่อให้การสนับสนุนทางวิชาการแบบเฉพาะบุคคลตามความต้องการของนักเรียนแต่ละคน โดยมีเป้าหมายเพื่อพัฒนาความเข้าใจในวิชา เพิ่มความมั่นใจ และสร้างความก้าวหน้าทางการเรียนที่วัดผลได้ จุดเน้น: การสนับสนุนวิชา การพัฒนาผลการเรียน และการเตรียมสอบ ครอบคลุมหลักสูตร UK (KS1–KS5), IGCSE, A-Level / AP / IB'
    },
    outcomes: {
      zh: ['掌握史料批评与史学分析', '长篇分析性论文写作能力', '独立历史调研技能'],
      en: ['Mastery of source criticism and historiographical analysis', 'Sustained analytical essay writing', 'Independent historical research skills'],
      th: ['เชี่ยวชาญการวิจารณ์แหล่งหลักฐานและการวิเคราะห์เชิงประวัติศาสตร์', 'ทักษะการเขียนเรียงความวิเคราะห์ยาว', 'ทักษะการวิจัยประวัติศาสตร์อย่างอิสระ']
    }
  },
  {
    id: 'geo-tut', cat: 'tutoring', subject: 'geography',
    name: { zh: '地理（IGCSE / A-Level）', en: 'Geography — IGCSE / A-Level', th: 'ภูมิศาสตร์ — IGCSE / A-Level' },
    grades: 'Y7–Y13', gmin: 7, gmax: 13,
    curriculum: 'IGCSE • A-Level • IB',
    format: TUT_FORMAT, startMonth: null, price: null,
    imgs: ['assets/img/geo-tut.jpg'],
    summary: {
      zh: '覆盖 IGCSE（CIE 0460）与 A-Level（CIE 9696 / AQA）地理，自然与人文并重，含实地考察与 IB 地理。',
      en: 'Covers IGCSE Geography (CIE 0460) and A-Level Geography (CIE 9696 / AQA), balancing physical and human geography, with fieldwork and IB Geography.',
      th: 'ครอบคลุมภูมิศาสตร์ IGCSE (CIE 0460) และ A-Level (CIE 9696 / AQA) ทั้งกายภาพและมนุษย์ พร้อมภาคสนามและ IB Geography'
    },
        desc: {
      zh: '课程目标：本课程旨在为每位学生提供量身定制的个性化学术支持，帮助提升学科理解、增强自信，并取得可衡量的学业进步。课程重点：学科支持、学业提升与备考辅导，覆盖英国课程（KS1–KS5）、IGCSE、A-Level / AP / IB。',
      en: 'Programme Aim: This programme is designed to provide individualised academic support tailored to each student’s needs, with the goal of improving subject understanding, boosting confidence, and achieving measurable academic progress. Focus: Subject support, academic improvement, and exam preparation. UK Curriculum (KS1–KS5), IGCSE, A-Level / AP / IB.',
      th: 'เป้าหมายโปรแกรม: โปรแกรมนี้ออกแบบมาเพื่อให้การสนับสนุนทางวิชาการแบบเฉพาะบุคคลตามความต้องการของนักเรียนแต่ละคน โดยมีเป้าหมายเพื่อพัฒนาความเข้าใจในวิชา เพิ่มความมั่นใจ และสร้างความก้าวหน้าทางการเรียนที่วัดผลได้ จุดเน้น: การสนับสนุนวิชา การพัฒนาผลการเรียน และการเตรียมสอบ ครอบคลุมหลักสูตร UK (KS1–KS5), IGCSE, A-Level / AP / IB'
    },
    outcomes: {
      zh: ['自然与人文地理系统整合理解', '实地考察方法与数据分析能力', '构建评价性地理论证的考试能力'],
      en: ['Integrated understanding of physical and human systems', 'Fieldwork methodology and data analysis proficiency', 'Ability to construct evaluative geographical arguments'],
      th: ['เข้าใจระบบภูมิศาสตร์กายภาพและมนุษย์อย่างบูรณาการ', 'ชำนาญวิธีการภาคสนามและการวิเคราะห์ข้อมูล', 'สร้างการโต้แย้งเชิงประเมินทางภูมิศาสตร์ได้']
    }
  },
  {
    id: 'soc-tut', cat: 'tutoring', subject: 'sociology',
    name: { zh: '社会学（IGCSE / A-Level）', en: 'Sociology — IGCSE / A-Level', th: 'สังคมวิทยา — IGCSE / A-Level' },
    grades: 'Y10–Y13', gmin: 10, gmax: 13,
    curriculum: 'IGCSE • A-Level • IB',
    format: TUT_FORMAT, startMonth: null, price: null,
    imgs: ['assets/img/soc-tut.jpg'],
    summary: {
      zh: '覆盖 IGCSE（CIE 0495）与 A-Level（AQA 7192 / CIE）社会学，理论、研究方法与社会议题并重。',
      en: 'Covers IGCSE Sociology (CIE 0495) and A-Level Sociology (AQA 7192 / CIE), balancing theory, research methods and social issues.',
      th: 'ครอบคลุมสังคมวิทยา IGCSE (CIE 0495) และ A-Level (AQA 7192 / CIE) ทั้งทฤษฎี วิธีวิจัย และประเด็นทางสังคม'
    },
        desc: {
      zh: '课程目标：本课程旨在为每位学生提供量身定制的个性化学术支持，帮助提升学科理解、增强自信，并取得可衡量的学业进步。课程重点：学科支持、学业提升与备考辅导，覆盖英国课程（KS1–KS5）、IGCSE、A-Level / AP / IB。',
      en: 'Programme Aim: This programme is designed to provide individualised academic support tailored to each student’s needs, with the goal of improving subject understanding, boosting confidence, and achieving measurable academic progress. Focus: Subject support, academic improvement, and exam preparation. UK Curriculum (KS1–KS5), IGCSE, A-Level / AP / IB.',
      th: 'เป้าหมายโปรแกรม: โปรแกรมนี้ออกแบบมาเพื่อให้การสนับสนุนทางวิชาการแบบเฉพาะบุคคลตามความต้องการของนักเรียนแต่ละคน โดยมีเป้าหมายเพื่อพัฒนาความเข้าใจในวิชา เพิ่มความมั่นใจ และสร้างความก้าวหน้าทางการเรียนที่วัดผลได้ จุดเน้น: การสนับสนุนวิชา การพัฒนาผลการเรียน และการเตรียมสอบ ครอบคลุมหลักสูตร UK (KS1–KS5), IGCSE, A-Level / AP / IB'
    },
    outcomes: {
      zh: ['批判理解社会学理论与研究方法', '评估社会制度与不平等的多元视角', '符合 A-Level / IB 要求的论文写作'],
      en: ['Critical understanding of sociological theory and methods', 'Ability to evaluate competing perspectives on institutions and inequality', 'Essay-writing skills aligned to A-Level and IB objectives'],
      th: ['เข้าใจทฤษฎีและวิธีวิจัยทางสังคมวิทยาอย่างมีวิจารณญาณ', 'ประเมินมุมมองที่หลากหลายต่อสถาบันและความไม่เท่าเทียม', 'ทักษะการเขียนเรียงความตามเกณฑ์ A-Level และ IB']
    }
  },
  {
    id: 'psy-tut', cat: 'tutoring', subject: 'psychology',
    name: { zh: '心理学（IGCSE / A-Level）', en: 'Psychology — IGCSE / A-Level', th: 'จิตวิทยา — IGCSE / A-Level' },
    grades: 'Y10–Y13', gmin: 10, gmax: 13,
    curriculum: 'IGCSE • A-Level • IB',
    format: TUT_FORMAT, startMonth: null, price: null,
    imgs: ['assets/img/psy-tut.jpg'],
    summary: {
      zh: '覆盖 IGCSE（CIE 0266）与 A-Level（AQA 7182）心理学，含研究方法与统计推断训练，支持 IB 心理学。',
      en: 'Covers IGCSE Psychology (CIE 0266) and A-Level Psychology (AQA 7182), with research methods and inferential statistics, plus IB Psychology.',
      th: 'ครอบคลุมจิตวิทยา IGCSE (CIE 0266) และ A-Level (AQA 7182) พร้อมวิธีวิจัยและสถิติอนุมาน และรองรับ IB Psychology'
    },
            desc: {
      zh: '课程目标：本课程旨在为每位学生提供量身定制的个性化学术支持，帮助提升学科理解、增强自信，并取得可衡量的学业进步。课程重点：学科支持、学业提升与备考辅导，覆盖英国课程（KS1–KS5）、IGCSE、A-Level / AP / IB。',
      en: 'Programme Aim: This programme is designed to provide individualised academic support tailored to each student’s needs, with the goal of improving subject understanding, boosting confidence, and achieving measurable academic progress. Focus: Subject support, academic improvement, and exam preparation. UK Curriculum (KS1–KS5), IGCSE, A-Level / AP / IB.',
      th: 'เป้าหมายโปรแกรม: โปรแกรมนี้ออกแบบมาเพื่อให้การสนับสนุนทางวิชาการแบบเฉพาะบุคคลตามความต้องการของนักเรียนแต่ละคน โดยมีเป้าหมายเพื่อพัฒนาความเข้าใจในวิชา เพิ่มความมั่นใจ และสร้างความก้าวหน้าทางการเรียนที่วัดผลได้ จุดเน้น: การสนับสนุนวิชา การพัฒนาผลการเรียน และการเตรียมสอบ ครอบคลุมหลักสูตร UK (KS1–KS5), IGCSE, A-Level / AP / IB'
    },
    outcomes: {
      zh: ['透彻理解心理学理论、经典研究与方法', '统计素养与证据评估能力', 'IGCSE / A-Level / IB 心理学应试就绪'],
      en: ['Thorough understanding of theories, studies and methods', 'Statistical literacy and critical evaluation of evidence', 'Examination readiness for IGCSE, A-Level and IB Psychology'],
      th: ['เข้าใจทฤษฎี การวิจัย และวิธีการอย่างละเอียด', 'ความรู้ทางสถิติและการประเมินหลักฐานอย่างมีวิจารณญาณ', 'พร้อมสอบจิตวิทยา IGCSE, A-Level และ IB']
    }
  },

  /* ============ 即将上架（Coming Soon）=========== */
  {
    id: 'coding-robotics', cat: 'competition', subject: 'cs',
    cover: 'assets/img/covers/coding-robotics-cover.jpg',
    name: { zh: '编程与机器人竞赛', en: 'Coding & Robotics Competition', th: 'การแข่งขันเขียนโค้ดและหุ่นยนต์' },
    grades: 'Y3–Y13', gmin: 3, gmax: 13,
    comingSoon: true,
    summary: {
      zh: '编程与机器人竞赛备赛课程即将上线，敬请期待。',
      en: 'Coding & Robotics Competition preparation programme — launching soon.',
      th: 'หลัักสูตรเตรียมแข่งขันเขียนโค้ดและหุ่นยนต์ — เร็ว ๆ นี้'
    }
  },
  {
    id: 'cs-competition', cat: 'competition', subject: 'cs',
    cover: 'assets/img/covers/cs-competition-cover.jpg',
    name: { zh: '计算机科学竞赛', en: 'Computer Science Competition', th: 'การแข่งขันวิทยาการคอมพิวเตอร์' },
    grades: 'Y9–Y13', gmin: 9, gmax: 13,
    comingSoon: true,
    summary: {
      zh: '计算机科学竞赛备赛课程即将上线，敬请期待。',
      en: 'Computer Science Competition preparation programme — launching soon.',
      th: 'หลัักสูตรเตรียมแข่งขันวิทยาการคอมพิวเตอร์ — เร็ว ๆ นี้'
    }
  }
];
