/* 2026–27 course additions. Fees and schedules follow the school forms and the HSK handbook. */
{
  const language = (zh, en, th) => ({ zh, en, th });

  COURSES.push(
    {
      id: 'chinese-hsk', cat: 'enrichment', subject: 'chinese',
      cover: 'assets/img/covers/hsk-programme.png', fullCover: true,
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
      introTitle: language('课程介绍', 'About This Course', 'รายละเอียดหลักสูตร'),
      name: language('袋鼠数学竞赛培训课程', 'Kangaroo Mathematics Competition Training Programme', 'หลักสูตรเตรียมแข่งขันคณิตศาสตร์ Kangaroo'),
      grades: 'Y4–Y10', gmin: 4, gmax: 10, cover: 'assets/img/covers/kangaroo-math-thailand.png', fullCover: true,
      introImage: 'assets/img/covers/kangaroo-puzzle.jpg',
      introImageAlt: language('袋鼠数学竞赛训练活动', 'Kangaroo mathematics training activity', 'กิจกรรมฝึกคณิตศาสตร์ Kangaroo'),
      startMonth: '2026-12', start: language('2026年12月3日至2027年3月24日', '3 December 2026 – 24 March 2027', '3 ธันวาคม 2026 – 24 มีนาคม 2027'),
      duration: language('10 周训练，另预留 2 周复习或补课', '10 training weeks plus 2 weeks reserved for revision or catch-up', 'ฝึก 10 สัปดาห์ และสำรองอีก 2 สัปดาห์สำหรับทบทวนหรือเรียนชดเชย'),
      hours: language('20 小时', '20 hours', '20 ชั่วโมง'),
      schedule: language('Y4–Y6 周六 10:30–12:30；Y7–Y10 周三 15:45–17:45', 'Y4–Y6 Saturday 10:30–12:30 · Y7–Y10 Wednesday 15:45–17:45', 'Y4–Y6 เสาร์ 10:30–12:30 · Y7–Y10 พุธ 15:45–17:45'),
      competitionDate: language('2027年3月28日，周日，校内举行', 'Sunday 28 March 2027 at school', 'วันอาทิตย์ที่ 28 มีนาคม 2027 ที่โรงเรียน'),
      price: 16000,
      summary: language('通过袋鼠数学题练习逻辑推理、分析和解决问题。', 'Practise logical reasoning and problem solving with Kangaroo-style competition questions.', 'ฝึกการให้เหตุผลและแก้โจทย์ด้วยคำถามแนวการแข่งขัน Kangaroo'),
      desc: {
      zh: `袋鼠数学竞赛是一项广受欢迎的国际数学竞赛，通过有趣且富有挑战的题目，培养学生的逻辑思维、数学推理、创造力和解题能力。备赛课程通过互动学习和竞赛题练习巩固数学基础，帮助学生建立信心并掌握有效的解题方法。

课程目标
• 加强数学推理和逻辑思维。
• 培养创造性和独立解题能力。
• 增强应对挑战性数学问题的信心。
• 为袋鼠数学竞赛做好准备。
• 培养积极的学习态度和持久的数学兴趣。

课程结构
共 10 节课，每节 2 小时，合计 20 小时系统训练。`,
      en: `The Kangaroo Mathematics Competition is a popular international mathematics competition that encourages students to develop logical thinking, mathematical reasoning, creativity, and problem-solving skills through engaging and challenging questions.
Our preparation programme aims to strengthen students' mathematical foundations, build confidence, and introduce effective problem-solving strategies through interactive learning and competition-style practice.
Programme Objectives:
• Strengthen mathematical reasoning and logical thinking.
• Develop creative and independent problem-solving skills.
• Improve confidence in tackling challenging mathematics questions.
• Prepare students for the Kangaroo Mathematics Competition.
• Foster a positive attitude and lasting interest in mathematics.
Course Structure:
The programme consists of 10 sessions, with each session lasting 2 hours, providing a total of 20 hours of structured training.`,
      th: `การแข่งขันคณิตศาสตร์ Kangaroo เป็นการแข่งขันนานาชาติที่ส่งเสริมการคิดเชิงตรรกะ การให้เหตุผลทางคณิตศาสตร์ ความคิดสร้างสรรค์ และการแก้ปัญหาผ่านโจทย์ที่สนุกและท้าทาย นักเรียนจะเสริมพื้นฐาน เพิ่มความมั่นใจ และเรียนรู้กลยุทธ์แก้โจทย์ผ่านกิจกรรมโต้ตอบและการฝึกทำโจทย์แนวแข่งขัน

เป้าหมายของหลักสูตร
• เสริมทักษะการให้เหตุผลทางคณิตศาสตร์และการคิดเชิงตรรกะ
• พัฒนาการแก้ปัญหาอย่างสร้างสรรค์และเป็นอิสระ
• เพิ่มความมั่นใจเมื่อเผชิญโจทย์ที่ท้าทาย
• เตรียมพร้อมสำหรับการแข่งขัน Kangaroo
• สร้างทัศนคติที่ดีและความสนใจในคณิตศาสตร์อย่างต่อเนื่อง

โครงสร้างหลักสูตร
เรียน 10 ครั้ง ครั้งละ 2 ชั่วโมง รวมการฝึกอย่างเป็นระบบ 20 ชั่วโมง`
    }
    },
    {
      id: 'ai-computing', cat: 'enrichment', subject: 'cs',
      introImage: 'assets/img/covers/ai-syllabus.png',
      searchTerms: 'Coding & AI · AI & Computational Thinking · 编程与人工智能',
      name: language('人工智能与计算思维卓越课程', 'Artificial Intelligence and Computational Thinking Champions Programme', 'หลักสูตรปัญญาประดิษฐ์และการคิดเชิงคำนวณ'),
      grades: 'Y5–Y9', gmin: 5, gmax: 9, mentor: 'Mr Dilip', cover: 'assets/img/covers/ai-coding-programme.png', fullCover: true,
      guideAfterFirstParagraph: true,
      startMonth: '2027-01', start: language('2027年1月18日至6月4日', '18 January – 4 June 2027', '18 มกราคม – 4 มิถุนายน 2027'),
      duration: language('20 周', '20 weeks', '20 สัปดาห์'),
      schedule: language('Y5–Y6 周六 10:30–11:30；Y7 周一、Y8 周三、Y9 周五 16:00–17:30', 'Y5–Y6 Saturday 10:30–11:30 · Y7 Monday, Y8 Wednesday and Y9 Friday 16:00–17:30', 'Y5–Y6 เสาร์ 10:30–11:30 · Y7 จันทร์ Y8 พุธ และ Y9 ศุกร์ เวลา 16:00–17:30'),
      price: 24000, guideUrl: 'https://drive.google.com/file/d/1iehVF5-cOHxHkJ5g9IY_cy_q8aQobCMa/view',
      summary: language('从 Scratch 到 Python，用真实数据和编程项目理解 AI 的能力与局限。', 'Explore AI through Scratch or Python, data and a project designed by each student.', 'เรียนรู้ AI ด้วย Scratch หรือ Python ผ่านข้อมูลและโครงงานที่นักเรียนออกแบบเอง'),
      desc: {
      zh: `人工智能正在改变青少年搜索、学习、交流和创作的方式。本课程以计算思维、数据和编程为基础，帮助学生准确理解 AI，负责任地运用它。

每个年级安排 20 节课，每节 1.5 小时，全年共 30 小时。学生通过实践编写和调试算法、收集整理数据、训练和测试简单的 AI 模型，并制作自己的项目。Y5–Y7 使用 Scratch，Y8–Y9 转向 Python。各年级学生都要设计、测试并展示成果，例如 Y5 的智能 Scratch 游戏、Y6 的回收分类器、Y7 的学习聊天机器人、Y8 对 AI 模型的公平性审查，以及 Y9 的 Python 数据工具。

各年级都学习保护个人信息、核查事实和来源、识别伪造图像和误导性内容、理解偏见，并如实说明何时使用了 AI。生成式 AI 由教师演示，学生无需注册 AI 服务，课程工具均可免费使用。

通过简短的知识测验、实践作品集和学年末项目评估进步。课程与剑桥小学及初中计算机课程相辅相成，为剑桥 IGCSE 计算机科学打基础，并为有意参加校外计算机和 AI 挑战赛的学生做准备。`,
      en: `Artificial intelligence now shapes how young people search, learn, communicate and create. This programme gives pupils an accurate, practical and responsible understanding of AI, built on firm foundations in computational thinking, data and programming.

Each year group has 20 lessons of 1 hour 30 minutes, giving 30 hours of learning across the year. Pupils learn by doing: they write and debug algorithms, collect and organise data, train and test simple AI models, and build their own projects. Programming begins with Scratch in Years 5 to 7 and moves to Python in Years 8 and 9. Every year ends with a project that pupils design, test and present, such as a smart Scratch game in Year 5, a recycling sorter in Year 6, a study chatbot in Year 7, a fairness audit of an AI model in Year 8 and a Python data tool in Year 9.

Safe and responsible use is taught in every year. Pupils learn to protect personal information, check facts and sources, recognise fake images and misleading content, understand bias, and be honest about when they have used AI. Generative AI is demonstrated by the teacher, so pupils do not need accounts with AI services, and every tool used is free.

Progress is assessed through short knowledge checks, a portfolio of practical work and the end-of-year project. The programme complements Cambridge Primary and Lower Secondary Computing, gives pupils a strong foundation for Cambridge IGCSE Computer Science, and prepares those who wish to take part in external computing and AI challenges.`,
      th: `AI กำลังเปลี่ยนวิธีที่เยาวชนค้นหา เรียนรู้ สื่อสาร และสร้างผลงาน หลักสูตรนี้สร้างความเข้าใจ AI ที่ถูกต้อง ใช้ได้จริง และมีความรับผิดชอบ บนพื้นฐานการคิดเชิงคำนวณ ข้อมูล และการเขียนโปรแกรม

แต่ละชั้นปีเรียน 20 คาบ คาบละ 1 ชั่วโมง 30 นาที รวม 30 ชั่วโมงตลอดปี นักเรียนเขียนและแก้ไขอัลกอริทึม รวบรวมและจัดระเบียบข้อมูล ฝึกและทดสอบโมเดล AI อย่างง่าย และทำโครงงานของตนเอง Y5–Y7 ใช้ Scratch ส่วน Y8–Y9 ใช้ Python ทุกชั้นปีออกแบบ ทดสอบ และนำเสนอโครงงาน เช่น เกม Scratch อัจฉริยะใน Y5 เครื่องคัดแยกวัสดุรีไซเคิลใน Y6 แชตบอตช่วยเรียนใน Y7 การตรวจสอบความเป็นธรรมของโมเดล AI ใน Y8 และเครื่องมือวิเคราะห์ข้อมูลด้วย Python ใน Y9

นักเรียนทุกชั้นปีฝึกปกป้องข้อมูลส่วนตัว ตรวจสอบข้อเท็จจริงและแหล่งข้อมูล รู้เท่าทันภาพปลอม เนื้อหาที่ชวนให้เข้าใจผิดและอคติ รวมทั้งเปิดเผยการใช้ AI อย่างตรงไปตรงมา ครูเป็นผู้สาธิต AI เชิงกำเนิด นักเรียนจึงไม่จำเป็นต้องสมัครบัญชี และเครื่องมือทุกชนิดใช้ได้ฟรี

ประเมินด้วยแบบทดสอบสั้น แฟ้มผลงานปฏิบัติ และโครงงานปลายปี เนื้อหาเสริม Cambridge Primary และ Lower Secondary Computing ปูพื้นฐานสำหรับ Cambridge IGCSE Computer Science และเตรียมผู้สนใจลงแข่งขันคอมพิวเตอร์และ AI ภายนอกโรงเรียน`
    }
    },
    {
      id: 'research-innovation', cat: 'enrichment', subject: 'research',
      searchTerms: 'Research Innovation & Patent · Intellectual Property · 专利 · 知识产权 · สิทธิบัตร',
      name: language('研究、创新与知识产权（IP）开发课程', 'Research, Innovation & Intellectual Property(IP) Development Programme', 'หลักสูตรการวิจัย นวัตกรรม และการพัฒนาทรัพย์สินทางปัญญา (IP)'),
      grades: 'Y7–Y13', gmin: 7, gmax: 13, cover: 'assets/img/covers/research-ip-programme.png', fullCover: true,
      mentor: language('经验丰富的科学家', 'Experienced scientists', 'นักวิทยาศาสตร์ผู้มีประสบการณ์'),
      enquiryLabel: language('更多详情请发邮件咨询', 'Please email for more details', 'สอบถามรายละเอียดเพิ่มเติมทางอีเมล'),
      startMonth: 'term2', start: language('2026–2027 学年第二学期', 'Term 2, 2026–2027 academic year', 'ภาคเรียนที่ 2 ปีการศึกษา 2026–2027'),
      duration: language('约一学年', 'Approximately one academic year', 'ประมาณหนึ่งปีการศึกษา'),
      format: language('每组 2–3 人', 'Groups of 2–3 students', 'กลุ่มละ 2–3 คน'),
      schedule: language('周末每周 2 小时，主要在 LANNA 校内', '2 hours per week on weekends, primarily at Lanna', 'สุดสัปดาห์ สัปดาห์ละ 2 ชั่วโมง โดยเรียนที่โรงเรียนลานนาเป็นหลัก'),
      price: null, feeEnquiry: true,
      summary: language('在科学家和学校学科教师的指导下开展小组研究，探索竞赛与知识产权申请。', 'Work with experienced scientists and school subject teachers on a research project, with opportunities for competitions and intellectual property applications.', 'ทำโครงงานวิจัยร่วมกับนักวิทยาศาสตร์และครูประจำวิชา พร้อมโอกาสเข้าร่วมการแข่งขันและยื่นคำขอทรัพย์สินทางปัญญา'),
      desc: {
        zh: `学术导师：经验丰富的科学家。学校的学科教师也将持续提供指导和学术支持。
招生对象：中学生（Y7–Y13）。

1. 项目概览
所有课程安排在周末。学生通过课堂以外的动手研究，争取将成果用于竞赛和知识产权（IP）申请。
项目开始前，导师会与学生讨论其学术优势、兴趣和拟申请的大学专业，再共同确定研究课题。例如：
• 医学、牙科与健康科学：健康创新、生物医学研究、辅助技术及其他适合的健康科学课题。
• 工程与技术：机器人、产品设计、环境工程和解决实际问题的技术方案。
• 生物与自然科学：生物多样性、环境研究、植物科学和生物学应用。
• 计算机科学：编程、智能系统、自动化和技术创新。
• 经济、商业与社会科学：应用研究、可持续发展、产品创新和跨学科项目。

2. 项目安排
• 每组 2–3 人，最多 3 人。
• 每周 2 小时，主要在 LANNA 校内进行，也可视项目需要另作安排。
• 完成一项研究或创新项目约需一学年，实际时长取决于课题复杂程度。
• 学生先与导师讨论，再围绕自身兴趣和拟申请的大学专业设计研究项目。
• 预期成果包括论文、创新产品或可运行的原型。学生有机会参加国内或国际竞赛，探索知识产权申请、后续开发或商业化。
建议优先考虑 Y10–Y12，也为 Y7–Y9 提供合适机会。Y13 学生可按个人时间安排考虑参加。

项目重点
通过实践研究取得可用于竞赛和知识产权（IP）申请的学术成果。`,
        en: `Academic Mentor: Experienced scientists
The project will also receive ongoing guidance and academic support from the school's subject teachers.
Target Students: Secondary (Years 7–13)
1. Programme Overview
All sessions would take place on weekends,
The programme aims to provide students with meaningful, hands-on research experiences that go beyond traditional extracurricular activities, with a strong focus on tangible academic outcomes---competitions-----Intellectual Property (IP) applications
Before beginning a project, the mentor would meet with students to discuss their academic strengths, personal interests and intended majors.
Research topics would then be developed accordingly.
For example:
1.Medicine, Dentistry and Health Sciences: Health-related innovation, biomedical research, assistive technologies or other appropriate health science projects.
2.Engineering and Technology: Robotics, product design, environmental engineering and practical technological solutions.
3.Biology and Natural Sciences: Biodiversity, environmental research, plant science and biological applications.
4.Computer Science: Programming, intelligent systems, automation and technology-based innovation.
5.Economics, Business and Social Sciences: Applied research, sustainability, product innovation and interdisciplinary projects.
2. Programme Structure
● Group Size: 2–3 students per group, maximum 3.
● Schedule: 2 hours per week, primarily at Lanna, with other suitable arrangements where appropriate.
● Duration: Approximately one academic year to complete a substantial research or innovation project. (Duration varies depending on the complexity of the research project)
● Personalised Research: Projects will be designed around students' academic interests and intended university majors, following initial discussions with the mentor.
● Expected Outcomes: Research papers, innovative products, or working prototypes, with opportunities to enter national and/or international competitions, explore Intellectual Property (IP) applications, and potentially pursue further development or commercialisation.
We recommend prioritising Years 10–12, while also offering suitable opportunities for Years 7–9. Year 13 participation may be considered based on individual availability.
Programme Focus
The programme aims to provide students with meaningful, hands-on research experiences that go beyond traditional extracurricular activities, with a strong focus on tangible academic outcomes---competitions-----Intellectual Property (IP) applications`,
        th: `ที่ปรึกษาทางวิชาการ: นักวิทยาศาสตร์ผู้มีประสบการณ์ โดยครูประจำวิชาของโรงเรียนจะให้คำแนะนำและสนับสนุนด้านวิชาการอย่างต่อเนื่อง
กลุ่มเป้าหมาย: นักเรียนมัธยมศึกษา Y7–Y13

1. ภาพรวมโครงการ
ทุกคาบจัดในช่วงสุดสัปดาห์ นักเรียนลงมือทำวิจัยนอกห้องเรียน โดยมุ่งสร้างผลงานที่สามารถส่งแข่งขันหรือใช้ประกอบการยื่นคำขอทรัพย์สินทางปัญญา (IP)
ก่อนเริ่มโครงการ ที่ปรึกษาจะพูดคุยกับนักเรียนเกี่ยวกับจุดแข็งทางวิชาการ ความสนใจ และสาขาที่ตั้งใจศึกษาต่อ เพื่อร่วมกันกำหนดหัวข้อวิจัย ตัวอย่างเช่น
• แพทยศาสตร์ ทันตแพทยศาสตร์ และวิทยาศาสตร์สุขภาพ: นวัตกรรมสุขภาพ การวิจัยชีวการแพทย์ เทคโนโลยีสิ่งอำนวยความสะดวก และโครงการวิทยาศาสตร์สุขภาพอื่น ๆ ที่เหมาะสม
• วิศวกรรมและเทคโนโลยี: หุ่นยนต์ การออกแบบผลิตภัณฑ์ วิศวกรรมสิ่งแวดล้อม และการใช้เทคโนโลยีแก้ปัญหาในทางปฏิบัติ
• ชีววิทยาและวิทยาศาสตร์ธรรมชาติ: ความหลากหลายทางชีวภาพ การวิจัยสิ่งแวดล้อม พืชศาสตร์ และการประยุกต์ใช้ชีววิทยา
• วิทยาการคอมพิวเตอร์: การเขียนโปรแกรม ระบบอัจฉริยะ ระบบอัตโนมัติ และนวัตกรรมทางเทคโนโลยี
• เศรษฐศาสตร์ ธุรกิจ และสังคมศาสตร์: การวิจัยประยุกต์ ความยั่งยืน นวัตกรรมผลิตภัณฑ์ และโครงการสหวิทยาการ

2. โครงสร้างโครงการ
• กลุ่มละ 2–3 คน ไม่เกิน 3 คน
• สัปดาห์ละ 2 ชั่วโมง โดยเรียนที่โรงเรียนลานนาเป็นหลัก และอาจปรับสถานที่ตามความเหมาะสม
• ใช้เวลาประมาณหนึ่งปีการศึกษาเพื่อทำโครงการวิจัยหรือนวัตกรรมให้สำเร็จ ระยะเวลาขึ้นอยู่กับความซับซ้อนของโครงการ
• หลังหารือกับที่ปรึกษา นักเรียนจะออกแบบโครงการตามความสนใจทางวิชาการและสาขาที่ตั้งใจศึกษาต่อ
• ผลงานอาจเป็นบทความวิจัย ผลิตภัณฑ์นวัตกรรม หรือต้นแบบที่ใช้งานได้ นักเรียนมีโอกาสเข้าร่วมการแข่งขันระดับชาติหรือระดับนานาชาติ ศึกษาแนวทางการยื่นคำขอทรัพย์สินทางปัญญา พัฒนาผลงานต่อ หรือนำไปใช้เชิงพาณิชย์
แนะนำให้รับ Y10–Y12 เป็นลำดับแรก และจัดโอกาสที่เหมาะสมสำหรับ Y7–Y9 ส่วนนักเรียน Y13 พิจารณาตามเวลาที่สะดวกเป็นรายบุคคล

จุดเน้นของโครงการ
สร้างผลงานทางวิชาการจากการลงมือวิจัยเพื่อนำไปแข่งขันและยื่นคำขอทรัพย์สินทางปัญญา (IP)`
      }
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
