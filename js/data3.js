/* =========================================================
 * All A's 课程数据 · Part 3 —— 演讲辩论与 MUN / 医学项目 / 大学升学规划
 * 另含：一对一课程定制专题页内容（CUSTOM_PAGE）
 * ========================================================= */

const DEBATE_MUN_NAME = { zh: "辩论与模拟联合国卓越课程", en: "Debating and MUN Excellence Programme", th: "หลักสูตรโต้วาทีและสหประชาชาติจำลองสู่ความเป็นเลิศ" };
const DEBATE_MUN_SUMMARY = { zh: "在模拟联合国中研究国际议题、代表国家发言并参与谈判。", en: "Research global issues, speak as a country delegate and negotiate in MUN simulations.", th: "ศึกษาประเด็นระดับโลก กล่าวสุนทรพจน์ในฐานะผู้แทนประเทศ และเจรจาในการประชุม MUN จำลอง" };
const DEBATE_MUN_DESC = { zh: "通过模拟联合国会议，学生代表不同国家研究国际议题，比较各方立场并协商决议。Mr John 有超过 30 年的模拟联合国带队经验，将指导学生发言、回应质询、组建联盟并提出可行方案。", en: "Students represent countries in Model United Nations, research global issues and negotiate resolutions. Mr John draws on over 30 years of leading MUN to coach students in public speaking, responding to opposing views, building alliances and proposing workable solutions.", th: "นักเรียนสวมบทบาทผู้แทนประเทศในสหประชาชาติจำลอง ศึกษาปัญหาระดับโลกและเจรจาร่างข้อมติ Mr John มีประสบการณ์นำกิจกรรม MUN มากกว่า 30 ปี และจะสอนการกล่าวสุนทรพจน์ การตอบข้อโต้แย้ง การสร้างพันธมิตร และการเสนอทางออก" };
const DEBATE_MUN_OUTCOMES = {
  zh: ['就国际议题研究并阐述所代表国家的立场', '自信发言、提出问题并回应反方论点', '倾听、谈判、结盟并共同起草解决方案', '在模拟委员会中参与辩论、磋商与决策，为参加入门级 MUN 会议做好准备'],
  en: ['Research a global issue and explain the position of the country you represent', 'Deliver a persuasive speech, ask questions and respond to opposing views', 'Negotiate, build alliances and contribute to a draft resolution', 'Practise committee debate, caucuses and decision-making in preparation for beginner MUN conferences'],
  th: ['ค้นคว้าประเด็นโลกและอธิบายจุดยืนของประเทศที่เป็นตัวแทน', 'กล่าวสุนทรพจน์ ตั้งคำถาม และตอบข้อโต้แย้งอย่างมั่นใจ', 'ฝึกฟัง เจรจา สร้างพันธมิตร และร่วมร่างข้อมติ', 'ฝึกอภิปราย หารือ และตัดสินใจในคณะกรรมการจำลอง เพื่อเตรียมร่วมการประชุม MUN ระดับเริ่มต้น']
};

COURSES.push(
  /* ============ 演讲辩论与 MUN ============ */
  {
    id: 'debate-intro', cat: 'speaking', subject: 'speaking',
    cover: 'assets/img/class/debate-presentation.jpg',
    name: DEBATE_MUN_NAME,
    grades: 'Y4–Y6', gmin: 4, gmax: 6,
    organizer: { zh: 'All A\u0027s 校内课程', en: 'Lanna All A\u0027s', th: 'หลักสูตรภายใน All A\u0027s' },
    format: { zh: '小班课程', en: 'Small-group class', th: 'เรียนกลุ่มเล็ก' },
    startMonth: '2027-01',
    start: { zh: "2027年1月11日至5月31日", en: "11 January – 31 May 2027", th: "11 ม.ค. – 31 พ.ค. 2027" },
    duration: { zh: "17 周", en: "17 weeks", th: "17 สัปดาห์" },
    hours: { zh: "17 小时", en: "17 hours", th: "17 ชั่วโมง" },
    schedule: { zh: "周一 15:40–16:40", en: "Monday 15:40–16:40", th: "จันทร์ 15:40–16:40" },
    classDates: "01/11, 01/25 · 02/01, 02/08, 02/15 · 03/01, 03/08, 03/15, 03/22, 03/29 · 04/19, 04/26 · 05/03, 05/10, 05/17, 05/24, 05/31",
    mentor: 'Mr John',
    price: 13600,
    imgs: [
      'assets/img/class/debate-mentoring.jpg', 'assets/img/class/debate-presentation.jpg',
      'assets/img/covers/speaking-class.jpg',
      'assets/img/class/speak-c1.jpg',
      'assets/img/class/speak-c2.jpg',
      'assets/img/class/speak-c3.jpg',
      'assets/img/class/speak-c4.jpg',
      'assets/img/class/speak-c5.jpg',
      'assets/img/class/debate-mun1.jpg',
      'assets/img/class/debate-award1.jpg',
      'assets/img/class/debate-speech1.jpg'
    ],
    summary: DEBATE_MUN_SUMMARY,
    desc: DEBATE_MUN_DESC,
    outcomes: DEBATE_MUN_OUTCOMES
  },
  {
    id: 'debate-comp', cat: 'speaking', subject: 'speaking',
    cover: 'assets/img/class/debate-mentoring.jpg',
    name: DEBATE_MUN_NAME,
    grades: 'Y7–Y9', gmin: 7, gmax: 9,
    organizer: { zh: 'All A\u0027s 校内课程', en: 'Lanna All A\u0027s', th: 'หลักสูตรภายใน All A\u0027s' },
    format: { zh: '小班课程', en: 'Small-group class', th: 'เรียนกลุ่มเล็ก' },
    startMonth: '2027-01',
    start: { zh: "2027年1月13日至6月2日", en: "13 January – 2 June 2027", th: "13 ม.ค. – 2 มิ.ย. 2027" },
    duration: { zh: "16 周", en: "16 weeks", th: "16 สัปดาห์" },
    hours: { zh: "24 小时", en: "24 hours", th: "24 ชั่วโมง" },
    schedule: { zh: "周三 16:00–17:30", en: "Wednesday 16:00–17:30", th: "พุธ 16:00–17:30" },
    classDates: "01/13, 01/20 · 02/03, 02/10 · 03/03, 03/10, 03/17, 03/24, 03/31 · 04/21, 04/28 · 05/05, 05/12, 05/19, 05/26 · 06/02",
    mentor: 'Mr John',
    price: 19200,
    imgs: [
      'assets/img/class/debate-mentoring.jpg', 'assets/img/class/debate-presentation.jpg',
      'assets/img/covers/speaking-class.jpg',
      'assets/img/class/speak-c1.jpg',
      'assets/img/class/speak-c2.jpg',
      'assets/img/class/speak-c3.jpg',
      'assets/img/class/speak-c4.jpg',
      'assets/img/class/speak-c5.jpg',
      'assets/img/class/debate-mun1.jpg',
      'assets/img/class/debate-award1.jpg',
      'assets/img/class/debate-speech1.jpg'
    ],
    summary: DEBATE_MUN_SUMMARY,
    desc: DEBATE_MUN_DESC,
    outcomes: DEBATE_MUN_OUTCOMES
  },
  {
    id: 'mun-intro', cat: 'speaking', subject: 'speaking',
    registrationClosed: true,
    cover: 'assets/img/covers/mun-intro.jpg',
    name: { zh: 'MUN 入门（Introduction to MUN）-（2026 October camp）', en: 'Introduction to MUN -（2026 October camp）', th: 'MUN เบื้องต้น -（2026 October camp）' },
    grades: 'Y7–Y13', gmin: 7, gmax: 13,
    organizer: { zh: 'All A\u0027s 校内课程', en: 'Lanna All A\u0027s', th: 'หลักสูตรภายใน All A\u0027s' },
    format: { zh: '十月假期集训营', en: 'October break camp', th: 'ค่ายช่วงปิดเทอมตุลาคม' },
    startMonth: '2026-10',
    start: { zh: '2026年10月假期（具体安排待定）', en: 'October 2026 break (details TBC)', th: 'ช่วงปิดเทอมตุลาคม 2026 (รายละเอียดเร็วๆ นี้)' },
    price: null,
    imgs: [
      'assets/img/covers/speaking-class.jpg',
      'assets/img/class/speak-c1.jpg',
      'assets/img/class/speak-c2.jpg',
      'assets/img/class/speak-c3.jpg',
      'assets/img/class/speak-c4.jpg',
      'assets/img/class/speak-c5.jpg'
    ],
    summary: {
      zh: '十月假期 MUN 启蒙集训营，了解联合国与议事规则，体验代表发言与决议起草。时间与费用待定。',
      en: 'An October-break MUN foundation camp for beginners to public speaking, instilling confidence to join competitions. Schedule and fees TBC.',
      th: 'ค่ายพื้นฐาน MUN ช่วงปิดเทอมตุลาคม สำหรับผู้เริ่มต้นเรียนการพูดในที่สาธารณะ ปลูกฝังความมั่นใจในการเข้าร่วมการแข่งขัน ตารางและค่าเล่าเรียนเร็วๆ นี้'
    },
    mentor: 'Mr John and LIPSO'
  },
  {
    id: 'mun-comp', cat: 'speaking', subject: 'speaking',
    registrationClosed: true,
    cover: 'assets/img/class/debate-mun1.jpg',
    name: { zh: '竞技 MUN（Competitive MUN）-（2026 October Camp）', en: 'Competitive MUN - (2026 October Camp)', th: 'MUN แข่งขัน - (ค่ายตุลาคม 2026)' },
    grades: 'Y4–Y9', gmin: 4, gmax: 9,
    organizer: { zh: 'LANNA Public Speaking 与 LIPSO', en: 'LANNA Public Speaking and LIPSO', th: 'LANNA Public Speaking และ LIPSO' },
    format: { zh: '十月假期 3 日集训营', en: 'October break 3-day camp', th: 'ค่าย 3 วันช่วงปิดเทอมเดือนตุลาคม' },
    startMonth: '2026-10',
    start: { zh: '2026年10月14–16日（周三至周五）', en: '14–16 October 2026 (Wednesday–Friday)', th: '14–16 ตุลาคม 2026 (วันพุธ–วันศุกร์)' },
    duration: { zh: '3 天', en: '3 days', th: '3 วัน' },
    hours: { zh: '15 小时教学与实践', en: '15 hours of instruction and practice', th: 'การเรียนการสอนและฝึกปฏิบัติ 15 ชั่วโมง' },
    schedule: { zh: '每天 09:00–15:00', en: 'Daily 9:00 am–3:00 pm', th: 'ทุกวัน 09:00–15:00 น.' },
    price: 12000,
    imgs: [
      'assets/img/class/mun-comp-2026-01-group.jpg',
      'assets/img/class/mun-comp-2026-02-assembly.jpg',
      'assets/img/class/mun-comp-2026-03-delegates.jpg',
      'assets/img/class/mun-comp-2026-04-welcome.jpg',
      'assets/img/class/mun-comp-2026-05-poster.png',
      'assets/img/class/mun-comp-2026-06-un-logo.png'
    ],
    summary: {
      zh: '面向 Y4–Y9 的 MUN 十月假期 3 日集训营，通过模拟会议与团队实践培养公开演讲、辩论、研究、谈判和外交沟通能力。',
      en: 'A 3-day October break MUN camp for students in Years 4–9, using practical simulations and teamwork to build public speaking, debating, research, negotiation and diplomatic communication skills.',
      th: 'ค่าย MUN 3 วันช่วงปิดเทอมเดือนตุลาคมสำหรับนักเรียน Year 4–Year 9 ใช้การจำลองสถานการณ์และการทำงานเป็นทีมเพื่อพัฒนาการพูดในที่สาธารณะ การโต้วาที การค้นคว้า การเจรจา และการสื่อสารเชิงการทูต'
    },
    mentor: 'Mr John Watson and LIPSO'
  },

  /* ============ 医学项目 ============ */
  {
    id: 'future-doctor', cat: 'medicine', subject: 'medicine',
    examDate: { zh: "2027年5月（选考）", en: "May 2027 (optional exam)", th: "พฤษภาคม 2027 (สอบตามความสมัครใจ)" },
    cover: 'assets/img/covers/med-students.jpg',
    name: { zh: '未来医生计划（Future Doctor Programme）', en: 'Future Doctor Programme', th: 'โปรแกรมแพทย์อนาคต' },
    grades: 'Y9–Y12', gmin: 9, gmax: 12,
    format: { zh: '小班课程', en: 'Small-group class', th: 'เรียนกลุ่มเล็ก' },
    startMonth: '2027-01',
    start: { zh: "2027年1月18日至3月29日", en: "18 January – 29 March 2027", th: "18 มกราคม – 29 มีนาคม 2027" },
    duration: { zh: "11 周", en: "11 weeks", th: "11 สัปดาห์" },
    hours: { zh: "11 小时", en: "11 hours", th: "11 ชั่วโมง" },
    schedule: { zh: "周一 16:00–17:00", en: "Monday 16:00–17:00", th: "จันทร์ 16:00–17:00" },
    price: 9900,
    mentor: 'Mr Graham',
    desc: {
      zh: '以兴趣为导向、充满趣味的方式接触医学，为大学医学入学及未来大学申请做好准备。若学生有信心，也可以准备化学 Single Award（0620），为履历再添一门 IGCSE。',
      en: 'A fun, interest-led approach to medicine, preparing students for the next step towards university entrance for medicine and future university applications. Students can also prepare to take Chemistry Single Award (0620) if they feel confident enough to add another IGCSE to their CV.',
      th: 'แนวทางที่สนุกและนำโดยความสนใจในด้านการแพทย์ เตรียมนักเรียนสำหรับขั้นตอนต่อไปสู่การเข้าศึกษาต่อคณะแพทยศาสตร์ในมหาวิทยาลัยและการสมัครมหาวิทยาลัยในอนาคต นักเรียนสามารถเตรียมสอบ Chemistry Single Award (0620) ได้เช่นกัน หากมั่นใจพอที่จะเพิ่ม IGCSE อีกวิชาหนึ่งในประวัติการศึกษา'
    },
    summary: {
      zh: '以兴趣为导向、充满趣味的方式接触医学，为大学医学入学及未来大学申请做好准备。',
      en: 'A fun, interest-led approach to medicine, preparing students for university entrance and applications.',
      th: 'แนวทางที่สนุกและนำโดยความสนใจในด้านการแพทย์ เตรียมนักเรียนสำหรับการสมัครคณะแพทย์และมหาวิทยาลัย'
    },
  },
  {
    id: 'medical-pathway', cat: 'medicine', subject: 'medicine',
    cover: 'assets/img/covers/image32.jpeg',
    name: { zh: '医学申请核心课程（Medical Pathway · Core Track）', en: 'Medical Pathway (Core Track)', th: 'Medical Pathway (แทร็กหลัก)' },
    grades: 'Y12–Y13', gmin: 12, gmax: 13,
    format: { zh: '小班课程（全年滚动）', en: 'Small-group class (year-round)', th: 'เรียนกลุ่มเล็ก (ตลอดปี)' },
    startMonth: '2027-01',
    start: { zh: "2027年1月第二周至6月第一周", en: "Second week of January to first week of June 2027", th: "สัปดาห์ที่สองของมกราคมถึงสัปดาห์แรกของมิถุนายน 2027" },
    duration: { zh: "15 周", en: "15 weeks", th: "15 สัปดาห์" },
    hours: { zh: '30 小时', en: '30 hours', th: '30 ชั่วโมง' },
    schedule: { zh: "周六 09:00–11:00，假期停课", en: "Saturday 09:00–11:00, excluding holiday Saturdays", th: "เสาร์ 09:00–11:00 ยกเว้นวันหยุด" },
    price: 33000,
    mentor: 'Mr Graham',
    summary: {
      zh: '面向 Y12–Y13 的医学院申请核心课程，覆盖入学考试（UCAT/BMAT）、个人陈述与面试准备。',
      en: 'The Y12–Y13 medical school application core track: admissions tests (UCAT/BMAT), personal statements and interview preparation.',
      th: 'แทร็กหลักสมัครคณะแพทยศาสตร์สำหรับ Y12–Y13 ข้อสอบคัดเลือก (UCAT/BMAT) แถลงการณ์ส่วนตัว และการเตรียมสัมภาษณ์'
    },
        desc: {
      zh: '二级：医学路径课程（核心轨道）——面向正在积极申请医学专业的学生，或已确定要申请医学的 Y12 学生。课程目标：本课程旨在支持学生通过大学临床能力倾向测试（UCAT 路径）申请英国医学专业，以及兽医学、牙医学等相关领域。从学术准备到大学申请成功，提供结构化、战略性的完整路径。课程结构：1) UCAT 技能训练；2) 高阶医学知识；3) 申请技能：个人陈述撰写、工作体验模拟；4) 模拟与评估系统（核心环节）：UCAT 模拟考试（限时完整仿真）、模拟面试、个人评估报告。课程价值：本课程超越单纯学术教学，提供完整的医学申请路径，融合考试准备、学术知识、申请策略与真实的实践环境。',
      en: 'Level 2: Medical Pathway Programme (Core Track) — for students who are either actively applying for medicine or in Year 12 who are certain they want to apply for medicine. Programme Objective: This programme is designed to support students aiming for UK Medicine applications via the University Clinical Aptitude Test (UCAT pathway), and related fields such as Veterinary Medicine and Dentistry. It provides a structured and strategic pathway from academic preparation to university application success. Curriculum Structure: 1) UCAT Skills Training; 2) Advanced Medical Knowledge; 3) Application Skills: Personal Statement Development, Work Experience Simulation; 4) Mock & Assessment System (Essential Component): UCAT Mock Exams (timed, full-length simulations), Interview Mock Sessions, Individual Assessment Reports. Programme Value: This programme goes beyond academic teaching by offering a complete medical admissions pathway, combining exam preparation, academic knowledge, application strategy, and realistic practice environments.',
      th: 'ระดับ 2: โปรแกรมเส้นทางการแพทย์ (Core Track) — สำหรับนักเรียนที่กำลังสมัครเรียนแพทย์อย่างจริงจัง หรือนักเรียน Year 12 ที่แน่ใจว่าต้องการสมัครแพทย์ วัตถุประสงค์โปรแกรม: โปรแกรมนี้ออกแบบมาเพื่อสนับสนุนนักเรียนที่มุ่งสมัครแพทยศาสตร์สหราชอาณาจักรผ่าน University Clinical Aptitude Test (เส้นทาง UCAT) และสาขาที่เกี่ยวข้อง เช่น สัตวแพทยศาสตร์และทันตแพทยศาสตร์ มอบเส้นทางที่มีโครงสร้างและเชิงกลยุทธ์ตั้งแต่การเตรียมความพร้อมทางวิชาการจนถึงความสำเร็จในการสมัครมหาวิทยาลัย โครงสร้างหลักสูตร: 1) ฝึกทักษะ UCAT; 2) ความรู้ทางการแพทย์ขั้นสูง; 3) ทักษะการสมัคร: การพัฒนาแถลงการณ์ส่วนตัว การจำลองประสบการณ์ทำงาน; 4) ระบบทดสอบและประเมินผล (องค์ประกอบสำคัญ): การสอบจำลอง UCAT (แบบจับเวลา เต็มรูปแบบ), การจำลองสัมภาษณ์, รายงานการประเมินรายบุคคล คุณค่าโปรแกรม: โปรแกรมนี้ก้าวข้ามการสอนวิชาการโดยมอบเส้นทางการรับเข้าศึกษาแพทย์ที่สมบูรณ์ ผสมผสานการเตรียมสอบ ความรู้วิชาการ กลยุทธ์การสมัคร และสภาพแวดล้อมการฝึกฝนที่สมจริง'
    },
    outcomes: {
      zh: ['UCAT / BMAT 系统备考', '个人陈述与 MMI 面试训练', '申请时间线与选校策略'],
      en: ['Systematic UCAT / BMAT preparation', 'Personal statement and MMI interview training', 'Application timeline and school-selection strategy'],
      th: ['เตรียม UCAT / BMAT อย่างเป็นระบบ', 'ฝึกแถลงการณ์ส่วนตัวและสัมภาษณ์ MMI', 'ไทม์ไลน์การสมัครและกลยุทธ์การเลือกโรงเรียน']
    }
  },

  /* ============ 大学升学规划 ============ */
  {
    id: 'mentorship', cat: 'mentorship', subject: 'mentorship',
    name: { zh: '个性化大学申请指导（Personalised University Mentorship）', en: 'University Mentorship Programme', th: 'โปรแกรมที่ปรึกษาการสมัครมหาวิทยาลัยเฉพาะบุคคล' },
    grades: 'Y9–Y13', gmin: 9, gmax: 13,
    cover: 'assets/img/covers/image33.png',
    format: { zh: '一对一导师制', en: '1-on-1 mentorship', th: 'ที่ปรึกษาตัวต่อตัว' },
    startMonth: null, price: null,
    summary: {
      zh: '一对一大学申请导师制：选校定位、专业探索、文书打磨与申请全流程陪伴。时间与费用待定。',
      en: '1-on-1 university application mentorship: school selection, subject exploration, essay polishing and end-to-end guidance. Schedule and fees on request.',
      th: 'ที่ปรึกษาการสมัครมหาวิทยาลัยตัวต่อตัว การเลือกมหาวิทยาลัย การสำรวจสาขา การขัดเกลาเรียงความ และคำแนะนำตลอดกระบวนการ ตารางและค่าเล่าเรียนตามตกลง'
    },
                    desc: {
      zh: '课程目标\n本课程与学校升学辅导体系并行，提供更具个性化的一对一、实操型导师制支持，通过持续的学业追踪、紧密的支持与量身定制的策略，陪伴每位学生走完大学申请之旅。\n\n课程重点\n个性化的一对一学术与大学规划；持续的进度追踪（学科、成绩与项目完成情况）；与学校教师和部门密切协作；超越标准学校指导的定制化策略；申请全程的导师式支持。',
      en: 'Programme Aim\nThis programme works alongside the school\'s counselling provision, offering a more personalised, one-to-one and hands-on mentorship approach, with continuous academic tracking, close support, and tailored strategies to guide each student through their university application journey.\n\nFocus\nPersonalised 1:1 academic and university planning; Ongoing progress monitoring (subjects, grades, and project completion); Close coordination with school teachers and departments; Tailored strategy beyond standard school guidance; Mentorship-style support throughout the application journey.',
      th: 'เป้าหมายโปรแกรม\nโปรแกรมนี้ทำงานคู่ขนานกับการให้คำปรึกษาของโรงเรียน มอบแนวทางเมนเทอร์ที่เฉพาะบุคคลมากขึ้น แบบตัวต่อตัวและลงมือปฏิบัติจริง พร้อมการติดตามผลการเรียนอย่างต่อเนื่อง การสนับสนุนอย่างใกล้ชิด และกลยุทธ์ที่ปรับแต่งเฉพาะ เพื่อนำนักเรียนแต่ละคนตลอดเส้นทางการสมัครมหาวิทยาลัย\n\nจุดเน้น\nการวางแผนวิชาการและมหาวิทยาลัยแบบตัวต่อตัวเฉพาะบุคคล; การติดตามความคืบหน้าอย่างต่อเนื่อง (วิชา ผลการเรียน และความสำเร็จของโครงการ); การประสานงานอย่างใกล้ชิดกับครูและหน่วยงานของโรงเรียน; กลยุทธ์ที่ปรับแต่งเฉพาะเหนือกว่าคำแนะนำมาตรฐานของโรงเรียน; การสนับสนุนแบบเมนเทอร์ตลอดเส้นทางการสมัคร'
    }
,    serviceAdvantages: {
      zh: ['全球留学规划，不限申请国家/地区', '业内领先的导师服务经验', '申请小组团队合作制', '完整细致的时间与任务规划', '个性化定制背提活动，自主设计稀缺项目', '头脑风暴选校及文书写作', '文书管理系统，文稿与申请流程多重审核'],
      en: ['Global application planning — no country or region restrictions', 'Industry-leading mentor experience', 'Dedicated application team collaboration', 'Comprehensive and detailed timeline & task planning', 'Personalised background-building activities with self-designed distinctive projects', 'Brainstorming for school selection and essay writing', 'Essay management system with multi-round review of documents and the application process'],
      th: ['วางแผนศึกษาต่อทั่วโลก ไม่จำกัดประเทศ/ภูมิภาคที่สมัคร', 'ประสบการณ์เมนเทอร์ชั้นนำในวงการ', 'ทำงานเป็นทีมเฉพาะด้านการสมัคร', 'วางแผนเวลาและงานอย่างสมบูรณ์และละเอียด', 'กิจกรรมเสริมประวัติเฉพาะบุคคล ออกแบบโปรเจกต์พิเศษที่หายาก', 'ระดมสมองเลือกมหาวิทยาลัยและเขียนเรียงความ', 'ระบบจัดการเรียงความ ตรวจสอบเอกสารและกระบวนการสมัครหลายรอบ']
    },
    serviceSteps: {
      zh: ['前期咨询', '学术实力评测', '外语能力评测', '推荐留学申请目标', '签约付款', '启动服务', 'SWOT 分析', '整体留学规划方案', '背景提升详细规划', '标准化考试备考指导', '学校和专业定位', '文书头脑风暴', '完成网申提交手续', '院校面试辅导', 'OFFER 获得', '签证、行前准备', '大学入学'],
      en: ['Initial consultation', 'Academic assessment', 'Language proficiency assessment', 'Recommended application targets', 'Contract & payment', 'Service kick-off', 'SWOT analysis', 'Overall study-abroad plan', 'Detailed background-enhancement plan', 'Standardised test preparation guidance', 'School & major positioning', 'Essay brainstorming', 'Online application submission', 'Interview coaching', 'Offers received', 'Visa & pre-departure preparation', 'University enrolment'],
      th: ['ปรึกษาเบื้องต้น', 'ประเมินความสามารถทางวิชาการ', 'ประเมินความสามารถทางภาษา', 'แนะนำเป้าหมายการสมัคร', 'ทำสัญญาและชำระเงิน', 'เริ่มให้บริการ', 'วิเคราะห์ SWOT', 'แผนการศึกษาต่อโดยรวม', 'แผนเสริมประวัติโดยละเอียด', 'แนะแนวเตรียมสอบมาตรฐาน', 'กำหนดมหาวิทยาลัยและสาขา', 'ระดมสมองเรียงความ', 'ยื่นใบสมัครออนไลน์', 'ฝึกซ้อมสัมภาษณ์', 'ได้รับข้อเสนอ (OFFER)', 'วีซ่าและเตรียมเดินทาง', 'เข้าศึกษามหาวิทยาลัย']
    }
  }
);

/* =========================================================
 * 一对一课程定制专题页内容（路由 #/custom）
 * ========================================================= */
const CUSTOM_PAGE = {
  title: { zh: '一对一课程定制', en: '1:1 Personalised Tutoring', th: 'หลักสูตรส่วนตัวแบบกำหนดเอง' },
  subtitle: {
    zh: '根据每位学生的学习需求、目标与节奏量身打造的学术辅导',
    en: 'Tailored academic support designed around each student\u2019s learning needs, goals and pace.',
    th: 'การสนับสนุนทางวิชาการเฉพาะบุคคลที่ออกแบบตามความต้องการ เป้าหมาย และจังหวะการเรียนรู้ของนักเรียนแต่ละคน'
  },
  contactTitle: { zh: '咨询方式', en: 'Contact Us', th: 'ช่องทางติดต่อ' },
  /* 1v1 课程总览表（来源：All Programmes 2026-2027 Course Guide，2026-08-07 加入） */
  programmesTitle: { zh: '1 对 1 课程总览', en: '1-on-1 Course Catalogue', th: 'แค็ตตาล็อกหลักสูตร 1-ต่อ-1' },
  programmesIntro: {
    zh: '以下为 All A\u0027s 一对一课程的完整列表，分为【学术辅导】与【学科竞赛备赛】两个项目。',
    en: 'Below is the complete catalogue of All A\u0027s 1-on-1 courses, grouped into two programmes: Academic Tutoring and Academic Competition Preparation.',
    th: 'รายการหลักสูตร 1-ต่อ-1 ทั้งหมดของ All A\u0027s แบ่งออกเป็นสองโปรแกรม: ติวเตอร์วิชาการ และเตรียมการแข่งขันวิชาการ'
  },
  programmes: {
    en: [
      {
        name: 'Academic Tutoring & Subject Performance Programme',
        aim: 'This programme is designed to provide individualised academic support tailored to each student’s needs, with the goal of improving subject understanding, boosting confidence, and achieving measurable academic progress.',
        focus: 'Subject support, academic improvement, and exam preparation\nUK Curriculum (KS1–KS5), IGCSE, A-Level / AP / IB',
        years: 'Y1 – Y13',
        format: '1 on 1',
        subjects: [
          ['1', 'English Reading and Writing', 'Y1–Y13'],
          ['2', 'Math', 'Y1–Y13'],
          ['3', 'Science (Chemistry / Biology / Physics)', 'Y2–Y9'],
          ['4', 'Chemistry (IGCSE / A-Level)', 'Y7–Y13'],
          ['5', 'Biology (IGCSE / A-Level)', 'Y7–Y13'],
          ['6', 'Physics (IGCSE / A-Level)', 'Y7–Y13'],
          ['7', 'Computer Science (IGCSE / A-Level)', 'Y7–Y13'],
          ['8', 'History (IGCSE / A-Level)', 'Y7–Y13'],
          ['9', 'Geography (IGCSE / A-Level)', 'Y7–Y13'],
          ['10', 'Sociology (IGCSE / A-Level)', 'Y10–Y13'],
          ['11', 'Phycology (IGCSE / A-Level)', 'Y10–Y13']
        ]
      },
      {
        name: 'Academic Competition Preparation Programme',
        aim: '1. This programme is designed to prepare students for subject-specific academic competitions, helping them develop advanced thinking skills, deepen subject knowledge, and achieve outstanding results in national and international contests.\n2. We provide personalised competition guidance and targeted training based on each student’s age and needs, helping them build strong subject skills, excel in competitions, and support their long-term academic goals.\n3. Tailored to each student’s age and learning needs, we offer suitable competition pathways and targeted training to strengthen subject mastery and competition skills, supporting long-term academic planning.',
        focus: 'Subject-specific competition training and high-level academic development\nUK Curriculum, IGCSE, A-Level, AP, IB, and international competition standards',
        years: 'Y2 – Y13',
        format: '1 on 1',
        subjects: [
          ['12', 'Math Competition', 'Y2–Y13'],
          ['13', 'Writing Competition', 'Y7–Y13'],
          ['14', 'Science Competition', 'Y2–Y13'],
          ['15', 'Biology Competition', 'Y7–Y13'],
          ['16', 'Physics Competition', 'Y7–Y13'],
          ['17', 'Chemistry Competition', 'Y7–Y13'],
          ['18', 'Computer Science Competition', 'Y7–Y13'],
          ['19', 'History Competition', 'Y7–Y13'],
          ['20', 'Geography Competition', 'Y7–Y13'],
          ['21', 'Sociology Competition', 'Y9–Y13'],
          ['22', 'Psychology Competition', 'Y9–Y13'],
          ['23', 'Public Speaking / Debate / MUN Competition', 'Y5–Y13'],
          ['24', 'Economics & Business Competition', 'Y7–Y13']
        ]
      }
    ],
    zh: [
      {
        name: '学术辅导与学科表现提升项目',
        aim: '本项目旨在根据每位学生的需求提供个性化的学术支持，帮助学生加深学科理解、增强学习信心，并取得可衡量的学业进步。',
        focus: '学科支持、学业提升与考试备考\n英国课程（KS1–KS5）、IGCSE、A-Level / AP / IB',
        years: 'Y1 – Y13',
        format: '1 对 1',
        subjects: [
          ['1', '英语阅读与写作（English Reading and Writing）', 'Y1–Y13'],
          ['2', '数学（Math）', 'Y1–Y13'],
          ['3', '科学（Chemistry / Biology / Physics）', 'Y2–Y9'],
          ['4', '化学（IGCSE / A-Level）', 'Y7–Y13'],
          ['5', '生物（IGCSE / A-Level）', 'Y7–Y13'],
          ['6', '物理（IGCSE / A-Level）', 'Y7–Y13'],
          ['7', '计算机科学（IGCSE / A-Level）', 'Y7–Y13'],
          ['8', '历史（IGCSE / A-Level）', 'Y7–Y13'],
          ['9', '地理（IGCSE / A-Level）', 'Y7–Y13'],
          ['10', '社会学（IGCSE / A-Level）', 'Y10–Y13'],
          ['11', '心理学（IGCSE / A-Level）', 'Y10–Y13']
        ]
      },
      {
        name: '学术竞赛备赛项目',
        aim: '1. 本项目旨在帮助学生备战学科专项学术竞赛，培养高阶思维能力、深化学科知识，并在国家级与国际赛事中取得优异成绩。\n2. 我们根据每位学生的年龄与需求提供个性化的竞赛指导和针对性训练，帮助学生夯实学科基础、在竞赛中脱颖而出，并支撑其长期学业目标。\n3. 根据学生的年龄与学习需求，我们匹配相应的竞赛路径并提供针对性训练，强化学科素养与竞赛能力，助力长线学业规划。',
        focus: '学科专项竞赛训练与高水平学术发展\n英国课程、IGCSE、A-Level、AP、IB 及国际竞赛标准',
        years: 'Y2 – Y13',
        format: '1 对 1',
        subjects: [
          ['12', '数学竞赛（Math Competition）', 'Y2–Y13'],
          ['13', '写作竞赛（Writing Competition）', 'Y7–Y13'],
          ['14', '科学竞赛（Science Competition）', 'Y2–Y13'],
          ['15', '生物竞赛（Biology Competition）', 'Y7–Y13'],
          ['16', '物理竞赛（Physics Competition）', 'Y7–Y13'],
          ['17', '化学竞赛（Chemistry Competition）', 'Y7–Y13'],
          ['18', '计算机科学竞赛（Computer Science Competition）', 'Y7–Y13'],
          ['19', '历史竞赛（History Competition）', 'Y7–Y13'],
          ['20', '地理竞赛（Geography Competition）', 'Y7–Y13'],
          ['21', '社会学竞赛（Sociology Competition）', 'Y9–Y13'],
          ['22', '心理学竞赛（Psychology Competition）', 'Y9–Y13'],
          ['23', '演讲 / 辩论 / MUN 竞赛', 'Y5–Y13'],
          ['24', '经济与商务竞赛（Economics & Business Competition）', 'Y7–Y13']
        ]
      }
    ],
    th: [
      {
        name: 'โปรแกรมติวเตอร์วิชาการและผลการเรียน',
        aim: 'โปรแกรมนี้ออกแบบมาเพื่อมอบการสนับสนุนทางวิชาการเฉพาะบุคคลตามความต้องการของนักเรียนแต่ละคน โดยมีเป้าหมายเพื่อพัฒนาความเข้าใจในรายวิชา เสริมสร้างความมั่นใจ และสร้างความก้าวหน้าทางการเรียนที่วัดผลได้',
        focus: 'เสริมวิชาเรียน พัฒนาผลการเรียน และเตรียมสอบ\nหลักสูตรอังกฤษ (KS1–KS5), IGCSE, A-Level / AP / IB',
        years: 'ปี 1 – ปี 13',
        format: '1 ต่อ 1',
        subjects: [
          ['1', 'การอ่านและเขียนภาษาอังกฤษ (English Reading and Writing)', 'ปี 1–13'],
          ['2', 'คณิตศาสตร์ (Math)', 'ปี 1–13'],
          ['3', 'วิทยาศาสตร์ (Chemistry / Biology / Physics)', 'ปี 2–9'],
          ['4', 'เคมี (IGCSE / A-Level)', 'ปี 7–13'],
          ['5', 'ชีววิทยา (IGCSE / A-Level)', 'ปี 7–13'],
          ['6', 'ฟิสิกส์ (IGCSE / A-Level)', 'ปี 7–13'],
          ['7', 'วิทยาการคอมพิวเตอร์ (IGCSE / A-Level)', 'ปี 7–13'],
          ['8', 'ประวัติศาสตร์ (IGCSE / A-Level)', 'ปี 7–13'],
          ['9', 'ภูมิศาสตร์ (IGCSE / A-Level)', 'ปี 7–13'],
          ['10', 'สังคมวิทยา (IGCSE / A-Level)', 'ปี 10–13'],
          ['11', 'จิตวิทยา (IGCSE / A-Level)', 'ปี 10–13']
        ]
      },
      {
        name: 'โปรแกรมเตรียมการแข่งขันวิชาการ',
        aim: '1. โปรแกรมนี้ออกแบบมาเพื่อเตรียมนักเรียนสำหรับการแข่งขันวิชาการเฉพาะวิชา ช่วยพัฒนาทักษะการคิดขั้นสูง เจาะลึกความรู้ในรายวิชา และสร้างผลงานที่โดดเด่นในการแข่งขันระดับประเทศและนานาชาติ\n2. เรามอบคำแนะนำด้านการแข่งขันเฉพาะบุคคลและการฝึกซ้อมที่ตรงจุดตามอายุและความต้องการของนักเรียนแต่ละคน ช่วยสร้างทักษะวิชาการที่แข็งแกร่ง โดดเด่นในการแข่งขัน และสนับสนุนเป้าหมายการเรียนระยะยาว\n3. เราจับคู่เส้นทางการแข่งขันที่เหมาะสมและฝึกซ้อมอย่างตรงจุดตามอายุและความต้องการ เสริมความเชี่ยวชาญในรายวิชาและทักษะการแข่งขัน สนับสนุนการวางแผนการเรียนระยะยาว',
        focus: 'การฝึกซ้อมการแข่งขันเฉพาะวิชาและการพัฒนาวิชาการระดับสูง\nหลักสูตรอังกฤษ, IGCSE, A-Level, AP, IB และมาตรฐานการแข่งขันนานาชาติ',
        years: 'ปี 2 – ปี 13',
        format: '1 ต่อ 1',
        subjects: [
          ['12', 'การแข่งขันคณิตศาสตร์ (Math Competition)', 'ปี 2–13'],
          ['13', 'การแข่งขันการเขียน (Writing Competition)', 'ปี 7–13'],
          ['14', 'การแข่งขันวิทยาศาสตร์ (Science Competition)', 'ปี 2–13'],
          ['15', 'การแข่งขันชีววิทยา (Biology Competition)', 'ปี 7–13'],
          ['16', 'การแข่งขันฟิสิกส์ (Physics Competition)', 'ปี 7–13'],
          ['17', 'การแข่งขันเคมี (Chemistry Competition)', 'ปี 7–13'],
          ['18', 'การแข่งขันวิทยาการคอมพิวเตอร์ (Computer Science Competition)', 'ปี 7–13'],
          ['19', 'การแข่งขันประวัติศาสตร์ (History Competition)', 'ปี 7–13'],
          ['20', 'การแข่งขันภูมิศาสตร์ (Geography Competition)', 'ปี 7–13'],
          ['21', 'การแข่งขันสังคมวิทยา (Sociology Competition)', 'ปี 9–13'],
          ['22', 'การแข่งขันจิตวิทยา (Psychology Competition)', 'ปี 9–13'],
          ['23', 'การแข่งขันการพูด / โต้วาที / MUN', 'ปี 5–13'],
          ['24', 'การแข่งขันเศรษฐศาสตร์และธุรกิจ (Economics & Business Competition)', 'ปี 7–13']
        ]
      }
    ]
  }
};
