/* =========================================================
 * All A's 课程数据 · Part 2 —— 学科竞赛课程（追加到 COURSES）
 * ========================================================= */

COURSES.push(
  /* ============ 数学竞赛 ============ */
  {
    id: 'amc1012', cat: 'competition', subject: 'math',
    cover: 'assets/img/covers/amc1012-cover.jpg',
    imgs: [, 
      'assets/img/class/math-c1.jpg', 'assets/img/class/math-c2.jpg', 'assets/img/class/math-c3.jpg',
      'assets/img/class/math-c4.jpg', 'assets/img/class/math-c5.jpg', 'assets/img/class/math-c6.jpg'
    ],
    name: { zh: 'AMC 10 / 12 美国数学竞赛', en: 'AMC 10 / 12', th: 'AMC 10 / 12' },
    grades: { zh: 'Y9 及以上', en: 'Y9 and above', th: 'Y9 ขึ้นไป' }, gmin: 9, gmax: 13,
    organizer: { zh: '美国数学协会（MAA）· 美国', en: 'Mathematical Association of America · USA', th: 'สมาคมคณิตศาสตร์แห่งอเมริกา (MAA) · สหรัฐอเมริกา' },
    format: { zh: '小班竞赛培训', en: 'Competition training class', th: 'ชั้นเรียนฝึกซ้อมการแข่งขัน' },
    startMonth: '2026-08',
    start: { zh: '2026年8月24日 – 11月2日（10周）', en: '24 Aug – 2 Nov 2026 (10 weeks)', th: '24 ส.ค. – 2 พ.ย. 2026 (10 สัปดาห์)' },
    duration: { zh: '10 周', en: '10 weeks', th: '10 สัปดาห์' },
    hours: { zh: '10 小时', en: '10 hours', th: '10 ชั่วโมง' },
    schedule: { zh: '每周一 15:45–16:45', en: 'Monday 3:45–4:45 pm', th: 'วันจันทร์ 15:45–16:45' },
    mentor: 'Mr Suresh & other experienced tutor',
    mentor: 'Mr Suresh & other experienced tutor',
    price: 9000,
    summary: {
      zh: '25 道选择题、75 分钟的全球知名数学竞赛，高分可晋级 AIME，助力 STEM 方向大学申请。',
      en: 'A globally recognised 25-question, 75-minute contest; top scorers qualify for the AIME, strengthening STEM university applications.',
      th: 'การแข่งขันที่ได้รับการยอมรับทั่วโลก 25 ข้อ 75 นาที ผู้ได้คะแนนสูงผ่านเข้ารอบ AIME ช่วยเสริมใบสมัครมหาวิทยาลัยสาย STEM'
    },
            desc: {
      zh: '主办方：美国数学协会（Mathematical Association of America, MAA）· 美国\n\n推荐年龄 / 参赛资格\nAMC 10：推荐年龄 13–16 岁（Y8–Y10）；官方资格：10 年级及以下，且比赛当日未满 17.5 岁。\nAMC 12：推荐年龄 15–18 岁（Y10–Y13）；官方资格：12 年级及以下，且比赛当日未满 19.5 岁。\n\n关于本竞赛\nAMC 10 与 AMC 12 是国际公认的数学竞赛，考察数学创造力、推理能力与高阶问题解决能力。\n\n竞赛形式\n• 25 道选择题\n• 75 分钟\n• 不允许使用计算器\n\n考察主题\n• 代数\n• 几何\n• 数论\n• 计数与概率\n• 函数\n• 高阶数学推理\n\n竞赛时间\n• AMC 10A / AMC 12A：每年 11 月\n• AMC 10B / AMC 12B：每年 11 月',
      en: 'Organiser: Mathematical Association of America (MAA), USA\n\nRecommended Age / Eligibility\nAMC 10\nRecommended: Ages 13–16 (Y8–Y10)\nOfficial eligibility: Grade 10 or below and under 17.5 years old.\nAMC 12\nRecommended: Ages 15–18 (Y10–Y13)\nOfficial eligibility: Grade 12 or below and under 19.5 years old.\n\nAbout the Competition\nAMC 10 and AMC 12 are internationally recognised mathematics competitions that assess mathematical creativity, reasoning and advanced problem-solving ability.\n\nCompetition Format\n• 25 multiple-choice questions\n• 75 minutes\n• No calculator permitted\n\nTopics Covered\n• Algebra\n• Geometry\n• Number Theory\n• Counting & Probability\n• Functions\n• Advanced Mathematical Reasoning\n\nCompetition Dates\n• AMC 10A / AMC 12A: November every year\n• AMC 10B / AMC 12B: November every year',
      th: 'ผู้จัด: Mathematical Association of America (MAA), สหรัฐอเมริกา\n\nอายุที่แนะนำ / คุณสมบัติ\nAMC 10: แนะนำอายุ 13–16 ปี (Y8–Y10); คุณสมบัติทางการ: เกรด 10 หรือต่ำกว่า และอายุต่ำกว่า 17.5 ปีในวันแข่งขัน\nAMC 12: แนะนำอายุ 15–18 ปี (Y10–Y13); คุณสมบัติทางการ: เกรด 12 หรือต่ำกว่า และอายุต่ำกว่า 19.5 ปีในวันแข่งขัน\n\nเกี่ยวกับการแข่งขัน\nAMC 10 และ AMC 12 เป็นการแข่งขันคณิตศาสตร์ที่ได้รับการยอมรับในระดับนานาชาติ วัดความคิดสร้างสรรค์ทางคณิตศาสตร์ การให้เหตุผล และความสามารถในการแก้ปัญหาขั้นสูง\n\nรูปแบบการแข่งขัน\n• คำถามแบบเลือกตอบ 25 ข้อ\n• 75 นาที\n• ไม่อนุญาตให้ใช้เครื่องคิดเลข\n\nหัวข้อที่ครอบคลุม\n• พีชคณิต\n• เรขาคณิต\n• ทฤษฎีจำนวน\n• การนับและความน่าจะเป็น\n• ฟังก์ชัน\n• การให้เหตุผลทางคณิตศาสตร์ขั้นสูง\n\nวันแข่งขัน\n• AMC 10A / AMC 12A: ทุกเดือนพฤศจิกายน\n• AMC 10B / AMC 12B: ทุกเดือนพฤศจิกายน'
    },
    outcomes: {
      zh: ['掌握 AMC 四大板块题型与解题策略', '限时仿真模考训练', '目标晋级 AIME'],
      en: ['Mastery of AMC topic areas and problem-solving strategies', 'Timed mock exams with real past papers', 'Targeting AIME qualification'],
      th: ['เชี่ยวชาญหัวข้อและกลยุทธ์ของ AMC', 'สอบจำลองจับเวลาด้วยข้อสอบจริง', 'มุ่งสู่การผ่านเข้ารอบ AIME']
    }
  },
  {
    id: 'amc8', cat: 'competition', subject: 'math',
    cover: 'assets/img/covers/amc8-cover.jpg',
    imgs: [, 
      'assets/img/class/math-c1.jpg', 'assets/img/class/math-c2.jpg', 'assets/img/class/math-c3.jpg',
      'assets/img/class/math-c4.jpg', 'assets/img/class/math-c5.jpg', 'assets/img/class/math-c6.jpg'
    ],
    name: { zh: 'AMC 8 美国数学竞赛', en: 'AMC 8', th: 'AMC 8' },
    grades: 'Y6–Y9', gmin: 6, gmax: 9,
    organizer: { zh: '美国数学协会（MAA）· 美国', en: 'Mathematical Association of America · USA', th: 'สมาคมคณิตศาสตร์แห่งอเมริกา (MAA) · สหรัฐอเมริกา' },
    format: { zh: '小班竞赛培训', en: 'Competition training class', th: 'ชั้นเรียนฝึกซ้อมการแข่งขัน' },
    startMonth: '2026-09',
    start: { zh: '2026年9月3日 – 2027年1月6日（15周）', en: '3 Sep 2026 – 6 Jan 2027 (15 weeks)', th: '3 ก.ย. 2026 – 6 ม.ค. 2027 (15 สัปดาห์)' },
    duration: { zh: '15 周', en: '15 weeks', th: '15 สัปดาห์' },
    hours: { zh: '15 小时', en: '15 hours', th: '15 ชั่วโมง' },
    schedule: { zh: '每周一次，每次 1 小时', en: 'Weekly, 1 hour per session', th: 'สัปดาห์ละ 1 ครั้ง ครั้งละ 1 ชั่วโมง' },
    mentor: 'Mr Suresh & other experienced tutor',
    price: 13500,
    summary: {
      zh: '面向 Y6–Y9 的入门竞赛，通过挑战性问题培养数学兴趣与竞赛思维，次年 1 月下旬开赛。',
      en: 'An entry-level contest for Y6–Y9 that sparks mathematical curiosity through challenging problems; held in late January.',
      th: 'การแข่งขันระดับเริ่มต้นสำหรับ Y6–Y9 จุดประกายความสนใจคณิตศาสตร์ผ่านโจทย์ท้าทาย จัดช่วงปลายเดือนมกราคม'
    },
            desc: {
      zh: '主办方：美国数学协会（Mathematical Association of America, MAA）· 美国\n\n推荐年龄 / 参赛资格\n推荐年龄：10–14 岁（Y5–Y8）\n官方资格：8 年级及以下，且比赛当日未满 15.5 岁。\n\n关于本竞赛\nAMC 8 是全球最负盛名的中学生数学竞赛之一，旨在通过趣味与挑战性问题培养数学推理、逻辑思维与问题解决能力。\n\n竞赛形式\n• 25 道选择题\n• 40 分钟\n• 不允许使用计算器\n\n考察主题\n• 算术\n• 代数\n• 几何\n• 数论\n• 计数与概率\n• 逻辑推理\n\n竞赛时间：每年 1 月',
      en: 'Organiser: Mathematical Association of America (MAA), USA\n\nRecommended Age / Eligibility\nRecommended: Ages 10–14 (Y5–Y8)\nOfficial eligibility: Grade 8 or below and under 15.5 years old on the day of the competition.\n\nAbout the Competition\nAMC 8 is one of the world’s most prestigious mathematics competitions for middle school students, designed to develop mathematical reasoning, logical thinking and problem-solving skills.\n\nCompetition Format\n• 25 multiple-choice questions\n• 40 minutes\n• No calculator permitted\n\nTopics Covered\n• Arithmetic\n• Algebra\n• Geometry\n• Number Theory\n• Counting & Probability\n• Logical Reasoning\n\nCompetition Date: January every year',
      th: 'ผู้จัด: Mathematical Association of America (MAA), สหรัฐอเมริกา\n\nอายุที่แนะนำ / คุณสมบัติ\nแนะนำอายุ: 10–14 ปี (Y5–Y8)\nคุณสมบัติทางการ: เกรด 8 หรือต่ำกว่า และอายุต่ำกว่า 15.5 ปีในวันแข่งขัน\n\nเกี่ยวกับการแข่งขัน\nAMC 8 เป็นหนึ่งในการแข่งขันคณิตศาสตร์ที่มีชื่อเสียงที่สุดสำหรับนักเรียนมัธยมต้น ออกแบบมาเพื่อพัฒนาการให้เหตุผลทางคณิตศาสตร์ การคิดเชิงตรรกะ และทักษะการแก้ปัญหา\n\nรูปแบบการแข่งขัน\n• คำถามแบบเลือกตอบ 25 ข้อ\n• 40 นาที\n• ไม่อนุญาตให้ใช้เครื่องคิดเลข\n\nหัวข้อที่ครอบคลุม\n• เลขคณิต\n• พีชคณิต\n• เรขาคณิต\n• ทฤษฎีจำนวน\n• การนับและความน่าจะเป็น\n• การให้เหตุผลเชิงตรรกะ\n\nวันแข่งขัน: ทุกเดือนมกราคม'
    },
    outcomes: {
      zh: ['激发数学兴趣与竞赛思维', '系统掌握 AMC 8 核心题型', '为 AMC 10/12 打下基础'],
      en: ['Stimulated mathematical interest and competition mindset', 'Systematic coverage of AMC 8 problem types', 'A strong foundation for AMC 10/12'],
      th: ['กระตุ้นความสนใจและแนวคิดการแข่งขันคณิตศาสตร์', 'ครอบคลุมแบบโจทย์หลักของ AMC 8 อย่างเป็นระบบ', 'รากฐานที่แข็งแกร่งสู่ AMC 10/12']
    }
  },
  {
    id: 'mathleague', cat: 'competition', subject: 'math',
    cover: 'assets/img/covers/mathleague-cover.jpg',
    imgs: [ 
      'assets/img/class/math-award1.jpg', 'assets/img/class/math-award2.jpg',
      'assets/img/class/math-c3.jpg', 'assets/img/class/math-c4.jpg',
      'assets/img/class/math-c5.jpg', 'assets/img/class/math-c6.jpg'
    ],
    name: { zh: 'Math League 美国数学联盟', en: 'Math League', th: 'Math League' },
    grades: 'Y2–Y10', gmin: 2, gmax: 10,
    organizer: { zh: 'Math League · 美国', en: 'Math League · USA', th: 'Math League · สหรัฐอเมริกา' },
    format: { zh: '小班竞赛培训（按年级分班）', en: 'Competition training (grade-level classes)', th: 'ชั้นเรียนฝึกซ้อมการแข่งขัน (แยกตามระดับชั้น)' },
    startMonth: '2026-08',
    start: { zh: '2026年8月29日 – 12月5日（12周）', en: '29 Aug – 5 Dec 2026 (12 weeks)', th: '29 ส.ค. – 5 ธ.ค. 2026 (12 สัปดาห์)' },
    duration: { zh: '12 周', en: '12 weeks', th: '12 สัปดาห์' },
    hours: { zh: '24 小时', en: '24 hours', th: '24 ชั่วโมง' },
    schedule: { zh: '每周六（各年级时段见下表）', en: 'Saturdays (grade-level times below)', th: 'วันเสาร์ (ตามตารางระดับชั้นด้านล่าง)' },
    mentor: 'Mr Suresh & other experienced tutor',
    price: 21600,
    gradeRows: [
      { grade: 'Y2–Y3', info: 'Saturday 10:00–12:00' },
      { grade: 'Y4–Y5', info: 'Saturday 10:00–12:00' },
      { grade: 'Y6–Y7', info: 'Saturday 13:00–15:00' },
      { grade: 'Y8–Y10', info: 'Saturday 13:00–15:00' }
    ],
    summary: {
      zh: '美国中小学数学竞赛，Y2–Y10 按年级参赛，以挑战性问题培养高阶思维，次年 1–2 月开赛。',
      en: 'A US contest for Y2–Y10 with grade-level papers that build higher-order thinking; competitions run January–February.',
      th: 'การแข่งขันคณิตศาสตร์ของสหรัฐอเมริกาสำหรับ Y2–Y10 แบ่งตามระดับชั้น พัฒนาการคิดขั้นสูงด้วยโจทย์ท้าทาย จัดในเดือนมกราคม–กุมภาพันธ์'
    },
            desc: {
      zh: '我们的学生成绩（2025–2026）\n去年，超过 100 名兰纳学生参加了 Math League 竞赛，从初赛一路晋级半决赛与全球总决赛。\n我们为参加培训项目的学生所取得的成就感到自豪：\n• 超过 90% 的学生在初赛中获得奖项\n• 大量学生成功晋级半决赛与全球总决赛\n• 在整个竞赛中，学生们展现了出色的数学推理能力、问题解决能力与毅力\n这些成绩既反映了学生们的努力，也体现了竞赛培训项目结构化备赛的有效性。\n\n关于本竞赛\n我们很高兴与大家分享即将到来的 Math League 竞赛信息——这是一项源自美国、自 1977 年起举办的高含金量国际竞赛，面向小学至高中学生，帮助培养高阶问题解决与逻辑思维能力。\n\n为什么选择 Math League？\n• 初赛表现优异者将获得美国 Math League 官方证书\n• 获奖者名单将发布在 Math League 官方网站（www.mathleague.com）上\n• 泰国区域排名提供更多获奖机会\n• 决赛入围者有机会参加在美国举行的全球总决赛\n• 过去十年中，72% 的决赛入围者进入全球排名前 50 的大学\n\n竞赛信息（确切日期将在赛前公布）\n• 初赛：每年 12 月\n• 半决赛：每年 2 月\n• 总决赛与美国数学夏令营：每年 7 月（美国）',
      en: 'Our Students’ Achievements (2025–2026)\nLast year, over 100 Lanna students participated in the Math League Competition, from the Preliminary Round through to the Semi-finals and Global Finals.\nWe are proud of the achievements of the students who joined our training programmes:\n• Over 90% of our students received awards in the Preliminary Round.\n• A large number of students successfully advanced to the Semi-finals and Global Finals.\n• Throughout the competition, our students achieved excellent results, demonstrating strong mathematical reasoning, problem-solving skills, and perseverance.\nThese results reflect both our students’ dedication and the effectiveness of the structured preparation provided through the competition programme.\n\nAbout this Competition\nWe are excited to share more information about the upcoming Math League Competition, an academically valuable international contest originating in the U.S. since 1977. It is designed for students from elementary through high school and helps develop advanced problem-solving and logical thinking skills.\n\nWhy Math League?\n• Outstanding performers in the preliminary round will receive official U.S. Math League certificates.\n• Awardee names will be published on the official Math League website (www.mathleague.com).\n• Regional rankings for Thailand provide more award opportunities.\n• Finalists may qualify for the Global Final Round in the U.S.\n• Over the past decade, 72% of finalists have gone on to attend top 50 universities worldwide.\n\nCompetition Information (The exact date will be announced before the exam)\n• Preliminary Round: December every year\n• Semi-finals Round: February every year\n• Finals & Math Summer Tournament: July every year in United States',
      th: 'ความสำเร็จของนักเรียน (2025–2026)\nปีที่แล้ว นักเรียนลานนามากกว่า 100 คนเข้าร่วมการแข่งขัน Math League ตั้งแต่รอบคัดเลือกจนถึงรอบรองชนะเลิศและรอบชิงชนะเลิศระดับโลก\nเราภูมิใจในความสำเร็จของนักเรียนที่เข้าร่วมโปรแกรมฝึกซ้อมของเรา:\n• นักเรียนมากกว่า 90% ได้รับรางวัลในรอบคัดเลือก\n• นักเรียนจำนวนมากผ่านเข้ารอบรองชนะเลิศและรอบชิงชนะเลิศระดับโลก\n• ตลอดการแข่งขัน นักเรียนของเราสร้างผลงานที่ยอดเยี่ยม แสดงให้เห็นถึงการให้เหตุผลทางคณิตศาสตร์ที่แข็งแกร่ง ทักษะการแก้ปัญหา และความมุ่งมั่น\nผลลัพธ์เหล่านี้สะท้อนทั้งความทุ่มเทของนักเรียนและประสิทธิผลของการเตรียมความพร้อมอย่างเป็นระบบผ่านโปรแกรมการแข่งขัน\n\nเกี่ยวกับการแข่งขันครั้งนี้\nเรายินดีที่จะแบ่งปันข้อมูลเพิ่มเติมเกี่ยวกับการแข่งขัน Math League ที่กำลังจะมาถึง ซึ่งเป็นการแข่งขันระดับนานาชาติที่มีคุณค่าทางวิชาการ เริ่มต้นจากสหรัฐอเมริกาตั้งแต่ปี 1977 ออกแบบมาสำหรับนักเรียนระดับประถมจนถึงมัธยมปลาย และช่วยพัฒนาทักษะการแก้ปัญหาและการคิดเชิงตรรกะขั้นสูง\n\nทำไมต้อง Math League?\n• ผู้ทำผลงานยอดเยี่ยมในรอบคัดเลือกจะได้รับประกาศนียบัตรอย่างเป็นทางการของ U.S. Math League\n• ชื่อผู้ได้รับรางวัลจะถูกประกาศบนเว็บไซต์ทางการของ Math League (www.mathleague.com)\n• การจัดอันดับระดับภูมิภาคของประเทศไทยให้โอกาสได้รับรางวัลมากขึ้น\n• ผู้เข้ารอบสุดท้ายอาจมีสิทธิ์แข่งขันรอบชิงชนะเลิศระดับโลกที่สหรัฐอเมริกา\n• ในทศวรรษที่ผ่านมา 72% ของผู้เข้ารอบสุดท้ายได้เข้าศึกษาในมหาวิทยาลัยชั้นนำ 50 อันดับแรกของโลก\n\nข้อมูลการแข่งขัน (วันที่แน่นอนจะประกาศก่อนการสอบ)\n• รอบคัดเลือก: ทุกเดือนธันวาคม\n• รอบรองชนะเลิศ: ทุกเดือนกุมภาพันธ์\n• รอบชิงชนะเลิศและการแข่งขันคณิตศาสตร์ภาคฤดูร้อน: ทุกเดือนกรกฎาคมในสหรัฐอเมริกา'
    },
    outcomes: {
      zh: ['按年级分班精准训练', '培养高阶数学思维', '覆盖 Y2–Y10 全年龄段'],
      en: ['Grade-level classes for targeted training', 'Higher-order mathematical thinking', 'Full age coverage from Y2 to Y10'],
      th: ['ชั้นเรียนแยกระดับชั้นฝึกซ้อมตรงจุด', 'การคิดทางคณิตศาสตร์ขั้นสูง', 'ครอบคลุมตั้งแต่ Y2 ถึง Y10']
    }
  },
  {
    id: 'imc', cat: 'competition', subject: 'math',
    cover: 'assets/img/covers/imc-cover.jpg',
    imgs: [, 
      'assets/img/class/math-c1.jpg', 'assets/img/class/math-c2.jpg', 'assets/img/class/math-c3.jpg',
      'assets/img/class/math-c4.jpg', 'assets/img/class/math-c5.jpg', 'assets/img/class/math-c6.jpg'
    ],
    name: { zh: '国际数学竞赛（IMC）', en: 'International Mathematics Competition (IMC)', th: 'การแข่งขันคณิตศาสตร์นานาชาติ (IMC)' },
    grades: 'Y9–Y11', gmin: 9, gmax: 11,
    organizer: { zh: 'IMC 组委会 · 国际', en: 'IMC organising committee · International', th: 'คณะกรรมการ IMC · นานาชาติ' },
    format: { zh: '小班竞赛培训', en: 'Competition training class', th: 'ชั้นเรียนฝึกซ้อมการแข่งขัน' },
    startMonth: '2026-09',
    start: { zh: '2026年9月5日 – 12月5日（15周）', en: '5 Sep – 5 Dec 2026 (15 weeks)', th: '5 ก.ย. – 5 ธ.ค. 2026 (15 สัปดาห์)' },
    duration: { zh: '15 周', en: '15 weeks', th: '15 สัปดาห์' },
    hours: { zh: '15 小时', en: '15 hours', th: '15 ชั่วโมง' },
    schedule: { zh: '每周六 9:00–10:00', en: 'Saturday 9:00–10:00 am', th: 'วันเสาร์ 9:00–10:00' },
    mentor: 'Mr Suresh & other experienced tutor',
    price: 13500,
    summary: {
      zh: '面向 Y9–Y11 的国际性数学竞赛，强调创新解题与国际交流，次年 1 月开赛。',
      en: 'An international contest for Y9–Y11 emphasising innovative problem-solving; held in January.',
      th: 'การแข่งขันนานาชาติสำหรับ Y9–Y11 เน้นการแก้ปัญหาอย่างสร้างสรรค์ จัดในเดือนมกราคม'
    },
            desc: {
      zh: '主办方：英国数学基金会（United Kingdom Mathematics Trust, UKMT）\n\n推荐年龄 / 参赛资格\n推荐年龄：13–16 岁（Y9–Y11）\n官方资格：英国学制 9–11 年级。\n\n关于本竞赛\n中级数学挑战赛（IMC）通过富有挑战性的题目，培养数学推理、问题解决能力与创造性思维。\n\n竞赛形式\n• 25 道选择题\n• 60 分钟\n• 不允许使用计算器\n\n考察主题\n• 代数\n• 几何\n• 数论\n• 概率\n• 数列\n• 函数\n• 逻辑推理\n\n竞赛时间：每年 1 月下旬至 2 月初',
      en: 'Organiser: United Kingdom Mathematics Trust (UKMT)\n\nRecommended Age / Eligibility\nRecommended: Ages 13–16 (Y9/Y10/Y11)\nOfficial eligibility: School Years 9–11 (UK system).\n\nAbout the Competition\nThe Intermediate Mathematical Challenge develops mathematical reasoning, problem-solving ability and creative thinking through challenging questions.\n\nCompetition Format\n• 25 multiple-choice questions\n• 60 minutes\n• No calculator permitted\n\nTopics Covered\n• Algebra\n• Geometry\n• Number Theory\n• Probability\n• Sequences\n• Functions\n• Logical Reasoning\n\nCompetition Date: Late January – Early February every year',
      th: 'ผู้จัด: United Kingdom Mathematics Trust (UKMT)\n\nอายุที่แนะนำ / คุณสมบัติ\nแนะนำอายุ: 13–16 ปี (Y9–Y11)\nคุณสมบัติทางการ: ชั้นปีที่ 9–11 (ระบบสหราชอาณาจักร)\n\nเกี่ยวกับการแข่งขัน\nIntermediate Mathematical Challenge พัฒนาการให้เหตุผลทางคณิตศาสตร์ ความสามารถในการแก้ปัญหา และความคิดสร้างสรรค์ผ่านโจทย์ที่ท้าทาย\n\nรูปแบบการแข่งขัน\n• คำถามแบบเลือกตอบ 25 ข้อ\n• 60 นาที\n• ไม่อนุญาตให้ใช้เครื่องคิดเลข\n\nหัวข้อที่ครอบคลุม\n• พีชคณิต\n• เรขาคณิต\n• ทฤษฎีจำนวน\n• ความน่าจะเป็น\n• ลำดับ\n• ฟังก์ชัน\n• การให้เหตุผลเชิงตรรกะ\n\nวันแข่งขัน: ปลายเดือนมกราคม – ต้นเดือนกุมภาพันธ์ของทุกปี'
    },
    outcomes: {
      zh: ['国际竞赛题型系统训练', '创新解题思维', '周末小班授课'],
      en: ['Systematic training in international contest problems', 'Innovative problem-solving thinking', 'Weekend small-group classes'],
      th: ['ฝึกโจทย์การแข่งขันนานาชาติอย่างเป็นระบบ', 'การคิดแก้ปัญหาอย่างสร้างสรรค์', 'เรียนกลุ่มเล็กวันหยุดสุดสัปดาห์']
    }
  },
  {
    id: 'jmc', cat: 'competition', subject: 'math',
    cover: 'assets/img/covers/jmc-cover.jpg',
    imgs: [, 
      'assets/img/class/math-c1.jpg', 'assets/img/class/math-c2.jpg', 'assets/img/class/math-c3.jpg',
      'assets/img/class/math-c4.jpg', 'assets/img/class/math-c5.jpg', 'assets/img/class/math-c6.jpg'
    ],
    name: { zh: '英国少年数学挑战赛（JMC）', en: 'Junior Mathematical Challenge (JMC)', th: 'การท้าทายคณิตศาสตร์ระดับเยาวชน (JMC)' },
    grades: 'Y7–Y8', gmin: 7, gmax: 8,
    organizer: { zh: '英国数学基金会（UKMT）· 英国', en: 'UK Mathematics Trust (UKMT) · UK', th: 'UK Mathematics Trust (UKMT) · สหราชอาณาจักร' },
    format: { zh: '小班竞赛培训', en: 'Competition training class', th: 'ชั้นเรียนฝึกซ้อมการแข่งขัน' },
    startMonth: '2027-01',
    start: { zh: '2027年1月4日 – 4月5日（10周）', en: '4 Jan – 5 Apr 2027 (10 weeks)', th: '4 ม.ค. – 5 เม.ย. 2027 (10 สัปดาห์)' },
    duration: { zh: '10 周', en: '10 weeks', th: '10 สัปดาห์' },
    hours: { zh: '10 小时', en: '10 hours', th: '10 ชั่วโมง' },
    schedule: { zh: '每周一 15:45–16:45', en: 'Monday 3:45–4:45 pm', th: 'วันจันทร์ 15:45–16:45' },
    mentor: 'Mr Suresh & other experienced tutor',
    price: 9000,
    summary: {
      zh: 'UKMT 主办的少年数学挑战赛，Y7–Y8 参赛，鼓励逻辑推理，2027 年 4 月开赛。',
      en: 'The UKMT Junior Mathematical Challenge for Y7–Y8, encouraging logical reasoning; held in April 2027.',
      th: 'การท้าทายคณิตศาสตร์ระดับเยาวชนโดย UKMT สำหรับ Y7–Y8 ส่งเสริมการให้เหตุผลเชิงตรรกะ จัดในเดือนเมษายน 2027'
    },
            desc: {
      zh: '主办方：英国数学基金会（United Kingdom Mathematics Trust, UKMT）· 英国\n\n推荐年龄 / 参赛资格\n推荐年龄：11–13 岁（Y7–Y8）\n官方资格：英国学制 8 年级及以下。\n\n关于本竞赛\n少年数学挑战赛（JMC）是英国面向低年级中学生规模最大的数学竞赛，鼓励逻辑推理与创造性问题解决。\n\n竞赛形式\n• 25 道选择题\n• 60 分钟\n• 不允许使用计算器\n\n考察主题\n• 数\n• 代数\n• 几何\n• 分数与比\n• 概率\n• 逻辑思维\n• 问题解决\n\n竞赛时间：每年 5 月',
      en: 'Organiser: United Kingdom Mathematics Trust (UKMT)\n\nRecommended Age / Eligibility\nRecommended: Ages 11–13 (Y7–Y8)\nOfficial eligibility: School Year 8 or below (UK system).\n\nAbout the Competition\nThe Junior Mathematical Challenge is the UK’s largest mathematics competition for younger secondary students, encouraging logical reasoning and creative problem-solving.\n\nCompetition Format\n• 25 multiple-choice questions\n• 60 minutes\n• No calculator permitted\n\nTopics Covered\n• Number\n• Algebra\n• Geometry\n• Fractions & Ratios\n• Probability\n• Logical Thinking\n• Problem Solving\n\nCompetition Date: May every year',
      th: 'ผู้จัด: United Kingdom Mathematics Trust (UKMT)\n\nอายุที่แนะนำ / คุณสมบัติ\nแนะนำอายุ: 11–13 ปี (Y7–Y8)\nคุณสมบัติทางการ: ชั้นปีที่ 8 หรือต่ำกว่า (ระบบสหราชอาณาจักร)\n\nเกี่ยวกับการแข่งขัน\nJunior Mathematical Challenge เป็นการแข่งขันคณิตศาสตร์ที่ใหญ่ที่สุดในสหราชอาณาจักรสำหรับนักเรียนมัธยมต้น ส่งเสริมการให้เหตุผลเชิงตรรกะและการแก้ปัญหาอย่างสร้างสรรค์\n\nรูปแบบการแข่งขัน\n• คำถามแบบเลือกตอบ 25 ข้อ\n• 60 นาที\n• ไม่อนุญาตให้ใช้เครื่องคิดเลข\n\nหัวข้อที่ครอบคลุม\n• จำนวน\n• พีชคณิต\n• เรขาคณิต\n• เศษส่วนและอัตราส่วน\n• ความน่าจะเป็น\n• การคิดเชิงตรรกะ\n• การแก้ปัญหา\n\nวันแข่งขัน: ทุกเดือนพฤษภาคม'
    },
    outcomes: {
      zh: ['熟悉 UKMT 题型风格', '强化逻辑推理能力', '衔接 UKMT 进阶系列赛事'],
      en: ['Familiarity with the UKMT question style', 'Stronger logical reasoning', 'A pathway into the UKMT challenge series'],
      th: ['คุ้นเคยกับรูปแบบโจทย์ UKMT', 'การให้เหตุผลเชิงตรรกะที่แข็งแกร่งขึ้น', 'เส้นทางสู่ซีรีส์การแข่งขัน UKMT']
    }
  },

  /* ============ 科学竞赛 ============ */
  {
    id: 'nsl', cat: 'competition', subject: 'science',
    competitionDate: { zh: "2027年4月初赛，6月决赛", en: "April 2027 preliminary round, June 2027 final", th: "รอบคัดเลือก เม.ย. 2027 รอบชิงชนะเลิศ มิ.ย. 2027" },
    cover: 'assets/logos/nsl.jpg',
    name: { zh: '美国国家科学联盟（NSL）', en: 'National Science League (NSL)', th: 'National Science League (NSL)' },
    grades: 'Y2–Y8', gmin: 2, gmax: 8,
    organizer: { zh: 'National Science League · 美国', en: 'National Science League · USA', th: 'National Science League · สหรัฐอเมริกา' },
    format: { zh: '小班竞赛培训（按年级分班）', en: 'Competition training (grade-level classes)', th: 'ชั้นเรียนฝึกซ้อมแยกตามระดับชั้น' },
    startMonth: '2027-01',
    start: { zh: "2027年1月16–21日开班，5月24–29日结课（按年级）", en: "Classes start 16–21 January and finish 24–29 May 2027, by grade", th: "เริ่ม 16–21 ม.ค. และสิ้นสุด 24–29 พ.ค. 2027 ตามระดับชั้น" },
    duration: { zh: "15–16 周", en: "15–16 weeks", th: "15–16 สัปดาห์" },
    hours: { zh: 'Y2–Y3：21 小时；Y4–Y5：30 小时；Y6–Y7：15 小时；Y8：16 小时', en: 'Y2–Y3: 21 hours · Y4–Y5: 30 hours · Y6–Y7: 15 hours · Y8: 16 hours', th: 'Y2–Y3: 21 ชั่วโมง · Y4–Y5: 30 ชั่วโมง · Y6–Y7: 15 ชั่วโมง · Y8: 16 ชั่วโมง' },
    schedule: { zh: '各年级上课时段见下表', en: 'Grade-level schedule below', th: 'ตามตารางระดับชั้นด้านล่าง' },
    price: 13500,
    feeRange: { zh: '13,500–27,000 THB', en: '13,500–27,000 THB', th: '13,500–27,000 THB' },
    gradeRows: [
      { grade: "Y2–Y3", day: { zh: "周一 15:30–17:00", en: "Monday 15:30–17:00", th: "จันทร์ 15:30–17:00" }, weeks: { zh: "16 周（1月18、25日；2月1、8、15日；3月1、8、15、22、29日；4月19、26日；5月3、10、17、24日）", en: "16 weeks (Jan 18/25, Feb 1/8/15, Mar 1/8/15/22/29, Apr 19/26, May 3/10/17/24)", th: "16 สัปดาห์ (ม.ค. 18/25, ก.พ. 1/8/15, มี.ค. 1/8/15/22/29, เม.ย. 19/26, พ.ค. 3/10/17/24)" }, hours: "21", mentor: "Ms Roz", fee: "18,900 THB", start: "2027-01-18", finish: "2027-05-24" },
      { grade: "Y4–Y5", day: { zh: "周六 14:00–16:00", en: "Saturday 14:00–16:00", th: "เสาร์ 14:00–16:00" }, weeks: { zh: "15 周（2月20、27日及4月2、10、17日停课）", en: "15 weeks (No class Feb 20/27 or Apr 2/10/17)", th: "15 สัปดาห์ (งดเรียน 20/27 ก.พ. และ 2/10/17 เม.ย.)" }, hours: "30", mentor: "Ms Roz", fee: "27,000 THB", start: "2027-01-16", finish: "2027-05-29" },
      { grade: "Y6–Y7", day: { zh: "周二 15:00–16:00", en: "Tuesday 15:00–16:00", th: "อังคาร 15:00–16:00" }, weeks: { zh: "15 周", en: "15 weeks", th: "15 สัปดาห์" }, hours: "15", mentor: "Ms Marta", fee: "13,500 THB", start: "2027-01-19", finish: "2027-05-25" },
      { grade: "Y8", day: { zh: "周四 15:00–16:00", en: "Thursday 15:00–16:00", th: "พฤหัสบดี 15:00–16:00" }, weeks: { zh: "16 周", en: "16 weeks", th: "16 สัปดาห์" }, hours: "16", mentor: "Mr Ethan", fee: "14,400 THB", start: "2027-01-21", finish: "2027-05-27" }
    ],
    imgs: [
      'assets/img/covers/image15.jpeg', 'assets/img/covers/image16.jpeg', 'assets/img/covers/image17.jpeg',
      'assets/img/class/nsl-c1.jpg', 'assets/img/class/nsl-c2.jpg', 'assets/img/class/nsl-c4.jpg',
      'assets/img/covers/image10.jpeg', 'assets/img/covers/image11.jpeg',
      'assets/img/class/nsl-c3.jpg', 'assets/img/class/nsl-c5.jpg', 'assets/img/class/nsl-c6.jpg'
    ],
    summary: {
      zh: '基于美国课标的科学竞赛，Y2–Y8 分龄参赛，2027 年 4 月初赛、6 月决赛。',
      en: 'A US-standards-based science contest for Y2–Y8; preliminary round in April, final in June.',
      th: 'การแข่งขันวิทยาศาสตร์ตามมาตรฐานสหรัฐอเมริกาสำหรับ Y2–Y8 รอบคัดเลือกเดือนเมษายน รอบชิงชนะเลิศเดือนมิถุนายน'
    },
            desc: {
      zh: '课程目标：面向各年龄段的 STEM 挑战，旨在支持 K–12 科学学习旅程，帮助学生为 KS3 高年级和 IGCSE 科学打下坚实基础。\n课程亮点：将学术学习与趣味活动相结合，让科学既易懂又充满乐趣。\n涵盖核心科目：物理、化学、生物、地质、数学。\n学习环节：丰富的学科知识、随堂测验、动手实验、互动式趣味课堂活动。\n典型竞赛时间：通常每年 4 月举行。',
      en: 'Programme Aim: An all-ages STEM challenge designed to support the K–12 science learning journey, helping students build a strong foundation for upper KS3 and IGCSE Science.\nCurriculum Highlights: The course combines academic learning with engaging activities to make science both accessible and exciting.\nCore Subjects Covered: Physics, Chemistry, Biology, Geology, Mathematics.\nLearning Components: Rich subject knowledge, In-class quizzes, Practical experiments, Interactive and engaging lesson activities.\nTypical Competition Date: usually held in April each year.',
      th: 'เป้าหมายโปรแกรม: ความท้าทาย STEM สำหรับทุกวัย ออกแบบมาเพื่อสนับสนุนเส้นทางการเรียนรู้วิทยาศาสตร์ K–12 ช่วยให้นักเรียนสร้างพื้นฐานที่แข็งแกร่งสำหรับวิทยาศาสตร์ระดับ KS3 ตอนปลายและ IGCSE\nจุดเด่นหลักสูตร: ผสมผสานการเรียนรู้เชิงวิชาการกับกิจกรรมสนุก ๆ ทำให้วิทยาศาสตร์เข้าถึงง่ายและน่าตื่นเต้น\nวิชาหลักที่ครอบคลุม: ฟิสิกส์ เคมี ชีววิทยา ธรณีวิทยา คณิตศาสตร์\nองค์ประกอบการเรียนรู้: ความรู้วิชาที่เข้มข้น แบบทดสอบในชั้นเรียน การทดลองปฏิบัติ กิจกรรมบทเรียนแบบโต้ตอบและสนุกสนาน\nวันแข่งขันโดยทั่วไป: จัดขึ้นในเดือนเมษายนของทุกปี'
    },
    outcomes: {
      zh: ['分年级科学竞赛系统训练', '趣味实验与探究活动', '晋级 4 月初赛与 6 月决赛'],
      en: ['Grade-level systematic science contest training', 'Hands-on experiments and enquiry activities', 'Preparation for the April preliminaries and June finals'],
      th: ['ฝึกซ้อมการแข่งขันวิทยาศาสตร์แยกระดับชั้น', 'การทดลองและกิจกรรมสืบเสาะสุดสนุก', 'เตรียมพร้อมรอบคัดเลือกเมษายนและรอบชิงฯ มิถุนายน']
    }
  },

  /* ============ 物理竞赛 ============ */
  {
    id: 'jpc', cat: 'enrichment', subject: 'physics',
    searchTerms: 'JPC Junior Physics Challenge 少年物理挑战赛',
    cover: 'assets/img/phys-1.jpg',
    name: { zh: "物理卓越课程", en: "Physics Excellence Programme", th: "หลักสูตรฟิสิกส์สู่ความเป็นเลิศ" },
    grades: 'Y7–Y10', gmin: 7, gmax: 10,
    organizer: { zh: "BPhO · 英国", en: "BPhO · UK", th: "BPhO · สหราชอาณาจักร" },
    format: { zh: "小班课程", en: "Small-group class", th: "ชั้นเรียนกลุ่มเล็ก" },
    startMonth: '2027-01',
    start: { zh: "2027年1月至6月2日", en: "January to 2 June 2027", th: "มกราคม ถึง 2 มิถุนายน 2027" },

    schedule: { zh: "周三 16:00–17:00", en: "Wednesday 16:00–17:00", th: "พุธ 16:00–17:00" },
    mentor: 'Mr Ethan',
    price: 15300,
    hours: { zh: "17 小时", en: "17 hours", th: "17 ชั่วโมง" },
    imgs: ['assets/img/covers/image18.jpeg', 
      'assets/img/class/jpc-c1.jpg', 'assets/img/class/jpc-c2.jpg', 'assets/img/class/jpc-c3.jpg',
      'assets/img/class/jpc-c4.jpg', 'assets/img/class/jpc-c5.jpg', 'assets/img/class/jpc-c6.jpg'
    ],
    summary: { zh: "巩固物理概念、练习分析与解题，为 IGCSE 和 A-Level 学习做准备。", en: "Build a foundation for IGCSE and A-Level Physics through concept work and problem solving.", th: "ปูพื้นฐานฟิสิกส์สำหรับ IGCSE และ A-Level ผ่านการทำความเข้าใจแนวคิดและฝึกแก้โจทย์" },
    desc: { zh: "从力与运动到波和电，学生学习用物理原理解释现象，并把推理应用于陌生问题。学有余力的学生可进一步准备 JPC、BPhO 和 Physics Bowl 等竞赛。", en: "Students apply core physics concepts to unfamiliar problems and develop analytical reasoning. Students ready for a further challenge can prepare for competitions including JPC, BPhO and Physics Bowl.", th: "นักเรียนฝึกใช้หลักฟิสิกส์วิเคราะห์และแก้ปัญหาใหม่ ๆ ผู้ที่พร้อมสามารถฝึกเพิ่มเติมเพื่อเข้าร่วม JPC, BPhO และ Physics Bowl" },

  },

  /* ============ 化学竞赛 ============ */
  {
    id: 'c3l6', cat: 'competition', subject: 'chemistry',
    registrationClosed: true,
    cover: 'assets/logos/c3l6.jpg',
    name: { zh: '剑桥化学挑战赛（C3L6）', en: 'Cambridge Chemistry Challenge (C3L6)', th: 'การท้าทายเคมีเคมบริดจ์ (C3L6)' },
    grades: 'Y11–Y13', gmin: 11, gmax: 13,
    organizer: { zh: '剑桥大学 · 英国', en: 'University of Cambridge · UK', th: 'มหาวิทยาลัยเคมบริดจ์ · สหราชอาณาจักร' },
    format: { zh: 'Small group class', en: 'Small group class', th: 'Small group class' },
    startMonth: '2026-08',
    start: { zh: '2026年8月下旬 – 12月（15周）', en: 'Late Aug – Dec 2026 (15 weeks)', th: 'ปลาย ส.ค. – ธ.ค. 2026 (15 สัปดาห์)' },
    duration: { zh: '15 周', en: '15 weeks', th: '15 สัปดาห์' },
    hours: { zh: '22.5 小时', en: '22.5 hours', th: '22.5 ชั่วโมง' },
    schedule: { zh: '每周二 15:00–16:30', en: 'Tuesday 3:00–4:30 pm', th: 'วันอังคาร 15:00–16:30' },
    price: 13500,
    mentor: 'Mr Graham',
    imgs: [
      'assets/img/covers/c3l6-banner.png',
      'assets/img/covers/c3l6-chemistry.jpg'
    ],
    summary: {
      zh: '剑桥大学主办的化学挑战赛，考察超越课本的化学思维，2027 年 5 月开赛。',
      en: 'A Cambridge-run chemistry challenge testing thinking beyond the syllabus; held in May 2027.',
      th: 'การท้าทายเคมีโดยมหาวิทยาลัยเคมบริดจ์ ทดสอบการคิดเกินหลักสูตร จัดในเดือนพฤษภาคม 2027'
    },
            desc: {
      zh: '主办方：剑桥大学化学系（与剑桥大学圣凯瑟琳学院合作）\n\n声望\n• 英国面向六年级学生的顶级化学竞赛之一\n• 由剑桥大学化学系主办\n• 高度认可为申请英国顶尖大学的课外学术活动\n• 每年全球超过 10,000 名学生参赛\n\n适合对象\n推荐年龄：16–17 岁\n学制年级：Year 12（AS Level / Lower Sixth）\n官方比赛面向 Year 12（Lower Sixth）及以下学生开放。\n\n竞赛形式\n• 个人书面考试\n• 90 分钟\n• 2–3 道结构化化学题，含多个小问\n• 所有题目均为英文作答，要求详尽的书面作答而非选择题\n\n典型竞赛时间：每年 11 月下旬或 12 月初',
      en: 'Organiser: Department of Chemistry, University of Cambridge, in collaboration with St Catharine\'s College, University of Cambridge.\n\nPrestige\n• One of the UK\'s leading chemistry competitions for sixth-form students.\n• Organised by the University of Cambridge Department of Chemistry.\n• Highly regarded as a super-curricular activity for applications to leading UK universities.\n• More than 10,000 students participate each year from schools around the world.\n\nSuitable for\nRecommended Age: 16–17 years old\nSchool Year: Year 12 (AS Level / Lower Sixth)\nThe official competition is open to Year 12 (Lower Sixth) or below.\n\nCompetition Format\n• Individual written examination\n• 90 minutes\n• 2–3 structured chemistry questions with multiple sub-questions\n• All questions are written in English and require detailed written responses rather than multiple-choice answers.\n\nTypical Competition Date: late November or early December each year.',
      th: 'ผู้จัด: Department of Chemistry, University of Cambridge, ร่วมกับ St Catharine\'s College, University of Cambridge\n\nชื่อเสียง\n• หนึ่งในการแข่งขันเคมีชั้นนำของสหราชอาณาจักรสำหรับนักเรียน sixth-form\n• จัดโดย Department of Chemistry แห่ง University of Cambridge\n• เป็นที่ยอมรับอย่างสูงในฐานะกิจกรรม super-curricular สำหรับการสมัครเข้ามหาวิทยาลัยชั้นนำของสหราชอาณาจักร\n• นักเรียนกว่า 10,000 คนเข้าร่วมในแต่ละปีจากโรงเรียนทั่วโลก\n\nเหมาะสำหรับ\nอายุที่แนะนำ: 16–17 ปี\nชั้นปี: Year 12 (AS Level / Lower Sixth)\nการแข่งขันอย่างเป็นทางการเปิดสำหรับ Year 12 (Lower Sixth) หรือต่ำกว่า\n\nรูปแบบการแข่งขัน\n• การสอบข้อเขียนรายบุคคล\n• 90 นาที\n• โจทย์เคมีที่มีโครงสร้าง 2–3 ข้อ พร้อมคำถามย่อยหลายข้อ\n• คำถามทั้งหมดเป็นภาษาอังกฤษและต้องการคำตอบแบบเขียนโดยละเอียด ไม่ใช่แบบปรนัย\n\nวันแข่งขันโดยทั่วไป: ปลายเดือนพฤศจิกายนหรือต้นเดือนธันวาคมของทุกปี'
    },
    outcomes: {
      zh: ['超越课本的化学思维训练', '历年真题系统讲解', '剑桥大学主办赛事背书'],
      en: ['Chemistry thinking beyond the syllabus', 'Systematic past-paper training', 'A University of Cambridge-run competition credential'],
      th: ['การคิดเคมีเกินหลักสูตร', 'ฝึกข้อสอบเก่าอย่างเป็นระบบ', 'การแข่งขันโดยมหาวิทยาลัยเคมบริดจ์']
    }
  },
  {
    id: 'icq', cat: 'competition', subject: 'chemistry',
    registrationClosed: true,
    cover: 'assets/logos/icq.jpg',
    name: { zh: '国际化学知识竞赛（ICQ）', en: 'International Chemistry Quiz (ICQ)', th: 'แบบทดสอบเคมีนานาชาติ (ICQ)' },
    grades: 'Y9–Y11', gmin: 9, gmax: 11,
    organizer: { zh: '澳大利亚皇家化学学会（RACI）· 澳大利亚', en: 'Royal Australian Chemical Institute (RACI) · Australia', th: 'สถาบันเคมีหลวงออสเตรเลีย (RACI) · ออสเตรเลีย' },
    format: { zh: '小班竞赛培训', en: 'Competition training class', th: 'ชั้นเรียนฝึกซ้อมการแข่งขัน' },
    startMonth: '2027-01',
    start: { zh: '2027年1月27日 – 6月3日（18周）', en: '27 Jan – 3 Jun 2027 (18 weeks)', th: '27 ม.ค. – 3 มิ.ย. 2027 (18 สัปดาห์)' },
    duration: { zh: '18 周', en: '18 weeks', th: '18 สัปดาห์' },
    hours: { zh: '26 小时', en: '26 hours', th: '26 ชั่วโมง' },
    schedule: { zh: '每周四 15:00–16:30', en: 'Thursday 3:00–4:30 pm', th: 'วันพฤหัสบดี 15:00–16:30' },
    price: 16200,
    imgs: [
      'assets/img/covers/icq-raci.png',
      'assets/img/covers/icq-glassware.jpg',
      'assets/img/covers/icq-student.jpg'
    ],
    summary: {
      zh: 'RACI 主办的国际化学知识竞赛，强调化学在现实世界中的应用，2027 年 8 月考试。',
      en: 'The RACI-run International Chemistry Quiz emphasising real-world chemistry applications; exam in August 2027.',
      th: 'แบบทดสอบเคมีนานาชาติโดย RACI เน้นการประยุกต์ใช้เคมีในโลกจริง สอบในเดือนสิงหาคม 2027'
    },
            desc: {
      zh: '主办方：澳大利亚皇家化学学会（RACI）· 澳大利亚\n\n关于本竞赛\n国际化学知识竞赛（ICQ）是全球最大的中学生国际化学竞赛之一，创立于 1982 年，旨在通过引人入胜且具有挑战性的题目，激发学生对化学的兴趣，鼓励学生将科学知识应用于现实世界。当今每年有来自 30 多个国家和地区的学生参赛。\n\n声望\n• 全球最大的中学生国际化学竞赛之一\n• 由澳大利亚皇家化学学会（RACI）主办\n• 自创办以来已有超过 150 万学生参加\n• 被国际学校广泛认可为对化学与 STEM 学科感兴趣学生的优质课外活动\n\n适合对象\n学制年级：Year 9 – Year 12\n竞赛分组\n• Intermediate 1 – Year 9\n• Intermediate 2 – Year 10\n• Senior – Year 11\n• Final – Year 12\n\n竞赛形式\n• 个人竞赛\n• 30 道选择题\n• 60 分钟\n• 计算机或纸质考试（取决于当地主办方）\n• 英语考试（部分国家也提供双语卷）',
      en: 'Organiser: Royal Australian Chemical Institute (RACI), Australia\n\nAbout the Competition\nThe International Chemistry Quiz (ICQ) is one of the world\'s largest international chemistry competitions for secondary school students. First established in 1982, the competition aims to promote interest in chemistry and encourage students to apply scientific knowledge to real-world situations through engaging and challenging questions. Today, students from more than 30 countries and regions participate each year.\n\nPrestige\n• One of the world\'s largest international chemistry competitions for secondary school students.\n• Organised by the Royal Australian Chemical Institute (RACI).\n• More than 1.5 million students have participated globally since its launch.\n• Widely recognised by international schools as an excellent enrichment activity for students interested in Chemistry and STEM subjects.\n\nSuitable for\nSchool Year: Year 9 – Year 12\nCompetition Divisions\n• Intermediate 1 – Year 9\n• Intermediate 2 – Year 10\n• Senior – Year 11\n• Final – Year 12\n\nCompetition Format\n• Individual competition\n• 30 multiple-choice questions\n• 60 minutes\n• Computer-based or paper-based (depending on the local organiser)\n• English examination (some regions also provide bilingual papers).',
      th: 'ผู้จัด: Royal Australian Chemical Institute (RACI), ออสเตรเลีย\n\nเกี่ยวกับการแข่งขัน\nInternational Chemistry Quiz (ICQ) เป็นหนึ่งในการแข่งขันเคมีนานาชาติที่ใหญ่ที่สุดในโลกสำหรับนักเรียนมัธยม ก่อตั้งขึ้นครั้งแรกในปี 1982 มีจุดมุ่งหมายเพื่อส่งเสริมความสนใจในเคมีและกระตุ้นให้นักเรียนนำความรู้ทางวิทยาศาสตร์ไปประยุกต์ในสถานการณ์จริงผ่านคำถามที่น่าสนใจและท้าทาย ปัจจุบันนักเรียนจากกว่า 30 ประเทศและภูมิภาคเข้าร่วมในแต่ละปี\n\nชื่อเสียง\n• หนึ่งในการแข่งขันเคมีนานาชาติที่ใหญ่ที่สุดในโลกสำหรับนักเรียนมัธยม\n• จัดโดย Royal Australian Chemical Institute (RACI)\n• นักเรียนมากกว่า 1.5 ล้านคนเข้าร่วมทั่วโลกนับตั้งแต่เริ่มก่อตั้ง\n• ได้รับการยอมรับอย่างกว้างขวางจากโรงเรียนนานาชาติว่าเป็นกิจกรรมเสริมที่ยอดเยี่ยมสำหรับนักเรียนที่สนใจในเคมีและวิชา STEM\n\nเหมาะสำหรับ\nชั้นปี: Year 9 – Year 12\nระดับการแข่งขัน\n• Intermediate 1 – Year 9\n• Intermediate 2 – Year 10\n• Senior – Year 11\n• Final – Year 12\n\nรูปแบบการแข่งขัน\n• การแข่งขันรายบุคคล\n• คำถามแบบเลือกตอบ 30 ข้อ\n• 60 นาที\n• แบบคอมพิวเตอร์หรือแบบกระดาษ (ขึ้นอยู่กับผู้จัดในท้องถิ่น)\n• การสอบภาษาอังกฤษ (บางพื้นที่ยังมีข้อสอบสองภาษา)'
    },
    outcomes: {
      zh: ['化学核心概念系统巩固', '应用型题型专项训练', 'RACI 国际赛事背书'],
      en: ['Systematic consolidation of core chemistry concepts', 'Focused training on application-style questions', 'An international RACI competition credential'],
      th: ['เสริมแนวคิดเคมีหลักอย่างเป็นระบบ', 'ฝึกโจทย์ประยุกต์อย่างเฉพาะเจาะจง', 'การแข่งขันนานาชาติโดย RACI']
    }
  },

  /* ============ 生物竞赛（一对一，时间与价格待定） ============ */
  {
    id: 'bbo', cat: 'competition', subject: 'biology',
    cover: 'assets/logos/bbo.jpg',
    name: { zh: '英国生物奥赛（BBO）', en: 'British Biology Olympiad (BBO)', th: 'โอลิมปิกชีววิทยาอังกฤษ (BBO)' },
    grades: { zh: 'Y10–Y13（Y9 找 Ms Linda 面试）', en: 'Y10–Y13 (Y9 interview with Ms Linda)', th: 'Y10–Y13 (Y9 สัมภาษณ์กับ Ms Linda)' }, gmin: 10, gmax: 13,
    organizer: { zh: '英国皇家生物学会 · 英国', en: 'Royal Society of Biology · UK', th: 'ราชสมาคมชีววิทยา · สหราชอาณาจักร' },
    format: { zh: 'Small group class', en: 'Small group class', th: 'Small group class' },
    startMonth: null, price: 13500,
    imgs: [
      'assets/img/covers/bbo-virus.png',
      'assets/img/covers/bbo-microscope.png',
      'assets/img/covers/bbo-microorganism.jpg',
      'assets/img/covers/bbo-dna.jpg',
      'assets/img/covers/bbo-anatomy.jpg'
    ],
    summary: {
      zh: '英国顶尖生物奥赛，大学申请高含金量；一对一专项辅导，时间与费用待定。',
      en: 'The UK’s premier biology olympiad, highly valued in university applications; 1-on-1 coaching with schedule and fees on request.',
      th: 'โอลิมปิกชีววิทยาชั้นนำของอังกฤษ มีคุณค่าสูงในการสมัครมหาวิทยาลัย โค้ชตัวต่อตัว ตารางเรียนและค่าเล่าเรียนตามตกลง'
    },
            desc: {
      zh: '课程目标：BBO 课程旨在拓展学生超越学校课程范围的生物知识、科学探究与批判性思维能力，为 IGCSE 和 A-Level 生物打下坚实的学术基础，同时帮助积极进取的学生备战 2027 年 1 月的英国生物奥赛（BBO）——英国最具声望的生物竞赛之一。\n学习收获：更深入理解高阶生物概念；强化分析思维与科学问题解决能力；建立应对奥赛风格题目的信心；为 IGCSE / A-Level 生物奠定坚实基础；备战 BBO、IBO 等顶级生物竞赛；增强申请医学、生物医学、自然科学等相关专业时的学术竞争力。',
      en: 'Programme Aim: The BBO programme is designed to develop students\' biological knowledge, scientific inquiry, and critical thinking skills beyond the school curriculum. It builds a strong academic foundation for IGCSE and A-Level Biology while preparing motivated students for the British Biology Olympiad (BBO) in January 2027, one of the UK\'s most prestigious biology competitions.\nLearning Outcomes: Develop a deeper understanding of advanced Biology concepts; Strengthen analytical thinking and scientific problem-solving skills; Build confidence in tackling Olympiad-style questions; Establish a strong foundation for IGCSE / A-Level Biology; Prepare for prestigious biology competitions such as the BBO and the IBO; Enhance academic portfolios for competitive university applications, particularly in Medicine, Biomedical Sciences, Natural Sciences, and related fields.',
      th: 'เป้าหมายโปรแกรม: โปรแกรม BBO ออกแบบมาเพื่อพัฒนาความรู้ด้านชีววิทยา การสืบเสาะทางวิทยาศาสตร์ และทักษะการคิดเชิงวิพากษ์ที่เหนือกว่าหลักสูตรในโรงเรียน สร้างพื้นฐานวิชาการที่แข็งแกร่งสำหรับชีววิทยา IGCSE และ A-Level พร้อมเตรียมนักเรียนที่มีความมุ่งมั่นสำหรับการแข่งขัน British Biology Olympiad (BBO) ในเดือนมกราคม 2027 ซึ่งเป็นการแข่งขันชีววิทยาที่มีชื่อเสียงที่สุดแห่งหนึ่งของสหราชอาณาจักร\nผลการเรียนรู้: เข้าใจแนวคิดชีววิทยาขั้นสูงอย่างลึกซึ้งยิ่งขึ้น; เสริมทักษะการคิดเชิงวิเคราะห์และการแก้ปัญหาทางวิทยาศาสตร์; สร้างความมั่นใจในการทำโจทย์ระดับโอลิมปิก; สร้างพื้นฐานที่แข็งแกร่งสำหรับชีววิทยา IGCSE / A-Level; เตรียมพร้อมสำหรับการแข่งขันชีววิทยาชั้นนำ เช่น BBO และ IBO; เสริมความแข็งแกร่งให้แฟ้มผลงานทางวิชาการสำหรับการสมัครมหาวิทยาลัยที่มีการแข่งขันสูง โดยเฉพาะแพทยศาสตร์ ชีวการแพทย์ วิทยาศาสตร์ธรรมชาติ และสาขาที่เกี่ยวข้อง'
    },
    outcomes: {
      zh: ['覆盖 A-Level 及以上生物知识', '生物/医学方向申请强背书'],
      en: ['A-Level-and-beyond biology coverage', 'A strong credential for bioscience and medicine applications'],
      th: [
        'ครอบคลุมชีววิทยาระดับ A-Level และสูงกว่า',
        'หลักฐานที่แข็งแกร่งสำหรับสมัครสายชีววิทยาและการแพทย์'
      ]
    }
  },


  /* ============ 经济与商务竞赛 ============ */
  {
    id: 'econ-biz', cat: 'competition', subject: 'econ',
    cover: 'assets/logos/econ-biz.jpg',
    name: { zh: '经济与商务竞赛项目', en: 'Economics & Business Competition Programme', th: 'โปรแกรมการแข่งขันเศรษฐศาสตร์และธุรกิจ' },
    grades: 'Y9–Y13', gmin: 9, gmax: 13,
    organizer: { zh: '多主办方 · 国际', en: 'Multiple organisers · International', th: 'หลายผู้จัด · นานาชาติ' },
    format: { zh: '一对一专项辅导', en: '1-on-1 specialist coaching', th: 'โค้ชเฉพาะทางตัวต่อตัว' },
    startMonth: null, price: null,
    summary: {
      zh: '覆盖 NEC、Marshall 论文、John Locke、Wharton 商赛等国际赛事，一对一辅导，时间与费用待定。',
      en: 'Covers the NEC, Marshall Society essay, John Locke essay and Wharton competitions; 1-on-1 coaching with schedule and fees on request.',
      th: 'ครอบคลุม NEC, เรียงความ Marshall Society, เรียงความ John Locke และการแข่งขัน Wharton โค้ชตัวต่อตัว ตารางเรียนและค่าเล่าเรียนตามตกลง'
    },
    desc: {
      zh: '本项目面向对经济与商务感兴趣的 Y9–Y13 学生，覆盖多项国际知名赛事：NEC（全美经济学挑战赛）、Marshall Society 经济学论文竞赛、John Locke 论文竞赛（经济/商业方向）与 Wharton 全球高中商业竞赛（含 ABS/IBS 系列）。课程采用一对一辅导，根据目标赛事定制训练方案，包括经济学知识、论文写作与案例分析。上课时间与费用请通过咨询确定。',
      en: 'This programme is designed for Y9–Y13 students interested in economics and business, covering internationally renowned competitions: the NEC (National Economics Challenge), the Marshall Society Economics Essay Competition, the John Locke Essay Competition (economics/business categories) and Wharton global high-school business competitions (including the ABS/IBS series). Coaching is 1-on-1, tailored to the target competition—covering economics knowledge, essay writing and case analysis. Schedule and fees are arranged on request.',
      th: 'โปรแกรมนี้ออกแบบสำหรับ Y9–Y13 ที่สนใจเศรษฐศาสตร์และธุรกิจ ครอบคลุมการแข่งขันนานาชาติชื่อดัง: NEC, การประกวดเรียงความ Marshall Society, การประกวดเรียงความ John Locke และการแข่งขันธุรกิจ Wharton (รวมถึงซีรีส์ ABS/IBS) โค้ชตัวต่อตัวตามการแข่งขันเป้าหมาย ครอบคลุมความรู้เศรษฐศาสตร์ การเขียนเรียงความ และการวิเคราะห์กรณีศึกษา ตารางเรียนและค่าเล่าเรียนตามตกลง'
    },
    outcomes: {
      zh: ['按目标赛事一对一定制', '经济学知识与论文写作双提升', '覆盖四大国际赛事'],
      en: ['1-on-1 plans tailored to the target competition', 'Both economics knowledge and essay-writing skills', 'Coverage of four major international competitions'],
      th: ['แผนตัวต่อตัวตามการแข่งขันเป้าหมาย', 'พัฒนาทั้งความรู้เศรษฐศาสตร์และการเขียนเรียงความ', 'ครอบคลุมการแข่งขันนานาชาติสี่รายการ']
    }
  }
);
