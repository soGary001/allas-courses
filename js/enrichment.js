/* 2026–27 course additions. Fees and schedules follow the school forms and the HSK handbook. */
{
  const language = (zh, en, th) => ({ zh, en, th });

  COURSES.push(
    {
      id: 'chinese-hsk', cat: 'enrichment', subject: 'chinese',
      name: language('中文语言发展与 HSK 卓越课程', 'Chinese Language & HSK Excellence Programme', 'หลักสูตรภาษาจีนและ HSK สู่ความเป็นเลิศ'),
      grades: 'Y5+', gmin: 5, gmax: 13, mentor: 'Ms Zhao',
      format: language('每组最多 5 人，按中文水平分班', 'Up to 5 per group, placed by Chinese proficiency', 'กลุ่มละไม่เกิน 5 คน แบ่งตามระดับภาษาจีน'),
      startMonth: '2027-01', start: language('2027年1月', 'January 2027', 'มกราคม 2027'),
      schedule: language('周日，时段见各班课表', 'Sundays, at the times listed for each class', 'วันอาทิตย์ ตามเวลาของแต่ละกลุ่ม'),
      price: 24000, feeRange: language('24,000–60,800 THB', '24,000–60,800 THB', '24,000–60,800 THB'),
      enquiryEmails: [CONFIG.email, 'hongyanzhao@lannaist.ac.th'],
      guideUrl: 'https://drive.google.com/file/d/1fhZU2JrrOoY_zVHXQkSDXHUjUyd6if5d/view',
      summary: language('面向中文非母语学生，提供新 HSK 1–3 级语言发展班和考试强化班。', 'Non-native Chinese speakers can choose language development or intensive exam preparation at HSK levels 1–3.', 'สำหรับผู้เรียนที่ไม่ได้ใช้ภาษาจีนเป็นภาษาแม่ เลือกพัฒนาภาษาหรือเตรียมสอบ HSK ระดับ 1–3'),
      desc: language('发展班使用新版 HSK 教材，练习词汇、发音和听说读写。备考班适合已有中文基础的学生，通过分项练习和模拟考试提升应试能力。赵老师会根据学生现有水平安排班级。', 'Development classes use the New HSK textbooks to build vocabulary, pronunciation, listening, speaking, reading and writing. Exam classes use targeted practice and mock tests for students with a foundation in Chinese. Ms Zhao assesses language proficiency for placement.', 'ชั้นพัฒนาภาษาใช้หนังสือ New HSK เพื่อฝึกคำศัพท์ การออกเสียง และทักษะฟัง พูด อ่าน เขียน ส่วนชั้นเตรียมสอบเน้นแบบฝึกเฉพาะด้านและข้อสอบจำลองสำหรับผู้ที่มีพื้นฐานแล้ว ครูจ้าวประเมินระดับก่อนจัดกลุ่ม')
    },
    {
      id: 'kangaroo-math', cat: 'competition', subject: 'math',
      name: language('袋鼠数学竞赛培训', 'Kangaroo Mathematics Competition Training', 'หลักสูตรเตรียมแข่งขันคณิตศาสตร์ Kangaroo'),
      grades: 'Y4–Y10', gmin: 4, gmax: 10, cover: 'assets/img/math-1.jpg',
      startMonth: '2026-12', start: language('2026年12月3日至2027年3月24日', '3 December 2026 – 24 March 2027', '3 ธันวาคม 2026 – 24 มีนาคม 2027'),
      duration: language('10 周训练，另预留 2 周复习或补课', '10 training weeks plus 2 weeks reserved for revision or catch-up', 'ฝึก 10 สัปดาห์ และสำรองอีก 2 สัปดาห์สำหรับทบทวนหรือเรียนชดเชย'),
      hours: language('20 小时', '20 hours', '20 ชั่วโมง'),
      schedule: language('Y4–Y6 周六 10:30–12:30；Y7–Y10 周三 15:45–17:45', 'Y4–Y6 Saturday 10:30–12:30 · Y7–Y10 Wednesday 15:45–17:45', 'Y4–Y6 เสาร์ 10:30–12:30 · Y7–Y10 พุธ 15:45–17:45'),
      competitionDate: language('2027年3月28日，周日，校内举行', 'Sunday 28 March 2027 at school', 'วันอาทิตย์ที่ 28 มีนาคม 2027 ที่โรงเรียน'),
      price: 16000,
      summary: language('通过袋鼠数学题练习逻辑推理、分析和解决问题。', 'Practise logical reasoning and problem solving with Kangaroo-style competition questions.', 'ฝึกการให้เหตุผลและแก้โจทย์ด้วยคำถามแนวการแข่งขัน Kangaroo'),
      desc: language('学生按年级分组，练习观察题目中的模式、比较解法并解释推理过程，备战3月在校内举行的比赛。', 'Students train in year groups to recognise patterns, compare strategies and explain their reasoning ahead of the March competition at Lanna.', 'ผู้เรียนฝึกตามกลุ่มชั้นปีเพื่อหารูปแบบ เปรียบเทียบวิธีแก้โจทย์ และอธิบายเหตุผล เตรียมพร้อมสำหรับการแข่งขันในเดือนมีนาคมที่โรงเรียน')
    },
    {
      id: 'ai-computing', cat: 'enrichment', subject: 'cs',
      searchTerms: 'Coding & AI · AI & Computational Thinking · 编程与人工智能',
      name: language('人工智能与计算思维卓越课程', 'Artificial Intelligence and Computational Thinking Champions Programme', 'หลักสูตรปัญญาประดิษฐ์และการคิดเชิงคำนวณ'),
      grades: 'Y5–Y9', gmin: 5, gmax: 9, mentor: 'Mr Dilip', cover: 'assets/img/cs-tut.jpg',
      startMonth: '2027-01', start: language('2027年1月18日至6月4日', '18 January – 4 June 2027', '18 มกราคม – 4 มิถุนายน 2027'),
      duration: language('20 周', '20 weeks', '20 สัปดาห์'),
      schedule: language('Y5–Y6 周六 10:30–11:30；Y7 周一、Y8 周三、Y9 周五 16:00–17:30', 'Y5–Y6 Saturday 10:30–11:30 · Y7 Monday, Y8 Wednesday and Y9 Friday 16:00–17:30', 'Y5–Y6 เสาร์ 10:30–11:30 · Y7 จันทร์ Y8 พุธ และ Y9 ศุกร์ เวลา 16:00–17:30'),
      price: 24000, guideUrl: 'https://drive.google.com/file/d/1iehVF5-cOHxHkJ5g9IY_cy_q8aQobCMa/view',
      summary: language('从 Scratch 到 Python，用真实数据和编程项目理解 AI 的能力与局限。', 'Explore AI through Scratch or Python, data and a project designed by each student.', 'เรียนรู้ AI ด้วย Scratch หรือ Python ผ่านข้อมูลและโครงงานที่นักเรียนออกแบบเอง'),
      desc: language('Y5–Y7 使用 Scratch，Y8–Y9 使用 Python。学生编写和调试算法、训练简单模型，并展示自己的项目，例如学习聊天机器人或数据工具。所有年级都学习隐私保护、信息核实和识别偏见。Y7–Y9 各班为 30 小时。', 'Years 5–7 work in Scratch and Years 8–9 in Python. Students debug algorithms, train simple models and present a project, such as a study chatbot or a data tool. All groups practise checking sources, protecting privacy and recognising bias. The Years 7–9 groups each have 30 hours of teaching.', 'Y5–Y7 ใช้ Scratch ส่วน Y8–Y9 ใช้ Python นักเรียนฝึกแก้ข้อผิดพลาดของอัลกอริทึม ฝึกโมเดลอย่างง่าย และนำเสนอโครงงาน เช่น แชตบอตช่วยเรียนหรือเครื่องมือวิเคราะห์ข้อมูล ทุกกลุ่มฝึกตรวจสอบแหล่งข้อมูล ปกป้องความเป็นส่วนตัว และรู้เท่าทันอคติ กลุ่ม Y7–Y9 เรียนกลุ่มละ 30 ชั่วโมง')
    },
    {
      id: 'research-innovation', cat: 'enrichment', subject: 'research',
      searchTerms: 'Research Innovation & Patent · 专利 · สิทธิบัตร',
      name: language('LANNA 科研与创新课程（清迈大学教授指导）', 'LANNA Research & Innovation Programme (with CMU Professors)', 'หลักสูตรวิจัยและนวัตกรรม LANNA กับอาจารย์มหาวิทยาลัยเชียงใหม่'),
      grades: 'Y7–Y13', gmin: 7, gmax: 13, cover: 'assets/img/sci-1.jpg',
      startMonth: 'term2', start: language('2026–2027 学年第二学期', 'Term 2, 2026–2027 academic year', 'ภาคเรียนที่ 2 ปีการศึกษา 2026–2027'),
      duration: language('约一学年', 'Approximately one academic year', 'ประมาณหนึ่งปีการศึกษา'),
      format: language('每组 2–3 人', 'Groups of 2–3 students', 'กลุ่มละ 2–3 คน'),
      schedule: language('周末每周 2 小时，主要在 LANNA 校内', '2 hours per week on weekends, primarily at Lanna', 'สุดสัปดาห์ สัปดาห์ละ 2 ชั่วโมง โดยเรียนที่โรงเรียนลานนาเป็นหลัก'),
      price: null, feeEnquiry: true,
      summary: language('在清迈大学理学院教授指导下，围绕自己的学术兴趣开展小组研究。', 'Work with a Chiang Mai University science professor on a small-group project shaped by your academic interests.', 'ทำโครงงานกลุ่มเล็กตามความสนใจ ภายใต้คำแนะนำของอาจารย์คณะวิทยาศาสตร์ มหาวิทยาลัยเชียงใหม่'),
      desc: language('学生先与教授讨论选题，可探索健康科学、工程、自然科学、计算机、经济与社会科学。项目成果可以是研究论文、产品或可运行的原型。合适的成果可参加竞赛或探索申请泰国小专利或专利的机会。', 'Students discuss their interests with the professor and choose a topic in health sciences, engineering, natural sciences, computing, economics or social sciences. Projects may lead to a paper, product or working prototype, with opportunities to enter competitions or explore petty patent and patent applications in Thailand.', 'นักเรียนหารือกับอาจารย์เพื่อเลือกหัวข้อด้านสุขภาพ วิศวกรรม วิทยาศาสตร์ธรรมชาติ คอมพิวเตอร์ เศรษฐศาสตร์ หรือสังคมศาสตร์ ผลงานอาจเป็นบทความวิจัย ผลิตภัณฑ์ หรือต้นแบบที่ใช้งานได้ และอาจต่อยอดสู่การแข่งขันหรือการยื่นจดอนุสิทธิบัตรหรือสิทธิบัตรในประเทศไทย')
    }
  );

  const development = language('中文发展班', 'Chinese Development', 'ชั้นพัฒนาภาษาจีน');
  const preparation = language('考试强化备考班', 'Intensive Exam Preparation', 'ชั้นเตรียมสอบเข้มข้น');
  const head = language(['班级', '周日时段', '周数', '总课时', '学费（THB）'], ['Class', 'Sunday time', 'Weeks', 'Hours', 'Fee (THB)'], ['กลุ่มเรียน', 'เวลาวันอาทิตย์', 'สัปดาห์', 'ชั่วโมงรวม', 'ค่าเรียน (บาท)']);
  const termFee = language('HSK 3 跨两个学期，每学期 30,400 THB。HSK 1 和 2 为1月至5月。', 'HSK 3 runs across two semesters at 30,400 THB per semester. HSK 1 and 2 run from January to May.', 'HSK 3 เรียนสองภาค ภาคละ 30,400 บาท ส่วน HSK 1 และ 2 เรียนตั้งแต่มกราคมถึงพฤษภาคม');
  const oral = language('HSK 3 备考包括口语训练。', 'Level 3 exam preparation includes speaking practice.', 'กลุ่มเตรียมสอบระดับ 3 ฝึกสอบพูดด้วย');
  COURSE_OVERVIEW_MAP['chinese-hsk'] = 'chinese-hsk';
  COURSE_OVERVIEWS['chinese-hsk'] = {};
  for (const lang of ['zh', 'en', 'th']) {
    COURSE_OVERVIEWS['chinese-hsk'][lang] = [
      { h: development[lang], table: { head: head[lang], rows: [
        ['HSK 1', '08:00–10:00', '15', '30', '24,000'],
        ['HSK 2', '08:00–10:00', '15', '30', '24,000'],
        ['HSK 3', '10:15–12:15', '38', '76', '60,800']
      ] }, note: termFee[lang] },
      { h: preparation[lang], table: { head: head[lang], rows: [
        ['HSK 1–2', '13:00–15:00', '15', '30', '24,000'],
        ['HSK 3', '15:15–18:15', '15', '45', '36,000']
      ] }, note: oral[lang] }
    ];
  }
}
