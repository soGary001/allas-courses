/* =========================================================
 * All A's 课程数据 · Part 5 —— Curriculum Overview 课程大纲（续）
 * C3L6 / ICQ / Future Doctor / Medical Pathway / Mentorship
 * 末尾：COURSE_OVERVIEW_MAP 课程 ID → 大纲集 映射
 * ========================================================= */

Object.assign(COURSE_OVERVIEWS, {

  /* ========== C3L6 剑桥化学挑战赛 ========== */
  c3l6: {
    en: [
      { tag: 'Build Strong Thinkers. Prepare Future Scientists.' },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Who is this for?', 'Year 10 – Year 12 students with strong interest in Chemistry, Medicine, Engineering or STEM'],
        ['Why join this programme?', 'Strengthen academic performance in Chemistry\nPrepare for high-level competitions\nBuild skills valued by top universities'],
        ['What makes this programme special?', 'Focus on thinking skills, not memorisation\nExposure to challenging, unfamiliar questions\nTraining similar to UK academic competitions'],
        ['What will students learn?', 'Advanced Chemistry concepts (beyond school level)\nProblem-solving strategies\nHow to approach complex, multi-step questions'],
        ['Skills developed', 'Logical thinking\nAnalytical reasoning\nMathematical application in science\nExam confidence'],
        ['Teaching style', 'Small-group teaching (4–6 students)\nStep-by-step explanation\nGuided practice + discussion'],
        ['Assessment & feedback', 'Regular topic tests\nMock competition papers\nIndividual feedback reports'],
        ['Outcomes', 'Improved school results\nIncreased confidence in tackling difficult questions\nStronger academic profile for future applications'],
        ['Progression pathway', 'Leads into:\nAdvanced STEM competitions\nMedical Pathway Programme\nA-Level Chemistry']
      ] } },
      { h: 'Course Details', p: 'As laid out by Cambridge: Y12 students study towards the Cambridge Challenge (May exam); Y11 and Y10 students study the challenge material while also preparing for IGCSE 0620.' },
      { h: 'Why Parents Choose This Programme', checks: [
        'Helps students move from “learning content” → thinking independently',
        'Builds academic confidence before IGCSE / A-Level',
        'Ideal preparation for competitive environments and top universities',
        'Strong foundation for students considering Medicine or STEM careers'
      ] },
      { quote: '“Cambridge Chemistry” builds strength, and “Medical Pathway” delivers results.' }
    ],
    zh: [
      { tag: '培养强大的思考者，孕育未来的科学家。' },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['适合谁？', 'Y10–Y12 对化学、医学、工程或 STEM 方向有浓厚兴趣的学生'],
        ['为什么参加？', '强化化学学科成绩\n为高水平竞赛做准备\n培养顶尖大学看重的能力'],
        ['项目有何特别？', '注重思维能力而非死记硬背\n接触有挑战性的陌生题型\n与英国学术竞赛同源的训练方式'],
        ['学生将学到什么？', '超越校内水平的高阶化学概念\n解题策略\n应对复杂多步骤问题的方法'],
        ['培养的能力', '逻辑思维\n分析推理\n科学中的数学应用\n应试信心'],
        ['教学形式', '4–6 人小班教学\n循序渐进的讲解\n引导式练习 + 讨论'],
        ['测评与反馈', '定期专题测试\n竞赛模拟卷\n个人反馈报告'],
        ['学习成果', '校内成绩提升\n更有信心攻克难题\n为未来申请打造更强的学术形象'],
        ['进阶路径', '衔接：\n高阶 STEM 竞赛\n医学申请核心课程（Medical Pathway）\nA-Level 化学']
      ] } },
      { h: '课程安排说明', p: '按剑桥官方安排：Y12 学生以剑桥化学挑战赛为目标（次年 5 月考试）；Y11 与 Y10 学生在学习挑战赛内容的同时，同步备考 IGCSE 0620。' },
      { h: '家长为什么选择本项目', checks: [
        '帮助学生从“学知识”走向“独立思考”',
        '在 IGCSE / A-Level 之前建立学术自信',
        '竞争环境与顶尖大学的理想预备',
        '为有志医学或 STEM 方向的学生打下坚实基础'
      ] },
      { quote: '“剑桥化学”锻造实力，“医学路径”收获成果。' }
    ],
    th: [
      { tag: 'สร้างนักคิดที่แข็งแกร่ง เตรียมนักวิทยาศาสตร์อนาคต' },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หัวข้อ', 'รายละเอียด'], rows: [
        ['เหมาะกับใคร?', 'นักเรียนปี 10–12 ที่สนใจเคมี การแพทย์ วิศวกรรม หรือ STEM อย่างจริงจัง'],
        ['ทำไมต้องเข้าร่วม?', 'เสริมผลการเรียนเคมี\nเตรียมพร้อมสำหรับการแข่งขันระดับสูง\nสร้างทักษะที่มหาวิทยาลัยชั้นนำให้คุณค่า'],
        ['อะไรทำให้โปรแกรมนี้พิเศษ?', 'เน้นทักษะการคิด ไม่ใช่การท่องจำ\nสัมผัสโจทย์ท้าทายที่ไม่คุ้นเคย\nการฝึกแบบเดียวกับการแข่งขันวิชาการของสหราชอาณาจักร'],
        ['นักเรียนจะได้เรียนอะไร?', 'แนวคิดเคมีขั้นสูง (เกินระดับโรงเรียน)\nกลยุทธ์การแก้ปัญหา\nวิธีรับมือโจทย์ซับซ้อนหลายขั้นตอน'],
        ['ทักษะที่พัฒนา', 'การคิดเชิงตรรกะ\nการให้เหตุผลเชิงวิเคราะห์\nการประยุกต์คณิตศาสตร์ในวิทยาศาสตร์\nความมั่นใจในการสอบ'],
        ['รูปแบบการสอน', 'กลุ่มเล็ก (4–6 คน)\nอธิบายทีละขั้นตอน\nฝึกปฏิบัติแบบมีคำแนะนำ + อภิปราย'],
        ['การประเมินและ feedback', 'ทดสอบตามหัวข้อสม่ำเสมอ\nข้อสอบจำลองการแข่งขัน\nรายงาน feedback รายบุคคล'],
        ['ผลลัพธ์', 'ผลการเรียนในโรงเรียนดีขึ้น\nมั่นใจมากขึ้นในการรับมือโจทย์ยาก\nประวัติทางวิชาการที่แข็งแกร่งสำหรับการสมัครต่อ'],
        ['เส้นทางต่อยอด', 'ต่อยอดสู่:\nการแข่งขัน STEM ขั้นสูง\nโปรแกรม Medical Pathway\nเคมี A-Level']
      ] } },
      { h: 'รายละเอียดหลักสูตร', p: 'ตามที่เคมบริดจ์กำหนด: นักเรียนปี 12 เตรียมสอบ Cambridge Challenge (สอบเดือนพฤษภาคม) ส่วนนักเรียนปี 11 และ 10 เรียนเนื้อหาของ Challenge พร้อมกับเตรียมสอบ IGCSE 0620 ไปด้วย' },
      { h: 'เหตุผลที่ผู้ปกครองเลือกโปรแกรมนี้', checks: [
        'ช่วยให้นักเรียนก้าวจาก “เรียนเนื้อหา” สู่ “คิดอย่างอิสระ”',
        'สร้างความมั่นใจทางวิชาการก่อน IGCSE / A-Level',
        'การเตรียมตัวที่เหมาะสำหรับสภาพแวดล้อมการแข่งขันและมหาวิทยาลัยชั้นนำ',
        'พื้นฐานที่แข็งแกร่งสำหรับผู้ที่สนใจอาชีพการแพทย์หรือ STEM'
      ] },
      { quote: '“Cambridge Chemistry” สร้างความแข็งแกร่ง และ “Medical Pathway” ส่งมอบผลลัพธ์' }
    ]
  },

  /* ========== ICQ 国际化学知识竞赛 ========== */
  icq: {
    en: [
      { tag: 'Build Curiosity. Strengthen Scientific Thinking.' },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Programme Name', 'International Chemistry Quiz (ICQ) Programme'],
        ['Target Students', 'Year 9 – Year 12 (grouped by level: Intermediate, Senior)'],
        ['Who is this for?', 'Students interested in science, especially Chemistry, who want to develop academic confidence and participate in international competitions'],
        ['Why join this programme?', 'Introduce students to Chemistry in an engaging way\nBuild strong scientific foundations early\nGain experience in international-level quizzes'],
        ['What makes this programme special?', 'Internationally recognised Chemistry quiz from Australia\nAge-appropriate levels for all stages\nFocus on both knowledge and application'],
        ['What will students learn?', 'Fundamental Chemistry concepts\nScientific vocabulary and understanding\nReal-world applications of Chemistry'],
        ['Skills developed', 'Scientific thinking\nProblem-solving skills\nData interpretation\nConfidence in answering unfamiliar questions'],
        ['Teaching style', 'Interactive lessons\nConcept explanation + practice questions\nQuiz-based learning (engaging format)'],
        ['Assessment & feedback', 'Practice quizzes\nMock papers\nPerformance feedback before competition'],
        ['Competition element', 'Preparation for the International Chemistry Quiz (ICQ) from the Royal Australian Chemical Institute, held in August'],
        ['Outcomes', 'Increased interest in science\nImproved school performance\nOpportunity to earn international recognition'],
        ['Progression pathway', 'Leads into:\nCambridge Chemistry Challenge Programme\nMedical Pathway Programme']
      ] } },
      { h: 'Why Choose ICQ?', checks: [
        'Perfect introduction to international academic competitions',
        'Builds confidence in younger students',
        'Strengthens science foundation early',
        'Encourages curiosity and enjoyment in learning'
      ] },
      { h: 'ICQ Levels', table: { head: ['Level', 'Year Group', 'Focus'], rows: [
        ['🟡 Intermediate', 'Year 9–10', 'Deeper concepts + simple calculations'],
        ['🔴 Senior', 'Year 11–12', 'Advanced knowledge + problem solving']
      ] } },
      { h: 'How It Fits in Your Child’s Learning Pathway', table: { head: ['Stage', 'Programme', 'Focus'], rows: [
        ['Early Years', 'ICQ', 'Build interest & foundation'],
        ['Middle Years', 'Cambridge Chemistry Challenge', 'Develop depth & thinking'],
        ['Senior Years', 'Medical Pathway Programme', 'University preparation']
      ] } },
      { quote: '“ICQ” builds curiosity, “Cambridge Chemistry Challenge” builds strength, “Medical Pathway Programme” builds the future' }
    ],
    zh: [
      { tag: '培养好奇心，强化科学思维。' },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['项目名称', '国际化学知识竞赛项目（International Chemistry Quiz, ICQ）'],
        ['适合学生', 'Y9 – Y12（按水平分组：中级、高级）'],
        ['适合谁？', '对科学（尤其是化学）感兴趣，希望建立学术自信并参加国际竞赛的学生'],
        ['为什么参加？', '以有趣的方式引导学生走进化学\n尽早打牢科学基础\n积累国际级别测验的实战经验'],
        ['项目有何特别？', '来自澳大利亚的国际公认化学竞赛\n各阶段均有适龄级别\n知识与应用并重'],
        ['学生将学到什么？', '化学基础概念\n科学词汇与理解\n化学在现实世界中的应用'],
        ['培养的能力', '科学思维\n问题解决能力\n数据解读能力\n应对陌生题型的信心'],
        ['教学形式', '互动式课堂\n概念讲解 + 练习题\n以测验形式学习（生动有趣）'],
        ['测评与反馈', '练习测验\n模拟试卷\n赛前表现反馈'],
        ['竞赛环节', '备战由澳大利亚皇家化学学会主办的 ICQ 国际化学知识竞赛（8 月举行）'],
        ['学习成果', '科学兴趣提升\n校内成绩进步\n有机会赢得国际认可'],
        ['进阶路径', '衔接：\n剑桥化学挑战赛项目\n医学申请核心课程（Medical Pathway）']
      ] } },
      { h: '为什么选择 ICQ？', checks: [
        '国际学术竞赛的完美入门',
        '帮助低年级学生建立信心',
        '尽早夯实科学基础',
        '激发好奇心与学习乐趣'
      ] },
      { h: 'ICQ 级别设置', table: { head: ['级别', '年级', '重点'], rows: [
        ['🟡 中级（Intermediate）', 'Y9–Y10', '更深的概念 + 基础计算'],
        ['🔴 高级（Senior）', 'Y11–Y12', '高阶知识 + 问题解决']
      ] } },
      { h: '如何融入孩子的学习路径', table: { head: ['阶段', '项目', '重点'], rows: [
        ['低年级阶段', 'ICQ', '培养兴趣与基础'],
        ['中年级阶段', '剑桥化学挑战赛', '发展深度与思维'],
        ['高年级阶段', '医学申请核心课程', '大学申请准备']
      ] } },
      { quote: '“ICQ”培养好奇，“剑桥化学挑战赛”锻造实力，“医学路径”成就未来' }
    ],
    th: [
      { tag: 'สร้างความอยากรู้ เสริมความคิดทางวิทยาศาสตร์' },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หัวข้อ', 'รายละเอียด'], rows: [
        ['ชื่อโปรแกรม', 'โปรแกรม International Chemistry Quiz (ICQ)'],
        ['กลุ่มนักเรียน', 'ปี 9 – ปี 12 (แบ่งตามระดับ: Intermediate, Senior)'],
        ['เหมาะกับใคร?', 'นักเรียนที่สนใจวิทยาศาสตร์ โดยเฉพาะเคมี และต้องการสร้างความมั่นใจทางวิชาการพร้อมเข้าร่วมการแข่งขันนานาชาติ'],
        ['ทำไมต้องเข้าร่วม?', 'แนะนำเคมีอย่างสนุก\nสร้างพื้นฐานวิทยาศาสตร์ตั้งแต่เนิ่นๆ\nสัมผัสประสบการณ์แบบทดสอบระดับนานาชาติ'],
        ['อะไรทำให้โปรแกรมนี้พิเศษ?', 'แบบทดสอบเคมีที่ได้รับการยอมรับระดับโลกจากออสเตรเลีย\nมีระดับเหมาะกับทุกช่วงวัย\nเน้นทั้งความรู้และการประยุกต์'],
        ['นักเรียนจะได้เรียนอะไร?', 'แนวคิดเคมีพื้นฐาน\nคำศัพท์และความเข้าใจทางวิทยาศาสตร์\nการประยุกต์ใช้เคมีในโลกจริง'],
        ['ทักษะที่พัฒนา', 'การคิดทางวิทยาศาสตร์\nทักษะการแก้ปัญหา\nการตีความข้อมูล\nความมั่นใจในการตอบโจทย์ที่ไม่คุ้นเคย'],
        ['รูปแบบการสอน', 'บทเรียนเชิงโต้ตอบ\nอธิบายแนวคิด + ฝึกโจทย์\nเรียนผ่านแบบทดสอบ (สนุก มีส่วนร่วม)'],
        ['การประเมินและ feedback', 'แบบทดสอบฝึกหัด\nข้อสอบจำลอง\nfeedback ผลงานก่อนการแข่งขัน'],
        ['ส่วนของการแข่งขัน', 'เตรียมสอบ International Chemistry Quiz (ICQ) จากสถาบันเคมีหลวงออสเตรเลีย จัดในเดือนสิงหาคม'],
        ['ผลลัพธ์', 'สนใจวิทยาศาสตร์มากขึ้น\nผลการเรียนในโรงเรียนดีขึ้น\nโอกาสได้รับการยอมรับระดับนานาชาติ'],
        ['เส้นทางต่อยอด', 'ต่อยอดสู่:\nโปรแกรม Cambridge Chemistry Challenge\nโปรแกรม Medical Pathway']
      ] } },
      { h: 'ทำไมต้องเลือก ICQ?', checks: [
        'จุดเริ่มต้นที่สมบูรณ์แบบสู่การแข่งขันวิชาการนานาชาติ',
        'สร้างความมั่นใจให้นักเรียนรุ่นเยาว์',
        'เสริมพื้นฐานวิทยาศาสตร์ตั้งแต่เนิ่นๆ',
        'ปลูกความอยากรู้และความสนุกในการเรียน'
      ] },
      { h: 'ระดับของ ICQ', table: { head: ['ระดับ', 'ระดับชั้น', 'จุดเน้น'], rows: [
        ['🟡 Intermediate', 'ปี 9–10', 'แนวคิดลึกขึ้น + การคำนวณเบื้องต้น'],
        ['🔴 Senior', 'ปี 11–12', 'ความรู้ขั้นสูง + การแก้ปัญหา']
      ] } },
      { h: 'เชื่อมโยงกับเส้นทางการเรียนของบุตรหลานอย่างไร', table: { head: ['ช่วง', 'โปรแกรม', 'จุดเน้น'], rows: [
        ['ช่วงต้น', 'ICQ', 'สร้างความสนใจและพื้นฐาน'],
        ['ช่วงกลาง', 'Cambridge Chemistry Challenge', 'พัฒนาความลึกและการคิด'],
        ['ช่วงปลาย', 'Medical Pathway Programme', 'เตรียมสมัครมหาวิทยาลัย']
      ] } },
      { quote: '“ICQ” สร้างความอยากรู้ “Cambridge Chemistry Challenge” สร้างความแข็งแกร่ง “Medical Pathway Programme” สร้างอนาคต' }
    ]
  },

  /* ========== Future Doctor（医学探索 · Level 1） ========== */
  'future-doctor': {
    en: [
      { tag: '🧬 Level 1 — Medicine Exploration Programme (Curriculum Overview)' },
      { h: '1️⃣ How Medicine Works', p: 'Understanding how medicines interact with the human body through key physiological systems. Core topics:', list: [
        'Cardiovascular System',
        'Nervous System',
        'Immune System'
      ], note: 'Academic alignment: adapted from IGCSE / A-Level / IB Chemistry HL (Medicine Option), accessible for KS3–KS4 students with differentiated depth. Students will develop a foundational understanding of how drugs affect body functions, preparing them for more advanced medical learning.' },
      { h: '2️⃣ Case Studies', p: 'Exploring simplified real-world medical scenarios to build analytical and critical thinking skills. Example topics:', list: [
        'Paracetamol Overdose',
        'Antibiotic Resistance',
        'Diabetes'
      ], note: 'Learning approach: group discussions, problem-solving tasks and clinical reasoning exercises.' },
      { h: '3️⃣ Project-Based Learning', p: 'Applying knowledge through structured, creative academic tasks. Project formats:', list: [
        'Medical posters',
        'Thematic presentations',
        'Mini research projects'
      ], note: 'Outcomes: develop research and communication skills, encourage independent thinking, and produce high-quality visual work for portfolios and exhibitions. Students will create tangible outputs that demonstrate both understanding and engagement, supporting academic development and enrichment profiles.' }
    ],
    zh: [
      { tag: '🧬 第一级 —— 医学探索项目（课程大纲）' },
      { h: '1️⃣ 药物如何发挥作用', p: '通过关键生理系统理解药物与人体的相互作用。核心主题：', list: [
        '心血管系统',
        '神经系统',
        '免疫系统'
      ], note: '学术对接：内容改编自 IGCSE / A-Level / IB 化学 HL（医学选修），并针对 KS3–KS4 学生调整深度。学生将建立“药物如何影响人体机能”的基础理解，为更高阶的医学学习做好准备。' },
      { h: '2️⃣ 案例研习', p: '通过简化的真实医学场景，培养分析与批判性思维能力。示例主题：', list: [
        '对乙酰氨基酚（扑热息痛）过量',
        '抗生素耐药性',
        '糖尿病'
      ], note: '学习方式：小组讨论、问题解决任务与临床推理练习。' },
      { h: '3️⃣ 项目式学习', p: '通过结构化、创造性的学术任务应用所学知识。项目形式：', list: [
        '医学海报',
        '主题演讲展示',
        '小型研究项目'
      ], note: '成果：培养研究与沟通能力、鼓励独立思考，并产出可用于作品集与展示的高质量可视化成果。学生将创造出体现理解力与参与度的具体作品，助力学业发展与背景提升。' }
    ],
    th: [
      { tag: '🧬 ระดับ 1 — โปรแกรมสำรวจวิชาการแพทย์ (ภาพรวมหลักสูตร)' },
      { h: '1️⃣ ยาทำงานอย่างไร', p: 'เข้าใจว่ายาโต้ตอบกับร่างกายมนุษย์ผ่านระบบสรีรวิทยาสำคัญอย่างไร หัวข้อหลัก:', list: [
        'ระบบหัวใจและหลอดเลือด',
        'ระบบประสาท',
        'ระบบภูมิคุ้มกัน'
      ], note: 'ความสอดคล้องทางวิชาการ: ดัดแปลงจาก IGCSE / A-Level / IB Chemistry HL (Medicine Option) เข้าถึงได้สำหรับนักเรียน KS3–KS4 ด้วยความลึกที่ปรับตามระดับ นักเรียนจะเข้าใจพื้นฐานว่ายาส่งผลต่อการทำงานของร่างกายอย่างไร เตรียมพร้อมสำหรับการเรียนการแพทย์ขั้นสูง' },
      { h: '2️⃣ กรณีศึกษา', p: 'สำรวจสถานการณ์ทางการแพทย์จริงแบบง่าย เพื่อสร้างทักษะการวิเคราะห์และการคิดอย่างมีวิจารณญาณ ตัวอย่างหัวข้อ:', list: [
        'ยาพาราเซตามอลเกินขนาด',
        'การดื้อยาปฏิชีวนะ',
        'เบาหวาน'
      ], note: 'แนวทางการเรียน: อภิปรายกลุ่ม งานแก้ปัญหา และแบบฝึกการให้เหตุผลทางคลินิก' },
      { h: '3️⃣ การเรียนรู้แบบโปรเจกต์', p: 'ประยุกต์ความรู้ผ่านงานวิชาการสร้างสรรค์ที่มีโครงสร้าง รูปแบบโปรเจกต์:', list: [
        'โปสเตอร์การแพทย์',
        'การนำเสนอตามหัวข้อ',
        'โปรเจกต์วิจัยขนาดเล็ก'
      ], note: 'ผลลัพธ์: พัฒนาทักษะการวิจัยและการสื่อสาร ส่งเสริมการคิดอย่างอิสระ และผลิตผลงานภาพคุณภาพสูงสำหรับ portfolio และการจัดแสดง นักเรียนจะสร้างผลงานจับต้องได้ที่แสดงทั้งความเข้าใจและการมีส่วนร่วม สนับสนุนพัฒนาการทางวิชาการและประวัติเสริม' }
    ]
  },

  /* ========== Medical Pathway（医学申请核心 · Level 2） ========== */
  'medical-pathway': {
    en: [
      { tag: '🔴 Level 2 — Medical Pathway Programme (Y12/Y13)' },
      { h: '🎯 Programme Objective', p: 'This programme is designed to support students aiming for UK Medicine applications via the University Clinical Aptitude Test (UCAT pathway), as well as related fields such as Veterinary Medicine and Dentistry. It provides a structured and strategic pathway from academic preparation to university application success.' },
      { h: '1️⃣ UCAT Skills Training', p: 'Focused preparation for the UCAT, developing speed, accuracy, and critical thinking under timed conditions. Core sections:', list: [
        'Verbal Reasoning (key focus)',
        'Decision Making',
        'Quantitative Reasoning',
        'Abstract Reasoning',
        'Situational Judgement'
      ], note: 'Resources: The Medic Portal — accredited tutor Mr Graham (UCAT experienced tutor); UKCAT verbal reasoning past papers. Students will build exam techniques, time management strategies, and familiarity with UCAT-style questioning.' },
      { h: '2️⃣ Advanced Medical Knowledge', p: 'Developing a deeper understanding of medical science concepts to support both UCAT performance and university applications. Key areas:', list: [
        'Fundamentals of Pharmacology',
        'Disease Mechanisms',
        'Treatment Principles and Clinical Logic'
      ], note: 'Content sources: UCAT verbal reasoning past papers, IB Chemistry HL (Medicine Option), and instructor-developed materials and resources. This component strengthens students’ scientific foundation and supports meaningful discussion in interviews and personal statements.' },
      { h: '3️⃣ Application Skills (Key Differentiator) · a. Personal Statement Development', list: [
        'Articulating motivation for studying medicine',
        'Demonstrating insight into the medical profession',
        'Structuring strong, coherent narratives'
      ] },
      { h: 'b. Interview Preparation', list: [
        'MMI (Multiple Mini Interview) training',
        'Ethical reasoning and scenario-based questions',
        'Communication and critical thinking skills'
      ] },
      { h: 'c. Work Experience Simulation', p: 'Given the limited access to real clinical placements in Thailand, this programme includes:', list: [
        'Role-play scenarios',
        'Simulated patient interactions',
        'Clinical decision-making exercises'
      ], note: 'These activities help students develop practical insight and readiness for interviews.' },
      { h: '4️⃣ Mock & Assessment System (Essential Component)', p: 'A structured evaluation system to track progress and prepare students for real admissions processes. Includes:', list: [
        'UCAT Mock Exams (timed, full-length simulations)',
        'Interview Mock Sessions',
        'Individual Assessment Reports'
      ], note: 'Reports will provide: performance analysis, strengths and areas for improvement, and personalised guidance for next steps.' },
      { h: '✅ Programme Value', p: 'This programme goes beyond academic teaching by offering a complete medical admissions pathway, combining: exam preparation, academic knowledge, application strategy and realistic practice environments.' }
    ],
    zh: [
      { tag: '🔴 第二级 —— 医学申请核心课程（Y12/Y13）' },
      { h: '🎯 项目目标', p: '本项目面向计划通过 UCAT（大学临床能力测试）路径申请英国医学本科的学生，同时覆盖兽医学、牙医学等相关方向，提供从学术准备到大学申请成功的结构化、策略性路径。' },
      { h: '1️⃣ UCAT 技能训练', p: '针对 UCAT 的专项备考，培养限时条件下的速度、准确率与批判性思维。核心板块：', list: [
        '言语推理（重点）',
        '决策判断',
        '定量推理',
        '抽象推理',
        '情境判断'
      ], note: '教学资源：The Medic Portal 认证导师 Mr Graham（UCAT 资深导师）；UKCAT 言语推理历年真题。学生将掌握考试技巧、时间管理策略，并熟悉 UCAT 题型风格。' },
      { h: '2️⃣ 高阶医学知识', p: '深入理解医学科学概念，同时支撑 UCAT 表现与大学申请。重点领域：', list: [
        '药理学基础',
        '疾病机制',
        '治疗原则与临床逻辑'
      ], note: '内容来源：UCAT 言语推理历年真题、IB 化学 HL（医学选修）及导师自编教材。本模块将夯实学生的科学基础，为面试与个人陈述中的深度讨论提供支撑。' },
      { h: '3️⃣ 申请技能（核心差异点）· a. 个人陈述打磨', list: [
        '清晰表达学医动机',
        '展现对医学职业的深刻洞察',
        '构建有力且连贯的叙事结构'
      ] },
      { h: 'b. 面试准备', list: [
        'MMI（多站迷你面试）训练',
        '伦理推理与情境问题',
        '沟通与批判性思维能力'
      ] },
      { h: 'c. 模拟实践经历', p: '鉴于在泰国难以获得真实的临床实习机会，本项目特别设置：', list: [
        '角色扮演场景',
        '模拟患者互动',
        '临床决策练习'
      ], note: '这些活动帮助学生积累实践洞察力，为面试做好充分准备。' },
      { h: '4️⃣ 模考与测评体系（必备环节）', p: '结构化的评估体系，全程跟踪学习进度，帮助学生为真实的录取流程做好准备。包括：', list: [
        'UCAT 模拟考试（限时全真模拟）',
        '模拟面试环节',
        '个人评估报告'
      ], note: '评估报告将提供：表现分析、优势与待提升领域，以及下一步的个性化指导建议。' },
      { h: '✅ 项目价值', p: '本项目超越单纯的学术教学，提供一条完整的医学院申请路径，将考试备考、学术知识、申请策略与真实演练环境融为一体。' }
    ],
    th: [
      { tag: '🔴 ระดับ 2 — โปรแกรม Medical Pathway (ปี 12/13)' },
      { h: '🎯 เป้าหมายของโปรแกรม', p: 'โปรแกรมนี้ออกแบบมาเพื่อสนับสนุนนักเรียนที่มุ่งสมัครคณะแพทยศาสตร์ในสหราชอาณาจักรผ่านเส้นทาง UCAT (University Clinical Aptitude Test) รวมถึงสาขาที่เกี่ยวข้อง เช่น สัตวแพทยศาสตร์และทันตแพทยศาสตร์ โดยมอบเส้นทางที่มีโครงสร้างและกลยุทธ์ชัดเจนตั้งแต่การเตรียมวิชาการจนถึงความสำเร็จในการสมัครมหาวิทยาลัย' },
      { h: '1️⃣ ฝึกทักษะ UCAT', p: 'เตรียมสอบ UCAT อย่างมุ่งมั่น พัฒนาความเร็ว ความแม่นยำ และการคิดอย่างมีวิจารณญาณภายใต้เวลาจำกัด ส่วนหลักของข้อสอบ:', list: [
        'Verbal Reasoning (จุดเน้นหลัก)',
        'Decision Making',
        'Quantitative Reasoning',
        'Abstract Reasoning',
        'Situational Judgement'
      ], note: 'แหล่งเรียน: The Medic Portal — ครู Mr Graham ผู้สอนที่ได้รับการรับรอง (มีประสบการณ์ UCAT) และข้อสอบเก่า UKCAT verbal reasoning นักเรียนจะสร้างเทคนิคการสอบ กลยุทธ์การจัดการเวลา และความคุ้นเคยกับรูปแบบโจทย์ UCAT' },
      { h: '2️⃣ ความรู้การแพทย์ขั้นสูง', p: 'พัฒนาความเข้าใจแนวคิดวิทยาศาสตร์การแพทย์เชิงลึก เพื่อสนับสนุนทั้งผลสอบ UCAT และการสมัครมหาวิทยาลัย ประเด็นสำคัญ:', list: [
        'พื้นฐานเภสัชวิทยา',
        'กลไกของโรค',
        'หลักการรักษาและตรรกะทางคลินิก'
      ], note: 'แหล่งเนื้อหา: ข้อสอบเก่า UCAT verbal reasoning, IB Chemistry HL (Medicine Option) และสื่อที่ผู้สอนพัฒนาเอง ส่วนนี้เสริมพื้นฐานวิทยาศาสตร์ของนักเรียนและช่วยให้พูดคุยอย่างมีนัยสำคัญในการสัมภาษณ์และแถลงการณ์ส่วนตัว' },
      { h: '3️⃣ ทักษะการสมัคร (จุดแตกต่างสำคัญ) · a. พัฒนาแถลงการณ์ส่วนตัว', list: [
        'สื่อสารแรงจูงใจในการเรียนแพทย์อย่างชัดเจน',
        'แสดงความเข้าใจเชิงลึกเกี่ยวกับวิชาชีพแพทย์',
        'จัดโครงสร้างเรื่องเล่าที่ทรงพลังและสอดคล้องกัน'
      ] },
      { h: 'b. เตรียมสัมภาษณ์', list: [
        'ฝึกสัมภาษณ์ MMI (Multiple Mini Interview)',
        'การให้เหตุผลทางจริยธรรมและคำถามสถานการณ์',
        'ทักษะการสื่อสารและการคิดอย่างมีวิจารณญาณ'
      ] },
      { h: 'c. จำลองประสบการณ์คลินิก', p: 'เนื่องจากการเข้าถึงการฝึกงานคลินิกจริงในประเทศไทยมีจำกัด โปรแกรมนี้จึงรวม:', list: [
        'สถานการณ์สมมติบทบาท',
        'การโต้ตอบกับผู้ป่วยจำลอง',
        'แบบฝึกการตัดสินใจทางคลินิก'
      ], note: 'กิจกรรมเหล่านี้ช่วยให้นักเรียนมีความเข้าใจเชิงปฏิบัติและพร้อมสำหรับการสัมภาษณ์' },
      { h: '4️⃣ ระบบสอบจำลองและประเมินผล (ส่วนสำคัญ)', p: 'ระบบประเมินที่มีโครงสร้างเพื่อติดตามความก้าวหน้าและเตรียมนักเรียนสำหรับกระบวนการคัดเลือกจริง ประกอบด้วย:', list: [
        'สอบจำลอง UCAT (จับเวลา เต็มรูปแบบ)',
        'เซสชันสัมภาษณ์จำลอง',
        'รายงานประเมินรายบุคคล'
      ], note: 'รายงานจะให้: การวิเคราะห์ผลงาน จุดแข็งและจุดที่ต้องพัฒนา พร้อมคำแนะนำเฉพาะบุคคลสำหรับขั้นตอนต่อไป' },
      { h: '✅ คุณค่าของโปรแกรม', p: 'โปรแกรมนี้เหนือกว่าการสอนวิชาการ โดยมอบเส้นทางการสมัครคณะแพทยศาสตร์ที่สมบูรณ์ ผสานการเตรียมสอบ ความรู้วิชาการ กลยุทธ์การสมัคร และสภาพแวดล้อมการฝึกซ้อมที่สมจริง' }
    ]
  },

  /* ========== Mentorship 个性化大学申请指导 ========== */
  mentorship: {
    en: [
      { tag: 'From Academic Planning to Successful Offers' },
      { h: '🎓 Celebrating Our Students’ Achievements', p: 'Over the past year, our students have demonstrated strong academic performance and have applied to highly competitive universities across the UK, Hong Kong, and beyond. Students supported through our programme have achieved:', list: [
        'Predicted grades up to 3–4 A*',
        'Strong IELTS performance (up to Band 8.0)',
        'Offers from top universities such as Cambridge, UCL, Imperial College London (Computer Science), Manchester, HKU, CUHK, and HKUST. University of Pennsylvania, California Institute of Technology, UC Berkeley, Northwestern University, Columbia University, University of Chicago, UC Davis, New York University, University of Melbourne, University of Sydney, UNSW, Monash University, University of Toronto, McGill University, University of British Columbia and more\u2026'
      ], note: 'These results reflect not only students’ hard work, but also the importance of early planning, consistent academic tracking, and well-structured applications.' },
      { h: 'Introducing the Programme', p: 'For students and families seeking more personalised, one-to-one and hands-on support for university applications, this porgramme provides personalised mentorship while working alongside our school counsellor, supporting students through:', list: [
        'Personalised 1:1 academic and university planning',
        'Ongoing progress monitoring (subjects, grades, and project completion)',
        'Close coordination with school teachers and departments',
        'Tailored strategy beyond standard school guidance',
        'Mentorship-style support throughout the application journey',
        'University and course strategy',
        'Personal Statement development',
        'Interview preparation',
        'Profile building (competitions, leadership, projects)'
      ] },
      { h: 'What Makes This Programme Different', p: 'This programme is designed to work alongside the school, offering a more personalised and continuous approach. We provide a one-to-one, hands-on mentorship approach that supports each student with close academic tracking, tailored planning, and ongoing guidance throughout their application journey. This ensures that students are not only well-advised, but also well-prepared and consistently supported.' },
      { h: 'Why Early Planning Matters', p: 'University applications, especially for competitive programmes, require strong academic results, strategic subject choices, meaningful extracurricular activities, and early preparation with clear direction. Starting early allows students to build a strong and balanced profile over time, rather than rushing in their final year.' },
      { h: '📢 Invitation to Join', p: 'We warmly encourage parents who are considering long-term academic planning for their children to explore this programme. Whether you and your child are beginning to consider future pathways, already preparing for university applications, or feel uncertain about their future academic direction, this programme provides structured, personalised support at every stage.' }
    ],
    zh: [
      { tag: '从学业规划，到名校录取' },
      { h: '🎓 见证学生的成绩', p: '过去一年，我们的学生展现了优异的学术表现，申请了英国、中国香港等地极具竞争力的大学。通过本项目支持的学生取得了：', list: [
        '预估成绩最高达 3–4 个 A*',
        '出色的雅思成绩（最高 8.0 分）',
        '录取通知书来自剑桥、UCL、帝国理工（计算机科学）、曼彻斯特、港大、港中文、港科大等顶尖大学，以及宾夕法尼亚大学、加州理工学院、加州伯克利、西北大学、哥伦比亚大学、芝加哥大学、加州大学戴维斯分校、纽约大学、墨尔本大学、悉尼大学、新南威尔士大学、莫纳什大学、多伦多大学、麦吉尔大学、英属哥伦比亚大学等\u2026'
      ], note: '这些成绩不仅源于学生的努力，也印证了早规划、持续学业跟踪与精心构建申请材料的重要性。' },
      { h: '项目介绍', p: '对于希望获得更个性化、一对一、手把手大学申请支持的学生与家庭，本项目将与学校升学顾问协同合作，提供个性化的导师指导，全程支持学生：', list: [
        '一对一的个性化学业与大学规划',
        '持续的进度跟踪（学科、成绩与项目完成情况）',
        '与学校老师及院系紧密协作',
        '超越学校常规指导的定制化策略',
        '申请全程的导师制陪伴',
        '大学与专业选择策略',
        '个人陈述打磨',
        '面试准备',
        '背景提升（竞赛、领导力、项目）'
      ] },
      { h: '本项目的与众不同之处', p: '本项目旨在与学校协同工作，提供更个性化、更持续的支持方式。我们采用一对一、手把手的导师制，通过紧密的学业跟踪、量身定制的规划和全程指导陪伴每位学生的申请之旅。这确保学生不仅获得良好的建议，更能做好充分准备并得到始终如一的支持。' },
      { h: '为什么早规划很重要', p: '大学申请——尤其是竞争激烈的项目——需要优异的成绩、策略性的选课、有意义的课外活动和方向清晰的早期准备。尽早开始，让学生能随时间稳步构建强而均衡的申请形象，而不是在最后一年仓促应对。' },
      { h: '📢 诚邀加入', p: '我们诚挚邀请正在为孩子考虑长期学业规划的家长了解本项目。无论您和孩子是刚开始考虑未来方向、已经在准备大学申请，还是对学业方向感到迷茫，本项目都将在每个阶段提供结构化、个性化的支持。' }
    ],
    th: [
      { tag: 'จากการวางแผนวิชาการ สู่ข้อเสนอจากมหาวิทยาลัย' },
      { h: '🎓 ฉลองความสำเร็จของนักเรียนเรา', p: 'ตลอดปีที่ผ่านมา นักเรียนของเราแสดงผลการเรียนที่โดดเด่นและสมัครเข้ามหาวิทยาลัยที่มีการแข่งขันสูงทั้งในสหราชอาณาจักร ฮ่องกง และอื่นๆ นักเรียนที่ได้รับการสนับสนุนผ่านโปรแกรมของเราประสบความสำเร็จ:', list: [
        'เกรดคาดการณ์สูงสุดถึง 3–4 A*',
        'ผลสอบ IELTS โดดเด่น (สูงสุด Band 8.0)',
        'สมัครเข้ามหาวิทยาลัยชั้นนำ เช่น Cambridge, UCL, Imperial College London (Computer Science), Manchester, HKU, CUHK และ HKUST'
      ], note: 'นักเรียนหลายคนผ่านเข้าสู่รอบสัมภาษณ์และได้รับผลการสมัครที่ดี ผลลัพธ์เหล่านี้ไม่เพียงสะท้อนความขยันของนักเรียน แต่ยังแสดงถึงความสำคัญของการวางแผนล่วงหน้า การติดตามผลการเรียนอย่างสม่ำเสมอ และการสมัครที่มีโครงสร้างดี' },
      { h: 'แนะนำโปรแกรม', p: 'สำหรับนักเรียนและครอบครัวที่ต้องการการสนับสนุนการสมัครมหาวิทยาลัยแบบเฉพาะบุคคล ตัวต่อตัว และใกล้ชิด โปรแกรม University Application & Academic Planning มอบการเป็นเมนเทอร์เฉพาะบุคคล พร้อมทำงานร่วมกับที่ปรึกษาของโรงเรียน สนับสนุนนักเรียนผ่าน:', list: [
        'การวางแผนวิชาการและมหาวิทยาลัยแบบตัวต่อตัว',
        'การติดตามความก้าวหน้าอย่างต่อเนื่อง (รายวิชา เกรด และการทำโปรเจกต์)',
        'การประสานงานอย่างใกล้ชิดกับครูและภาควิชาของโรงเรียน',
        'กลยุทธ์เฉพาะบุคคลเหนือกว่าคำแนะนำทั่วไปของโรงเรียน',
        'การสนับสนุนแบบเมนเทอร์ตลอดเส้นทางการสมัคร',
        'กลยุทธ์การเลือกมหาวิทยาลัยและสาขา',
        'การพัฒนาแถลงการณ์ส่วนตัว',
        'การเตรียมสัมภาษณ์',
        'การสร้างประวัติ (การแข่งขัน ความเป็นผู้นำ โปรเจกต์)'
      ] },
      { h: 'อะไรทำให้โปรแกรมนี้แตกต่าง', p: 'โปรแกรมนี้ออกแบบมาเพื่อทำงานร่วมกับโรงเรียน มอบแนวทางที่เฉพาะบุคคลและต่อเนื่องมากขึ้น เราให้การเป็นเมนเทอร์แบบตัวต่อตัวอย่างใกล้ชิด สนับสนุนนักเรียนแต่ละคนด้วยการติดตามผลการเรียนอย่างใกล้ชิด การวางแผนเฉพาะบุคคล และคำแนะนำต่อเนื่องตลอดเส้นทางการสมัคร เพื่อให้นักเรียนไม่เพียงได้รับคำแนะนำที่ดี แต่ยังเตรียมพร้อมอย่างดีและได้รับการสนับสนุนอย่างสม่ำเสมอ' },
      { h: 'ทำไมการวางแผนล่วงหน้าจึงสำคัญ', p: 'การสมัครมหาวิทยาลัย โดยเฉพาะหลักสูตรที่มีการแข่งขันสูง ต้องอาศัยผลการเรียนที่แข็งแกร่ง การเลือกวิชาอย่างมีกลยุทธ์ กิจกรรมเสริมหลักสูตรที่มีความหมาย และการเตรียมตัวล่วงหน้าที่มีทิศทางชัดเจน การเริ่มต้นเร็วช่วยให้นักเรียนสร้างประวัติที่แข็งแกร่งและสมดุลตามเวลา แทนที่จะเร่งรีบในปีสุดท้าย' },
      { h: '📢 ขอเชิญเข้าร่วม', p: 'เราขอเชิญผู้ปกครองที่กำลังพิจารณาการวางแผนวิชาการระยะยาวให้บุตรหลานมาสำรวจโปรแกรมนี้ ไม่ว่าคุณและบุตรหลานจะกำลังเริ่มพิจารณาเส้นทางอนาคต กำลังเตรียมสมัครมหาวิทยาลัย หรือรู้สึกไม่แน่ใจเกี่ยวกับทิศทางการเรียน โปรแกรมนี้มอบการสนับสนุนที่มีโครงสร้างและเฉพาะบุคคลในทุกขั้นตอน' }
    ]
  }
});

/* =========================================================
 * BBO 英国生物奥赛 · 专属课程大纲（文档内容由用户提供 2026-08-07）
 * ========================================================= */
Object.assign(COURSE_OVERVIEWS, {
  bbo: {
    en: [
      { tag: '🧬 British Biology Olympiad (BBO) Programme' },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Programme Name', 'British Biology Olympiad (BBO) Programme'],
        ['Target Students', 'Year 10 – Year 13 (Year 9 Interview Required)'],
        ['Programme Type', 'Biology Enrichment + Competition Preparation'],
        ['Organiser (Competition)', 'UK Biology Competitions (UKBC)'],
        ['Country', 'United Kingdom'],
        ['Academic Level', 'IGCSE → A-Level Extension']
      ] } },
      { h: 'Programme Aim', p: 'The BBO programme is designed to develop students’ biological knowledge beyond the school curriculum while strengthening analytical thinking, scientific reasoning, and problem-solving skills.' },
      { p: 'Through structured academic enrichment and Olympiad-style training, students will deepen their understanding of Biology, improve their performance in IGCSE and A-Level Biology, and build the academic foundation required for future studies in Medicine, Biomedical Sciences, Natural Sciences, Veterinary Science, Pharmacy, and related disciplines.' },
      { p: 'The programme also provides systematic preparation for the British Biology Olympiad (BBO) in January 2027, enabling students to gain valuable competition experience, earn international recognition, and strengthen their university application profiles.' },
      { h: '🏆 Competition Integration', p: 'Students will be prepared to participate in the British Biology Olympiad (BBO) — one of the UK’s most prestigious Biology competitions. The competition provides:', list: [
        'Exposure to international academic standards',
        'Experience with Olympiad-style Biology questions',
        'International awards and academic recognition',
        'Stronger academic portfolios for university applications'
      ] },
      { h: 'Learning Approach', list: [
        'Advanced Biology beyond school curriculum',
        'Olympiad-style problem solving',
        'Scientific reasoning and data analysis',
        'Research-based learning',
        'Past paper practice and competition techniques'
      ] },
      { h: 'Learning Outcomes', list: [
        'Stronger understanding of advanced Biology concepts',
        'Improved performance in IGCSE and A-Level Biology',
        'Increased confidence in solving challenging Biology questions',
        'Development of scientific inquiry and analytical thinking',
        'Preparation for higher-level Biology competitions',
        'Preparation for future research projects and Extended Essays (EPQ / EE)',
        'Strong foundation for university programmes in Medicine, Biological Sciences and Natural Sciences'
      ] },
      { h: 'Future Pathway', p: 'This programme prepares students for future opportunities including:', list: [
        'British Biology Olympiad (BBO)',
        'International Biology Olympiad (IBO)',
        'Biomedical research projects',
        'EPQ / Independent Research',
        'Medical School applications',
        'Oxbridge & G5 Natural Sciences',
        'Biomedical Sciences',
        'Veterinary Science',
        'Pharmacy'
      ] },
      { h: 'Why Choose BBO?', checks: [
        'Improve school Biology results while preparing for international competitions',
        'Develop scientific thinking beyond the classroom',
        'Gain internationally recognised awards',
        'Strengthen university applications for Medicine and Science',
        'Build a strong foundation for future academic research',
        'Develop skills valued by leading universities worldwide'
      ] },
      { quote: 'Building Future Scientists, Doctors and Researchers.' }
    ],
    zh: [
      { tag: '🧬 英国生物奥林匹克（BBO）项目' },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['项目名称', '英国生物奥林匹克项目（British Biology Olympiad, BBO）'],
        ['适合学生', 'Y10 – Y13（Y9 需通过面试）'],
        ['项目类型', '生物拓展 + 竞赛备赛'],
        ['赛事主办方', '英国生物竞赛委员会（UKBC）'],
        ['国家', '英国'],
        ['学术水平', 'IGCSE → A-Level 拓展']
      ] } },
      { h: '项目目标', p: 'BBO 项目旨在培养学生超越校内课程的生物知识，同时强化分析思维、科学推理与问题解决能力。' },
      { p: '通过结构化的学术拓展与奥赛风格训练，学生将深化对生物学的理解，提升 IGCSE 与 A-Level 生物成绩，并为未来在医学、生物医学、自然科学、兽医学、药学及相关学科的深造打下学术基础。' },
      { p: '项目同时为 2027 年 1 月举行的英国生物奥林匹克竞赛（BBO）提供系统化备赛，帮助学生积累宝贵的竞赛经验、赢得国际认可，并增强大学申请竞争力。' },
      { h: '🏆 竞赛衔接', p: '学生将为参加英国生物奥林匹克竞赛（BBO）做好充分准备——这是英国最负盛名的生物竞赛之一。竞赛将为学生带来：', list: [
        '接触国际学术标准',
        '奥赛风格生物试题的实战经验',
        '国际奖项与学术认可',
        '更有竞争力的大学申请学术档案'
      ] },
      { h: '学习方式', list: [
        '超越校内课程的高阶生物',
        '奥赛风格问题解决训练',
        '科学推理与数据分析',
        '基于研究的学习方式',
        '历年真题练习与竞赛技巧'
      ] },
      { h: '学习成果', list: [
        '更深入理解高阶生物概念',
        'IGCSE 与 A-Level 生物成绩提升',
        '更有信心攻克高难度生物问题',
        '培养科学探究与分析性思维',
        '为更高水平的生物竞赛做好准备',
        '为未来的研究项目与拓展论文（EPQ / EE）做好准备',
        '为医学、生物科学与自然科学的大学课程打下坚实基础'
      ] },
      { h: '未来发展路径', p: '本项目为学生的以下未来机会做好准备：', list: [
        '英国生物奥林匹克（BBO）',
        '国际生物奥林匹克（IBO）',
        '生物医学研究项目',
        'EPQ / 独立研究',
        '医学院申请',
        '牛津剑桥及 G5 自然科学',
        '生物医学科学',
        '兽医学',
        '药学'
      ] },
      { h: '为什么选择 BBO？', checks: [
        '备战国际竞赛的同时提升校内生物成绩',
        '培养超越课堂的科学思维',
        '赢得国际认可的奖项',
        '增强医学与科学方向的大学申请竞争力',
        '为未来的学术研究打下坚实基础',
        '培养世界顶尖大学看重的能力'
      ] },
      { quote: '培养未来的科学家、医生与研究者。' }
    ],
    th: [
      { tag: '🧬 โปรแกรม British Biology Olympiad (BBO)' },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หัวข้อ', 'รายละเอียด'], rows: [
        ['ชื่อโปรแกรม', 'โปรแกรม British Biology Olympiad (BBO)'],
        ['กลุ่มนักเรียน', 'ปี 10 – ปี 13 (ปี 9 ต้องผ่านการสัมภาษณ์)'],
        ['ประเภทโปรแกรม', 'เสริมชีววิทยา + เตรียมการแข่งขัน'],
        ['ผู้จัดการแข่งขัน', 'UK Biology Competitions (UKBC)'],
        ['ประเทศ', 'สหราชอาณาจักร'],
        ['ระดับวิชาการ', 'IGCSE → ต่อยอด A-Level']
      ] } },
      { h: 'เป้าหมายของโปรแกรม', p: 'โปรแกรม BBO ออกแบบมาเพื่อพัฒนาความรู้ชีววิทยาของนักเรียนให้เหนือกว่าหลักสูตรโรงเรียน พร้อมเสริมการคิดเชิงวิเคราะห์ การให้เหตุผลทางวิทยาศาสตร์ และทักษะการแก้ปัญหา' },
      { p: 'ผ่านการเสริมวิชาการอย่างมีโครงสร้างและการฝึกสไตล์โอลิมปิก นักเรียนจะเข้าใจชีววิทยาลึกซึ้งขึ้น พัฒนาผลการเรียนชีววิทยา IGCSE และ A-Level และสร้างพื้นฐานทางวิชาการที่จำเป็นสำหรับการศึกษาต่อด้านการแพทย์ วิทยาศาสตร์ชีวการแพทย์ วิทยาศาสตร์ธรรมชาติ สัตวแพทยศาสตร์ เภสัชศาสตร์ และสาขาที่เกี่ยวข้อง' },
      { p: 'โปรแกรมยังเตรียมความพร้อมอย่างเป็นระบบสำหรับการแข่งขัน British Biology Olympiad (BBO) ในเดือนมกราคม 2027 ช่วยให้นักเรียนได้รับประสบการณ์การแข่งขันที่มีคุณค่า ได้รับการยอมรับระดับนานาชาติ และเสริมความแข็งแกร่งให้ประวัติการสมัครมหาวิทยาลัย' },
      { h: '🏆 การเชื่อมสู่การแข่งขัน', p: 'นักเรียนจะได้รับการเตรียมพร้อมเพื่อเข้าร่วม British Biology Olympiad (BBO) — หนึ่งในการแข่งขันชีววิทยาที่ทรงเกียรติที่สุดของสหราชอาณาจักร การแข่งขันนี้มอบ:', list: [
        'การสัมผัสมาตรฐานวิชาการระดับนานาชาติ',
        'ประสบการณ์โจทย์ชีววิทยาสไตล์โอลิมปิก',
        'รางวัลและการยอมรับระดับนานาชาติ',
        'ประวัติทางวิชาการที่แข็งแกร่งสำหรับการสมัครมหาวิทยาลัย'
      ] },
      { h: 'แนวทางการเรียน', list: [
        'ชีววิทยาขั้นสูงเหนือหลักสูตรโรงเรียน',
        'การแก้ปัญหาสไตล์โอลิมปิก',
        'การให้เหตุผลทางวิทยาศาสตร์และการวิเคราะห์ข้อมูล',
        'การเรียนรู้จากการวิจัย',
        'ฝึกข้อสอบเก่าและเทคนิคการแข่งขัน'
      ] },
      { h: 'ผลการเรียนรู้', list: [
        'เข้าใจแนวคิดชีววิทยาขั้นสูงลึกซึ้งยิ่งขึ้น',
        'ผลการเรียนชีววิทยา IGCSE และ A-Level ดีขึ้น',
        'มั่นใจมากขึ้นในการแก้โจทย์ชีววิทยาที่ท้าทาย',
        'พัฒนาการสืบเสาะทางวิทยาศาสตร์และการคิดเชิงวิเคราะห์',
        'เตรียมพร้อมสำหรับการแข่งขันชีววิทยาระดับสูง',
        'เตรียมพร้อมสำหรับโปรเจกต์วิจัยและเรียงความขยาย (EPQ / EE)',
        'พื้นฐานที่แข็งแกร่งสำหรับหลักสูตรมหาวิทยาลัยด้านการแพทย์ วิทยาศาสตร์ชีวภาพ และวิทยาศาสตร์ธรรมชาติ'
      ] },
      { h: 'เส้นทางอนาคต', p: 'โปรแกรมนี้เตรียมนักเรียนสำหรับโอกาสในอนาคต ได้แก่:', list: [
        'British Biology Olympiad (BBO)',
        'International Biology Olympiad (IBO)',
        'โปรเจกต์วิจัยชีวการแพทย์',
        'EPQ / การวิจัยอิสระ',
        'การสมัครคณะแพทยศาสตร์',
        'วิทยาศาสตร์ธรรมชาติ Oxbridge & G5',
        'วิทยาศาสตร์ชีวการแพทย์',
        'สัตวแพทยศาสตร์',
        'เภสัชศาสตร์'
      ] },
      { h: 'ทำไมต้องเลือก BBO?', checks: [
        'พัฒนาผลการเรียนชีววิทยาในโรงเรียนพร้อมเตรียมการแข่งขันนานาชาติ',
        'พัฒนาการคิดทางวิทยาศาสตร์เหนือห้องเรียน',
        'ได้รับรางวัลที่เป็นที่ยอมรับระดับนานาชาติ',
        'เสริมการสมัครมหาวิทยาลัยสายการแพทย์และวิทยาศาสตร์',
        'สร้างพื้นฐานที่แข็งแกร่งสำหรับการวิจัยทางวิชาการในอนาคต',
        'พัฒนาทักษะที่มหาวิทยาลัยชั้นนำทั่วโลกให้คุณค่า'
      ] },
      { quote: 'สร้างนักวิทยาศาสตร์ แพทย์ และนักวิจัยแห่งอนาคต' }
    ]
  }
});

/* =========================================================
 * 经济与商务竞赛 · 专属课程大纲
 * 内容依据 NEC / Marshall / John Locke / Wharton 官方资料检索整理（2026-08-07）
 * ========================================================= */
Object.assign(COURSE_OVERVIEWS, {
  'econ-biz': {
    en: [
      { tag: 'Economics Meets the World Stage.' },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Programme Name', 'Economics & Business Competition Programme'],
        ['Target Students', 'Year 9 – Year 13'],
        ['Format', '1-on-1 personalised coaching'],
        ['Focus', 'International economics & business competitions'],
        ['Flagship Competitions', 'NEC (National Economics Challenge)\nMarshall Society Essay Competition\nJohn Locke Essay Competition (Economics)\nWharton Global High School Investment Competition (incl. ABS / IBS series)'],
        ['Organisers', 'Council for Economic Education (CEE) · Cambridge University · John Locke Institute · The Wharton School, University of Pennsylvania']
      ] } },
      { h: 'Programme Aim', p: 'This programme is designed for students interested in economics and business who want to compete on the international stage. Through 1-on-1 coaching tailored to each target competition, students develop rigorous economic thinking, academic essay writing, case analysis and presentation, and financial literacy—building a standout portfolio for university applications to top programmes in economics, business and finance.' },
      { h: '🏆 Flagship Competitions', p: 'Students are trained for the world’s most prestigious high-school economics and business competitions:' },
      { h: '1️⃣ NEC (National Economics Challenge)', p: 'Organised by the Council for Economic Education (CEE), NEC is America’s premier high-school economics competition, testing microeconomics, macroeconomics, and international economics & current events in teams of four. Rounds include a qualifying test, a Critical Thinking case-analysis presentation, and a live Quiz Bowl, with divisions (Adam Smith / David Ricardo / Pre) matched to experience. Top teams advance from regional rounds to national finals and the NEC Global Finals.' },
      { h: '2️⃣ Marshall Society Essay Competition', p: 'Run by the Marshall Society of the University of Cambridge, this competition asks students to write a 1,250-word essay applying economic theory to contemporary issues. Essays are judged on the logic and persuasiveness of the argument, the quality of evidence, and originality; winning essays are published in The Dismal Scientist.' },
      { h: '3️⃣ John Locke Essay Competition (Economics)', p: 'Founded by Oxford professors and run by the John Locke Institute, this is regarded as the "International Olympiad" of the humanities and social sciences. The Economics category requires a maximum 2,000-word essay advancing an original, well-evidenced argument. Entries are reviewed anonymously by academics from Oxford, Harvard and other top universities; a strong result carries exceptional weight for PPE, economics, law and business applications.' },
      { h: '4️⃣ Wharton Global High School Investment Competition (WGHS)', p: 'Hosted by the Wharton School of the University of Pennsylvania—the #1 ranked US undergraduate business school—WGHS (formerly KWHS) is the most prestigious investment competition for high schoolers. Teams of 4–6 students manage a US$250,000 virtual portfolio for 10 weeks on Wharton’s investment simulator (WInS), submitting a midterm review and a final investment strategy report. Top 50 teams reach the semifinals and the top 10 present at the global finals in Philadelphia. Assessment focuses on strategy, teamwork and risk management, not simply returns. Students may also explore the wider Wharton Global Youth family of programmes, including the ABS / IBS series.' },
      { h: 'What Students Will Learn', list: [
        'Micro, macro and international economics knowledge (NEC syllabus)',
        'Academic essay writing and argumentation (Marshall / John Locke)',
        'Case analysis, presentation and defence skills',
        'Financial literacy, valuation and investment strategy (WGHS)',
        'Teamwork, time management and competition planning'
      ] },
      { h: 'Why Choose This Programme', checks: [
        'Covers four flagship international competitions in one pathway',
        '1-on-1 coaching tailored to your target competition',
        'Mentors experienced in economics, essay writing and business cases',
        'A compelling academic profile for economics, business and finance applications'
      ] },
      { quote: 'From economics classrooms to the world stage.' }
    ],
    zh: [
      { tag: '让经济学站上世界舞台。' },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['项目名称', '经济与商务竞赛项目（Economics & Business Competition Programme）'],
        ['适合学生', 'Y9 – Y13'],
        ['课程形式', '一对一个性化辅导'],
        ['课程重点', '国际经济学与商科竞赛'],
        ['主打赛事', 'NEC（全美经济学挑战赛）\nMarshall Society 经济学论文竞赛\nJohn Locke 论文竞赛（经济方向）\n沃顿全球高中生投资竞赛（含 ABS / IBS 系列）'],
        ['主办方', '美国经济教育学会（CEE）· 剑桥大学 · John Locke Institute · 宾夕法尼亚大学沃顿商学院']
      ] } },
      { h: '项目目标', p: '本项目面向对经济与商务感兴趣、希望在国际赛场上崭露头角的学生。通过针对目标赛事量身定制的一对一辅导，学生将系统训练经济学思维、学术论文写作、案例分析演讲与金融素养，为申请全球顶尖的经济、商务与金融项目打造极具竞争力的申请档案。' },
      { h: '🏆 主打国际赛事', p: '学生将接受全球最具含金量的高中生经济与商务赛事的专项训练：' },
      { h: '1️⃣ NEC（全美经济学挑战赛）', p: '由美国经济教育学会（CEE）主办，是美国最具声望的高中生经济学竞赛，以 4 人团队形式考察微观经济学、宏观经济学、国际经济与时事。赛程包含客观题测评、案例大剖析（Critical Thinking）现场展示与答辩、超级碗（Quiz Bowl）抢答等环节，并设有 Adam Smith / David Ricardo / Pre 三个组别。优胜队伍从区域赛晋级全国决赛，直至 NEC 全球总决赛。' },
      { h: '2️⃣ Marshall Society 经济学论文竞赛', p: '由剑桥大学马歇尔学会主办，要求学生撰写一篇 1250 词的论文，将经济理论应用于当代现实议题。评审依据论点的逻辑性与说服力、论据质量与原创性；获奖论文将发表在《The Dismal Scientist》刊物上。' },
      { h: '3️⃣ John Locke 论文竞赛（经济方向）', p: '由牛津大学教授发起、John Locke Institute 主办，被誉为"人文社科领域的国际奥赛"。经济方向要求撰写一篇不超过 2000 词的原创论证论文，由牛津、哈佛等顶尖院校学者匿名评审。优异成绩对 PPE、经济、法律、商科方向的大学申请具有极高含金量。' },
      { h: '4️⃣ 沃顿全球高中生投资竞赛（WGHS）', p: '由美国本科商学院排名第一的宾夕法尼亚大学沃顿商学院主办，WGHS（原 KWHS）是面向高中生最具权威性的投资竞赛。4–6 人团队使用 25 万美元虚拟资金，在沃顿投资模拟平台（WInS）上进行为期 10 周的组合管理与交易，提交中期回顾与最终投资策略报告。前 50 名晋级半决赛，前 10 名赴费城参加全球总决赛。评审看重策略质量、团队协作与风险管理，而非单纯收益。学生还可探索沃顿全球青年项目系列（含 ABS / IBS 系列）。' },
      { h: '学生将学到什么', list: [
        '宏微观与国际经济学知识（NEC 考纲）',
        '学术论文写作与论证能力（Marshall / John Locke）',
        '案例分析、展示与答辩技巧',
        '金融素养、估值与投资策略（WGHS）',
        '团队协作、时间管理与备赛规划'
      ] },
      { h: '为什么选择本项目', checks: [
        '一条路径覆盖四大旗舰国际赛事',
        '按目标赛事定制的一对一辅导',
        '深耕经济、论文与商科案例的导师团队',
        '为经济、商务与金融申请打造亮眼学术档案'
      ] },
      { quote: '从经济学课堂，走向世界舞台。' }
    ],
    th: [
      { tag: 'เศรษฐศาสตร์สู่เวทีโลก' },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หัวข้อ', 'รายละเอียด'], rows: [
        ['ชื่อโปรแกรม', 'โปรแกรมการแข่งขันเศรษฐศาสตร์และธุรกิจ (Economics & Business Competition Programme)'],
        ['กลุ่มนักเรียน', 'ปี 9 – ปี 13'],
        ['รูปแบบ', 'โค้ชตัวต่อตัวเฉพาะบุคคล'],
        ['จุดเน้น', 'การแข่งขันเศรษฐศาสตร์และธุรกิจระดับนานาชาติ'],
        ['การแข่งขันหลัก', 'NEC (National Economics Challenge)\nMarshall Society Essay Competition\nJohn Locke Essay Competition (สาขาเศรษฐศาสตร์)\nWharton Global High School Investment Competition (รวมถึงซีรีส์ ABS / IBS)'],
        ['ผู้จัด', 'Council for Economic Education (CEE) · มหาวิทยาลัยเคมบริดจ์ · John Locke Institute · Wharton School มหาวิทยาลัยเพนซิลเวเนีย']
      ] } },
      { h: 'เป้าหมายของโปรแกรม', p: 'โปรแกรมนี้ออกแบบสำหรับนักเรียนที่สนใจเศรษฐศาสตร์และธุรกิจและต้องการแข่งขันบนเวทีระดับนานาชาติ ผ่านการโค้ชตัวต่อตัวที่ปรับตามการแข่งขันเป้าหมาย นักเรียนจะฝึกฝนการคิดเชิงเศรษฐศาสตร์อย่างเข้มงวด การเขียนเรียงความวิชาการ การวิเคราะห์กรณีศึกษาและการนำเสนอ และความรู้ทางการเงิน—สร้างประวัติที่โดดเด่นสำหรับการสมัครหลักสูตรเศรษฐศาสตร์ ธุรกิจ และการเงินชั้นนำ' },
      { h: '🏆 การแข่งขันหลักระดับนานาชาติ', p: 'นักเรียนจะได้รับการฝึกซ้อมสำหรับการแข่งขันเศรษฐศาสตร์และธุรกิจระดับมัธยมที่มีชื่อเสียงที่สุดของโลก:' },
      { h: '1️⃣ NEC (National Economics Challenge)', p: 'จัดโดย Council for Economic Education (CEE) เป็นการแข่งขันเศรษฐศาสตร์ระดับมัธยมที่ทรงเกียรติที่สุดของสหรัฐอเมริกา ทดสอบเศรษฐศาสตร์จุลภาค มหภาค และเศรษฐศาสตร์ระหว่างประเทศกับเหตุการณ์ปัจจุบัน เป็นทีม 4 คน ประกอบด้วยข้อสอบวัดความรู้ การวิเคราะห์กรณีศึกษา (Critical Thinking) และรอบ Quiz Bowl แบ่งกลุ่มตามประสบการณ์ (Adam Smith / David Ricardo / Pre) ทีมที่ชนะจะก้าวจากรอบภูมิภาคสู่รอบชิงชนะเลิศระดับประเทศจนถึง NEC Global Finals' },
      { h: '2️⃣ Marshall Society Essay Competition', p: 'จัดโดย Marshall Society แห่งมหาวิทยาลัยเคมบริดจ์ ให้นักเรียนเขียนเรียงความ 1,250 คำประยุกต์ทฤษฎีเศรษฐศาสตร์กับประเด็นร่วมสมัย เกณฑ์ตัดสินจากตรรกะและความโน้มน้าวของข้อโต้แย้ง คุณภาพของหลักฐาน และความคิดริเริ่ม บทความที่ชนะจะตีพิมพ์ใน The Dismal Scientist' },
      { h: '3️⃣ John Locke Essay Competition (สาขาเศรษฐศาสตร์)', p: 'ก่อตั้งโดยศาสตราจารย์มหาวิทยาลัยออกซฟอร์ด ดำเนินการโดย John Locke Institute ถือเป็น "โอลิมปิกนานาชาติ" ของสาขามนุษยศาสตร์และสังคมศาสตร์ สาขาเศรษฐศาสตร์ต้องเขียนเรียงความไม่เกิน 2,000 คำนำเสนอข้อโต้แย้งดั้งเดิมที่มีหลักฐานรองรับ ผู้ตรวจเป็นนักวิชาการจากออกซฟอร์ด ฮาร์วาร์ด และมหาวิทยาลัยชั้นนำอื่นๆ ผลลัพธ์ที่ยอดเยี่ยมมีน้ำหนักสูงมากสำหรับการสมัคร PPE เศรษฐศาสตร์ กฎหมาย และธุรกิจ' },
      { h: '4️⃣ Wharton Global High School Investment Competition (WGHS)', p: 'จัดโดย Wharton School มหาวิทยาลัยเพนซิลเวเนีย—คณะบริหารธุรกิจระดับปริญญาตรีอันดับ 1 ของสหรัฐฯ—WGHS (เดิม KWHS) เป็นการแข่งขันการลงทุนที่มีเกียรติที่สุดสำหรับนักเรียนมัธยม ทีม 4–6 คนบริหารพอร์ตเงินจำลอง 250,000 ดอลลาร์เป็นเวลา 10 สัปดาห์บนแพลตฟอร์มจำลองการลงทุนของวอร์ตัน (WInS) ส่งรายงานกลางและรายงานกลยุทธ์การลงทุนฉบับสุดท้าย 50 ทีมแรกเข้าสู่รอบรองชนะเลิศ และ 10 ทีมสุดท้ายนำเสนอที่รอบชิงชนะเลิศระดับโลกในฟิลาเดลเฟีย การตัดสินให้ความสำคัญกับกลยุทธ์ การทำงานเป็นทีม และการบริหารความเสี่ยง ไม่ใช่แค่ผลตอบแทน นักเรียนยังสามารถสำรวจโปรแกรมตระกูล Wharton Global Youth รวมถึงซีรีส์ ABS / IBS' },
      { h: 'นักเรียนจะได้เรียนอะไร', list: [
        'ความรู้เศรษฐศาสตร์จุลภาค มหภาค และระหว่างประเทศ (หลักสูตร NEC)',
        'การเขียนเรียงความวิชาการและการโต้แย้ง (Marshall / John Locke)',
        'ทักษะการวิเคราะห์กรณีศึกษา การนำเสนอ และการตอบคำถาม',
        'ความรู้ทางการเงิน การประเมินมูลค่า และกลยุทธ์การลงทุน (WGHS)',
        'การทำงานเป็นทีม การจัดการเวลา และการวางแผนแข่งขัน'
      ] },
      { h: 'ทำไมต้องเลือกโปรแกรมนี้', checks: [
        'ครอบคลุมการแข่งขันระดับนานาชาติชั้นนำสี่รายการในเส้นทางเดียว',
        'โค้ชตัวต่อตัวที่ปรับตามการแข่งขันเป้าหมาย',
        'เมนเทอร์ผู้เชี่ยวชาญเศรษฐศาสตร์ การเขียนเรียงความ และกรณีธุรกิจ',
        'ประวัติวิชาการที่โดดเด่นสำหรับการสมัครเศรษฐศาสตร์ ธุรกิจ และการเงิน'
      ] },
      { quote: 'จากห้องเรียนเศรษฐศาสตร์ สู่เวทีโลก' }
    ]
  }
});

/* =========================================================
 * USABO 美国生物奥赛 · 专属课程大纲
 * 内容依据 USABO (CEE) 官方赛制与考点资料检索整理（2026-08-07）
 * ========================================================= */
Object.assign(COURSE_OVERVIEWS, {
  usabo: {
    en: [
      { tag: 'Master the Science. Compete for the Nation.' },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Programme Name', 'USABO (USA Biology Olympiad) Programme'],
        ['Target Students', 'Year 11 – Year 13'],
        ['Programme Type', 'Biology Enrichment + Competition Preparation'],
        ['Organiser (Competition)', 'Center for Excellence in Education (CEE) · USA'],
        ['Academic Level', 'A-Level → University-level extension'],
        ['Main Exam', 'Open Exam (held annually in April)']
      ] } },
      { h: 'Programme Aim', p: 'The USABO programme develops students’ biological knowledge far beyond the school curriculum—from molecular mechanisms and cell biology to genetics, physiology, ecology and evolution—while building the analytical reading, experimental interpretation and timed problem-solving skills the Olympiad demands.' },
      { p: 'Students receive systematic preparation for the USA Biology Olympiad Open Exam held each April. For international participants, strong results earn official national-ranking awards that carry significant weight in university applications, especially for biology, biomedical sciences, pre-medicine and life-science programmes.' },
      { h: '🏆 Competition Format & Pathway', list: [
        'Open Exam — 50 multiple-choice questions in 50 minutes, covering cell biology, genetics & evolution, plant & animal physiology, ecology, ethology and biosystematics; awards (gold / silver / bronze / high distinction) are ranked nationally. International students (e.g. via Bio-USACN in China) can take this round and win awards.',
        'Semifinal Exam — mixed question types in a 120-minute paper (open to US citizens / green-card holders).',
        'National Finals — a 12-day training camp with practical and theory examinations for the top US students, selecting the team for the International Biology Olympiad (IBO).'
      ] },
      { h: 'Exam Focus Areas', table: { head: ['Topic', 'Approx. Weight', 'High-Frequency Points'], rows: [
        ['Animal Physiology & Anatomy', '~25%', 'Nervous system, immune system, endocrine feedback, circulation, digestion, excretion'],
        ['Cell Biology', '~20%', 'Organelles, molecular mechanisms, cellular respiration, signal transduction'],
        ['Genetics & Evolution', '~20%', 'Mendelian genetics extension, linkage mapping, population genetics, molecular evolution'],
        ['Plant Physiology & Anatomy', '~15%', 'Transport in xylem / phloem, photosynthesis, flowering regulation'],
        ['Ecology', '~10%', 'Ecosystems, population dynamics, biogeochemical cycles'],
        ['Ethology (Animal Behaviour)', '~5%', 'Behaviour patterns, altruism, parental investment'],
        ['Biosystematics (Classification)', '~5%', 'Major phyla, phylogenetic trees, homology & analogy'],
        ['Emerging Topics', 'New', 'Neurobiology and bioinformatics (e.g. BLAST, sequence alignment)']
      ] } },
      { h: 'Learning Approach', list: [
        'Systematic study based on Campbell Biology and past papers',
        'Research-scenario and data-based questions (long stimuli, graphs, experiments)',
        'Timed mock exams — 50 questions in 50 minutes, under 60 seconds per question',
        'Scientific terminology mastery and English academic reading',
        'Error analysis and targeted revision of weak modules'
      ] },
      { h: 'Learning Outcomes', list: [
        'Deep mastery of A-Level-and-beyond biology content',
        'Higher scores in school exams and university-level science readiness',
        'Competitive USABO / olympiad performance',
        'A strong credential for biology and medicine applications',
        'Preparation for future research and Extended Essays (EPQ / EE)'
      ] },
      { h: 'Why Choose USABO?', checks: [
        'The most prestigious US biology olympiad, recognised worldwide',
        'Systematic, high-intensity olympiad training with an expert mentor',
        'Internationally ranked awards for your application profile',
        'A launchpad toward the International Biology Olympiad (IBO)'
      ] },
      { quote: 'Master the science. Compete for the nation.' }
    ],
    zh: [
      { tag: '掌握生命科学，为荣誉而战。' },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['项目名称', 'USABO（美国生物奥林匹克）项目'],
        ['适合学生', 'Y11 – Y13'],
        ['项目类型', '生物拓展 + 竞赛备赛'],
        ['赛事主办方', '美国精英教育中心（CEE）· 美国'],
        ['学术水平', 'A-Level → 大学水平拓展'],
        ['主要考试', '初赛 Open Exam（每年 4 月举行）']
      ] } },
      { h: '项目目标', p: 'USABO 项目将学生的生物知识拓展至远超校内课程的水平——从分子机制、细胞生物学到遗传学、生理学、生态学与进化，同时培养奥赛所需的科研阅读、实验解读与限时解题能力。' },
      { p: '学生将接受每年 4 月举行的美国生物奥林匹克初赛（Open Exam）的系统化备赛。国际参赛者凭优异成绩可获得官方全国排名奖项，在生物、生物医学、医学预科与生命科学方向的大学申请中具有重要分量。' },
      { h: '🏆 竞赛形式与晋级路径', list: [
        '初赛 Open Exam——50 道单选题、50 分钟，覆盖细胞生物学、遗传与进化、动植物生理、生态学、动物行为学与生物分类学；按全国排名评出金/银/铜及高分奖。国际学生（如中国的 Bio-USACN）可参加本环节并获奖。',
        '半决赛 Semifinal Exam——120 分钟混合题型笔试（仅限美国公民/绿卡持有者）。',
        '全国总决赛 National Finals——为期 12 天的集训营，包含实践与理论考试，选拔美国国家队参加国际生物奥林匹克（IBO）。'
      ] },
      { h: '考点分布', table: { head: ['模块', '占比', '高频考点'], rows: [
        ['动物生理与解剖', '约 25%', '神经系统、免疫系统、内分泌反馈、循环、消化、排泄'],
        ['细胞生物学', '约 20%', '细胞器、分子机制、细胞呼吸、信号传导通路'],
        ['遗传与进化', '约 20%', '孟德尔遗传拓展、基因连锁图谱、群体遗传、分子进化'],
        ['植物生理与解剖', '约 15%', '木质部/韧皮部运输、光合作用、开花调控'],
        ['生态学', '约 10%', '生态系统、种群动态、生物地球化学循环'],
        ['动物行为学', '约 5%', '行为模式、利他行为、亲代投资'],
        ['生物分类学', '约 5%', '主要门类、系统发育树、同源与同功结构'],
        ['新兴考点', '新增', '神经生物学与生物信息学（如 BLAST 序列比对）']
      ] } },
      { h: '学习方式', list: [
        '以 Campbell Biology 与历年真题为基础的系统学习',
        '科研情景题与数据分析题训练（长材料、图表、实验设计）',
        '限时模考——50 分钟 50 题，每题平均 60 秒',
        '专业术语与英文学术阅读能力强化',
        '错题归因与薄弱模块专项补强'
      ] },
      { h: '学习成果', list: [
        '深度掌握 A-Level 及以上生物内容',
        '校内成绩提升与大学级科学课程衔接',
        'USABO / 奥赛级别的竞技表现',
        '生物与医学方向申请的强有力背书',
        '为未来研究与拓展论文（EPQ / EE）做好准备'
      ] },
      { h: '为什么选择 USABO？', checks: [
        '全球认可度最高的美国生物奥赛',
        '专家导师指导的系统化高强度奥赛训练',
        '国际排名的官方奖项为申请加分',
        '通往国际生物奥林匹克（IBO）的跳板'
      ] },
      { quote: '掌握生命科学，为荣誉而战。' }
    ],
    th: [
      { tag: 'เชี่ยวชาญวิทยาศาสตร์ชีวภาพ เพื่อเกียรติยศของชาติ' },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หัวข้อ', 'รายละเอียด'], rows: [
        ['ชื่อโปรแกรม', 'โปรแกรม USABO (USA Biology Olympiad)'],
        ['กลุ่มนักเรียน', 'ปี 11 – ปี 13'],
        ['ประเภทโปรแกรม', 'เสริมชีววิทยา + เตรียมการแข่งขัน'],
        ['ผู้จัดการแข่งขัน', 'Center for Excellence in Education (CEE) · สหรัฐอเมริกา'],
        ['ระดับวิชาการ', 'A-Level → ต่อยอดระดับมหาวิทยาลัย'],
        ['การสอบหลัก', 'Open Exam (จัดทุกเดือนเมษายน)']
      ] } },
      { h: 'เป้าหมายของโปรแกรม', p: 'โปรแกรม USABO พัฒนาความรู้ชีววิทยาของนักเรียนให้ไกลเกินกว่าหลักสูตรโรงเรียน—ตั้งแต่กลไกระดับโมเลกุล เซลล์ชีววิทยา ไปจนถึงพันธุศาสตร์ สรีรวิทยา นิเวศวิทยาและวิวัฒนาการ—พร้อมสร้างทักษะการอ่านเชิงวิจัย การตีความการทดลอง และการแก้ปัญหาภายใต้เวลาจำกัดที่โอลิมปิกต้องการ' },
      { p: 'นักเรียนจะได้รับการเตรียมตัวอย่างเป็นระบบสำหรับการสอบ Open Exam ของ USA Biology Olympiad ที่จัดทุกเดือนเมษายน สำหรับผู้เข้าร่วมนานาชาติ ผลงานที่ยอดเยี่ยมจะได้รับรางวัลอันดับระดับชาติอย่างเป็นทางการ ซึ่งมีน้ำหนักสูงในการสมัครมหาวิทยาลัย โดยเฉพาะชีววิทยา วิทยาศาสตร์ชีวการแพทย์ แพทยศาสตร์เตรียมคลินิก และวิทยาศาสตร์ชีวภาพ' },
      { h: '🏆 รูปแบบการแข่งขันและเส้นทาง', list: [
        'Open Exam — ข้อสอบปรนัย 50 ข้อใน 50 นาที ครอบคลุมเซลล์ชีววิทยา พันธุศาสตร์และวิวัฒนาการ สรีรวิทยาพืชและสัตว์ นิเวศวิทยา พฤติกรรมสัตว์ และชีวอนุกรมวิธาน แบ่งรางวัลตามอันดับระดับประเทศ (เหรียญทอง/เงิน/ทองแดง/เกียรตินิยม) นักเรียนนานาชาติ (เช่น Bio-USACN ในจีน) สามารถเข้ารอบนี้และได้รับรางวัล',
        'Semifinal Exam — ข้อสอบผสม 120 นาที (เฉพาะพลเมืองสหรัฐฯ / ผู้ถือกรีนการ์ด)',
        'National Finals — ค่ายฝึก 12 วันพร้อมการสอบปฏิบัติและทฤษฎี คัดเลือกทีมชาติสหรัฐฯ ไปแข่งขัน International Biology Olympiad (IBO)'
      ] },
      { h: 'จุดเน้นของข้อสอบ', table: { head: ['หัวข้อ', 'สัดส่วนโดยประมาณ', 'จุดที่ออกบ่อย'], rows: [
        ['สรีรวิทยาและกายวิภาคสัตว์', '~25%', 'ระบบประสาท ระบบภูมิคุ้มกัน วงจรฮอร์โมน ระบบหมุนเวียน ระบบย่อย ระบบขับถ่าย'],
        ['เซลล์ชีววิทยา', '~20%', 'ออร์แกเนลล์ กลไกระดับโมเลกุล การหายใจระดับเซลล์ วิถีสัญญาณ'],
        ['พันธุศาสตร์และวิวัฒนาการ', '~20%', 'พันธุศาสตร์เมนเดลขั้นสูง แผนที่ยีน พันธุศาสตร์ประชากร วิวัฒนาการระดับโมเลกุล'],
        ['สรีรวิทยาและกายวิภาคพืช', '~15%', 'การลำเลียงในไซเลม/โฟลเอ็ม การสังเคราะห์แสง การควบคุมการออกดอก'],
        ['นิเวศวิทยา', '~10%', 'ระบบนิเวศ พลวัตประชากร วัฏจักรชีวธรณีเคมี'],
        ['พฤติกรรมสัตว์', '~5%', 'รูปแบบพฤติกรรม พฤติกรรมเสียสละ การลงทุนของพ่อแม่'],
        ['ชีวอนุกรมวิธาน', '~5%', 'ไฟลัมหลัก ต้นไม้วิวัฒนาการ โครงสร้างคล้ายคลึงและคล้ายกัน'],
        ['หัวข้อใหม่', 'ใหม่', 'ประสาทชีววิทยาและชีวสารสนเทศ (เช่น BLAST การเทียบลำดับ)']
      ] } },
      { h: 'แนวทางการเรียน', list: [
        'เรียนอย่างเป็นระบบจาก Campbell Biology และข้อสอบเก่า',
        'ฝึกโจทย์สถานการณ์วิจัยและโจทย์ข้อมูล (บทความยาว กราฟ การทดลอง)',
        'สอบจำลองจับเวลา — 50 ข้อใน 50 นาที เฉลี่ยข้อละ 60 วินาที',
        'เสริมคำศัพท์วิทยาศาสตร์และการอ่านวิชาการภาษาอังกฤษ',
        'วิเคราะห์ข้อผิดพลาดและทบทวนโมดูลที่อ่อนแออย่างตรงจุด'
      ] },
      { h: 'ผลการเรียนรู้', list: [
        'เชี่ยวชาญเนื้อหาชีววิทยาระดับ A-Level และสูงกว่า',
        'คะแนนสอบในโรงเรียนดีขึ้น พร้อมต่อยอดวิทยาศาสตร์ระดับมหาวิทยาลัย',
        'ผลงานแข่งขัน USABO / ระดับโอลิมปิกที่แข่งขันได้',
        'หลักฐานที่แข็งแกร่งสำหรับการสมัครชีววิทยาและการแพทย์',
        'เตรียมพร้อมสำหรับการวิจัยและเรียงความขยาย (EPQ / EE) ในอนาคต'
      ] },
      { h: 'ทำไมต้องเลือก USABO?', checks: [
        'โอลิมปิกชีววิทยาที่ทรงเกียรติที่สุดของสหรัฐฯ ได้รับการยอมรับทั่วโลก',
        'การฝึกโอลิมปิกเข้มข้นอย่างเป็นระบบกับเมนเทอร์ผู้เชี่ยวชาญ',
        'รางวัลอันดับระดับนานาชาติเสริมประวัติการสมัคร',
        'จุดเริ่มต้นสู่ International Biology Olympiad (IBO)'
      ] },
      { quote: 'เชี่ยวชาญวิทยาศาสตร์ชีวภาพ เพื่อเกียรติยศของชาติ' }
    ]
  },

  /* ========== Introduction to Debating（专属大纲）
   * 来源：Untitled document（修改)(1).docx（2026-08-14 嵌入） ========== */
  'speaking-debate-intro': {
    en: [
      { h: 'About This Course', p: 'A course for beginners to public speaking, instilling confidence to join competitions.' },
      { h: 'Course Objectives', list: [
        'Build confidence in public speaking and presentations',
        'Develop logical thinking and structured argument skills',
        'Introduce debate techniques and critical reasoning',
        'Prepare students for Public Speaking, Debate, and MUN competitions'
      ] },
      { h: 'Learning Outcomes', list: [
        'Speak confidently and clearly in front of an audience',
        'Present structured arguments and opinions',
        'Participate in debates and discussions',
        'Demonstrate readiness for entry-level competitions',
        'Clear pathway into Debate / MUN / Leadership tracks'
      ] },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Programme Name', 'Debating and MUN Excellence Programme'],
        ['Target Students', 'Year 4 – Year 6'],
        ['Schedule', 'Monday 3:40–4:40 pm'],
        ['Class Format', 'Small group (8 students)']
      ] } },
      { h: 'Why Choose This Programme', checks: [
        'Builds confidence at a critical stage (Y4–Y6)'
      ] }
    ],
    zh: [
      { h: '课程简介', p: '一门面向公开演讲初学者的课程，帮助学生建立参赛所需的自信心。' },
      { h: '课程目标', list: [
        '建立公开演讲与展示的自信心',
        '培养逻辑思维与结构化论证能力',
        '引入辩论技巧与批判性推理',
        '为公开演讲、辩论与 MUN 竞赛做好准备'
      ] },
      { h: '学习成果', list: [
        '在观众面前自信、清晰地表达',
        '呈现结构化的论点与观点',
        '参与辩论与讨论',
        '展现参加入门级竞赛的成熟度',
        '为辩论 / MUN / 领导力方向铺就清晰路径'
      ] },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['项目名称', '辩论与模拟联合国卓越课程'],
        ['适合年级', 'Y4–Y6'],
        ['上课时间', '周一 15:40–16:40'],
        ['班级形式', '小班教学（8 人）']
      ] } },
      { h: '为什么选择本项目', checks: [
        '在关键成长阶段（Y4–Y6）建立自信'
      ] }
    ],
    th: [
      { h: 'เกี่ยวกับหลักสูตรนี้', p: 'หลักสูตรสำหรับผู้เริ่มต้นเรียนการพูดในที่สาธารณะ ปลูกฝังความมั่นใจในการเข้าร่วมการแข่งขัน' },
      { h: 'วัตถุประสงค์ของหลักสูตร', list: [
        'สร้างความมั่นใจในการพูดในที่สาธารณะและการนำเสนอ',
        'พัฒนาการคิดเชิงตรรกะและทักษะการโต้แย้งอย่างมีโครงสร้าง',
        'แนะนำเทคนิคการโต้วาทีและการใช้เหตุผลเชิงวิพากษ์',
        'เตรียมนักเรียนสำหรับการแข่งขันพูดในที่สาธารณะ โต้วาที และ MUN'
      ] },
      { h: 'ผลการเรียนรู้', list: [
        'พูดอย่างมั่นใจและชัดเจนต่อหน้าผู้ฟัง',
        'นำเสนอข้อโต้แย้งและความคิดเห็นอย่างมีโครงสร้าง',
        'เข้าร่วมการโต้วาทีและการอภิปราย',
        'แสดงความพร้อมสำหรับการแข่งขันระดับเริ่มต้น',
        'มีเส้นทางที่ชัดเจนสู่ทิศทางโต้วาที / MUN / ภาวะผู้นำ'
      ] },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หมวดหมู่', 'รายละเอียด'], rows: [
        ['ชื่อโปรแกรม', 'หลักสูตรโต้วาทีและสหประชาชาติจำลองสู่ความเป็นเลิศ'],
        ['กลุ่มเป้าหมาย', 'ปี 4 – ปี 6'],
        ['ตารางเรียน', 'จันทร์ 15:40–16:40'],
        ['รูปแบบชั้นเรียน', 'กลุ่มย่อย (8 คน)']
      ] } },
      { h: 'ทำไมต้องเลือกโปรแกรมนี้', checks: [
        'สร้างความมั่นใจในช่วงวัยสำคัญ (ปี 4–6)'
      ] }
    ]
  },

  /* ========== Debating and MUN Excellence Programme（专属大纲）
   * 来源：Untitled document（修改)(1).docx（2026-08-14 嵌入） ========== */
  'speaking-debate-comp': {
    en: [
      { h: 'About This Course', p: 'A course for novice public speakers aiming to join competitions.' },
      { h: 'Course Objectives', list: [
        'Build confidence in public speaking and presentations',
        'Develop logical thinking and structured argument skills',
        'Introduce debate techniques and critical reasoning',
        'Prepare students for Public Speaking, Debate, and MUN competitions'
      ] },
      { h: 'Learning Outcomes', list: [
        'Speak confidently and clearly in front of an audience',
        'Present structured arguments and opinions',
        'Participate in debates and discussions',
        'Demonstrate readiness for entry-level competitions',
        'Clear pathway into Debate / MUN / Leadership tracks'
      ] },
      { h: 'Programme Overview', table: { head: ['Category', 'Details'], rows: [
        ['Programme Name', 'Debating and MUN Excellence Programme'],
        ['Target Students', 'Year 7 – Year 9'],
        ['Schedule', 'Wednesday 4:00–5:30 pm'],
        ['Class Format', 'Small group (8 students)'],
        ['Curriculum Highlights', 'Debate Skills (Medium Level)']
      ] } }
    ],
    zh: [
      { h: '课程简介', p: '面向立志参赛的公开演讲新手学员的课程。' },
      { h: '课程目标', list: [
        '建立公开演讲与展示的自信心',
        '培养逻辑思维与结构化论证能力',
        '引入辩论技巧与批判性推理',
        '为公开演讲、辩论与 MUN 竞赛做好准备'
      ] },
      { h: '学习成果', list: [
        '在观众面前自信、清晰地表达',
        '呈现结构化的论点与观点',
        '参与辩论与讨论',
        '展现参加入门级竞赛的成熟度',
        '为辩论 / MUN / 领导力方向铺就清晰路径'
      ] },
      { h: '项目概览', table: { head: ['项目', '内容'], rows: [
        ['项目名称', '辩论与模拟联合国卓越课程'],
        ['适合年级', 'Y7–Y9'],
        ['上课时间', '周三 16:00–17:30'],
        ['班级形式', '小班教学（8 人）'],
        ['课程亮点', '辩论技巧（中级）']
      ] } }
    ],
    th: [
      { h: 'เกี่ยวกับหลักสูตรนี้', p: 'หลักสูตรสำหรับผู้พูดในที่สาธารณะมือใหม่ที่มุ่งเข้าร่วมการแข่งขัน' },
      { h: 'วัตถุประสงค์ของหลักสูตร', list: [
        'สร้างความมั่นใจในการพูดในที่สาธารณะและการนำเสนอ',
        'พัฒนาการคิดเชิงตรรกะและทักษะการโต้แย้งอย่างมีโครงสร้าง',
        'แนะนำเทคนิคการโต้วาทีและการใช้เหตุผลเชิงวิพากษ์',
        'เตรียมนักเรียนสำหรับการแข่งขันพูดในที่สาธารณะ โต้วาที และ MUN'
      ] },
      { h: 'ผลการเรียนรู้', list: [
        'พูดอย่างมั่นใจและชัดเจนต่อหน้าผู้ฟัง',
        'นำเสนอข้อโต้แย้งและความคิดเห็นอย่างมีโครงสร้าง',
        'เข้าร่วมการโต้วาทีและการอภิปราย',
        'แสดงความพร้อมสำหรับการแข่งขันระดับเริ่มต้น',
        'มีเส้นทางที่ชัดเจนสู่ทิศทางโต้วาที / MUN / ภาวะผู้นำ'
      ] },
      { h: 'ภาพรวมโปรแกรม', table: { head: ['หมวดหมู่', 'รายละเอียด'], rows: [
        ['ชื่อโปรแกรม', 'หลักสูตรโต้วาทีและสหประชาชาติจำลองสู่ความเป็นเลิศ'],
        ['กลุ่มเป้าหมาย', 'ปี 7 – ปี 9'],
        ['ตารางเรียน', 'พุธ 16:00–17:30'],
        ['รูปแบบชั้นเรียน', 'กลุ่มย่อย (8 คน)'],
        ['จุดเด่นของหลักสูตร', 'ทักษะการโต้วาที (ระดับกลาง)']
      ] } }
    ]
  },

  /* ========== Introduction to MUN / Competitive MUN（十月营）
   * Introduction to MUN 保留简短公告；Competitive MUN 使用 2026 年 9 月课程资料的完整内容。 ========== */
  'speaking-mun-camp': {
    bare: true,
    en: [
      { note: 'This MUN Camp will be led by Mr John in partnership with LIPSO during the October break. More details will be announced soon!' }
    ],
    zh: [
      { note: '本次 MUN 集训营将由 Mr John 携手 LIPSO 于十月假期举办，具体详情将稍后公布！' }
    ],
    th: [
      { note: 'ค่าย MUN นี้จะนำโดยคุณครู John ร่วมกับ LIPSO ในช่วงปิดเทอมเดือนตุลาคม รายละเอียดเพิ่มเติมจะประกาศให้ทราบเร็ว ๆ นี้!' }
    ]
  },

  /* ========== Competitive MUN 2026 October Camp（完整课程资料） ========== */
  'speaking-mun-comp-2026': {
    en: [
      { h: 'About This Camp', p: 'Competitive Model United Nations (MUN) October Break 3-Day Camp 2026 runs from 14–16 October 2026 at the LANNA Innovation Centre. It is led by LANNA Public Speaking Coordinator Mr John Watson with students from the Lanna International Public Speaking Organization (LIPSO), with school staff supervising the camp.' },
      { h: 'Who Should Attend', p: 'The camp is for students in Years 4–9. Students will be separated into Key Stage 2 and Key Stage 3 learning groups. No previous MUN experience is needed; beginners are very welcome.' },
      { h: 'Camp Purpose', p: 'Through practical activities, simulations and teamwork, students will develop public speaking, debating, research, negotiation and diplomatic communication skills. They will learn about international issues and how the United Nations works, and prepare for future events such as Chiang Mai Model United Nations (CMMUN), LANNA MUN and Young Leaders’ MUN.' },
      { h: 'Camp Details', table: { head: ['Category', 'Details'], rows: [
        ['Dates', '14–16 October 2026 (Wednesday–Friday)'],
        ['Daily time', '9:00 am–3:00 pm'],
        ['Location', 'LANNA Innovation Centre (new building)'],
        ['Instruction', '15 hours across three days, plus daily breaks and lunch'],
        ['Fee', '12,000 THB per student'],
        ['Fee includes', 'Instruction, all materials, snacks and lunch, a camp T-shirt, digital photo album and mementos'],
        ['Community contribution', '50% of all income is donated to LIPSO to support its activities throughout the year']
      ] } },
      { h: 'Daily Programme', p: 'Day 1 — Wednesday, 14 October: Learn how MUN works, new vocabulary, basic strategy, collaboration and confident public speaking. Afternoon committee simulation: World Health Organization (WHO).\nDay 2 — Thursday, 15 October: Role-play as diplomats, practise negotiation strategies, plan speeches and develop active listening. Afternoon committee simulation: Economic and Social Council (ECOSOC).\nDay 3 — Friday, 16 October: Take part in a full MUN day that mirrors a real conference, with prepared and impromptu speeches, problem-solving, compromise and persuasive speaking. Afternoon General Assembly: United Nations General Assembly (UNGA).' },
      { h: 'What Students Should Bring', list: ['A laptop computer or Wi-Fi-ready tablet', 'A pencil case', 'A refillable water bottle', 'Mobile phones are permitted for communication with parents'] },
      { h: 'Clothing and Media', p: 'Students may wear free dress and choose comfortable clothing and footwear. Students who get cold easily are encouraged to bring a hoodie. Photos and videos will be taken each day and shared with students and parents at the end of each day.' },
      { h: 'Snacks and Lunch', table: { head: ['Date', 'Snack', 'Lunch'], rows: [
        ['Wednesday, 14 October', 'Pastries from Nana Bakery', 'Bento boxes from Dragon Izakaya'],
        ['Thursday, 15 October', 'Doughnuts from Dunkin’ Donuts', 'Pizza from The Duke’s'],
        ['Friday, 16 October', 'Boba drinks from HOP Cafe', 'Noodles from C-Fa Cafe']
      ] } },
      { h: 'T-Shirt and Medical Information', p: 'Every student receives a camp T-shirt as a memento; please provide the student’s shirt size. A school nurse will be on call nearby, and supervising teachers are certified in first aid, CPR and AED use. Please tell the school in advance if a student takes daily medication.' },
      { h: 'Parent Observation', p: 'Parents should generally drop off and collect students at the start and end of each day. Days 1 and 2 are not suitable for parent observation. On the afternoon of Day 3, Friday 16 October, parents are welcome to observe the General Assembly after lunch on the third floor of the Innovation Centre.' },
      { h: 'Registration', p: 'There is no limit on the number of participating students. Registration opens on Sunday 27 September 2026 and closes on Sunday 11 October 2026.' }
    ],
    zh: [
      { h: '课程简介', p: '竞技 Model United Nations（MUN）2026 年十月假期 3 日集训营将于 2026 年 10 月 14–16 日在 LANNA Innovation Centre 举行。活动由 LANNA Public Speaking Coordinator Mr John Watson 主讲，Lanna International Public Speaking Organization（LIPSO）的学生共同参与，并由学校工作人员监督与协助。' },
      { h: '适合对象', p: '面向 Year 4–Year 9 学生，分为 Key Stage 2 和 Key Stage 3 两个学习小组。无需任何 MUN 经验，非常欢迎初学者参加。' },
      { h: '课程目标', p: '通过实践活动、模拟会议和团队合作，学生将培养公开演讲、辩论、研究、谈判和外交沟通能力，了解国际议题与联合国的运作方式，并为 Chiang Mai Model United Nations（CMMUN）、LANNA MUN 和 Young Leaders’ MUN 等未来活动做好准备。' },
      { h: '课程信息', table: { head: ['项目', '内容'], rows: [
        ['日期', '2026 年 10 月 14–16 日（周三至周五）'],
        ['时间', '每天 09:00–15:00'],
        ['地点', 'LANNA Innovation Centre（新大楼）'],
        ['教学安排', '三天共 15 小时教学与实践，每天另有休息和午餐时间'],
        ['费用', '每位学生 12,000 泰铢'],
        ['费用包含', '教学与实践、全部学习材料、点心和午餐、营服 T 恤、电子照片集及活动纪念品'],
        ['社区支持', '全部收入的 50% 将捐给 LIPSO，用于支持其全年活动']
      ] } },
      { h: '每日安排', p: '第 1 天（10 月 14 日，周三）：学习 MUN 的运作方式、新词汇、基本策略、合作能力和自信的公开演讲；下午进行世界卫生组织（WHO）委员会模拟会议。\n第 2 天（10 月 15 日，周四）：学习扮演外交官、谈判策略、演讲规划和积极倾听；下午进行经济及社会理事会（ECOSOC）委员会模拟会议。\n第 3 天（10 月 16 日，周五）：进行还原真实会议形式的完整 MUN 活动，练习准备好的演讲和即兴演讲、解决问题、协商妥协及说服性表达；下午进行联合国大会（UNGA）模拟会议。' },
      { h: '学生需要携带', list: ['笔记本电脑或可以连接 Wi-Fi 的平板电脑', '文具盒', '可重复装水的水瓶', '允许携带手机，以便与家长联系'] },
      { h: '穿着与影像记录', p: '学生可以穿 Free Dress，自行选择舒适的服装和鞋子。怕冷的学生建议携带连帽衫。活动每天都会拍摄照片和视频，并在当天结束时分享给学生和家长。' },
      { h: '点心及午餐', table: { head: ['日期', '点心', '午餐'], rows: [
        ['10 月 14 日，周三', 'Nana Bakery 的烘焙点心', 'Dragon Izakaya 的便当'],
        ['10 月 15 日，周四', 'Dunkin’ Donuts 的甜甜圈', 'The Duke’s 的披萨'],
        ['10 月 16 日，周五', 'HOP Cafe 的珍珠饮料', 'C-Fa Cafe 的面食']
      ] } },
      { h: '营服与医疗信息', p: '每位学生都会收到一件营队 T 恤作为纪念，请提前告知所需尺码。学校护士将在附近待命，负责老师均接受过急救、CPR 及 AED 使用培训并持有相关认证。如学生每天需要服药，请提前告知学校。' },
      { h: '家长观摩', p: '一般情况下，请家长在每天活动开始时送学生到校，并在活动结束后接学生回家。第 1 天和第 2 天不适合家长现场观摩。第 3 天（10 月 16 日，周五）午餐后，欢迎家长到 Innovation Centre 三楼观摩 General Assembly 活动。' },
      { h: '报名', p: '参加人数不设上限。报名开始时间为 2026 年 9 月 27 日（周日），截止时间为 2026 年 10 月 11 日（周日）。' }
    ],
    th: [
      { h: 'เกี่ยวกับค่ายนี้', p: 'ค่าย Competitive Model United Nations (MUN) 3 วันช่วงปิดเทอมเดือนตุลาคม 2026 จัดขึ้นระหว่างวันที่ 14–16 ตุลาคม 2026 ณ LANNA Innovation Centre โดยมี Mr John Watson ผู้ประสานงานด้าน Public Speaking ของ LANNA เป็นผู้นำกิจกรรม ร่วมกับนักเรียนจาก Lanna International Public Speaking Organization (LIPSO) และมีบุคลากรของโรงเรียนคอยดูแล' },
      { h: 'ผู้เข้าร่วม', p: 'สำหรับนักเรียน Year 4–Year 9 แบ่งเป็นกลุ่ม Key Stage 2 และ Key Stage 3 ไม่จำเป็นต้องมีประสบการณ์ MUN มาก่อน และยินดีต้อนรับผู้เริ่มต้น' },
      { h: 'จุดประสงค์ของค่าย', p: 'ผ่านกิจกรรมเชิงปฏิบัติ การจำลองสถานการณ์ และการทำงานเป็นทีม นักเรียนจะพัฒนาทักษะการพูดในที่สาธารณะ การโต้วาที การค้นคว้า การเจรจาต่อรอง และการสื่อสารเชิงการทูต เรียนรู้ประเด็นระหว่างประเทศและการทำงานขององค์การสหประชาชาติ และเตรียมพร้อมสำหรับกิจกรรมในอนาคต เช่น Chiang Mai Model United Nations (CMMUN), LANNA MUN และ Young Leaders’ MUN' },
      { h: 'รายละเอียดค่าย', table: { head: ['หัวข้อ', 'รายละเอียด'], rows: [
        ['วันที่', '14–16 ตุลาคม 2026 (วันพุธ–วันศุกร์)'],
        ['เวลา', 'ทุกวัน 09:00–15:00 น.'],
        ['สถานที่', 'LANNA Innovation Centre (อาคารใหม่)'],
        ['การเรียนการสอน', 'รวม 15 ชั่วโมงตลอดสามวัน พร้อมเวลาพักและอาหารกลางวันในแต่ละวัน'],
        ['ค่าใช้จ่าย', '12,000 บาทต่อนักเรียน 1 คน'],
        ['รวมในค่าใช้จ่าย', 'การเรียนการสอน อุปกรณ์ อาหารว่างและอาหารกลางวัน เสื้อยืด อัลบั้มภาพดิจิทัล และของที่ระลึก'],
        ['การสนับสนุนชุมชน', '50% ของรายได้ทั้งหมดมอบให้ LIPSO เพื่อสนับสนุนกิจกรรมตลอดปี']
      ] } },
      { h: 'กำหนดการรายวัน', p: 'วันที่ 1 (วันพุธที่ 14 ตุลาคม): เรียนรู้การทำงานของ MUN คำศัพท์ใหม่ กลยุทธ์พื้นฐาน การทำงานร่วมกัน และการพูดในที่สาธารณะอย่างมั่นใจ ช่วงบ่ายจำลองการประชุมคณะกรรมการ World Health Organization (WHO)\nวันที่ 2 (วันพฤหัสบดีที่ 15 ตุลาคม): ฝึกสวมบทบาทเป็นนักการทูต กลยุทธ์การเจรจา การวางแผนสุนทรพจน์ และการฟังอย่างตั้งใจ ช่วงบ่ายจำลองการประชุม Economic and Social Council (ECOSOC)\nวันที่ 3 (วันศุกร์ที่ 16 ตุลาคม): กิจกรรม MUN เต็มวันเสมือนการประชุมจริง ฝึกสุนทรพจน์ที่เตรียมไว้และสุนทรพจน์ฉับพลัน การแก้ปัญหา การประนีประนอม และการพูดโน้มน้าวใจ ช่วงบ่ายจำลองการประชุม General Assembly (UNGA)' },
      { h: 'สิ่งที่ควรนำมา', list: ['คอมพิวเตอร์โน้ตบุ๊กหรือแท็บเล็ตที่เชื่อมต่อ Wi-Fi ได้', 'กล่องดินสอและเครื่องเขียน', 'ขวดน้ำแบบเติมได้', 'อนุญาตให้นำโทรศัพท์มือถือมาได้เพื่อสื่อสารกับผู้ปกครอง'] },
      { h: 'การแต่งกายและการบันทึกภาพ', p: 'นักเรียนสามารถแต่งกายแบบ Free Dress และเลือกเสื้อผ้าและรองเท้าที่สบายได้ หากรู้สึกหนาวง่าย แนะนำให้นำเสื้อฮู้ดมาด้วย จะมีการถ่ายภาพและวิดีโอทุกวัน และแบ่งปันให้ผู้ปกครองและนักเรียนเมื่อจบกิจกรรมแต่ละวัน' },
      { h: 'อาหารว่างและอาหารกลางวัน', table: { head: ['วันที่', 'อาหารว่าง', 'อาหารกลางวัน'], rows: [
        ['วันพุธที่ 14 ตุลาคม', 'ขนมอบจาก Nana Bakery', 'เบนโตะจาก Dragon Izakaya'],
        ['วันพฤหัสบดีที่ 15 ตุลาคม', 'โดนัทจาก Dunkin’ Donuts', 'พิซซ่าจาก The Duke’s'],
        ['วันศุกร์ที่ 16 ตุลาคม', 'เครื่องดื่มโบบาจาก HOP Cafe', 'ก๋วยเตี๋ยวจาก C-Fa Cafe']
      ] } },
      { h: 'เสื้อยืดและข้อมูลทางการแพทย์', p: 'นักเรียนทุกคนจะได้รับเสื้อยืดเป็นของที่ระลึก กรุณาแจ้งไซซ์เสื้อ พยาบาลของโรงเรียนจะพร้อมให้ความช่วยเหลือในบริเวณใกล้เคียง และครูผู้ดูแลได้รับการอบรมด้านการปฐมพยาบาล CPR และ AED หากนักเรียนต้องรับประทานยาเป็นประจำ กรุณาแจ้งโรงเรียนล่วงหน้า' },
      { h: 'การเข้าชมของผู้ปกครอง', p: 'โดยทั่วไป ขอให้ผู้ปกครองมาส่งและรับนักเรียนในช่วงเริ่มต้นและสิ้นสุดกิจกรรมแต่ละวัน กิจกรรมวันที่ 1 และ 2 ไม่เหมาะสำหรับการเข้าชม วันที่ 3 (วันศุกร์ที่ 16 ตุลาคม) หลังอาหารกลางวัน ผู้ปกครองสามารถเข้าชมกิจกรรม General Assembly ได้ที่ชั้น 3 ของ Innovation Centre' },
      { h: 'การลงทะเบียน', p: 'ไม่จำกัดจำนวนผู้เข้าร่วม เปิดรับลงทะเบียนวันอาทิตย์ที่ 27 กันยายน 2026 และปิดรับลงทะเบียนวันอาทิตย์ที่ 11 ตุลาคม 2026' }
    ]
  }
});

/* =========================================================
 * 课程 ID → Curriculum Overview 大纲集 映射
 * tutoring：11 门一对一辅导课共用
 * bbo / usabo / econ-biz：各自专属大纲（2026-08-07 起）
 * speaking：4 门演讲/辩论/MUN 课共用（2026-08-07 嵌入）
 * comp-prep：5 门数学竞赛课共用（2026-08-07 起启用）
 * ========================================================= */
const COURSE_OVERVIEW_MAP = {
  'eng-rw': 'tutoring',
  'math-tut': 'tutoring',
  'sci-tut': 'tutoring',
  'chem-tut': 'tutoring',
  'bio-tut': 'tutoring',
  'phys-tut': 'tutoring',
  'cs-tut': 'tutoring',
  'hist-tut': 'tutoring',
  'geo-tut': 'tutoring',
  'soc-tut': 'tutoring',
  'psy-tut': 'tutoring',
  'bbo': 'bbo',
  'usabo': 'usabo',
  'econ-biz': 'econ-biz',
  'nsl': 'nsl',
  'jpc': 'jpc',
  'c3l6': 'c3l6',
  'icq': 'icq',
  'future-doctor': 'future-doctor',
  'medical-pathway': 'medical-pathway',
  'mentorship': 'mentorship',
  // 数学竞赛 5 门（共用 comp-prep 总纲）
  'amc1012': 'comp-prep-amc1012',
  'amc8': 'comp-prep-amc8',
  'mathleague': 'comp-prep-mathleague',
  'imc': 'comp-prep-imc',
  'jmc': 'comp-prep-jmc',
  // 演讲/辩论/MUN 4 门（Debating 两门各自专属大纲，Competitive MUN 使用完整十月营资料）
  'debate-intro': 'speaking-debate-intro',
  'debate-comp': 'speaking-debate-comp',
  'mun-intro': 'speaking-mun-camp',
  'mun-comp': 'speaking-mun-comp-2026'
};
