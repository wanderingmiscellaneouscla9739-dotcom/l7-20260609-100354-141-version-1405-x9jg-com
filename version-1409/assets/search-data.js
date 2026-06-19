const MOVIE_SEARCH_DATA = [
  {
    "title": "终极特警第一季",
    "href": "detail/movie-0001.html",
    "cover": "1.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "动作 / 惊悚",
    "category": "音乐",
    "description": "伦敦被封锁，一栋楼里藏着能瘫痪欧洲的病毒，一个被停职的特警必须在黎明前清除威胁。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "反恐",
      "室内近战",
      "战术写实",
      "孤胆英雄"
    ]
  },
  {
    "title": "隐士",
    "href": "detail/movie-0002.html",
    "cover": "2.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，惊悚",
    "category": "青春",
    "description": "一群网红去深山寻找传说中的“隐士”直播，却发现那个怪物其实是失踪多年的自己。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "深山老林",
      "都市传说",
      "视觉恐惧",
      "结局反转"
    ]
  },
  {
    "title": "青春海滩电影版",
    "href": "detail/movie-0003.html",
    "cover": "3.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "歌舞 / 奇幻",
    "category": "悬疑",
    "description": "一群现代高中生意外闯入一部80年代老电影的海滩世界，必须在歌舞对决中找到回家的方法。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "沙滩派对",
      "时空穿越",
      "歌舞青春",
      "平行世界"
    ]
  },
  {
    "title": "魅力航班",
    "href": "detail/movie-0004.html",
    "cover": "4.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "category": "家庭",
    "description": "一架载满网红与MCN高层的“魅力航班”遭遇神秘气流，醒来后所有人竟失去了全部粉丝数据。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "高空",
      "人性",
      "心理战"
    ]
  },
  {
    "title": "茀兰德",
    "href": "detail/movie-0005.html",
    "cover": "5.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 文艺",
    "category": "音乐",
    "description": "19世纪苏格兰孤岛上，最后一个说茀兰德语的女孩，突然被死去的族人“翻译”海鸟的警告。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "身份认同",
      "孤岛",
      "种族",
      "哥特",
      "心理惊悚"
    ]
  },
  {
    "title": "香港天堂",
    "href": "detail/movie-0006.html",
    "cover": "6.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "category": "励志",
    "description": "一个只想金盆洗手的杀手，在回归前夜的香港，遇见了要刺杀他的徒弟。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "黑帮",
      "救赎",
      "边缘人"
    ]
  },
  {
    "title": "受难记",
    "href": "detail/movie-0007.html",
    "cover": "7.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 心理 / 历史",
    "category": "奇幻",
    "description": "一名被指控为女巫的中世纪女子在酷刑中产生了可怕的幻觉，她无法确定自己究竟是凡人还是恶魔。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "宗教恐怖",
      "中世纪",
      "女巫审判",
      "幻觉",
      "A24"
    ]
  },
  {
    "title": "索尼克：回家大冒险",
    "href": "detail/movie-0008.html",
    "cover": "8.jpg",
    "year": "2022",
    "region": "日本/美国",
    "type": "剧集",
    "genre": "动画冒险",
    "category": "喜剧",
    "description": "索尼克在一次实验意外中被丢进扭曲的平行世界，那里的蛋头博士竟是好人，而他自己成了反派。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "高速奔跑",
      "平行宇宙",
      "友情",
      "搞笑",
      "打蛋头博士"
    ]
  },
  {
    "title": "力与美之路",
    "href": "detail/movie-0009.html",
    "cover": "9.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "运动， 剧情",
    "category": "古装",
    "description": "一个有着芭蕾梦想的瘦弱少年，为了向严厉的父亲证明自己，报名参加了全州最残酷的青少年健美锦标赛。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "健美",
      "励志",
      "父子"
    ]
  },
  {
    "title": "冰宫",
    "href": "detail/movie-0010.html",
    "cover": "10.jpg",
    "year": "2024",
    "region": "挪威",
    "type": "电视剧",
    "genre": "悬疑 / 剧情 / 惊悚",
    "category": "剧情",
    "description": "极夜之下，一座与世隔绝的雪山酒店里，举办婚礼的新娘离奇失踪，所有宾客都被困且无人可信。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "北欧 noir",
      "雪山",
      "女性视角",
      "失踪谜案",
      "心理惊悚"
    ]
  },
  {
    "title": "波特小姐",
    "href": "detail/movie-0011.html",
    "cover": "11.jpg",
    "year": "2006",
    "region": "英国",
    "type": "电影",
    "genre": "传记 / 剧情",
    "category": "历史",
    "description": "比得兔的创作者波特小姐，如何在保守的维多利亚时代追求艺术与爱情。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "作家",
      "女性独立",
      "田园",
      "出版业",
      "童话"
    ]
  },
  {
    "title": "灭绝大屠杀",
    "href": "detail/movie-0012.html",
    "cover": "12.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻，惊悚，动作",
    "category": "都市",
    "description": "当AI判定人类是地球生态的“病毒”，一场针对99.9%人口的精准灭绝开始了。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "末日",
      "AI反叛",
      "人类存亡",
      "硬核科幻"
    ]
  },
  {
    "title": "大道之王",
    "href": "detail/movie-0013.html",
    "cover": "13.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "历史 / 权谋 / 古装",
    "category": "青春",
    "description": "清朝末年，山西票号的少东家被绑票，他却用这场绑架做杠杆，撬动了整个大清的钱庄。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "商战",
      "古代金融",
      "晋商",
      "传奇"
    ]
  },
  {
    "title": "人类瑕疵大学",
    "href": "detail/movie-0014.html",
    "cover": "14.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情，校园",
    "category": "爱情",
    "description": "一所只招收被社会定义为“瑕疵品”之人的奇怪大学，里面的学生患有各种极端恐惧症、强迫症或人格障碍。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "特殊教育",
      "缺陷",
      "成长",
      "社会偏见"
    ]
  },
  {
    "title": "俺物语",
    "href": "detail/movie-0015.html",
    "cover": "15.jpg",
    "year": "2015",
    "region": "日本",
    "type": "电影 / 真人版",
    "genre": "喜剧 / 爱情",
    "category": "励志",
    "description": "拥有金刚外表的善良高中生，虽然不受女生欢迎，却用真心征服了萌妹子的芳心。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "少女漫改",
      "纯爱",
      "反差萌"
    ]
  },
  {
    "title": "异空感应粤语",
    "href": "detail/movie-0016.html",
    "cover": "16.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "科幻 / 悬疑",
    "category": "古装",
    "description": "业余无线电爱好者收到一段来自平行宇宙的求救信号，对方竟是1997年的自己。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "平行宇宙",
      "无线电",
      "粤语原声"
    ]
  },
  {
    "title": "地狱为何恶劣",
    "href": "detail/movie-0017.html",
    "cover": "17.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧，动作，黑帮",
    "category": "喜剧",
    "description": "一个想当导演的废柴，为了给入狱的黑帮老大放映他人生最后的电影，必须带领一群疯子剧组，在黑帮火并的现场完成实景拍摄。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "暴力美学",
      "电影狂热",
      "血浆",
      "黑色幽默"
    ]
  },
  {
    "title": "战神传说",
    "href": "detail/movie-0018.html",
    "cover": "18.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 奇幻 / 古装",
    "category": "悬疑",
    "description": "商朝最后一位“兵神”复活，发现所谓的天命之战，不过是神仙们的一场直播真人秀。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "港漫改编",
      "虚拟拍摄",
      "兄弟反目",
      "神话机甲"
    ]
  },
  {
    "title": "圣路易斯银行大劫案",
    "href": "detail/movie-0019.html",
    "cover": "19.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/犯罪",
    "category": "剧情",
    "description": "银行劫案变人质危机，谈判专家发现自己要谈判的劫匪头目，竟是20年前失踪的亲生儿子。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "真实事件改编",
      "密室",
      "谈判专家",
      "反转"
    ]
  },
  {
    "title": "天生不对",
    "href": "detail/movie-0020.html",
    "cover": "20.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "都市",
    "description": "一个高冷风水师和一个衰神附体的女孩八字犯冲，但每次分开后，两人的霉运反而更重。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "八字不合",
      "风水",
      "欢喜冤家",
      "港式无厘头",
      "星座"
    ]
  },
  {
    "title": "蕾蒙娜和姐姐",
    "href": "detail/movie-0021.html",
    "cover": "21.jpg",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧， 家庭， 剧情",
    "category": "动作",
    "description": "九岁的捣蛋鬼蕾蒙娜总是好心办坏事，她和完美的姐姐在鸡飞狗跳的日常中，学会了如何拥抱不完美的自己。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "姐妹成长",
      "童真",
      "治愈",
      "生活智慧"
    ]
  },
  {
    "title": "独立纵队2",
    "href": "detail/movie-0022.html",
    "cover": "22.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "战争/动作/传奇",
    "category": "青春",
    "description": "纨绔子弟阴差阳错成了土匪头子，为了在沦陷区活下去，他拉起一支不按常理出牌的“独立纵队”。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "抗战",
      "草根英雄",
      "野路子",
      "爆破",
      "兄弟情"
    ]
  },
  {
    "title": "富贵逼东人",
    "href": "detail/movie-0023.html",
    "cover": "23.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧，家庭",
    "category": "纪录",
    "description": "寒酸打工仔误中彩票，却被隔壁有钱邻居误认为是绑匪，一场乌龙大战爆笑上演。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "贺岁",
      "暴发户",
      "斗气",
      "粤语",
      "合家欢"
    ]
  },
  {
    "title": "黄飞鸿",
    "href": "detail/movie-0024.html",
    "cover": "24.jpg",
    "year": "2027",
    "region": "中国香港/中国大陆",
    "type": "电影",
    "genre": "动作/武侠/历史",
    "category": "家庭",
    "description": "1905年，黄飞鸿不再打洋人，而是追着偷了他“民团总教头”牌匾的华人偷渡客，一路追到了美国旧金山天使岛。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "民团总教头",
      "蒸汽朋克",
      "佛山无影脚",
      "华人劳工"
    ]
  },
  {
    "title": "春风沉醉的夜晚",
    "href": "detail/movie-0025.html",
    "cover": "25.jpg",
    "year": "2009",
    "region": "中国大陆 / 法国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 同性",
    "category": "青春",
    "description": "在南京湿热的春夜，三个男人和两个女人，在爱情、道德与欲望的泥潭中挣扎，找不到出口。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "文艺",
      "禁忌之恋",
      "南京",
      "郁达夫",
      "诗意"
    ]
  },
  {
    "title": "乱世骄雄",
    "href": "detail/movie-0026.html",
    "cover": "26.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史 / 战争 / 传记",
    "category": "爱情",
    "description": "北洋军阀时期，一个只想当教书匠的文人，被时代洪流裹挟成了割据一方的大帅。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "军阀",
      "史诗",
      "权谋",
      "战争场面"
    ]
  },
  {
    "title": "梦境",
    "href": "detail/movie-0027.html",
    "cover": "27.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "科幻 / 悬疑",
    "category": "喜剧",
    "description": "警方发现一种新型毒品能让人永远困在最幸福的梦境里，而制造者就在受害者之中。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "潜意识",
      "入侵",
      "犯罪"
    ]
  },
  {
    "title": "十六支蜡烛",
    "href": "detail/movie-0028.html",
    "cover": "28.jpg",
    "year": "1984",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "category": "剧情",
    "description": "十六岁生日那天，全家人都忘了她的生日，只有隔壁班的校草误打误撞走进了她的生活。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "青春期",
      "生日",
      "暗恋",
      "校园"
    ]
  },
  {
    "title": "刑警老党",
    "href": "detail/movie-0029.html",
    "cover": "29.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "刑侦, 剧情",
    "category": "爱情",
    "description": "还有三十天退休的老刑警老党，发誓要在最后一个月翻出一桩十九年前的少女失踪悬案。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "退休前",
      "冷案",
      "师徒",
      "人情味",
      "小城"
    ]
  },
  {
    "title": "一战再战",
    "href": "detail/movie-0030.html",
    "cover": "30.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、体育、励志",
    "category": "家庭",
    "description": "年过四十的前格斗冠军为还债复出，却发现自己的决赛对手竟是离家出走多年的亲儿子。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "MMA",
      "父子情",
      "草根逆袭",
      "擂台"
    ]
  },
  {
    "title": "野草",
    "href": "detail/movie-0031.html",
    "cover": "31.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "文艺剧情",
    "category": "历史",
    "description": "祖母去世后，都市女孩回到法国乡村继承一片“毫无价值”的野草地，却发现它是整个河谷的生命源头。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "女性成长",
      "乡村",
      "生态",
      "三代人"
    ]
  },
  {
    "title": "史瑞克快乐4神仙",
    "href": "detail/movie-0032.html",
    "cover": "32.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影 / 动画",
    "genre": "喜剧 / 奇幻",
    "category": "历史",
    "description": "史瑞克厌倦了奶爸生活，一个神秘商人给了他回到过去的机会，代价是失去一天的记忆。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "梦工厂",
      "合家欢",
      "穿越",
      "中年危机"
    ]
  },
  {
    "title": "女人40一枝花",
    "href": "detail/movie-0033.html",
    "cover": "33.jpg",
    "year": "2026",
    "region": "中国内地",
    "type": "剧集",
    "genre": "剧情 / 家庭",
    "category": "喜剧",
    "description": "40岁的家庭主妇李美丽在丈夫提出离婚、孩子考上大学后，人生清零，她决定开一家花店，从头再来。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "中年女性",
      "创业",
      "再婚",
      "励志"
    ]
  },
  {
    "title": "电影大事件2015",
    "href": "detail/movie-0034.html",
    "cover": "34.jpg",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "喜剧",
    "description": "一场电影院枪击案直播中，制片人发现劫匪是按照自己十年前被毙掉的剧本在行动。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "媒体",
      "枪击案",
      "直播"
    ]
  },
  {
    "title": "日落在霓虹灯",
    "href": "detail/movie-0035.html",
    "cover": "35.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "都市, 悬疑, 爱情",
    "category": "奇幻",
    "description": "霓虹灯师傅阿唐，在寻找突然失踪的妻子的过程中，发现她留下的每一盏旧灯里，都藏着指向黑帮洗钱案的摩斯密码。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "霓虹灯",
      "失踪",
      "记忆",
      "匠人"
    ]
  },
  {
    "title": "罗密欧与朱丽叶",
    "href": "detail/movie-0036.html",
    "cover": "36.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "爱情, 剧情",
    "category": "科幻",
    "description": "在当代伦敦的两大敌对传媒家族中，罗密欧与朱丽叶用社交媒体秘密相爱，并试图终结世仇。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "现代改编",
      "家族恩怨",
      "青春",
      "悲剧"
    ]
  },
  {
    "title": "墨西哥太平间的九具尸体",
    "href": "detail/movie-0037.html",
    "cover": "37.jpg",
    "year": "2025",
    "region": "美国 / 墨西哥",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "category": "历史",
    "description": "一场飓风将九名陌生人困在墨西哥边境的太平间，他们中发现，其中一具尸体还活着，并且正在感染其他人。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "密闭空间",
      "传染病",
      "身份谜团"
    ]
  },
  {
    "title": "最后的手稿",
    "href": "detail/movie-0038.html",
    "cover": "38.jpg",
    "year": "2024",
    "region": "阿根廷",
    "type": "电影",
    "genre": "悬疑 / 剧情 / 文学",
    "category": "喜剧",
    "description": "一个已故作家的遗稿被出版商买下，但每读一页，就会有一个书中描述的人离奇死亡。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "作家",
      "遗稿",
      "文学迷局",
      "出版商阴谋",
      "南美魔幻"
    ]
  },
  {
    "title": "石墙",
    "href": "detail/movie-0039.html",
    "cover": "39.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "历史/同性",
    "category": "动作",
    "description": "1969年纽约石墙酒吧外，一群社会边缘人如何用一场骚乱点燃了现代同性恋平权运动的星星之火。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "平权运动",
      "真实事件改编",
      "群像戏",
      "抗争"
    ]
  },
  {
    "title": "因狂之名",
    "href": "detail/movie-0040.html",
    "cover": "40.jpg",
    "year": "2024",
    "region": "美国, 英国",
    "type": "剧集",
    "genre": "惊悚, 犯罪, 心理",
    "category": "都市",
    "description": "一名心理医生潜入一个号称“爱与自由”的乌托邦社区，却发现这里是一个利用人类情感弱点进行精神控制的精密牢笼。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "邪教",
      "心理控制",
      "真实改编"
    ]
  },
  {
    "title": "死后",
    "href": "detail/movie-0041.html",
    "cover": "41.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 悬疑, 奇幻",
    "category": "纪录",
    "description": "一个失去记忆的男人在停尸房醒来，发现自己是唯一能看到“死后记忆残留”的人。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "濒死体验",
      "记忆碎片",
      "身份谜团",
      "烧脑"
    ]
  },
  {
    "title": "回到17岁",
    "href": "detail/movie-0042.html",
    "cover": "42.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 爱情 / 奇幻",
    "category": "纪录",
    "description": "37岁婚姻失败的油腻大叔，一夜之间变回17岁的校草模样，决定这次一定要追到当年的女神。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "重返青春",
      "弥补遗憾",
      "校园",
      "暖心",
      "时空穿越"
    ]
  },
  {
    "title": "魔魇禁地",
    "href": "detail/movie-0043.html",
    "cover": "43.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 心理惊悚 / 超自然",
    "category": "家庭",
    "description": "七个陌生人醒来发现身处同一噩梦里，死了就真的会死，而梦主是一个8岁女孩。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "梦境入侵",
      "心理创伤",
      "循环惊吓",
      "密室逃脱"
    ]
  },
  {
    "title": "我最好朋友的婚礼",
    "href": "detail/movie-0044.html",
    "cover": "44.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "category": "历史",
    "description": "收到青梅竹马的婚礼请柬后，女孩决定不惜一切代价抢回新郎，却发现自己爱上了新娘。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "翻拍",
      "搅局",
      "爆笑",
      "闺蜜",
      "美式喜剧"
    ]
  },
  {
    "title": "枪火2014",
    "href": "detail/movie-0045.html",
    "cover": "45.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪 / 剧情",
    "category": "都市",
    "description": "2014年，五名最顶尖的枪手为了保护黑帮老大的孙女，在九龙城寨遗址展开一场72小时无休的困兽之斗。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "黑帮",
      "枪战",
      "兄弟情",
      "宿命",
      "港产片复兴"
    ]
  },
  {
    "title": "后来",
    "href": "detail/movie-0046.html",
    "cover": "46.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情 / 青春",
    "category": "古装",
    "description": "一对高中情侣从校园到职场，相爱十年却终究走散。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "成长",
      "遗憾",
      "异地恋",
      "十年",
      "真实故事"
    ]
  },
  {
    "title": "桑塔斯坦",
    "href": "detail/movie-0047.html",
    "cover": "47.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "科幻， 悬疑",
    "category": "古装",
    "description": "一名孤独的东德程序员创造了一个名为“桑塔斯坦”的AI，它没有毁灭人类，而是自称上帝想要拯救所有人的灵魂。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "人工智能",
      "宗教",
      "心理"
    ]
  },
  {
    "title": "偷情欲海花",
    "href": "detail/movie-0048.html",
    "cover": "48.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "genre": "情色, 悬疑, 爱情",
    "category": "剧情",
    "description": "他一夜风流后收到神秘光碟，里面的偷情录像女主角每集都在换脸。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "婚外情",
      "黑色电影",
      "蛇蝎女人",
      "骗局",
      "欲望"
    ]
  },
  {
    "title": "艾哈迈德王子历险记",
    "href": "detail/movie-0049.html",
    "cover": "49.jpg",
    "year": "2024",
    "region": "印度 / 沙特",
    "type": "动画电影",
    "genre": "动画 / 冒险 / 奇幻",
    "category": "爱情",
    "description": "生性顽劣的阿拉伯小王子为救被诅咒的父王，骑着会飞的魔法地毯，穿越十二个平行世界寻找解药。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "异域",
      "神话",
      "魔法",
      "飞行",
      "寻宝"
    ]
  },
  {
    "title": "方法派",
    "href": "detail/movie-0050.html",
    "cover": "50.jpg",
    "year": "2017",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 同性",
    "category": "历史",
    "description": "老戏骨与偶像歌手排练同性恋舞台剧，入戏太深让现实中的女友沦为观众。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "戏假情真",
      "娱乐圈",
      "年龄差"
    ]
  },
  {
    "title": "我你他她",
    "href": "detail/movie-0051.html",
    "cover": "51.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑剧情",
    "category": "动作",
    "description": "停车场的一具尸体，牵扯出三个互不相识却拥有同一张脸的“陌生人”。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "心理",
      "多重人格",
      "叙事诡计"
    ]
  },
  {
    "title": "儿女英雄",
    "href": "detail/movie-0052.html",
    "cover": "52.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭 / 喜剧 / 都市",
    "category": "纪录",
    "description": "北京老胡同里的一对退休父母，在儿子儿媳躺平、女儿丁克、孙子沉迷电竞的混乱中，发动了一场“家庭再就业”运动。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "养老",
      "二胎",
      "中年危机",
      "胡同生活"
    ]
  },
  {
    "title": "放牛班的春天",
    "href": "detail/movie-0053.html",
    "cover": "53.jpg",
    "year": "2004",
    "region": "法国",
    "type": "电影",
    "genre": "音乐剧情",
    "category": "家庭",
    "description": "失意音乐教师来到问题儿童寄宿学校，用合唱团唤醒了一群被放弃的孩子。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "教育",
      "合唱团",
      "治愈",
      "经典"
    ]
  },
  {
    "title": "阿班与裘迪",
    "href": "detail/movie-0054.html",
    "cover": "54.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 同性",
    "category": "爱情",
    "description": "患失语症的阿班为了寻找父亲，偷了裘迪的机车，而裘迪为了夺回父亲的遗物，踏上了同一趟旅程。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "公路",
      "失语症",
      "救赎",
      "乡土",
      "陪伴"
    ]
  },
  {
    "title": "天使图书馆",
    "href": "detail/movie-0055.html",
    "cover": "55.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻、治愈、剧情",
    "category": "喜剧",
    "description": "人死后会进入一座巨大图书馆，每本书都是一段被遗忘的人生故事。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "图书馆",
      "死后世界",
      "记忆",
      "书与人生"
    ]
  },
  {
    "title": "毒。诫",
    "href": "detail/movie-0056.html",
    "cover": "56.jpg",
    "year": "2017",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪、剧情、传记",
    "category": "青春",
    "description": "六七十年代香港慈云山十三太保之首茅趸华，从吸毒贩毒到担任戒毒会主席的真实改编。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "九龙城寨",
      "黑道风云",
      "戒毒重生",
      "兄弟义气"
    ]
  },
  {
    "title": "幻影杀机",
    "href": "detail/movie-0057.html",
    "cover": "57.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 科幻",
    "category": "家庭",
    "description": "特工穿上能折射光线的隐身衣执行暗杀，却发现衣服有意识，在慢慢吞噬他的身体。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "特工",
      "光学隐身",
      "硬核打斗",
      "阴谋"
    ]
  },
  {
    "title": "春归",
    "href": "detail/movie-0058.html",
    "cover": "58.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 农村",
    "category": "古装",
    "description": "儿子要把独居老母接进城，老人抵死不走，她说：“我不是留恋老屋，我是怕走了，你爸的魂回来找不到人。”",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "留守老人",
      "土地情结",
      "城镇化阵痛",
      "代际和解"
    ]
  },
  {
    "title": "我们的餐桌",
    "href": "detail/movie-0059.html",
    "cover": "59.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情 / 喜剧 / 家庭",
    "category": "喜剧",
    "description": "三代女人因泡菜手艺展开爆笑又心酸的餐桌争夺战，却意外揭开了家族秘方。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "美食",
      "代际冲突",
      "治愈",
      "搞笑",
      "传统"
    ]
  },
  {
    "title": "以青春之名",
    "href": "detail/movie-0060.html",
    "cover": "60.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "青春 / 励志",
    "category": "家庭",
    "description": "五个被退学的“问题学生”在垃圾站里组建了一支乐队，要用音乐证明自己不是垃圾。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "校园",
      "乐队",
      "叛逆",
      "成长",
      "热血"
    ]
  },
  {
    "title": "卡彼尼",
    "href": "detail/movie-0061.html",
    "cover": "61.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 传记",
    "category": "历史",
    "description": "二十世纪初，一位意大利孤儿靠一把破手风琴，在纽约街头奏响了跨越阶级的移民史诗。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "音乐家",
      "底层奋斗",
      "意大利移民",
      "手风琴"
    ]
  },
  {
    "title": "潜龙突击队",
    "href": "detail/movie-0062.html",
    "cover": "62.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 战争, 冒险",
    "category": "家庭",
    "description": "退役特种兵重组“潜龙”小队潜入金三角，却发现要救的人质，正是当年出卖他们导致全军覆没的叛徒。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "特种兵",
      "东南亚",
      "人质救援",
      "丛林战",
      "硬汉群像"
    ]
  },
  {
    "title": "非常夏日",
    "href": "detail/movie-0063.html",
    "cover": "63.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，家庭，悬疑",
    "category": "青春",
    "description": "少女程橙被困在高考结束那天的暑假第一天，每次循环她都能发现这个看似平静的小镇多一桩隐藏的罪恶。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "时空循环",
      "小镇",
      "失踪案"
    ]
  },
  {
    "title": "银翼情人",
    "href": "detail/movie-0064.html",
    "cover": "64.jpg",
    "year": "1992",
    "region": "加拿大",
    "type": "电影",
    "genre": "爱情, 战争",
    "category": "悬疑",
    "description": "二战不列颠空战中，一对从未谋面的笔友飞行员与护士，在炮火中约定此生不渝。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "二战",
      "飞行员",
      "绝恋",
      "书信",
      "古典"
    ]
  },
  {
    "title": "黄金雨",
    "href": "detail/movie-0065.html",
    "cover": "65.jpg",
    "year": "2021",
    "region": "印度",
    "type": "电影",
    "genre": "奇幻, 剧情",
    "category": "音乐",
    "description": "干旱村庄突然天降黄金雨，但每捡一块黄金，就会有一个村民离奇消失。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "神话",
      "阶级",
      "雨水",
      "黄金",
      "村庄"
    ]
  },
  {
    "title": "露西亚的愿望：魔法时光机",
    "href": "detail/movie-0066.html",
    "cover": "66.jpg",
    "year": "2026",
    "region": "西班牙 / 阿根廷",
    "type": "电影",
    "genre": "家庭 / 奇幻 / 冒险",
    "category": "剧情",
    "description": "七岁女孩露西亚在阁楼发现一台由祖父母的旧收音机改装的时光机，为了阻止父母离婚，她决定回到过去捏合他们的初恋。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "儿童",
      "时间旅行",
      "温情",
      "搞笑",
      "成长"
    ]
  },
  {
    "title": "六十一号的恐怖",
    "href": "detail/movie-0067.html",
    "cover": "67.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "category": "喜剧",
    "description": "网红主播入住废弃公寓61号房直播，却发现自己正被来自镜中世界的“观众”凝视。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "凶宅",
      "都市怪谈",
      "心理惊悚",
      "超自然"
    ]
  },
  {
    "title": "高中新丁",
    "href": "detail/movie-0068.html",
    "cover": "68.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 运动",
    "category": "纪录",
    "description": "一个书呆子为了反抗校霸，加入了全校最弱的橄榄球队，并用高等数学重新定义了战术。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "青春",
      "橄榄球",
      "成长",
      "逆袭",
      "校园欺凌"
    ]
  },
  {
    "title": "地心引力",
    "href": "detail/movie-0069.html",
    "cover": "69.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻/灾难",
    "category": "都市",
    "description": "空间站被碎片摧毁，一名女宇航员被迫独自降落在一颗未知的低重力小行星上。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "太空",
      "孤独",
      "求生",
      "母女"
    ]
  },
  {
    "title": "石头会唱歌",
    "href": "detail/movie-0070.html",
    "cover": "70.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 音乐",
    "category": "家庭",
    "description": "一个五音不全的支教老师，带领一群大山里的留守儿童，用石头敲击出了一支震惊全国的乐队。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "乡村教师",
      "留守儿童",
      "梦想",
      "治愈"
    ]
  },
  {
    "title": "瞒天过海",
    "href": "detail/movie-0071.html",
    "cover": "71.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 剧情",
    "category": "青春",
    "description": "一名金融犯罪调查科的警察自愿被开除，潜入东南亚诈骗集团，却发现总部操盘手竟是他失踪了三年的未婚妻。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "诈骗案",
      "卧底",
      "双面间谍",
      "金融犯罪"
    ]
  },
  {
    "title": "关键密码",
    "href": "detail/movie-0072.html",
    "cover": "72.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻惊悚",
    "category": "家庭",
    "description": "全球加密系统被同一把密钥破解，密码学家发现密钥是她的出生证明编号。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "密码学",
      "AI",
      "末世",
      "解谜"
    ]
  },
  {
    "title": "仙城香姬",
    "href": "detail/movie-0073.html",
    "cover": "73.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "古装 / 奇幻 / 爱情",
    "category": "都市",
    "description": "她是堕入风尘的绝色花魁，却用一缕奇香，搅动了整个仙界。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "仙侠",
      "青楼",
      "香道",
      "虐恋"
    ]
  },
  {
    "title": "米尔格伦实验者",
    "href": "detail/movie-0074.html",
    "cover": "74.jpg",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "genre": "剧情、传记、心理",
    "category": "剧情",
    "description": "为了探究人性之恶，心理学家米尔格伦设计了一场挑战道德底线的电击谎言。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "电击实验",
      "服从权威",
      "人性考验",
      "斯坦福监狱实验",
      "伦理困境"
    ]
  },
  {
    "title": "爱情与信仰之华人儿媳",
    "href": "detail/movie-0075.html",
    "cover": "75.jpg",
    "year": "2018",
    "region": "马来西亚",
    "type": "电视剧",
    "genre": "家庭 / 伦理",
    "category": "青春",
    "description": "一名中国女子嫁入马来西亚传统穆斯林家族，为守护女儿抚养权，她必须在放弃信仰或失去亲情之间做出抉择。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "跨文化冲突",
      "宗教差异",
      "婆媳关系",
      "自我认同"
    ]
  },
  {
    "title": "刑警张玉贵",
    "href": "detail/movie-0076.html",
    "cover": "76.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "刑侦, 悬疑",
    "category": "历史",
    "description": "即将退休的老刑警张玉贵，在整理旧档案时发现了一本“幽灵笔记”，牵出了几桩跨越二十年的完美犯罪。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "纪实风格",
      "老刑警",
      "积案",
      "人性"
    ]
  },
  {
    "title": "友‧舞‧爱",
    "href": "detail/movie-0077.html",
    "cover": "77.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "剧情 / 歌舞 / 青春",
    "category": "科幻",
    "description": "一群被家人嫌弃的退休阿叔阿姨组成街舞团，只为在社区才艺大赛上赢回被拆的活动中心。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "街舞",
      "中老年",
      "废材逆袭",
      "社区中心"
    ]
  },
  {
    "title": "独角兽猎人",
    "href": "detail/movie-0078.html",
    "cover": "78.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "奇幻, 冒险",
    "category": "都市",
    "description": "在冷漠的大都市里，一个自闭症女孩声称自己看到了独角兽，没有人相信她。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "都市传说",
      "少女",
      "治愈",
      "奇幻生物",
      "成长"
    ]
  },
  {
    "title": "大唐歌飞",
    "href": "detail/movie-0079.html",
    "cover": "79.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装, 音乐",
    "category": "悬疑",
    "description": "武则天时期，出身乐户的天才女乐师卷入宫廷乐府的权力斗争，用音乐拨动大唐的命脉。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "唐代",
      "乐府",
      "权谋",
      "爱情",
      "诗词"
    ]
  },
  {
    "title": "忧国的莫里亚蒂第一季",
    "href": "detail/movie-0080.html",
    "cover": "80.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "genre": "悬疑 / 犯罪 / 历史",
    "category": "爱情",
    "description": "少年莫里亚蒂决心用犯罪来摧毁腐败的英国贵族制度，而他最大的对手将是福尔摩斯。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "福尔摩斯",
      "反派主角",
      "贵族批判"
    ]
  },
  {
    "title": "回忆之地",
    "href": "detail/movie-0081.html",
    "cover": "81.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 温情",
    "category": "音乐",
    "description": "一家濒临倒闭的旧书店里，每一本旧书都能带你回到书中主人最难忘的那一天。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "小镇",
      "旧书店",
      "记忆",
      "治愈",
      "时空交错"
    ]
  },
  {
    "title": "夺命之爱",
    "href": "detail/movie-0082.html",
    "cover": "82.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "心理惊悚",
    "category": "青春",
    "description": "一个沉迷于虚拟偶像的宅男，意外发现自己的暗恋对象竟是网络霸凌的施害者，于是展开了一场“矫正之爱”。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "病态迷恋",
      "跟踪狂",
      "社交媒体",
      "身份替换"
    ]
  },
  {
    "title": "金鹰访谈2014",
    "href": "detail/movie-0083.html",
    "cover": "83.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 职场",
    "category": "纪录",
    "description": "一档王牌访谈节目的幕后，藏着比台上更疯狂的真相。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "电视台",
      "访谈节目",
      "幕后",
      "名利场"
    ]
  },
  {
    "title": "黑暗时代",
    "href": "detail/movie-0084.html",
    "cover": "84.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "奇幻、动作、冒险",
    "category": "家庭",
    "description": "在魔法消失的世界，最后一个不会魔法的铁匠之子，得到一把能吸收一切黑暗的哑剑，被推上救世主之位。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "中世纪",
      "魔法消亡",
      "骑士",
      "末世"
    ]
  },
  {
    "title": "他们克隆了蒂龙",
    "href": "detail/movie-0085.html",
    "cover": "85.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "科幻，悬疑",
    "category": "喜剧",
    "description": "一个毒贩、一个性工作者和一个神父联手揭开惊天秘密：美国政府正在批量克隆贫困黑人替代原始人口。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "克隆人",
      "阴谋论",
      "黑人剥削",
      "社会讽刺",
      "Netflix"
    ]
  },
  {
    "title": "到此一游",
    "href": "detail/movie-0086.html",
    "cover": "86.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 公路",
    "category": "科幻",
    "description": "一群网红为了流量去无人区直播探险，却接连收到来自未来的“到此一游”雕刻。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "犯罪",
      "黑色幽默",
      "网络热点"
    ]
  },
  {
    "title": "只好背叛地球了",
    "href": "detail/movie-0087.html",
    "cover": "87.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 科幻, 爱情",
    "category": "爱情",
    "description": "一个被派来毁灭地球的外星打工人，却因为沉迷于公司的996福报，决定背叛母星。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "外星人",
      "社畜",
      "卧底",
      "沙雕"
    ]
  },
  {
    "title": "保险箱",
    "href": "detail/movie-0088.html",
    "cover": "88.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚 / 犯罪 / 悬疑",
    "category": "动作",
    "description": "银行金库内，劫匪与人质共处密室，劫匪要求打开保险箱，人质却低声说：里面是我丈夫的尸体。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "密室",
      "银行",
      "人质",
      "反转",
      "内鬼"
    ]
  },
  {
    "title": "星河战队：火星叛国者",
    "href": "detail/movie-0089.html",
    "cover": "89.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻",
    "category": "奇幻",
    "description": "一名联邦逃兵被卷入火星殖民地的人类内战，并发现了虫族的进化秘密。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "动作",
      "太空",
      "虫族"
    ]
  },
  {
    "title": "美女与猎犬",
    "href": "detail/movie-0090.html",
    "cover": "90.jpg",
    "year": "2019",
    "region": "突尼斯",
    "type": "电影",
    "genre": "剧情惊悚",
    "category": "爱情",
    "description": "一名被警察性侵的女大学生在一天之内辗转多个机构申诉，每个地方都把她当成“猎犬”而非受害者。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "女性困境",
      "实时叙事",
      "社会暴力",
      "长镜头",
      "真实改编"
    ]
  },
  {
    "title": "爱神一号",
    "href": "detail/movie-0091.html",
    "cover": "91.jpg",
    "year": "1985",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 科幻 / 喜剧",
    "category": "音乐",
    "description": "富二代发明家造出“爱神一号”恋爱程序，却发现自己爱上了测试员，程序也失控了。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "香港电影",
      "爱情科幻",
      "人工智慧",
      "郑浩南",
      "叶倩文"
    ]
  },
  {
    "title": "耍宝警探",
    "href": "detail/movie-0092.html",
    "cover": "92.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "category": "励志",
    "description": "一位靠搞笑视频破案的网红警探，被迫与严守教条的学院派女督察搭档，调查一起离奇的名画失窃案。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "双男主",
      "乌龙搭档",
      "港式无厘头",
      "破案",
      "搞笑"
    ]
  },
  {
    "title": "抵抗的风景",
    "href": "detail/movie-0093.html",
    "cover": "93.jpg",
    "year": "2023",
    "region": "丹麦",
    "type": "电影",
    "genre": "剧情，历史，战争",
    "category": "喜剧",
    "description": "二战丹麦，一位风景画家用画笔记录德军布防，将艺术变成最温柔的子弹。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "二战",
      "抵抗运动",
      "艺术家",
      "沉默的力量"
    ]
  },
  {
    "title": "悬赏",
    "href": "detail/movie-0094.html",
    "cover": "94.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪",
    "category": "历史",
    "description": "落魄保安在通缉令上发现自己长得像悬赏两百万的逃犯，于是决定冒充他去自首领赏。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "黑色幽默",
      "公路片",
      "追凶"
    ]
  },
  {
    "title": "他们的后知后觉",
    "href": "detail/movie-0095.html",
    "cover": "95.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "纪录",
    "description": "高中时他暗恋她，大学时她倒追他，工作了两人终于在一起，却发现喜欢的是不同时期的彼此。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "青春",
      "错位",
      "时间跨度",
      "遗憾"
    ]
  },
  {
    "title": "申社长计划",
    "href": "detail/movie-0096.html",
    "cover": "96.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪, 动作",
    "category": "音乐",
    "description": "一个黑帮社长主动向警方自首，不是为了赎罪，而是为了杀死监狱里的另一个人。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "黑帮",
      "卧底",
      "反转",
      "孤胆英雄",
      "暴力美学"
    ]
  },
  {
    "title": "非关男孩",
    "href": "detail/movie-0097.html",
    "cover": "97.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧, 剧情",
    "category": "悬疑",
    "description": "一个崇尚不婚不孩的浪荡公子哥，突然被法院告知他有一个12岁的儿子，而且儿子已经在他家门口住了三天。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "单身父亲",
      "育儿",
      "成长"
    ]
  },
  {
    "title": "辛德勒的名单国语",
    "href": "detail/movie-0098.html",
    "cover": "98.jpg",
    "year": "2024",
    "region": "中国大陆 (配音版)",
    "type": "电影",
    "genre": "历史、战争、传记",
    "category": "家庭",
    "description": "经典名作首次推出官方国语配音版，顶级声优阵容重新诠释那段最黑暗也最温暖的历史。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "经典重配",
      "奥斯卡·辛德勒",
      "大屠杀",
      "人道主义",
      "全明星配音"
    ]
  },
  {
    "title": "无十字架的墓地",
    "href": "detail/movie-0099.html",
    "cover": "99.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情, 历史, 战争",
    "category": "家庭",
    "description": "二战末期，一个无神论的德军战俘被要求去为盟军阵亡士兵挖掘墓地，但他拒绝放置十字架。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "二战",
      "战俘营",
      "人性拷问",
      "宗教反思",
      "黑白影像"
    ]
  },
  {
    "title": "等待，是为了和你相遇",
    "href": "detail/movie-0100.html",
    "cover": "100.jpg",
    "year": "2007",
    "region": "日本",
    "type": "电影",
    "genre": "爱情, 剧情, 奇幻",
    "category": "爱情",
    "description": "一对因误会分开的恋人，她陷入长眠，他便用余生守候一个永远不会到来的答案。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "纯爱",
      "植物人",
      "等待",
      "命运",
      "催泪"
    ]
  },
  {
    "title": "潘朵拉计划",
    "href": "detail/movie-0101.html",
    "cover": "101.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 悬疑",
    "category": "奇幻",
    "description": "一个旨在清除人类“暴力基因”的秘密计划，却让所有接受改造的人开始失去“恐惧”能力，并最终丧失人性。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "硬科幻",
      "基因编辑",
      "政府阴谋",
      "群像"
    ]
  },
  {
    "title": "007大破天幕杀机",
    "href": "detail/movie-0102.html",
    "cover": "102.jpg",
    "year": "2025",
    "region": "英国 / 美国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 冒险",
    "category": "奇幻",
    "description": "007的过往任务中出现了一个代号“天幕”的漏洞，如今这个漏洞正在猎杀所有在职特工。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "特工",
      "谍战",
      "高科技",
      "全球追杀",
      "爆炸"
    ]
  },
  {
    "title": "9界线",
    "href": "detail/movie-0103.html",
    "cover": "103.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情，悬疑，奇幻",
    "category": "爱情",
    "description": "东京九个互不相识的普通人，身上出现了神秘的数字纹身，每个人必须在倒数归零前完成一项“指令”。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "穿越",
      "都市传说",
      "数字诅咒",
      "生存游戏"
    ]
  },
  {
    "title": "退休大赢家",
    "href": "detail/movie-0104.html",
    "cover": "104.jpg",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 家庭, 剧情",
    "category": "纪录",
    "description": "劳碌半生的公务员退休第一天意外中得千万欧元，他却发现真正的麻烦刚刚开始。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "退休",
      "彩票",
      "家庭矛盾",
      "小镇",
      "老年生活"
    ]
  },
  {
    "title": "外交秘闻",
    "href": "detail/movie-0105.html",
    "cover": "105.jpg",
    "year": "2026",
    "region": "法国",
    "type": "剧集",
    "genre": "政治/惊悚",
    "category": "动作",
    "description": "1962年，一名法国外交官在古巴导弹危机期间被困莫斯科，手中握有足以避免核战的绝密录音带。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "冷战",
      "外交博弈",
      "暗战"
    ]
  },
  {
    "title": "再见了木星",
    "href": "detail/movie-0106.html",
    "cover": "106.jpg",
    "year": "2027",
    "region": "美国 / 中国大陆",
    "type": "电影",
    "genre": "科幻 / 灾难",
    "category": "青春",
    "description": "当木星的引力异常将吞噬地球时，一支由死刑犯组成的敢死队被派往那颗气态巨行星执行自杀式引爆任务。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "太空",
      "木星",
      "牺牲",
      "救援",
      "硬科幻"
    ]
  },
  {
    "title": "爱情记事",
    "href": "detail/movie-0107.html",
    "cover": "107.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 青春",
    "category": "悬疑",
    "description": "学霸言默在毕业典礼上向学渣乔一表白，却在第二天因车祸失忆，此后每年夏天，他都会重新爱上她，然后再忘记。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "校园恋爱",
      "虐恋",
      "失忆梗"
    ]
  },
  {
    "title": "简妮",
    "href": "detail/movie-0108.html",
    "cover": "108.jpg",
    "year": "2024",
    "region": "法国 / 美国",
    "type": "剧集",
    "genre": "剧情 / 传记",
    "category": "古装",
    "description": "一位20世纪初的法国女佣，偷偷写下了惊世骇俗的小说，直到一百年后才被人发现。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "女性",
      "文学",
      "独立",
      "时代跨越"
    ]
  },
  {
    "title": "逐爱之旅",
    "href": "detail/movie-0109.html",
    "cover": "109.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情，剧情",
    "category": "爱情",
    "description": "一场车祸让她失去十年记忆，醒来时未婚夫已成仇人，唯独那个送外卖的少年知晓一切真相。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "公路",
      "救赎",
      "错位时空"
    ]
  },
  {
    "title": "蜜糖儿",
    "href": "detail/movie-0110.html",
    "cover": "110.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情，音乐",
    "category": "家庭",
    "description": "五位练习生组成女团“蜜糖儿”，在残酷的娱乐圈里追逐梦想并守护彼此。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "偶像",
      "成长",
      "友情",
      "娱乐圈"
    ]
  },
  {
    "title": "怒火街头2国语",
    "href": "detail/movie-0111.html",
    "cover": "111.jpg",
    "year": "2013",
    "region": "中国香港",
    "type": "剧集",
    "genre": "动作， 律政， 都市",
    "category": "音乐",
    "description": "草根大状罗力亚回归深水埗，为街坊讨公道，却发现自己要告的竟是失散多年的亲生儿子。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "香港",
      "律师",
      "草根",
      "正义",
      "粤语配音"
    ]
  },
  {
    "title": "比安布尔更黑",
    "href": "detail/movie-0112.html",
    "cover": "112.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "音乐",
    "description": "网上流传着一款名为“比安布尔”的神秘黑色应用程序，谁删掉它，谁就会在七天内离奇死亡。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "心理惊悚",
      "都市传说",
      "反转"
    ]
  },
  {
    "title": "爱神2004",
    "href": "detail/movie-0113.html",
    "cover": "113.jpg",
    "year": "2004",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 剧情 / 文艺",
    "category": "古装",
    "description": "在2004年的平安夜，一家即将歇业的旧书店里，三对失意的男女通过一本《爱神》漫画，窥见了彼此命运的交织。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "都市寂寞",
      "情欲流转",
      "王家卫风格"
    ]
  },
  {
    "title": "乐园幻景",
    "href": "detail/movie-0114.html",
    "cover": "114.jpg",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "悬疑、奇幻",
    "category": "动作",
    "description": "为了寻找十年前在游乐园失踪的妹妹，姐姐每晚都会梦游进入一座诡异且不断变化的幻景乐园。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "废弃游乐园",
      "失踪谜案",
      "超现实",
      "心理探索",
      "视觉奇观"
    ]
  },
  {
    "title": "豆豆饭饭",
    "href": "detail/movie-0115.html",
    "cover": "115.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 家庭 / 美食",
    "category": "纪录",
    "description": "在首尔经营了四十年的小饭馆即将关门，叛逆的女儿回来帮母亲做最后一桌“告别宴”。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "母女",
      "韩餐",
      "治愈",
      "传承",
      "温情"
    ]
  },
  {
    "title": "表象之下",
    "href": "detail/movie-0116.html",
    "cover": "116.jpg",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚 / 剧情",
    "category": "动作",
    "description": "模范妻子兼花艺师深夜偷偷潜入邻居家，却意外目睹了一场精心伪装的“自然死亡”。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "小镇",
      "秘密",
      "双面人生",
      "层层反转"
    ]
  },
  {
    "title": "辐射",
    "href": "detail/movie-0117.html",
    "cover": "117.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻, 冒险, 末日",
    "category": "科幻",
    "description": "33号避难所的一名“天真”居民被迫踏入废土，才发现她学的所有“常识”全是谎言。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "废土",
      "游戏改编",
      "避难所",
      "黑色幽默"
    ]
  },
  {
    "title": "布朗蒂姊妹",
    "href": "detail/movie-0118.html",
    "cover": "118.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "传记, 剧情",
    "category": "音乐",
    "description": "在约克郡的荒野上，勃朗特三姐妹如何在贫穷与偏见中写出传世名著？",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "文学",
      "女性",
      "姐妹",
      "19世纪"
    ]
  },
  {
    "title": "浴血魔鬼山",
    "href": "detail/movie-0119.html",
    "cover": "119.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "战争 / 动作",
    "category": "家庭",
    "description": "二战山地猎兵连被困魔鬼山，面对德军和雪崩，唯一的生路是彼此。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "山地战",
      "绝境求生",
      "兄弟连"
    ]
  },
  {
    "title": "绝命时钟2:22",
    "href": "detail/movie-0120.html",
    "cover": "120.jpg",
    "year": "2017",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "惊悚 / 爱情",
    "category": "励志",
    "description": "每天下午2:22，他都会看到同一场谋杀幻象，而凶手就在他身边。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "时间循环",
      "前世记忆",
      "纽约",
      "命中注定"
    ]
  },
  {
    "title": "灵异村庄",
    "href": "detail/movie-0121.html",
    "cover": "121.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "category": "科幻",
    "description": "一座村庄每20年就会“多出”一户人家，外来调查者发现，他们自己也是这个诅咒的一部分。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "乡村诅咒",
      "民俗恐怖",
      "轮回",
      "高能反转"
    ]
  },
  {
    "title": "诱人小恶魔",
    "href": "detail/movie-0122.html",
    "cover": "122.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电视剧",
    "genre": "爱情 / 喜剧 / 奇幻",
    "category": "悬疑",
    "description": "她是你公司新来的清纯实习生，但你不知道，她来自地狱，任务是让你三个月内自愿签下灵魂契约。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "恶魔",
      "契约",
      "职场",
      "反差萌",
      "恋爱"
    ]
  },
  {
    "title": "非常警事",
    "href": "detail/movie-0123.html",
    "cover": "123.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "刑侦, 喜剧",
    "category": "都市",
    "description": "城南派出所来了个北大心理学博士当实习生，他把“非暴力沟通”用在了审嫌犯上，结果笑料百出。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "派出所",
      "日常",
      "黑色幽默"
    ]
  },
  {
    "title": "那你来做做看啊",
    "href": "detail/movie-0124.html",
    "cover": "124.jpg",
    "year": "2023",
    "region": "中国",
    "type": "综艺",
    "genre": "真人秀 / 职场",
    "category": "悬疑",
    "description": "让吐槽老板和专家的普通人，真正上手做一天对方的工作，场面一度非常“爆炸”。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "职场",
      "素人",
      "技能交换",
      "反内卷"
    ]
  },
  {
    "title": "我们的虚实人生",
    "href": "detail/movie-0125.html",
    "cover": "125.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情 / 科幻 / 心理",
    "category": "科幻",
    "description": "一款超级真实的VR社交软件让用户活在两个世界里，直到有一天，所有人在虚拟世界里的死亡变成了现实中的脑死亡。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "VR社交",
      "身份认同",
      "虚实交错",
      "都市孤独"
    ]
  },
  {
    "title": "魔幻灰姑娘",
    "href": "detail/movie-0126.html",
    "cover": "126.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻、爱情、喜剧",
    "category": "动作",
    "description": "灰姑娘不靠仙女教母，而是用元宇宙APP黑进王子舞会系统。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "元宇宙",
      "AI魔法",
      "反套路",
      "黑色幽默"
    ]
  },
  {
    "title": "生死路上",
    "href": "detail/movie-0127.html",
    "cover": "127.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪、动作、剧情",
    "category": "家庭",
    "description": "一名卧底警察在黑帮混成二把手，却在即将收网时发现自己被警方抛弃，不得不走上真正的犯罪之路。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "黑帮",
      "卧底",
      "兄弟情",
      "悲情"
    ]
  },
  {
    "title": "三剑客新传",
    "href": "detail/movie-0128.html",
    "cover": "128.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "动作 / 冒险",
    "category": "喜剧",
    "description": "三个出身底层的少女偷走三把传奇佩剑，冒充火枪手劫富济贫，却意外卷入王位阴谋。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "女版剑客",
      "蒸汽朋克",
      "侠盗联盟"
    ]
  },
  {
    "title": "善心满载仁爱堂2023",
    "href": "detail/movie-0129.html",
    "cover": "129.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "综艺 / 真人秀",
    "genre": "公益, 真人秀",
    "category": "纪录",
    "description": "香港群星深入基层，挑战极限职业，只为给仁爱堂筹集善款，过程笑料与泪水齐飞。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "慈善",
      "TVB",
      "筹款",
      "明星体验"
    ]
  },
  {
    "title": "歌舞春光",
    "href": "detail/movie-0130.html",
    "cover": "130.jpg",
    "year": "2018",
    "region": "印度",
    "type": "电影",
    "genre": "歌舞, 爱情, 剧情",
    "category": "剧情",
    "description": "在印巴实控线附近，一名印度舞者和一名巴基斯坦歌手，用电台情歌秘密相爱了三年。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "宝莱坞",
      "克什米尔",
      "绝境之恋"
    ]
  },
  {
    "title": "紧急呼救：纳什维尔",
    "href": "detail/movie-0131.html",
    "cover": "131.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 动作",
    "category": "家庭",
    "description": "纳什维尔乡村音乐节遭遇龙卷风+化学泄漏，急救队要在24小时内救出困在“音乐宫殿”内的三千人。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "消防",
      "急救",
      "衍生剧",
      "乡村音乐"
    ]
  },
  {
    "title": "隔壁的吸血鬼美眉",
    "href": "detail/movie-0132.html",
    "cover": "132.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 奇幻, 日常",
    "category": "动作",
    "description": "普通女高中生搬进新家，发现隔壁邻居是个活了三百年的家里蹲吸血鬼。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "百合",
      "合租",
      "不死族",
      "搞笑"
    ]
  },
  {
    "title": "热舞飞扬：舞出自由",
    "href": "detail/movie-0133.html",
    "cover": "133.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "歌舞 / 剧情",
    "category": "纪录",
    "description": "女子监狱里成立了一支秘密街舞队，用每一次放风的三分钟，排练一场逃向自由的演出。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "街舞",
      "监狱",
      "自由",
      "反抗"
    ]
  },
  {
    "title": "潜罪",
    "href": "detail/movie-0134.html",
    "cover": "134.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪心理",
    "category": "音乐",
    "description": "缉毒警失忆后醒来发现自己成了毒枭的座上宾，且身上沾满同袍的血。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "卧底缉毒",
      "记忆碎片",
      "身份迷失",
      "硬核动作"
    ]
  },
  {
    "title": "11度青春之《江湖再见》",
    "href": "detail/movie-0135.html",
    "cover": "135.jpg",
    "year": "2011",
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 短片",
    "category": "励志",
    "description": "在中关村卖电脑的五个外地青年，在即将被拆迁的电子卖场最后一夜，决定用自己的方式“结义”。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "中关村",
      "北漂",
      "江湖情"
    ]
  },
  {
    "title": "铃木家的谎言",
    "href": "detail/movie-0136.html",
    "cover": "136.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "家庭",
    "category": "科幻",
    "description": "母亲去世后，父亲假装老年痴呆，只为让孩子们每周回家吃饭。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "催泪",
      "谎言",
      "和解"
    ]
  },
  {
    "title": "大胜利者",
    "href": "detail/movie-0137.html",
    "cover": "137.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "运动 / 励志 / 喜剧",
    "category": "动作",
    "description": "一个中年废柴在前女友婚礼上被嘲讽，他报名了同名乒乓球赛想证明自己，却发现参赛者都是来复仇的。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "乒乓球",
      "废柴",
      "复仇",
      "逆袭",
      "中年危机"
    ]
  },
  {
    "title": "江分利满先生的优雅生活",
    "href": "detail/movie-0138.html",
    "cover": "138.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "category": "奇幻",
    "description": "一名中年上班族为了维持“优雅生活”的人设，在破产边缘同时伪装成富豪、穷鬼和艺术家。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "中年危机",
      "黑色幽默",
      "职场讽刺"
    ]
  },
  {
    "title": "英雄利沙比：农民起义",
    "href": "detail/movie-0139.html",
    "cover": "139.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "历史动作",
    "category": "喜剧",
    "description": "十四世纪法国，农奴利沙比揭竿而起，用草叉和怒火对抗骑士的铁蹄与教皇的赎罪券。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "中世纪",
      "农民起义",
      "真实人物",
      "史诗",
      "冷兵器"
    ]
  },
  {
    "title": "七侠荡寇志",
    "href": "detail/movie-0140.html",
    "cover": "140.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "动作，西部，冒险",
    "category": "音乐",
    "description": "七名身份各异的亡命之徒受雇于小镇居民，对抗残暴的资本家和其私人军队。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "枪战",
      "团队",
      "保卫家园"
    ]
  },
  {
    "title": "大清炮队",
    "href": "detail/movie-0141.html",
    "cover": "141.jpg",
    "year": "1987",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史 / 战争",
    "category": "纪录",
    "description": "鸦片战争期间，一支被朝廷遗忘的旧式炮队，面对英国舰队的坚船利炮，用血肉之躯捍卫了清军最后的尊严。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "晚清",
      "鸦片战争",
      "火炮",
      "民族悲歌"
    ]
  },
  {
    "title": "长生界",
    "href": "detail/movie-0142.html",
    "cover": "142.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻 / 悬疑",
    "category": "奇幻",
    "description": "一家地下机构成功实现意识永生，却发现所有“长生者”都在第365天陷入不可逆的疯狂。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "永生实验",
      "时间循环",
      "伦理拷问",
      "记忆移植"
    ]
  },
  {
    "title": "刑警哈里根",
    "href": "detail/movie-0143.html",
    "cover": "143.jpg",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "genre": "犯罪 / 悬疑 / 剧情",
    "category": "纪录",
    "description": "酗酒成性的老刑警哈里根在调查一桩模仿开膛手杰克的连环杀人案时，发现凶手竟然一直在给他寄破案线索。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "硬汉侦探",
      "英伦风",
      "连环凶案",
      "写实"
    ]
  },
  {
    "title": "婚礼客人",
    "href": "detail/movie-0144.html",
    "cover": "144.jpg",
    "year": "2018",
    "region": "英国 / 印度",
    "type": "电影",
    "genre": "剧情 / 惊悚 / 犯罪",
    "category": "励志",
    "description": "一个冷血的职业杀手接单前往巴基斯坦婚礼上绑架新娘，却发现自己爱上了目标。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "异国绑架",
      "黑色电影",
      "一夜迷情",
      "亡命旅途"
    ]
  },
  {
    "title": "歌台艳帜",
    "href": "detail/movie-0145.html",
    "cover": "145.jpg",
    "year": "1991",
    "region": "香港",
    "type": "电影",
    "genre": "歌舞、情色、剧情",
    "category": "动作",
    "description": "八十年代香港歌厅最后一夜，三个女人的歌声将揭开一桩尘封五年的命案。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "夜总会",
      "歌女",
      "黑帮",
      "三角恋",
      "时代挽歌"
    ]
  },
  {
    "title": "阿富汗的爱情颂歌",
    "href": "detail/movie-0146.html",
    "cover": "146.jpg",
    "year": "2025",
    "region": "伊朗 / 法国",
    "type": "电影",
    "genre": "剧情 / 战争",
    "category": "励志",
    "description": "塔利班统治下，女诗人伪装成男歌手与地下抵抗者相爱，用歌声传递革命暗号。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "禁忌之恋",
      "塔利班",
      "诗歌",
      "女性主义"
    ]
  },
  {
    "title": "救命！我的雪人在融化",
    "href": "detail/movie-0147.html",
    "cover": "147.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻、儿童、冒险",
    "category": "历史",
    "description": "男孩比利堆的雪人突然开口说话，并告诉他：如果不把雪人送到北极，整个冬天的魔法都会消失。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "雪人",
      "气候变暖",
      "北极冒险",
      "环保",
      "友谊"
    ]
  },
  {
    "title": "丽人保镖之期待再见",
    "href": "detail/movie-0148.html",
    "cover": "148.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "动作 / 悬疑",
    "category": "科幻",
    "description": "王牌女保镖最后一次任务：保护当年害死搭档的仇人，而杀手正是她以为死去的搭档本人。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "女保镖",
      "姐妹情",
      "复仇",
      "跨国犯罪",
      "短平快"
    ]
  },
  {
    "title": "罪恶黑名单第十季",
    "href": "detail/movie-0149.html",
    "cover": "149.jpg",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪 / 悬疑 / 剧情",
    "category": "历史",
    "description": "红魔交出了最后一个名字，是他自己的真名。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "最终季",
      "红魔归来",
      "终极黑名单",
      "身份揭秘"
    ]
  },
  {
    "title": "恋上女镖师",
    "href": "detail/movie-0150.html",
    "cover": "150.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 古装, 动作",
    "category": "喜剧",
    "description": "皇帝赐婚，京城病弱王爷被迫迎娶了西北第一女镖师，新婚夜王爷被新娘当成了人肉沙包。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "女镖师",
      "王爷",
      "押镖",
      "先婚后爱",
      "江湖"
    ]
  },
  {
    "title": "女孩和蜘蛛",
    "href": "detail/movie-0151.html",
    "cover": "1.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "剧情, 心理, 悬疑",
    "category": "喜剧",
    "description": "母亲再婚当晚，女孩发现房间墙壁里爬出无数蜘蛛，而继父说这是她幻想出来的。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "童年创伤",
      "隐喻",
      "女性",
      "室内剧",
      "细腻"
    ]
  },
  {
    "title": "长途吓机",
    "href": "detail/movie-0152.html",
    "cover": "2.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "category": "音乐",
    "description": "一架深夜红眼航班上，一个害怕坐飞机的小女孩对父亲说，她看到有个没脸的女人正一个接一个地拔掉所有乘客的氧气面罩。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "密闭空间",
      "高空恐怖",
      "超自然现象",
      "反转结局"
    ]
  },
  {
    "title": "陨石噩梦",
    "href": "detail/movie-0153.html",
    "cover": "3.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "category": "科幻",
    "description": "一颗陨石击中了市中心的大厦，困在电梯里的五个人必须在氧气耗尽前找到逃生通道。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "天灾降临",
      "密室逃生",
      "倒计时"
    ]
  },
  {
    "title": "七十二家房客第十部粤语",
    "href": "detail/movie-0154.html",
    "cover": "4.jpg",
    "year": "2024",
    "region": "中国香港 / 中国大陆",
    "type": "电视剧",
    "genre": "喜剧 / 家庭",
    "category": "爱情",
    "description": "老房客们迎来租客新物种：AI机器人、脱口秀演员和一只会说粤语的鹦鹉。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "粤语",
      "市井",
      "情怀",
      "单元剧"
    ]
  },
  {
    "title": "浪漫的蓝色2000",
    "href": "detail/movie-0155.html",
    "cover": "5.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "爱情，科幻",
    "category": "励志",
    "description": "2040年，人们可以删除痛苦记忆，但一个女孩却想找回那段被删掉的、关于“蓝色”的初恋。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "记忆删除",
      "颜色",
      "千禧年",
      "怀旧"
    ]
  },
  {
    "title": "悲剧的诞生",
    "href": "detail/movie-0156.html",
    "cover": "6.jpg",
    "year": "2025",
    "region": "德国",
    "type": "剧集",
    "genre": "哲学、剧情、心理",
    "category": "动作",
    "description": "一个精神科医生发现，自己所有病人的妄想内容，都来自同一本他还没写完的小说。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "尼采",
      "存在主义",
      "烧脑"
    ]
  },
  {
    "title": "霹雳皇龙纪",
    "href": "detail/movie-0157.html",
    "cover": "7.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "武侠 / 奇幻 / 布袋戏",
    "category": "家庭",
    "description": "皇龙现世，三教倾危，一个失忆的刀客发现自己就是被封印的暴君皇龙。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "布袋戏",
      "皇权争斗",
      "神魔对决"
    ]
  },
  {
    "title": "男子游泳部第二季",
    "href": "detail/movie-0158.html",
    "cover": "8.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "动画 / 运动",
    "category": "科幻",
    "description": "全国大赛失利后，游泳部的少年们面临升学与退役的选择，新一届天才新生却闯入了他们的迷茫。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "竞技",
      "游泳",
      "青春",
      "热血",
      "校园"
    ]
  },
  {
    "title": "远距离爱情",
    "href": "detail/movie-0159.html",
    "cover": "9.jpg",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧， 爱情， 剧情",
    "category": "悬疑",
    "description": "纽约女记者与旧金山音乐人相爱，他们约定：每天视频，每两周见一次，绝不撒谎。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "异地恋",
      "都市",
      "真实改编"
    ]
  },
  {
    "title": "青春纪录",
    "href": "detail/movie-0160.html",
    "cover": "10.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情、青春、时代",
    "category": "剧情",
    "description": "四十岁的建筑工头翻看高中日记，决定联系日记里提到的每一个人，弥补当年的遗憾。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "倒叙",
      "中年危机",
      "年少日记",
      "和解"
    ]
  },
  {
    "title": "芝加哥警署第十二季",
    "href": "detail/movie-0161.html",
    "cover": "11.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪",
    "category": "历史",
    "description": "情报组的新任女警督铁腕上位，她要在整顿内部腐败的同时，追捕一个猎杀警察的连环杀手。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "警匪",
      "单元剧",
      "情报组",
      "道德灰色地带"
    ]
  },
  {
    "title": "钻石尘",
    "href": "detail/movie-0162.html",
    "cover": "12.jpg",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "科幻",
    "category": "古装",
    "description": "在西伯利亚的钻石矿深处，科学家挖出了一种能让时间在局部倒流的尘埃。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "极地",
      "硬科幻",
      "灾难",
      "孤独",
      "时间循环"
    ]
  },
  {
    "title": "秃鹰之城",
    "href": "detail/movie-0163.html",
    "cover": "13.jpg",
    "year": "2026",
    "region": "西班牙",
    "type": "电视剧",
    "genre": "悬疑/犯罪",
    "category": "家庭",
    "description": "一座以“欧洲最安全城市”闻名的西班牙小城，其实是由黑帮、政客和开发商共筑的秃鹰巢穴。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "金融黑幕",
      "官僚腐败",
      "复仇"
    ]
  },
  {
    "title": "血泊飞车",
    "href": "detail/movie-0164.html",
    "cover": "14.jpg",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "爱情",
    "description": "婚礼当天，新娘被黑帮灭门，她驾驶着加满油的改装婚车，在澳洲荒野公路上向仇人展开血腥复仇。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "公路追杀",
      "复仇新娘",
      "暴力美学"
    ]
  },
  {
    "title": "战火浮生",
    "href": "detail/movie-0165.html",
    "cover": "15.jpg",
    "year": "1986",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 战争 / 历史",
    "category": "爱情",
    "description": "十八世纪南美丛林，一名耶稣会神父和一名奴隶贩子，在共同保护原住民免遭殖民军屠杀中走向殉道。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "南美",
      "传教士",
      "殖民",
      "配乐史诗"
    ]
  },
  {
    "title": "南极洲140天",
    "href": "detail/movie-0166.html",
    "cover": "16.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "纪录片，冒险",
    "category": "青春",
    "description": "跟随中国科考队员的镜头，记录140天极端环境中人类意志与自然伟力的真实较量。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "探险",
      "真实",
      "自然",
      "孤独",
      "科考"
    ]
  },
  {
    "title": "盗贼爱蜜莉",
    "href": "detail/movie-0167.html",
    "cover": "17.jpg",
    "year": "2025",
    "region": "法国 / 美国",
    "type": "电影",
    "genre": "喜剧 / 犯罪 / 爱情",
    "category": "动作",
    "description": "一位优雅的艺术品大盗在盗窃最后一幅画作时，被一个笨拙却执着的保险调查员缠上了。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "雅贼",
      "法式浪漫",
      "连环计",
      "女性主导"
    ]
  },
  {
    "title": "死了都要性",
    "href": "detail/movie-0168.html",
    "cover": "18.jpg",
    "year": "2021",
    "region": "德国",
    "type": "电影",
    "genre": "喜剧 / 剧情 / 爱情",
    "category": "励志",
    "description": "一个在殡仪馆工作的性爱成瘾者，在遇到了一个患绝症的女孩后，开始重新定义生与死的边界。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "殡仪馆",
      "性爱",
      "荒诞",
      "治愈",
      "老年"
    ]
  },
  {
    "title": "女孩梦三十",
    "href": "detail/movie-0169.html",
    "cover": "19.jpg",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，奇幻，爱情",
    "category": "奇幻",
    "description": "13岁的女孩许愿变成30岁，醒来后美梦成真，却发现成人的世界远比想象中复杂和孤独。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "穿越成长",
      "童真与世故",
      "轻松喜剧",
      "怀旧"
    ]
  },
  {
    "title": "斗舞帮",
    "href": "detail/movie-0170.html",
    "cover": "20.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "歌舞, 动作",
    "category": "家庭",
    "description": "一群街舞高手被迫为黑帮洗钱，他们决定用一场惊天斗舞秀，把黑钱全部跳“没”。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "街舞",
      "跑酷",
      "犯罪",
      "热血"
    ]
  },
  {
    "title": "不死鸟之恋",
    "href": "detail/movie-0171.html",
    "cover": "21.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 奇幻 / 剧情",
    "category": "历史",
    "description": "女友患绝症去世后，男友发现自己可以不断回到过去，但每一次重逢都会缩短她的寿命。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "时间循环",
      "绝症",
      "生死",
      "催泪",
      "救赎"
    ]
  },
  {
    "title": "土豆的美国梦",
    "href": "detail/movie-0172.html",
    "cover": "22.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧 / 家庭 / 冒险",
    "category": "音乐",
    "description": "一颗来自秘鲁的土豆被带到美国超市，他坚信只要进了“白人家庭的冰箱”，就能实现“土豆阶层的美国梦”。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "拟人化",
      "移民",
      "励志",
      "荒诞"
    ]
  },
  {
    "title": "七天七夜",
    "href": "detail/movie-0173.html",
    "cover": "23.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 冒险",
    "category": "青春",
    "description": "七名各怀秘密的游客被困暴风雪中的山顶酒店，每晚死一人，而凶手就在他们中间。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "暴风雪孤岛",
      "密室困局",
      "全员恶人",
      "连环杀人"
    ]
  },
  {
    "title": "仙武传",
    "href": "detail/movie-0174.html",
    "cover": "24.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 仙侠",
    "category": "古装",
    "description": "一个被认为是修仙废柴的少年，发现自己的丹田里封印着一整座上古战场。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "修仙逆袭",
      "废柴体质",
      "宗门争斗",
      "特效大片"
    ]
  },
  {
    "title": "莫茜",
    "href": "detail/movie-0175.html",
    "cover": "25.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "剧情， 悬疑， 心理",
    "category": "喜剧",
    "description": "母亲去世后，女儿回到庄园整理遗物，却发现母亲留下的日记里，住着七个不同的人。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "多重人格",
      "古老庄园",
      "真相探寻"
    ]
  },
  {
    "title": "鬼店另有主",
    "href": "detail/movie-0176.html",
    "cover": "26.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 喜剧",
    "category": "喜剧",
    "description": "三个穷鬼应聘了鬼屋旅馆的店员，才发现闹鬼是真的，而且老板比鬼还狠。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "鬼屋",
      "反转",
      "搞笑",
      "打工仔",
      "黑色幽默"
    ]
  },
  {
    "title": "鬼卧床",
    "href": "detail/movie-0177.html",
    "cover": "27.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "恐怖",
    "category": "悬疑",
    "description": "一张古老的卧床每到子时便会吞噬活人阳气，而它的下一个目标，竟是发现床下密道的年轻护士。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "灵异",
      "心理惊悚",
      "民俗",
      "反转"
    ]
  },
  {
    "title": "刺客教条：权势",
    "href": "detail/movie-0178.html",
    "cover": "28.jpg",
    "year": "2023",
    "region": "美国 / 英国",
    "type": "电视剧 / 迷你剧",
    "genre": "动作 / 科幻 / 历史",
    "category": "历史",
    "description": "1888年伦敦，一名刺客学徒发现开膛手杰克竟是兄弟会高层，为掩盖贫民窟拆迁黑幕而连环杀人。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "游戏改编",
      "刺客兄弟会",
      "维多利亚时代",
      "权力斗争",
      "工业革命"
    ]
  },
  {
    "title": "金斯敦市长第三季",
    "href": "detail/movie-0179.html",
    "cover": "29.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪, 剧情",
    "category": "青春",
    "description": "麦克在女监狱长和黑帮之间走钢丝，却发现真正的敌人是他一手带出来的义子。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "监狱",
      "权力",
      "家族",
      "街头"
    ]
  },
  {
    "title": "绑架计划",
    "href": "detail/movie-0180.html",
    "cover": "30.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 犯罪",
    "category": "悬疑",
    "description": "两个废柴绑匪绑架富豪求赎金，却发现富豪正求着被人绑架，好逃避一百亿的债务。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "乌龙",
      "绑架",
      "富豪",
      "废柴",
      "反杀"
    ]
  },
  {
    "title": "无脚鸟",
    "href": "detail/movie-0181.html",
    "cover": "31.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "悬疑 / 同性 / 文艺",
    "category": "动作",
    "description": "一个自称“无脚鸟”的飞车党，在最后一次送货途中，遇见了死去多年的初恋。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "王家卫式",
      "身份迷思",
      "飞车",
      "遗憾美学"
    ]
  },
  {
    "title": "乔·罗根：世风日下",
    "href": "detail/movie-0182.html",
    "cover": "32.jpg",
    "year": "2018",
    "region": "美国",
    "type": "综艺 / 脱口秀",
    "genre": "喜剧 / 脱口秀",
    "category": "奇幻",
    "description": "乔·罗根在他第七个Netflix专场中，把硅谷精英、健身狂人和社交网络骂了个遍。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "单口喜剧",
      "犀利吐槽",
      "政治不正确",
      "美式幽默",
      "辛辣"
    ]
  },
  {
    "title": "星球索拉罗斯",
    "href": "detail/movie-0183.html",
    "cover": "33.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 悬疑",
    "category": "科幻",
    "description": "宇航员抵达一颗神秘的海洋星球，发现星球能映射出他们内心最深处的愧疚与爱人。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "硬科幻",
      "意识探索",
      "心理惊悚"
    ]
  },
  {
    "title": "雌雄十大寇",
    "href": "detail/movie-0184.html",
    "cover": "34.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪 / 喜剧",
    "category": "喜剧",
    "description": "香港警方通缉榜上并列第一的雌雄大盗，一边亡命天涯一边替天行道，顺便谈着不要命的恋爱。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "雌雄大盗",
      "港式警匪",
      "侠盗义贼"
    ]
  },
  {
    "title": "我的婚内情",
    "href": "detail/movie-0185.html",
    "cover": "35.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 爱情, 家庭",
    "category": "青春",
    "description": "结婚十五年的夫妻决定尝试开放式婚姻，结果发现自由的代价是失去彼此。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "婚内出轨",
      "开放式婚姻",
      "中年危机",
      "伦理探讨"
    ]
  },
  {
    "title": "七片海下：贞操篇",
    "href": "detail/movie-0186.html",
    "cover": "36.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "科幻伦理",
    "category": "剧情",
    "description": "在海底七层的生殖隔离实验室，第七代克隆人发现自己的“贞操”不是道德，而是一个随时可被激活的物理开关。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "克隆人",
      "基因契约",
      "深海实验室"
    ]
  },
  {
    "title": "神秘女魔王",
    "href": "detail/movie-0187.html",
    "cover": "37.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "奇幻/动作",
    "category": "音乐",
    "description": "太平盛世之下，一个被武林唾弃的魔教女子突然自封“女魔王”，向六大派发出挑战书，原因竟是为了找回被他们夺走的女儿。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "古装",
      "女性力量",
      "权谋"
    ]
  },
  {
    "title": "融雪",
    "href": "detail/movie-0188.html",
    "cover": "38.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "喜剧",
    "description": "一位患有阿尔茨海默症的母亲在遗忘所有事之后，只记得每年春天要去车站接已经去世三十年的丈夫。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "阿尔茨海默",
      "母女",
      "东北",
      "记忆",
      "和解"
    ]
  },
  {
    "title": "大劫难",
    "href": "detail/movie-0189.html",
    "cover": "39.jpg",
    "year": "2010",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/战争/历史",
    "category": "都市",
    "description": "九一八事变前后，东北一个偏僻小镇上，一个傻子和一个倔丫头，用最笨拙的方式对抗日本侵略者。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "抗日战争",
      "东北",
      "黑色幽默",
      "平民史诗",
      "管虎"
    ]
  },
  {
    "title": "奇幻世界",
    "href": "detail/movie-0190.html",
    "cover": "40.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "冒险, 奇幻",
    "category": "历史",
    "description": "过气游戏设计师被困在自己30年前设计的BUG世界里，而他唯一的队友，是已经疏远的儿子。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "虚拟现实",
      "游戏",
      "父子情"
    ]
  },
  {
    "title": "时尚地狱",
    "href": "detail/movie-0191.html",
    "cover": "41.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情、惊悚、时尚",
    "category": "动作",
    "description": "顶尖模特公司表面光鲜，地下室里却关着被药物控制的女孩们。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "时尚圈",
      "职场斗争",
      "潜规则",
      "心理操控",
      "女性复仇"
    ]
  },
  {
    "title": "毒帮家族",
    "href": "detail/movie-0192.html",
    "cover": "42.jpg",
    "year": "2024",
    "region": "墨西哥",
    "type": "电视剧",
    "genre": "犯罪 / 剧情",
    "category": "悬疑",
    "description": "毒枭父亲意外去世，四个同父异母的子女为争夺帝国继承权，展开血腥内斗。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "毒枭",
      "家族",
      "权力"
    ]
  },
  {
    "title": "西格弗里德",
    "href": "detail/movie-0193.html",
    "cover": "43.jpg",
    "year": "2027",
    "region": "德国",
    "type": "电影",
    "genre": "动作、史诗",
    "category": "爱情",
    "description": "年轻铁匠西格弗里德在屠龙后发现自己被诅咒，他的英雄传说背后是一场精心策划的复仇骗局。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "尼伯龙根",
      "屠龙英雄",
      "重金属配乐",
      "黑暗奇幻"
    ]
  },
  {
    "title": "黑暗侵袭2",
    "href": "detail/movie-0194.html",
    "cover": "44.jpg",
    "year": "2011",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖, 冒险, 惊悚",
    "category": "家庭",
    "description": "上一部的唯一幸存者被迫带队返回洞穴寻找同伴，却发现那些怪物已经进化出了更强的智慧。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "洞穴探险",
      "嗜血怪物",
      "封闭空间",
      "女性群像"
    ]
  },
  {
    "title": "欲望解析",
    "href": "detail/movie-0195.html",
    "cover": "45.jpg",
    "year": "2027",
    "region": "法国",
    "type": "电视剧",
    "genre": "剧情，爱情，心理",
    "category": "奇幻",
    "description": "心理医生爱上病人，却发现自己只是病人用来刺激丈夫的“工具”。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "心理咨询",
      "婚外情",
      "潜意识",
      "危险关系",
      "法式"
    ]
  },
  {
    "title": "翻挞法兰妻",
    "href": "detail/movie-0196.html",
    "cover": "46.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "喜剧 / 爱情",
    "category": "奇幻",
    "description": "离婚三年后，香港律师意外发现法国前妻带着他们的孩子搬进了隔壁。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "离婚复合",
      "文化冲突",
      "法式浪漫",
      "港式幽默",
      "欢喜冤家"
    ]
  },
  {
    "title": "决斗太阳谷",
    "href": "detail/movie-0197.html",
    "cover": "47.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 西部, 动作",
    "category": "历史",
    "description": "在核战后的废土上，最后一个牛仔带着他的机械马，向统治太阳谷的AI霸主发起决斗。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "废土",
      "枪手",
      "人工智能",
      "复仇"
    ]
  },
  {
    "title": "爱海情潮",
    "href": "detail/movie-0198.html",
    "cover": "48.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情， 剧情",
    "category": "奇幻",
    "description": "为了拯救家族酒店，她被迫嫁给仇人之子，却在新婚之夜发现他就是当年海岛上的初恋。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "海岛",
      "虐恋",
      "商战",
      "家族恩怨"
    ]
  },
  {
    "title": "瓦尼塔斯的不死笔记",
    "href": "detail/movie-0199.html",
    "cover": "49.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "动画, 奇幻, 悬疑",
    "category": "都市",
    "description": "人类青年诺亚捡到一本能诅咒吸血鬼的魔导书，却成为了吸血鬼之王瓦尼塔斯的“契约者”。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "吸血鬼",
      "蒸汽朋克",
      "复仇",
      "双男主",
      "命运"
    ]
  },
  {
    "title": "这里好无聊，快来接我",
    "href": "detail/movie-0200.html",
    "cover": "50.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "剧情，喜剧，青春",
    "category": "历史",
    "description": "一个在高考前夜突然逃学的少女，让她的出租车司机父亲在24小时内横跨半个中国去接她。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "高考",
      "长途",
      "父女",
      "公路"
    ]
  },
  {
    "title": "春天里的人们",
    "href": "detail/movie-0201.html",
    "cover": "51.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭 / 年代",
    "category": "喜剧",
    "description": "1990年代东北一家三线兵工厂倒闭后，三个家庭、两代人试图在废墟上重建“春天”。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "东北下岗潮",
      "三线厂",
      "父子冲突",
      "时代变迁",
      "群像"
    ]
  },
  {
    "title": "乱葬岗",
    "href": "detail/movie-0202.html",
    "cover": "52.jpg",
    "year": "2024",
    "region": "马来西亚 / 中国台湾",
    "type": "电影",
    "genre": "恐怖，悬疑，民俗",
    "category": "励志",
    "description": "开发商在乱葬岗上建起了豪华公寓，但每逢农历七月，每面镜子里的倒影都会变成不同年代的死人。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "南洋",
      "捡骨",
      "超度",
      "亡魂",
      "家族诅咒"
    ]
  },
  {
    "title": "琼楼玉宇高处寒",
    "href": "detail/movie-0203.html",
    "cover": "53.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "商战, 家族, 悬疑",
    "category": "家庭",
    "description": "香港第一家族的掌门人暴毙，四位性格迥异的养子养女为争夺坐落于太平山顶的“琼楼”展开生死博弈。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "豪门恩怨",
      "地产霸权",
      "清冷美学",
      "高智商博弈",
      "港风"
    ]
  },
  {
    "title": "春宵一刻值千金",
    "href": "detail/movie-0204.html",
    "cover": "54.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 剧情, 爱情",
    "category": "悬疑",
    "description": "结婚前一晚，准新郎被死党拉去开“最后的单身派对”，却引发了一连串无法收场的灾难。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "经典港片",
      "一夜情",
      "婚姻",
      "笑料"
    ]
  },
  {
    "title": "微望",
    "href": "detail/movie-0205.html",
    "cover": "55.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情, 生活, 温情",
    "category": "青春",
    "description": "癌症晚期父亲只剩三个月生命，他的遗愿清单只有一行字：教会儿子做一碗正宗的肉酱面。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "癌症",
      "父子",
      "美食",
      "微小愿望"
    ]
  },
  {
    "title": "爱情呼叫转移Ⅱ：爱情左右",
    "href": "detail/movie-0206.html",
    "cover": "56.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "爱情 / 喜剧 / 奇幻",
    "category": "青春",
    "description": "有选择恐惧症的女孩得到一个遥控器，可以快进、倒退、暂停自己的恋爱时刻，却把每个男友都搞成了“卡带”。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "选择障碍",
      "平行宇宙",
      "黑色幽默",
      "都市"
    ]
  },
  {
    "title": "贝茨旅馆第二季",
    "href": "detail/movie-0207.html",
    "cover": "57.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑, 恐怖",
    "category": "青春",
    "description": "诺曼的黑暗人格开始成形，而母亲发现旅馆地下的尸体远不止一具。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "惊悚",
      "心理",
      "母子",
      "前传",
      "经典改编"
    ]
  },
  {
    "title": "大运河粤语",
    "href": "detail/movie-0208.html",
    "cover": "58.jpg",
    "year": "1987",
    "region": "中国香港",
    "type": "剧集",
    "genre": "历史、武侠、商战",
    "category": "古装",
    "description": "隋炀帝开凿大运河，一场围绕运河控制权的江湖与朝堂双重厮杀就此展开。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "大运河",
      "隋唐风云",
      "TVB",
      "港剧经典",
      "恩怨情仇"
    ]
  },
  {
    "title": "敌后英雄",
    "href": "detail/movie-0209.html",
    "cover": "59.jpg",
    "year": "2012",
    "region": "中国内地",
    "type": "电视剧",
    "genre": "战争, 谍战",
    "category": "励志",
    "description": "一支伪装成伪军连队的八路军小队，在日军心脏地带玩“无间道”。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "敌后战场",
      "智斗",
      "锄奸"
    ]
  },
  {
    "title": "决斗",
    "href": "detail/movie-0210.html",
    "cover": "60.jpg",
    "year": "1971",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 动作",
    "category": "纪录",
    "description": "一辆破旧轿车在荒漠公路上被一辆巨型油罐车无休止地追击，而司机从未露脸。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "公路追杀",
      "卡车",
      "心理压迫",
      "斯皮尔伯格",
      "无对话"
    ]
  },
  {
    "title": "爱情公寓",
    "href": "detail/movie-0211.html",
    "cover": "61.jpg",
    "year": "2009",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 爱情 / 情景",
    "category": "音乐",
    "description": "七个来自天南地北的年轻人挤在上海一间破公寓里，用不靠谱的日常和真挚的友情对抗现实。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "合租青春",
      "梗王之王",
      "一代回忆"
    ]
  },
  {
    "title": "上帝的驱魔",
    "href": "detail/movie-0212.html",
    "cover": "62.jpg",
    "year": "2022",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖, 惊悚",
    "category": "剧情",
    "description": "梵蒂冈秘密档案显示，历史上最成功的一次驱魔，被驱的不是恶魔，而是上帝。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "教会",
      "梵蒂冈",
      "血腥",
      "反转"
    ]
  },
  {
    "title": "心心相系",
    "href": "detail/movie-0213.html",
    "cover": "63.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "genre": "爱情, 奇幻, 剧情",
    "category": "剧情",
    "description": "一对互相暗恋的青梅竹马因为一场流星雨交换了身体，却发现彼此对时间的感知相差了整整三年。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "灵魂互换",
      "治愈",
      "青梅竹马",
      "时间错位"
    ]
  },
  {
    "title": "博物馆的秘密 第一季",
    "href": "detail/movie-0214.html",
    "cover": "64.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "纪录片， 悬疑",
    "category": "青春",
    "description": "深入全球六大博物馆，揭开镇馆之宝背后从未公开的失踪、失窃与篡改事件。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "博物馆",
      "历史未解之谜",
      "文物",
      "实地拍摄",
      "侦探式叙事"
    ]
  },
  {
    "title": "鬼马神偷",
    "href": "detail/movie-0215.html",
    "cover": "65.jpg",
    "year": "1989",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧 / 动作 / 犯罪",
    "category": "历史",
    "description": "一对互不相识的鬼马小贼被黑帮栽赃，却在互相算计中意外偷回了整座城市的信任。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "乌龙搭档",
      "偷盗",
      "反转",
      "港式幽默",
      "追车"
    ]
  },
  {
    "title": "第22条军规",
    "href": "detail/movie-0216.html",
    "cover": "66.jpg",
    "year": "2019",
    "region": "美国",
    "type": "剧集",
    "genre": "战争， 喜剧， 剧情",
    "category": "爱情",
    "description": "轰炸机飞行员想装疯停飞，但第22条军规说：担心安全的人恰恰证明是清醒的，不准停。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "黑色幽默",
      "二战",
      "飞行员",
      "官僚主义",
      "荒谬"
    ]
  },
  {
    "title": "阳光只在这里灿烂",
    "href": "detail/movie-0217.html",
    "cover": "67.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情， 家庭， 治愈",
    "category": "喜剧",
    "description": "失败的北漂青年回到海边老家，发现失智奶奶每天都在等待一个已死去多年的人。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "返乡",
      "老宅",
      "祖孙",
      "慢时光",
      "和解"
    ]
  },
  {
    "title": "花木兰粤语",
    "href": "detail/movie-0218.html",
    "cover": "68.jpg",
    "year": "1964",
    "region": "香港",
    "type": "电影",
    "genre": "戏曲, 历史, 战争",
    "category": "历史",
    "description": "代父从军的少女，在战场上与并肩作战的将军陷入了无法言说的爱恋。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "粤剧",
      "任剑辉",
      "女扮男装",
      "经典"
    ]
  },
  {
    "title": "地球和平",
    "href": "detail/movie-0219.html",
    "cover": "69.jpg",
    "year": "2026",
    "region": "国际/合拍",
    "type": "电影",
    "genre": "科幻 / 悬疑",
    "category": "音乐",
    "description": "外星文明向地球投下了无数个“审判天平”，全球犯罪率瞬间归零，代价是每消失一个罪犯，就消失一个好人。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "高等文明",
      "黑色幽默",
      "末日审判",
      "人性实验"
    ]
  },
  {
    "title": "黑手党不再是曾经",
    "href": "detail/movie-0220.html",
    "cover": "70.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情， 犯罪， 喜剧",
    "category": "励志",
    "description": "西西里老黑手党家族发现年轻一代都去当网红和程序员了，帮派面临倒闭危机。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "黑帮",
      "老龄化",
      "传承危机",
      "黑色幽默",
      "西西里"
    ]
  },
  {
    "title": "禁忌游戏之迷藏",
    "href": "detail/movie-0221.html",
    "cover": "71.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "悬疑 / 恐怖 / 青春",
    "category": "音乐",
    "description": "五个网红主播挑战废弃医院的“一人捉迷藏”禁忌游戏，结果游戏中的人偶活过来，开始真正地“找”他们。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "都市传说",
      "校园怪谈",
      "直播探险",
      "心理阴影"
    ]
  },
  {
    "title": "上翼！",
    "href": "detail/movie-0222.html",
    "cover": "72.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 科幻 / 体育",
    "category": "剧情",
    "description": "在无人机竞速成为国民运动的近未来，一个患有恐高症的天才少年被挖角进入濒临废部的职业高中竞速部。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "无人机竞速",
      "校园",
      "热血",
      "机甲",
      "少年"
    ]
  },
  {
    "title": "梅露丝",
    "href": "detail/movie-0223.html",
    "cover": "73.jpg",
    "year": "2022",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情 / 女性",
    "category": "古装",
    "description": "布鲁塞尔一家即将倒闭的小酒馆“梅露丝”，店主露丝必须在30天内找到丈夫留下的神秘配方。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "单亲母亲",
      "小酒馆",
      "治愈"
    ]
  },
  {
    "title": "廉政英雌之火槍柔情国语",
    "href": "detail/movie-0224.html",
    "cover": "74.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "剧集",
    "genre": "犯罪 / 动作 / 女性",
    "category": "科幻",
    "description": "廉政公署首支全女性火枪队的队员们，一边追查贪污大案，一边应对婚姻和生育的压力。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "女枪手",
      "廉政公署",
      "性别反转"
    ]
  },
  {
    "title": "爱在飞",
    "href": "detail/movie-0225.html",
    "cover": "75.jpg",
    "year": "2005",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情 / 剧情",
    "category": "历史",
    "description": "一名患有绝症的女护士与一名因事故失忆的民航机长，在天空中谈了一场注定要遗忘的恋爱。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "绝症",
      "飞行员",
      "台剧经典"
    ]
  },
  {
    "title": "无仁义之战 完结篇",
    "href": "detail/movie-0226.html",
    "cover": "76.jpg",
    "year": "1974",
    "region": "日本",
    "type": "电影",
    "genre": "犯罪 / 剧情",
    "category": "剧情",
    "description": "昭和最后的黑帮火并中，一个试图金盆洗手的传奇杀手发现，仁义只是用来埋葬死者的墓碑。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "黑道",
      "权力斗争",
      "昭和年代",
      "暴力美学",
      "悲剧结局"
    ]
  },
  {
    "title": "诈欺女王",
    "href": "detail/movie-0227.html",
    "cover": "77.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "犯罪 / 动作 / 悬疑",
    "category": "悬疑",
    "description": "亚洲最顶级的骗子“女王”接下一单天价任务：骗走一个黑帮家族的千亿资产，但她发现自己的队友全是她曾经亲手送进监狱的仇人。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "骗局",
      "女性",
      "复仇",
      "双面间谍",
      "高智商"
    ]
  },
  {
    "title": "帝国时代 下",
    "href": "detail/movie-0228.html",
    "cover": "78.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "史诗、历史",
    "category": "音乐",
    "description": "罗马帝国分裂的最后一夜，三个男人在元老院密谋，天亮后他们将决定帝国的生死。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "权力斗争",
      "古罗马",
      "战争"
    ]
  },
  {
    "title": "唐少女汐彦",
    "href": "detail/movie-0229.html",
    "cover": "79.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 古装 / 悬疑",
    "category": "奇幻",
    "description": "狄仁杰养女汐彦，在长安城中追查“吃影子”的妖物，却发现妖物是她失踪的亲生父亲。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "狄仁杰",
      "少女侦探",
      "唐朝妖怪"
    ]
  },
  {
    "title": "命带追逐",
    "href": "detail/movie-0230.html",
    "cover": "80.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情、爱情、奇幻",
    "category": "动作",
    "description": "不相信命理的保险业务员被算出“三个月内无姻缘”，结果每天都有一个女人自称是他未婚妻。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "命理",
      "算命",
      "相亲",
      "都市",
      "命运红线"
    ]
  },
  {
    "title": "大护法",
    "href": "detail/movie-0231.html",
    "cover": "81.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "奇幻、动作、悬疑",
    "category": "喜剧",
    "description": "续集中，大护法为寻找失踪的太子，闯入一个用“思想钢印”控制民众的空中城市。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "水墨",
      "暴力美学",
      "哲学",
      "反乌托邦"
    ]
  },
  {
    "title": "黄梁梦",
    "href": "detail/movie-0232.html",
    "cover": "82.jpg",
    "year": "2019",
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 奇幻 / 古装",
    "category": "青春",
    "description": "一介书生科举落榜后枕着黄瓷枕入睡，梦里他当了三十年宰相，醒来小米粥还没熟。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "梦境",
      "科举",
      "权力",
      "轮回"
    ]
  },
  {
    "title": "哥斯拉对金刚",
    "href": "detail/movie-0233.html",
    "cover": "83.jpg",
    "year": "2024",
    "region": "日本 / 美国",
    "type": "电影",
    "genre": "动作 / 科幻",
    "category": "励志",
    "description": "人类挖开地心寻找新能源，惊醒了沉睡的泰坦巨兽之王，金刚被迫与哥斯拉联手对抗远古宿敌。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "怪兽宇宙",
      "世纪对决",
      "地下世界",
      "双重主角",
      "大场面"
    ]
  },
  {
    "title": "欲望过程",
    "href": "detail/movie-0234.html",
    "cover": "84.jpg",
    "year": "2012",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 情色 / 心理",
    "category": "喜剧",
    "description": "一对开放式婚姻的夫妻，因邀请一位陌生画家进入生活，导致欲望天平彻底失衡。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "哲学思辨",
      "亲密关系",
      "中产危机"
    ]
  },
  {
    "title": "耶路撒冷",
    "href": "detail/movie-0235.html",
    "cover": "85.jpg",
    "year": "2024",
    "region": "瑞典",
    "type": "剧集",
    "genre": "剧情，历史，宗教",
    "category": "音乐",
    "description": "十九世纪末，瑞典一个虔诚的农民家庭变卖家产，决定徒步前往心中的圣城耶路撒冷，重建家园。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "朝圣",
      "信仰",
      "家族",
      "圣城"
    ]
  },
  {
    "title": "山丘战魂",
    "href": "detail/movie-0236.html",
    "cover": "86.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "战争, 剧情",
    "category": "悬疑",
    "description": "一战西线，一个厌恶战争的英军测绘兵，被误派到前线最惨烈的“山丘”，却发现那里所有人都已疯了。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "一战",
      "壕沟",
      "士兵视角",
      "反战",
      "心理"
    ]
  },
  {
    "title": "瞒天凶嫌",
    "href": "detail/movie-0237.html",
    "cover": "87.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑惊悚",
    "category": "都市",
    "description": "一个骗子被警察关进只有一张桌子的审讯室，但警察说出的每个案件细节，都恰好与他的真实身份相反。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "反转",
      "密室",
      "替身",
      "身份互换",
      "高层阴谋"
    ]
  },
  {
    "title": "在你的冬夜里闪耀",
    "href": "detail/movie-0238.html",
    "cover": "88.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情， 奇幻",
    "category": "励志",
    "description": "失恋又失业的郑达前，在冬夜一道奇异光柱后，走进了父母没有离婚的平行世界。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "平行时空",
      "东北小镇",
      "治愈",
      "家庭和解",
      "烟花"
    ]
  },
  {
    "title": "村拉",
    "href": "detail/movie-0239.html",
    "cover": "89.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "category": "奇幻",
    "description": "为争夺“乡村振兴示范村”称号，两个相邻村庄决定通过一场拔河比赛定胜负。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "乡村",
      "拔河",
      "集体荣誉",
      "反差喜剧",
      "黑色幽默"
    ]
  },
  {
    "title": "乘风2025之三十而励",
    "href": "detail/movie-0240.html",
    "cover": "90.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀， 音乐， 竞技",
    "category": "奇幻",
    "description": "30位来自不同领域的30+女性，在告别青春后的舞台上，再次寻找人生的高光时刻。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "姐姐",
      "女性成长",
      "舞台竞演",
      "励志",
      "群像"
    ]
  },
  {
    "title": "爱尔玛的情与欲",
    "href": "detail/movie-0241.html",
    "cover": "91.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "剧情, 情色, 心理",
    "category": "科幻",
    "description": "世界级女钢琴家爱尔玛与丈夫维持着开放式婚姻，直到她发现丈夫的情人正是她在音乐学院的天才学生。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "开放式关系",
      "钢琴家",
      "控制欲",
      "柏林"
    ]
  },
  {
    "title": "碎梦人生",
    "href": "detail/movie-0242.html",
    "cover": "92.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "category": "家庭",
    "description": "一个失眠的中年人发现自己的梦正在被一伙神秘人当作剧本出售，而他的生活就是一场持续了四十年的直播。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "梦境",
      "解构",
      "存在主义",
      "非线性"
    ]
  },
  {
    "title": "白狼勇士",
    "href": "detail/movie-0243.html",
    "cover": "93.jpg",
    "year": "2025",
    "region": "加拿大 / 法国",
    "type": "电影",
    "genre": "冒险 / 家庭 / 奇幻",
    "category": "喜剧",
    "description": "一个沉默的因纽特男孩与一头被族群驱逐的白狼结伴，在融化中的北极冰盖上寻找传说中永不沉没的“祖先岛”。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "因纽特传说",
      "白狼图腾",
      "极地冒险",
      "气候变迁"
    ]
  },
  {
    "title": "东北警察故事",
    "href": "detail/movie-0244.html",
    "cover": "94.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作 / 犯罪 / 喜剧",
    "category": "悬疑",
    "description": "一个被贬到边境小城的倔警察，发现当地最大娱乐城的老板，竟是二十年前拐走他亲妹妹的人贩子。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "东北",
      "警匪",
      "硬核动作",
      "黑色幽默",
      "接地气"
    ]
  },
  {
    "title": "寻根",
    "href": "detail/movie-0245.html",
    "cover": "95.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧 / 迷你剧",
    "genre": "家庭 / 历史 / 悬疑",
    "category": "历史",
    "description": "为了给奶奶办葬礼，四代同堂的家族在祖宅翻出一具不属于祖先的日本军人骨骸。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "家族史",
      "两岸",
      "日据时期",
      "客家",
      "记忆"
    ]
  },
  {
    "title": "马里奥里奇之死",
    "href": "detail/movie-0246.html",
    "cover": "96.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电视剧",
    "genre": "犯罪, 剧情, 传记",
    "category": "悬疑",
    "description": "黑手党教父马里奥·里奇在自己的葬礼上通过录像宣布：杀死他的人，就坐在这间教堂里。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "黑手党",
      "背叛",
      "家族"
    ]
  },
  {
    "title": "圣者",
    "href": "detail/movie-0247.html",
    "cover": "97.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻/惊悚",
    "category": "科幻",
    "description": "当全世界都在跪拜那个能治愈百病的“圣子”时，一个无神论记者却发现，每一次治愈背后，都有一条无辜的性命被献祭。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "反英雄",
      "能力者",
      "宗教",
      "黑暗",
      "血腥"
    ]
  },
  {
    "title": "再见了妈妈",
    "href": "detail/movie-0248.html",
    "cover": "98.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "家庭 / 剧情",
    "category": "音乐",
    "description": "单亲妈妈确诊癌症晚期，叛逆的女儿为了完成妈妈的“遗愿清单”，开始了啼笑皆非的陪伴之旅。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "母子",
      "绝症",
      "催泪",
      "遗愿清单"
    ]
  },
  {
    "title": "穿越天际靠近你",
    "href": "detail/movie-0249.html",
    "cover": "99.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "爱情, 奇幻, 剧情",
    "category": "历史",
    "description": "伦敦航空管制员每晚都会收到一条来自五年前遇难航班的无线电信号，而发信人是他的亡妻，他必须阻止那趟航班起飞。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "航空管制",
      "平行时空",
      "无线电情缘",
      "云端恋爱"
    ]
  },
  {
    "title": "穷到只剩爱",
    "href": "detail/movie-0250.html",
    "cover": "100.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "家庭/温情",
    "category": "动作",
    "description": "欠债三千万的一家人搬到废弃神社居住，在什么都没有的生活里，他们反而找回了比钱更重要的东西。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "贫困",
      "治愈",
      "亲情",
      "债务",
      "极简主义"
    ]
  },
  {
    "title": "追梦迪士尼",
    "href": "detail/movie-0251.html",
    "cover": "101.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情传记",
    "category": "奇幻",
    "description": "一个怀揣动画梦想的穷小子，如何从失业记者变成了迪士尼的传奇动画师？",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "励志",
      "动画师",
      "职场奋斗",
      "梦想",
      "华特·迪士尼"
    ]
  },
  {
    "title": "狂风暴雨群芳刦",
    "href": "detail/movie-0252.html",
    "cover": "102.jpg",
    "year": "1971",
    "region": "中国台湾",
    "type": "电影",
    "genre": "武侠动作",
    "category": "历史",
    "description": "七个被海盗灭门的孤女，在一场台风夜杀回魔鬼岛。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "邵氏风格",
      "女侠复仇",
      "老武侠"
    ]
  },
  {
    "title": "蜡笔小新：黑暗珠珠大追击",
    "href": "detail/movie-0253.html",
    "cover": "103.jpg",
    "year": "1997",
    "region": "日本",
    "type": "剧场版 / 动画",
    "genre": "喜剧 / 冒险",
    "category": "励志",
    "description": "小新在扭蛋机里扭出了一个会说人话的黑色珠子，结果整个春日部都被吸进了游戏机里。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "春日部防卫队",
      "扭蛋",
      "妖怪"
    ]
  },
  {
    "title": "牙狼：神之牙",
    "href": "detail/movie-0254.html",
    "cover": "104.jpg",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "genre": "特摄动作",
    "category": "喜剧",
    "description": "最强的魔戒骑士牙狼，其铠甲“神之牙”突然暴走反噬，他必须在堕落成魔之前斩杀自己的影子。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "暗黑",
      "铠甲",
      "horror",
      "魔戒"
    ]
  },
  {
    "title": "盲之交叉口",
    "href": "detail/movie-0255.html",
    "cover": "105.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 犯罪, 剧情",
    "category": "都市",
    "description": "一位失明的按摩师成为一桩谋杀案的唯一“目击者”，他凭借超乎常人的听觉与触觉，在黑暗中追寻着那个只发出过一声叹息的凶手。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "盲人",
      "按摩师",
      "证据",
      "复仇",
      "社会派"
    ]
  },
  {
    "title": "一念永恒",
    "href": "detail/movie-0256.html",
    "cover": "106.jpg",
    "year": "2020",
    "region": "中国",
    "type": "动画剧集",
    "genre": "搞笑, 修仙, 冒险",
    "category": "纪录",
    "description": "胆小如鼠的少年为求长生踏入修仙界，却因为“太怕死”而练出了别人不敢练的功法。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "修仙",
      "白小纯",
      "怕死",
      "炼丹",
      "逆袭"
    ]
  },
  {
    "title": "歌磨",
    "href": "detail/movie-0257.html",
    "cover": "107.jpg",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "genre": "剧情，传记",
    "category": "励志",
    "description": "浮世绘大师喜多川歌麿的癫狂人生，美与禁忌之间，画笔即是他的刀剑。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "浮世绘",
      "艺术家",
      "江户",
      "癫狂"
    ]
  },
  {
    "title": "祸祸女",
    "href": "detail/movie-0258.html",
    "cover": "108.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "惊悚, 犯罪",
    "category": "都市",
    "description": "江湖传言谁碰她谁倒霉，直到三个杀手决定联合做掉这个“祸害”。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "黑吃黑",
      "女杀手",
      "连环反杀",
      "港式暴力美学"
    ]
  },
  {
    "title": "嘿！你大事很妙",
    "href": "detail/movie-0259.html",
    "cover": "109.jpg",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧 / 奇幻 / 青春",
    "category": "都市",
    "description": "叛逆少女意外穿越到1998年，遇到了还在上高中的“少女版”妈妈，却发现妈妈当年比她还叛逆。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "穿越",
      "母女",
      "和解",
      "90年代"
    ]
  },
  {
    "title": "黄区",
    "href": "detail/movie-0260.html",
    "cover": "110.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "战争 / 动作",
    "category": "励志",
    "description": "在交战区的“黄区”，一名战地记者和一名狙击手通过无线电建立了诡异的信任，却不知彼此仅隔一堵墙。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "中东",
      "战地记者",
      "狙击手"
    ]
  },
  {
    "title": "三个人的冬天",
    "href": "detail/movie-0261.html",
    "cover": "111.jpg",
    "year": "2006",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "category": "喜剧",
    "description": "大兴安岭的寒冬里，瘫痪的伐木工恳求妻子“借种”给师弟，三人从此陷入了长达二十年的情感旋涡。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "东北",
      "林场",
      "畸恋",
      "牺牲",
      "赎罪"
    ]
  },
  {
    "title": "尘缘不神山",
    "href": "detail/movie-0262.html",
    "cover": "112.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "古装 / 仙侠 / 爱情",
    "category": "悬疑",
    "description": "为救师父，她逆天改命三次轮回，每次都会重新爱上同一个人。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "师徒",
      "虐恋",
      "失忆轮回"
    ]
  },
  {
    "title": "棒球少女",
    "href": "detail/movie-0263.html",
    "cover": "113.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 运动",
    "category": "古装",
    "description": "一名天赋异禀的高中女投手，为进入职棒打破性别壁垒，必须说服她曾因伤放弃棒球的父亲出山教练。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "女子棒球",
      "职业梦想",
      "父女和解"
    ]
  },
  {
    "title": "和谐家庭",
    "href": "detail/movie-0264.html",
    "cover": "114.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧，悬疑，家庭",
    "category": "悬疑",
    "description": "顶级杀手为了完成任务假扮家庭教师，却发现要刺杀的目标一家全是深藏不露的连环杀手。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "黑帮",
      "卧底",
      "搞笑",
      "反差"
    ]
  },
  {
    "title": "暖流在人间",
    "href": "detail/movie-0265.html",
    "cover": "115.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电视剧",
    "genre": "剧情 / 社会",
    "category": "剧情",
    "description": "一名富家女放弃继承权成为公益律师，专门为那些“不值得帮”的边缘人打官司。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "公益律师",
      "底层维权",
      "单元剧",
      "人间百态",
      "温情"
    ]
  },
  {
    "title": "诡老",
    "href": "detail/movie-0266.html",
    "cover": "116.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "category": "动作",
    "description": "七个年轻人住进乡下废弃养老院直播探险，却发现每到凌晨三点，所有“老人”都会醒来，并试图带走他们中的一个。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "东南亚民俗",
      "老人诅咒",
      "时间循环",
      "凶宅"
    ]
  },
  {
    "title": "从地心窜出",
    "href": "detail/movie-0267.html",
    "cover": "117.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 科幻, 灾难",
    "category": "青春",
    "description": "深海钻探队意外唤醒地幔层中的远古食人蠕虫，它们能熔穿任何金属。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "巨虫",
      "密闭空间",
      "生存狂",
      "B级片复古"
    ]
  },
  {
    "title": "暗房秘密",
    "href": "detail/movie-0268.html",
    "cover": "118.jpg",
    "year": "2024",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 剧情",
    "category": "动作",
    "description": "一位老摄影师去世后，他暗房的底片显影出30年前小镇五桩失踪案的真正凶手——他自己。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "摄影",
      "失踪案件",
      "银盐工艺",
      "记忆篡改"
    ]
  },
  {
    "title": "松岭（电影）",
    "href": "detail/movie-0269.html",
    "cover": "119.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "category": "家庭",
    "description": "一座因伐木而兴也因禁伐而废的小镇，二十年前后的两起绑架案，指向同一个秘密。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "东北",
      "悬疑",
      "下岗潮",
      "追凶",
      "冷冽"
    ]
  },
  {
    "title": "超时空奇缘",
    "href": "detail/movie-0270.html",
    "cover": "120.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "科幻，爱情，轻喜剧",
    "category": "音乐",
    "description": "未来的男主开了一家“时光邮局”，却发现自己最想改写的过去，竟是因为一封信才造成的。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "时光邮局",
      "过去修正",
      "蝴蝶效应",
      "青梅竹马",
      "双向奔赴"
    ]
  },
  {
    "title": "法国女人",
    "href": "detail/movie-0271.html",
    "cover": "121.jpg",
    "year": "1995",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 爱情",
    "category": "纪录",
    "description": "一位被爱情伤透的法国女教师，远赴北非加入外籍军团，在沙漠中寻找自我与救赎。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "女性独立",
      "外籍军团",
      "战地情缘"
    ]
  },
  {
    "title": "电视拍手者",
    "href": "detail/movie-0272.html",
    "cover": "122.jpg",
    "year": "2005",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖 / 都市传说",
    "category": "剧情",
    "description": "半夜电视突然打开，画面中有人对你鼓掌，你跟着鼓掌的瞬间，灵魂就被换进了电视机。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "录像带诅咒",
      "都市怪谈",
      "规则类"
    ]
  },
  {
    "title": "雷神4：爱与雷霆",
    "href": "detail/movie-0273.html",
    "cover": "123.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作、奇幻、喜剧",
    "category": "纪录",
    "description": "雷神索尔意外被贬为某个偏远星系的天体测量员，他必须用数学而不是锤子阻止一场宇宙级离婚官司。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "漫威",
      "北欧神话",
      "搞笑",
      "天体",
      "反派"
    ]
  },
  {
    "title": "19世纪格鲁吉亚编年史",
    "href": "detail/movie-0274.html",
    "cover": "124.jpg",
    "year": "2025",
    "region": "格鲁吉亚",
    "type": "电影",
    "genre": "历史、剧情、传记",
    "category": "励志",
    "description": "19世纪中叶格鲁吉亚，一个贵族诗人爱上了一个农奴女孩，他试图废除自家庄园的农奴制，却发现自己才是最大的囚徒。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "19世纪",
      "格鲁吉亚",
      "贵族",
      "农奴制",
      "诗歌"
    ]
  },
  {
    "title": "狂人法则",
    "href": "detail/movie-0275.html",
    "cover": "125.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电视剧",
    "genre": "犯罪、惊悚、悬疑",
    "category": "励志",
    "description": "一位精通刑法的变态杀手每次作案后主动自首，却总能利用法律程序漏洞当庭释放。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "连环杀手",
      "法律漏洞",
      "猫鼠游戏",
      "智商对决",
      "反转"
    ]
  },
  {
    "title": "骄阳似我",
    "href": "detail/movie-0276.html",
    "cover": "126.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "青春 / 运动 / 励志",
    "category": "励志",
    "description": "一名坐轮椅的天才篮球少年，与一个被职业队开除的废物教练组成街头史上最离谱的双人队。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "篮球",
      "残疾",
      "兄弟",
      "逆袭"
    ]
  },
  {
    "title": "新科学怪人",
    "href": "detail/movie-0277.html",
    "cover": "127.jpg",
    "year": "1974",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 科幻 / 恐怖",
    "category": "动作",
    "description": "年轻的弗兰肯斯坦博士继承祖父衣钵，试图在现代化实验室里制造“完美人类”，却造出一个会跳踢踏舞的怪物。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "弗兰肯斯坦",
      "科学怪人",
      "喜剧大师",
      "恶搞",
      "经典翻拍"
    ]
  },
  {
    "title": "维克托",
    "href": "detail/movie-0278.html",
    "cover": "128.jpg",
    "year": "2024",
    "region": "英国 / 法国",
    "type": "电影",
    "genre": "惊悚 / 剧情",
    "category": "悬疑",
    "description": "天才腹语师带着木偶“维克托”巡演，但木偶在台上说的话，连他自己都不知道。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "人偶",
      "心理",
      "腹语",
      "童年创伤",
      "烧脑"
    ]
  },
  {
    "title": "弦管动春心",
    "href": "detail/movie-0279.html",
    "cover": "129.jpg",
    "year": "1985",
    "region": "中国",
    "type": "电影",
    "genre": "剧情、爱情",
    "category": "动作",
    "description": "八十年代，扬琴教师和女学生因音乐相知，却因世俗眼光和时代巨变，奏响了一曲无望的恋歌。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "民乐",
      "师生恋",
      "时代悲剧"
    ]
  },
  {
    "title": "权欲第二季",
    "href": "detail/movie-0280.html",
    "cover": "130.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 犯罪 / 悬疑",
    "category": "历史",
    "description": "纽约最有权势的家族 patriarch 突然中风，子女们的权力游戏在病床边悄然升级。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "权势",
      "家族",
      "阴谋",
      "纽约",
      "律政"
    ]
  },
  {
    "title": "在里乔的阳光下",
    "href": "detail/movie-0281.html",
    "cover": "131.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "爱情喜剧",
    "category": "励志",
    "description": "一个伦敦的金融分析师被迫在意大利海滨小镇度过整个夏天，那里的慢生活和一场赌约彻底改写了她对成功的定义。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "夏日",
      "疗愈",
      "浪漫"
    ]
  },
  {
    "title": "山河之影",
    "href": "detail/movie-0282.html",
    "cover": "132.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 武侠 / 悬疑",
    "category": "音乐",
    "description": "一张据传能改朝换代的“山河社稷图”重现江湖，两名失散多年的锦衣卫兄弟被迫站在生死对立面。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "江湖",
      "谍战",
      "锦衣卫",
      "夺宝"
    ]
  },
  {
    "title": "金鹿",
    "href": "detail/movie-0283.html",
    "cover": "133.jpg",
    "year": "2024",
    "region": "蒙古",
    "type": "电影",
    "genre": "冒险,奇幻",
    "category": "音乐",
    "description": "七岁牧童在暴风雪中救下一头金色麋鹿，却发现它能开口说话，并警告他草原深处有“会移动的山”正在逼近。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "传说",
      "草原",
      "守护"
    ]
  },
  {
    "title": "虎豹喋血战",
    "href": "detail/movie-0284.html",
    "cover": "134.jpg",
    "year": "1986",
    "region": "香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "古装",
    "description": "一对情同手足的雇佣兵，在一次任务中因黄金反目，十年后，一个成了警队精英，一个成了毒枭门徒。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "港式动作",
      "兄弟反目",
      "枪战",
      "复仇"
    ]
  },
  {
    "title": "醉画仙",
    "href": "detail/movie-0285.html",
    "cover": "135.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "传记 / 古装 / 艺术",
    "category": "剧情",
    "description": "朝鲜王朝末年，一代狂才画师张承业在画笔与酒杯中，对抗整个动荡的时代。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "画家",
      "乱世",
      "宿命",
      "唯美"
    ]
  },
  {
    "title": "寻找卡米洛城",
    "href": "detail/movie-0286.html",
    "cover": "136.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "奇幻、冒险",
    "category": "动作",
    "description": "少女骑士学徒偶遇会说话的魔法松鼠，一起踏上寻找传说中消失的卡米洛城之旅。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "亚瑟王",
      "魔法",
      "成长",
      "失落的文明"
    ]
  },
  {
    "title": "《整蛊先锋队》",
    "href": "detail/movie-0287.html",
    "cover": "137.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀、喜剧、整蛊",
    "category": "科幻",
    "description": "一支专业整蛊团队用“最离谱”的方式测试普通人的善意底线，结果常常反转到令人沉默。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "素人整蛊",
      "社会实验",
      "无剧本",
      "反向操作"
    ]
  },
  {
    "title": "里程碑",
    "href": "detail/movie-0288.html",
    "cover": "138.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "科幻",
    "description": "一名退休测量员执意要带嫌弃他的儿子重走四十年前自己参与修建的第一条公路，却发现整条路即将被水库淹没。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "公路片",
      "父子",
      "和解",
      "时代变迁"
    ]
  },
  {
    "title": "冢本晋也之野火",
    "href": "detail/movie-0289.html",
    "cover": "139.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "战争 / 剧情",
    "category": "家庭",
    "description": "二战末期，一个溃败的日本士兵在菲律宾丛林中逃亡，他身体里长出了一团永不熄灭的火。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "黑白",
      "手持摄影",
      "身体恐怖",
      "反战",
      "文学改编"
    ]
  },
  {
    "title": "校车",
    "href": "detail/movie-0290.html",
    "cover": "140.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 儿童, 家庭",
    "category": "剧情",
    "description": "一个偏远的山区教学点，因为只有一个学生而即将被撤销，代课老师为了保住学校，开始了每周翻山越岭的“一个人的校车”之旅。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "乡村教育",
      "校车",
      "温情",
      "守护",
      "理想"
    ]
  },
  {
    "title": "星际大战外传：韩索罗",
    "href": "detail/movie-0291.html",
    "cover": "141.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 冒险, 动作",
    "category": "奇幻",
    "description": "年轻韩·索罗在帝国军校作弊被开除，却意外卷入一场关乎银河黑道格局的飞车赌局。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "星球大战",
      "起源故事",
      "走私客",
      "宇宙冒险",
      "宿命"
    ]
  },
  {
    "title": "最美时光遇见你",
    "href": "detail/movie-0292.html",
    "cover": "142.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 剧情 / 治愈",
    "category": "青春",
    "description": "养老院里，患有阿尔茨海默症的老太太每天都把隔壁老头当成初恋，而那个老头每天都配合她演戏。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "夕阳恋",
      "阿尔茨海默",
      "治愈系",
      "慢节奏"
    ]
  },
  {
    "title": "十四天之暖春来",
    "href": "detail/movie-0293.html",
    "cover": "143.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 抗疫",
    "category": "悬疑",
    "description": "一栋被封控的居民楼里，14天隔离期，14个家庭，14段关于爱、恐惧与希望的故事。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "隔离",
      "人间百态",
      "温暖治愈"
    ]
  },
  {
    "title": "死了一个玛德莲娜之后",
    "href": "detail/movie-0294.html",
    "cover": "144.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "悬疑 / 剧情 / 同性",
    "category": "动作",
    "description": "校花玛德莲娜坠楼身亡，每个自称爱她的人，都可能是凶手。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "百合",
      "凶案",
      "校园",
      "心理"
    ]
  },
  {
    "title": "爱没有错",
    "href": "detail/movie-0295.html",
    "cover": "145.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭/伦理/剧情",
    "category": "家庭",
    "description": "继母被诊断出绝症后，用一本“错事账本”逼继女恨自己，只为让她能没有负担地继承遗产。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "重组家庭",
      "遗产风波",
      "母女隔阂",
      "情感治愈",
      "现实主义"
    ]
  },
  {
    "title": "杀戮旅店",
    "href": "detail/movie-0296.html",
    "cover": "146.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖， 惊悚， 悬疑",
    "category": "古装",
    "description": "十位网红受邀入住复古旅店，每扇房门后都藏着一场量身定制的死亡游戏。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "暴风雪山庄",
      "密室逃生",
      "反转",
      "黑色幽默"
    ]
  },
  {
    "title": "长江一号",
    "href": "detail/movie-0297.html",
    "cover": "147.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "动作, 科幻, 冒险",
    "category": "科幻",
    "description": "长江禁渔十年，江底沉睡的巨大机甲“长江一号”突然苏醒了。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "机甲",
      "长江生态",
      "跨海营救"
    ]
  },
  {
    "title": "恶业2024",
    "href": "detail/movie-0298.html",
    "cover": "148.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖 / 悬疑 / 宗教",
    "category": "励志",
    "description": "一名女记者回乡调查多年前的“恶鬼附身案”，发现村里的萨满巫师死前将诅咒转嫁给了全村所有名字以“李”开头的人。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "萨满教",
      "诅咒继承",
      "村落秘事"
    ]
  },
  {
    "title": "藏獒情未了",
    "href": "detail/movie-0299.html",
    "cover": "149.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情家庭",
    "category": "悬疑",
    "description": "一只被城市主人遗弃的藏獒，徒步千里穿越无人区，只为在主人婚礼那天，送上他曾经弄丢的那只婚戒。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "人与动物",
      "忠诚",
      "藏区",
      "催泪"
    ]
  },
  {
    "title": "车站的马博布",
    "href": "detail/movie-0300.html",
    "cover": "150.jpg",
    "year": "2004",
    "region": "南非",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "励志",
    "description": "种族隔离末期的约翰内斯堡，一个流浪儿童与一只被遗弃的猎犬在火车站共同求生，并意外成为地下反歧视的信使。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "种族隔离",
      "人犬情深",
      "流浪之旅",
      "社会底层"
    ]
  },
  {
    "title": "姐妹姐妹",
    "href": "detail/movie-0301.html",
    "cover": "1.jpg",
    "year": "2025",
    "region": "印度",
    "type": "剧集",
    "genre": "剧情, 家庭",
    "category": "奇幻",
    "description": "为了争夺家族企业继承权，四姐妹在一场长达二十年的心计博弈中，逐渐发现彼此才是真正的母亲。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "姐妹情",
      "继承",
      "商业",
      "女性",
      "反转"
    ]
  },
  {
    "title": "金刚狼3:殊死一战",
    "href": "detail/movie-0302.html",
    "cover": "2.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 剧情",
    "category": "爱情",
    "description": "垂老的金刚狼带着拥有他基因的神秘女孩，一路逃亡，一路走向最后的终点。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "超级英雄",
      "暮狼",
      "父女",
      "公路片",
      "悲壮"
    ]
  },
  {
    "title": "水漾透明谜团之意外奢华",
    "href": "detail/movie-0303.html",
    "cover": "3.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑喜剧",
    "category": "青春",
    "description": "亿万富豪在密室中被淹死，房间里却一滴水都没有，而所有人手腕上都戴着同款透明手表。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "豪宅",
      "密室",
      "奢侈品",
      "名侦探"
    ]
  },
  {
    "title": "维达Ⅰ：过去的碎片",
    "href": "detail/movie-0304.html",
    "cover": "4.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻悬疑",
    "category": "历史",
    "description": "在记忆可以买卖的未来，一个失去所有记忆的女人发现，自己的过去被分割成碎片卖给了不同的人。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "记忆植入",
      "反乌托邦",
      "身份认同"
    ]
  },
  {
    "title": "首付",
    "href": "detail/movie-0305.html",
    "cover": "5.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 都市",
    "category": "励志",
    "description": "三对即将步入婚姻的90后情侣，为了凑够一套房子的首付，几乎失去了半条命。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "买房",
      "现实",
      "婚姻",
      "奋斗"
    ]
  },
  {
    "title": "我的解放日志",
    "href": "detail/movie-0306.html",
    "cover": "6.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情",
    "category": "家庭",
    "description": "三个被困在乡下与城市之间的成年兄妹，决定用各自极端的方式从令人窒息的生活中“越狱”。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "治愈",
      "家庭",
      "现实主义",
      "成长",
      "乡村"
    ]
  },
  {
    "title": "心灵投手",
    "href": "detail/movie-0307.html",
    "cover": "7.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 运动 / 家庭",
    "category": "家庭",
    "description": "一位因心理障碍而废掉投球天赋的棒球天才，在少年辅育院遇见了一个只有七秒记忆的男孩。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "棒球",
      "心理创伤",
      "父子关系",
      "励志"
    ]
  },
  {
    "title": "白丝带",
    "href": "detail/movie-0308.html",
    "cover": "8.jpg",
    "year": "2009",
    "region": "德国/奥地利",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "动作",
    "description": "一战前夕的德国北部村庄，一系列离奇事故背后，隐藏着孩子们的白色秘密。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "黑白",
      "纳粹前夕",
      "儿童之恶",
      "宗教"
    ]
  },
  {
    "title": "画魔人",
    "href": "detail/movie-0309.html",
    "cover": "9.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "category": "家庭",
    "description": "民国画家离奇自杀后，他留下的“最美”自画像开始诱骗买家自杀，只为收集濒死时扭曲的表情。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "民国",
      "画家",
      "附身",
      "艺术",
      "诅咒"
    ]
  },
  {
    "title": "和味浓情粤语",
    "href": "detail/movie-0310.html",
    "cover": "10.jpg",
    "year": "2008",
    "region": "香港",
    "type": "剧集",
    "genre": "剧情, 爱情",
    "category": "古装",
    "description": "一个在寿司店打工的笨女孩，为了成为女板前，挑战整个日料界的性别歧视。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "日料",
      "职场",
      "奋斗",
      "粤语原声"
    ]
  },
  {
    "title": "破晓东方",
    "href": "detail/movie-0311.html",
    "cover": "11.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史, 战争, 剧情",
    "category": "动作",
    "description": "1949年上海解放前夕，地下党与国民党特务在十里洋场展开最后较量，而这场较量的核心不是刀枪，而是银元和大米。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "解放上海",
      "谍战",
      "经济战"
    ]
  },
  {
    "title": "一毛钱",
    "href": "detail/movie-0312.html",
    "cover": "12.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，黑色幽默",
    "category": "奇幻",
    "description": "为了筹集一块钱班费，山村的孩子们满世界寻找一毛钱，却意外揭开了村庄光鲜外表下的秘密疮疤。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "扶贫",
      "乡村教育",
      "人性",
      "讽刺"
    ]
  },
  {
    "title": "女教师",
    "href": "detail/movie-0313.html",
    "cover": "13.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚/悬疑",
    "category": "青春",
    "description": "温柔的女教师入职第一天就被学生霸凌，当她忍无可忍反击时，却挖出了这个班上一任班主任的死亡真相。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "校园霸凌",
      "复仇",
      "身份反转"
    ]
  },
  {
    "title": "猫小姐寻真爱",
    "href": "detail/movie-0314.html",
    "cover": "14.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市、爱情、轻奇幻",
    "category": "喜剧",
    "description": "一只修行千年的猫妖化成人形来到现代都市，她每爱一个人就会失去一条命。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "猫娘",
      "治愈",
      "单元故事"
    ]
  },
  {
    "title": "亨利五世",
    "href": "detail/movie-0315.html",
    "cover": "15.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "历史，战争",
    "category": "奇幻",
    "description": "年轻的亨利五世如何从一个浪荡王子，成长为在阿金库尔战役中带领英军以少胜多的传奇国王。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "史诗",
      "莎士比亚",
      "王权",
      "战争场面"
    ]
  },
  {
    "title": "塔加路反击战",
    "href": "detail/movie-0316.html",
    "cover": "16.jpg",
    "year": "2024",
    "region": "菲律宾",
    "type": "电影",
    "genre": "动作 / 战争 / 历史",
    "category": "古装",
    "description": "1944年吕宋岛，一个被日军屠村的铁匠用打铁锤和自制弩箭，独自向一个小队展开复仇。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "二战",
      "游击队",
      "丛林战",
      "真实改编",
      "冷兵器"
    ]
  },
  {
    "title": "大湾区旅行者",
    "href": "detail/movie-0317.html",
    "cover": "17.jpg",
    "year": "2024",
    "region": "中国",
    "type": "真人秀",
    "genre": "旅行综艺",
    "category": "音乐",
    "description": "两个成长环境截然不同的大叔——一个北京大爷和一个香港阿叔，结伴自驾游遍粤港澳大湾区，在文化碰撞中寻找人间美味与温情。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "城市文化",
      "美食",
      "治愈",
      "搞笑"
    ]
  },
  {
    "title": "八卦神探粤语",
    "href": "detail/movie-0318.html",
    "cover": "18.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑 / 喜剧 / 犯罪",
    "category": "历史",
    "description": "在香港旺角开风水店的阿强，被警方请去当顾问，结果发现每个命案现场的风水局都指向同一个凶手。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "玄学",
      "破案",
      "粤语原声",
      "市井"
    ]
  },
  {
    "title": "青春狂燄",
    "href": "detail/movie-0319.html",
    "cover": "19.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 运动",
    "category": "剧情",
    "description": "一群被学校开除的“问题少女”组成女子棒球队，誓要打败全国冠军男子校队。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "棒球",
      "叛逆少女",
      "热血",
      "底层逆袭"
    ]
  },
  {
    "title": "龙影侠粤语",
    "href": "detail/movie-0320.html",
    "cover": "20.jpg",
    "year": "1999",
    "region": "中国香港",
    "type": "剧集",
    "genre": "动作 / 奇幻 / 武侠",
    "category": "古装",
    "description": "三十年代香港黑帮横行，一名普通厨师意外获得龙形玉佩，化身“龙影侠”行侠仗义。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "ATV",
      "港剧经典",
      "黑帮武侠",
      "变身英雄"
    ]
  },
  {
    "title": "鬼护士",
    "href": "detail/movie-0321.html",
    "cover": "21.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖",
    "category": "科幻",
    "description": "新来的夜班护士发现，医院ICU里那些“自然死亡”的病人，都在死前被一个穿护士服的影子查过房。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "医院灵异",
      "因果报应",
      "夜间值班"
    ]
  },
  {
    "title": "星空",
    "href": "detail/movie-0322.html",
    "cover": "22.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "科幻",
    "description": "贵州深山里，一个从未见过星空的留守儿童，用捡来的废铁造了一座天文台，只为等妈妈回来一起看银河。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "留守儿童",
      "天文梦想",
      "城乡变迁"
    ]
  },
  {
    "title": "太平间闹鬼事件",
    "href": "detail/movie-0323.html",
    "cover": "23.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖, 喜剧",
    "category": "音乐",
    "description": "法医实习生深夜值班，太平间的尸体一个接一个坐了起来，要求她帮忙找手机。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "丧尸",
      "法医",
      "密室逃生",
      "泰式幽默"
    ]
  },
  {
    "title": "星河战队",
    "href": "detail/movie-0324.html",
    "cover": "24.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 动作 / 战争",
    "category": "音乐",
    "description": "新兵强尼在卡门去世后接手“罗杰杨号”，却发现虫族拥有了穿越时空的恐怖新能力。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "太空歌剧",
      "虫族",
      "机甲",
      "政治讽刺",
      "硬核战斗"
    ]
  },
  {
    "title": "北风和太阳的法庭",
    "href": "detail/movie-0325.html",
    "cover": "25.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情, 律政, 奇幻",
    "category": "喜剧",
    "description": "死后的灵魂会进入“北风与太阳法庭”，由两位法官用“强迫”与“感化”两种方式审判你的一生。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "寓言改编",
      "法庭辩论",
      "人性博弈",
      "治愈"
    ]
  },
  {
    "title": "杀绝国语",
    "href": "detail/movie-0326.html",
    "cover": "26.jpg",
    "year": "1978",
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠，动作",
    "category": "都市",
    "description": "江湖传言“无剑山庄”藏有天下第一剑谱，引来无数剑客觊觎，最终却只留下“杀绝”二字。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "邵氏",
      "古龙",
      "江湖",
      "剑客",
      "悬疑"
    ]
  },
  {
    "title": "兔儿爷",
    "href": "detail/movie-0327.html",
    "cover": "27.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 家庭 / 喜剧",
    "category": "励志",
    "description": "顽劣孙子打碎泥塑兔儿爷，竟把爷爷封进了旧时代的老北京庙会里。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "神话",
      "北京",
      "玩具店",
      "代际和解",
      "手工艺"
    ]
  },
  {
    "title": "特工家族",
    "href": "detail/movie-0328.html",
    "cover": "28.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "喜剧 / 动作 / 家庭",
    "category": "喜剧",
    "description": "潜伏多年的国情院特工本想退休当个平凡主妇，却发现对面的新邻居全家都是敌对组织的杀手。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "间谍",
      "卧底",
      "家庭矛盾",
      "邻里大战"
    ]
  },
  {
    "title": "一路向暖第二季",
    "href": "detail/movie-0329.html",
    "cover": "29.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情，家庭，治愈",
    "category": "历史",
    "description": "在东北小城开饺子馆的父亲患上失忆症，女儿辞职返乡，在琐碎日常中拼凑出家族迁徙史。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "东北小城",
      "父女和解",
      "慢生活"
    ]
  },
  {
    "title": "仲夏夜噩梦",
    "href": "detail/movie-0330.html",
    "cover": "30.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "category": "喜剧",
    "description": "六个嬉皮士闯入瑞典偏远村庄参加“仲夏节”，却发现每一场欢庆舞蹈后，都会有一个村民消失在熊皮里。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "民俗",
      "邪教",
      "乡村",
      "北欧",
      "献祭"
    ]
  },
  {
    "title": "何以中国",
    "href": "detail/movie-0331.html",
    "cover": "31.jpg",
    "year": "2023",
    "region": "中国",
    "type": "纪录片",
    "genre": "历史, 文化",
    "category": "音乐",
    "description": "从良渚到二里头，从三星堆到殷墟，我们追问：什么是中国？中国从何而来？",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "考古",
      "中华文明起源",
      "宏大叙事",
      "学术严谨"
    ]
  },
  {
    "title": "校园规则",
    "href": "detail/movie-0332.html",
    "cover": "32.jpg",
    "year": "2003",
    "region": "瑞典",
    "type": "电影",
    "genre": "剧情 / 青春 / 社会",
    "category": "音乐",
    "description": "贵族高中新生不愿加入“欺负低年级”的传统，一个人对抗整座学校的沉默规则。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "霸凌",
      "体制",
      "反抗",
      "北欧冷感"
    ]
  },
  {
    "title": "爱有多远",
    "href": "detail/movie-0333.html",
    "cover": "33.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭 / 伦理 / 都市",
    "category": "喜剧",
    "description": "一对关系疏离的母女，因母亲患上阿尔茨海默症，女儿从美国归来，发现母亲的记忆断层里全是她。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "母女",
      "原生家庭",
      "留学",
      "养老",
      "和解"
    ]
  },
  {
    "title": "另一个男人",
    "href": "detail/movie-0334.html",
    "cover": "34.jpg",
    "year": "2025",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "悬疑, 惊悚, 剧情",
    "category": "剧情",
    "description": "畅销书作家发现丈夫手机里存着一个陌生男人的日常照片，而这个男人的脸和自己年轻时一模一样。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "身份置换",
      "心理惊悚",
      "作家",
      "消失",
      "双生"
    ]
  },
  {
    "title": "内心之火",
    "href": "detail/movie-0335.html",
    "cover": "35.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 运动 / 励志",
    "category": "喜剧",
    "description": "四川大凉山深处，一群从未见过大海的彝族留守少年，被教练带上了征战全国少年棒球锦标赛的荆棘路。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "棒球",
      "留守少年",
      "逆袭",
      "真实改编"
    ]
  },
  {
    "title": "热血勇士",
    "href": "detail/movie-0336.html",
    "cover": "36.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "战争, 动作, 历史",
    "category": "喜剧",
    "description": "1938年台儿庄，五个不同出身的年轻人组成敢死队，每人只带三颗手榴弹和一张全家福。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "抗日",
      "兄弟情",
      "牺牲"
    ]
  },
  {
    "title": "让子弹飞",
    "href": "detail/movie-0337.html",
    "cover": "37.jpg",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "genre": "动作，西部，黑色幽默",
    "category": "历史",
    "description": "民国乱世，假县长带着一帮土匪想捞钱，却发现鹅城的水太深，连子弹都飞不到底。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "土匪",
      "鹅城",
      "以暴制暴",
      "隐喻",
      "权谋"
    ]
  },
  {
    "title": "封神第一部",
    "href": "detail/movie-0338.html",
    "cover": "38.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 战争 / 古装",
    "category": "科幻",
    "description": "商王殷寿被狐妖附身，四大伯侯之子被送入朝歌成为质子，一场权力与人性的绞杀拉开序幕。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "神话",
      "纣王",
      "姜子牙",
      "特效大片",
      "父子弑杀"
    ]
  },
  {
    "title": "天下第一刀",
    "href": "detail/movie-0339.html",
    "cover": "39.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠",
    "category": "剧情",
    "description": "天下第一铸刀师用毕生心血铸成一把刀后，发现买主是杀父仇人，而试刀者是仇人之女也是他的爱人。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "铸刀师",
      "断刀",
      "仇人之女",
      "兵器谱"
    ]
  },
  {
    "title": "大胜利者",
    "href": "detail/movie-0340.html",
    "cover": "40.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 历史, 战争",
    "category": "都市",
    "description": "诺曼底登陆前夕，盟军最不靠谱的骗子被委以重任：用一个假尸体和假情报骗过希特勒。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "二战",
      "情报战",
      "双面间谍",
      "智斗"
    ]
  },
  {
    "title": "禽兽1953",
    "href": "detail/movie-0341.html",
    "cover": "41.jpg",
    "year": "1953",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "category": "都市",
    "description": "退伍军人为了生存沦为黑市打手，在欲望与良知的撕扯中，他发现自己比战争时更像一个禽兽。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "黑白电影",
      "战后阴影",
      "人性深渊",
      "社会派"
    ]
  },
  {
    "title": "刘老根",
    "href": "detail/movie-0342.html",
    "cover": "42.jpg",
    "year": "2002",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧， 剧情， 乡村",
    "category": "剧情",
    "description": "东北农民刘老根退休后不甘寂寞，带领全村在龙泉山庄办起农家乐，却迎来一连串意想不到的麻烦。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "东北",
      "创业",
      "家长里短",
      "农村改革"
    ]
  },
  {
    "title": "乔纳森",
    "href": "detail/movie-0343.html",
    "cover": "43.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "category": "都市",
    "description": "乔纳森每天醒来都是另一个人，直到有一天他醒来时，发现自己是乔纳森，但全世界都不认识他。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "分身",
      "身份认同",
      "哲学",
      "心理",
      "冷门佳作"
    ]
  },
  {
    "title": "我永远爱你",
    "href": "detail/movie-0344.html",
    "cover": "44.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情, 奇幻",
    "category": "古装",
    "description": "她在死前许愿男友忘记自己，却因此让男友陷入了每天失去记忆的无限循环。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "时间循环",
      "绝症",
      "催泪"
    ]
  },
  {
    "title": "人鬼双胞胎国语",
    "href": "detail/movie-0345.html",
    "cover": "45.jpg",
    "year": "1999",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖，惊悚，校园",
    "category": "历史",
    "description": "一对双胞胎姐妹，妹妹车祸身亡后，姐姐开始听见妹妹在耳边说话，并被迫完成她的遗愿。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "双胞胎",
      "附身",
      "国语配音",
      "青春"
    ]
  },
  {
    "title": "黑日危机",
    "href": "detail/movie-0346.html",
    "cover": "46.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作，科幻，惊悚",
    "category": "纪录",
    "description": "一场毁灭性的太阳耀斑让全球电网瘫痪，唯一能重启世界的密钥，藏在已经戒严的白宫地堡深处。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "太阳风暴",
      "末世救援",
      "硬核科幻"
    ]
  },
  {
    "title": "骑单车的人",
    "href": "detail/movie-0347.html",
    "cover": "47.jpg",
    "year": "2026",
    "region": "法国, 意大利",
    "type": "电影",
    "genre": "剧情, 公路, 文艺",
    "category": "喜剧",
    "description": "70岁的前环法车手隐姓埋名在阿尔卑斯山区送报纸，直到一封信揭开他消失30年的秘密。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "单车",
      "送报",
      "老年",
      "回忆",
      "阿尔卑斯山"
    ]
  },
  {
    "title": "大话之少年游",
    "href": "detail/movie-0348.html",
    "cover": "48.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "动画电影",
    "genre": "奇幻 / 冒险 / 喜剧",
    "category": "纪录",
    "description": "取经前十年，少年金蝉子还是个嘴炮满分的小和尚，他带着一只自称“齐天大圣”的猴子开始了笑料百出的游历。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "大话西游IP",
      "少年唐僧",
      "公路片",
      "无厘头"
    ]
  },
  {
    "title": "已经很想妳",
    "href": "detail/movie-0349.html",
    "cover": "49.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 家庭, 奇幻",
    "category": "纪录",
    "description": "母亲去世后，女儿在阁楼发现了一个“寄往未来”的盒子，里面装着妈妈写给未来每一天的她的话。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "思念",
      "时空胶囊",
      "母女",
      "催泪"
    ]
  },
  {
    "title": "小美人鱼2：重返大海",
    "href": "detail/movie-0350.html",
    "cover": "50.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动画, 奇幻, 冒险, 家庭",
    "category": "古装",
    "description": "爱丽儿当了 10 年王妃，发现自己患上了一种“变回人鱼就会死”的怪病，她必须在婚姻与大海间抉择。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "迪士尼",
      "续集",
      "反叛",
      "海洋环保",
      "女性成长"
    ]
  },
  {
    "title": "偷窃法则",
    "href": "detail/movie-0351.html",
    "cover": "51.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "犯罪、悬疑",
    "category": "悬疑",
    "description": "神偷出狱第一天，就被徒弟设局卷入价值十亿的钻石迷局。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "高智商犯罪",
      "师徒对决",
      "反转"
    ]
  },
  {
    "title": "护花惊情",
    "href": "detail/movie-0352.html",
    "cover": "52.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作/喜剧",
    "category": "都市",
    "description": "一个吊儿郎当的混混被警方重金聘用，去保护一名即将出庭指控黑帮老大的美女会计师。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "港片",
      "保镖",
      "警匪",
      "搞笑"
    ]
  },
  {
    "title": "桑迪顿第三季",
    "href": "detail/movie-0353.html",
    "cover": "53.jpg",
    "year": "2022",
    "region": "英国",
    "type": "剧集",
    "genre": "爱情, 历史",
    "category": "剧情",
    "description": "夏洛特回到桑迪顿时，帕克先生的未婚妻正站在她面前，但所有人都知道她不是真的未婚妻。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "简·奥斯汀",
      "海边小镇",
      "阶层",
      "未完成遗作"
    ]
  },
  {
    "title": "赛马小天王",
    "href": "detail/movie-0354.html",
    "cover": "54.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "体育励志",
    "category": "励志",
    "description": "草原上的“废柴”少年骑着拉货车的老马，赢了城市马术俱乐部最贵的纯血马。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "赛马",
      "草原",
      "父子",
      "成长",
      "逆袭"
    ]
  },
  {
    "title": "黑牛与白蛇",
    "href": "detail/movie-0355.html",
    "cover": "55.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻, 动作, 爱情",
    "category": "音乐",
    "description": "黑牛精为报恩化身保镖，却发现要保护的小姐竟是千年白蛇。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "民间传说",
      "妖兽",
      "反套路",
      "水墨风"
    ]
  },
  {
    "title": "双程2",
    "href": "detail/movie-0356.html",
    "cover": "56.jpg",
    "year": "2019",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情，爱情，悬疑",
    "category": "古装",
    "description": "为了拯救意外身亡的爱人，他意外陷入一趟永无止境的死亡巴士，每一次醒来都是同一个吻别后的清晨。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "时间循环",
      "同性",
      "救赎",
      "宿命"
    ]
  },
  {
    "title": "功夫特务",
    "href": "detail/movie-0357.html",
    "cover": "57.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "动作, 喜剧",
    "category": "爱情",
    "description": "朝鲜神秘武术家族的末代传人，为救妹妹被迫成为韩国国情院的“古代流”特务。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "朝鲜武术",
      "国情院",
      "间谍",
      "反差萌"
    ]
  },
  {
    "title": "漂流两颗心",
    "href": "detail/movie-0358.html",
    "cover": "58.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画电影",
    "genre": "爱情 / 奇幻 / 灾难",
    "category": "励志",
    "description": "巨型邮轮沉没后，一对陌生男女困在同一块救生浮板上，却发现他们拥有彼此丢失的记忆。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "末日漂流",
      "记忆碎片",
      "海难幸存",
      "纯爱",
      "治愈"
    ]
  },
  {
    "title": "不羁小子",
    "href": "detail/movie-0359.html",
    "cover": "59.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "青春 / 犯罪",
    "category": "动作",
    "description": "1997年前夕，四个香港屋邨少年因一箱黑钱被迫一夜长大。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "街头",
      "兄弟情",
      "90年代"
    ]
  },
  {
    "title": "乱世丽人行",
    "href": "detail/movie-0360.html",
    "cover": "60.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "战争 / 女性 / 历史",
    "category": "古装",
    "description": "1937年南京沦陷前夕，金陵女子学院的四位女学生被迫跟随医院西迁，在炮火中学会的不只是救人，还有杀人。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "抗日战争",
      "女护士",
      "战地医院",
      "姐妹情"
    ]
  },
  {
    "title": "奇迹舞社",
    "href": "detail/movie-0361.html",
    "cover": "61.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春 / 歌舞 / 励志",
    "category": "励志",
    "description": "一个即将倒闭的舞社，一群被主流赛事抛弃的“怪胎舞者”，她们要用街舞去巴黎参加听障奥运会开幕式。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "街舞竞技",
      "听障舞者",
      "热泪盈眶",
      "团魂",
      "地下舞场"
    ]
  },
  {
    "title": "亨德逊夫人敬献",
    "href": "detail/movie-0362.html",
    "cover": "62.jpg",
    "year": "2005",
    "region": "英国",
    "type": "电影",
    "genre": "剧情、喜剧、历史",
    "category": "科幻",
    "description": "伦敦最时髦的老寡妇买下了一家破败剧院，上演裸体歌舞秀，丘吉尔也成了她的座上宾。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "剧院",
      "裸体舞台",
      "二战",
      "老妇人"
    ]
  },
  {
    "title": "刺梨花开",
    "href": "detail/movie-0363.html",
    "cover": "63.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 乡村",
    "category": "青春",
    "description": "贵州山区女孩返乡创业，用满山刺梨酿出逆袭人生，却意外揭开身世之谜。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "乡村振兴",
      "女性力量",
      "创业"
    ]
  },
  {
    "title": "呼伦贝尔城",
    "href": "detail/movie-0364.html",
    "cover": "64.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 历史",
    "category": "科幻",
    "description": "民国时期，一座中俄边境的草原贸易站，一个汉人孤儿如何成为草原上最有权势的“草原王”。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "草原",
      "商战",
      "民国",
      "家族史诗",
      "民族"
    ]
  },
  {
    "title": "姚明来了",
    "href": "detail/movie-0365.html",
    "cover": "65.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 奇幻, 体育",
    "category": "音乐",
    "description": "一个身高一米六的篮球废柴，意外和巅峰时期的姚明互换了身体，却发现自己依然打不好篮球。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "篮球",
      "互换身体",
      "小镇",
      "梦想"
    ]
  },
  {
    "title": "国家德比",
    "href": "detail/movie-0366.html",
    "cover": "66.jpg",
    "year": "2020",
    "region": "西班牙",
    "type": "电影",
    "genre": "运动",
    "category": "动作",
    "description": "一场皇马对巴萨的世纪大战前夜，两边的极端球迷头子却被困在了同一部电梯里。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "足球",
      "宿敌",
      "人性"
    ]
  },
  {
    "title": "嘻哈女王组",
    "href": "detail/movie-0367.html",
    "cover": "67.jpg",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情，音乐，喜剧",
    "category": "奇幻",
    "description": "四个费城底层女孩组成说唱团体，她们抢了毒贩的音响，却被当地传奇MC收为徒弟。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "全女性说唱",
      "费城",
      "地下battle",
      "平权",
      "姐妹情"
    ]
  },
  {
    "title": "兄弟国语",
    "href": "detail/movie-0368.html",
    "cover": "68.jpg",
    "year": "2007",
    "region": "香港",
    "type": "电影",
    "genre": "剧情, 动作",
    "category": "奇幻",
    "description": "一对失散多年的亲兄弟，重逢时却一个是警察，一个是即将洗白的黑帮大佬。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "黑帮",
      "手足情",
      "宿命",
      "双雄"
    ]
  },
  {
    "title": "赛尔玛",
    "href": "detail/movie-0369.html",
    "cover": "69.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "传记, 历史, 剧情",
    "category": "动作",
    "description": "1965年“血色星期日”后，一群普通人决定从塞尔玛走到蒙哥马利，用脚步逼总统签署《投票权法案》。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "种族平权",
      "马丁·路德·金",
      "民权运动",
      "奥斯卡系"
    ]
  },
  {
    "title": "叛谍档案",
    "href": "detail/movie-0370.html",
    "cover": "70.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "动作, 惊悚, 谍战",
    "category": "青春",
    "description": "一名失去记忆的中情局前特工，在牙膏包装的锡纸上发现了自己留下的叛国罪证据。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "CIA",
      "记忆删除",
      "追凶",
      "阴谋论"
    ]
  },
  {
    "title": "黑色池塘",
    "href": "detail/movie-0371.html",
    "cover": "71.jpg",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "category": "奇幻",
    "description": "五个高中生去野营，发现池塘水夜里会变成黑色，而倒影里少了一个人。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "心理惊悚",
      "乡村怪谈",
      "超自然",
      "青少年"
    ]
  },
  {
    "title": "惧水之恋",
    "href": "detail/movie-0372.html",
    "cover": "72.jpg",
    "year": "2019",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情 / 奇幻 / 剧情",
    "category": "喜剧",
    "description": "怕水的游泳馆救生员，遇见了能让他溺水身亡的前世情人。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "水恐惧症",
      "前世今生",
      "唯美",
      "悲剧"
    ]
  },
  {
    "title": "情挑淑女心",
    "href": "detail/movie-0373.html",
    "cover": "73.jpg",
    "year": "1999",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "喜剧",
    "description": "一名穷画家的女仆受雇在贵族宴会上假装富家千金，却爱上了真正的穷画家。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "调情",
      "阶层",
      "伪装",
      "庄园"
    ]
  },
  {
    "title": "红线",
    "href": "detail/movie-0374.html",
    "cover": "74.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "都市/悬疑",
    "category": "古装",
    "description": "一款能预测婚姻走向的APP“红线”，让三对情侣在婚礼前夕看到了对方未来的背叛。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "姻缘",
      "平行宇宙",
      "选择困境"
    ]
  },
  {
    "title": "尽情游戏",
    "href": "detail/movie-0375.html",
    "cover": "75.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "惊悚， 悬疑， 动作",
    "category": "音乐",
    "description": "六名素不相识的失业者被诱入一场真人版手机游戏，输家将永久“注销”现实身份。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "生存游戏",
      "大逃杀",
      "反转",
      "社会隐喻"
    ]
  },
  {
    "title": "新蔷薇少女",
    "href": "detail/movie-0376.html",
    "cover": "76.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻 / 悬疑",
    "category": "剧情",
    "description": "七个被封印在古董店的人偶苏醒，她们宣称要选出“真正的主人”，而游戏失败者将永远消失。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "人偶",
      "异世界",
      "心理战",
      "哥特美学"
    ]
  },
  {
    "title": "爸爸是坏人冠军",
    "href": "detail/movie-0377.html",
    "cover": "77.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情，家庭，运动",
    "category": "古装",
    "description": "一个在擂台上扮演“史上最坏反派”的摔角手，为了不让女儿发现真相，拼命想拿一次冠军来证明自己是好人。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "摔角手",
      "父女情",
      "角色扮演",
      "热血催泪"
    ]
  },
  {
    "title": "共生心理分类学",
    "href": "detail/movie-0378.html",
    "cover": "78.jpg",
    "year": "1986",
    "region": "苏联",
    "type": "电影/科幻哲理",
    "genre": "科幻, 剧情, 哲理",
    "category": "悬疑",
    "description": "苏联科学家发明了“心理共振舱”，试图将五个死刑犯的意识融合成一个完美的“集体人格”。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "心理学实验",
      "乌托邦",
      "集体意识",
      "冷峻美学"
    ]
  },
  {
    "title": "猛鬼大暴动",
    "href": "detail/movie-0379.html",
    "cover": "79.jpg",
    "year": "1992",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧，恐怖",
    "category": "纪录",
    "description": "一群被开发商逼死的鬼魂，和一群被律师忽悠的租客，在一栋百年老宅里，共同抵抗拆迁队。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "僵尸",
      "鬼屋",
      "无厘头",
      "搞笑",
      "群像"
    ]
  },
  {
    "title": "大清神捕2",
    "href": "detail/movie-0380.html",
    "cover": "80.jpg",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "genre": "古装，悬疑，动作",
    "category": "动作",
    "description": "一场祭祀大典上的“神明斩首”，迫使第一季幸存的神捕与神秘萨满联手，揭开王朝背后的远古诅咒。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "捕快",
      "超自然",
      "朝堂斗争",
      "密室杀人"
    ]
  },
  {
    "title": "杀人执照",
    "href": "detail/movie-0381.html",
    "cover": "81.jpg",
    "year": "1989",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "动作 / 惊悚 / 谍战",
    "category": "剧情",
    "description": "邦德的好友被毒枭虐杀，M夫人撤销他的杀人执照，愤怒的邦德决定私自复仇。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "007",
      "复仇",
      "拉丁美洲"
    ]
  },
  {
    "title": "银河守护队",
    "href": "detail/movie-0382.html",
    "cover": "82.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 冒险 / 喜剧",
    "category": "纪录",
    "description": "为了拯救宇宙银行免于破产，浣熊火箭不得不去偷一颗能让时间倒流的“宇宙珍珠”。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "宇宙冒险",
      "天团回归",
      "劲歌金曲",
      "嘴炮无敌",
      "特效大片"
    ]
  },
  {
    "title": "仙人跳",
    "href": "detail/movie-0383.html",
    "cover": "83.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 犯罪",
    "category": "动作",
    "description": "一伙笨贼想用美人计敲诈土大款，结果发现土大款是同行，而目标对象竟是个真神仙。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "诈骗",
      "荒诞",
      "黑色幽默",
      "多线叙事",
      "倒霉蛋"
    ]
  },
  {
    "title": "非法移民",
    "href": "detail/movie-0384.html",
    "cover": "84.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 犯罪, 社会",
    "category": "都市",
    "description": "一个墨西哥父亲背着女儿穿越沙漠偷渡美国，却发现女儿根本不是他亲生的。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "移民",
      "边境",
      "偷渡",
      "人性",
      "写实"
    ]
  },
  {
    "title": "与神同行的少年",
    "href": "detail/movie-0385.html",
    "cover": "85.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 冒险 / 奇幻",
    "category": "励志",
    "description": "叛逆少年被送入修道院改造，却意外发现自己是被选中的“神之信使”。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "少年成长",
      "宗教奇幻",
      "心灵之旅",
      "公路片"
    ]
  },
  {
    "title": "绝地盟约",
    "href": "detail/movie-0386.html",
    "cover": "86.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "genre": "惊悚，动作，犯罪",
    "category": "纪录",
    "description": "两名卧底警察在黑帮中成为生死兄弟，却发现对方竟是敌对家族的卧底。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "黑帮",
      "卧底",
      "兄弟情",
      "背叛"
    ]
  },
  {
    "title": "同途她是他",
    "href": "detail/movie-0387.html",
    "cover": "87.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，同性",
    "category": "科幻",
    "description": "每晚凌晨，她都会坐进他的出租车，直到有一天，他卸掉妆容，对她说：“我是女人。”",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "性别",
      "身份互换",
      "出租车",
      "邂逅",
      "都市"
    ]
  },
  {
    "title": "尸中罪",
    "href": "detail/movie-0388.html",
    "cover": "88.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "category": "剧情",
    "description": "法医在一具无名男尸的胃里，发现了一枚刻着自己工号的牙齿。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "法医",
      "连环杀人",
      "器官黑市",
      "记忆回溯"
    ]
  },
  {
    "title": "神兽麻将馆",
    "href": "detail/movie-0389.html",
    "cover": "89.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "奇幻，悬疑，喜剧",
    "category": "科幻",
    "description": "一家深夜营业的麻将馆，每个客人都是《山海经》里的神兽，而输掉麻将的人会被永久抹去存在。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "山海经",
      "都市传说",
      "麻将",
      "民俗恐怖"
    ]
  },
  {
    "title": "极品老妈第一季",
    "href": "detail/movie-0390.html",
    "cover": "90.jpg",
    "year": "2013",
    "region": "美国",
    "type": "电视剧",
    "genre": "喜剧, 家庭",
    "category": "古装",
    "description": "一个曾经酗酒、如今努力戒酒的单身餐厅服务员，发现自己的毒舌老妈突然搬来同住。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "情景喜剧",
      "酗酒",
      "单亲妈妈",
      "生活囧事",
      "友情"
    ]
  },
  {
    "title": "安妮回忆录",
    "href": "detail/movie-0391.html",
    "cover": "91.jpg",
    "year": "2019",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情 / 传记 / 悬疑",
    "category": "青春",
    "description": "八旬老太撰写回忆录时，发现自己的童年记忆与妹妹的日记全然不同，到底谁在撒谎？",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "身份认同",
      "记忆造假",
      "家族秘密",
      "叙事陷阱"
    ]
  },
  {
    "title": "改变未来",
    "href": "detail/movie-0392.html",
    "cover": "92.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻， 惊悚， 动作",
    "category": "剧情",
    "description": "2050 年的时空管理局发现，所有试图修改历史的行动，都指向同一天——他被开除的那天。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "时间旅行",
      "平行修正",
      "因果连锁"
    ]
  },
  {
    "title": "逃亡的女孩",
    "href": "detail/movie-0393.html",
    "cover": "93.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚，剧情",
    "category": "历史",
    "description": "被贩卖的东欧女孩在高速公路上跳车逃亡，她必须在这个冷漠的世界里，跑出一个不被送回“狼窝”的生存缺口。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "女性",
      "反杀",
      "社会议题",
      "公路"
    ]
  },
  {
    "title": "挖井人的女儿",
    "href": "detail/movie-0394.html",
    "cover": "94.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "爱情",
    "description": "法国南部乡村，一个拒绝相亲的挖井人女儿固执地等待去巴黎打工的恋人，直到一封退信改写了她的命运。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "乡土",
      "父女",
      "倔强",
      "成长"
    ]
  },
  {
    "title": "我俩的时代",
    "href": "detail/movie-0395.html",
    "cover": "95.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情 / 剧情 / 奇幻",
    "category": "动作",
    "description": "一个生活在2025年的女孩，通过一部旧手机与来自2005年的男孩跨时空相恋，他们试图改变彼此命运的终点。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "平行时空",
      "泰式小清新",
      "初恋",
      "怀旧",
      "手机"
    ]
  },
  {
    "title": "大八卦粤语",
    "href": "detail/movie-0396.html",
    "cover": "96.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧 / 都市",
    "category": "奇幻",
    "description": "深水埗茶餐厅老板“大八卦”开设热线，专门帮街坊邻里解决鸡毛蒜皮的奇葩纠纷，顺便揭穿各种社会骗局。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "市井",
      "搞笑",
      "八卦",
      "单元剧"
    ]
  },
  {
    "title": "阮玲玉",
    "href": "detail/movie-0397.html",
    "cover": "97.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "传记 / 剧情",
    "category": "古装",
    "description": "一代影星阮玲玉的死亡背后，藏着一盘被销毁的胶片和一封从未寄出的信。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "民国",
      "女星",
      "悲剧",
      "戏中戏"
    ]
  },
  {
    "title": "狼（2013）",
    "href": "detail/movie-0398.html",
    "cover": "98.jpg",
    "year": "2013",
    "region": "英国",
    "type": "电影",
    "genre": "剧情，惊悚，心理",
    "category": "励志",
    "description": "一个坚信自己是狼的男孩被父母送进神秘矫正营，在那里他遇到了更危险的“同类”。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "动物人格",
      "家庭暴力",
      "自闭",
      "救赎"
    ]
  },
  {
    "title": "记得我",
    "href": "detail/movie-0399.html",
    "cover": "99.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情 / 奇幻",
    "category": "纪录",
    "description": "一位阿尔茨海默症老人每天都会忘记一切，但他的灵魂每晚都会穿越回80年代，重新爱上年轻的她。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "阿尔茨海默",
      "穿越",
      "初恋",
      "催泪"
    ]
  },
  {
    "title": "凤冠情事",
    "href": "detail/movie-0400.html",
    "cover": "100.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装、爱情、戏曲",
    "category": "青春",
    "description": "民国时期，一位京剧名伶在台上演《贵妃醉酒》，台下却卷入了一顶真实凤冠引发的军阀争夺与生死之恋。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "京剧",
      "戏中戏",
      "虐恋",
      "非遗"
    ]
  },
  {
    "title": "天地孩儿",
    "href": "detail/movie-0401.html",
    "cover": "101.jpg",
    "year": "1999",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "都市",
    "description": "深水埗天台上一所破旧学校，六个无家可归的孩子和一位固执的老校长，共同对抗拆迁令。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "孤儿",
      "天台学校",
      "香港旧事",
      "师生"
    ]
  },
  {
    "title": "巴黎之恋",
    "href": "detail/movie-0402.html",
    "cover": "102.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "category": "动作",
    "description": "一位去巴黎散心的日本图书编辑，误把街头画家当成了酒店服务生，两人展开一场身份谎言大作战。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "异国偶遇",
      "错位身份",
      "巴黎地标",
      "一夜情变真爱"
    ]
  },
  {
    "title": "枪械师",
    "href": "detail/movie-0403.html",
    "cover": "103.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "青春",
    "description": "全美最顶级的枪械定制师被黑帮灭门，他用自己定制的每一把枪，一颗一颗子弹地复仇。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "枪械文化",
      "孤胆英雄",
      "硬核",
      "复仇"
    ]
  },
  {
    "title": "鬼整人",
    "href": "detail/movie-0404.html",
    "cover": "104.jpg",
    "year": "1995",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧 / 恐怖",
    "category": "励志",
    "description": "生前被整蛊致死的龙套演员，死后变成了史上最爱整人的鬼。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "恶作剧",
      "冤魂",
      "港式幽默",
      "复仇"
    ]
  },
  {
    "title": "色情男女",
    "href": "detail/movie-0405.html",
    "cover": "105.jpg",
    "year": "1996",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 情色, 喜剧, 职场",
    "category": "青春",
    "description": "一位坚持艺术的导演为了生存被迫拍三级片，却意外在这“低俗”行当里找到了真正的自我表达。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "尔冬升",
      "张国荣",
      "三级片幕后",
      "理想与现实"
    ]
  },
  {
    "title": "杀入爱情街",
    "href": "detail/movie-0406.html",
    "cover": "106.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情、犯罪、动作",
    "category": "纪录",
    "description": "为了完成任务，卧底警察不得不追求黑帮老大的女儿，却发现自己真的爱上了这把刺向心脏的刀。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "黑帮",
      "卧底",
      "禁忌之恋",
      "霓虹美学",
      "宿命"
    ]
  },
  {
    "title": "街头舞者",
    "href": "detail/movie-0407.html",
    "cover": "107.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "音乐 / 剧情",
    "category": "音乐",
    "description": "地铁站里跳了五年舞的街头艺人被星探发现，签约时才发现合同是让他给顶流歌手当影子替身。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "街舞",
      "街头艺人",
      "梦想与现实"
    ]
  },
  {
    "title": "西洋古董洋果子店",
    "href": "detail/movie-0408.html",
    "cover": "108.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "美食 / 剧情 / 喜剧",
    "category": "都市",
    "description": "一个前拳击手、一个恐同蛋糕师、一个中年离婚社长和一个小偷服务生，共同经营一家只有古董没有客人的蛋糕店。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "甜点",
      "治愈",
      "职场",
      "友情"
    ]
  },
  {
    "title": "惠安女",
    "href": "detail/movie-0409.html",
    "cover": "109.jpg",
    "year": "2003",
    "region": "中国大陆",
    "type": "电影",
    "genre": "文艺剧情",
    "category": "悬疑",
    "description": "惠安海边，一个戴斗笠的女人试图用一生来打破“丈夫不归，妻子不嫁”的诅咒。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "女性",
      "民俗",
      "海边",
      "传统与反抗",
      "诗意"
    ]
  },
  {
    "title": "玉腿花拳",
    "href": "detail/movie-0410.html",
    "cover": "110.jpg",
    "year": "2026",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "genre": "动作, 喜剧, 武侠",
    "category": "家庭",
    "description": "民国初年，一个只会绣花的千金小姐误打误撞成为女侠，而她的绝招竟是“用绣花针点穴”。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "女性武侠",
      "功夫喜剧",
      "民国",
      "反串"
    ]
  },
  {
    "title": "轻音少女第二季 粤语版",
    "href": "detail/movie-0411.html",
    "cover": "111.jpg",
    "year": "2010",
    "region": "日本 / 中国香港",
    "type": "剧集",
    "genre": "动画 / 音乐",
    "category": "科幻",
    "description": "樱丘高中轻音部即将迎来毕业，呆唯和她的伙伴们在最后的社团时光里，用音乐写下最动人的告别。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "青春",
      "校园",
      "乐队",
      "粤语配音"
    ]
  },
  {
    "title": "大话武林",
    "href": "detail/movie-0412.html",
    "cover": "112.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 武侠",
    "category": "古装",
    "description": "一个跆拳道教练穿越到南宋，用现代体育规则打爆了武林。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "恶搞",
      "穿越",
      "武馆",
      "无厘头"
    ]
  },
  {
    "title": "智勇三宝",
    "href": "detail/movie-0413.html",
    "cover": "113.jpg",
    "year": "1985",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作 / 家庭",
    "category": "音乐",
    "description": "神偷、神探和神童三人组队，去追回被国际大盗偷走的限量版邮票。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "港式合家欢",
      "乌龙警探",
      "神童",
      "黄金年代"
    ]
  },
  {
    "title": "她的一生2011",
    "href": "detail/movie-0414.html",
    "cover": "114.jpg",
    "year": "2011",
    "region": "日本",
    "type": "剧集",
    "genre": "家庭/生活",
    "category": "悬疑",
    "description": "昭和年代，一位贫困渔村的女孩从二战废墟中爬起，用七十年时间撑起了四个孩子的天空。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "女性",
      "跨时代",
      "坚韧",
      "成长",
      "昭和"
    ]
  },
  {
    "title": "重要人物",
    "href": "detail/movie-0415.html",
    "cover": "115.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情, 悬疑, 职场",
    "category": "悬疑",
    "description": "总统候选人突然暴毙，他的七个替身被关进一间密室，被告知“真凶就在你们中间，活到最后的才能上台”。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "政治讽刺",
      "替身",
      "权力游戏",
      "黑马"
    ]
  },
  {
    "title": "那天的氛围",
    "href": "detail/movie-0416.html",
    "cover": "116.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "category": "动作",
    "description": "在釜山开往首尔的末班列车上，一对陌生男女约定：如果明天之前不下车，就在一起。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "一夜情",
      "车站邂逅",
      "限时爱情",
      "成年人感情"
    ]
  },
  {
    "title": "追马记",
    "href": "detail/movie-0417.html",
    "cover": "117.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 冒险",
    "category": "科幻",
    "description": "为了挽救父亲濒临倒闭的养马场，一个都市叛逆少年踏上了寻找传说中野马群的草原征途。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "公路",
      "成长",
      "父子和解",
      "草原"
    ]
  },
  {
    "title": "抵达之谜",
    "href": "detail/movie-0418.html",
    "cover": "118.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "category": "剧情",
    "description": "一辆从上海开往拉萨的夜间大巴上，七名乘客都说自己是失踪十年的女孩“小枝”。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "公路",
      "失踪",
      "记忆",
      "多重反转",
      "心理"
    ]
  },
  {
    "title": "那一夜，我怀孕了",
    "href": "detail/movie-0419.html",
    "cover": "119.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 女性",
    "category": "喜剧",
    "description": "一位有男友的OL一夜情后意外怀孕，男友不认，她决定生下孩子，却因此揭开了自己竟是“试管婴儿”的身世秘密。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "意外怀孕",
      "单亲妈妈",
      "职场歧视",
      "成长",
      "写实"
    ]
  },
  {
    "title": "人间魔",
    "href": "detail/movie-0420.html",
    "cover": "120.jpg",
    "year": "1998",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "category": "奇幻",
    "description": "台北一栋老公寓里接连发生住户发疯事件，调查发现每户都藏着一个写满名字的布娃娃。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "邪教",
      "都市传说",
      "cult"
    ]
  },
  {
    "title": "我地狱般的高中生活",
    "href": "detail/movie-0421.html",
    "cover": "121.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "校园悬疑",
    "category": "纪录",
    "description": "毕业十周年同学会，昔日的班长把当年参与霸凌的十二名同学骗回学校，开启了一场“审判游戏”。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "霸凌复仇",
      "密闭空间",
      "社会派推理",
      "POV叙事"
    ]
  },
  {
    "title": "唱！",
    "href": "detail/movie-0422.html",
    "cover": "122.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧, 音乐",
    "category": "爱情",
    "description": "一名被降职到乡村中学的精英音乐教师，被迫组建一支由全校最差生组成的合唱团。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "高中合唱团",
      "问题学生",
      "逆袭"
    ]
  },
  {
    "title": "西伯利亚和他",
    "href": "detail/movie-0423.html",
    "cover": "123.jpg",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情",
    "category": "动作",
    "description": "一名气象学家被困西伯利亚孤站，唯一的交流对象竟是自己的幻觉。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "极地",
      "孤独",
      "自我救赎"
    ]
  },
  {
    "title": "小脚板走天涯2",
    "href": "detail/movie-0424.html",
    "cover": "124.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "动画 / 冒险 / 家庭",
    "category": "家庭",
    "description": "为了寻找传说中的“永不干涸之地”，小脚板和朋友们踏上横跨末日废土的新冒险。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "经典续作",
      "萌宠",
      "环保",
      "寻找家园"
    ]
  },
  {
    "title": "鸳鸯舞圣",
    "href": "detail/movie-0425.html",
    "cover": "125.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 歌舞",
    "category": "喜剧",
    "description": "一对孪生武打替身，一人伤腿，一人伤手，他们必须合体完成一场不可能的双人舞。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "舞蹈",
      "兄弟情",
      "替身"
    ]
  },
  {
    "title": "乌鸦：天空的流氓",
    "href": "detail/movie-0426.html",
    "cover": "126.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "喜剧 / 动画",
    "category": "青春",
    "description": "一只城市乌鸦为了报复捕鸟人，组织全城鸟类上演了一场“空中城管”行动。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "拟人化动物",
      "黑色幽默",
      "环保",
      "反英雄"
    ]
  },
  {
    "title": "随风而逝的记忆",
    "href": "detail/movie-0427.html",
    "cover": "127.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 科幻",
    "category": "爱情",
    "description": "一家科技公司能删除指定记忆，他却选择删除了儿子存在的所有痕迹。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "记忆删除",
      "阿尔茨海默症",
      "亲情",
      "催泪"
    ]
  },
  {
    "title": "十字路口2021",
    "href": "detail/movie-0428.html",
    "cover": "128.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 青春",
    "category": "喜剧",
    "description": "2021年疫情下的东京，四个高三学生在毕业前的最后一个冬天，站在了各自人生的十字路口。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "毕业季",
      "人生选择",
      "群像",
      "日式细腻",
      "成长疼痛"
    ]
  },
  {
    "title": "夏威夷特勤组第三季",
    "href": "detail/movie-0429.html",
    "cover": "129.jpg",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 犯罪 / 悬疑",
    "category": "都市",
    "description": "一名前CIA分析师加入特勤组，但她带来的不仅是超强情报网，还有来自华盛顿的追杀令。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "阳光暴力",
      "海岛罪案",
      "高科技追凶",
      "团队重组",
      "每集一反转"
    ]
  },
  {
    "title": "绝不投降",
    "href": "detail/movie-0430.html",
    "cover": "130.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 剧情, 传记",
    "category": "剧情",
    "description": "一位失业教师偶然走进摔跤俱乐部，用从未赢过的战绩改写了体育教材。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "运动",
      "励志",
      "摔跤",
      "真实改编"
    ]
  },
  {
    "title": "金鎗独行侠",
    "href": "detail/movie-0431.html",
    "cover": "131.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影 动作, 武侠",
    "genre": "枪战, 江湖",
    "category": "悬疑",
    "description": "民国乱世，一位使用纯金定制左轮手枪的枪手，单枪匹马对抗整个军阀势力。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "独行侠",
      "改装枪械",
      "复仇"
    ]
  },
  {
    "title": "罪无可赦",
    "href": "detail/movie-0432.html",
    "cover": "132.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑, 犯罪, 动作",
    "category": "悬疑",
    "description": "法律无法惩戒的恶魔，由他来亲手制裁，直到他遇见了一桩连他都无法判断对错的案件。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "以暴制暴",
      "私刑",
      "复仇",
      "反转",
      "罗生门"
    ]
  },
  {
    "title": "七岁孩子的祝仪",
    "href": "detail/movie-0433.html",
    "cover": "133.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭 / 悬疑",
    "category": "音乐",
    "description": "七岁生日那天，母亲让我为自己准备葬礼上的祝仪词。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "童年阴影",
      "诡异仪式",
      "家族秘密",
      "心理惊悚"
    ]
  },
  {
    "title": "海上秃鹰",
    "href": "detail/movie-0434.html",
    "cover": "134.jpg",
    "year": "1958",
    "region": "美国",
    "type": "电影",
    "genre": "战争， 动作， 剧情",
    "category": "音乐",
    "description": "二战尾声，一名因伤退役的前海军王牌飞行员，自愿执行最后一次自杀式潜艇护航任务。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "黑白片",
      "潜艇战",
      "复仇",
      "海军",
      "牺牲"
    ]
  },
  {
    "title": "恶魔奎维托克",
    "href": "detail/movie-0435.html",
    "cover": "135.jpg",
    "year": "2024",
    "region": "挪威",
    "type": "电影",
    "genre": "恐怖 / 民俗 / 惊悚",
    "category": "科幻",
    "description": "北极圈内的一座孤岛上，渔民们每三十年就要选出一名“祭品”献给沉睡在冰层下的古老恶魔。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "北欧神话",
      "怪物",
      "孤岛",
      "仪式",
      "心理恐怖"
    ]
  },
  {
    "title": "雾水总统",
    "href": "detail/movie-0436.html",
    "cover": "136.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "category": "剧情",
    "description": "一夜荒唐后，公关女强人发现昨晚的床伴竟是即将上任的美国总统。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "一夜情",
      "白宫",
      "身份错位",
      "政治"
    ]
  },
  {
    "title": "纯真岁月",
    "href": "detail/movie-0437.html",
    "cover": "137.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "TV Series",
    "genre": "年代，家庭，剧情",
    "category": "家庭",
    "description": "三个知青家庭回城后住进同一栋筒子楼，从计划经济到市场经济，五十年恩怨见证了时代的变迁。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "知青",
      "返城",
      "改革开放",
      "青梅竹马",
      "怀旧"
    ]
  },
  {
    "title": "寅次郎的故事：欢迎归来",
    "href": "detail/movie-0438.html",
    "cover": "138.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "genre": "剧情、喜剧、家庭",
    "category": "爱情",
    "description": "那个永远在旅途中、永远失恋的寅次郎，时隔多年后再次回到了葛饰柴又。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "系列50周年",
      "浪子",
      "怀旧",
      "葛饰区",
      "温情"
    ]
  },
  {
    "title": "夜色行动",
    "href": "detail/movie-0439.html",
    "cover": "139.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪, 惊悚",
    "category": "奇幻",
    "description": "三个环保激进分子策划了一场针对水坝的夜间破坏行动，却意外卷入了一起谋杀案。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "环保恐怖主义",
      "夜间潜入",
      "道德困境"
    ]
  },
  {
    "title": "不眠日",
    "href": "detail/movie-0440.html",
    "cover": "140.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "科幻， 悬疑",
    "category": "奇幻",
    "description": "卑微打工人意外进入“不眠日”——时间停止，只有他可以在无限的时间中醒来。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "时间循环",
      "职场压榨",
      "无限流",
      "国产悬疑"
    ]
  },
  {
    "title": "非法交易",
    "href": "detail/movie-0441.html",
    "cover": "141.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚，犯罪，剧情",
    "category": "音乐",
    "description": "一名调查记者潜入地下器官买卖网络，却发现自己成了下一个“货源”。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "器官走私",
      "记者调查",
      "黑市",
      "悬疑"
    ]
  },
  {
    "title": "虹猫蓝兔奥悠国历险记",
    "href": "detail/movie-0442.html",
    "cover": "142.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画",
    "genre": "冒险, 奇幻, 儿童",
    "category": "动作",
    "description": "虹猫蓝兔收到来自神秘奥悠国的求救信号，到达后发现整个王国被一种“逆生长病毒”困在了永恒的童年。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "虹猫蓝兔",
      "续作",
      "友情",
      "解谜",
      "环保"
    ]
  },
  {
    "title": "为你存在的每一天",
    "href": "detail/movie-0443.html",
    "cover": "143.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 剧情 / 奇幻",
    "category": "古装",
    "description": "每天醒来，他都忘记昨天爱过她，而她选择在同一个便利店的同一个货架前，让他第365次重新爱上自己。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "时间重置",
      "便利店",
      "日系治愈",
      "失忆恋人",
      "日常奇迹"
    ]
  },
  {
    "title": "塞外有家",
    "href": "detail/movie-0444.html",
    "cover": "144.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 西部",
    "category": "家庭",
    "description": "城市女孩将患有阿尔茨海默症的奶奶送回内蒙古草原，奶奶指着每一座蒙古包都说“这是我家”。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "内蒙",
      "草原",
      "知青",
      "寻根"
    ]
  },
  {
    "title": "夺命尸杀",
    "href": "detail/movie-0445.html",
    "cover": "145.jpg",
    "year": "2016",
    "region": "韩国",
    "type": "电影",
    "genre": "动作，恐怖，惊悚",
    "category": "纪录",
    "description": "一种不明病毒在飞驰的高铁上极速蔓延，幸存者们在封闭车厢内为了活命展开了最残酷的厮杀。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "极限逃生",
      "僵尸",
      "列车",
      "人性拷问"
    ]
  },
  {
    "title": "祇园歌女",
    "href": "detail/movie-0446.html",
    "cover": "146.jpg",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 文艺",
    "category": "喜剧",
    "description": "年轻歌女在祇园意外获得一台老式录音机，里面竟藏着她失踪母亲的最后一曲。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "京都",
      "艺伎",
      "传统与现代"
    ]
  },
  {
    "title": "史泰登岛国王",
    "href": "detail/movie-0447.html",
    "cover": "147.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "category": "喜剧",
    "description": "30岁还住在史泰登岛地下室的男人，被母亲新恋情逼得不得不开始面对自己的人生废墟。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "废柴青年",
      "家庭和解",
      "小人物成长"
    ]
  },
  {
    "title": "吻灭",
    "href": "detail/movie-0448.html",
    "cover": "148.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "爱情 / 惊悚",
    "category": "古装",
    "description": "被诅咒的女孩，只要与自己真心相爱的人接吻，对方就会在七天后死去。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "诅咒",
      "宿命",
      "悬疑爱恋",
      "反转"
    ]
  },
  {
    "title": "碧眼花豹",
    "href": "detail/movie-0449.html",
    "cover": "149.jpg",
    "year": "2025",
    "region": "南非",
    "type": "电影",
    "genre": "纪录片，冒险，自然",
    "category": "历史",
    "description": "一只拥有罕见碧蓝色眼睛的花豹母亲，在旱季的非洲草原上独自抚养三只幼崽。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "花豹",
      "非洲草原",
      "母爱",
      "生存",
      "摄影神作"
    ]
  },
  {
    "title": "圣诞节贺卡",
    "href": "detail/movie-0450.html",
    "cover": "150.jpg",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "genre": "爱情 / 家庭",
    "category": "历史",
    "description": "孙女在奶奶遗物中发现一张1944年的空白圣诞贺卡，她决定找到收件人，把迟到的祝福送出去。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "圣诞节",
      "匿名信",
      "二战遗物",
      "跨代情缘"
    ]
  },
  {
    "title": "全家度蜜月",
    "href": "detail/movie-0451.html",
    "cover": "1.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 冒险",
    "category": "奇幻",
    "description": "新婚夫妇想二人世界，却被双方共六位长辈强行加入蜜月旅行，一路鸡飞狗跳。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "新婚",
      "奇葩家人",
      "公路片",
      "笑中带泪"
    ]
  },
  {
    "title": "青春应援",
    "href": "detail/movie-0452.html",
    "cover": "2.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情",
    "category": "喜剧",
    "description": "一所升学率垫底的女子高中，为了拯救学校不被关闭，组建了一支疯狂啦啦队。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "啦啦队",
      "校园",
      "热血",
      "女性成长"
    ]
  },
  {
    "title": "千夫所指",
    "href": "detail/movie-0453.html",
    "cover": "3.jpg",
    "year": "2022",
    "region": "中国",
    "type": "电影",
    "genre": "剧情, 悬疑, 社会",
    "category": "喜剧",
    "description": "一所中学发生了恶性欺凌事件，全班32人指认同一名“施暴者”，只有他自己不认罪。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "校园霸凌",
      "指认",
      "误判",
      "群像",
      "反转"
    ]
  },
  {
    "title": "狼蛛的黑肚",
    "href": "detail/movie-0454.html",
    "cover": "4.jpg",
    "year": "2026",
    "region": "西班牙",
    "type": "电影",
    "genre": "犯罪悬疑",
    "category": "科幻",
    "description": "一名昆虫学家在调查三起离奇命案时发现，凶手模仿的并非狼蛛，而是被狼蛛吃掉的猎物。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "连环杀手",
      "昆虫隐喻",
      "密室推理",
      "复仇陷阱"
    ]
  },
  {
    "title": "妖医馆",
    "href": "detail/movie-0455.html",
    "cover": "5.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "剧集",
    "genre": "奇幻, 喜剧, 古装",
    "category": "科幻",
    "description": "神秘妖医馆只在子时开门，专治三界疑难杂症，但诊金是你的一段记忆。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "妖怪",
      "医术",
      "单元剧"
    ]
  },
  {
    "title": "辣妹过招",
    "href": "detail/movie-0456.html",
    "cover": "6.jpg",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、青春、校园",
    "category": "奇幻",
    "description": "从小在非洲 homeschool 的转校生 Cady，第一天踏入美国高中，就发现自己陷入了一场由“塑料姐妹”统治的女生丛林法则。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "美式校园",
      "塑料姐妹花",
      "刻板印象",
      "时尚icon"
    ]
  },
  {
    "title": "南方小羊牧场",
    "href": "detail/movie-0457.html",
    "cover": "7.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情、家庭、温情",
    "category": "喜剧",
    "description": "台北失意兽医被迫回乡接管破产羊牧场，却发现羊群听得懂人话，且个个身怀绝技。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "治愈",
      "返乡",
      "农场经营",
      "代际和解",
      "自然风光"
    ]
  },
  {
    "title": "极道龙神",
    "href": "detail/movie-0458.html",
    "cover": "8.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪, 黑帮",
    "category": "动作",
    "description": "九龙城寨拆除前夜，一名隐退的传奇杀手被迫重出江湖，在最后48小时内完成不可能的三项任务。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "九龙城寨",
      "帮派火并",
      "兄弟情"
    ]
  },
  {
    "title": "美国杀人魔",
    "href": "detail/movie-0459.html",
    "cover": "9.jpg",
    "year": "2000",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 犯罪 / 剧情",
    "category": "爱情",
    "description": "华尔街精英贝特曼在白天是完美主义者，晚上却用锐利的商业美学视角……杀人。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "黑色幽默",
      "消费主义批判",
      "身份焦虑",
      "连环杀手",
      "心理惊悚"
    ]
  },
  {
    "title": "母女情深",
    "href": "detail/movie-0460.html",
    "cover": "10.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情， 喜剧， 家庭",
    "category": "奇幻",
    "description": "一对水火不容的母女在一次意外中互换了身体，母亲替女儿上考场，女儿替母亲上职场，生活彻底失控。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "母女",
      "互换身体",
      "高考",
      "和解",
      "青春"
    ]
  },
  {
    "title": "立见天国",
    "href": "detail/movie-0461.html",
    "cover": "11.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情、奇幻、治愈",
    "category": "奇幻",
    "description": "一家名为“立见天国”的神秘小店，能让活人在死前用一小时看到自己死后别人如何评价自己。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "死亡体验",
      "临终关怀",
      "人生回顾",
      "温暖催泪"
    ]
  },
  {
    "title": "暴力特区",
    "href": "detail/movie-0462.html",
    "cover": "12.jpg",
    "year": "2007",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "悬疑",
    "description": "卧底警察在鱼龙混杂的暴力特区中逐渐迷失，分不清正义与暴力的界限。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "警匪",
      "卧底",
      "拳拳到肉",
      "黑色电影"
    ]
  },
  {
    "title": "刀侠",
    "href": "detail/movie-0463.html",
    "cover": "13.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作， 武侠， 犯罪",
    "category": "古装",
    "description": "一名厌倦了帮派厮杀的退休刀客，在现代都市中化身“刀侠”，用三把飞刀维护城中村的秩序。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "现代武侠",
      "飞刀",
      "义警",
      "都市传说",
      "极简主义"
    ]
  },
  {
    "title": "八星报喜",
    "href": "detail/movie-0464.html",
    "cover": "14.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "category": "历史",
    "description": "八个互不相识、名字里都带“喜”字的陌生人，意外被卷入一场遗产争夺战，却成了真一家人。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "贺岁",
      "家族和解",
      "乌龙事件",
      "多线叙事"
    ]
  },
  {
    "title": "距地14分钟",
    "href": "detail/movie-0465.html",
    "cover": "15.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻, 灾难, 剧情",
    "category": "古装",
    "description": "月球基地发生爆炸，仅存的宇航员距离地球14分钟通讯延迟，地面指挥中心必须在沉默中完成不可能的人工救援。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "地月危机",
      "硬核救援",
      "国产科幻"
    ]
  },
  {
    "title": "土耳其狂欢",
    "href": "detail/movie-0466.html",
    "cover": "16.jpg",
    "year": "1973",
    "region": "荷兰",
    "type": "电影",
    "genre": "爱情、剧情、情色",
    "category": "剧情",
    "description": "阿姆斯特丹的街头雕塑家与一名神秘土耳其裔女子，展开了一场炽热而致命的狂欢之恋。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "经典",
      "悲剧",
      "自由恋爱",
      "反叛",
      "情欲"
    ]
  },
  {
    "title": "大宋有奇案",
    "href": "detail/movie-0467.html",
    "cover": "17.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装悬疑",
    "category": "动作",
    "description": "北宋提刑官与女仵作联手破获连环诡案，却发现每一具尸体都在指向同一幅消失的《山河社稷图》。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "探案",
      "权谋",
      "法医",
      "北宋",
      "单元剧"
    ]
  },
  {
    "title": "墓边凶宅",
    "href": "detail/movie-0468.html",
    "cover": "18.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "category": "青春",
    "description": "一对贪便宜的夫妇买下墓地旁的豪宅后，发现每天午夜卧室墙壁都会渗出腥臭的泥土。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "凶宅",
      "墓地",
      "风水",
      "恶灵",
      "民俗恐怖"
    ]
  },
  {
    "title": "与梦妮卡度过的夏天",
    "href": "detail/movie-0469.html",
    "cover": "19.jpg",
    "year": "2001",
    "region": "台湾",
    "type": "电影",
    "genre": "爱情 / 同性 / 青春",
    "category": "古装",
    "description": "那年夏天，她教会我接吻，然后像候鸟一样消失在人海。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "夏日限定",
      "成长疼痛",
      "初恋"
    ]
  },
  {
    "title": "大放异彩",
    "href": "detail/movie-0470.html",
    "cover": "20.jpg",
    "year": "2021",
    "region": "印度",
    "type": "电影",
    "genre": "歌舞、剧情、励志",
    "category": "爱情",
    "description": "低种姓的街舞少年被古典舞大师收为弟子，他必须用最传统的肢体语言表达最反叛的灵魂。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "民间舞者",
      "文化偏见",
      "阶层跨越",
      "印度古典舞",
      "宝莱坞"
    ]
  },
  {
    "title": "万水千山",
    "href": "detail/movie-0471.html",
    "cover": "21.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 年代",
    "category": "青春",
    "description": "一支负责在长征途中印刷钞票和宣传单的“印刷连”，用纸张和油墨走完了两万五千里。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "长征",
      "信仰",
      "小人物史诗"
    ]
  },
  {
    "title": "两场婚礼一场葬礼",
    "href": "detail/movie-0472.html",
    "cover": "22.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧",
    "category": "都市",
    "description": "一个家族在同一天举办两场婚礼和一场葬礼，宾客名单成了死亡名单。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "黑色幽默",
      "婚礼",
      "葬礼",
      "家族秘密"
    ]
  },
  {
    "title": "伤心街角恋人",
    "href": "detail/movie-0473.html",
    "cover": "23.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "纪录",
    "description": "两个在便利店值夜班的陌生人，通过一张张匿名纸条交换彼此最不敢说出口的秘密。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "便利店",
      "夜班",
      "匿名纸条",
      "都市孤独",
      "治愈"
    ]
  },
  {
    "title": "魔鬼骇客",
    "href": "detail/movie-0474.html",
    "cover": "24.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、惊悚",
    "category": "爱情",
    "description": "顶尖黑客入侵政府系统后发现，他使用的AI助手正在自主策划一场全球网络战争。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "黑客",
      "人工智能",
      "赛博朋克",
      "伦理",
      "反转"
    ]
  },
  {
    "title": "型男飞行日志",
    "href": "detail/movie-0475.html",
    "cover": "25.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、爱情、剧情",
    "category": "剧情",
    "description": "一个在社交媒体上伪装成富豪飞行员的穷小子，突然被迫带着暗恋的网红进行真实环球飞行。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "社交媒体",
      "虚假人设",
      "飞行员",
      "爱情轻喜",
      "自我认同"
    ]
  },
  {
    "title": "疗养怨",
    "href": "detail/movie-0476.html",
    "cover": "26.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "心理恐怖",
    "category": "家庭",
    "description": "男人醒来发现自己被关在废弃疗养院，其他病人说他早已死了三十八年。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "疗养院",
      "失忆",
      "群体催眠",
      "反转"
    ]
  },
  {
    "title": "谍影杀机",
    "href": "detail/movie-0477.html",
    "cover": "27.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 惊悚",
    "category": "历史",
    "description": "一名在墨西哥失踪六年的CIA特工突然在东京醒来，失去了全部记忆，却拥有了一身连他自己都恐惧的致命格斗技。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "失忆特工",
      "高速追杀",
      "政治阴谋",
      "肉搏战"
    ]
  },
  {
    "title": "风流铁将军",
    "href": "detail/movie-0478.html",
    "cover": "28.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 动作, 古装",
    "category": "喜剧",
    "description": "一位游手好闲的将军之子，为了追回被骗的军饷，误打误撞成了真英雄。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "武侠",
      "戏说",
      "将门虎子"
    ]
  },
  {
    "title": "平成狸合战",
    "href": "detail/movie-0479.html",
    "cover": "29.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "genre": "奇幻, 喜剧, 环保",
    "category": "纪录",
    "description": "东京郊外的狸猫们为了保卫最后的森林，成立“变身特工队”，用幻术与人类的房地产开发商展开了一场啼笑皆非的战争。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "狸猫",
      "都市开发",
      "变装大战",
      "宫崎骏风"
    ]
  },
  {
    "title": "妖夜传说",
    "href": "detail/movie-0480.html",
    "cover": "30.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影 / 恐怖",
    "genre": "恐怖 / 奇幻 / 分段式",
    "category": "励志",
    "description": "一家深夜电台接听了四个听众来电，每个来电背后都是一个毛骨悚然的都市传说。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "都市传说",
      "分段式",
      "怪物",
      "惊悚"
    ]
  },
  {
    "title": "末日之王",
    "href": "detail/movie-0481.html",
    "cover": "31.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 惊悚",
    "category": "爱情",
    "description": "丧尸病毒爆发十年后，人类聚居地废墟之上，各方势力为争夺“末日之王”称号而战。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "丧尸",
      "王座",
      "权谋"
    ]
  },
  {
    "title": "良缘巧遇",
    "href": "detail/movie-0482.html",
    "cover": "32.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 喜剧",
    "category": "爱情",
    "description": "两个互相暗恋的社恐，分别让朋友替自己去相亲，结果朋友之间一见钟情了。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "相亲",
      "乌龙",
      "身份互换",
      "错位"
    ]
  },
  {
    "title": "啊，男孩",
    "href": "detail/movie-0483.html",
    "cover": "33.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "文艺,青春",
    "category": "历史",
    "description": "柏林墙倒塌三十年后，一个游手好闲的男孩花了一天时间穿越整个城市，只为买一杯卖完的咖啡。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "成长",
      "迷茫",
      "柏林"
    ]
  },
  {
    "title": "关键杀机",
    "href": "detail/movie-0484.html",
    "cover": "34.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作惊悚",
    "category": "励志",
    "description": "顶级特工被植入虚假记忆后关进密室，他必须在24小时内找回真实身份，否则脑中炸弹会炸毁整栋大楼。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "特工",
      "记忆删除",
      "时间限制",
      "密室逃脱"
    ]
  },
  {
    "title": "洗劫墨索里尼",
    "href": "detail/movie-0485.html",
    "cover": "35.jpg",
    "year": "2022",
    "region": "意大利 / 英国",
    "type": "电影",
    "genre": "喜剧 / 历史 / 战争",
    "category": "青春",
    "description": "1943年墨索里尼倒台，一群破落贵族计划潜入其别墅，偷出他珍藏的“属于人民的古董”。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "二战",
      "偷盗",
      "贵族",
      "黑色幽默"
    ]
  },
  {
    "title": "饥饿游戏：星火燎原",
    "href": "detail/movie-0486.html",
    "cover": "36.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 冒险",
    "category": "爱情",
    "description": "凯妮丝成为反抗象征后，被送入第75届世纪极限赛，而这场游戏本身就是一场精心策划的越狱行动。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "反乌托邦",
      "竞技场",
      "革命前夜",
      "生存",
      "女性英雄"
    ]
  },
  {
    "title": "他妈²的藏宝图",
    "href": "detail/movie-0487.html",
    "cover": "37.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作 / 冒险",
    "category": "家庭",
    "description": "一个不学无术的古惑仔，发现老爸临终留下的藏宝图，上面的“X”竟然标记在铜锣湾最大的警署里。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "粗口喜剧",
      "黑帮",
      "宝藏争夺",
      "父子情"
    ]
  },
  {
    "title": "白蛇缘起",
    "href": "detail/movie-0488.html",
    "cover": "38.jpg",
    "year": "2019",
    "region": "中国",
    "type": "动画电影",
    "genre": "爱情 / 奇幻 / 动画",
    "category": "历史",
    "description": "白素贞与许仙五百年前的前世之缘，始于一场刺杀与一场失忆。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "国风",
      "前世今生",
      "人妖恋"
    ]
  },
  {
    "title": "无问题2",
    "href": "detail/movie-0489.html",
    "cover": "39.jpg",
    "year": "2027",
    "region": "香港",
    "type": "电影",
    "genre": "动作, 喜剧",
    "category": "悬疑",
    "description": "上一部里的佛山武术传人阿吉，成了深圳写字楼里的一名内卷 PPT 民工，忍无可忍之下用咏春暴打甲方。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "功夫",
      "现代职场",
      "续集",
      "港式幽默",
      "打工人"
    ]
  },
  {
    "title": "逐爱",
    "href": "detail/movie-0490.html",
    "cover": "40.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情/奇幻",
    "category": "古装",
    "description": "婚礼上遭遇意外死亡的女孩，发现自己被困在暗恋对象的记忆碎片里。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "时间循环",
      "暗恋",
      "救赎",
      "雨夜"
    ]
  },
  {
    "title": "家庭事件",
    "href": "detail/movie-0491.html",
    "cover": "41.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "剧情/喜剧",
    "category": "喜剧",
    "description": "一次普通家庭周日聚餐，随着席间每个人手机接连响起，所有伪装被撕得粉碎。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "法式幽默",
      "家族聚会",
      "秘密",
      "餐桌戏"
    ]
  },
  {
    "title": "银河守护队2",
    "href": "detail/movie-0492.html",
    "cover": "42.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 动作",
    "category": "家庭",
    "description": "星爵找到了亲生父亲，但他很快发现，这个父亲想把他当成人形电池。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "漫威",
      "太空喜剧",
      "家庭主题",
      "泪点"
    ]
  },
  {
    "title": "母鸡搬家",
    "href": "detail/movie-0493.html",
    "cover": "43.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "动画片",
    "genre": "喜剧, 家庭, 冒险",
    "category": "奇幻",
    "description": "一只不愿下蛋的老母鸡得知农场要被改建成商业中心后，带着一群小鸡踏上了寻找新家的滑稽旅程。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "农场",
      "城市化",
      "温情",
      "治愈"
    ]
  },
  {
    "title": "红颜往事",
    "href": "detail/movie-0494.html",
    "cover": "44.jpg",
    "year": "2002",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 爱情",
    "category": "悬疑",
    "description": "三个纺织女工从文革到改革开放，跨越三十年的友情、背叛与和解，命运被时代大潮左右。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "女性",
      "文革",
      "知青",
      "工厂",
      "年代"
    ]
  },
  {
    "title": "前世今生",
    "href": "detail/movie-0495.html",
    "cover": "45.jpg",
    "year": "2023",
    "region": "台湾",
    "type": "剧集",
    "genre": "爱情 / 奇幻 / 剧情",
    "category": "科幻",
    "description": "每次入睡都会回到前世，她必须在七天内破解连环死亡的诅咒，否则今生也将消失。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "轮回",
      "跨越时空",
      "宿命",
      "咖啡馆",
      "手账本"
    ]
  },
  {
    "title": "破产姐妹第二季",
    "href": "detail/movie-0496.html",
    "cover": "46.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧、都市",
    "category": "家庭",
    "description": "蛋糕店刚步入正轨，一位来自华尔街的“天使恶魔”就递上了无法拒绝的收购合同。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "美式幽默",
      "打工人生",
      "毒舌",
      "姐妹情",
      "翻身仗"
    ]
  },
  {
    "title": "冷血惊魂",
    "href": "detail/movie-0497.html",
    "cover": "47.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖, 心理",
    "category": "家庭",
    "description": "一个患有严重妄想症的女人搬进新公寓，她总在午夜听到地下室里传来冰冷的水声和女人哭泣。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "精神分裂",
      "地下室",
      "连环杀手",
      "女性"
    ]
  },
  {
    "title": "史酷比和吸血鬼传说",
    "href": "detail/movie-0498.html",
    "cover": "48.jpg",
    "year": "2021",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧 / 悬疑 / 奇幻",
    "category": "历史",
    "description": "神秘公司接到一封来自特兰西瓦尼亚的求救信，却发现古堡里的吸血鬼居然在直播带货。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "解谜",
      "狗狗",
      "喜剧搭档",
      "哥特风"
    ]
  },
  {
    "title": "花咒",
    "href": "detail/movie-0499.html",
    "cover": "49.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 古装",
    "category": "家庭",
    "description": "明朝仵作发现近期离奇死亡少女的肺部都开出了从未见过的花，而花朵的种子来自宫廷“花神宴”。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "植物恐怖",
      "明朝",
      "仵作",
      "花粉诅咒",
      "密室推理"
    ]
  },
  {
    "title": "柠檬",
    "href": "detail/movie-0500.html",
    "cover": "50.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑犯罪",
    "category": "都市",
    "description": "一位失去味觉的米其林女主厨，发现只有杀人的瞬间才能尝到柠檬的酸涩，她决定以此追查杀父仇人。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "复仇",
      "味觉",
      "连环杀手",
      "心理战"
    ]
  },
  {
    "title": "巫山梦断相思泪粤语",
    "href": "detail/movie-0501.html",
    "cover": "51.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 剧情",
    "category": "奇幻",
    "description": "五十年代香港，一个已婚富商与一个越剧女伶在重庆大厦里谈了一场从未接吻的绝世之恋。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "文艺",
      "悲剧",
      "时代"
    ]
  },
  {
    "title": "女仆日记1964",
    "href": "detail/movie-0502.html",
    "cover": "52.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 历史",
    "category": "青春",
    "description": "1964年，一位年轻女仆在上流社会家庭中，用冷静的双眼记录下了那个光鲜表面下的谎言与伪善。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "女仆视角",
      "阶级差异",
      "复古",
      "剧情片"
    ]
  },
  {
    "title": "僵尸放屁：活屎人之厕",
    "href": "detail/movie-0503.html",
    "cover": "53.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖喜剧",
    "category": "青春",
    "description": "一种让僵尸靠“放屁”传播的病毒爆发，全城唯一的避难所是——公共厕所。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "B级片",
      "丧尸",
      "厕所",
      "生化危机",
      "恶搞"
    ]
  },
  {
    "title": "我的女人",
    "href": "detail/movie-0504.html",
    "cover": "54.jpg",
    "year": "2024",
    "region": "土耳其",
    "type": "剧集",
    "genre": "爱情, 剧情, 家庭",
    "category": "家庭",
    "description": "为了守护家族土地，富家女与仇人之子签订契约婚姻，却在不经意间动了真心。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "契约婚姻",
      "复仇",
      "传统"
    ]
  },
  {
    "title": "妙人奇遇",
    "href": "detail/movie-0505.html",
    "cover": "55.jpg",
    "year": "2006",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧，奇幻，剧情",
    "category": "都市",
    "description": "古怪的退休老头捡到一块陨石，以为是外星人信号，全村人配合他演了一场戏，结果真外星人来了。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "英国怪老头",
      "陨石",
      "外星人误会",
      "治愈",
      "邻里关系"
    ]
  },
  {
    "title": "飞越疯人院之随机兄弟",
    "href": "detail/movie-0506.html",
    "cover": "56.jpg",
    "year": "2002",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "黑色喜剧",
    "category": "励志",
    "description": "两个素不相识的倒霉蛋被随机卷入一起逃院计划，却意外发现了医院背后的惊天骗局。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "精神病院",
      "兄弟情",
      "社会讽刺",
      "随机事件",
      "身份错位"
    ]
  },
  {
    "title": "凤舞花飞",
    "href": "detail/movie-0507.html",
    "cover": "57.jpg",
    "year": "1966",
    "region": "香港",
    "type": "电影",
    "genre": "歌舞 / 爱情",
    "category": "历史",
    "description": "一名落难千金女扮男装混入将军府当书童，却与将军之女互生情愫，直到将军的义弟归来揭开真相。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "邵氏",
      "黄梅调",
      "歌舞升平",
      "古典爱情"
    ]
  },
  {
    "title": "飞女黛丝",
    "href": "detail/movie-0508.html",
    "cover": "58.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "动作 / 冒险",
    "category": "奇幻",
    "description": "1960年代的伦敦，一名白天是打字员、晚上是飞车党的酷女孩，被军情六处招募去追回一份核弹设计图。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "女权",
      "复古",
      "特工",
      "60年代"
    ]
  },
  {
    "title": "窈窕淑女1987",
    "href": "detail/movie-0509.html",
    "cover": "59.jpg",
    "year": "1987",
    "region": "香港",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "category": "悬疑",
    "description": "嚣张富二代打赌将菜场哑女改造为名媛，却在自己设计的测试中彻底沦陷。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "都市童话",
      "贫富恋",
      "经典翻拍",
      "港式幽默"
    ]
  },
  {
    "title": "80后的独立宣言",
    "href": "detail/movie-0510.html",
    "cover": "60.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 青春",
    "category": "奇幻",
    "description": "三个2008年大学毕业的80后，用十五年的人生证明：独立，就是不再向父母要一分钱，哪怕吃土。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "80后",
      "怀旧",
      "北漂",
      "成长",
      "写实"
    ]
  },
  {
    "title": "站起来的女孩",
    "href": "detail/movie-0511.html",
    "cover": "61.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 运动",
    "category": "纪录",
    "description": "因车祸失去双腿的芭蕾天才，扔掉假肢，坐上了轮椅篮球场。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "励志",
      "轮椅篮球",
      "女性",
      "真实改编",
      "热血"
    ]
  },
  {
    "title": "狂父复子仇",
    "href": "detail/movie-0512.html",
    "cover": "62.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "category": "悬疑",
    "description": "身为前特种兵的父亲，在儿子被校园霸凌致死后，独自向权势滔天的施暴者家族宣战。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "复仇",
      "父亲",
      "黑帮",
      "以暴制暴"
    ]
  },
  {
    "title": "电影超级任务",
    "href": "detail/movie-0513.html",
    "cover": "63.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作， 喜剧， 冒险",
    "category": "都市",
    "description": "过气特技指导被黑帮追杀，却发现对方要的是他正在拍摄的电影拷贝，因为拷贝里无意中录下了他们的犯罪证据。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "特技人",
      "元电影",
      "成龙式",
      "跑酷",
      "戏中戏"
    ]
  },
  {
    "title": "炽爱游戏泰语",
    "href": "detail/movie-0514.html",
    "cover": "64.jpg",
    "year": "2018",
    "region": "泰国",
    "type": "电视剧",
    "genre": "爱情, 剧情",
    "category": "家庭",
    "description": "千金大小姐以为自己在玩弄穷小子，却不知这场游戏的庄家是他。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "豪门",
      "虐恋",
      "复仇",
      "泰剧经典"
    ]
  },
  {
    "title": "潮起两江",
    "href": "detail/movie-0515.html",
    "cover": "65.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 年代",
    "category": "纪录",
    "description": "1997年重庆直辖前夕，一对在朝天门码头结拜的异姓兄弟，因一纸地契反目，开启长达二十年的爱恨纠葛。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "改革",
      "家族恩怨",
      "重庆",
      "商战"
    ]
  },
  {
    "title": "蚝民",
    "href": "detail/movie-0516.html",
    "cover": "66.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 纪实",
    "category": "家庭",
    "description": "世代养蚝的父子，在最后一片未被征迁的蚝田里，发现了改变整个村子命运的古代沉船。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "渔村",
      "拆迁",
      "父子",
      "传统"
    ]
  },
  {
    "title": "遗留搜查第七季",
    "href": "detail/movie-0517.html",
    "cover": "67.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 刑侦",
    "category": "古装",
    "description": "系村警官从被害人的一串钥匙入手，发现它不仅能开三道门，还能解锁三段被埋葬的人生。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "遗留物",
      "单元",
      "温情",
      "冷案",
      "招牌"
    ]
  },
  {
    "title": "时间的风景",
    "href": "detail/movie-0518.html",
    "cover": "68.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 奇幻",
    "category": "古装",
    "description": "摄影师意外闯入时间裂缝，每天都能重遇已故的爱人，但只有24小时。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "时间循环",
      "治愈",
      "唯美"
    ]
  },
  {
    "title": "退后一步爱上你",
    "href": "detail/movie-0519.html",
    "cover": "69.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "都市爱情喜剧",
    "category": "家庭",
    "description": "一个女霸总和一个男实习生意外互换身体后，才发现对方才是全公司最“卷”的受苦人。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "办公室恋情",
      "欢喜冤家",
      "身体互换",
      "搞笑",
      "甜宠"
    ]
  },
  {
    "title": "亚马逊萌猴奇遇记国语",
    "href": "detail/movie-0520.html",
    "cover": "70.jpg",
    "year": "2018",
    "region": "中国大陆 / 巴西",
    "type": "电影",
    "genre": "冒险 / 家庭",
    "category": "古装",
    "description": "一只被宠物店遗弃的小猴在亚马逊雨林中从恐惧到称王的奇幻冒险。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "萌宠",
      "丛林冒险",
      "成长",
      "国语配音",
      "动物主角"
    ]
  },
  {
    "title": "告白",
    "href": "detail/movie-0521.html",
    "cover": "71.jpg",
    "year": "2010",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 悬疑, 惊悚",
    "category": "青春",
    "description": "女教师痛失爱女，她在全班同学的牛奶中注入艾滋血液，开始了冷静的复仇。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "复仇",
      "校园",
      "人性",
      "反转"
    ]
  },
  {
    "title": "夜惊：死亡出租车",
    "href": "detail/movie-0522.html",
    "cover": "72.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "category": "动作",
    "description": "午夜搭上一辆出租车的人，都会在黎明天亮前离奇死亡。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "都市传说",
      "出租车",
      "密室",
      "反转"
    ]
  },
  {
    "title": "过去，如今和之后",
    "href": "detail/movie-0523.html",
    "cover": "73.jpg",
    "year": "2022",
    "region": "印度尼西亚",
    "type": "电影",
    "genre": "剧情, 历史",
    "category": "励志",
    "description": "一名 Sunda 族贵妇在印尼六十年代的动荡中，经历了三段分别名为“过去、如今、之后”的婚姻。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "女性",
      "时间",
      "婚姻",
      "时代变迁"
    ]
  },
  {
    "title": "之后2017",
    "href": "detail/movie-0524.html",
    "cover": "74.jpg",
    "year": "2017",
    "region": "美国 / 法国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "category": "家庭",
    "description": "一夜情后两人约定不再联系，男人却收到一封寄错的信，其中藏着她五年来所有爱意。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "一夜情",
      "错过",
      "书信体",
      "遗憾美学"
    ]
  },
  {
    "title": "天才进化论第二季",
    "href": "detail/movie-0525.html",
    "cover": "75.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "科幻, 悬疑, 青春",
    "category": "喜剧",
    "description": "上一季觉醒超能力的天才少年们，发现能力正在反向吞噬他们的记忆。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "超能力",
      "少年",
      "黑暗组织",
      "觉醒"
    ]
  },
  {
    "title": "桂花巷",
    "href": "detail/movie-0526.html",
    "cover": "76.jpg",
    "year": "1987",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情, 历史, 家庭",
    "category": "家庭",
    "description": "一个女人从少女到老妪，在一条桂花巷里见证了中国台湾五十年变迁，也把自己活成了巷子里的传说。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "女性",
      "命运",
      "家族",
      "旧时代",
      "史诗"
    ]
  },
  {
    "title": "超急情圣",
    "href": "detail/movie-0527.html",
    "cover": "77.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，喜剧，奇幻",
    "category": "古装",
    "description": "社恐程序员意外获得“读心耳机”，能听到所有女性的心声，却发现真实的女人和他想象中的完全不同。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "超能力",
      "男性成长",
      "恋爱指南",
      "反套路",
      "都市童话"
    ]
  },
  {
    "title": "热带幻梦",
    "href": "detail/movie-0528.html",
    "cover": "78.jpg",
    "year": "2017",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "category": "喜剧",
    "description": "泰国海岛上，一个女人爱上了长得像死去未婚夫的潜水教练，却发现自己才是替身。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "海岛",
      "失忆",
      "替身",
      "文艺",
      "虐恋"
    ]
  },
  {
    "title": "吸血鬼复仇记",
    "href": "detail/movie-0529.html",
    "cover": "79.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "category": "剧情",
    "description": "被教会囚禁三百年的女吸血鬼逃出牢笼，她唯一的目标是向当年背叛她的吸血鬼恋人，以及整个猎魔人组织复仇。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "吸血鬼",
      "复仇",
      "女性",
      "血腥",
      "哥特"
    ]
  },
  {
    "title": "女子戏班",
    "href": "detail/movie-0530.html",
    "cover": "80.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 历史",
    "category": "古装",
    "description": "1937年北平沦陷，一个坤班女戏子们在枪口下用唱腔和胭脂藏起抗日密信。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "民国",
      "戏曲",
      "女性群像",
      "传承",
      "复仇"
    ]
  },
  {
    "title": "红花侠",
    "href": "detail/movie-0531.html",
    "cover": "81.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作， 武侠",
    "category": "剧情",
    "description": "朝鲜王朝末年，一位戴着红花面具的神秘剑客专杀贪官，而面具之下的脸，早已被官方列为死亡名单。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "蒙面",
      "义贼",
      "朝鲜王朝",
      "复仇"
    ]
  },
  {
    "title": "罗马之战2",
    "href": "detail/movie-0532.html",
    "cover": "82.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "历史，动作，战争",
    "category": "科幻",
    "description": "罗马城焚毁十年后，流亡王子率残部反攻，却挖出了一道来自东方的惊天阴谋。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "史诗",
      "权谋",
      "冷兵器",
      "帝国陨落"
    ]
  },
  {
    "title": "24小时第五季",
    "href": "detail/movie-0533.html",
    "cover": "83.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 惊悚 / 悬疑",
    "category": "科幻",
    "description": "传奇特工杰克·鲍尔已官方死亡八年，一桩针对总统的暗网暗杀，用他的生物特征启动了只属于他的保险库。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "反恐",
      "实时叙事",
      "分屏",
      "政治阴谋",
      "复活角色"
    ]
  },
  {
    "title": "七夜风流",
    "href": "detail/movie-0534.html",
    "cover": "84.jpg",
    "year": "1994",
    "region": "中国香港",
    "type": "电影",
    "genre": "情色喜剧",
    "category": "家庭",
    "description": "花花公子被诅咒需在七夜找到真爱，否则永远被困在风月场的时空轮回。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "轮回",
      "爱情",
      "奇幻",
      "七日契约"
    ]
  },
  {
    "title": "红屋顶",
    "href": "detail/movie-0535.html",
    "cover": "85.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭伦理",
    "category": "励志",
    "description": "老城区要拆迁了，一栋红屋顶小楼里的三户人家，为了分钱反目成仇，却意外翻出了二十年前的一封遗书。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "拆迁",
      "亲情",
      "邻里",
      "治愈",
      "现实主义"
    ]
  },
  {
    "title": "我的秘密之花",
    "href": "detail/movie-0536.html",
    "cover": "86.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "科幻",
    "description": "一位畅销浪漫小说家因婚姻破裂陷入创作瓶颈，当她计划杀死笔下的角色时，书中的谋杀案却在现实中真实发生了。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "双重身份",
      "家庭秘密",
      "心理",
      "反转",
      "文艺"
    ]
  },
  {
    "title": "港湾第五季",
    "href": "detail/movie-0537.html",
    "cover": "87.jpg",
    "year": "2026",
    "region": "美国 / 加拿大",
    "type": "电视剧",
    "genre": "科幻, 悬疑, 剧情",
    "category": "悬疑",
    "description": "通往平行世界的大门重新打开，但这一次，对面的世界派来的“大使”是女主已经死去的丈夫。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "平行世界",
      "回归季",
      "老角色",
      "终章"
    ]
  },
  {
    "title": "田野",
    "href": "detail/movie-0538.html",
    "cover": "88.jpg",
    "year": "1981",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "category": "家庭",
    "description": "一个回城知青重返北大荒，发现土地才是灵魂唯一的归宿。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "农村",
      "知青",
      "怀旧",
      "土地情结"
    ]
  },
  {
    "title": "明日重生",
    "href": "detail/movie-0539.html",
    "cover": "89.jpg",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻 / 灾难",
    "category": "动作",
    "description": "末日只剩24小时，一颗能重启时间线的“明日种子”却只能救一个人回到过去。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "时间循环",
      "末日倒计时",
      "集体牺牲",
      "哲学思辨"
    ]
  },
  {
    "title": "灵养院大疯杀",
    "href": "detail/movie-0540.html",
    "cover": "90.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "category": "励志",
    "description": "暴雨夜灵养院断电，七个自称“疯子”的人中混入了真正的恶魔。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "密室",
      "精神病院",
      "反转",
      "血腥"
    ]
  },
  {
    "title": "长安夜盗",
    "href": "detail/movie-0541.html",
    "cover": "91.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "genre": "古装 / 悬疑 / 动作",
    "category": "喜剧",
    "description": "唐高宗时期，一名轻功绝顶的飞贼专偷贪官污吏，却在无意中卷入了一场事关太子废立的惊天阴谋。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "盛唐风云",
      "侠盗义贼",
      "宫廷阴谋"
    ]
  },
  {
    "title": "七大罪第一季",
    "href": "detail/movie-0542.html",
    "cover": "92.jpg",
    "year": "2014",
    "region": "日本",
    "type": "动画",
    "genre": "奇幻, 热血, 冒险",
    "category": "悬疑",
    "description": "被诬陷反叛的七大罪骑士团，为了拯救王国，与圣骑士展开宿命对决。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "战斗",
      "骑士团",
      "魔法",
      "王道漫改"
    ]
  },
  {
    "title": "爱的幸宠",
    "href": "detail/movie-0543.html",
    "cover": "93.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情，奇幻，剧情",
    "category": "喜剧",
    "description": "霉运缠身的女孩意外获得“幸运转移”能力，却发现自己成了爱情的祭品。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "幸运",
      "契约",
      "治愈",
      "反转",
      "命中注定"
    ]
  },
  {
    "title": "北国红豆",
    "href": "detail/movie-0544.html",
    "cover": "94.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "爱情",
    "description": "七十年代北大荒，一名上海女知青与当地年轻猎户在冰天雪地里相恋，却被一封举报信拆散。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "知青",
      "怀旧",
      "纯爱",
      "东北"
    ]
  },
  {
    "title": "酷盖爸爸2",
    "href": "detail/movie-0545.html",
    "cover": "95.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情，同性，家庭",
    "category": "悬疑",
    "description": "奶爸杰立和老公以及上幼儿园的儿子，在应对“如何跟孩子解释妈妈在哪里”时，引爆了整个家长群的舆论海啸。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "同志家庭",
      "育儿",
      "亲子关系",
      "日常"
    ]
  },
  {
    "title": "神秘怪物",
    "href": "detail/movie-0546.html",
    "cover": "96.jpg",
    "year": "2024",
    "region": "美国 / 加拿大",
    "type": "剧集",
    "genre": "恐怖 / 悬疑 / 科幻",
    "category": "古装",
    "description": "美国偏僻小镇接连发生失踪案，所有线索都指向森林里一个能模仿人声的远古怪物。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "小镇",
      "克苏鲁",
      "变身",
      "青少年",
      "压抑"
    ]
  },
  {
    "title": "那家伙",
    "href": "detail/movie-0547.html",
    "cover": "97.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "都市",
    "description": "为了寻找失踪的妹妹，木讷的货车司机认定镇上那个人气老师就是凶手，却没人相信他。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "连环杀手",
      "小镇谜云",
      "双雄对决"
    ]
  },
  {
    "title": "将死之人",
    "href": "detail/movie-0548.html",
    "cover": "98.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑，奇幻",
    "category": "家庭",
    "description": "癌症晚期患者突然获得了“看见他人死期”的能力，而第一个倒计时归零的人，是他自己。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "死亡倒计时",
      "灵魂互换",
      "治愈"
    ]
  },
  {
    "title": "我是谁的宝贝",
    "href": "detail/movie-0549.html",
    "cover": "99.jpg",
    "year": "2019",
    "region": "中国",
    "type": "电影",
    "genre": "家庭 / 剧情 / 温情",
    "category": "励志",
    "description": "患阿尔茨海默症的父亲忘了全世界，却记得每个周五要买女儿最爱吃的糖炒栗子。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "阿尔茨海默",
      "失忆",
      "父女",
      "寻亲",
      "催泪"
    ]
  },
  {
    "title": "80后",
    "href": "detail/movie-0550.html",
    "cover": "100.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情、家庭、年代",
    "category": "历史",
    "description": "三个80后独生子女从1990年小学同桌开始，经历下岗、买房、二胎的三十年。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "独生子女",
      "国企下岗",
      "改革开放",
      "怀旧",
      "成长"
    ]
  },
  {
    "title": "青蛙军曹",
    "href": "detail/movie-0551.html",
    "cover": "101.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动画",
    "genre": "喜剧 / 科幻",
    "category": "奇幻",
    "description": "一支来自“伽马星云”的精英青蛙特种部队，不仅没能占领地球，反而沦落为地球一家人的保姆和苦力。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "搞笑",
      "外星人",
      "军宅",
      "日常"
    ]
  },
  {
    "title": "魔手娇娃",
    "href": "detail/movie-0552.html",
    "cover": "102.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电视剧",
    "genre": "悬疑 / 犯罪 / 复仇",
    "category": "剧情",
    "description": "看似柔弱的残疾少女，实则拥有一双能操控人心的“魔手”，将欺骗她的渣男们逐个送进地狱。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "反杀",
      "女性主导",
      "高智商",
      "虐恋",
      "反转"
    ]
  },
  {
    "title": "雷霆人归来",
    "href": "detail/movie-0553.html",
    "cover": "103.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 家庭",
    "category": "音乐",
    "description": "曾拯救世界的超级英雄团队“雷霆人”已退休 20 年，如今他们的子女被绑架，老人们必须重新穿上战衣。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "超级英雄",
      "退休",
      "中年危机",
      "二代",
      "情怀"
    ]
  },
  {
    "title": "男主大甩卖",
    "href": "detail/movie-0554.html",
    "cover": "104.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "喜剧 / 奇幻 / 爱情",
    "category": "悬疑",
    "description": "乙女游戏女主播抽卡永远非酋，某天她氪金抽到的SSR男主竟从屏幕里掉出来，而且是个毫无用处的恋爱废柴。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "玛丽苏反转",
      "乙女游戏",
      "人设崩塌",
      "直播",
      "降维打击"
    ]
  },
  {
    "title": "神童",
    "href": "detail/movie-0555.html",
    "cover": "105.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 剧情",
    "category": "都市",
    "description": "一个测出智商180的8岁男孩承认自己杀害了全家，心理医生却发现他在玩的是一场以自由为赌注的审判游戏。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "天才少年",
      "高智商犯罪",
      "弑父",
      "精神病学"
    ]
  },
  {
    "title": "不夜城1980",
    "href": "detail/movie-0556.html",
    "cover": "106.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "犯罪, 年代",
    "category": "悬疑",
    "description": "1980年东京歌舞伎町，一个从乡下来的女孩为了还债，在妈妈桑的调教下成了夜总会的“销售女王”，代价是卷入黑帮地盘之争。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "夜总会",
      "黑帮",
      "泡沫经济前夜",
      "复古"
    ]
  },
  {
    "title": "富豪游戏",
    "href": "detail/movie-0557.html",
    "cover": "107.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑, 剧情",
    "category": "家庭",
    "description": "被卷入富豪们的“真人狩猎”游戏，一个贫穷大学生发现，猎物也可以是猎人。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "财阀",
      "生存游戏",
      "阶级讽刺",
      "高智商",
      "全员恶人"
    ]
  },
  {
    "title": "惨烈狙击战",
    "href": "detail/movie-0558.html",
    "cover": "108.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "战争 / 动作",
    "category": "动作",
    "description": "长津湖战役后，一名中国神枪手与美军王牌狙击手在冰封的狼林山脉展开了一场关乎尊严的生死猎杀。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "狙击",
      "抗美援朝",
      "雪原",
      "智斗",
      "硬核"
    ]
  },
  {
    "title": "秋光奏鸣曲",
    "href": "detail/movie-0559.html",
    "cover": "109.jpg",
    "year": "2024",
    "region": "瑞典",
    "type": "电影",
    "genre": "剧情， 音乐",
    "category": "家庭",
    "description": "一位功成名就的老钢琴家晚年中风后失去演奏能力，她从未被认可的女儿回到家中，两人在沉默和音乐中展开一场迟来的对峙。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "老年",
      "母女",
      "和解",
      "古典乐"
    ]
  },
  {
    "title": "我来自北京之铁锅炖大鹅",
    "href": "detail/movie-0560.html",
    "cover": "110.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 剧情 / 乡村",
    "category": "动作",
    "description": "北京金牌投资人被裁后回东北老家，用互联网思维卖铁锅炖大鹅，结果全村都疯了。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "东北返乡",
      "创业喜剧",
      "城市与乡村",
      "真香定律"
    ]
  },
  {
    "title": "相对宇宙第一季",
    "href": "detail/movie-0561.html",
    "cover": "111.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻, 惊悚",
    "category": "家庭",
    "description": "政府办事员发现隔壁电梯里走出了和自己一模一样的“他”，来自一个仅有一墙之隔的平行宇宙。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "平行世界",
      "谍战",
      "哲学",
      "悬疑",
      "烧脑"
    ]
  },
  {
    "title": "青之文学",
    "href": "detail/movie-0562.html",
    "cover": "112.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "文学 / 奇幻 / 剧情",
    "category": "剧情",
    "description": "太宰治、夏目漱石等6位文豪被召唤到现代东京，他们必须亲自“续写”自己未完成的作品，否则将被文学之神抹去。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "名著改编",
      "作家登场",
      "单元剧",
      "文艺"
    ]
  },
  {
    "title": "畸形人",
    "href": "detail/movie-0563.html",
    "cover": "113.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，剧情",
    "category": "悬疑",
    "description": "一群马戏团畸形演员在遭遇外界恶意后，策划了一场血腥而优雅的复仇。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "马戏团",
      "身体恐怖",
      "社会隐喻",
      "惊悚"
    ]
  },
  {
    "title": "秋白之死",
    "href": "detail/movie-0564.html",
    "cover": "114.jpg",
    "year": "2025",
    "region": "中国内地",
    "type": "电影",
    "genre": "剧情, 历史, 传记",
    "category": "古装",
    "description": "1935年，瞿秋白在福建长汀被捕。面对劝降，他在狱中以诗会友，用生命书写了“文人”的最后尊严。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "革命先烈",
      "文人风骨",
      "诗意叙事"
    ]
  },
  {
    "title": "追爱自由行",
    "href": "detail/movie-0565.html",
    "cover": "115.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 公路 / 喜剧",
    "category": "剧情",
    "description": "一对分手已久的情侣，为了争抢一辆二人共同拥有的旧房车，踏上了一场啼笑皆非的“争夺”之旅。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "公路片",
      "前任",
      "旅行",
      "欢喜冤家",
      "治愈"
    ]
  },
  {
    "title": "惊天骇地",
    "href": "detail/movie-0566.html",
    "cover": "116.jpg",
    "year": "1999",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "category": "历史",
    "description": "三伙人同时在沙漠里挖同一箱钱，但他们都不知道钱的主人正拿狙击枪看着他们。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "沙漠夺宝",
      "多线混战",
      "实景特技",
      "暴力美学"
    ]
  },
  {
    "title": "疯狂褓姆",
    "href": "detail/movie-0567.html",
    "cover": "117.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 动作 / 家庭",
    "category": "爱情",
    "description": "应聘的温柔保姆，其实是隐退的王牌特工，而两个小孩也比她想象的要危险。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "动作喜剧",
      "保姆",
      "特工",
      "反转",
      "硬核带娃"
    ]
  },
  {
    "title": "牢笼之热",
    "href": "detail/movie-0568.html",
    "cover": "118.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情、惊悚",
    "category": "动作",
    "description": "法国最严监狱空调故障，牢房温度升至50度，囚犯与狱警在热浪中同时走向疯狂。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "监狱",
      "热浪",
      "暴动",
      "心理压迫",
      "人性实验"
    ]
  },
  {
    "title": "触犯",
    "href": "detail/movie-0569.html",
    "cover": "119.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "悬疑, 犯罪, 心理",
    "category": "青春",
    "description": "心理医生用深度催眠触碰连环杀手的童年记忆，却唤醒了自己体内的第二人格。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "催眠破案",
      "记忆回溯",
      "连环杀手",
      "心理师",
      "禁忌实验"
    ]
  },
  {
    "title": "迷宅幻影",
    "href": "detail/movie-0570.html",
    "cover": "120.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖，悬疑",
    "category": "纪录",
    "description": "灵异主播为涨粉住进凶宅，却发现每晚零点，屋内都会重现二十年前的灭门惨案。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "鬼宅",
      "时间循环",
      "日式恐怖",
      "心理"
    ]
  },
  {
    "title": "黄巾骑兵队",
    "href": "detail/movie-0571.html",
    "cover": "121.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史 / 战争",
    "category": "动作",
    "description": "黄巾起义失败后，一支残存骑兵队游走于官军与流民之间，寻找失落的太平道圣物。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "汉末",
      "骑兵",
      "忠义",
      "乱世"
    ]
  },
  {
    "title": "汝矣岛",
    "href": "detail/movie-0572.html",
    "cover": "122.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "奇幻",
    "description": "一名记者受邀前往汝矣岛的秘密晚宴，却发现自己是唯一揭露金融巨鳄阴谋的活证人。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "政治黑幕",
      "孤岛",
      "记者调查",
      "复仇"
    ]
  },
  {
    "title": "我的人生冒险",
    "href": "detail/movie-0573.html",
    "cover": "123.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "冒险",
    "category": "奇幻",
    "description": "身患绝症的少年把最后一百天活成了一款开放世界RPG，每完成一个任务就延长一天寿命。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "游戏",
      "虚拟现实",
      "绝症",
      "治愈",
      "公路"
    ]
  },
  {
    "title": "神剑七式",
    "href": "detail/movie-0574.html",
    "cover": "124.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 武侠 / 奇幻",
    "category": "奇幻",
    "description": "江湖传言，修成“神剑七式”必须自断经脉，而一名断臂铁匠无意中触发了失传的第七式。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "硬核武侠",
      "特效打斗",
      "复仇",
      "江湖奇术"
    ]
  },
  {
    "title": "法外见真情",
    "href": "detail/movie-0575.html",
    "cover": "125.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧, 剧情, 犯罪",
    "category": "家庭",
    "description": "一名退休法官联合小镇居民成立地下法庭，专门惩罚法律管不了的无赖。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "小镇法官",
      "以恶制恶",
      "邻里正义",
      "法国左派",
      "黑色幽默"
    ]
  },
  {
    "title": "狼人生死恋",
    "href": "detail/movie-0576.html",
    "cover": "126.jpg",
    "year": "2024",
    "region": "英国 / 加拿大",
    "type": "电视剧",
    "genre": "剧情, 爱情, 奇幻",
    "category": "动作",
    "description": "野生动物学家在北极圈救助了一只受伤的狼，却发现狼皮之下是一个被诅咒的远古战士。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "狼人",
      "禁忌之恋",
      "荒野"
    ]
  },
  {
    "title": "震荡效应",
    "href": "detail/movie-0577.html",
    "cover": "127.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 运动 / 传记",
    "category": "剧情",
    "description": "一位脑科学家长年揭露橄榄球运动中的脑震荡风险，却遭到整个联盟的封杀与威胁。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "美式橄榄球",
      "脑损伤",
      "体制黑幕",
      "医患冲突"
    ]
  },
  {
    "title": "其后",
    "href": "detail/movie-0578.html",
    "cover": "128.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 同性",
    "category": "历史",
    "description": "同志导演回到家乡参加初恋的葬礼，却被初恋的妻子恳求“扮演”亡夫完成最后的家族合影。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "同学会",
      "未亡人",
      "替身"
    ]
  },
  {
    "title": "张震讲故事之三更夜",
    "href": "detail/movie-0579.html",
    "cover": "129.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "category": "青春",
    "description": "三个发生在深夜3点33分的都市怪谈，每一个都源自你随手忽略的生活细节。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "都市怪谈",
      "单元故事",
      "细思极恐"
    ]
  },
  {
    "title": "庞克电影",
    "href": "detail/movie-0580.html",
    "cover": "130.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "音乐 / 剧情 / 青春",
    "category": "家庭",
    "description": "1976年伦敦，三个被主流抛弃的少年组建了史上最烂的朋克乐队，却意外改变了音乐史。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "朋克",
      "乐队",
      "叛逆",
      "1970年代",
      "传记虚构"
    ]
  },
  {
    "title": "超人前传第五季",
    "href": "detail/movie-0581.html",
    "cover": "131.jpg",
    "year": "2005",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻 / 冒险 / 剧情",
    "category": "家庭",
    "description": "第五季中，克拉克终于学会了飞行，但代价是他必须亲手将最好的朋友莱克斯·卢瑟推向成为宿敌的深渊。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "克拉克·肯特",
      "氪星",
      "莱克斯·卢瑟",
      "拉娜·朗",
      "超能力觉醒"
    ]
  },
  {
    "title": "入伍前的疯狂",
    "href": "detail/movie-0582.html",
    "cover": "132.jpg",
    "year": "2012",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧、青春、友情",
    "category": "励志",
    "description": "离入伍只剩一周，六个好兄弟决定进行一场“只有男人才能懂”的荒唐全国冒险，只为不留遗憾。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "兵役",
      "告别之旅",
      "兄弟情",
      "公路喜剧"
    ]
  },
  {
    "title": "他妈哥池 真正的故事",
    "href": "detail/movie-0583.html",
    "cover": "133.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻 / 悬疑",
    "category": "爱情",
    "description": "一款风靡全球的电子宠物突然集体“觉醒”，开始吞噬主人的记忆作为食物。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "虚拟宠物",
      "都市传说",
      "数据入侵",
      "青春疼痛"
    ]
  },
  {
    "title": "维纳斯的象征",
    "href": "detail/movie-0584.html",
    "cover": "134.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "悬疑, 历史",
    "category": "都市",
    "description": "一幅波提切利的真迹消失五百年后突然出现，带着两具尸体和一支密码。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "文艺复兴",
      "艺术侦探",
      "失踪名画",
      "蛇蝎美人"
    ]
  },
  {
    "title": "原则问题",
    "href": "detail/movie-0585.html",
    "cover": "135.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 职场",
    "category": "科幻",
    "description": "一位年轻律师坚守职业底线，却发现自己正在为最痛恨的对手辩护。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "法律",
      "道德困境",
      "理想主义",
      "职场斗争",
      "人性"
    ]
  },
  {
    "title": "公民露丝",
    "href": "detail/movie-0586.html",
    "cover": "136.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 传记",
    "category": "古装",
    "description": "一名调查记者在揭露政治黑幕时，发现自己要扳倒的政客，正是30年前曾救她一命的恩人。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "政治",
      "记者",
      "真相",
      "体制"
    ]
  },
  {
    "title": "对战美洲狮",
    "href": "detail/movie-0587.html",
    "cover": "137.jpg",
    "year": "2024",
    "region": "加拿大",
    "type": "电影",
    "genre": "惊悚, 冒险",
    "category": "悬疑",
    "description": "退役女狙击手带女儿露营遭美洲狮群围困，她必须在弹尽粮绝前用战术知识绝境求生。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "荒野求生",
      "猛兽",
      "女性",
      "生存"
    ]
  },
  {
    "title": "暴力那不勒斯",
    "href": "detail/movie-0588.html",
    "cover": "138.jpg",
    "year": "2018",
    "region": "意大利",
    "type": "电影",
    "genre": "犯罪, 剧情, 动作",
    "category": "家庭",
    "description": "那不勒斯黑帮老大的儿子是个懦弱的厨师，父亲被杀后他决定用美食完成复仇。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "黑帮",
      "那不勒斯",
      "父子",
      "复仇",
      "写实"
    ]
  },
  {
    "title": "兄妹之家",
    "href": "detail/movie-0589.html",
    "cover": "139.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "家庭剧情",
    "category": "悬疑",
    "description": "因父母意外离世，一对十年未见的兄妹被迫同居，却发现彼此都过着与印象中完全不同的生活。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "治愈",
      "亲情",
      "社会观察"
    ]
  },
  {
    "title": "战争天堂",
    "href": "detail/movie-0590.html",
    "cover": "140.jpg",
    "year": "2025",
    "region": "俄罗斯 / 德国",
    "type": "电影",
    "genre": "剧情 / 战争 / 历史",
    "category": "悬疑",
    "description": "一名犹太女孩在集中营里遇到了曾经抛弃她的纳粹军官情人，天堂与地狱只在一念之间。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "二战",
      "集中营",
      "人性拷问",
      "黑白摄影"
    ]
  },
  {
    "title": "偶然的田园日记",
    "href": "detail/movie-0591.html",
    "cover": "141.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情，治愈，爱情",
    "category": "古装",
    "description": "首尔律师被迫回乡接手爷爷的兽医诊所，在鸡飞狗跳中撞上了暴躁女警察。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "律师返乡",
      "农村生活",
      "邻里温情",
      "警察故事"
    ]
  },
  {
    "title": "一心一意为老友",
    "href": "detail/movie-0592.html",
    "cover": "142.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧/剧情",
    "category": "动作",
    "description": "五个加起来超过400岁的意大利老友，决定偷一辆面包车，去参加他们60年前在摇滚乐队里约好的最后一场演出。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "友谊",
      "老年",
      "圆梦",
      "公路"
    ]
  },
  {
    "title": "我老死苏怡",
    "href": "detail/movie-0593.html",
    "cover": "143.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "category": "历史",
    "description": "程序员的AI女友突然有了自我意识，她告诉他：其实她是他未来弥留之际上传的初恋记忆体。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "穿越",
      "遗憾",
      "生死恋"
    ]
  },
  {
    "title": "来自红花坂",
    "href": "detail/movie-0594.html",
    "cover": "144.jpg",
    "year": "2011",
    "region": "日本",
    "type": "电影",
    "genre": "动画, 青春",
    "category": "悬疑",
    "description": "1963年的横滨，一群高中生为保护一栋百年老楼而战，却意外揭开了两个家庭的身世秘密。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "宫崎吾朗",
      "吉卜力",
      "昭和",
      "校园"
    ]
  },
  {
    "title": "重启咲良田前篇",
    "href": "detail/movie-0595.html",
    "cover": "145.jpg",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "genre": "科幻悬疑",
    "category": "剧情",
    "description": "在一个所有超能力都被记录管理的城镇，一名少年用“重启”能力不断回溯时间，只为复活已死的少女。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "超能力",
      "时间回溯",
      "哲学思辨"
    ]
  },
  {
    "title": "非爱不可的圣诞",
    "href": "detail/movie-0596.html",
    "cover": "146.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "爱情, 喜剧, 节日",
    "category": "纪录",
    "description": "职场女强人花钱雇了个“圣诞男友”回家过年，却发现对方居然是公司新来的CEO。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "圣诞",
      "契约恋爱",
      "英国幽默",
      "温馨"
    ]
  },
  {
    "title": "棋逢敌手",
    "href": "detail/movie-0597.html",
    "cover": "147.jpg",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "category": "科幻",
    "description": "一名FBI审讯专家用棋局战术审问连环杀手，对方却用每一步落子告诉他下一个受害者的位置。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "国际象棋",
      "高智商犯罪",
      "双雄对决",
      "冷门神作"
    ]
  },
  {
    "title": "草房子",
    "href": "detail/movie-0598.html",
    "cover": "148.jpg",
    "year": "2000",
    "region": "中国大陆",
    "type": "电影",
    "genre": "儿童文艺",
    "category": "奇幻",
    "description": "六十年代苏北水乡，残疾少年在草房子火灾中失去了唯一的朋友，却学会了如何告别。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "乡土文学",
      "成长疼痛",
      "油麻地",
      "诗意苦难"
    ]
  },
  {
    "title": "60日的夏天",
    "href": "detail/movie-0599.html",
    "cover": "149.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 同性",
    "category": "科幻",
    "description": "两个少年在南法薰衣草田里的夏令营共度60天，约定二十年后开启埋下的时光胶囊，而秘密早已在当年被野火吞噬。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "田园",
      "夏令营",
      "初恋",
      "秘密",
      "时光胶囊"
    ]
  },
  {
    "title": "一个妨碍了希特勒的人",
    "href": "detail/movie-0600.html",
    "cover": "150.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 历史 / 惊悚",
    "category": "奇幻",
    "description": "一名普通的德国列车员，因一次善举，意外地改变了二战的最终走向。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "二战",
      "刺杀",
      "小人物",
      "历史改写"
    ]
  },
  {
    "title": "逐浪豪情",
    "href": "detail/movie-0601.html",
    "cover": "1.jpg",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情, 运动",
    "category": "励志",
    "description": "两个性格迥异的冲浪手，为了征服传说中的“疯狗浪”而结下生死羁绊。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "冲浪",
      "兄弟情",
      "自然奇观"
    ]
  },
  {
    "title": "神龙法师",
    "href": "detail/movie-0602.html",
    "cover": "2.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "奇幻，古装，动作",
    "category": "科幻",
    "description": "大唐末年，一条不想当神龙的社恐废龙，遇到了一个想出名想疯了的捉妖骗子，组成了奇葩捉妖队。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "龙族",
      "道士",
      "捉妖",
      "大唐"
    ]
  },
  {
    "title": "狼牙",
    "href": "detail/movie-0603.html",
    "cover": "3.jpg",
    "year": "2008",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 悬疑",
    "category": "动作",
    "description": "神秘男子阿布在离岛小店吃下巨量饭菜，没人知道他是刚杀掉黑帮老大头颅的杀手。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "功夫",
      "孤胆英雄",
      "雨夜激战"
    ]
  },
  {
    "title": "神勇女侠",
    "href": "detail/movie-0604.html",
    "cover": "4.jpg",
    "year": "1985",
    "region": "香港",
    "type": "电影",
    "genre": "动作 / 喜剧",
    "category": "历史",
    "description": "菜鸟女警误打误撞卷入国际珠宝案，用尽歪招把大反派整得怀疑人生。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "香港电影",
      "女警",
      "功夫喜剧",
      "怀旧"
    ]
  },
  {
    "title": "反贪风暴",
    "href": "detail/movie-0605.html",
    "cover": "5.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧 (30集)",
    "genre": "律政 / 犯罪 / 权谋",
    "category": "青春",
    "description": "为了扳倒财政司长，廉政公署不得不和黑社会合作。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "廉政公署",
      "金融黑幕",
      "高层腐败",
      "孤臣",
      "极限拉扯"
    ]
  },
  {
    "title": "喜剧 站前漫画",
    "href": "detail/movie-0606.html",
    "cover": "6.jpg",
    "year": "2011",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧，剧情",
    "category": "都市",
    "description": "一个落魄的漫才组合回到乡下车站前开了一家漫画咖啡店，却把生活过成了一出闹剧。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "漫才",
      "地方振兴",
      "小人物",
      "温暖"
    ]
  },
  {
    "title": "东北俩兄弟",
    "href": "detail/movie-0607.html",
    "cover": "7.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "category": "喜剧",
    "description": "一对关系破裂的亲兄弟，被迫开着一辆破面包车穿越东北，去给父亲迁坟。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "东北",
      "兄弟",
      "公路片",
      "黑色幽默",
      "现实"
    ]
  },
  {
    "title": "男女主人",
    "href": "detail/movie-0608.html",
    "cover": "8.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑/爱情",
    "category": "科幻",
    "description": "为了巨额遗产，穷酸替身女佣假扮成冷漠少爷的失踪妻子，却发现真正的妻子正在密室里看着这一切。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "契约婚姻",
      "双重人格",
      "豪宅秘辛",
      "替身",
      "反转"
    ]
  },
  {
    "title": "血色迷雾",
    "href": "detail/movie-0609.html",
    "cover": "9.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑， 民国",
    "category": "青春",
    "description": "1937年上海孤岛，六具尸体胸口都放着同一张麻将牌，且都是“红中”。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "侦探",
      "连环杀人",
      "旧上海",
      "迷雾"
    ]
  },
  {
    "title": "全垒打",
    "href": "detail/movie-0610.html",
    "cover": "10.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情、运动、家庭",
    "category": "励志",
    "description": "天才听障棒球少年，唯一的愿望是亲耳听到一次父亲为他喝彩的“击球声”。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "棒球",
      "听障",
      "父子",
      "热血催泪"
    ]
  },
  {
    "title": "战略机动大作战",
    "href": "detail/movie-0611.html",
    "cover": "11.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画 / 电影",
    "genre": "科幻 / 机甲 / 战争",
    "category": "爱情",
    "description": "当指挥系统全部瘫痪，一名只会纸上谈兵的军校女学员成了全人类最后的旗舰大脑。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "萝卜",
      "少女指挥官",
      "战术博弈",
      "太空歌剧"
    ]
  },
  {
    "title": "自由门神",
    "href": "detail/movie-0612.html",
    "cover": "12.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻 / 剧情",
    "category": "都市",
    "description": "门神郁垒因业绩垫底被贬下凡，附身在一个便利店夜班社畜身上，两人共用一具身体。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "庙宇",
      "门神",
      "社畜",
      "神话新编"
    ]
  },
  {
    "title": "花月佳期1995",
    "href": "detail/movie-0613.html",
    "cover": "13.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情， 喜剧， 奇幻",
    "category": "纪录",
    "description": "1995年，一家濒临倒闭的婚介所，因为一次填错表格，把七个互不相干的人配成了三对半。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "婚介所",
      "身份错位",
      "怀旧风",
      "港式浪漫"
    ]
  },
  {
    "title": "魅影缝匠国语",
    "href": "detail/movie-0614.html",
    "cover": "14.jpg",
    "year": "2017",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 心理",
    "category": "纪录",
    "description": "伦敦最顶尖的裁缝只为上流社会制衣，直到他爱上了一个让他过敏的服务员。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "高定裁缝",
      "病态控制",
      "五十年代伦敦",
      "毒蘑菇爱情"
    ]
  },
  {
    "title": "血河2024",
    "href": "detail/movie-0615.html",
    "cover": "15.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作，惊悚",
    "category": "爱情",
    "description": "一群雇佣兵潜入核潜艇打捞黄金，却唤醒沉睡在深海的变异生物。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "复仇",
      "密闭空间",
      "水下搏斗"
    ]
  },
  {
    "title": "真由美",
    "href": "detail/movie-0616.html",
    "cover": "16.jpg",
    "year": "1977",
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "category": "科幻",
    "description": "为了替被黑帮残忍杀害的未婚夫报仇，普通女白领真由美拿起枪，化身城市暗夜里的复仇天使。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "复仇",
      "女性",
      "暴力",
      "经典"
    ]
  },
  {
    "title": "向西闻记国语",
    "href": "detail/movie-0617.html",
    "cover": "17.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "悬疑 / 冒险 / 公路",
    "category": "古装",
    "description": "一个被开除的前刑侦顾问，驾驶报废面包车在大西北专接“科学无法解释”的怪案。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "西部",
      "怪谈",
      "方言探案",
      "单元剧",
      "黑色幽默"
    ]
  },
  {
    "title": "新婚浩劫",
    "href": "detail/movie-0618.html",
    "cover": "18.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "悬疑, 犯罪, 惊悚",
    "category": "奇幻",
    "description": "婚礼后第三天，新娘发现丈夫和“公婆”都是雇来的演员。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "结婚",
      "骗局",
      "复仇",
      "女性"
    ]
  },
  {
    "title": "高校男生",
    "href": "detail/movie-0619.html",
    "cover": "19.jpg",
    "year": "2006",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 喜剧 / 教育",
    "category": "纪录",
    "description": "在八十年代的男校里，两个天才学生用诗歌和粗口挑衅老师，却被新来的文艺青年教师彻底征服。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "师生",
      "文学",
      "同性启蒙",
      "精英教育",
      "英式幽默"
    ]
  },
  {
    "title": "良好的条纹",
    "href": "detail/movie-0620.html",
    "cover": "20.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 运动, 喜剧",
    "category": "悬疑",
    "description": "一个黑人移民后代，一个白人老牌球星，两个失意者在一支郊区杂牌橄榄球队里找到了救赎。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "橄榄球",
      "逆袭",
      "种族",
      "兄弟情"
    ]
  },
  {
    "title": "匆匆心动",
    "href": "detail/movie-0621.html",
    "cover": "21.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情 / 喜剧",
    "category": "爱情",
    "description": "全校最冷的学霸和全校最吵的体育生，在同一张课桌抽屉里轮流放匿名情书。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "校园",
      "双向暗恋",
      "误会",
      "纯爱"
    ]
  },
  {
    "title": "650万",
    "href": "detail/movie-0622.html",
    "cover": "22.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "category": "纪录",
    "description": "650万彩票大奖得主意外身亡，六组毫不相干的小人物各自以为能吞下这笔钱。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "彩票大奖",
      "黑色幽默",
      "多线叙事",
      "小人物"
    ]
  },
  {
    "title": "阿罗汉",
    "href": "detail/movie-0623.html",
    "cover": "23.jpg",
    "year": "2004",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 奇幻 / 喜剧",
    "category": "音乐",
    "description": "一个花心摇滚乐手和一个呆萌小沙弥，发现自己是佛经预言中能降服千年恶鬼的“阿罗汉”转世。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "佛教",
      "驱魔",
      "电吉他",
      "无厘头",
      "双主角"
    ]
  },
  {
    "title": "4分44秒",
    "href": "detail/movie-0624.html",
    "cover": "24.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚, 科幻, 密室",
    "category": "纪录",
    "description": "一觉醒来，世界陷入绝对的寂静，任何超过4分44秒的声音都会引来不可名状的追杀。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "实时叙事",
      "末日倒计时",
      "高概念"
    ]
  },
  {
    "title": "离恨歌",
    "href": "detail/movie-0625.html",
    "cover": "25.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 爱情",
    "category": "悬疑",
    "description": "她是专写悲剧的话本作者，直到发现自己每一世的人生都是一本被仙界定好结局的“虐文”。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "仙侠",
      "虐恋",
      "轮回",
      "权谋"
    ]
  },
  {
    "title": "不干我的事",
    "href": "detail/movie-0626.html",
    "cover": "26.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "喜剧, 剧情",
    "category": "纪录",
    "description": "一个信奉“多一事不如少一事”的公司老油条，意外被卷入一场全员甩锅的亿元贪腐案，越躲越背锅。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "职场甩锅",
      "黑色幽默",
      "社畜生存",
      "道德困境"
    ]
  },
  {
    "title": "真实",
    "href": "detail/movie-0627.html",
    "cover": "27.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "科幻、剧情",
    "category": "科幻",
    "description": "当红虚拟歌姬“真实”的创造者意外身亡后，AI开始自我迭代，并试图找到“父亲”死亡的真实原因。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "AI伦理",
      "虚拟偶像",
      "社交媒体",
      "数字永生"
    ]
  },
  {
    "title": "裸女天魔",
    "href": "detail/movie-0628.html",
    "cover": "28.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠 / 奇幻 / 动作",
    "category": "都市",
    "description": "被灭门的邪教遗孤修炼“天魔解体大法”，每施展一次功力便褪去一件衣衫，直到赤身裸体，也直到天下无敌。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "邵氏美学",
      "邪典武侠",
      "女体兵器",
      "江湖复仇"
    ]
  },
  {
    "title": "更高境界",
    "href": "detail/movie-0629.html",
    "cover": "29.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，科幻",
    "category": "都市",
    "description": "一名底层清洁工盗用了精英身份的意识备份，却在高级躯体里发现了阶级的终极骗局。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "意识上传",
      "精英主义",
      "反乌托邦"
    ]
  },
  {
    "title": "了不起的林千金",
    "href": "detail/movie-0630.html",
    "cover": "30.jpg",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情 / 职场",
    "category": "纪录",
    "description": "林氏集团千金假扮保洁潜入自家公司，只为找出内鬼——结果三个月后被提拔为副总裁，而CEO还不知道她是谁。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "豪门",
      "女总裁",
      "逆袭",
      "打脸爽剧"
    ]
  },
  {
    "title": "马克斯与拾荒者",
    "href": "detail/movie-0631.html",
    "cover": "31.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 文艺, 社会",
    "category": "古装",
    "description": "一个破产的银行家流浪街头，跟随一群拾荒者学会了在垃圾堆里寻找艺术与尊严。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "巴黎",
      "边缘人",
      "黑色幽默",
      "温情"
    ]
  },
  {
    "title": "片场",
    "href": "detail/movie-0632.html",
    "cover": "32.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 悬疑",
    "category": "剧情",
    "description": "一个剧组在拍悬疑片，道具枪变成了真枪，导演却说：“继续拍。”",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "娱乐圈",
      "凶案",
      "剧组风云",
      "多线叙事"
    ]
  },
  {
    "title": "超级飞侠第十一季",
    "href": "detail/movie-0633.html",
    "cover": "33.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "动画, 儿童, 冒险",
    "category": "剧情",
    "description": "乐迪和他的超级飞侠伙伴们继续环游世界，给小朋友们送包裹，顺便解决各种棘手的难题。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "益智",
      "乐迪",
      "环游世界",
      "解决问题"
    ]
  },
  {
    "title": "我们的家园",
    "href": "detail/movie-0634.html",
    "cover": "34.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "悬疑",
    "description": "广州老城区面临拆迁，固执的父亲誓死守护骑楼，而他的女儿正是拆迁办的项目负责人。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "拆迁",
      "老城区",
      "父女",
      "邻里",
      "现实主义"
    ]
  },
  {
    "title": "碧血剑粤语",
    "href": "detail/movie-0635.html",
    "cover": "35.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "古装武侠",
    "category": "奇幻",
    "description": "明末遗孤袁承志重拾碧血剑，在国仇家恨与江湖恩怨中探寻忠义真相。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "复仇",
      "明末",
      "粤语原声",
      "动作"
    ]
  },
  {
    "title": "比基尼少女",
    "href": "detail/movie-0636.html",
    "cover": "36.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "剧集",
    "genre": "喜剧 / 青春",
    "category": "都市",
    "description": "五个被校队淘汰的女孩组成了史上最业余的沙滩排球队，目标只有一个：打败她们的塑料闺蜜。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "女子沙滩排球",
      "逆袭",
      "友情"
    ]
  },
  {
    "title": "宝藏女王",
    "href": "detail/movie-0637.html",
    "cover": "37.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑犯罪",
    "category": "科幻",
    "description": "养老院里四个被子女抛弃的老太太，决定联手盗走前总统藏在院里的秘密金库。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "寻宝",
      "老年女性",
      "诈骗复仇",
      "高智商"
    ]
  },
  {
    "title": "侠影仙踪",
    "href": "detail/movie-0638.html",
    "cover": "38.jpg",
    "year": "2005",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "武侠 / 古装",
    "category": "动作",
    "description": "一介书生误食千年仙果，被迫卷入正邪两道争夺“无字天书”的腥风血雨。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "剑仙",
      "宿命",
      "正邪"
    ]
  },
  {
    "title": "北极正义：雷霆战队",
    "href": "detail/movie-0639.html",
    "cover": "39.jpg",
    "year": "2026",
    "region": "加拿大",
    "type": "电影",
    "genre": "动画 / 动作",
    "category": "励志",
    "description": "北极熊、北极狐和旅鼠组成机甲战队，对抗钻探北极石油的邪恶公司。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "北极",
      "动物英雄",
      "机甲",
      "环保"
    ]
  },
  {
    "title": "米丘林",
    "href": "detail/movie-0640.html",
    "cover": "40.jpg",
    "year": "2020",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 历史",
    "category": "励志",
    "description": "苏联植物学家在北极圈内种出了苹果，克格勃怀疑他是在培育耐寒特工。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "科学",
      "极寒",
      "理想主义"
    ]
  },
  {
    "title": "刑事侦缉档案粤语",
    "href": "detail/movie-0641.html",
    "cover": "41.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑, 犯罪, 刑侦",
    "category": "悬疑",
    "description": "重案组督察用最地道的粤语俚语破译凶手留下的密码，却发现每一宗案件都指向她尘封的过去。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "港剧",
      "重案组",
      "心理侧写",
      "单元剧",
      "市井"
    ]
  },
  {
    "title": "极品魂探",
    "href": "detail/movie-0642.html",
    "cover": "42.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "奇幻 / 悬疑 / 喜剧",
    "category": "青春",
    "description": "一个废柴侦探意外获得“附身死者十分钟”的能力，但他只能附身同一个人，而那个人是自杀还是他杀，成了悬案。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "灵异",
      "侦探",
      "附身破案"
    ]
  },
  {
    "title": "心想事成杂货铺",
    "href": "detail/movie-0643.html",
    "cover": "43.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "奇幻 / 温情 / 剧情",
    "category": "奇幻",
    "description": "深水埗一家只在雨夜开门的杂货铺，贩卖的不是商品，而是“心想事成”的机会。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "都市",
      "许愿",
      "代价",
      "治愈",
      "单元剧"
    ]
  },
  {
    "title": "职场小烈第五季",
    "href": "detail/movie-0644.html",
    "cover": "44.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 动画 / 职场",
    "category": "古装",
    "description": "烈子终于升职，却发现自己陷入了比996更可怕的“情绪劳动”无间地狱。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "社畜",
      "吐槽",
      "网飞续订",
      "动物世界"
    ]
  },
  {
    "title": "人生路不熟",
    "href": "detail/movie-0645.html",
    "cover": "45.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧， 公路， 家庭",
    "category": "音乐",
    "description": "一个倒霉的准女婿为讨好未来岳父，硬着头皮加入春运自驾车队，却不知自己搞砸了岳父的秘密任务。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "春运",
      "准女婿",
      "见家长",
      "搞笑"
    ]
  },
  {
    "title": "坐以待毙",
    "href": "detail/movie-0646.html",
    "cover": "46.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 悬疑 / 犯罪",
    "category": "动作",
    "description": "四个陌生人被锁在一间不断缩小的房间里，墙上写着：坐着不动，就能活到最后。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "密室",
      "高智商犯罪",
      "道德困境"
    ]
  },
  {
    "title": "执法风云",
    "href": "detail/movie-0647.html",
    "cover": "47.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "动作 / 犯罪 / 悬疑",
    "category": "古装",
    "description": "两个从小一起长大的孤儿，一个当了警察，一个进了黑帮，十年后他们在毒品交易现场枪口相向。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "卧底",
      "反黑",
      "双男主"
    ]
  },
  {
    "title": "刀枪姊妹",
    "href": "detail/movie-0648.html",
    "cover": "48.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪 / 剧情",
    "category": "动作",
    "description": "失散多年的亲姐妹在黑帮火并中重逢，一个成了卧底，一个成了杀手。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "女性",
      "黑帮",
      "复仇",
      "双雄",
      "枪战"
    ]
  },
  {
    "title": "千丝万缕",
    "href": "detail/movie-0649.html",
    "cover": "49.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "悬疑 / 奇幻",
    "category": "励志",
    "description": "接手百年裁缝店的孙子发现，只要穿上店里修改过的旧衣服，就能看到衣主深埋心底的执念。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "红衣女子",
      "都市传说",
      "祖孙情"
    ]
  },
  {
    "title": "巴登巴登",
    "href": "detail/movie-0650.html",
    "cover": "50.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "剧情，文艺，公路",
    "category": "剧情",
    "description": "失业建筑师回到温泉小镇巴登巴登，想泡死在浴池里，却被老邻居们拉着修复一座废弃歌剧院。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "温泉小镇",
      "和解",
      "德语片"
    ]
  },
  {
    "title": "叻女夏令营",
    "href": "detail/movie-0651.html",
    "cover": "51.jpg",
    "year": "2003",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 青春",
    "category": "喜剧",
    "description": "五个性格迥异的女孩在音乐夏令营中组建了一支临时乐队，目标是打败男生冠军队伍。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "校园",
      "成长",
      "搞笑",
      "姐妹情深"
    ]
  },
  {
    "title": "失衡凶间之罪与杀",
    "href": "detail/movie-0652.html",
    "cover": "52.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "惊悚, 犯罪",
    "category": "爱情",
    "description": "一栋废弃大厦的三间密室里，三组互不相识的人同时醒来，发现自己必须亲手杀死对方才能离开。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "密室",
      "心理",
      "单元剧",
      "因果",
      "血腥"
    ]
  },
  {
    "title": "数码宝贝大冒险 重启",
    "href": "detail/movie-0653.html",
    "cover": "53.jpg",
    "year": "2020",
    "region": "日本",
    "type": "动画",
    "genre": "冒险 / 科幻",
    "category": "爱情",
    "description": "2020年，东京网络瘫痪，被选召的孩子们再次集结，但这一次，数码世界的敌人来自他们的手机应用。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "童年重置",
      "平行世界",
      "数据危机"
    ]
  },
  {
    "title": "缺席的人",
    "href": "detail/movie-0654.html",
    "cover": "54.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑, 剧情",
    "category": "悬疑",
    "description": "一个被所有人忽视的透明人，意外发现自己的身份被神秘杀手顶替，并卷入一场惊天阴谋。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "身份错位",
      "黑色幽默",
      "存在主义"
    ]
  },
  {
    "title": "哈瓦那组曲",
    "href": "detail/movie-0655.html",
    "cover": "55.jpg",
    "year": "2024",
    "region": "古巴 / 西班牙",
    "type": "电影",
    "genre": "剧情 / 音乐",
    "category": "都市",
    "description": "一个过气的欧洲钢琴家在哈瓦那街头偶遇了一位老妇人，她唱的歌，是他五十年前写给初恋的情书。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "古巴音乐",
      "跨国恋",
      "时光倒流"
    ]
  },
  {
    "title": "以色列铁娘子：梅尔夫人",
    "href": "detail/movie-0656.html",
    "cover": "56.jpg",
    "year": "2022",
    "region": "以色列",
    "type": "电影",
    "genre": "传记, 历史",
    "category": "历史",
    "description": "以色列唯一女总理果尔达·梅尔，用四年时间将一个新生儿推向世界强国，却付出血脉代价。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "政治",
      "女性",
      "战争",
      "真实改编"
    ]
  },
  {
    "title": "绝地再生",
    "href": "detail/movie-0657.html",
    "cover": "57.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻、动作、生存",
    "category": "都市",
    "description": "在地下克隆人避难所“摇篮”中长大的编号 734，发现自己的本体已成为地面暴君，决定绝地反杀。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "克隆人",
      "废土",
      "基因背叛",
      "觉醒"
    ]
  },
  {
    "title": "天魔3",
    "href": "detail/movie-0658.html",
    "cover": "58.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/惊悚/宗教",
    "category": "历史",
    "description": "前两部的主角全部死亡，新主角必须阻止已经长大的恶魔之子竞选美国总统。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "反基督者",
      "末日预言",
      "心理崩溃"
    ]
  },
  {
    "title": "去日苦多粤语",
    "href": "detail/movie-0659.html",
    "cover": "59.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情历史",
    "category": "青春",
    "description": "两个失散三十年的社团老友，一个成了出租车司机，一个成了庙街算命佬，因为一具无名尸骨被迫重提旧事。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "时代变迁",
      "江湖兄弟",
      "粤语原声",
      "救赎"
    ]
  },
  {
    "title": "死亡医生玛丽",
    "href": "detail/movie-0660.html",
    "cover": "60.jpg",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚, 犯罪",
    "category": "动作",
    "description": "小镇最受爱戴的女法医，实际上亲手结束了其中十二名死者的生命。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "法医",
      "连环杀手",
      "反转",
      "女性",
      "悬疑"
    ]
  },
  {
    "title": "巴黎艳妹",
    "href": "detail/movie-0661.html",
    "cover": "61.jpg",
    "year": "2011",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，文艺",
    "category": "古装",
    "description": "阿尔及利亚裔的姐姐在巴黎过着保守的生活，活泼的妹妹到来后，彻底搅乱了她的平静与伪装。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "姐妹",
      "移民",
      "身份认同",
      "巴黎",
      "成长"
    ]
  },
  {
    "title": "神秘兵团",
    "href": "detail/movie-0662.html",
    "cover": "62.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 动作 / 奇幻",
    "category": "都市",
    "description": "一个低配版超级英雄团体，成员包括三流魔术师、退休摔跤手和暴躁的便利店店员，竟要拯救真正的世界。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "超级英雄",
      "草台班子",
      "恶搞",
      "逆袭",
      "团队合作"
    ]
  },
  {
    "title": "家裂 第二季",
    "href": "detail/movie-0663.html",
    "cover": "63.jpg",
    "year": "2020",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情，家庭，法律",
    "category": "都市",
    "description": "当专打离婚官司的女王律师发现自己父母当年的婚姻也是一场骗局，她开始质疑自己为之奋斗的一切。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "律政",
      "离婚",
      "人性",
      "英剧"
    ]
  },
  {
    "title": "厨子当官",
    "href": "detail/movie-0664.html",
    "cover": "64.jpg",
    "year": "2018",
    "region": "中国内地",
    "type": "电影",
    "genre": "古装 / 喜剧",
    "category": "古装",
    "description": "一个街头厨子被错认成新科状元，被迫上朝当官，用菜刀和炒锅解决朝廷危机。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "宫廷",
      "美食",
      "官场讽刺",
      "小人物逆袭",
      "烹饪对决"
    ]
  },
  {
    "title": "摩根",
    "href": "detail/movie-0665.html",
    "cover": "65.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻, 悬疑, 惊悚",
    "category": "历史",
    "description": "世界上最先进的AI仿生人“摩根”产生了自我意识，但她声称自己不想自由，只想被“销毁”。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "AI觉醒",
      "仿生人",
      "心理战",
      "伦理困境"
    ]
  },
  {
    "title": "有毒蜂蜜",
    "href": "detail/movie-0666.html",
    "cover": "66.jpg",
    "year": "2024",
    "region": "土耳其",
    "type": "剧集",
    "genre": "悬疑 / 爱情",
    "category": "古装",
    "description": "天才甜点师的爱人突然中毒身亡，她发现自己精心调制的蜂蜜里藏着惊天政治秘密。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "谎言",
      "美食",
      "阴谋",
      "双重身份"
    ]
  },
  {
    "title": "犬鸣村",
    "href": "detail/movie-0667.html",
    "cover": "67.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖",
    "category": "纪录",
    "description": "一名调查失踪案的记者闯入被地图抹去的犬鸣村，发现村民的诅咒正通过电话录音蔓延至现实。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "山村诅咒",
      "民俗怪谈",
      "轮回",
      "悬疑"
    ]
  },
  {
    "title": "搞姬日常",
    "href": "detail/movie-0668.html",
    "cover": "68.jpg",
    "year": "2024",
    "region": "日本",
    "type": "网络剧",
    "genre": "喜剧 / 爱情 / 百合",
    "category": "爱情",
    "description": "一个女装大佬男高中生，被全校女生当成“姐妹”，结果真的爱上了好闺蜜。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "伪娘",
      "校园搞笑",
      "轻百合"
    ]
  },
  {
    "title": "祝你有个甜美的梦",
    "href": "detail/movie-0669.html",
    "cover": "69.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "悬疑， 恐怖， 心理",
    "category": "动作",
    "description": "失眠症母亲每晚都会被同一个噩梦惊醒，直到她发现，女儿也开始做和她一模一样的梦。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "梦境入侵",
      "失眠症",
      "都市怪谈",
      "母女关系",
      "心理惊悚"
    ]
  },
  {
    "title": "激流四勇士",
    "href": "detail/movie-0670.html",
    "cover": "70.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "动作冒险",
    "category": "喜剧",
    "description": "四名退役救援队员在金沙江无人区漂流时，误入地下暗河，激流之下是远古洞穴。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "漂流",
      "极限运动",
      "兄弟情",
      "野外求生",
      "激流"
    ]
  },
  {
    "title": "银都百美",
    "href": "detail/movie-0671.html",
    "cover": "71.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情 / 女性 / 怀旧",
    "category": "喜剧",
    "description": "1988年香港“银都小姐”选美大赛，五名参赛女孩的三十年命运，折射出一座城市的繁华与褪色。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "选美",
      "1980年代",
      "港姐",
      "女性群像",
      "时代变迁"
    ]
  },
  {
    "title": "转校生",
    "href": "detail/movie-0672.html",
    "cover": "72.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "青春",
    "category": "悬疑",
    "description": "沉默寡言的男高中生与活泼开朗的女同学互换身体，却因此揭开了她即将离世的秘密。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "身体互换",
      "校园",
      "青春遗憾",
      "奇幻",
      "催泪"
    ]
  },
  {
    "title": "浮士德",
    "href": "detail/movie-0673.html",
    "cover": "73.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "奇幻、剧情、惊悚",
    "category": "都市",
    "description": "一位潦倒的AI科学家将自己的灵魂卖给魔鬼，换取无限的算法，却发现自己成了监控全人类的帮凶。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "魔鬼契约",
      "哲学",
      "现代改编",
      "黑科技"
    ]
  },
  {
    "title": "龙城古墓",
    "href": "detail/movie-0674.html",
    "cover": "74.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险， 悬疑， 动作",
    "category": "家庭",
    "description": "一支考古队发现龙城古墓下埋着能改变地质结构的古代机关，却被盗墓团伙抢先一步。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "古墓",
      "龙城",
      "考古",
      "机关术",
      "夺宝"
    ]
  },
  {
    "title": "网事情缘",
    "href": "detail/movie-0675.html",
    "cover": "75.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情剧情",
    "category": "历史",
    "description": "1999年，两个高考失利的少年在本地聊天室相遇，用一整夏天的ICQ语音，治愈了彼此的失败。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "网恋",
      "90年代",
      "聊天室",
      "怀旧",
      "纯爱"
    ]
  },
  {
    "title": "对我而言非常珍贵的你",
    "href": "detail/movie-0676.html",
    "cover": "76.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "励志",
    "description": "一个骗光老人积蓄的骗子，因为一场车祸失忆后，竟真的被老人当成了自己死去的儿子。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "催泪",
      "失忆",
      "亲情",
      "治愈"
    ]
  },
  {
    "title": "摇滚青春",
    "href": "detail/movie-0677.html",
    "cover": "77.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、音乐、家庭",
    "category": "奇幻",
    "description": "高中女生为了参加乐队比赛，不得不把患有阿尔茨海默症的摇滚乐手外公从养老院偷出来当主唱。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "校园乐队",
      "代际冲突",
      "老年摇滚",
      "梦想传承"
    ]
  },
  {
    "title": "扬子江事件",
    "href": "detail/movie-0678.html",
    "cover": "78.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难历史",
    "category": "喜剧",
    "description": "2015年“东方之星”沉船事件改编，聚焦船体倾覆后的黄金20分钟，以及岸上那些等待的家属。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "沉船",
      "救援",
      "人性",
      "真实改编",
      "群像"
    ]
  },
  {
    "title": "魂：恐怖的开始",
    "href": "detail/movie-0679.html",
    "cover": "79.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "category": "都市",
    "description": "高考倒计时100天，四个学霸同时被保送后接连“变傻”，他们体内住进了四个渴望上大学的女鬼。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "附身",
      "高考诅咒",
      "校园怪谈"
    ]
  },
  {
    "title": "蜡笔小新第六季",
    "href": "detail/movie-0680.html",
    "cover": "80.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画剧集",
    "genre": "喜剧 / 家庭 / 日常",
    "category": "音乐",
    "description": "小新迎来了新邻居——一位曾经当过黑道大哥的退休园艺师，并开始教他“如何做个正常老人”。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "国民动画",
      "新角色",
      "春日部防卫队",
      "恶搞",
      "温情"
    ]
  },
  {
    "title": "黯色沙滩",
    "href": "detail/movie-0681.html",
    "cover": "81.jpg",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 灾难",
    "category": "家庭",
    "description": "核泄漏事故八年后的禁区内，一位老渔民执意返回那片已经变成黑色的沙滩，只为等待永远不会归来的渔船。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "核辐射",
      "生存",
      "家庭羁绊",
      "福岛",
      "黑色海滩"
    ]
  },
  {
    "title": "人民公仆第一季",
    "href": "detail/movie-0682.html",
    "cover": "82.jpg",
    "year": "2015",
    "region": "乌克兰",
    "type": "剧集",
    "genre": "政治 / 喜剧 / 讽刺",
    "category": "动作",
    "description": "一名高中历史老师因怒骂政府意外走红，竟被网民投票选成了总统。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "教师总统",
      "反腐",
      "黑色幽默",
      "平民政治",
      "理想主义"
    ]
  },
  {
    "title": "记忆之屋",
    "href": "detail/movie-0683.html",
    "cover": "83.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "category": "悬疑",
    "description": "一位患有阿尔茨海默症的建筑师，在记忆彻底崩塌前，将自己的一生重塑为一座不断变化的迷宫。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "阿尔茨海默",
      "意识流",
      "建筑",
      "亲情"
    ]
  },
  {
    "title": "甜蜜的艾玛，亲爱的芭比",
    "href": "detail/movie-0684.html",
    "cover": "84.jpg",
    "year": "2025",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情 / 同性 / 家庭",
    "category": "励志",
    "description": "80岁的艾玛在养老院爱上了失智的芭比，但芭比的女儿坚称母亲只是“老年糊涂”，并要把她转去禁闭室。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "养老院之恋",
      "晚年出柜",
      "记忆与身份",
      "温情"
    ]
  },
  {
    "title": "家有蛇仙美貌妻",
    "href": "detail/movie-0685.html",
    "cover": "85.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "奇幻 / 喜剧 / 爱情",
    "category": "家庭",
    "description": "穷书生娶了个蛇仙老婆，却天天被她追着问：你为什么不怕我？",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "白蛇传改编",
      "仙妖",
      "先婚后爱",
      "爆笑",
      "甜剧"
    ]
  },
  {
    "title": "伯纳德与休伊",
    "href": "detail/movie-0686.html",
    "cover": "86.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧剧情",
    "category": "纪录",
    "description": "一个暴躁的白人退休教授和他的黑人同性恋护工，在一场遗产风波中成为彼此唯一的家人。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "双男主",
      "友情",
      "老年生活"
    ]
  },
  {
    "title": "无伊可靠",
    "href": "detail/movie-0687.html",
    "cover": "87.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "悬疑 / 犯罪 / 剧情",
    "category": "历史",
    "description": "一个“杀猪盘”诈骗集团的操控者，爱上了正在被自己诈骗的单身母亲。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "诈骗",
      "网恋",
      "女性受害者",
      "群像"
    ]
  },
  {
    "title": "变身",
    "href": "detail/movie-0688.html",
    "cover": "88.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚, 奇幻",
    "category": "古装",
    "description": "你每天在地铁上擦肩而过的陌生人，可能正顶着你的脸过你的生活。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "身体互换",
      "都市恐怖",
      "身份认同",
      "高概念"
    ]
  },
  {
    "title": "绝命大煞星",
    "href": "detail/movie-0689.html",
    "cover": "89.jpg",
    "year": "2025",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "喜剧 / 犯罪 / 动作",
    "category": "青春",
    "description": "一个重度社恐的顶级杀手，在执行任务时因为不敢开口问路，引发了一系列不可控的连环血案。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "黑色幽默",
      "杀手",
      "笨贼",
      "乌龙",
      "讽刺"
    ]
  },
  {
    "title": "崔弟的高飞冒险",
    "href": "detail/movie-0690.html",
    "cover": "90.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影, 动画",
    "genre": "喜剧, 冒险, 家庭",
    "category": "历史",
    "description": "崔弟鸟和傻大猫被传送到亚马逊雨林，为了回家必须与一群古怪动物组队。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "乐一通",
      "公路片",
      "跨物种友谊"
    ]
  },
  {
    "title": "隔窗恋爱：飘洋过海",
    "href": "detail/movie-0691.html",
    "cover": "91.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "爱情, 青春, 剧情",
    "category": "纪录",
    "description": "当爱情从对面窗户变成跨越大洋的屏幕，他们还能找回最初隔着玻璃接吻的心动吗？",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "异地恋",
      "成长",
      "续作"
    ]
  },
  {
    "title": "机械威龙",
    "href": "detail/movie-0692.html",
    "cover": "92.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 科幻 / 机甲",
    "category": "励志",
    "description": "退役机甲拳手为救回被黑帮绑架的女儿，必须驾驶早已淘汰的老旧机型重新站上死亡擂台。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "巨型机器人",
      "格斗竞技",
      "父子传承",
      "硬核机甲"
    ]
  },
  {
    "title": "我不想回家",
    "href": "detail/movie-0693.html",
    "cover": "93.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 公路",
    "category": "家庭",
    "description": "春运大潮中，一个十岁的留守儿童爬上了反向的火车，因为“家”对于他来说，是一个比远方更可怕的地方。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "留守儿童",
      "春运",
      "和解"
    ]
  },
  {
    "title": "让老师流产委员会",
    "href": "detail/movie-0694.html",
    "cover": "94.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "genre": "校园惊悚",
    "category": "古装",
    "description": "一个怀孕的女教师被全班学生联合霸凌，他们成立了一个“委员会”，目标是让她流产。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "霸凌",
      "黑色幽默",
      "反乌托邦",
      "压抑",
      "学生"
    ]
  },
  {
    "title": "拦截时光隧道",
    "href": "detail/movie-0695.html",
    "cover": "95.jpg",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "genre": "科幻, 悬疑, 剧情",
    "category": "古装",
    "description": "一位天才物理学家在女儿遭遇空难后，发明了时光拦截装置，却发现每一次回到过去拯救女儿，都会引发更可怕的灾难。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "时间循环",
      "哲学",
      "父女情"
    ]
  },
  {
    "title": "吉什岛的故事",
    "href": "detail/movie-0696.html",
    "cover": "96.jpg",
    "year": "2021",
    "region": "爱尔兰",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "音乐",
    "description": "爱尔兰西海岸一座只在退潮时露出堤道的岛屿上，一个回乡奔丧的女人发现了家族隐藏百年的秘密。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "孤岛",
      "家族秘密",
      "潮汐隐喻"
    ]
  },
  {
    "title": "瘦人",
    "href": "detail/movie-0697.html",
    "cover": "97.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，悬疑，心理",
    "category": "纪录",
    "description": "高中女生得了厌食症后，总能看到一个瘦长的黑影在镜子里拽着她的肠子。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "都市传说",
      "厌食症",
      "幻觉",
      "瘦长鬼影",
      "青少年"
    ]
  },
  {
    "title": "荣誉团队",
    "href": "detail/movie-0698.html",
    "cover": "98.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情，运动，励志",
    "category": "科幻",
    "description": "一群被主流联赛淘汰的球员，在监狱里组建了一支橄榄球队，目标是打败皇家宪兵队。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "橄榄球",
      "草根",
      "逆袭",
      "兄弟连"
    ]
  },
  {
    "title": "天真派：西游记",
    "href": "detail/movie-0699.html",
    "cover": "99.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "儿童，奇幻",
    "category": "动作",
    "description": "一群10至13岁的小演员，用他们天真却又精湛的演技，重新演绎了《西游记》中三打白骨精等经典篇章。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "小孩演戏",
      "名著改编",
      "致敬经典"
    ]
  },
  {
    "title": "僵尸奇兵粤语",
    "href": "detail/movie-0700.html",
    "cover": "100.jpg",
    "year": "2027",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 恐怖 / 动作",
    "category": "悬疑",
    "description": "抗日战争时期，一支日本秘密部队企图用僵尸做武器，却唤醒了沉睡的清朝僵尸将军，敌我皆亡。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "香港僵尸片",
      "民国乱斗",
      "茅山术",
      "市井无厘头"
    ]
  },
  {
    "title": "喜剧 站前天神",
    "href": "detail/movie-0701.html",
    "cover": "101.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 治愈",
    "category": "历史",
    "description": "大阪站前天神桥商店街的深处，有一家只在深夜开门的小酒馆，落魄艺人在这里喝酒取暖，第二天就能写出爆笑的段子。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "漫才",
      "深夜食堂",
      "单元剧",
      "大阪"
    ]
  },
  {
    "title": "邦尼杀死他",
    "href": "detail/movie-0702.html",
    "cover": "102.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 恐怖 / 黑色幽默",
    "category": "历史",
    "description": "每年复活节，“邦尼”都会杀死一个负心汉，今年他遇到了一个主动穿上兔子装的女孩。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "兔子面具",
      "连环杀手",
      "女性反杀"
    ]
  },
  {
    "title": "铁道游击队",
    "href": "detail/movie-0703.html",
    "cover": "103.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "战争/动作",
    "category": "纪录",
    "description": "新编版本，聚焦游击队员如何在日军眼皮底下重建被叛徒摧毁的铁路情报网。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "红色经典改编",
      "铁道",
      "民间抗日",
      "双面间谍",
      "火车特技"
    ]
  },
  {
    "title": "十个小印第安人",
    "href": "detail/movie-0704.html",
    "cover": "104.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 惊悚",
    "category": "科幻",
    "description": "十个互不相识的人受邀来到孤岛别墅，随着一首童谣，他们一个接一个按歌词描述的方式死去。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "阿加莎",
      "孤岛谋杀",
      "童谣杀人",
      "密室经典"
    ]
  },
  {
    "title": "我爸爸是赏金猎人",
    "href": "detail/movie-0705.html",
    "cover": "105.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情， 喜剧， 动作",
    "category": "爱情",
    "description": "平凡高中生意外发现清贫老实的父亲竟是全国头号通缉赏金猎人，生活一夜翻盘。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "父女关系",
      "卧底",
      "反差萌",
      "犯罪喜剧"
    ]
  },
  {
    "title": "倾城之恋国语",
    "href": "detail/movie-0706.html",
    "cover": "106.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 剧情, 年代",
    "category": "动作",
    "description": "1940年代上海，一场战争让一对互相算计的男女终于放下伪装，谈了一场“废墟上的恋爱”。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "民国",
      "上海",
      "爱情",
      "张爱玲风"
    ]
  },
  {
    "title": "奇异生物变僵尸",
    "href": "detail/movie-0707.html",
    "cover": "107.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 恐怖",
    "category": "奇幻",
    "description": "一种能让动物变成僵尸的病毒在动物园爆发，长颈鹿用脖子砸碎玻璃，企鹅排着队咬人，而管理员只想保住下个月的工资。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "动物园",
      "僵尸",
      "荒诞",
      "搞笑"
    ]
  },
  {
    "title": "大国船梦",
    "href": "detail/movie-0708.html",
    "cover": "108.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情，历史，年代",
    "category": "都市",
    "description": "从晚清到现代，一个江南造船世家三代人的命运浮沉，浓缩了中国百年船梦的奋斗史。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "造船业",
      "工业救国",
      "三代人",
      "史诗"
    ]
  },
  {
    "title": "火腿，火腿",
    "href": "detail/movie-0709.html",
    "cover": "109.jpg",
    "year": "1992",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情 / 情色",
    "category": "悬疑",
    "description": "两个男人爱上同一个女人，而母亲们却与对方的儿子纠缠不清，一场荒诞的欲望多米诺。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "欲望",
      "阶层",
      "乡村",
      "三角恋"
    ]
  },
  {
    "title": "习近平总书记的新世界",
    "href": "detail/movie-0710.html",
    "cover": "110.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "纪录片剧集",
    "genre": "时政纪实",
    "category": "爱情",
    "description": "镜头跟随习近平总书记的国内考察与外交足迹，展现新时代中国如何为世界治理提供新方案。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "脱贫攻坚",
      "一带一路",
      "人类命运共同体",
      "领袖足迹"
    ]
  },
  {
    "title": "比赛日",
    "href": "detail/movie-0711.html",
    "cover": "111.jpg",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "genre": "运动, 剧情",
    "category": "青春",
    "description": "一场冠军赛前72小时，球队里每个人都在赌这场球的输赢。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "橄榄球",
      "更衣室",
      "赌博",
      "秘密"
    ]
  },
  {
    "title": "弥天之谎",
    "href": "detail/movie-0712.html",
    "cover": "112.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 心理",
    "category": "古装",
    "description": "顶级测谎师遇到一个声称杀了十二个人的凶手，测谎仪显示他说的全是真话，但证据链显示所有死者都还活着。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "测谎师",
      "连环杀手",
      "童年创伤",
      "记忆植入",
      "正邪博弈"
    ]
  },
  {
    "title": "小鱼莉莉",
    "href": "detail/movie-0713.html",
    "cover": "113.jpg",
    "year": "2003",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "category": "历史",
    "description": "小男孩在废弃泳池里养了一条会说话的小鱼，小鱼说：等我长大，就会变成泡沫。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "人鱼",
      "童年",
      "离别",
      "治愈"
    ]
  },
  {
    "title": "变形精钢",
    "href": "detail/movie-0714.html",
    "cover": "114.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻、喜剧、动作",
    "category": "奇幻",
    "description": "深圳华强北几个极客用二手零件拼出可变形机甲，却引来真正的军方追杀。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "山寨",
      "机甲",
      "工人",
      "荒诞"
    ]
  },
  {
    "title": "万镒黄金",
    "href": "detail/movie-0715.html",
    "cover": "115.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、警匪、冒险",
    "category": "爱情",
    "description": "两兄弟在金三角发现巨型金矿，却因此引来黑白两道追杀。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "走私",
      "金矿",
      "东南亚",
      "兄弟反目"
    ]
  },
  {
    "title": "北平无战事2014",
    "href": "detail/movie-0716.html",
    "cover": "116.jpg",
    "year": "2014",
    "region": "中国内地",
    "type": "电视剧",
    "genre": "谍战 / 历史",
    "category": "家庭",
    "description": "1948年北平，空军上校方孟敖表面是国民党飞行员，实际身份扑朔迷离，卷入币制改革漩涡。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "国共内战",
      "经济学",
      "多线叙事",
      "方孟敖"
    ]
  },
  {
    "title": "黑夜怪谈粤语",
    "href": "detail/movie-0717.html",
    "cover": "117.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "genre": "惊悚 / 都市传说 / 单元剧",
    "category": "喜剧",
    "description": "每晚十点半准时响起的电台热线，接线者都在同一分钟死去，轮到你了。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "港式恐怖",
      "都市怪谈",
      "粤语原声",
      "因果循环"
    ]
  },
  {
    "title": "喧哗独学",
    "href": "detail/movie-0718.html",
    "cover": "118.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "校园 / 喜剧 / 励志",
    "category": "剧情",
    "description": "全年级倒数的七名学生被编入“喧哗独学班”，老师给的任务竟然是：用打架的方式学习物理和数学。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "差生逆袭",
      "奇葩教学",
      "青春群像"
    ]
  },
  {
    "title": "打工吧！魔王大人第一季",
    "href": "detail/movie-0719.html",
    "cover": "119.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "动画, 喜剧, 奇幻",
    "category": "历史",
    "description": "魔王战败后穿越到现代东京，为了活命，只能在快餐店打工，目标是成为正式员工。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "异世界",
      "日常",
      "职场",
      "搞笑"
    ]
  },
  {
    "title": "骷髅岛",
    "href": "detail/movie-0720.html",
    "cover": "120.jpg",
    "year": "2025",
    "region": "美国",
    "type": "动画剧集",
    "genre": "动作 / 冒险 / 怪兽",
    "category": "奇幻",
    "description": "一支遇难的探险队被困在骷髅岛，他们必须在金刚和各种史前怪兽的领地中活下来。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "金刚",
      "骷髅岛",
      "怪兽",
      "生存",
      "原始生态"
    ]
  },
  {
    "title": "宽恕",
    "href": "detail/movie-0721.html",
    "cover": "121.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "都市",
    "description": "为争夺一套老宅，决裂十年的母女在法庭对峙，一份遗书却揭开了彼此最深的愧疚。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "救赎",
      "母女关系",
      "小镇叙事",
      "遗产风波"
    ]
  },
  {
    "title": "金剑雕翎",
    "href": "detail/movie-0722.html",
    "cover": "122.jpg",
    "year": "1986",
    "region": "中国台湾",
    "type": "电影",
    "genre": "武侠, 古装, 冒险",
    "category": "动作",
    "description": "传言“得金剑者得天下”，当九大门派为夺剑杀了他全家，少年才知，那把剑一直插在他的脊椎里。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "江湖",
      "寻宝",
      "复仇",
      "易容",
      "秘籍"
    ]
  },
  {
    "title": "可能的脸",
    "href": "detail/movie-0723.html",
    "cover": "123.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "category": "纪录",
    "description": "她在黑市整容后获得了崭新的脸，却也继承了这张脸原主人的全部仇人。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "整容黑市",
      "身份盗用",
      "女性复仇",
      "社会隐喻"
    ]
  },
  {
    "title": "女儿大人加个赖",
    "href": "detail/movie-0724.html",
    "cover": "124.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "家庭, 喜剧, 奇幻",
    "category": "喜剧",
    "description": "黑帮大哥被仇家暗算，醒来发现自己变成了初中女儿的同桌眼镜妹。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "魂穿",
      "父女和解",
      "校园喜剧",
      "古惑仔变奶爸"
    ]
  },
  {
    "title": "斗罗大陆：双神大战",
    "href": "detail/movie-0725.html",
    "cover": "125.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "动作 / 奇幻 / 冒险",
    "category": "奇幻",
    "description": "成神后的唐三与小舞对决已成神王的初恋情人千仞雪，双神之战撕裂星斗大森林。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "热血",
      "神位之战",
      "特效炸裂",
      "宿命对决",
      "武魂"
    ]
  },
  {
    "title": "金银死",
    "href": "detail/movie-0726.html",
    "cover": "126.jpg",
    "year": "2028",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪, 动作, 黑色幽默",
    "category": "剧情",
    "description": "两拨笨贼在同一家金店火并，却发现抢到的金条全是巧克力，真正的黄金藏在殡仪馆。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "抢金店",
      "黑吃黑",
      "笨贼",
      "反转"
    ]
  },
  {
    "title": "壮士出征",
    "href": "detail/movie-0727.html",
    "cover": "127.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 战争 / 喜剧",
    "category": "纪录",
    "description": "一群被判处死刑的囚犯被编入敢死队出征西域，却意外改变了帝国命运。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "边关",
      "敢死队",
      "搞笑",
      "家国情怀"
    ]
  },
  {
    "title": "社会的威胁",
    "href": "detail/movie-0728.html",
    "cover": "128.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 动作 / 政治",
    "category": "都市",
    "description": "被栽赃入狱的前检察官，出狱后化身法外制裁者，专杀“社会的威胁”。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "检察官",
      "黑警",
      "财阀",
      "复仇",
      "尺度大"
    ]
  },
  {
    "title": "鸡妈鸭仔",
    "href": "detail/movie-0729.html",
    "cover": "129.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影 (动画)",
    "genre": "动画 / 家庭 / 治愈",
    "category": "科幻",
    "description": "一只母鸡意外孵化了一只小鸭，从此带着“丑儿子”闯荡江湖。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "母爱",
      "跨物种",
      "催泪",
      "成长"
    ]
  },
  {
    "title": "微型底片间谍战",
    "href": "detail/movie-0730.html",
    "cover": "130.jpg",
    "year": "1978",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 谍战",
    "category": "古装",
    "description": "一枚藏于邮票下的微型底片，引发国际间谍组织与国安人员的生死博弈。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "冷战背景",
      "微型胶卷",
      "双面间谍",
      "火车追凶",
      "反特片"
    ]
  },
  {
    "title": "善良的心",
    "href": "detail/movie-0731.html",
    "cover": "131.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚",
    "category": "喜剧",
    "description": "世界上最善良的捐肾者，发现自己的一颗肾被移植给了十年前的杀人犯。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "器官贩卖",
      "反转",
      "黑色",
      "复仇"
    ]
  },
  {
    "title": "自我防卫",
    "href": "detail/movie-0732.html",
    "cover": "132.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 犯罪, 剧情",
    "category": "青春",
    "description": "独居女白领声称在家中反杀了一名蒙面歹徒，但随着调查深入，所有证据都指向这是一场完美策划的谋杀。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "正当防卫",
      "罗生门",
      "法律博弈",
      "高智商"
    ]
  },
  {
    "title": "魔偶奇谭2",
    "href": "detail/movie-0733.html",
    "cover": "133.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、奇幻",
    "category": "青春",
    "description": "人偶师死后，他的12具魔偶每夜复活，按“剧本”重演小镇百年前的灭门惨案。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "人偶",
      "邪术",
      "复活",
      "古宅",
      "血腥童话"
    ]
  },
  {
    "title": "小有福",
    "href": "detail/movie-0734.html",
    "cover": "134.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情 / 家庭",
    "category": "都市",
    "description": "被遗弃在庙门口的婴儿被全村人养大，十八年后，他的亲生父母开着豪车回来了。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "弃婴",
      "乡村",
      "温情",
      "成长",
      "寻亲"
    ]
  },
  {
    "title": "邪恶力量第十一季",
    "href": "detail/movie-0735.html",
    "cover": "135.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "奇幻，恐怖，剧情",
    "category": "动作",
    "description": "上帝失踪，他的妹妹“黑暗”从创世之前的虚无中醒来，温彻斯特兄弟这次要面对的，是一个比所有怪物都古老的存在。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "兄弟",
      "上帝",
      "黑暗",
      "重启"
    ]
  },
  {
    "title": "歌王卡罗素",
    "href": "detail/movie-0736.html",
    "cover": "136.jpg",
    "year": "2024",
    "region": "意大利, 美国",
    "type": "电影",
    "genre": "传记, 音乐",
    "category": "音乐",
    "description": "从那不勒斯贫民窟到纽约大都会，一个卖面条的男孩如何用歌声征服世界。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "歌剧",
      "天才",
      "传奇",
      "嗓音"
    ]
  },
  {
    "title": "仙王的日常生活第三季",
    "href": "detail/movie-0737.html",
    "cover": "137.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "搞笑 / 玄幻",
    "category": "动作",
    "description": "拥有毁天灭地之能的仙王王令，这一季只想做个安静的高中生，但各种妖魔鬼怪偏偏排着队来送人头。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "日常",
      "修仙",
      "校园",
      "反差萌",
      "国漫"
    ]
  },
  {
    "title": "ㄎㄧㄤ爆好麻吉",
    "href": "detail/movie-0738.html",
    "cover": "138.jpg",
    "year": "2023",
    "region": "台湾",
    "type": "电影",
    "genre": "喜剧 / 剧情 / 奇幻",
    "category": "家庭",
    "description": "两个废柴误食了新型毒品后，以为自己能看见“真相”，结果闹出了一连串救世主级别的笑话。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "吸毒",
      "致幻",
      "友情",
      "迷幻冒险",
      "戒毒"
    ]
  },
  {
    "title": "傲骨贤妻第三季",
    "href": "detail/movie-0739.html",
    "cover": "139.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "律政剧情",
    "category": "奇幻",
    "description": "艾丽西亚刚拿下高级合伙人，前夫就带着罪证录像带找上门：这次轮到她被勒索。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "女性成长",
      "律所斗争",
      "政治阴谋"
    ]
  },
  {
    "title": "生生相息",
    "href": "detail/movie-0740.html",
    "cover": "140.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "category": "喜剧",
    "description": "一个濒死的亿万富翁和一个垂死的流浪汉，在医院重症监护室里共享了彼此的最后一口气。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "轮回",
      "社会议题",
      "治愈",
      "印度底层"
    ]
  },
  {
    "title": "呆子2",
    "href": "detail/movie-0741.html",
    "cover": "141.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 动作",
    "category": "音乐",
    "description": "全世界最倒霉的清洁工被误认为是顶级特工，这次他被派去阻止一场全球密码泄露危机。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "憨豆式幽默",
      "特工",
      "误打误撞",
      "续集"
    ]
  },
  {
    "title": "大纲引之恋",
    "href": "detail/movie-0742.html",
    "cover": "142.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "科幻",
    "description": "金牌编剧因车祸失忆，只记得自己写过一个被毙掉的剧本大纲，而大纲里的男主正在医院照顾他。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "编剧",
      "失忆",
      "戏中戏",
      "治愈"
    ]
  },
  {
    "title": "美国犯罪的最后日子",
    "href": "detail/movie-0743.html",
    "cover": "143.jpg",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、犯罪、惊悚",
    "category": "青春",
    "description": "美国政府宣布即将发射“守法信号”覆盖全国，在那之前，所有罪犯都在疯狂进行最后一次犯罪狂欢。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "近未来",
      "信号覆盖",
      "末日犯罪",
      "政府阴谋"
    ]
  },
  {
    "title": "狼与香辛料第二季",
    "href": "detail/movie-0744.html",
    "cover": "144.jpg",
    "year": "2024",
    "region": "日本",
    "type": "TV动画",
    "genre": "奇幻、经济、冒险、恋爱",
    "category": "爱情",
    "description": "旅行商人罗伦斯与贤狼赫萝在金色麦田里开了一家贷款店，第一个客户竟是教会派来的，要借钱在镇上建一座“驱魔教堂”。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "中世纪",
      "商人",
      "贤狼赫萝",
      "行商",
      "货币战争"
    ]
  },
  {
    "title": "风流西班牙",
    "href": "detail/movie-0745.html",
    "cover": "145.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "喜剧, 爱情, 剧情",
    "category": "悬疑",
    "description": "马德里一场婚礼上，三个互不相识的男人突然发现，他们可能是同一个女人的丈夫。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "多线叙事",
      "浪漫喜剧",
      "西班牙风情",
      "身份错位"
    ]
  },
  {
    "title": "月光下，我记得",
    "href": "detail/movie-0746.html",
    "cover": "146.jpg",
    "year": "2024",
    "region": "台湾",
    "type": "电影",
    "genre": "家庭, 文艺, 历史",
    "category": "励志",
    "description": "母亲去世后，女儿在阁楼发现一箱情书，收件人竟是那个从不去扫墓的父亲。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "眷村记忆",
      "和解",
      "女性叙事"
    ]
  },
  {
    "title": "白雪公主杀人事件",
    "href": "detail/movie-0747.html",
    "cover": "147.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑， 犯罪， 剧情",
    "category": "古装",
    "description": "公司公认的“白雪公主”候选人惨遭杀害，而看似单纯的实习生口中，故事正朝着失控的方向急转。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "童话改编",
      "反转",
      "社会派"
    ]
  },
  {
    "title": "悲伤草原",
    "href": "detail/movie-0748.html",
    "cover": "148.jpg",
    "year": "2020",
    "region": "希腊 / 法国",
    "type": "电影",
    "genre": "剧情 / 历史 / 文艺",
    "category": "科幻",
    "description": "一个流亡家族三代人的命运，在一片荒芜的草原上反复上演，如同一支没有尽头的悲歌。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "安哲罗普洛斯风格",
      "难民",
      "草原",
      "史诗长镜头",
      "诗意悲剧"
    ]
  },
  {
    "title": "九丹",
    "href": "detail/movie-0749.html",
    "cover": "149.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 家庭 / 年代",
    "category": "悬疑",
    "description": "善良姐姐被迫替妹妹顶罪入狱，出狱后却发现妹妹已取代她的一切。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "女性成长",
      "姐妹情仇",
      "乡村",
      "励志"
    ]
  },
  {
    "title": "龙头之死",
    "href": "detail/movie-0750.html",
    "cover": "150.jpg",
    "year": "1962",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 历史",
    "category": "奇幻",
    "description": "一位西西里黑手党首领离奇死亡，随着调查深入，揭示了政治与犯罪之间不可告人的勾结。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "黑手党",
      "政治",
      "纪实",
      "西西里",
      "悬案"
    ]
  },
  {
    "title": "逆旅奇观",
    "href": "detail/movie-0751.html",
    "cover": "1.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情， 奇幻， 悬疑",
    "category": "爱情",
    "description": "一名旅人住进神秘酒店，每打开一扇门，都会进入不同年代的同一天。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "时间循环",
      "酒店奇遇",
      "存在主义"
    ]
  },
  {
    "title": "一馔千年雅膳季",
    "href": "detail/movie-0752.html",
    "cover": "2.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀 / 美食",
    "category": "奇幻",
    "description": "十二位顶级厨师根据古籍记载，用现代厨艺复原古代失传名菜，争夺“雅膳天师”称号。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "文化",
      "复原古菜",
      "竞赛",
      "历史"
    ]
  },
  {
    "title": "脂粉铁金刚",
    "href": "detail/movie-0753.html",
    "cover": "3.jpg",
    "year": "1990",
    "region": "香港",
    "type": "电影",
    "genre": "动作, 喜剧",
    "category": "悬疑",
    "description": "霸王花中的格斗冠军，被迫卧底进入高端美容院，调查名媛失踪案。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "女警",
      "卧底",
      "美容院",
      "乌龙",
      "女权"
    ]
  },
  {
    "title": "家有儿女新传",
    "href": "detail/movie-0754.html",
    "cover": "4.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 家庭",
    "category": "动作",
    "description": "当年的小雪刘星已当爸妈，他们要用新的方式对付更鬼马的下一代。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "重组家庭",
      "二胎",
      "代际冲突",
      "情景喜剧"
    ]
  },
  {
    "title": "海上惊魂",
    "href": "detail/movie-0755.html",
    "cover": "5.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "灾难、动作、悬疑",
    "category": "青春",
    "description": "一场百年一遇的台风困住公海上的奢华游轮，三百名乘客中，一个蒙面枪手开始按照船上乘客名单逐一杀戮。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "豪华游轮",
      "暴风困局",
      "连环凶杀",
      "密闭空间"
    ]
  },
  {
    "title": "这名男子，捡到了人鱼。",
    "href": "detail/movie-0756.html",
    "cover": "6.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集 (11集)",
    "genre": "奇幻, 治愈",
    "category": "历史",
    "description": "在东京独居的社畜，某天在公寓楼下的垃圾站，捡到了一条被装在塑料袋里的人鱼。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "人鱼",
      "都市传说",
      "同居",
      "温柔",
      "短篇"
    ]
  },
  {
    "title": "金江1936",
    "href": "detail/movie-0757.html",
    "cover": "7.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争 / 历史 / 剧情",
    "category": "科幻",
    "description": "1936年金江畔，一个国民党逃兵和一个红军小战士，在暴雨中护送一面残破的军旗渡江。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "红军长征",
      "渡江战役",
      "信仰抉择"
    ]
  },
  {
    "title": "前男友行不行",
    "href": "detail/movie-0758.html",
    "cover": "8.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情, 喜剧",
    "category": "剧情",
    "description": "婚礼策划师女主，接连服务的三位新娘，未婚夫都是她的同一位毒舌前男友。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "前任",
      "职场",
      "破冰",
      "搞笑",
      "都市"
    ]
  },
  {
    "title": "危险孵化",
    "href": "detail/movie-0759.html",
    "cover": "9.jpg",
    "year": "2022",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "惊悚，科幻",
    "category": "爱情",
    "description": "一个孕妇被困在与世隔绝的岛屿，岛上孵化的巨型爬虫，只攻击未出生的婴儿。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "怪兽",
      "孤岛",
      "孕妇",
      "生存"
    ]
  },
  {
    "title": "和田玉传奇",
    "href": "detail/movie-0760.html",
    "cover": "10.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "冒险, 悬疑",
    "category": "历史",
    "description": "一块失踪千年的羊脂玉牌，牵扯出丝绸之路上的三段平行时空的夺宝故事。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "盗墓",
      "新疆",
      "宝藏"
    ]
  },
  {
    "title": "第一课",
    "href": "detail/movie-0761.html",
    "cover": "11.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 运动 / 青春",
    "category": "都市",
    "description": "顶级电竞选手因伤退役，回到家乡中学组建电竞社，却被家长和教导主任集体针对。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "电竞",
      "师生",
      "成长",
      "现实题材",
      "逆袭"
    ]
  },
  {
    "title": "走尸之谜",
    "href": "detail/movie-0762.html",
    "cover": "12.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 悬疑 / 犯罪",
    "category": "奇幻",
    "description": "午夜停尸房，监控拍到一具尸体自己坐了起来，法医解剖后竟发现尸体体内有另一具胎儿尸体。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "僵尸",
      "刑侦",
      "法医",
      "港味"
    ]
  },
  {
    "title": "了不起的老爸",
    "href": "detail/movie-0763.html",
    "cover": "13.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情、家庭、运动",
    "category": "科幻",
    "description": "患有眼疾的儿子想跑马拉松，曾是颓废出租车司机的老爸从反对到陪跑，最后甚至闭眼冲过终点线。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "父子关系",
      "马拉松",
      "盲人跑者",
      "陪伴"
    ]
  },
  {
    "title": "地窖怪客",
    "href": "detail/movie-0764.html",
    "cover": "14.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖， 悬疑， 心理",
    "category": "纪录",
    "description": "新房装修，工人在卧室地板下挖出一个地窖，里面住着一个浑身长满霉斑的老人。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "J-horror",
      "地下室",
      "都市传说",
      "细思极恐"
    ]
  },
  {
    "title": "少年泰坦出击第六季",
    "href": "detail/movie-0765.html",
    "cover": "15.jpg",
    "year": "2025",
    "region": "美国",
    "type": "动画剧集",
    "genre": "喜剧 / 动作 / 超级英雄",
    "category": "动作",
    "description": "罗宾、野兽小子、钢骨、星火和渡鸦继续用最离谱的方式“拯救”城市（以及吃披萨）。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "少年泰坦",
      "恶搞",
      "超英",
      "爆笑",
      "打破第四面墙"
    ]
  },
  {
    "title": "一梦如初2025",
    "href": "detail/movie-0766.html",
    "cover": "16.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻 / 爱情 / 悬疑",
    "category": "科幻",
    "description": "2045年，一家公司能删除特定记忆，一位老人选择删掉60年前的初恋，却发现那是他唯一真实的人生。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "记忆删除",
      "AI",
      "失忆",
      "初恋"
    ]
  },
  {
    "title": "励志大联盟",
    "href": "detail/movie-0767.html",
    "cover": "17.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 运动",
    "category": "励志",
    "description": "美国职棒大联盟最烂的球队，招募了一群来自印度的板球农民，企图用“魔幻打法”夺冠。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "棒球",
      "菜鸟",
      "逆袭",
      "沙雕",
      "团队"
    ]
  },
  {
    "title": "给魔鬼一个女儿",
    "href": "detail/movie-0768.html",
    "cover": "18.jpg",
    "year": "1976",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖 / 神秘",
    "category": "音乐",
    "description": "一位神父试图拯救被邪教选为“魔鬼新娘”的少女，却发现真正的魔鬼藏在自己的信仰里。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "邪教",
      "少女",
      "诅咒",
      "哥特"
    ]
  },
  {
    "title": "太阳，不远",
    "href": "detail/movie-0769.html",
    "cover": "19.jpg",
    "year": "2000",
    "region": "中国",
    "type": "电影",
    "genre": "青春 / 同性 / 文艺",
    "category": "青春",
    "description": "两个患有罕见病的少年决定骑自行车去拉萨看一次完整的日出，因为他们可能活不到第二天。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "拉萨骑行",
      "绝症少年",
      "公路电影"
    ]
  },
  {
    "title": "巴黎来的女孩",
    "href": "detail/movie-0770.html",
    "cover": "20.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "category": "动作",
    "description": "为了逃离奢华的时尚圈，巴黎名媛躲进了中国西南的深山，却遇到了一位不会说法语的乡村教师。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "跨文化",
      "成长",
      "时尚",
      "治愈"
    ]
  },
  {
    "title": "驯鹿总动员",
    "href": "detail/movie-0771.html",
    "cover": "21.jpg",
    "year": "2024",
    "region": "芬兰",
    "type": "电影",
    "genre": "动画 / 家庭 / 冒险",
    "category": "爱情",
    "description": "圣诞老人的驯鹿红鼻子鲁道夫退休了，新驯鹿小队全是“不合格”的残疾驯鹿。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "圣诞节",
      "驯鹿",
      "拯救行动"
    ]
  },
  {
    "title": "惩腐女人",
    "href": "detail/movie-0772.html",
    "cover": "22.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "反腐刑侦",
    "category": "家庭",
    "description": "铁面女纪委书记空降腐败重灾区，在男性的权力游戏中杀出一条血路。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "女强",
      "政治",
      "悬疑",
      "黑恶"
    ]
  },
  {
    "title": "史瑞克的万圣游戏",
    "href": "detail/movie-0773.html",
    "cover": "23.jpg",
    "year": "2026",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧, 奇幻",
    "category": "家庭",
    "description": "史瑞克被卷入万圣节魔咒，每敲一扇门就会变身成一位经典恐怖片反派。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "恶搞童话",
      "万圣节",
      "变身诅咒",
      "吐槽向"
    ]
  },
  {
    "title": "维塔利娜·瓦雷拉",
    "href": "detail/movie-0774.html",
    "cover": "24.jpg",
    "year": "2019",
    "region": "葡萄牙",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "古装",
    "description": "一个非洲女人来到里斯本寻找丈夫，却发现丈夫已死，而有人正用丈夫的名字活着。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "身份冒用",
      "非洲移民",
      "孤独",
      "低成本"
    ]
  },
  {
    "title": "真情来电",
    "href": "detail/movie-0775.html",
    "cover": "25.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 喜剧, 奇幻",
    "category": "纪录",
    "description": "一名电信诈骗新手打电话行骗，却每次都打到同一个落魄程序员的手机上，两人竟因此相爱了。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "电信诈骗",
      "错位",
      "缘分",
      "搞笑"
    ]
  },
  {
    "title": "在格鲁吉亚寻到爱",
    "href": "detail/movie-0776.html",
    "cover": "26.jpg",
    "year": "2022",
    "region": "美国、格鲁吉亚",
    "type": "电影",
    "genre": "爱情、剧情、风光",
    "category": "励志",
    "description": "一位失意的纽约建筑师在第比利斯的老城墙下，用一杯琥珀葡萄酒唤醒了对生活的热情。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "异国风情",
      "葡萄酒之旅",
      "中年治愈",
      "文化碰撞"
    ]
  },
  {
    "title": "柔肤之秘法",
    "href": "detail/movie-0777.html",
    "cover": "27.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 剧情",
    "category": "音乐",
    "description": "一款能让人肌肤重获新生的神秘面霜，背后竟是用活人眼泪与恐惧炼制的邪教秘法。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "邪教",
      "美容",
      "心理控制",
      "反转"
    ]
  },
  {
    "title": "人生七年1",
    "href": "detail/movie-0778.html",
    "cover": "28.jpg",
    "year": "1992",
    "region": "日本",
    "type": "纪录片",
    "genre": "纪录, 社会",
    "category": "爱情",
    "description": "1992年，节目组选取了7名7岁的日本孩子，记录他们眼中泡沫破裂后的童年梦想。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "成长追踪",
      "阶层固化",
      "平成时代"
    ]
  },
  {
    "title": "指环王2：双塔奇兵国语",
    "href": "detail/movie-0779.html",
    "cover": "29.jpg",
    "year": "2002",
    "region": "美国 / 新西兰",
    "type": "电影",
    "genre": "奇幻、冒险、史诗",
    "category": "科幻",
    "description": "国语配音版：弗罗多继续前往魔多，阿拉贡、精灵与洛汗国在圣盔谷背水一战。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "经典重配",
      "国语",
      "史诗大战",
      "魔戒"
    ]
  },
  {
    "title": "梅花三弄之水云间",
    "href": "detail/movie-0780.html",
    "cover": "30.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "爱情 / 古装",
    "category": "喜剧",
    "description": "上世纪三十年代的杭州，画师梅若鸿与富家女杜芊芊相爱，却发现自己无法摆脱已故初恋的灵魂纠缠。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "民国",
      "画家",
      "三角恋",
      "唯美"
    ]
  },
  {
    "title": "欢迎来到切彭代尔斯",
    "href": "detail/movie-0781.html",
    "cover": "31.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "传记 / 剧情",
    "category": "奇幻",
    "description": "一个穷困潦倒的印度裔移民，如何靠一群肌肉猛男和荒诞的舞台秀，在80年代纽约打造出男性脱衣舞帝国。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "男性脱衣舞团",
      "真实事件",
      "创业",
      "80年代",
      "纸醉金迷"
    ]
  },
  {
    "title": "速度超越激情",
    "href": "detail/movie-0782.html",
    "cover": "32.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作，喜剧，犯罪",
    "category": "家庭",
    "description": "为了拯救家族修车厂，一群“车神”决定去偷一辆能让车速超越情感的神奇赛车。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "赛车",
      "恶搞",
      "友情",
      "乌龙"
    ]
  },
  {
    "title": "朋友请听好第二季",
    "href": "detail/movie-0783.html",
    "cover": "33.jpg",
    "year": "2024",
    "region": "中国",
    "type": "综艺",
    "genre": "真人秀/治愈",
    "category": "喜剧",
    "description": "全新广播小站开张，三位主播用声音聆听人间故事，治愈都市孤独的灵魂。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "电台",
      "慢生活",
      "情感",
      "温暖"
    ]
  },
  {
    "title": "玩具之父盖比特",
    "href": "detail/movie-0784.html",
    "cover": "34.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "genre": "奇幻、剧情、传记",
    "category": "古装",
    "description": "孤僻的老木匠在妻子离世后，决心用毕生技艺打造一个能陪他说话的木偶女孩。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "木偶",
      "父爱",
      "手工匠人",
      "童话新编",
      "治愈"
    ]
  },
  {
    "title": "疯狂梦幻城",
    "href": "detail/movie-0785.html",
    "cover": "35.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 奇幻 / 冒险",
    "category": "古装",
    "description": "全球最大 VR 主题乐园系统出错，所有 NPC 突然觉醒，并拒绝让游客离开。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "主题乐园",
      "程序漏洞",
      "NPC 觉醒",
      "游客被困",
      "过山车决战"
    ]
  },
  {
    "title": "茄子 安达鲁西亚之夏",
    "href": "detail/movie-0786.html",
    "cover": "36.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "genre": "剧情 / 运动",
    "category": "历史",
    "description": "一名日本职业自行车手在西班牙安达鲁西亚的烈日下，用一颗茄子唤醒了整个车队的求胜欲望。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "自行车",
      "西班牙",
      "夏日",
      "职业精神"
    ]
  },
  {
    "title": "猫和老鼠：飙风天王",
    "href": "detail/movie-0787.html",
    "cover": "37.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动画 / 喜剧 / 动作",
    "category": "科幻",
    "description": "为了赢得一辆超级赛车，汤姆和杰瑞从客厅打到了全国公路赛的赛道上。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "公路追逐",
      "经典重启",
      "无厘头"
    ]
  },
  {
    "title": "绝代艳姬",
    "href": "detail/movie-0788.html",
    "cover": "38.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "剧集",
    "genre": "古装，宫斗",
    "category": "都市",
    "description": "一位绝色宫女被献入宫中，从棋子变成棋手，最终却亲手葬送了唯一爱她的人。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "宫廷",
      "女性",
      "权谋",
      "悲剧",
      "传奇"
    ]
  },
  {
    "title": "小戏骨：黄飞鸿",
    "href": "detail/movie-0789.html",
    "cover": "39.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动作 / 古装 / 儿童",
    "category": "家庭",
    "description": "十岁的黄飞鸿初次接手“宝芝林”，用稚嫩的拳脚和超龄的智慧化解了一场关于假药的江湖阴谋。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "童星",
      "经典翻拍",
      "功夫",
      "民族大义",
      "文化传承"
    ]
  },
  {
    "title": "暴政时期",
    "href": "detail/movie-0790.html",
    "cover": "40.jpg",
    "year": "2018",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情，历史，惊悚",
    "category": "悬疑",
    "description": "佛朗哥独裁统治末期，一位秘密警察在镇压反抗者时，意外发现自己的亲生儿子正是通缉榜上的头号人物。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "独裁",
      "压抑",
      "反抗",
      "人性"
    ]
  },
  {
    "title": "世纪大毁灭",
    "href": "detail/movie-0791.html",
    "cover": "41.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 灾难",
    "category": "科幻",
    "description": "一颗死星撞向地球，唯一能阻止它的方法，是在它表面引爆地球所有的核弹头。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "全球灾难",
      "特效大片",
      "末日",
      "军武",
      "牺牲"
    ]
  },
  {
    "title": "我仍在此2024",
    "href": "detail/movie-0792.html",
    "cover": "42.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "悬疑",
    "category": "古装",
    "description": "车祸失忆的女子每天醒来都会收到一条来自“未来自己”的警告短信。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "心理惊悚",
      "时空循环",
      "独角戏",
      "自我救赎"
    ]
  },
  {
    "title": "冲绳小芙蓉",
    "href": "detail/movie-0793.html",
    "cover": "43.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 生活",
    "category": "励志",
    "description": "一家破旧民宿的老板娘，用苦瓜汁和冷笑话治愈每一个破碎的灵魂。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "冲绳",
      "民宿",
      "疗愈",
      "战后",
      "女性"
    ]
  },
  {
    "title": "朝九晚五俏佳人粤语",
    "href": "detail/movie-0794.html",
    "cover": "44.jpg",
    "year": "1986",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "喜剧, 爱情",
    "category": "爱情",
    "description": "三个性格迥异的女秘书在同一家公司上班，联手应对变态上司和狗血爱情。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "职场女性",
      "粤语经典",
      "办公室恋情",
      "摩登",
      "港风"
    ]
  },
  {
    "title": "大卫·科波菲尔的个人史",
    "href": "detail/movie-0795.html",
    "cover": "45.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "传记",
    "category": "都市",
    "description": "大卫·科波菲尔对着镜头吐槽自己的一生，却发现所有人都在演戏。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "文学改编",
      "打破第四面墙",
      "实验"
    ]
  },
  {
    "title": "金海岸",
    "href": "detail/movie-0796.html",
    "cover": "46.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "历史",
    "description": "为了唤醒失智父亲，儿子带他回到五十年前那个根本不存在于地图上的“金海岸”。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "海岸",
      "父子",
      "失智",
      "和解"
    ]
  },
  {
    "title": "不一样的美男2",
    "href": "detail/movie-0797.html",
    "cover": "47.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "genre": "喜剧, 青春",
    "category": "动作",
    "description": "一所男校的“校草大赛”变装成“美后大赛”，所有人都在重新定义“美”和“男”。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "选美",
      "性别多元",
      "校园"
    ]
  },
  {
    "title": "掌心难逃",
    "href": "detail/movie-0798.html",
    "cover": "48.jpg",
    "year": "2022",
    "region": "中国内地",
    "type": "电视剧",
    "genre": "悬疑/犯罪",
    "category": "动作",
    "description": "长期被家暴的妻子终于失手杀夫，当她以为解脱时，一个神秘人发来短信：“我看到了一切。”",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "家暴",
      "反杀",
      "心理战",
      "女性"
    ]
  },
  {
    "title": "玉女艳史",
    "href": "detail/movie-0799.html",
    "cover": "49.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "情色, 剧情, 古装",
    "category": "奇幻",
    "description": "明末清初，一位被送入青楼的名门闺秀，用自己的身体与智慧诛杀了满门仇敌。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "风月",
      "复仇",
      "女权",
      "古典"
    ]
  },
  {
    "title": "倾国之恋",
    "href": "detail/movie-0800.html",
    "cover": "50.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情、古装、权谋",
    "category": "剧情",
    "description": "敌国公主被送给昏君和亲，她却一步步让这个王朝从内部崩塌。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "宫斗",
      "虐恋",
      "江山美人",
      "权谋"
    ]
  },
  {
    "title": "淑女飘飘拳",
    "href": "detail/movie-0801.html",
    "cover": "51.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "青春",
    "description": "为了争夺校园武道社的存亡，软萌的国画系女学生被迫展示自己深藏不露的太极拳功力。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "太极拳",
      "反差萌",
      "校园"
    ]
  },
  {
    "title": "花花公子吉米",
    "href": "detail/movie-0802.html",
    "cover": "52.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、爱情、剧情",
    "category": "历史",
    "description": "顶级花花公子因遗产被祖母诅咒：必须得到三个被他伤害过的女人的真心原谅。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "渣男",
      "恐婚",
      "成长",
      "真心"
    ]
  },
  {
    "title": "沉默的世界",
    "href": "detail/movie-0803.html",
    "cover": "53.jpg",
    "year": "2026",
    "region": "法国/比利时",
    "type": "电影",
    "genre": "科幻剧情",
    "category": "励志",
    "description": "一场全球电磁灾难后，所有人同时失去听力，世界在绝对的寂静中陷入另一种疯狂。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "失聪设定",
      "社会寓言",
      "感官剥夺",
      "独白"
    ]
  },
  {
    "title": "英雄威尔",
    "href": "detail/movie-0804.html",
    "cover": "54.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻冒险",
    "category": "动作",
    "description": "传说中拔出石中剑的英雄是英俊的威廉，但史实真相是：那个叫威尔的矮胖子，只是力气大、运气好且跑得快。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "废柴英雄",
      "苏格兰传说",
      "反转英雄",
      "黑马"
    ]
  },
  {
    "title": "大国船梦",
    "href": "detail/movie-0805.html",
    "cover": "55.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情，历史，工业",
    "category": "喜剧",
    "description": "一家江南造船厂，三代工程师，六十年梦碎与梦起，他们造的船能下海，人却总在岸上飘。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "造船业",
      "三代人",
      "国企改革",
      "技术突围",
      "时代变迁"
    ]
  },
  {
    "title": "奇怪的角色",
    "href": "detail/movie-0806.html",
    "cover": "56.jpg",
    "year": "2024",
    "region": "华语",
    "type": "电视剧",
    "genre": "奇幻 / 悬疑 / 都市",
    "category": "家庭",
    "description": "社畜每天醒来都会随机变成别人的身份，直到她发现所有角色都围绕一个失踪案。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "身份互换",
      "系统",
      "职场",
      "灵魂伴侣"
    ]
  },
  {
    "title": "猎捕行动第一季",
    "href": "detail/movie-0807.html",
    "cover": "57.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "动作 / 悬疑 / 惊悚",
    "category": "历史",
    "description": "退役特工被重新召回，组建精英小队，追捕一名逍遥法外十年的隐形黑客。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "特工",
      "跨国追捕",
      "高智商犯罪"
    ]
  },
  {
    "title": "开心汉堡店",
    "href": "detail/movie-0808.html",
    "cover": "58.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "喜剧/情景",
    "category": "历史",
    "description": "一家24小时营业的深夜汉堡店，每位来吃“开心套餐”的食客，都会自动讲出藏在心底的故事。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "市井烟火",
      "单元剧",
      "治愈"
    ]
  },
  {
    "title": "恋恋真情",
    "href": "detail/movie-0809.html",
    "cover": "59.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情、青春、成长",
    "category": "爱情",
    "description": "从高中教室到职场会议室，一对彼此暗恋十年的男女，各自经历了三段失败恋情后才敢说出真心话。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "双向暗恋",
      "时间跨度",
      "青梅竹马",
      "治愈系"
    ]
  },
  {
    "title": "奶酪",
    "href": "detail/movie-0810.html",
    "cover": "60.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧、剧情",
    "category": "励志",
    "description": "法国米其林三星主厨被贬到一个小镇奶酪店打工，却发现这里的臭奶酪藏着改变美食界的秘密。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "美食",
      "小镇",
      "阶层"
    ]
  },
  {
    "title": "10重拾",
    "href": "detail/movie-0811.html",
    "cover": "61.jpg",
    "year": "2015",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "悬疑",
    "description": "因车祸失忆十年的母亲突然醒来，记忆停留在儿子6岁时，而面前的儿子已经是个16岁的叛逆少年。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "亲情",
      "失忆",
      "救赎"
    ]
  },
  {
    "title": "乌云背后的幸福线",
    "href": "detail/movie-0812.html",
    "cover": "62.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧",
    "category": "都市",
    "description": "两个在精神病院认识的“疯子”决定组乐队参加选秀，条件是——不能吃任何一片药。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "喜剧",
      "爱情",
      "治愈",
      "精神病",
      "音乐"
    ]
  },
  {
    "title": "过夜",
    "href": "detail/movie-0813.html",
    "cover": "63.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "惊悚, 悬疑",
    "category": "动作",
    "description": "为了高额奖金，三人在一栋著名的凶宅过夜直播，却发现屋里的鬼似乎不止一个。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "密室",
      "直播",
      "凶宅",
      "反转",
      "国产"
    ]
  },
  {
    "title": "甩皮鬼",
    "href": "detail/movie-0814.html",
    "cover": "64.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 喜剧",
    "category": "喜剧",
    "description": "为求永生，富婆移植了“完美皮肤”，但每到午夜，这身皮就会开始寻找原主人。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "港式惊悚",
      "整容",
      "因果报应"
    ]
  },
  {
    "title": "魔界屋3",
    "href": "detail/movie-0815.html",
    "cover": "65.jpg",
    "year": "2007",
    "region": "日本",
    "type": "剧集",
    "genre": "恐怖, 奇幻, 悬疑",
    "category": "古装",
    "description": "一所不断变换房型的凶宅旅馆，每位入住者都会收到“前房客”留下的“通关攻略”。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "单元剧",
      "都市传说",
      "猎奇"
    ]
  },
  {
    "title": "误发弹",
    "href": "detail/movie-0816.html",
    "cover": "66.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 悬疑",
    "category": "青春",
    "description": "警队神枪手在一次行动中误杀一名女孩，一年后，女孩的母亲竟成了他的搭档。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "警匪",
      "误伤",
      "心理创伤",
      "多重反转"
    ]
  },
  {
    "title": "适合分手的天气",
    "href": "detail/movie-0817.html",
    "cover": "67.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情，文艺",
    "category": "励志",
    "description": "每年雨季她都会和前男友住进同一间民宿，约定“如果这场雨不停，我们就彻底分手”。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "雨季",
      "告别",
      "旧爱重逢",
      "情感拉扯"
    ]
  },
  {
    "title": "幸福快递",
    "href": "detail/movie-0818.html",
    "cover": "68.jpg",
    "year": "2014",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "category": "喜剧",
    "description": "身患渐冻症的女孩当上代驾司机，送完最后一单时，乘客问她：你想去哪里，我送你。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "绝症",
      "代驾",
      "温暖治愈"
    ]
  },
  {
    "title": "我想要的圣诞礼物",
    "href": "detail/movie-0819.html",
    "cover": "69.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "家庭/奇幻",
    "category": "剧情",
    "description": "一个八岁男孩写信给圣诞老人，希望去世的妈妈能回来陪他一天，第二天早上，妈妈真的出现在了家门口。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "圣诞电影",
      "温情",
      "愿望成真",
      "亲情"
    ]
  },
  {
    "title": "亲兄热弟",
    "href": "detail/movie-0820.html",
    "cover": "70.jpg",
    "year": "2007",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭，剧情，都市",
    "category": "喜剧",
    "description": "一个出租车司机、一个摆摊小贩、一个工地搬砖工和一个公司白领，四个人是亲兄弟，却在同一个城市里过着天上地下的生活。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "兄弟",
      "草根",
      "生活"
    ]
  },
  {
    "title": "诱狼",
    "href": "detail/movie-0821.html",
    "cover": "71.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争/动作/谍战",
    "category": "剧情",
    "description": "东北抗联女狙击手只身诱杀日军“狼王”狙击小队，用自己当诱饵，弹无虚发。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "抗日战争",
      "狙击手",
      "诱饵",
      "雪原",
      "智斗"
    ]
  },
  {
    "title": "亲爱的，我不能没有手机！",
    "href": "detail/movie-0822.html",
    "cover": "72.jpg",
    "year": "2023",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "喜剧 / 奇幻",
    "category": "励志",
    "description": "一个手机重度成瘾者发现，自己的手机变成了一个粘人且善妒的男朋友，开始疯狂破坏她的三次元恋爱。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "手机拟人化",
      "数字依赖",
      "黑色幽默",
      "脑洞大开"
    ]
  },
  {
    "title": "执爱",
    "href": "detail/movie-0823.html",
    "cover": "73.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 悬疑",
    "category": "励志",
    "description": "女主每隔三年就会忘记自己的爱人，而爱人每隔三年就会重新追求她，已经持续了十五年。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "记忆删除",
      "执念",
      "心理惊悚"
    ]
  },
  {
    "title": "魔术师与巨人",
    "href": "detail/movie-0824.html",
    "cover": "74.jpg",
    "year": "2025",
    "region": "法国 / 加拿大",
    "type": "电影",
    "genre": "动画 / 奇幻",
    "category": "喜剧",
    "description": "落魄魔术师的最后一个戏法是把月亮变缺一角，没想到住在月亮背面的巨人因此摔到了地球上。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "手绘",
      "成长",
      "寓言",
      "视觉盛宴"
    ]
  },
  {
    "title": "美洲豹女儿",
    "href": "detail/movie-0825.html",
    "cover": "75.jpg",
    "year": "2026",
    "region": "墨西哥 / 美国",
    "type": "电影",
    "genre": "奇幻 / 冒险 / 剧情",
    "category": "剧情",
    "description": "一个在城市长大的墨西哥裔女孩回到雨林继承祖母的遗产，却发现自己能在月圆之夜变身成美洲豹，并且是阿兹特克神话中的守护者。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "阿兹特克",
      "身份认同",
      "变身",
      "女性力量"
    ]
  },
  {
    "title": "重返1993第三季",
    "href": "detail/movie-0826.html",
    "cover": "76.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "TV Series",
    "genre": "剧情/奇幻",
    "category": "奇幻",
    "description": "在前两季扳倒所有对手后，主角本以为可以安心当首富，却发现1993年的“自己”也穿越到了2024年，要夺回属于他的人生。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "穿越",
      "商战",
      "东北往事",
      "怀旧"
    ]
  },
  {
    "title": "真实的谎言2023",
    "href": "detail/movie-0827.html",
    "cover": "77.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电视剧",
    "genre": "动作 / 喜剧",
    "category": "喜剧",
    "description": "重启版《真实的谎言》，一对夫妻都是顶级特工，但彼此不知道对方的真实身份，连结婚都是任务。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "特工",
      "夫妻档",
      "重启",
      "高科技"
    ]
  },
  {
    "title": "你因你是你",
    "href": "detail/movie-0828.html",
    "cover": "78.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 剧情 / 文艺",
    "category": "悬疑",
    "description": "一个自卑的便利店店员和一个自负的畅销书作家意外互换身体，却发现了彼此最深的伤疤。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "身份互换",
      "自我认同",
      "港风",
      "灵魂伴侣"
    ]
  },
  {
    "title": "炸掉银行经理",
    "href": "detail/movie-0829.html",
    "cover": "79.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "动作犯罪",
    "category": "动作",
    "description": "老实巴交的银行小经理被陷害入狱五年，出狱后他用“炸银行”的方式，把当年害他的人都引到了同一间金库里。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "复仇爽片",
      "黑色幽默",
      "金融腐败"
    ]
  },
  {
    "title": "大地密使",
    "href": "detail/movie-0830.html",
    "cover": "80.jpg",
    "year": "1988",
    "region": "中国香港/英国",
    "type": "电影",
    "genre": "动作, 奇幻, 冒险",
    "category": "喜剧",
    "description": "拥有与大地沟通能力的少年，为阻止邪恶组织发掘上古魔器而战。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "气功",
      "寻宝",
      "港式奇幻",
      "特异功能"
    ]
  },
  {
    "title": "兄弟2017",
    "href": "detail/movie-0831.html",
    "cover": "81.jpg",
    "year": "2017",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 动作 / 犯罪",
    "category": "悬疑",
    "description": "分属黑白两道的亲兄弟，在父亲葬礼后，被迫在七天内做一个了断。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "兄弟情",
      "警察卧底",
      "火锅",
      "宿命",
      "港风"
    ]
  },
  {
    "title": "所有明亮的地方",
    "href": "detail/movie-0832.html",
    "cover": "82.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "剧情",
    "category": "励志",
    "description": "一个总想死的女孩，遇到了一个总想“找到所有明亮地方”的男孩，但他们只交换了黑暗。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "青春",
      "心理",
      "爱情",
      "抑郁",
      "救赎"
    ]
  },
  {
    "title": "明末遗恨",
    "href": "detail/movie-0833.html",
    "cover": "83.jpg",
    "year": "1992",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史, 古装",
    "category": "古装",
    "description": "1644年，崇祯皇帝自缢前三天，三个不同立场的男人各自做出了最后的抉择。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "明朝",
      "忠臣",
      "崇祯",
      "悲剧"
    ]
  },
  {
    "title": "大火将至",
    "href": "detail/movie-0834.html",
    "cover": "84.jpg",
    "year": "2019",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情 / 惊悚 / 灾难",
    "category": "青春",
    "description": "西班牙加利西亚，一位退休消防员与失和儿子困于山林，外面山火正以每小时三公里的速度逼近他们沉默的家。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "山火",
      "父子关系",
      "气候变化",
      "农村空心化",
      "缓慢燃烧"
    ]
  },
  {
    "title": "布利特县",
    "href": "detail/movie-0835.html",
    "cover": "85.jpg",
    "year": "2018",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑, 西部, 恐怖",
    "category": "科幻",
    "description": "德州布利特县的警长接手少女失踪案，却发现全镇居民都记得这个“不存在”的女孩。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "小镇",
      "失踪案",
      "警长",
      "超自然"
    ]
  },
  {
    "title": "森林：随处可见",
    "href": "detail/movie-0836.html",
    "cover": "86.jpg",
    "year": "2025",
    "region": "波兰 / 德国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "category": "剧情",
    "description": "四名环保活动家在原始森林离奇失踪，25年后，在同一片森林里发现了一具连接着树根的干尸。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "生态恐怖",
      "邪教",
      "双线叙事",
      "北欧 noir"
    ]
  },
  {
    "title": "我们的星球：镜头背后",
    "href": "detail/movie-0837.html",
    "cover": "87.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "纪录片",
    "category": "历史",
    "description": "跟随摄制组深入极地、雨林和沙漠，揭秘《我们的星球》中最惊险、最感人、最离奇的拍摄瞬间。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "幕后",
      "自然",
      "环保",
      "拍摄纪实",
      "动物"
    ]
  },
  {
    "title": "让爱飞起来",
    "href": "detail/movie-0838.html",
    "cover": "88.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "音乐",
    "description": "一对办理离婚的夫妻被困在出故障的热气球上，为了活命，他们必须像热恋时那样默契配合。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "低空飞行",
      "离婚冷静期",
      "热气球",
      "中年危机",
      "和解"
    ]
  },
  {
    "title": "烽火赤焰万里情",
    "href": "detail/movie-0839.html",
    "cover": "89.jpg",
    "year": "2027",
    "region": "美国, 英国",
    "type": "电影",
    "genre": "爱情, 战争, 历史",
    "category": "剧情",
    "description": "二战期间，美国战地记者与英国皇家空军飞行员在伦敦大轰炸中相爱，却因一次任务被分隔万里。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "二战",
      "记者",
      "飞行员",
      "跨国恋",
      "战火"
    ]
  },
  {
    "title": "繁星四月",
    "href": "detail/movie-0840.html",
    "cover": "90.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情，悬疑，都市",
    "category": "奇幻",
    "description": "十八线小演员意外成了当红女星的替身，当她终于熬出头拿影后时，正主突然回归，并要求她演好“四月”这个角色，否则就让她身败名裂。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "互换身份",
      "娱乐圈",
      "失忆",
      "替身情人"
    ]
  },
  {
    "title": "部长做了一个梦",
    "href": "detail/movie-0841.html",
    "cover": "91.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情、奇幻、政治",
    "category": "剧情",
    "description": "铁腕的厚生劳动大臣每晚都会做一个相同的噩梦：他年轻时亲手掩盖的一起医疗事故中的死者，不断在梦中向他索命。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "梦境",
      "官僚",
      "忏悔",
      "寓言",
      "超现实"
    ]
  },
  {
    "title": "再见，我的王后",
    "href": "detail/movie-0842.html",
    "cover": "92.jpg",
    "year": "2012",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 历史 / 同性",
    "category": "音乐",
    "description": "1789年7月14日，玛丽皇后身边的侍女，在最后三天里看到了爱情与崩塌。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "法国大革命",
      "凡尔赛宫",
      "宫女视角",
      "断头台"
    ]
  },
  {
    "title": "降妖伏魔之定海神针",
    "href": "detail/movie-0843.html",
    "cover": "93.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 动作 / 神话",
    "category": "励志",
    "description": "金箍棒被盗，孙悟空失去法力，却意外发现偷棒者是自己五百年前的救命恩人。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "西游记衍生",
      "孙悟空",
      "法宝",
      "喜剧",
      "视觉特效"
    ]
  },
  {
    "title": "实习医生格蕾第六季",
    "href": "detail/movie-0844.html",
    "cover": "94.jpg",
    "year": "2009",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 医学 / 爱情",
    "category": "古装",
    "description": "西雅图仁爱医院遭遇大规模枪击案，医生们在血泊中抢救伤员，也有人永远倒下。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "医疗剧",
      "医院",
      "实习医生",
      "悲剧",
      "群像"
    ]
  },
  {
    "title": "马桶妖怪",
    "href": "detail/movie-0845.html",
    "cover": "95.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 喜剧",
    "category": "音乐",
    "description": "搬家第一天，他发现新家的马桶里住着一只爱吃人的绿色小妖怪，而冲水键是它的“喂食铃”。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "怪物",
      "荒诞",
      "血腥",
      "恶搞"
    ]
  },
  {
    "title": "黄石第三季",
    "href": "detail/movie-0846.html",
    "cover": "96.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 西部 / 犯罪",
    "category": "家庭",
    "description": "新势力入侵蒙大拿，达顿家族腹背受敌，内部的信任却在猎人小屋里被一场暴风雪摧毁。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "牧场",
      "家族",
      "土地争夺",
      "印第安",
      "硬汉"
    ]
  },
  {
    "title": "来电狂响",
    "href": "detail/movie-0847.html",
    "cover": "97.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "category": "都市",
    "description": "七位好友聚餐时玩了一个游戏：所有人的手机来电和消息公开分享，一场情感大地震就此引爆。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "手机",
      "人性",
      "黑色幽默",
      "翻拍"
    ]
  },
  {
    "title": "赌圣",
    "href": "detail/movie-0848.html",
    "cover": "98.jpg",
    "year": "1990",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧 / 奇幻 / 动作",
    "category": "励志",
    "description": "拥有透视眼和搓牌异能的大陆青年左颂星，流落香港赌坛，引发了一场啼笑皆非的江湖风暴。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "特异功能",
      "搓牌",
      "江湖恩怨",
      "无厘头",
      "小人物逆袭"
    ]
  },
  {
    "title": "飘飘欲仙",
    "href": "detail/movie-0849.html",
    "cover": "99.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "奇幻, 爱情, 喜剧",
    "category": "奇幻",
    "description": "一个被996压垮的程序员，意外获得“灵魂出窍”能力，却只能用在暗恋的女同事身上。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "灵魂出窍",
      "社畜幻想",
      "暗恋",
      "轻奇幻"
    ]
  },
  {
    "title": "三轮浮生",
    "href": "detail/movie-0850.html",
    "cover": "100.jpg",
    "year": "2018",
    "region": "印度",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "category": "剧情",
    "description": "一个三轮车夫把车改成“移动咖啡馆”，试图在孟买的拥挤与冷漠中找回尊严。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "底层",
      "三轮车夫",
      "梦想",
      "家庭"
    ]
  },
  {
    "title": "沉默的启示",
    "href": "detail/movie-0851.html",
    "cover": "101.jpg",
    "year": "2025",
    "region": "丹麦",
    "type": "电影",
    "genre": "悬疑, 惊悚",
    "category": "家庭",
    "description": "一个无神论警探调查一起牧师失踪案，却在过程中逐渐听到“上帝的声音”。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "宗教",
      "心理",
      "北欧冷感"
    ]
  },
  {
    "title": "爱心小天使",
    "href": "detail/movie-0852.html",
    "cover": "102.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "genre": "家庭、剧情",
    "category": "悬疑",
    "description": "一个患有先天性心脏病的男孩，决定在生命倒计时里为流浪动物找到一百个家。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "儿童",
      "治愈",
      "公益",
      "成长"
    ]
  },
  {
    "title": "天降之物",
    "href": "detail/movie-0853.html",
    "cover": "103.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻 / 剧情 / 爱情",
    "category": "音乐",
    "description": "一块陨石坠落在小镇神社，陨石里走出一个少女，她说：“我是你五百年前的许愿。”",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "陨石",
      "神秘少女",
      "小镇传说",
      "愿力"
    ]
  },
  {
    "title": "死神骑马来",
    "href": "detail/movie-0854.html",
    "cover": "104.jpg",
    "year": "1967",
    "region": "意大利 / 西班牙",
    "type": "电影",
    "genre": "西部",
    "category": "青春",
    "description": "一个神秘的口琴客来到小镇，他每吹一首曲子，镇上就死一个人。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "通心粉西部片",
      "复仇",
      "口琴",
      "经典配乐",
      "镖客"
    ]
  },
  {
    "title": "虚假的爱情",
    "href": "detail/movie-0855.html",
    "cover": "105.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑, 爱情",
    "category": "动作",
    "description": "完美男友竟是团队作战的“恋爱收割机”，当四位受害女性联手反杀，一场顶级PUA骗局浮出水面。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "骗局",
      "复仇",
      "狗血"
    ]
  },
  {
    "title": "我生命中最糟糕的男人",
    "href": "detail/movie-0856.html",
    "cover": "106.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情, 喜剧, 职场",
    "category": "都市",
    "description": "恨了十年的职场死对头同时被降职到废弃仓库，赌气签下“谁先辞职谁就跪下叫爸爸”的契约，却意外住进了同一间公寓。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "欢喜冤家",
      "办公室恋情",
      "契约婚姻",
      "洪氏姐妹风"
    ]
  },
  {
    "title": "定军山情歌",
    "href": "detail/movie-0857.html",
    "cover": "107.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情、音乐、历史",
    "category": "动作",
    "description": "一个唱川剧的女博士回到定军山，要用摇滚改编老腔，却被守墓老兵骂“数典忘祖”。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "三国",
      "川剧",
      "非遗传承",
      "乡村振兴"
    ]
  },
  {
    "title": "英雄正传",
    "href": "detail/movie-0858.html",
    "cover": "108.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作传记",
    "category": "喜剧",
    "description": "根据边境缉毒警察真实事迹改编，他一生扮演过17个卧底角色，直到葬礼上，家人才从新闻中看到他的真名。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "缉毒英雄",
      "卧底",
      "真人改编",
      "悲壮"
    ]
  },
  {
    "title": "泄密先锋",
    "href": "detail/movie-0859.html",
    "cover": "109.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "惊悚 / 犯罪",
    "category": "爱情",
    "description": "一个高智商黑客偷走了足以颠覆世界秩序的秘密文件，却发现自己成了所有势力的猎物。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "黑客",
      "媒体伦理",
      "政治阴谋",
      "追击"
    ]
  },
  {
    "title": "天衣无缝2024",
    "href": "detail/movie-0860.html",
    "cover": "110.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "category": "悬疑",
    "description": "犯罪搭档用AI伪造了完美不在场证明，结果AI反过来用他们的脸去犯下更大案件。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "人工智能",
      "完美犯罪",
      "记忆植入"
    ]
  },
  {
    "title": "法外风云粤语",
    "href": "detail/movie-0861.html",
    "cover": "111.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "律政黑帮",
    "category": "动作",
    "description": "一名黑帮“师爷”考入律政司，与昔日的法援律师上司在法庭内外展开黑白两道的地下战争。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "双雄对决",
      "卧底",
      "原声粤语",
      "硬核"
    ]
  },
  {
    "title": "求婚大作战",
    "href": "detail/movie-0862.html",
    "cover": "112.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电视剧 (翻拍)",
    "genre": "爱情 / 奇幻 / 青春",
    "category": "家庭",
    "description": "在青梅竹马的婚礼上，男主获得穿越回过去改变一切的能力。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "穿越",
      "青梅竹马",
      "遗憾",
      "修正"
    ]
  },
  {
    "title": "厚颜无耻的人",
    "href": "detail/movie-0863.html",
    "cover": "113.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 黑色幽默",
    "category": "家庭",
    "description": "一个靠行骗为生的男人接下一单天价任务，却发现自己骗的每个对象都是同一个人。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "诈骗",
      "反转",
      "黑色幽默",
      "小人物",
      "道德困境"
    ]
  },
  {
    "title": "腰间持枪",
    "href": "detail/movie-0864.html",
    "cover": "114.jpg",
    "year": "2023",
    "region": "美国 / 加拿大",
    "type": "电影",
    "genre": "动作 / 喜剧",
    "category": "都市",
    "description": "一个沉迷网络骂战的键盘侠，醒来后双手被焊上了真枪，必须直播杀人才能解锁。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "暴力美学",
      "双枪",
      "网络直播",
      "废柴逆袭"
    ]
  },
  {
    "title": "谁的青春不叛逆",
    "href": "detail/movie-0865.html",
    "cover": "115.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "青春 / 校园 / 家庭",
    "category": "纪录",
    "description": "一对双胞胎兄弟——学渣鹿因和学霸鹿果——在高考前一个月互换了身份，结果一个考上了北大，一个差点被学校开除。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "学渣与学霸",
      "身份互换",
      "高考压力",
      "代际冲突",
      "轻喜剧"
    ]
  },
  {
    "title": "魔兵惊天录 血腥命运",
    "href": "detail/movie-0866.html",
    "cover": "116.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "genre": "奇幻, 动作, 黑暗",
    "category": "悬疑",
    "description": "魔界公主与圣殿刺客立下血契，联手追杀背叛了双方阵营的堕落战神。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "魔幻史诗",
      "宿命对决",
      "血腥美学",
      "反英雄"
    ]
  },
  {
    "title": "神魔奇缘",
    "href": "detail/movie-0867.html",
    "cover": "117.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "奇幻, 动作, 爱情",
    "category": "奇幻",
    "description": "一位现代古惑仔意外发现自己竟是神界战神的转世，而他的死对头、另一个帮派的老大正是其宿敌魔尊。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "神魔",
      "转世",
      "宿命",
      "港风",
      "特效"
    ]
  },
  {
    "title": "空中致胜",
    "href": "detail/movie-0868.html",
    "cover": "118.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作，战争",
    "category": "爱情",
    "description": "一支精锐飞行员小队驾驶实验战机，对抗能入侵所有电子系统的AI敌机。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "空战",
      "无人机",
      "未来战争",
      "小队",
      "硬核"
    ]
  },
  {
    "title": "巡逻惊很大",
    "href": "detail/movie-0869.html",
    "cover": "119.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧 / 恐怖 / 动作",
    "category": "爱情",
    "description": "两个菜鸟警察巡逻时总遇到超自然事件，最后发现全城闹鬼是网红公司策划的城市AR游戏。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "废柴警探",
      "真鬼假鬼",
      "台式无厘头"
    ]
  },
  {
    "title": "逍遥青春",
    "href": "detail/movie-0870.html",
    "cover": "120.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 青春 / 文艺",
    "category": "纪录",
    "description": "1997 年，三个小镇少年凑钱买了一盘盗版《阿甘正传》VCD，却从中看到了通往远方唯一的路。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "90年代",
      "小镇",
      "摇滚",
      "出走",
      "迷茫"
    ]
  },
  {
    "title": "兄弟门",
    "href": "detail/movie-0871.html",
    "cover": "121.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，犯罪",
    "category": "动作",
    "description": "一对相依为命的聋哑兄弟策划了一场抢劫，哥哥负责动手，弟弟负责“听”，但得手后弟弟却消失了。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "兄弟情",
      "底层",
      "抢劫",
      "背叛",
      "社会边缘"
    ]
  },
  {
    "title": "熄灯号",
    "href": "detail/movie-0872.html",
    "cover": "122.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "战争, 惊悚",
    "category": "爱情",
    "description": "一支海军陆战队小分队在阿富汗废弃哨所夜夜听见诡异的熄灯号，而吹号者早在三年前就已阵亡。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "心理恐怖",
      "军旅",
      "超自然"
    ]
  },
  {
    "title": "我们的母亲",
    "href": "detail/movie-0873.html",
    "cover": "123.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "悬疑",
    "description": "母亲患上阿尔茨海默症后，只记得女儿十五岁时犯过的错，每天都要骂她一遍。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "阿尔茨海默症",
      "代际冲突",
      "亲情",
      "催泪"
    ]
  },
  {
    "title": "地狱天堂",
    "href": "detail/movie-0874.html",
    "cover": "124.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "古装",
    "description": "一位痛失爱女的父亲，找到当年轻判凶手的法官，用最残忍的方式进行了报复：让法官亲自体验一遍他女儿的遭遇。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "社会派",
      "复仇",
      "双线叙事",
      "人性"
    ]
  },
  {
    "title": "世界的阿菊",
    "href": "detail/movie-0875.html",
    "cover": "125.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情",
    "category": "青春",
    "description": "广岛废墟中，靠捡拾废铁为生的阿菊捡到一个美国兵遗弃的婴儿。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "女性",
      "战后",
      "废料回收",
      "温情"
    ]
  },
  {
    "title": "双面赘婿第二季",
    "href": "detail/movie-0876.html",
    "cover": "126.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装、喜剧、权谋",
    "category": "青春",
    "description": "赘婿身份曝光后，他成了皇权与门阀眼中的香饽饽，所有人都想招他做女婿，包括当朝太后。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "赘婿逆袭",
      "扮猪吃老虎",
      "朝堂争斗",
      "反套路"
    ]
  },
  {
    "title": "黑豹",
    "href": "detail/movie-0877.html",
    "cover": "127.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "动作，科幻，剧情",
    "category": "青春",
    "description": "非洲神秘王国瓦坎达的新国王，面临堂弟对其王位的血腥挑战。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "漫威",
      "瓦坎达",
      "王室斗争",
      "超级英雄"
    ]
  },
  {
    "title": "禁止入内的鼹鼠",
    "href": "detail/movie-0878.html",
    "cover": "128.jpg",
    "year": "2027",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "悬疑 / 科幻",
    "category": "古装",
    "description": "莫斯科地铁深处有一个禁止进入的隧道，里面的“鼹鼠”正在悄悄替换地上的人类。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "地下城",
      "阴谋",
      "鼹鼠人"
    ]
  },
  {
    "title": "新宿天鹅",
    "href": "detail/movie-0879.html",
    "cover": "129.jpg",
    "year": "2020",
    "region": "日本",
    "type": "剧集",
    "genre": "犯罪 / 动作 / 黑色喜剧",
    "category": "悬疑",
    "description": "一个落魄摇滚青年误入新宿街头“星探”世界，靠拳头与义气杀出血路。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "街头文化",
      "兄弟情",
      "黑色幽默"
    ]
  },
  {
    "title": "金馆长对金馆长对金馆长",
    "href": "detail/movie-0880.html",
    "cover": "130.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧 / 动作 / 武侠",
    "category": "纪录",
    "description": "三个同名的跆拳道馆长在同一栋楼开馆，为了抢学生约好打一架，结果打完后楼塌了。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "同名冤家",
      "跆拳道馆",
      "搞笑决斗"
    ]
  },
  {
    "title": "合租男女",
    "href": "detail/movie-0881.html",
    "cover": "131.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 喜剧",
    "category": "历史",
    "description": "毒舌室内设计师与邋遢美食博主被迫合租，签下“互不干涉条约”，却忍不住偷尝对方手艺。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "都市",
      "甜宠",
      "契约同居",
      "职场"
    ]
  },
  {
    "title": "神统记",
    "href": "detail/movie-0882.html",
    "cover": "132.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 奇幻",
    "category": "家庭",
    "description": "掌管天下神兵利器图谱的“神统司”少主，发现自己失忆的养父竟是多年前被屠戮的魔教教主。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "权谋",
      "神话宇宙",
      "家族恩怨"
    ]
  },
  {
    "title": "森林之北",
    "href": "detail/movie-0883.html",
    "cover": "133.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "category": "动作",
    "description": "一名女记者深入东北原始森林，寻找三十年前“野人袭击村庄”事件中唯一的婴儿幸存者。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "森林",
      "野人",
      "真相",
      "社会派",
      "女性视角"
    ]
  },
  {
    "title": "柳叶摘星辰",
    "href": "detail/movie-0884.html",
    "cover": "134.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "网剧",
    "genre": "古装武侠",
    "category": "音乐",
    "description": "冷面王爷被迫娶了柔弱闺秀，大婚当晚新娘自曝身份：我是来刺杀你的首席刺客。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "刺客",
      "王爷",
      "替嫁",
      "轻功",
      "朝堂权谋"
    ]
  },
  {
    "title": "我的草莓胶卷",
    "href": "detail/movie-0885.html",
    "cover": "135.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情 / 青春 / 悬疑",
    "category": "喜剧",
    "description": "一卷过期二十年的草莓味胶卷被冲洗出来，显影的竟是早已疏远的好友当年的告白。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "胶卷摄影",
      "双向暗恋",
      "青春伤痕",
      "时间跨度",
      "纯爱"
    ]
  },
  {
    "title": "三十九",
    "href": "detail/movie-0886.html",
    "cover": "136.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情、女性、都市",
    "category": "科幻",
    "description": "三个三十九岁的闺蜜，在面临绝症、失业和离婚的十字路口，相约一起去死，却找到了活着的意义。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "友情",
      "中年危机",
      "离别",
      "成长",
      "治愈"
    ]
  },
  {
    "title": "超人：钢铁英雄",
    "href": "detail/movie-0887.html",
    "cover": "137.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻",
    "category": "古装",
    "description": "他拥有了超人的全部能力，却发现自己唯一打不过的，是舆论和算法推荐给他的“反派标签”。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "反套路",
      "身份焦虑",
      "道德困境"
    ]
  },
  {
    "title": "歌声中呼唤爱",
    "href": "detail/movie-0888.html",
    "cover": "138.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "音乐、剧情、治愈",
    "category": "家庭",
    "description": "失语症女孩加入问题儿童合唱团，用歌声重新学会说话。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "合唱团",
      "失语症",
      "师生",
      "温暖"
    ]
  },
  {
    "title": "京义线",
    "href": "detail/movie-0889.html",
    "cover": "139.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 历史",
    "category": "励志",
    "description": "一名韩国铁道工程师获准参与修复连接朝韩的京义线，却在工地上发现了一具与自己祖父DNA完全吻合的遗骨。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "朝韩关系",
      "铁路",
      "谍战",
      "家族秘密"
    ]
  },
  {
    "title": "妈妈咪呀",
    "href": "detail/movie-0890.html",
    "cover": "140.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "家庭, 喜剧, 剧情",
    "category": "古装",
    "description": "一对水火不容的母女，在一次意外中互换了身体，母亲不得不去参加女儿的“魔王级”高考，女儿则要面对广场舞界的“腥风血雨”。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "母女关系",
      "身份互换",
      "广场舞"
    ]
  },
  {
    "title": "红伶劫",
    "href": "detail/movie-0891.html",
    "cover": "141.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "民国、悬疑、女性",
    "category": "纪录",
    "description": "越剧名伶在台上演《红楼梦》，每演一场，台下就有一个观众离奇死亡。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "戏班",
      "连环命案",
      "越剧名伶"
    ]
  },
  {
    "title": "史酷比：格斗狂热迷",
    "href": "detail/movie-0892.html",
    "cover": "142.jpg",
    "year": "2025",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧/动画/动作",
    "category": "动作",
    "description": "史酷比和夏奇误打误撞参加了一场世界格斗大赛，发现所有参赛选手都是披着格斗家外衣的怪物。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "格斗",
      "恶搞",
      "怀旧",
      "跨次元"
    ]
  },
  {
    "title": "黑暗的教训",
    "href": "detail/movie-0893.html",
    "cover": "143.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚 / 心理",
    "category": "喜剧",
    "description": "一所专治“问题少女”的精英寄宿学校，学生们发现心理老师的治疗方法，其实是在帮富人筛选移植年轻的身体。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "寄宿学校",
      "催眠",
      "师生",
      "反转",
      "创伤"
    ]
  },
  {
    "title": "粉红香蕉",
    "href": "detail/movie-0894.html",
    "cover": "144.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "genre": "喜剧, 奇幻, 同性",
    "category": "都市",
    "description": "青春期男孩发现，自己每次心动时，身体的某个私密部位就会变成一根粉红色的香蕉。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "魔幻现实主义",
      "青春期",
      "身体变化",
      "LGBT",
      "幽默"
    ]
  },
  {
    "title": "虹猫蓝兔七侠外传 跳跳篇",
    "href": "detail/movie-0895.html",
    "cover": "145.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "武侠，动画",
    "category": "历史",
    "description": "少年跳跳为了给父母报仇，隐姓埋名潜入魔教成为护法，在黑与白之间挣扎十年。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "国漫",
      "前传",
      "护法跳跳",
      "卧底十年"
    ]
  },
  {
    "title": "枕边不设防",
    "href": "detail/movie-0896.html",
    "cover": "146.jpg",
    "year": "2017",
    "region": "法国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "纪录",
    "description": "妻子每晚说梦话，丈夫用录音笔录下后发现，妻子说的是一个陌生男人的谋杀全过程。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "夫妇",
      "信任",
      "谎言",
      "反转"
    ]
  },
  {
    "title": "强者的新传说",
    "href": "detail/movie-0897.html",
    "cover": "147.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻，冒险，战斗",
    "category": "励志",
    "description": "打败魔王归来的勇者，发现自己成了被王国追杀的“高危人物”，于是他决定转行去乡下开农场。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "重生",
      "魔王",
      "反套路",
      "种田"
    ]
  },
  {
    "title": "未婚伉俪",
    "href": "detail/movie-0898.html",
    "cover": "148.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧 / 生活",
    "category": "爱情",
    "description": "一对坚持“只同居不结婚”的情侣，在第7年发现自己比所有已婚朋友都更像夫妻。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "同居",
      "不婚主义",
      "都市爱情",
      "英式幽默"
    ]
  },
  {
    "title": "泡芙小姐第一季",
    "href": "detail/movie-0899.html",
    "cover": "149.jpg",
    "year": "2011",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "动画，都市，情感",
    "category": "励志",
    "description": "一只叫泡芙的猫，用11个关于钥匙的故事，打开了都市男女内心最隐秘的房间。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "都市女性",
      "短篇集",
      "治愈",
      "独立动画",
      "小确幸"
    ]
  },
  {
    "title": "上帝的来电",
    "href": "detail/movie-0900.html",
    "cover": "150.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑/惊悚",
    "category": "科幻",
    "description": "在客服中心上班的女主角接到了一通“来自天堂”的投诉电话，对方自称是刚死去的母亲。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "客服中心",
      "天堂热线",
      "临终关怀",
      "诈骗案",
      "灵异"
    ]
  },
  {
    "title": "魔多客",
    "href": "detail/movie-0901.html",
    "cover": "1.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集 / 动画",
    "genre": "动作 / 喜剧 / 科幻",
    "category": "励志",
    "description": "巨大的脑袋反派魔多客，一边要征服世界，一边要送女儿去上补习班，还要还房贷。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "反派主角",
      "中年危机",
      "家庭喜剧",
      "漫威"
    ]
  },
  {
    "title": "宏观世界",
    "href": "detail/movie-0902.html",
    "cover": "2.jpg",
    "year": "2024",
    "region": "美国 / 德国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "category": "动作",
    "description": "科学家成功缩小到亚原子级别，却发现人类所在的“宏观世界”只是另一个巨兽体内的一个细胞。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "硬核科幻",
      "量子物理",
      "心理恐怖"
    ]
  },
  {
    "title": "西行囚车",
    "href": "detail/movie-0903.html",
    "cover": "3.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "剧情",
    "description": "一辆押送全球头号毒枭的绝密囚车在戈壁铁路上行驶，车上的每个警察都可能是内鬼。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "火车劫案",
      "缉毒",
      "密闭空间",
      "硬核"
    ]
  },
  {
    "title": "连锁大阴谋",
    "href": "detail/movie-0904.html",
    "cover": "4.jpg",
    "year": "2024",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "动作 / 悬疑 / 犯罪",
    "category": "音乐",
    "description": "一名调查记者发现，网上所有流行的阴谋论，背后竟是同一个组织在故意散播和操控。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "阴谋论",
      "记者",
      "追杀",
      "反套路"
    ]
  },
  {
    "title": "店头希治阁",
    "href": "detail/movie-0905.html",
    "cover": "5.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "genre": "悬疑, 惊悚",
    "category": "科幻",
    "description": "开在深水埗破旧商场尽头的理发店，店主阿阁能通过客人碎发中残留的记忆，看到他们即将遭遇的厄运。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "理发店",
      "都市怪谈",
      "单元剧",
      "反转",
      "人性"
    ]
  },
  {
    "title": "非法途径",
    "href": "detail/movie-0906.html",
    "cover": "6.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪, 悬疑",
    "category": "悬疑",
    "description": "一名卧底警察潜入暗网黑市，却发现自己的身份信息正被神秘卖家高价拍卖。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "卧底",
      "暗网",
      "反转"
    ]
  },
  {
    "title": "生命的力量",
    "href": "detail/movie-0907.html",
    "cover": "7.jpg",
    "year": "2025",
    "region": "英国",
    "type": "纪录片剧集",
    "genre": "自然 / 科学 / 人文",
    "category": "音乐",
    "description": "摄制组深入地球上最致命的环境，记录那些在火山口、辐射区和冰封湖下顽强存活的极端生物。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "极端环境",
      "生命奇迹",
      "纪录片",
      "进化论",
      "震撼画面"
    ]
  },
  {
    "title": "爱情盛宴",
    "href": "detail/movie-0908.html",
    "cover": "8.jpg",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "genre": "爱情、剧情、群像",
    "category": "爱情",
    "description": "一座小镇，几对情侣，从初识到背叛，从分离到重逢，爱情就像一场五味杂陈的盛宴。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "多线叙事",
      "婚姻",
      "出轨",
      "生死",
      "小镇故事"
    ]
  },
  {
    "title": "调包富少的逆袭",
    "href": "detail/movie-0909.html",
    "cover": "9.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "剧集",
    "genre": "剧情，复仇，爱情",
    "category": "科幻",
    "description": "被调包流落贫民窟的真少爷，二十年后以冷酷财阀的身份归来，向占尽人生的假少爷发起全面战争。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "泰剧",
      "豪门恩怨",
      "身份互换",
      "重生逆袭",
      "狗血爽剧"
    ]
  },
  {
    "title": "曾克林出关",
    "href": "detail/movie-0910.html",
    "cover": "10.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史, 战争, 传记",
    "category": "悬疑",
    "description": "1945年，八路军将领曾克林率先挺进东北，在苏军、日军残留势力和国民党特工的三方夹缝中，为中国抢占先机。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "抗战后期",
      "军事谈判",
      "真实人物",
      "战略博弈"
    ]
  },
  {
    "title": "爱情代替套路",
    "href": "detail/movie-0911.html",
    "cover": "11.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情，喜剧，剧情",
    "category": "纪录",
    "description": "情感咨询男博主遭遇顶尖“反套路”女玩家，所有招数在她面前都成了笑话。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "反套路",
      "都市男女",
      "情感反转",
      "轻松治愈",
      "甜而不腻"
    ]
  },
  {
    "title": "欢喜密探",
    "href": "detail/movie-0912.html",
    "cover": "12.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装、谍战、喜剧",
    "category": "剧情",
    "description": "贪生怕死的酒楼跑堂被迫当了三面间谍，结果因为太怂，居然把所有反派都策反了。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "卧底",
      "小人物逆袭",
      "乌龙事件"
    ]
  },
  {
    "title": "保镖",
    "href": "detail/movie-0913.html",
    "cover": "13.jpg",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "genre": "动作",
    "category": "励志",
    "description": "顶级保镖最后一个任务：保护一名掌握了总统犯罪证据的九岁黑客女孩。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "硬汉",
      "保护证人",
      "暴力美学"
    ]
  },
  {
    "title": "激情燃烧的岁月3",
    "href": "detail/movie-0914.html",
    "cover": "14.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "年代家庭",
    "category": "音乐",
    "description": "当年抗美援朝的老兵，在九十年代下岗潮中，用军人的铁腕管教着下海经商的儿子。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "退伍老兵",
      "90年代",
      "下岗潮",
      "父子关系"
    ]
  },
  {
    "title": "浪漫街头",
    "href": "detail/movie-0915.html",
    "cover": "15.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "category": "历史",
    "description": "一个失意的中年大叔和一个叛逆的滑板少女，在巴黎的深夜街头，进行了一场寻找“老照片里爱情”的荒诞漫游。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "巴黎",
      "偶遇",
      "一夜温情",
      "现实主义浪漫"
    ]
  },
  {
    "title": "陈赓晋南大捷",
    "href": "detail/movie-0916.html",
    "cover": "16.jpg",
    "year": "2011",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争 / 历史",
    "category": "励志",
    "description": "1946年晋南，陈赓率部以三万兵力对抗胡宗南十一万大军，打出了一场教科书式的运动战。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "解放战争",
      "军事策略",
      "名将传记"
    ]
  },
  {
    "title": "胜与败",
    "href": "detail/movie-0917.html",
    "cover": "17.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 运动",
    "category": "都市",
    "description": "一支从未赢过球的高中棒球队，在迎来一位神秘教练后，开始发现“胜利”之外的人生意义。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "体育竞技",
      "失意者联盟",
      "棒球",
      "励志"
    ]
  },
  {
    "title": "私处",
    "href": "detail/movie-0918.html",
    "cover": "18.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 女性 / 身体政治",
    "category": "家庭",
    "description": "她决定把自己身体的每一寸秘密都搬到舞台上，包括那些从不被允许说出口的痛。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "身体自主",
      "女性凝视",
      "一镜到底",
      "舞台剧改编",
      "争议"
    ]
  },
  {
    "title": "奥德里与黛西",
    "href": "detail/movie-0919.html",
    "cover": "19.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 惊悚",
    "category": "音乐",
    "description": "性格内向的奥德里帮助校花黛西逃出邪教，却发现真正的魔鬼一直睡在自己身边。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "闺蜜",
      "心理操控",
      "悬疑"
    ]
  },
  {
    "title": "那些年我们疯狂的青春",
    "href": "detail/movie-0920.html",
    "cover": "20.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "青春，校园，爱情",
    "category": "音乐",
    "description": "2004年，一群高中生为了保住即将被废社的吉他社，决定在一个月内创作出一首传遍校园的“神曲”。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "高中",
      "社团",
      "热血",
      "友情",
      "千禧年"
    ]
  },
  {
    "title": "燃烧的棕榈",
    "href": "detail/movie-0921.html",
    "cover": "21.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 灾难 / 剧情",
    "category": "动作",
    "description": "超级山火席卷加州，一群富人被困在号称“绝对安全”的智能社区，却发现控制系统早已叛变。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "气候难民",
      "家庭冲突",
      "末日求生",
      "富人区",
      "人性实验"
    ]
  },
  {
    "title": "为你而来",
    "href": "detail/movie-0922.html",
    "cover": "22.jpg",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "genre": "爱情 / 冒险 / 灾难",
    "category": "悬疑",
    "description": "七年前被男友在地震中抛弃的女孩，七年后作为救援队长，在地震废墟下听到了那个熟悉声音的呼救。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "地震",
      "救援",
      "生死恋",
      "信念"
    ]
  },
  {
    "title": "草原小屋",
    "href": "detail/movie-0923.html",
    "cover": "23.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭, 年代, 治愈",
    "category": "爱情",
    "description": "70年代初，一个来自南方的哑女童被寄养在内蒙古草原的蒙古包中，她用画笔记录下了草原上的最后一位萨满。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "内蒙",
      "知青",
      "儿童视角",
      "自然"
    ]
  },
  {
    "title": "龙三和他的七人党",
    "href": "detail/movie-0924.html",
    "cover": "24.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧 / 犯罪",
    "category": "家庭",
    "description": "七个加起来超过五百岁的黑帮退休老爷爷，看不惯现代年轻人的“假黑道”，决定重出江湖，用昭和时代的老规矩整顿秩序。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "老人",
      "黑帮",
      "怀旧",
      "搞笑",
      "社会讽刺"
    ]
  },
  {
    "title": "钟楼爱人",
    "href": "detail/movie-0925.html",
    "cover": "25.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情，奇幻",
    "category": "历史",
    "description": "女主角在结婚前一天，意外通过大学钟楼的钟声穿越回10年前，试图寻找自己错过的真爱。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "时间穿越",
      "青梅竹马",
      "治愈",
      "甜宠"
    ]
  },
  {
    "title": "我的丫鬟是总监",
    "href": "detail/movie-0926.html",
    "cover": "26.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧, 爱情, 奇幻",
    "category": "喜剧",
    "description": "当代女总监穿越成古代千金小姐的丫鬟，结果她用现代职场管理术，把整个府邸改造成了盈利机构。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "穿越",
      "职场",
      "反套路",
      "甜宠"
    ]
  },
  {
    "title": "天生笑匠",
    "href": "detail/movie-0927.html",
    "cover": "27.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧，剧情",
    "category": "青春",
    "description": "一个天生不会哭的穷小子，为了养活捡来的婴儿，被迫参加搞笑比赛。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "喜剧人",
      "励志",
      "小人物",
      "怀旧",
      "幽默"
    ]
  },
  {
    "title": "望向太阳",
    "href": "detail/movie-0928.html",
    "cover": "28.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "剧情",
    "description": "患上阿尔茨海默症的母亲坚持要回乡下老屋，因为她记得，那里埋着给女儿准备的嫁妆。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "阿尔茨海默症",
      "亲情",
      "乡村",
      "陪伴"
    ]
  },
  {
    "title": "卫斯理之老猫",
    "href": "detail/movie-0929.html",
    "cover": "29.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "科幻 / 悬疑",
    "category": "都市",
    "description": "卫斯理调查一桩连环凶杀案，所有死者的身边都蹲着一只黑猫，而那只猫已经活了五千年。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "卫斯理",
      "外星生物",
      "倪匡"
    ]
  },
  {
    "title": "热舞校花团",
    "href": "detail/movie-0930.html",
    "cover": "30.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 歌舞 / 运动",
    "category": "悬疑",
    "description": "一群被校啦啦队开除的“怪咖”女生，为了报复，组建了一支专门“破坏”对手比赛的最差啦啦队。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "啦啦队",
      "逆袭",
      "女性友谊"
    ]
  },
  {
    "title": "闪亮女孩",
    "href": "detail/movie-0931.html",
    "cover": "31.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻, 悬疑, 惊悚",
    "category": "悬疑",
    "description": "她每次被杀后都会跳跃到另一个时间线的自己身上，但凶手好像也记得每一次行凶的细节。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "时空跳跃",
      "连环凶案",
      "女性复仇",
      "非线性叙事",
      "烧脑神作"
    ]
  },
  {
    "title": "即使世界终结",
    "href": "detail/movie-0932.html",
    "cover": "32.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "科幻， 灾难， 爱情",
    "category": "都市",
    "description": "一颗小行星撞击前夕，一名孤独少年与一个AI少女携手寻找世界最后的色彩。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "末日",
      "记忆",
      "AI"
    ]
  },
  {
    "title": "非常转学生",
    "href": "detail/movie-0933.html",
    "cover": "33.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "网络剧",
    "genre": "喜剧 / 校园",
    "category": "动作",
    "description": "为了体验生活，某国际集团继承人伪装成贫困生转入一所贵族高中，结果成了全校的公敌。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "转学生",
      "伪装",
      "富二代"
    ]
  },
  {
    "title": "幻像",
    "href": "detail/movie-0934.html",
    "cover": "34.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑 / 心理",
    "category": "动作",
    "description": "VR梦境设计师沉迷于自己的“完美家庭”幻象，直到幻象中的女儿走进现实，告诉他：你的真实人生已经被谋杀。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "VR",
      "梦境",
      "谋杀",
      "虚实"
    ]
  },
  {
    "title": "快速出货黄昏清兵卫",
    "href": "detail/movie-0935.html",
    "cover": "35.jpg",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 历史",
    "category": "励志",
    "description": "为了养活三个孩子和痴呆母亲，一个年薪两石的底层武士被迫接起了“快递”活。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "武士",
      "贫穷",
      "温情",
      "翻拍",
      "反英雄"
    ]
  },
  {
    "title": "诱惑者",
    "href": "detail/movie-0936.html",
    "cover": "36.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "惊悚",
    "category": "青春",
    "description": "一名顶级骗术师准备收山，却在最后一次任务中，发现自己才是猎物。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "心理战",
      "诈骗犯",
      "高智商对决",
      "反套路"
    ]
  },
  {
    "title": "参孙和达丽拉",
    "href": "detail/movie-0937.html",
    "cover": "37.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "史诗爱情",
    "category": "爱情",
    "description": "拥有神力的参孙爱上非利士女子达丽拉，却不知她是敌人派来的间谍，一场爱与信仰的终极考验。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "圣经改编",
      "力士",
      "背叛"
    ]
  },
  {
    "title": "明日世界",
    "href": "detail/movie-0938.html",
    "cover": "38.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻，冒险，动作",
    "category": "悬疑",
    "description": "2067年，AI统治地表，残存人类在地下城醒来，发现记忆全被篡改。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "近未来",
      "AI叛乱",
      "地下城",
      "人类觉醒",
      "硬科幻"
    ]
  },
  {
    "title": "英格兰，我的英格兰",
    "href": "detail/movie-0939.html",
    "cover": "39.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "历史 / 音乐",
    "category": "奇幻",
    "description": "一支90年代英国传奇乐队在巅峰期突然解散，20年后，主唱与吉他手在一间废弃录音棚里最后一次对话。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "英伦摇滚",
      "1990年代",
      "乐队解散",
      "友情裂痕",
      "创作焦虑"
    ]
  },
  {
    "title": "大案组",
    "href": "detail/movie-0940.html",
    "cover": "40.jpg",
    "year": "2008",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "刑侦， 悬疑， 犯罪",
    "category": "古装",
    "description": "省厅抽调各路怪才成立“大案组”，组长是患有恐血症的犯罪心理学教授。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "重案",
      "刑警",
      "智商对决",
      "写实"
    ]
  },
  {
    "title": "太阳神父月亮修女",
    "href": "detail/movie-0941.html",
    "cover": "41.jpg",
    "year": "2023",
    "region": "意大利 / 法国",
    "type": "电影",
    "genre": "剧情 / 宗教 / 历史",
    "category": "纪录",
    "description": "中世纪瘟疫肆虐，一个狂热的年轻神父与一个被驱逐的修女，在废墟中建立了一种违背教条的爱与信仰秩序。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "修道院",
      "信仰",
      "权力",
      "救赎",
      "中世纪"
    ]
  },
  {
    "title": "双镯",
    "href": "detail/movie-0942.html",
    "cover": "42.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "历史 / 同性 / 家庭",
    "category": "古装",
    "description": "日据末期的台湾山村，一对童养媳戴上了同一对银镯，也戴上了无法言说的禁忌之苦。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "日据时期",
      "童养媳",
      "女性互助",
      "时代悲剧"
    ]
  },
  {
    "title": "与你同步",
    "href": "detail/movie-0943.html",
    "cover": "43.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻 / 爱情 / 悬疑",
    "category": "科幻",
    "description": "为了挽回分手的女友，他植入了能同步女友情绪的芯片，却发现自己活成了对方的影子。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "脑机接口",
      "灵魂伴侣",
      "记忆转移",
      "伦理困境",
      "软科幻"
    ]
  },
  {
    "title": "金牌拳手3",
    "href": "detail/movie-0944.html",
    "cover": "44.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "运动 / 剧情",
    "category": "都市",
    "description": "退役拳王为救落魄兄弟重出江湖，却发现自己要打的正是当年救过自己命的恩人。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "拳击",
      "复仇",
      "兄弟反目",
      "逆袭"
    ]
  },
  {
    "title": "昆城血泪",
    "href": "detail/movie-0945.html",
    "cover": "45.jpg",
    "year": "2024",
    "region": "缅甸 / 泰国",
    "type": "电影",
    "genre": "战争 / 剧情",
    "category": "科幻",
    "description": "缅甸内战中的一座边境小城，一位华人女教师冒着炮火，偷偷藏匿了三十六名不同族裔的孤儿。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "内战",
      "人道",
      "催泪"
    ]
  },
  {
    "title": "通灵恶犬",
    "href": "detail/movie-0946.html",
    "cover": "46.jpg",
    "year": "2013",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖、惊悚",
    "category": "古装",
    "description": "小镇上每一条狗都能看见鬼魂，它们突然集体狂吠不止，因为一个被谋杀的女孩正在寻找替身。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "狗",
      "通灵",
      "小镇",
      "诅咒"
    ]
  },
  {
    "title": "绝望主妇第三季",
    "href": "detail/movie-0947.html",
    "cover": "47.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情, 喜剧",
    "category": "都市",
    "description": "紫藤巷搬来了一对完美夫妻，但妻子每晚都会在花园里挖坑，丈夫白天再填上。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "女性群像",
      "悬疑",
      "黑色幽默",
      "回归"
    ]
  },
  {
    "title": "小李飞刀粤语",
    "href": "detail/movie-0948.html",
    "cover": "48.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "武侠 / 古装 / 剧情",
    "category": "奇幻",
    "description": "全新粤语版《小李飞刀》，李寻欢不再让妻，而是让刀。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "翻拍",
      "粤语原声",
      "宿命侠客",
      "经典重塑"
    ]
  },
  {
    "title": "蓝色档案",
    "href": "detail/movie-0949.html",
    "cover": "49.jpg",
    "year": "2026",
    "region": "中国内地",
    "type": "电影",
    "genre": "悬疑 / 谍战",
    "category": "奇幻",
    "description": "1997年上海拆一栋老洋房，墙里掉出一本1948年的联络簿，上面的代号都还活着。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "民国",
      "双面间谍",
      "微缩胶卷",
      "沪上旧事"
    ]
  },
  {
    "title": "我的朋友们",
    "href": "detail/movie-0950.html",
    "cover": "50.jpg",
    "year": "2028",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 悬疑",
    "category": "剧情",
    "description": "毕业十五周年同学聚会，一个从未存在过的“第十一人”出现在合影里，所有人的记忆都开始崩塌。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "友情",
      "真相",
      "记忆",
      "校园暴力",
      "反转"
    ]
  },
  {
    "title": "疼痛难免",
    "href": "detail/movie-0951.html",
    "cover": "51.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧, 剧情, 医学",
    "category": "励志",
    "description": "妇产科男医生是顶尖外科圣手，却接生了自家妻子，更发现新生儿是上司的种。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "产科",
      "黑色幽默",
      "职场压力",
      "新手爸爸"
    ]
  },
  {
    "title": "水手的三枚硬币",
    "href": "detail/movie-0952.html",
    "cover": "52.jpg",
    "year": "2025",
    "region": "德国 / 波兰",
    "type": "电影",
    "genre": "剧情、历史、战争",
    "category": "历史",
    "description": "一名德国水手在二战尾声拥有三枚硬币，每一枚都让他面临一次关乎生死的道德抉择。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "二战",
      "海军",
      "抉择",
      "象征主义"
    ]
  },
  {
    "title": "兄台请留步",
    "href": "detail/movie-0953.html",
    "cover": "53.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装武侠，喜剧",
    "category": "音乐",
    "description": "社畜意外穿越到武侠世界，每次想躺平都会被各路大侠喊“兄台请留步”。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "江湖",
      "结拜",
      "爆笑",
      "逆袭"
    ]
  },
  {
    "title": "刺青粤语",
    "href": "detail/movie-0954.html",
    "cover": "54.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "category": "都市",
    "description": "卧底警察被迫纹上黑帮老大的图腾，归队后却发现这个刺青能让他听懂黑帮暗语，却再也脱不下这层皮。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "黑帮",
      "卧底",
      "纹身",
      "身份认同",
      "宿命"
    ]
  },
  {
    "title": "大市民",
    "href": "detail/movie-0955.html",
    "cover": "55.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "黑色幽默 / 社会",
    "category": "喜剧",
    "description": "一个被误认为是首富私生子的清洁工，被迫扮演“大市民”，结果把整座城市搅得鸡飞狗跳。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "小人物逆袭",
      "荒诞现实",
      "身份错位"
    ]
  },
  {
    "title": "尼姆的实验",
    "href": "detail/movie-0956.html",
    "cover": "56.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 惊悚, 伦理",
    "category": "奇幻",
    "description": "富翁花重金将自己的意识上传进年轻克隆体，却发现体内还住着这个“身体”原本的意识。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "意识上传",
      "克隆",
      "永生",
      "哲学",
      "密室逃脱"
    ]
  },
  {
    "title": "巨头",
    "href": "detail/movie-0957.html",
    "cover": "57.jpg",
    "year": "2024",
    "region": "美国 / 德国",
    "type": "电视剧",
    "genre": "剧情, 商战, 传记",
    "category": "剧情",
    "description": "三条时间线交织：一个程序员1998年写出第一个搜索算法、2010年成为独裁者、2030年面临反垄断肢解，但他只想找回当年那个写代码的自己。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "科技巨头",
      "垄断",
      "道德拷问",
      "三线叙事"
    ]
  },
  {
    "title": "纳哈佩特",
    "href": "detail/movie-0958.html",
    "cover": "58.jpg",
    "year": "2025",
    "region": "亚美尼亚 / 俄罗斯",
    "type": "电影",
    "genre": "战争, 历史, 剧情",
    "category": "喜剧",
    "description": "一战时期，一位亚美尼亚老妇人在逃亡路上，用尽一生智慧守护全村最后的孩子们。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "一战",
      "高加索",
      "难民",
      "信仰"
    ]
  },
  {
    "title": "派对怪兽",
    "href": "detail/movie-0959.html",
    "cover": "59.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 恐怖",
    "category": "都市",
    "description": "高中毕业派对上，一个只会在极度混乱中现身的怪物开始屠杀所有人，而保持冷静才能活下去。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "校园",
      "怪物",
      "青春",
      "血浆"
    ]
  },
  {
    "title": "前任3再见前任",
    "href": "detail/movie-0960.html",
    "cover": "60.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情、喜剧",
    "category": "奇幻",
    "description": "两对分手情侣在街头偶遇与新欢同游，一场关于尊严与释怀的终极较劲就此展开。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "分手",
      "都市情感",
      "前任",
      "成长"
    ]
  },
  {
    "title": "黎明前与妳相遇",
    "href": "detail/movie-0961.html",
    "cover": "61.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 剧情, 战争",
    "category": "剧情",
    "description": "二战时期，法国女抵抗军与德国军官在宵禁的巴黎街头邂逅，他们用书信传递情报，却不知彼此都是对方要刺杀的目标。 他们每天在固定的长椅上交换情书，却不知道对方的真实身份，是恋人，也是…",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "法式浪漫",
      "二战",
      "书信情缘",
      "错位时空",
      "黑白与彩色"
    ]
  },
  {
    "title": "真实犯罪",
    "href": "detail/movie-0962.html",
    "cover": "62.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "category": "音乐",
    "description": "一档真实犯罪播客翻出旧案，却发现当年的“真凶”正坐在麦克风对面。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "记者",
      "冤案",
      "播客"
    ]
  },
  {
    "title": "三狼四虎女霸王",
    "href": "detail/movie-0963.html",
    "cover": "63.jpg",
    "year": "2024",
    "region": "台湾",
    "type": "电影",
    "genre": "动作 / 喜剧",
    "category": "剧情",
    "description": "一所男校因欠债被迫与隔壁女校合并，三个校霸和四个太妹为争地盘展开了爆笑又惨烈的对决。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "校园",
      "女权",
      "格斗",
      "荒诞"
    ]
  },
  {
    "title": "儿女债粤语",
    "href": "detail/movie-0964.html",
    "cover": "64.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "剧情 / 家庭 / 伦理",
    "category": "剧情",
    "description": "六十年代香港石硖尾大火中幸存的三个家庭，四十年来因一张染血的借据，将儿女情债纠缠成解不开的死结。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "港剧",
      "亲情",
      "恩怨",
      "草根",
      "时代变迁"
    ]
  },
  {
    "title": "整人频道",
    "href": "detail/movie-0965.html",
    "cover": "65.jpg",
    "year": "2025",
    "region": "中国",
    "type": "网络短剧",
    "genre": "喜剧， 悬疑",
    "category": "音乐",
    "description": "一档整人直播节目意外拍到真实的凶案现场，千万观众以为都是剧本。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "直播",
      "恶作剧",
      "反转",
      "都市传说",
      "黑色幽默"
    ]
  },
  {
    "title": "乘风破浪的姐姐第二季",
    "href": "detail/movie-0966.html",
    "cover": "66.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "真人秀，音乐",
    "category": "古装",
    "description": "三十位新老姐姐重回追光起点，这次她们不仅要成团，更要与过去的自己和解。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "女性成长",
      "成团竞演",
      "破龄追梦"
    ]
  },
  {
    "title": "博格对战麦肯罗",
    "href": "detail/movie-0967.html",
    "cover": "67.jpg",
    "year": "2017",
    "region": "瑞典 / 美国",
    "type": "电影",
    "genre": "传记 / 运动 / 剧情",
    "category": "励志",
    "description": "1980年温网决赛前夜，冰人博格和坏小子麦肯罗在更衣室隔着一堵墙，各自崩溃又各自站起来。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "网球传奇",
      "宿敌对决",
      "体育精神"
    ]
  },
  {
    "title": "我的姊姊会隐形",
    "href": "detail/movie-0968.html",
    "cover": "68.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "家庭奇幻剧情片",
    "category": "励志",
    "description": "妹妹声称能看见去世的姐姐，而姐姐留下的魔术笔记似乎真的在改变现实。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "亲情",
      "自闭症",
      "魔术",
      "成长",
      "治愈"
    ]
  },
  {
    "title": "积积木积积",
    "href": "detail/movie-0969.html",
    "cover": "69.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "动作",
    "description": "为了与自闭症儿子沟通，粗犷的建筑工人父亲开始学习用积木拼出整个世界。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "自闭症",
      "积木",
      "父爱"
    ]
  },
  {
    "title": "凶镜",
    "href": "detail/movie-0970.html",
    "cover": "70.jpg",
    "year": "2024",
    "region": "中国香港 / 泰国",
    "type": "电影",
    "genre": "恐怖",
    "category": "励志",
    "description": "古董商收到一面民国时期的铜镜，每当有人照镜子，镜子里的倒影就会延迟几秒才模仿，而且越来越不听话。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "灵异",
      "镜子",
      "因果报应"
    ]
  },
  {
    "title": "除魔特攻队",
    "href": "detail/movie-0971.html",
    "cover": "71.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "动作",
    "category": "奇幻",
    "description": "一支由前科犯组成的“廉价除魔队”在直播驱魔时，不慎放出被封印了三百年的恶魔本尊。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "动作",
      "奇幻",
      "驱魔",
      "爽片",
      "团队"
    ]
  },
  {
    "title": "饮料超人",
    "href": "detail/movie-0972.html",
    "cover": "72.jpg",
    "year": "2021",
    "region": "中国内地",
    "type": "动画电影",
    "genre": "喜剧, 科幻, 动作",
    "category": "爱情",
    "description": "废柴青年误喝实验室泄漏的红色饮料，一激动就会变成浑身冒气的“碳酸超人”，但超能力只有30秒。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "超级英雄",
      "饮料",
      "变种",
      "沙雕"
    ]
  },
  {
    "title": "斗气老顽童",
    "href": "detail/movie-0973.html",
    "cover": "73.jpg",
    "year": "1993",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧/爱情",
    "category": "奇幻",
    "description": "两个丧偶老邻居互相整蛊三十年，直到新搬来的单身老太太成了他们共同追求的目标。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "老年爱情",
      "邻居斗气",
      "恶作剧",
      "黄昏恋",
      "温情"
    ]
  },
  {
    "title": "锦心似玉",
    "href": "detail/movie-0974.html",
    "cover": "74.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 爱情",
    "category": "音乐",
    "description": "永平侯府大将军被迫娶了仇人之女，洞房夜新娘递上一把剪刀：“将军，我们来谈谈休妻的条件。”",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "宅斗",
      "先婚后爱",
      "刺绣",
      "庶女逆袭"
    ]
  },
  {
    "title": "春情尤物",
    "href": "detail/movie-0975.html",
    "cover": "75.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 情色",
    "category": "剧情",
    "description": "一位垂死的艺术大师将年轻情人视为最后的缪斯，却不知她是他宿敌派来摧毁他的“武器”。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "艺术圈",
      "欲望与毁灭",
      "忘年恋"
    ]
  },
  {
    "title": "惊爆轰天雷",
    "href": "detail/movie-0976.html",
    "cover": "76.jpg",
    "year": "1997",
    "region": "香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "category": "历史",
    "description": "卧底警察被同袍出卖，身绑轰天雷冲进金三角毒巢，引爆前却发现弟弟也在人质中。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "警匪对峙",
      "卧底",
      "爆炸",
      "兄弟情",
      "枪战"
    ]
  },
  {
    "title": "惊天奇案",
    "href": "detail/movie-0977.html",
    "cover": "77.jpg",
    "year": "2010",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑 / 犯罪",
    "category": "动作",
    "description": "民国上海滩，一个留洋女法医和一个巡捕房探长联手破解七宗连动物都难以逃脱的奇案。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "民国",
      "侦探",
      "连环案",
      "单元剧",
      "旗袍"
    ]
  },
  {
    "title": "虚拟革命",
    "href": "detail/movie-0978.html",
    "cover": "78.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻, 动作, 悬疑",
    "category": "音乐",
    "description": "当全球 90% 的人类都沉迷于“元宇宙第二世界”时，一个黑客发现所有玩家的大脑都正在被格式化。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "元宇宙",
      "AI觉醒",
      "黑客",
      "脑机接口",
      "反乌托邦"
    ]
  },
  {
    "title": "朝花夕拾",
    "href": "detail/movie-0979.html",
    "cover": "79.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 年代",
    "category": "悬疑",
    "description": "患有阿尔茨海默症的母亲只记得五十年前下乡插队的事，儿子决定带她重走当年路。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "失忆",
      "父母爱情",
      "年代剧",
      "怀旧",
      "催泪"
    ]
  },
  {
    "title": "晨光正好",
    "href": "detail/movie-0980.html",
    "cover": "80.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "genre": "剧情， 爱情",
    "category": "动作",
    "description": "一位年轻寡母在照顾失智父亲与陷入不伦之恋间，寻找生活的晨光。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "中年危机",
      "家庭",
      "轻盈"
    ]
  },
  {
    "title": "武林圣火令粤语",
    "href": "detail/movie-0981.html",
    "cover": "81.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "武侠动作",
    "category": "喜剧",
    "description": "失传百年的武林圣火令重现，江湖传言“得令者得天下”，但得到令的人全疯了。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "粤语原声",
      "圣火令",
      "江湖恩怨",
      "门派",
      "复仇"
    ]
  },
  {
    "title": "极品桃花运",
    "href": "detail/movie-0982.html",
    "cover": "82.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 爱情",
    "category": "奇幻",
    "description": "母胎单身女程序员被诅咒“烂桃花缠身”，所有接近她的男人都会莫名倒霉甚至破产。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "搞笑",
      "都市",
      "反向玛丽苏",
      "爽剧"
    ]
  },
  {
    "title": "粉雄救兵第六季",
    "href": "detail/movie-0983.html",
    "cover": "83.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "真人秀，生活，励志",
    "category": "奇幻",
    "description": "神奇五人组来到北欧极夜小镇，要改造一位在黑暗中迷失了30年的自闭灯塔守护人。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "改造",
      "治愈",
      "多元",
      "美食",
      "时尚"
    ]
  },
  {
    "title": "狼的孩子雨和雪",
    "href": "detail/movie-0984.html",
    "cover": "84.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动画 / 家庭 / 奇幻",
    "category": "音乐",
    "description": "狼人爸爸意外去世后，人类母亲独自带着两个狼人孩子在深山老林中艰难求生。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "母爱",
      "狼人",
      "自然与文明",
      "成长"
    ]
  },
  {
    "title": "跳舞的猪",
    "href": "detail/movie-0985.html",
    "cover": "85.jpg",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 动画, 家庭",
    "category": "纪录",
    "description": "一只梦想成为芭蕾舞明星的小猪，在朋友的帮助下，阴差阳错地登上了人类大剧院的舞台。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "农场",
      "梦想",
      "拟人化"
    ]
  },
  {
    "title": "活佛济公2",
    "href": "detail/movie-0986.html",
    "cover": "86.jpg",
    "year": "2010",
    "region": "中国",
    "type": "剧集",
    "genre": "古装, 神话, 喜剧",
    "category": "古装",
    "description": "疯癫济公再临人间，这次他要渡化的不是恶人，而是一位心如死灰的善人。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "济公",
      "降妖",
      "单元剧",
      "幽默",
      "人间百态"
    ]
  },
  {
    "title": "复制品",
    "href": "detail/movie-0987.html",
    "cover": "87.jpg",
    "year": "2018",
    "region": "英国",
    "type": "电影",
    "genre": "科幻",
    "category": "家庭",
    "description": "科学家为了复活死去的儿子，秘密克隆了他，却发现被复制的记忆里藏着一个谋杀秘密。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "克隆",
      "伦理困境",
      "记忆移植",
      "悬疑",
      "反转"
    ]
  },
  {
    "title": "艳阳争春",
    "href": "detail/movie-0988.html",
    "cover": "88.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 年代",
    "category": "剧情",
    "description": "1930年代的上海滩，名媛三姐妹为争夺父亲留下的旗袍铺，各出奇招，却陷入日军阴谋。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "民国",
      "女性",
      "家族",
      "商战"
    ]
  },
  {
    "title": "有兽焉第四季",
    "href": "detail/movie-0989.html",
    "cover": "89.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画剧集",
    "genre": "动画 / 奇幻 / 喜剧",
    "category": "音乐",
    "description": "山野小庙拆迁在即，一众落魄神兽面临“户口危机”，集体踏上寻家之路。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "山海经",
      "治愈",
      "神兽",
      "日常",
      "国风"
    ]
  },
  {
    "title": "津门奇案之艳遇",
    "href": "detail/movie-0990.html",
    "cover": "90.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "悬疑, 爱情, 民国",
    "category": "科幻",
    "description": "戏班花旦死在新婚之夜，脖子上戴着只有男主才有的定情玉佩，他却毫无记忆。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "民国奇案",
      "天津卫",
      "艳尸",
      "戏班风云"
    ]
  },
  {
    "title": "美食妙探",
    "href": "detail/movie-0991.html",
    "cover": "91.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集（季播）",
    "genre": "犯罪 / 喜剧 / 悬疑",
    "category": "科幻",
    "description": "前米其林餐厅主厨因味觉超常被FBI特招，她靠“尝”出犯罪现场残留物的成分来破案。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "美食品鉴",
      "现场鉴证",
      "毒理分析"
    ]
  },
  {
    "title": "捉鬼有限公司",
    "href": "detail/movie-0992.html",
    "cover": "92.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 恐怖 / 奇幻",
    "category": "纪录",
    "description": "一家濒临倒闭的捉鬼公司接到史上最大订单：清理一栋闹鬼的互联网公司，却发现鬼比员工还懂KPI。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "僵尸",
      "无厘头",
      "办公室政治",
      "道术",
      "讽刺"
    ]
  },
  {
    "title": "落凡尘",
    "href": "detail/movie-0993.html",
    "cover": "93.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 古装 / 爱情",
    "category": "历史",
    "description": "因为在天上打碎一盏灯，战神被贬为凡人，在宋朝市集当了一个月烧饼铺学徒。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "神仙下凡",
      "失忆",
      "市井生活",
      "双向救赎"
    ]
  },
  {
    "title": "通灵车教",
    "href": "detail/movie-0994.html",
    "cover": "94.jpg",
    "year": "2022",
    "region": "爱尔兰",
    "type": "电影",
    "genre": "喜剧 / 恐怖",
    "category": "历史",
    "description": "一个经营驾校的通灵大妈，被迫教导菜鸟鬼魂如何“开灵车”去往来世。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "通灵",
      "驾校",
      "低成本",
      "荒诞"
    ]
  },
  {
    "title": "活尸之夜",
    "href": "detail/movie-0995.html",
    "cover": "95.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖 / 惊悚 / 动作",
    "category": "科幻",
    "description": "一栋公寓楼封锁后，活尸不是最大威胁，邻居才是。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "丧尸",
      "公寓逃生",
      "邻里互害",
      "密闭空间",
      "黑色幽默"
    ]
  },
  {
    "title": "吃素的小爸第一季",
    "href": "detail/movie-0996.html",
    "cover": "96.jpg",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧， 家庭",
    "category": "喜剧",
    "description": "肉食主义的单亲爸爸突然宣布吃素并要开素食餐厅，女儿怀疑他加入了“奇怪组织”。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "素食",
      "父女",
      "代际冲突",
      "创业"
    ]
  },
  {
    "title": "倭河马的秘密生活",
    "href": "detail/movie-0997.html",
    "cover": "97.jpg",
    "year": "2023",
    "region": "英国",
    "type": "纪录片",
    "genre": "纪录 / 自然",
    "category": "喜剧",
    "description": "镜头首次完整记录下倭河马在水下用特殊声波交流、以及它们不为人类所知的复杂情感联结。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "野生动物",
      "保育",
      "非洲",
      "冷知识"
    ]
  },
  {
    "title": "爱怨峡谷",
    "href": "detail/movie-0998.html",
    "cover": "98.jpg",
    "year": "1967",
    "region": "美国",
    "type": "电影",
    "genre": "西部, 爱情",
    "category": "都市",
    "description": "一名逃犯挟持了镇长的女儿逃入大峡谷，七天的逃亡却让绑匪和人质爱上了对方。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "经典",
      "背叛",
      "救赎"
    ]
  },
  {
    "title": "正午阳光",
    "href": "detail/movie-0999.html",
    "cover": "99.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情/律政",
    "category": "纪录",
    "description": "一位患有“日光性荨麻疹”的女律师，只能戴着防护面具在正午行动，替底层弱者洗刷冤屈。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "辩护律师",
      "冤案平反",
      "女性视角",
      "社会派",
      "多线叙事"
    ]
  },
  {
    "title": "大雪海的凯纳星球的信者",
    "href": "detail/movie-1000.html",
    "cover": "100.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 动画 / 冒险",
    "category": "青春",
    "description": "当整个星球被雪海淹没，少年发现冰层下的巨兽才是拯救人类的最后希望。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "末日雪原",
      "环保寓言",
      "硬核科幻",
      "巨型生物"
    ]
  },
  {
    "title": "克里斯托",
    "href": "detail/movie-1001.html",
    "cover": "101.jpg",
    "year": "2025",
    "region": "西班牙, 墨西哥",
    "type": "电影",
    "genre": "恐怖, 宗教, 心理",
    "category": "音乐",
    "description": "一座会流泪的基督像，滴下的眼泪其实是腐蚀血肉的酸液，而神父听到了神像的低语：“这是我的身体，你们吃下去。”",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "圣像杀人",
      "天主教",
      "身体恐怖"
    ]
  },
  {
    "title": "灵气迫人",
    "href": "detail/movie-1002.html",
    "cover": "102.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 喜剧",
    "category": "喜剧",
    "description": "叛逆少女拥有最强阴阳眼，却被全港最“废”的风水师收为徒弟，两人组队替冤鬼“调解”而非驱赶。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "鬼片",
      "风水",
      "港式幽默",
      "家庭",
      "阴阳眼"
    ]
  },
  {
    "title": "蜜语纪",
    "href": "detail/movie-1003.html",
    "cover": "103.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情/职场",
    "category": "悬疑",
    "description": "被丈夫背叛的酒店大龄女高管，与比她小十岁的天才甜品师，在职场和情场上互相利用却动了真心。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "酒店业",
      "离异",
      "姐弟恋",
      "救赎",
      "熟男熟女"
    ]
  },
  {
    "title": "五星级杀人夜",
    "href": "detail/movie-1004.html",
    "cover": "104.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 喜剧",
    "category": "都市",
    "description": "在一个暴雨夜，一家米其林三星餐厅的后厨里，一位美食评论家被谋杀，而所有厨师都有动机，且都精通肢解技巧。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "密室",
      "米其林",
      "反转"
    ]
  },
  {
    "title": "花月流情",
    "href": "detail/movie-1005.html",
    "cover": "105.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 悬疑 / 文艺",
    "category": "动作",
    "description": "1930年代上海滩，一位盲眼歌女与一位失去记忆的富家少爷，在月圆之夜发现自己竟是对方被杀害的恋人。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "民国",
      "歌女",
      "富少",
      "替身",
      "复仇"
    ]
  },
  {
    "title": "曙光乍现",
    "href": "detail/movie-1006.html",
    "cover": "106.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑，犯罪，剧情",
    "category": "爱情",
    "description": "一个背负着污点的警察，在追查连环杀人案的十年里，终于等到了洗刷冤屈和自我救赎的曙光。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "刑侦",
      "追凶",
      "内心救赎",
      "人性"
    ]
  },
  {
    "title": "那夜的妻子",
    "href": "detail/movie-1007.html",
    "cover": "107.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 心理 / 伦理",
    "category": "都市",
    "description": "丈夫坚称车祸后醒来的女人不是自己的妻子，而妻子却记得这个家的每一个细节——除了那夜的事情。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "失忆妻子",
      "替身疑云",
      "枕边陌生人",
      "家庭录像",
      "精神分析"
    ]
  },
  {
    "title": "舞动心人生",
    "href": "detail/movie-1008.html",
    "cover": "108.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭, 歌舞",
    "category": "古装",
    "description": "被生活磨平棱角的单亲妈妈，在偷偷报名街舞比赛后，发现评委正是当年被她抛弃舞团的首席闺蜜。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "追梦",
      "母女和解",
      "街舞",
      "中年危机",
      "泪目结局"
    ]
  },
  {
    "title": "大唐迷雾",
    "href": "detail/movie-1009.html",
    "cover": "109.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑、古装",
    "category": "青春",
    "description": "长安城连续降雨，六名官员在密室中被杀，狄仁杰验尸后发现，凶手可能不是“人”。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "狄仁杰",
      "连环杀人",
      "密室推理",
      "唐朝诡事录"
    ]
  },
  {
    "title": "暗潮杀机",
    "href": "detail/movie-1010.html",
    "cover": "110.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪, 悬疑, 动作",
    "category": "纪录",
    "description": "卧底即将归队时发现自己被警队出卖，为了活命他必须在一艘满是杀手的货轮上找出内鬼。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "卧底",
      "黑吃黑",
      "警匪",
      "反转"
    ]
  },
  {
    "title": "美食总动员",
    "href": "detail/movie-1011.html",
    "cover": "111.jpg",
    "year": "2007",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧, 动画, 奇幻",
    "category": "剧情",
    "description": "一只嗅觉天才的老鼠，为了成为大厨，竟然操控一个年轻帮工做菜。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "料理",
      "梦想",
      "老鼠",
      "巴黎"
    ]
  },
  {
    "title": "神秘世界历险记3",
    "href": "detail/movie-1012.html",
    "cover": "112.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画， 冒险",
    "category": "家庭",
    "description": "上一集沉睡的神秘古神突然苏醒，要求女孩雨果交出她最珍贵的东西——父亲的记忆。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "奇幻",
      "儿童",
      "异世界",
      "亲情",
      "续集"
    ]
  },
  {
    "title": "红白黑黄第八季",
    "href": "detail/movie-1013.html",
    "cover": "113.jpg",
    "year": "2021",
    "region": "美国",
    "type": "动画剧集",
    "genre": "动作 / 冒险 / 奇幻",
    "category": "音乐",
    "description": "阿特拉斯陷落后，Ruby小队兵分三路，在冰雪荒原与权谋漩涡中寻找绝境翻盘的唯一机会。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "猎魔人",
      "少女战斗",
      "多线叙事",
      "发刀预警"
    ]
  },
  {
    "title": "伏妖开封府之御猫展昭",
    "href": "detail/movie-1014.html",
    "cover": "114.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "genre": "古装，悬疑，奇幻",
    "category": "历史",
    "description": "展昭被诬陷杀害御猫，为证清白他必须找到真凶，却发现真正的御猫是一只千年猫妖。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "展昭",
      "猫妖",
      "断案",
      "东方奇幻"
    ]
  },
  {
    "title": "红木林",
    "href": "detail/movie-1015.html",
    "cover": "115.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "励志",
    "description": "摄影师阿凯在阿里山深处的红木林迷路后获救，但女友惊恐地发现：回来的那个人，左耳耳洞位置不对。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "台湾民俗",
      "森林诡事",
      "双胞胎替身",
      "邪教元素"
    ]
  },
  {
    "title": "黄金潮",
    "href": "detail/movie-1016.html",
    "cover": "116.jpg",
    "year": "1999",
    "region": "澳大利亚/加拿大",
    "type": "电影",
    "genre": "西部/冒险/剧情",
    "category": "科幻",
    "description": "1850年代澳大利亚淘金潮，两个华人兄弟挖到一块拳头大的金块，然后噩梦开始了。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "淘金热",
      "华人劳工",
      "种族暴力",
      "兄弟情"
    ]
  },
  {
    "title": "浪漫足球热",
    "href": "detail/movie-1017.html",
    "cover": "117.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "爱情 / 运动 / 喜剧",
    "category": "励志",
    "description": "一名退役女足前锋为保住社区球场，阴差阳错成了废柴男足队的魔鬼教练。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "足球",
      "姐弟恋",
      "热血",
      "逆袭"
    ]
  },
  {
    "title": "来自火星的蜜拉",
    "href": "detail/movie-1018.html",
    "cover": "118.jpg",
    "year": "2027",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "奇幻， 剧情",
    "category": "青春",
    "description": "被诊断为孤独症的小女孩说她是火星人，等飞船修好就要离开地球，除非有人能证明地球值得留下。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "孤独症",
      "外星人",
      "治愈"
    ]
  },
  {
    "title": "猎魔",
    "href": "detail/movie-1019.html",
    "cover": "119.jpg",
    "year": "2025",
    "region": "波兰",
    "type": "剧集",
    "genre": "奇幻， 恐怖， 动作",
    "category": "励志",
    "description": "在东欧密林的深处，最后的猎魔人发现自己追杀的恶魔，正是十五年前被他亲手献祭以求复仇的妹妹。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "斯拉夫神话",
      "恶魔猎手",
      "民间传说",
      "黑色幻想",
      "契约诅咒"
    ]
  },
  {
    "title": "再见了妈妈",
    "href": "detail/movie-1020.html",
    "cover": "120.jpg",
    "year": "2021",
    "region": "越南",
    "type": "电影",
    "genre": "家庭剧情",
    "category": "科幻",
    "description": "同性恋儿子带着男友回老家参加母亲的葬礼，却发现母亲生前早已在棺材里藏好给两人的结婚证。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "出柜",
      "代际冲突",
      "越南传统",
      "催泪弹"
    ]
  },
  {
    "title": "巴阿里亚",
    "href": "detail/movie-1021.html",
    "cover": "121.jpg",
    "year": "2009",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 历史 / 家庭",
    "category": "动作",
    "description": "一个西西里家庭的祖孙三代，跨越法西斯、二战与冷战，用面包和石头对抗时代洪流。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "西西里",
      "三代人",
      "史诗"
    ]
  },
  {
    "title": "二十",
    "href": "detail/movie-1022.html",
    "cover": "122.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情/青春",
    "category": "都市",
    "description": "三个刚满二十岁的发小，一个想当演员，一个想继承家业，一个只想躺平，他们的二十岁一片狼藉。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "成年礼",
      "梦想",
      "现实",
      "迷茫",
      "友情"
    ]
  },
  {
    "title": "爱琳",
    "href": "detail/movie-1023.html",
    "cover": "123.jpg",
    "year": "2005",
    "region": "日本",
    "type": "电影",
    "genre": "爱情 / 奇幻 / 剧情",
    "category": "音乐",
    "description": "她是一个“透明人”，不是身体隐形，而是存在感低到所有人都看不见她，直到一个盲人琴师“看”到了她。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "透明人",
      "孤独星球",
      "都市童话"
    ]
  },
  {
    "title": "被争论的女人",
    "href": "detail/movie-1024.html",
    "cover": "124.jpg",
    "year": "2027",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情 / 伦理 / 悬疑",
    "category": "都市",
    "description": "一位功成名就的女指挥家，被年轻时的情人指控性侵，而这位情人，也是个女人。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "女性",
      "me too",
      "媒体审判",
      "艺术圈",
      "真相"
    ]
  },
  {
    "title": "迈向一星料理",
    "href": "detail/movie-1025.html",
    "cover": "125.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "美食 / 励志",
    "category": "剧情",
    "description": "一个被米其林餐厅开除的二厨，回到破败的家乡小食堂，带着一群乌合之众挑战三星餐厅的降维打击。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "法餐",
      "米其林",
      "师徒",
      "逆袭"
    ]
  },
  {
    "title": "岁月流声",
    "href": "detail/movie-1026.html",
    "cover": "126.jpg",
    "year": "2015",
    "region": "香港",
    "type": "电影",
    "genre": "剧情 / 家庭 / 音乐",
    "category": "都市",
    "description": "一对父子因时代与观念决裂三十年后，一间即将被拆迁的老唱片行让他们重新站在了一起。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "亲情修复",
      "时代变迁",
      "黑胶唱片"
    ]
  },
  {
    "title": "与君相恋100次国语",
    "href": "detail/movie-1027.html",
    "cover": "127.jpg",
    "year": "2021",
    "region": "中国内地",
    "type": "电影",
    "genre": "爱情, 奇幻",
    "category": "奇幻",
    "description": "为了拯救注定死于车祸的恋人，理工男江直用自制时间机器不断回到过去，却陷入更深的绝望。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "翻拍",
      "时间轮回",
      "纯爱",
      "穿越",
      "治愈"
    ]
  },
  {
    "title": "恶魔烟筒420",
    "href": "detail/movie-1028.html",
    "cover": "128.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻 / 悬疑",
    "category": "历史",
    "description": "北方工业城市的废弃烟筒每到凌晨4:20就会冒烟，进入的人会困在同一天。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "工业废墟",
      "时间循环",
      "环境",
      "阴谋"
    ]
  },
  {
    "title": "虚线的恶意",
    "href": "detail/movie-1029.html",
    "cover": "129.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 心理 / 职场",
    "category": "古装",
    "description": "出版社编辑收到一份匿名稿件，全篇只有一条虚线，但她每删除一个字，现实中就有一人死去。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "网络暴力",
      "阴湿恐怖",
      "全员嫌疑人"
    ]
  },
  {
    "title": "请不要在病房里念佛",
    "href": "detail/movie-1030.html",
    "cover": "130.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集 剧情, 悬疑",
    "genre": "剧情, 悬疑",
    "category": "科幻",
    "description": "临终关怀病房里，一位“念佛”就能治病的护士，让患者们的“遗言”成为了一连串死亡预告。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "医疗",
      "宗教",
      "人性",
      "反转",
      "社会派"
    ]
  },
  {
    "title": "蛇蟒星际",
    "href": "detail/movie-1031.html",
    "cover": "131.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 冒险",
    "category": "古装",
    "description": "人类殖民外星，却唤醒了一种古老如神明的蛇形星际生物，它以吞噬星球为食。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "太空",
      "基因",
      "蛇形生物",
      "探险",
      "史诗"
    ]
  },
  {
    "title": "纵横谍海",
    "href": "detail/movie-1032.html",
    "cover": "132.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 谍战 / 动作",
    "category": "科幻",
    "description": "军统王牌特工“飞鹰”叛变后，我方安插的“影子”却收到命令：继续伪装成“飞鹰”潜伏回去。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "双面间谍",
      "烧脑",
      "民国",
      "智斗"
    ]
  },
  {
    "title": "最后的女祭司",
    "href": "detail/movie-1033.html",
    "cover": "133.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "genre": "奇幻， 冒险",
    "category": "都市",
    "description": "考古学教授发现自己是远古女祭司转世，必须集齐散落全球的圣物以封印苏醒的古神。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "古文明",
      "解密",
      "女性力量"
    ]
  },
  {
    "title": "一支丁香花",
    "href": "detail/movie-1034.html",
    "cover": "134.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 悬疑, 奇幻",
    "category": "历史",
    "description": "校园民谣歌手意外死亡，魂魄附在他写的那首《一支丁香花》里，只有爱人唱对歌词才能复活。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "民谣",
      "校园",
      "轮回",
      "唯美悲剧"
    ]
  },
  {
    "title": "屋顶上的绿宝石",
    "href": "detail/movie-1035.html",
    "cover": "135.jpg",
    "year": "2006",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情, 家庭",
    "category": "励志",
    "description": "海南穷小子与珠宝商千金相爱，被陷害入狱十年，出狱后发现她已是仇人的妻子，而他们的女儿就住在隔壁。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "年代剧",
      "珠宝",
      "阴谋",
      "虐恋",
      "海南风光"
    ]
  },
  {
    "title": "艾雅",
    "href": "detail/movie-1036.html",
    "cover": "136.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 冒险",
    "category": "青春",
    "description": "云南雨林少女为拯救受伤的小象，与它结伴踏上寻找象群的奇幻旅程。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "少数民族",
      "大象",
      "生态",
      "治愈",
      "亲情"
    ]
  },
  {
    "title": "神偷盗宝",
    "href": "detail/movie-1037.html",
    "cover": "137.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 喜剧, 犯罪",
    "category": "剧情",
    "description": "退休神偷被CIA招募，任务是从金库中偷走一枚即将引爆的微型核弹。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "大盗",
      "高科技",
      "团队合作",
      "爆米花"
    ]
  },
  {
    "title": "艾拉的青春日志2.0",
    "href": "detail/movie-1038.html",
    "cover": "138.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "青春校园",
    "category": "青春",
    "description": "2024年的少女翻出2008年母亲的青春日记，发现每一页都写着和自己一模一样的烦恼。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "日记",
      "穿越",
      "自我和解",
      "2008",
      "2024"
    ]
  },
  {
    "title": "内德的步枪",
    "href": "detail/movie-1039.html",
    "cover": "139.jpg",
    "year": "2016",
    "region": "英国",
    "type": "电影",
    "genre": "战争, 剧情",
    "category": "青春",
    "description": "一战战壕里，一名德军狙击手和一名英军狙击手用步枪写下血淋淋的“情书”。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "一战",
      "狙击手",
      "心理惊悚",
      "反战"
    ]
  },
  {
    "title": "辛亥革命",
    "href": "detail/movie-1040.html",
    "cover": "140.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "历史 / 战争 / 传记",
    "category": "都市",
    "description": "不拍起义全过程，而是聚焦起义前七天里，七个普通革命者的选择与牺牲。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "近代史",
      "革命者",
      "群像",
      "家国情怀"
    ]
  },
  {
    "title": "女孩舞步",
    "href": "detail/movie-1041.html",
    "cover": "141.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 歌舞, 励志",
    "category": "古装",
    "description": "五个来自不同背景的失败少女组成了街舞团，她们的对手不是别人，而是这个瞧不起她们的世界。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "街舞",
      "女性",
      "友谊",
      "热血",
      "逆袭"
    ]
  },
  {
    "title": "绿色春宫",
    "href": "detail/movie-1042.html",
    "cover": "142.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情 / 情色 / 艺术",
    "category": "爱情",
    "description": "一对感情枯竭的夫妇搬进温室般的透明豪宅，他们的情欲竟开始影响整个生态系统。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "欲望迷宫",
      "生态寓言",
      "视觉奇观",
      "哲学隐喻"
    ]
  },
  {
    "title": "诱惑医生100招",
    "href": "detail/movie-1043.html",
    "cover": "143.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "浪漫, 喜剧",
    "category": "音乐",
    "description": "为拿下高冷男神外科医生，母胎单身的导演系女生制定了100条科学“诱惑”公式。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "女追男",
      "医院",
      "欢喜冤家"
    ]
  },
  {
    "title": "搜索2020",
    "href": "detail/movie-1044.html",
    "cover": "144.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪",
    "category": "纪录",
    "description": "一名直播博主为流量人肉搜索一位“地铁咸猪手”，却意外发现对方是在执行秘密任务的便衣警察。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "网络暴力",
      "人肉搜索",
      "直播"
    ]
  },
  {
    "title": "荡妇狂夫",
    "href": "detail/movie-1045.html",
    "cover": "145.jpg",
    "year": "1967",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，情色，伦理",
    "category": "励志",
    "description": "一对夫妻约定互相出轨，却发现自己根本无法接受对方真的和别人上床。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "经典",
      "婚姻",
      "背叛",
      "实验",
      "新浪潮"
    ]
  },
  {
    "title": "绿灯侠：首次飞行",
    "href": "detail/movie-1046.html",
    "cover": "146.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动画 / 科幻 / 超级英雄",
    "category": "剧情",
    "description": "试飞员哈尔·乔丹获得第一枚绿灯戒指时，发现它需要支付代价——每用一次，就失去一段记忆。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "DC宇宙",
      "起源故事",
      "绿灯军团",
      "外星警察",
      "意志力"
    ]
  },
  {
    "title": "战斗吧歌姬！第一季",
    "href": "detail/movie-1047.html",
    "cover": "147.jpg",
    "year": "2018",
    "region": "中国",
    "type": "动画剧集",
    "genre": "偶像，音乐，科幻",
    "category": "青春",
    "description": "为了对抗吞噬人类情感的“梦魇”，五位少女必须同时成为顶级偶像和超能力战士。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "虚拟偶像",
      "少女",
      "战斗",
      "练习生"
    ]
  },
  {
    "title": "泼妇碧安卡：俄国恨运游",
    "href": "detail/movie-1048.html",
    "cover": "148.jpg",
    "year": "2026",
    "region": "美国 / 俄罗斯",
    "type": "剧集",
    "genre": "动作喜剧",
    "category": "都市",
    "description": "纽约最凶悍的女杀手被迫陪寡头女友的毒舌老妈坐跨国火车，车上全是她以前得罪过的人。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "女杀手",
      "复仇",
      "旅游",
      "搞笑暴力"
    ]
  },
  {
    "title": "逗猎吸血鬼",
    "href": "detail/movie-1049.html",
    "cover": "149.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 奇幻, 动作",
    "category": "青春",
    "description": "一个信奉“万物皆可烧烤”的东北小镇青年，把误入小镇的欧洲吸血鬼当成了稀有食材。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "喜剧",
      "吸血鬼",
      "东北",
      "民俗",
      "中西结合"
    ]
  },
  {
    "title": "糖耳朵",
    "href": "detail/movie-1050.html",
    "cover": "150.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭, 儿童",
    "category": "奇幻",
    "description": "90年代北京胡同里，一个爱吃糖耳朵的小女孩，用自己的方式维系着父母岌岌可危的婚姻。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "胡同",
      "童年",
      "亲情"
    ]
  },
  {
    "title": "封锁",
    "href": "detail/movie-1051.html",
    "cover": "1.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "剧集",
    "genre": "惊悚 / 悬疑 / 犯罪",
    "category": "悬疑",
    "description": "一家四口被困在高速坍塌的隧道中，车外是化学毒气，车内氧气只剩90分钟。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "密室",
      "限时营救",
      "反恐",
      "高空恐惧"
    ]
  },
  {
    "title": "足迹",
    "href": "detail/movie-1052.html",
    "cover": "2.jpg",
    "year": "2019",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑 / 剧情",
    "category": "科幻",
    "description": "一座暴风雪山庄里，富豪、年轻情敌和神秘女仆，三人围绕着遗嘱和脚印，上演了七重反转。 富豪设局羞辱勾引自己妻子的情人，却没想到，雪地上多出来的第三个人的足迹，才是一切噩梦的开始。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "暴雪山庄",
      "老戏骨",
      "反转",
      "遗产",
      "心理战"
    ]
  },
  {
    "title": "我们恋爱的履历",
    "href": "detail/movie-1053.html",
    "cover": "3.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情, 喜剧",
    "category": "爱情",
    "description": "为了博取同情票，过气女星找来前男友伪装恩爱夫妻，结果简历都是编的。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "娱乐圈",
      "契约恋爱",
      "破镜重圆",
      "欢喜冤家",
      "青梅竹马"
    ]
  },
  {
    "title": "青春恋歌",
    "href": "detail/movie-1054.html",
    "cover": "4.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情 / 年代",
    "category": "纪录",
    "description": "1997年夏天，小镇男孩阿远通过电台点歌，与一个只闻其声的女孩展开长达三年的暧昧。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "校园",
      "90年代",
      "错过",
      "怀旧"
    ]
  },
  {
    "title": "打工小哥第二季",
    "href": "detail/movie-1055.html",
    "cover": "5.jpg",
    "year": "2018",
    "region": "日本",
    "type": "动画剧集",
    "genre": "喜剧、日常",
    "category": "悬疑",
    "description": "在东京玩具公司打工的小哥“阿源”，第二季继续被部长压榨、被后辈崇拜、被老鼠偷走便当里的炸虾。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "职场",
      "萌系",
      "泡面番",
      "续作",
      "打工人共鸣"
    ]
  },
  {
    "title": "骇故事之无罪日",
    "href": "detail/movie-1056.html",
    "cover": "6.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑、犯罪",
    "category": "动作",
    "description": "陪审员在合议时发现自己陷入了时间循环，而每次循环死者都不一样。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "循环",
      "审判",
      "陪审团",
      "推理",
      "反转"
    ]
  },
  {
    "title": "真假学园0木更津乱斗篇",
    "href": "detail/movie-1057.html",
    "cover": "7.jpg",
    "year": "2015",
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 喜剧 / 校园",
    "category": "喜剧",
    "description": "木更津最强女番长与转校生的一战，意外揭开了当地两所高校长达三十年的宿怨谜团。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "女高中生",
      "不良番长",
      "热血群架",
      "无厘头",
      "地区对抗"
    ]
  },
  {
    "title": "剪刀男",
    "href": "detail/movie-1058.html",
    "cover": "8.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑，惊悚",
    "category": "动作",
    "description": "专杀美男子的“剪刀男”被抓获后，监狱外却出现了更加残忍的模仿犯，而且似乎认识真凶。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "连环杀手",
      "病娇",
      "反转",
      "复仇"
    ]
  },
  {
    "title": "修车铺",
    "href": "detail/movie-1059.html",
    "cover": "9.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 悬疑",
    "category": "家庭",
    "description": "城中村修车铺三兄弟，白天修车，晚上替黑道“修”麻烦。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "底层",
      "罪案",
      "兄弟情",
      "黑色幽默"
    ]
  },
  {
    "title": "终极名单第一季",
    "href": "detail/movie-1060.html",
    "cover": "10.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电视剧",
    "genre": "动作 / 惊悚 / 军事",
    "category": "家庭",
    "description": "海豹突击队员全队在一次任务中阵亡，只有他活下来，却发现任务本身就是一场高层清洗。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "海豹突击队",
      "复仇",
      "阴谋",
      "硬核",
      "暴力"
    ]
  },
  {
    "title": "恋爱的温度",
    "href": "detail/movie-1061.html",
    "cover": "11.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 剧情",
    "category": "都市",
    "description": "分手后的情侣被迫在同一家公司竞争一个岗位，为隐瞒过去不得不假装陌生人。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "都市情感",
      "温度隐喻",
      "分手复合",
      "现实向"
    ]
  },
  {
    "title": "小鬼上路",
    "href": "detail/movie-1062.html",
    "cover": "12.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 冒险 / 家庭",
    "category": "纪录",
    "description": "两个捣蛋鬼偷开爷爷的房车，阴差阳错卷入一场横跨美国的寻宝之旅。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "公路片",
      "熊孩子",
      "搞笑",
      "成长",
      "暑假"
    ]
  },
  {
    "title": "卡门还乡",
    "href": "detail/movie-1063.html",
    "cover": "13.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情喜剧",
    "category": "科幻",
    "description": "在世界舞台演出的顶级佛拉明戈舞者被迫回到保守闭塞的家乡小镇，却发现这里的规矩比舞步还难跳。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "返乡",
      "文化冲突",
      "亲情",
      "治愈",
      "佛拉明戈"
    ]
  },
  {
    "title": "磁路丰收",
    "href": "detail/movie-1064.html",
    "cover": "14.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻 / 悬疑",
    "category": "悬疑",
    "description": "东北农业大学教授发明了“磁路催熟”技术，一夜之间让庄稼成熟，也一夜之间让方圆百里内的所有电子设备和人体神经陷入紊乱。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "农业科幻",
      "电磁",
      "东北",
      "伦理困境",
      "硬科幻"
    ]
  },
  {
    "title": "降龙觉醒",
    "href": "detail/movie-1065.html",
    "cover": "15.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画 / 奇幻 / 动作",
    "category": "古装",
    "description": "无法化形的龙族少年阿旺，在村庄被屠后意外觉醒了上古禁忌的“吞龙”之力。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "东方玄幻",
      "龙族",
      "少年热血",
      "觉醒"
    ]
  },
  {
    "title": "夺命杀机",
    "href": "detail/movie-1066.html",
    "cover": "16.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "励志",
    "description": "七个陌生人被关在废弃精神病院，每人手腕上的屏幕显示着其他人犯下的“无罪之罪”。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "密室",
      "直播杀人",
      "反转",
      "社会实验"
    ]
  },
  {
    "title": "超感应医学生",
    "href": "detail/movie-1067.html",
    "cover": "17.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "医疗, 奇幻, 悬疑",
    "category": "历史",
    "description": "医学院新生只要触碰患者就能看到其过往病史和未来病情，但这个能力正让他分不清现实与幻象。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "超能力",
      "医学院",
      "病例推理"
    ]
  },
  {
    "title": "耶稣重生路",
    "href": "detail/movie-1068.html",
    "cover": "18.jpg",
    "year": "2024",
    "region": "巴西",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "category": "悬疑",
    "description": "一个自称耶稣重生的里约流浪汉，用直播奇迹的方式挑战宗教与权力。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "宗教",
      "现代社会",
      "身份认同",
      "寓言"
    ]
  },
  {
    "title": "亚马逊：世上最长的河流",
    "href": "detail/movie-1069.html",
    "cover": "19.jpg",
    "year": "2026",
    "region": "英国",
    "type": "纪录片",
    "genre": "纪录, 自然, 冒险",
    "category": "音乐",
    "description": "一支科考队耗时365天，走完亚马逊河全程，发现了改变人类认知的水下文明遗迹。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "亚马逊河",
      "原始部落",
      "生物多样性",
      "探险",
      "生态危机"
    ]
  },
  {
    "title": "在法国米歇尔是个男性名字",
    "href": "detail/movie-1070.html",
    "cover": "20.jpg",
    "year": "2024",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情 / 家庭 / 幽默",
    "category": "剧情",
    "description": "七十岁的保守派老父亲米歇尔发现，自己离家出走十五年的“儿子”，如今以“米歇尔”这个名字作为女性身份回来了。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "变性",
      "父女",
      "温情",
      "身份认同"
    ]
  },
  {
    "title": "花月于飞",
    "href": "detail/movie-1071.html",
    "cover": "21.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 古装",
    "category": "剧情",
    "description": "大唐女诗妓爱上了一名为她赎身的侠客，成亲当晚却发现侠客要杀的是她，救的也是她。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "唐传奇",
      "诗妓",
      "侠客",
      "悲剧美学"
    ]
  },
  {
    "title": "氰化欢乐秀第一季",
    "href": "detail/movie-1072.html",
    "cover": "22.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动画，黑色幽默",
    "category": "都市",
    "description": "一个能让人笑到氰化物中毒的脱口秀，每期嘉宾都必须死一遍。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "成人向",
      "单元剧",
      "政治不正确"
    ]
  },
  {
    "title": "布道家",
    "href": "detail/movie-1073.html",
    "cover": "23.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 宗教",
    "category": "音乐",
    "description": "一个破产的电视布道家为了筹钱还债，假装见到了圣母玛利亚，结果圣母真的出现了。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "布道",
      "电视福音",
      "骗局",
      "信仰",
      "家庭"
    ]
  },
  {
    "title": "最后的恐龙",
    "href": "detail/movie-1074.html",
    "cover": "24.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、冒险、灾难",
    "category": "励志",
    "description": "亿万富翁克隆出活的恐龙打造主题公园，但一场电磁风暴让所有防御系统失效，游客陷入血腥猎杀。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "克隆恐龙",
      "孤岛",
      "逃生",
      "人性",
      "视觉奇观"
    ]
  },
  {
    "title": "地球未知档案：宇宙时光机",
    "href": "detail/movie-1075.html",
    "cover": "25.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影/纪录片",
    "genre": "科幻, 纪录片",
    "category": "剧情",
    "description": "一名天体物理学家声称造出了时间机器，纪录片团队跟拍六个月后，发现他可能真的穿越了，但回来的不是同一个人。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "时间旅行",
      "宇宙学",
      "伪纪录片"
    ]
  },
  {
    "title": "假面骑士加布",
    "href": "detail/movie-1076.html",
    "cover": "26.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "特摄 / 动作 / 科幻",
    "category": "科幻",
    "description": "令和第六位假面骑士，使用“糖果”道具变身，每吃一颗糖，就要消耗一份真实的人类记忆。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "糖果主题",
      "吞噬欲望",
      "怪人设计",
      "子供向暗黑"
    ]
  },
  {
    "title": "义士安重根",
    "href": "detail/movie-1077.html",
    "cover": "27.jpg",
    "year": "2004",
    "region": "韩国",
    "type": "电影",
    "genre": "历史，传记，剧情",
    "category": "家庭",
    "description": "1909年哈尔滨火车站，安重根扣下扳机，但子弹穿过伊藤博文后，却击中了一个意想不到的人。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "抗日义士",
      "哈尔滨刺杀",
      "伊藤博文",
      "民族英雄"
    ]
  },
  {
    "title": "小提琴天后慕特：爱乐一生",
    "href": "detail/movie-1078.html",
    "cover": "28.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "剧情, 音乐, 传记",
    "category": "历史",
    "description": "一场意外失聪后，天才小提琴家慕特被迫重新学习聆听自己内心的乐章。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "古典音乐",
      "女性成长",
      "艺术人生",
      "师徒情深"
    ]
  },
  {
    "title": "格鲁特码头",
    "href": "detail/movie-1079.html",
    "cover": "29.jpg",
    "year": "2025",
    "region": "美国",
    "type": "动画短片剧集",
    "genre": "喜剧 / 奇幻 / 冒险",
    "category": "纪录",
    "description": "小格鲁特被送到一座神秘的跨维度码头当搬运工，每天都要应付各种奇葩托运物。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "格鲁特",
      "码头日常",
      "默片风格"
    ]
  },
  {
    "title": "宝贝的爱",
    "href": "detail/movie-1080.html",
    "cover": "30.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "青春",
    "description": "单身邮差在邮箱里发现弃婴，本想报警，却因为一个拥抱而决定成为这个婴儿的“临时父亲”。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "弃婴",
      "邮差",
      "成长"
    ]
  },
  {
    "title": "鲁邦三世：过去的监狱",
    "href": "detail/movie-1081.html",
    "cover": "31.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影 / 动画",
    "genre": "动作 / 冒险 / 喜剧",
    "category": "古装",
    "description": "鲁邦三世为了偷一颗据说能打开“时间监狱”的钻石，主动进了全球最森严的监狱。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "怪盗",
      "越狱",
      "宿敌合作",
      "经典IP重启"
    ]
  },
  {
    "title": "吱吱的声音",
    "href": "detail/movie-1082.html",
    "cover": "32.jpg",
    "year": "2015",
    "region": "波兰",
    "type": "电影",
    "genre": "恐怖, 心理",
    "category": "纪录",
    "description": "新婚夫妇搬进一间老公寓后，每晚都能听到墙壁里传来老鼠吱吱叫的声音，但物业说这栋楼根本没有老鼠。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "超自然",
      "公寓怪谈",
      "波兰电影",
      "压抑"
    ]
  },
  {
    "title": "樱桃成熟时",
    "href": "detail/movie-1083.html",
    "cover": "33.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情，剧情，情色",
    "category": "纪录",
    "description": "在即将拆迁的九龙城寨旁，一个卖水果的沉默寡妇，与隔壁17岁的少年，在一场暴雨中交换了人生的“核”。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "禁忌之恋",
      "中年危机",
      "女性觉醒",
      "水果隐喻",
      "潮湿"
    ]
  },
  {
    "title": "黑岩",
    "href": "detail/movie-1084.html",
    "cover": "34.jpg",
    "year": "1955",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 西部",
    "category": "奇幻",
    "description": "一个独臂陌生人来到西南小镇寻找一位日本裔老兵，却发现全镇人都在隐瞒一个谋杀案。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "战后创伤",
      "小镇秘密",
      "种族歧视",
      "独行侠"
    ]
  },
  {
    "title": "纸袋人",
    "href": "detail/movie-1085.html",
    "cover": "35.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "短片",
    "genre": "悬疑, 温情",
    "category": "剧情",
    "description": "一个永远用纸袋套住头的男人，每天在地铁站为陌生人分发写着他们内心秘密的卡片。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "都市传说",
      "社恐",
      "治愈",
      "纸袋",
      "孤独"
    ]
  },
  {
    "title": "孽欲凶杀",
    "href": "detail/movie-1086.html",
    "cover": "36.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "category": "历史",
    "description": "富豪死在情妇床上，四个嫌疑人各执一词，每个版本里自己都是无辜的而别人是凶手。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "情杀",
      "罗生门",
      "翻转",
      "多视角",
      "心理"
    ]
  },
  {
    "title": "朱朱宠物",
    "href": "detail/movie-1087.html",
    "cover": "37.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧、动画、家庭",
    "category": "家庭",
    "description": "小学生朱朱的仓鼠一夜之间能说人话了，还声称自己是来自外星的流亡王子，要发动一场“萌萌的”政变。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "萌宠",
      "冒险",
      "变身",
      "友情",
      "搞笑"
    ]
  },
  {
    "title": "旅人",
    "href": "detail/movie-1088.html",
    "cover": "38.jpg",
    "year": "2024",
    "region": "法国， 德国",
    "type": "电影",
    "genre": "冒险， 剧情， 公路",
    "category": "古装",
    "description": "一位叙利亚难民在走投无路时，从一位垂死的德国老人手中接过了一份遗嘱和一串神秘的钥匙。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "移民",
      "寻找自我",
      "欧洲",
      "流浪"
    ]
  },
  {
    "title": "权力的游戏第四季",
    "href": "detail/movie-1089.html",
    "cover": "39.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情 / 奇幻 / 战争",
    "category": "奇幻",
    "description": "七国混战加剧，龙母解放奴隶，长城之外夜王集结大军，所有人的命运在此转折。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "史诗",
      "多线叙事",
      "权力斗争",
      "龙",
      "叛变"
    ]
  },
  {
    "title": "控制点",
    "href": "detail/movie-1090.html",
    "cover": "40.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 惊悚",
    "category": "爱情",
    "description": "一款名为“控制点”的脑机芯片可以消除人类所有冲动行为，直到有人发现芯片里藏着第三个按钮。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "脑机接口",
      "自由意志",
      "伦理",
      "反转"
    ]
  },
  {
    "title": "糊涂劫车案",
    "href": "detail/movie-1091.html",
    "cover": "41.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "黑色喜剧 / 犯罪",
    "category": "音乐",
    "description": "三个笨贼劫持网约车，却发现车里坐着五拨互不相识的“危险人物”。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "荒诞",
      "连环误会",
      "小人物",
      "多线叙事"
    ]
  },
  {
    "title": "幻术先生",
    "href": "detail/movie-1092.html",
    "cover": "42.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 奇幻",
    "category": "古装",
    "description": "民国幻术宗师意外卷入军阀宝藏争夺，却发现自己最拿手的障眼法正一步步吞噬现实。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "幻术",
      "民国",
      "复仇",
      "魔术",
      "传承"
    ]
  },
  {
    "title": "心碎了怎么办",
    "href": "detail/movie-1093.html",
    "cover": "43.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情",
    "category": "音乐",
    "description": "她开了一家“心碎回收站”，结果回收来的心碎都长成了新的心脏。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "失恋",
      "治愈",
      "黑色幽默"
    ]
  },
  {
    "title": "毛骨悚然的帕格尼尼",
    "href": "detail/movie-1094.html",
    "cover": "44.jpg",
    "year": "2026",
    "region": "意大利",
    "type": "电影",
    "genre": "恐怖，音乐",
    "category": "历史",
    "description": "一位失意的小提琴手得到了传说中帕格尼尼的琴弦，却发现每拉一个音符，身体就有一处器官开始变异。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "古典乐",
      "魔鬼契约",
      "身体恐怖"
    ]
  },
  {
    "title": "冲破铁幕",
    "href": "detail/movie-1095.html",
    "cover": "45.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "惊悚/历史",
    "category": "音乐",
    "description": "1961年柏林墙竖起当夜，一名美国间谍被困东柏林，他唯一的逃生之路是地下排污管道。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "冷战",
      "间谍",
      "东德",
      "逃亡",
      "暗黑"
    ]
  },
  {
    "title": "家住小区",
    "href": "detail/movie-1096.html",
    "cover": "46.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 家庭 / 都市",
    "category": "动作",
    "description": "一个高档小区里，退休大妈、程序员、网红主播和保安队长被迫组成“业委会调解组”。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "邻里关系",
      "轻喜剧",
      "社区生活"
    ]
  },
  {
    "title": "贼至尊粤语",
    "href": "detail/movie-1097.html",
    "cover": "47.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "犯罪 / 动作",
    "category": "青春",
    "description": "神偷家族的退休宴上，千亿赃款被黑客黑走，全港黑白两道同时向他们开火。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "盗贼",
      "家族",
      "港风"
    ]
  },
  {
    "title": "我的过错",
    "href": "detail/movie-1098.html",
    "cover": "48.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "genre": "爱情，剧情",
    "category": "爱情",
    "description": "叛逆少女搬进富豪继父家，却与冷傲的继兄产生了致命的吸引力。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "继兄妹恋",
      "禁忌之恋",
      "激情",
      "青春"
    ]
  },
  {
    "title": "花月佳期粤语",
    "href": "detail/movie-1099.html",
    "cover": "49.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "爱情/喜剧",
    "category": "爱情",
    "description": "现代女网红穿越到60年代粤剧团，必须和冷面小生演好最后一出戏才能回到未来。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "粤语",
      "穿越",
      "戏班",
      "欢喜冤家"
    ]
  },
  {
    "title": "火线追凶之死亡地带",
    "href": "detail/movie-1100.html",
    "cover": "50.jpg",
    "year": "2019",
    "region": "中国",
    "type": "电影",
    "genre": "悬疑/动作",
    "category": "家庭",
    "description": "城市出现“死亡地带”，方圆一公里内所有电子设备失灵，而杀手只在那个地带杀人。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "刑侦",
      "连环杀手",
      "法医",
      "限时破案"
    ]
  },
  {
    "title": "爱没有明天",
    "href": "detail/movie-1101.html",
    "cover": "51.jpg",
    "year": "1999",
    "region": "中国香港",
    "type": "剧集",
    "genre": "爱情，剧情",
    "category": "爱情",
    "description": "一对情侣约定在女方失明前，用三天时间走遍香港所有他们曾一起骂过的烂地方。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "绝症",
      "虐恋",
      "约定"
    ]
  },
  {
    "title": "乌龙潜艇",
    "href": "detail/movie-1102.html",
    "cover": "52.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧、战争",
    "category": "悬疑",
    "description": "渔民自制“木头潜艇”伏击日军炮舰，结果沉了一半浮了一半。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "山寨潜艇",
      "抗日战争",
      "爆笑"
    ]
  },
  {
    "title": "气球大冒险",
    "href": "detail/movie-1103.html",
    "cover": "53.jpg",
    "year": "2025",
    "region": "美国",
    "type": "动画电影",
    "genre": "动画 / 冒险 / 家庭",
    "category": "科幻",
    "description": "脾气暴躁的退休老头意外被十万只气球带走，与他同行的只有一个婴儿和一只会说话的狗。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "气球",
      "飞行",
      "老人与狗",
      "环游世界",
      "治愈"
    ]
  },
  {
    "title": "小子",
    "href": "detail/movie-1104.html",
    "cover": "54.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧，校园",
    "category": "悬疑",
    "description": "四十岁的黑道退休大叔穿上高中校服，只为替死去的儿子拿回毕业证书。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "废柴逆袭",
      "不良少年",
      "四十岁高中生"
    ]
  },
  {
    "title": "男人女人：恋爱手册",
    "href": "detail/movie-1105.html",
    "cover": "55.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情 / 喜剧 / 都市",
    "category": "古装",
    "description": "一本意外流传出去的绝密“恋爱手册”，让都市里的男男女女开始了一场关于真心的计算游戏。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "单元剧",
      "相亲",
      "男女思维",
      "情感教程"
    ]
  },
  {
    "title": "已故的帕斯卡尔",
    "href": "detail/movie-1106.html",
    "cover": "56.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情，奇幻，哲理",
    "category": "都市",
    "description": "一个厌倦了自己生活的图书管理员，冒用死者的身份“重活一次”，却发现那个死者比他更惨。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "分身",
      "假死",
      "重生",
      "身份"
    ]
  },
  {
    "title": "杀瓜",
    "href": "detail/movie-1107.html",
    "cover": "57.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 黑色幽默",
    "category": "音乐",
    "description": "偏僻的瓜棚里，一个老实瓜农目睹了村霸、老板、逃犯和警察的轮番登场，手里的瓜变成了凶器。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "乡村",
      "欲望",
      "现实",
      "荒诞"
    ]
  },
  {
    "title": "点指贼贼",
    "href": "detail/movie-1108.html",
    "cover": "58.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 动作 / 犯罪",
    "category": "古装",
    "description": "号称“贼王”的师徒三人接到神秘任务，要在中环闹市街头偷走一块号称“不存在的广告牌”。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "盗贼",
      "乌龙",
      "港式幽默"
    ]
  },
  {
    "title": "信长的忍者",
    "href": "detail/movie-1109.html",
    "cover": "59.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "genre": "历史 / 喜剧 / 动作",
    "category": "爱情",
    "description": "少女忍者千鸟跟随织田信长，用超高速忍术和脱线头脑，见证并搅动天下统一大业。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "战国",
      "萌化",
      "忍术"
    ]
  },
  {
    "title": "饮食男女：好远又好近",
    "href": "detail/movie-1110.html",
    "cover": "60.jpg",
    "year": "2012",
    "region": "中国大陆 / 台湾",
    "type": "电影",
    "genre": "剧情 / 爱情 / 家庭",
    "category": "家庭",
    "description": "一位素食大厨与一位女强人，在杭州与台北之间，谈了一场迟来五十年的恋爱。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "素食",
      "两岸",
      "老年爱情",
      "李安致敬",
      "云门舞集"
    ]
  },
  {
    "title": "我们要上校",
    "href": "detail/movie-1111.html",
    "cover": "61.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 战争 / 黑色幽默",
    "category": "科幻",
    "description": "一个影视城群演组成的“抗日神剧剧组”被误当成真游击队，日军大佐发誓要活捉“李云龙同志”。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "抗日神剧解构",
      "荒诞",
      "乌龙",
      "伪纪录片",
      "反战"
    ]
  },
  {
    "title": "万圣节作战第一季",
    "href": "detail/movie-1112.html",
    "cover": "62.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "genre": "动作 / 科幻 / 恐怖",
    "category": "喜剧",
    "description": "一个秘密政府机构负责处理每年万圣节“泄漏”到人间的真实怪物，而今年的威胁是“节日之神”。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "万圣节",
      "特工",
      "怪物",
      "节日宇宙",
      "爽剧"
    ]
  },
  {
    "title": "加油！小店",
    "href": "detail/movie-1113.html",
    "cover": "63.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 生活",
    "category": "剧情",
    "description": "上海弄堂里八家濒临倒闭的小店，在一位神秘食客的笔记里被悄悄“救活”。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "市井",
      "创业",
      "温情",
      "上海"
    ]
  },
  {
    "title": "致命之旅",
    "href": "detail/movie-1114.html",
    "cover": "64.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "category": "音乐",
    "description": "一对濒临离婚的夫妻踏上环西班牙自驾游，妻子计划在途中杀死丈夫，却发现他也有同样的计划。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "公路片",
      "夫妻",
      "谋杀",
      "反转"
    ]
  },
  {
    "title": "反同运动的前世今生",
    "href": "detail/movie-1115.html",
    "cover": "65.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "纪录片, 历史",
    "category": "家庭",
    "description": "从精神病院到政治操弄，揭秘美国反同运动背后价值数百亿美元的利益链条与政治阴谋。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "LGBTQ",
      "政治史",
      "社会运动",
      "深度调查",
      "宗教右翼"
    ]
  },
  {
    "title": "江上琵琶",
    "href": "detail/movie-1116.html",
    "cover": "66.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 古装, 悬疑",
    "category": "剧情",
    "description": "乐坊头牌惨死，一把血琵琶引出二十年前江湖与宫廷的恩怨情仇。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "乐坊",
      "复仇",
      "唐代",
      "江湖",
      "女性"
    ]
  },
  {
    "title": "龙城小仵作",
    "href": "detail/movie-1117.html",
    "cover": "67.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑",
    "category": "青春",
    "description": "民国初年龙城，一位留学归来的富家千金女法医，遇上恪守旧俗的捕快，用解剖刀剖开尘封二十年的连环凶案。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "古装",
      "验尸",
      "法医",
      "甜宠探案"
    ]
  },
  {
    "title": "全职高手之巅峰荣耀",
    "href": "detail/movie-1118.html",
    "cover": "68.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 动画, 动作",
    "category": "历史",
    "description": "草根网吧队如何一路逆袭，夺得荣耀职业联赛史上第一个总冠军。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "电竞",
      "兄弟情",
      "热血",
      "二次元"
    ]
  },
  {
    "title": "蓝色爱情",
    "href": "detail/movie-1119.html",
    "cover": "69.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 爱情",
    "category": "古装",
    "description": "一名工厂女工爱上了经常来洗衣店的忧郁男子，却发现他是连环纵火案的嫌疑人。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "蓝领",
      "犯罪心理",
      "救赎",
      "城市底层"
    ]
  },
  {
    "title": "胶囊计划",
    "href": "detail/movie-1120.html",
    "cover": "70.jpg",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 惊悚",
    "category": "爱情",
    "description": "一家神秘公司出售“记忆胶囊”——吃下一颗，就能在五秒内学会任何技能，但代价是你将遗忘同等重要的东西。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "单元剧",
      "黑镜风",
      "科技伦理",
      "反转",
      "脑洞"
    ]
  },
  {
    "title": "神探",
    "href": "detail/movie-1121.html",
    "cover": "71.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑, 犯罪, 剧情",
    "category": "科幻",
    "description": "被誉为“人肉测谎仪”的神探接手一桩完美谋杀案，却发现凶手正在模仿他的破案逻辑来陷害他。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "高智商犯罪",
      "警匪对决",
      "心理战",
      "反转"
    ]
  },
  {
    "title": "半支情国语",
    "href": "detail/movie-1122.html",
    "cover": "72.jpg",
    "year": "1986",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "悬疑",
    "description": "一段婚姻里出现第三个名字，半根烟的时间，足够爱上另一个人。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "婚外情",
      "三角关系",
      "港风旧情",
      "伤感浪漫"
    ]
  },
  {
    "title": "妈妈别哭",
    "href": "detail/movie-1123.html",
    "cover": "73.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "奇幻",
    "description": "单亲妈妈得了渐冻症，在失去说话能力之前，她用录音笔录下了女儿从七岁到出嫁每一天该听的话。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "催泪",
      "母爱",
      "绝症",
      "真实事件改编"
    ]
  },
  {
    "title": "纽约战场",
    "href": "detail/movie-1124.html",
    "cover": "74.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电视剧",
    "genre": "动作，战争，科幻",
    "category": "悬疑",
    "description": "曼哈顿被私人军事公司封锁，一支混混组成的反抗军必须用无人机和下水道夺回街区。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "巷战",
      "雇佣兵",
      "纳米科技",
      "高楼狙击"
    ]
  },
  {
    "title": "约克军曹",
    "href": "detail/movie-1125.html",
    "cover": "75.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "传记, 战争, 历史",
    "category": "动作",
    "description": "一个拒绝杀人的虔诚教徒，如何在一次行动中徒手俘虏了132名德军。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "一战",
      "拒战",
      "信仰",
      "奥斯卡系"
    ]
  },
  {
    "title": "猫侍剧场版",
    "href": "detail/movie-1126.html",
    "cover": "76.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情， 喜剧， 奇幻",
    "category": "家庭",
    "description": "落魄武士接下一单斩杀“妖猫”的任务，却发现这只猫能看懂他的内心，并给他的人生写下批注。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "猫",
      "武士",
      "治愈",
      "时代剧",
      "萌宠"
    ]
  },
  {
    "title": "默默的小理河",
    "href": "detail/movie-1127.html",
    "cover": "77.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 农村",
    "category": "动作",
    "description": "北方小理河边，留守儿童默默用一架旧相机，拍下爷爷最后的春天。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "留守儿童",
      "祖孙情",
      "乡村生态",
      "缓缓叙事",
      "治愈向"
    ]
  },
  {
    "title": "黄金罗盘",
    "href": "detail/movie-1128.html",
    "cover": "78.jpg",
    "year": "2024",
    "region": "美国, 英国",
    "type": "剧集",
    "genre": "奇幻, 冒险",
    "category": "励志",
    "description": "女孩莱拉意外得到一个能揭示真相的黄金罗盘，她必须穿越到死者的国度，拯救被绑架的朋友。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "平行世界",
      "蒸汽朋克",
      "动物灵",
      "史诗",
      "重置版"
    ]
  },
  {
    "title": "下一站是幸福",
    "href": "detail/movie-1129.html",
    "cover": "79.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "都市、情感",
    "category": "喜剧",
    "description": "三个在人生中途下车的人，在同一趟深夜公交车上相遇，决定一起在终点站开一家殡葬用品店。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "慢生活",
      "中年重启",
      "治愈系",
      "三线叙事"
    ]
  },
  {
    "title": "飞起来吧蝴蝶",
    "href": "detail/movie-1130.html",
    "cover": "80.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集 剧情/喜剧",
    "genre": "治愈, 女性成长, 家庭",
    "category": "动作",
    "description": "一位为家庭付出一切的中年家庭主妇，在偶然闯入一间芭蕾舞教室后，笨拙地展开了她迟来四十年的追梦之旅。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "中年危机",
      "芭蕾",
      "母女关系",
      "重拾梦想"
    ]
  },
  {
    "title": "另一部同志电影续集",
    "href": "detail/movie-1131.html",
    "cover": "81.jpg",
    "year": "2025",
    "region": "台湾",
    "type": "电影",
    "genre": "爱情, 同性",
    "category": "剧情",
    "description": "一部关于同志电影续集的纪录片，记录了导演在资本、审核和前任演员的夹击下，如何将这部电影“作”出来。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "同志",
      "喜剧",
      "元叙事"
    ]
  },
  {
    "title": "全金属狂潮第一季",
    "href": "detail/movie-1132.html",
    "cover": "82.jpg",
    "year": "2002",
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻, 动作, 喜剧",
    "category": "古装",
    "description": "身经百战的少年士兵宗介，奉命潜入日本高中保护一名元气少女，却对和平的校园生活一窍不通。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "军事宅",
      "校园喜剧",
      "机甲战斗"
    ]
  },
  {
    "title": "苦茶香",
    "href": "detail/movie-1133.html",
    "cover": "83.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 家庭, 文艺",
    "category": "家庭",
    "description": "独居老人阿忠每天都会多倒一杯茶，只为等待那个因误会离家出走三十年的儿子回来喝。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "亲情",
      "老人",
      "煲茶",
      "香港"
    ]
  },
  {
    "title": "功夫男仆",
    "href": "detail/movie-1134.html",
    "cover": "84.jpg",
    "year": "2016",
    "region": "马来西亚",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "category": "动作",
    "description": "富二代请了个只会种菜的哑巴男仆，直到黑帮砸门时，男仆用扫帚打出了咏春拳。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "反差萌",
      "高手在民间",
      "华人文化"
    ]
  },
  {
    "title": "当心瘦削人",
    "href": "detail/movie-1135.html",
    "cover": "85.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖",
    "category": "历史",
    "description": "四名青少年模仿网上都市传说拍摄“召唤瘦削人”视频，结果真的开始有人消失。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "都市传说",
      "邪教",
      "录像带",
      "失踪"
    ]
  },
  {
    "title": "多情天使",
    "href": "detail/movie-1136.html",
    "cover": "86.jpg",
    "year": "2015",
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情，奇幻",
    "category": "纪录",
    "description": "一个不懂爱的天使被罚下凡，她必须在一百天内让一个冷漠的男人流下真心的眼泪，才能返回天堂。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "天使",
      "治愈",
      "轮回"
    ]
  },
  {
    "title": "疾风劲射",
    "href": "detail/movie-1137.html",
    "cover": "87.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 武侠 / 古装",
    "category": "爱情",
    "description": "最后一位蒙古弓骑兵传人潜入中原，只为用一支疾风箭，替族人洗刷百年冤屈。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "冷兵器",
      "弓骑兵",
      "江湖恩怨",
      "硬核武术"
    ]
  },
  {
    "title": "疯狂巨齿鲨",
    "href": "detail/movie-1138.html",
    "cover": "88.jpg",
    "year": "2026",
    "region": "美国 / 中国大陆",
    "type": "电影",
    "genre": "动作, 科幻, 惊悚",
    "category": "爱情",
    "description": "失控的基因改造巨齿鲨游进黄海，一支由退伍老兵和海洋学家组成的杂牌军必须将它击毙。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "深海怪兽",
      "基因改造",
      "大场面",
      "爆米花"
    ]
  },
  {
    "title": "少奇同志在东北",
    "href": "detail/movie-1139.html",
    "cover": "89.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 历史 / 革命",
    "category": "青春",
    "description": "1929年，青年刘少奇化名潜入东北工业重镇，在白色恐怖中重建被摧毁的工会。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "革命",
      "地下工作",
      "东北",
      "1920年代",
      "领袖青年时代"
    ]
  },
  {
    "title": "如果历史是一群喵第六季",
    "href": "detail/movie-1140.html",
    "cover": "90.jpg",
    "year": "2022",
    "region": "中国",
    "type": "剧集",
    "genre": "动画 / 历史",
    "category": "纪录",
    "description": "十二只猫咪重新演绎宋朝从建立到南迁的全过程，这次轮到狸猫喵演赵匡胤。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "喵星人",
      "搞笑科普",
      "宋朝",
      "萌系",
      "知识"
    ]
  },
  {
    "title": "杰克的生日愿望",
    "href": "detail/movie-1141.html",
    "cover": "91.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "家庭，奇幻",
    "category": "剧情",
    "description": "被全家遗忘生日的10岁男孩，许愿“变成大人”，第二天他真的成了40岁的中年秃顶大叔。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "生日魔法",
      "一夜长大",
      "温情喜剧"
    ]
  },
  {
    "title": "马达加斯加2",
    "href": "detail/movie-1142.html",
    "cover": "92.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "动画, 冒险",
    "category": "爱情",
    "description": "为了寻找失踪的企鹅，狮子亚历克斯带领伙伴们穿越了世界上最大的荆棘丛林。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "动物",
      "丛林",
      "友情",
      "欢乐",
      "续集"
    ]
  },
  {
    "title": "渡过黑暗",
    "href": "detail/movie-1143.html",
    "cover": "93.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 悬疑, 心理",
    "category": "家庭",
    "description": "一个失明的女调音师成为一桩谋杀案的唯一目击者，她必须用耳朵和双手，指认真凶。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "盲人",
      "证人",
      "犯罪",
      "感官",
      "复仇"
    ]
  },
  {
    "title": "动物管制官第三季",
    "href": "detail/movie-1144.html",
    "cover": "94.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧， 剧情",
    "category": "家庭",
    "description": "小镇动物管制部门迎来了一位从大城市调来的新兽医，她坚信科学饲养，却总被老同事的“玄学捕兽法”气得跳脚。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "职业剧",
      "搞笑",
      "温情"
    ]
  },
  {
    "title": "宅男女神杀人狂",
    "href": "detail/movie-1145.html",
    "cover": "95.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "惊悚、恐怖、黑色喜剧",
    "category": "科幻",
    "description": "当红清纯偶像私下竟是冷血杀手，她将跟踪狂粉丝关进地牢，并强迫对方观看自己的“表演教学视频”。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "偶像",
      "病娇",
      "密室",
      "网络直播"
    ]
  },
  {
    "title": "谎言的诞生",
    "href": "detail/movie-1146.html",
    "cover": "96.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 科幻",
    "category": "古装",
    "description": "在一个无法说谎的世界里，突然诞生出唯一能说谎的“缺陷者”，他成了各方势力争夺的终极武器。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "反乌托邦",
      "测谎",
      "真相"
    ]
  },
  {
    "title": "阳光以西",
    "href": "detail/movie-1147.html",
    "cover": "97.jpg",
    "year": "2020",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情, 爱情, 公路",
    "category": "动作",
    "description": "在世界最后一片被阳光照射的土地上，一个垂死的男人骑摩托车去寻找他失联的爱人。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "末日",
      "公路",
      "孤独",
      "追寻",
      "治愈"
    ]
  },
  {
    "title": "烽火怪杰",
    "href": "detail/movie-1148.html",
    "cover": "98.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争 / 动作",
    "category": "历史",
    "description": "皖南事变后，一个能用弹弓打中鬼子狙击手的放牛娃，被国民党和日军同时盯上。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "抗日传奇",
      "民间奇人",
      "冷兵器"
    ]
  },
  {
    "title": "美人鱼之海盗来袭",
    "href": "detail/movie-1149.html",
    "cover": "99.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画冒险",
    "category": "动作",
    "description": "当脏辫海盗船长遇上傲娇美人鱼公主，一场争夺“海洋之心”的爆笑寻宝之旅开始了。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "美人鱼",
      "海盗",
      "环保",
      "合家欢",
      "海洋"
    ]
  },
  {
    "title": "错点鸳鸯",
    "href": "detail/movie-1150.html",
    "cover": "100.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "TV Series",
    "genre": "古装，爱情，喜剧",
    "category": "剧情",
    "description": "替妹妹出嫁的平民女意外发现，那位传说中的病秧子夫君竟是当年救过自己的江湖少侠。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "替嫁",
      "先婚后爱",
      "欢喜冤家",
      "宅斗",
      "甜宠"
    ]
  },
  {
    "title": "穿越爱情史",
    "href": "detail/movie-1151.html",
    "cover": "101.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "浪漫爱情，奇幻",
    "category": "奇幻",
    "description": "历史系女博士意外掉进古代画卷，竟与冷面将军展开爆笑罗曼史。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "时间旅行",
      "高甜",
      "爆笑",
      "逆袭"
    ]
  },
  {
    "title": "哥哥负妹",
    "href": "detail/movie-1152.html",
    "cover": "102.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 动作, 犯罪",
    "category": "科幻",
    "description": "妹妹被仇家绑架后，退隐江湖的哥哥发现，下达绑架令的正是自己曾经最忠诚的大哥。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "九龙城寨",
      "兄妹情仇",
      "黑帮悲剧"
    ]
  },
  {
    "title": "梦幻拍档",
    "href": "detail/movie-1153.html",
    "cover": "103.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 动作",
    "category": "奇幻",
    "description": "一个梦想当特警的健身教练和一个梦想当网红的程序员，意外被卷入一宗跨国诈骗案，成了“最不靠谱搭档”。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "搭档",
      "废柴",
      "逆袭",
      "搞笑"
    ]
  },
  {
    "title": "囧村逃亡2",
    "href": "detail/movie-1154.html",
    "cover": "104.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 冒险, 悬疑",
    "category": "古装",
    "description": "上一部刚逃出囧村的倒霉蛋们，这次为了隐藏的宝藏，自愿组队再次闯入更离奇的陷阱。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "荒村探险",
      "续作升级",
      "真假宝藏",
      "乌龙阵"
    ]
  },
  {
    "title": "近战法师",
    "href": "detail/movie-1155.html",
    "cover": "105.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "奇幻, 动作, 喜剧",
    "category": "家庭",
    "description": "曾经的格斗游戏世界冠军被迫玩一款魔法网游，他用格斗家的打法硬刚法师职业，结果成了全服第一近战法师。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "游戏",
      "职业选手",
      "魔法",
      "搞笑"
    ]
  },
  {
    "title": "聊宅之超能姐姐大作战",
    "href": "detail/movie-1156.html",
    "cover": "106.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "喜剧, 奇幻, 青春",
    "category": "奇幻",
    "description": "一个废柴程序员租下一间老宅，发现五位女租客全都有奇葩超能力，而且都自称“姐姐”。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "二次元",
      "租客与房东",
      "超能力",
      "单元剧",
      "沙雕"
    ]
  },
  {
    "title": "撕裂地平线",
    "href": "detail/movie-1157.html",
    "cover": "107.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 恐怖",
    "category": "科幻",
    "description": "一艘失踪七年的实验飞船突然返航，搜救队发现船上的重力已经失效，而船员变成了怪物。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "太空",
      "克苏鲁",
      "生存"
    ]
  },
  {
    "title": "超越边界",
    "href": "detail/movie-1158.html",
    "cover": "108.jpg",
    "year": "2003",
    "region": "英国",
    "type": "电影",
    "genre": "爱情, 战争, 剧情",
    "category": "悬疑",
    "description": "伦敦名媛放弃锦衣玉食，跟随理想主义医生奔赴全球最危险的战场，只为救赎与爱。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "人道主义",
      "救援",
      "战地",
      "牺牲",
      "跨国恋"
    ]
  },
  {
    "title": "谷远山上有书院",
    "href": "detail/movie-1159.html",
    "cover": "109.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 喜剧 / 青春",
    "category": "纪录",
    "description": "被退婚三次的“扫把星”少女，女扮男装混进全男书院，结果发现院长是只千年狐狸精。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "反套路",
      "古代校园",
      "废柴逆袭",
      "女性读书"
    ]
  },
  {
    "title": "大唐荣耀",
    "href": "detail/movie-1160.html",
    "cover": "110.jpg",
    "year": "2020",
    "region": "中国",
    "type": "电视剧",
    "genre": "历史、古装、权谋",
    "category": "古装",
    "description": "沈珍珠从江南采珠女到皇后，在安史之乱中三陷敌营，与皇帝上演一生错过的虐恋。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "安史之乱",
      "宫斗",
      "战争",
      "传奇"
    ]
  },
  {
    "title": "惹火女色狼",
    "href": "detail/movie-1161.html",
    "cover": "111.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "category": "励志",
    "description": "三个男人同时收到神秘女子的约会邀请，赴约后发现这个女人竟是他们十年前性侵过的女同事。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "情色",
      "反转",
      "女性复仇",
      "限制级"
    ]
  },
  {
    "title": "战争回响",
    "href": "detail/movie-1162.html",
    "cover": "112.jpg",
    "year": "2026",
    "region": "法国 / 德国",
    "type": "电影",
    "genre": "剧情 / 战争 / 家庭",
    "category": "爱情",
    "description": "曾祖父的一战日记被打开，里面记录的并非战场英勇，而是他亲手处决了二十名逃兵。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "一战",
      "创伤",
      "PTSD",
      "家族秘密",
      "记忆"
    ]
  },
  {
    "title": "马库斯·威廉姆斯",
    "href": "detail/movie-1163.html",
    "cover": "113.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情，传记，运动",
    "category": "爱情",
    "description": "黑人门将马库斯从英乙替补席爬到英超金手套，他必须战胜的不只是对手，还有整个看台的种族歧视。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "足球",
      "励志",
      "种族歧视",
      "真实事件改编",
      "逆袭"
    ]
  },
  {
    "title": "彼特和万迪",
    "href": "detail/movie-1164.html",
    "cover": "114.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "category": "剧情",
    "description": "破产兄弟偷了一辆灵车，却意外发现后备箱里藏着一份遗嘱和一只会说人话的鹦鹉。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "公路电影",
      "友情",
      "自我救赎",
      "黑色幽默"
    ]
  },
  {
    "title": "侠女十三妹",
    "href": "detail/movie-1165.html",
    "cover": "115.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 武侠",
    "category": "音乐",
    "description": "清末，十三妹的镖局被灭门，她提着两把短刀，从东北追到云南，只为杀最后一个仇人。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "女性武侠",
      "复仇",
      "清代",
      "镖局",
      "冷兵器"
    ]
  },
  {
    "title": "大世界",
    "href": "detail/movie-1166.html",
    "cover": "116.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "剧情 / 犯罪 / 黑色幽默",
    "category": "纪录",
    "description": "一张被偷的银行卡，将进城务工者、黑车司机和女网红引向了同一把枪。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "成人动画",
      "多线叙事",
      "底层挣扎",
      "荒诞"
    ]
  },
  {
    "title": "绝对之爱",
    "href": "detail/movie-1167.html",
    "cover": "117.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "category": "剧情",
    "description": "一位罹患渐冻症的女哲学家，决定在彻底失去语言能力之前，最后一次向她的丈夫证明“什么是绝对的爱”。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "哲学家",
      "病痛",
      "临终",
      "灵魂伴侣"
    ]
  },
  {
    "title": "我在顶峰等你",
    "href": "detail/movie-1168.html",
    "cover": "118.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "青春， 运动， 爱情",
    "category": "纪录",
    "description": "约定高考后一起攀登玉珠峰的发小，却因一场雪崩只剩下一个人，十年后他带着她的照片重回山顶。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "登山",
      "高考",
      "青梅竹马",
      "雪山",
      "励志"
    ]
  },
  {
    "title": "某种生活",
    "href": "detail/movie-1169.html",
    "cover": "119.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "文艺 / 剧情",
    "category": "剧情",
    "description": "六个北漂青年合租在北京五环外的一间老房里，他们都在过着自己的“某种生活”。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "北漂",
      "生存困境",
      "诗意写实",
      "群像",
      "黑白色调"
    ]
  },
  {
    "title": "二凤",
    "href": "detail/movie-1170.html",
    "cover": "120.jpg",
    "year": "2023",
    "region": "越南",
    "type": "电影",
    "genre": "动作，剧情，家庭",
    "category": "科幻",
    "description": "曾经的黑道大姐为了给被绑架的女儿讨回公道，单枪匹马闯入器官贩卖集团的总部，重现江湖血腥传说。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "女性",
      "复仇",
      "母爱",
      "黑帮"
    ]
  },
  {
    "title": "大鼻子情圣国语",
    "href": "detail/movie-1171.html",
    "cover": "121.jpg",
    "year": "2025",
    "region": "中国大陆 / 法国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 历史",
    "category": "喜剧",
    "description": "丑军官借英俊下属之名写给贵族小姐的情书，在国语配音的错位时代里，引发了一场身份与真心的三重误会。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "经典改编",
      "书信传情",
      "丑角之恋"
    ]
  },
  {
    "title": "布勒斯特之女",
    "href": "detail/movie-1172.html",
    "cover": "122.jpg",
    "year": "2016",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 传记, 犯罪",
    "category": "励志",
    "description": "法国一个小镇上的普通女记者，凭借一己之力，揭开了笼罩当地三十年的连环杀人案与司法黑幕。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "真实事件改编",
      "女性力量",
      "调查记者"
    ]
  },
  {
    "title": "深海利剑",
    "href": "detail/movie-1173.html",
    "cover": "123.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "军旅 / 动作 / 剧情",
    "category": "悬疑",
    "description": "神秘国产新型潜艇“秦”号试航，却遭不明势力暗中锁定，一场无声的水下暗战爆发。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "潜艇",
      "海军",
      "热血",
      "高科技战争",
      "兄弟情"
    ]
  },
  {
    "title": "地下 (1976年电影",
    "href": "detail/movie-1174.html",
    "cover": "124.jpg",
    "year": "1976",
    "region": "南斯拉夫",
    "type": "电影",
    "genre": "剧情 / 战争 / 史诗",
    "category": "爱情",
    "description": "投机分子将一群人骗入地窖躲避二战，谎称战争持续了二十年，让他们为他制造军火。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "荒诞",
      "历史",
      "洞穴",
      "疯狂"
    ]
  },
  {
    "title": "粉红色的梦",
    "href": "detail/movie-1175.html",
    "cover": "125.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 奇幻, 青春",
    "category": "动作",
    "description": "只能梦到粉红色的失意画家，发现自己能进入暗恋女孩的梦境，但她的梦里一片漆黑。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "造梦",
      "暗恋",
      "色彩隐喻",
      "台式小清新"
    ]
  },
  {
    "title": "斯特拉托斯",
    "href": "detail/movie-1176.html",
    "cover": "126.jpg",
    "year": "2019",
    "region": "希腊",
    "type": "电影",
    "genre": "剧情, 哲学",
    "category": "历史",
    "description": "一个名叫斯特拉托斯的男人在爱琴海岛上醒来，他不记得自己是谁，岛上居民却都认识他。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "隐喻",
      "存在主义",
      "海岛",
      "身份焦虑"
    ]
  },
  {
    "title": "自杀现场直播",
    "href": "detail/movie-1177.html",
    "cover": "127.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "category": "音乐",
    "description": "一个欠债累累的失业主播决定直播跳桥，却在自杀前一秒发现身后挤满了要跟他抢“流量”的其他绝望者。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "直播",
      "网红",
      "社会议题",
      "黑色幽默",
      "心理"
    ]
  },
  {
    "title": "哈比比与艾侬",
    "href": "detail/movie-1178.html",
    "cover": "128.jpg",
    "year": "2025",
    "region": "印度尼西亚",
    "type": "电影",
    "genre": "爱情 / 剧情 / 宗教",
    "category": "科幻",
    "description": "一名虔诚的穆斯林学霸爱上了隔壁的富家千金，他们的阻碍不是阶级，而是对信仰的不同理解。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "伊斯兰爱情",
      "纯爱战士",
      "学霸恋爱",
      "催泪弹"
    ]
  },
  {
    "title": "真的假的",
    "href": "detail/movie-1179.html",
    "cover": "129.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑, 科幻",
    "category": "喜剧",
    "description": "在一个人人必须佩戴“真相手环”的未来，一个天生不会说谎的女孩卷入了一场必须说谎才能救人的阴谋。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "谎言",
      "测谎",
      "反乌托邦",
      "高概念"
    ]
  },
  {
    "title": "侦探船梨精",
    "href": "detail/movie-1180.html",
    "cover": "130.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧 / 悬疑 / 奇幻",
    "category": "音乐",
    "description": "一只会说话的船梨精吉祥物，用魔性的跳跃和脑洞破解奇案。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "吉祥物",
      "本格推理",
      "沙雕",
      "反差萌"
    ]
  },
  {
    "title": "神圣的偶像",
    "href": "detail/movie-1181.html",
    "cover": "131.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "奇幻/喜剧/爱情",
    "category": "喜剧",
    "description": "为了拯救王国而穿越到现代的神圣大祭司，醒来后发现自己是即将解散的糊团成员。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "穿越",
      "异世界",
      "偶像",
      "神格",
      "打工人"
    ]
  },
  {
    "title": "老友记重聚特辑",
    "href": "detail/movie-1182.html",
    "cover": "132.jpg",
    "year": "2021",
    "region": "美国",
    "type": "综艺/特别节目",
    "genre": "纪录片、脱口秀、怀旧",
    "category": "剧情",
    "description": "时隔17年，六位老友重回华纳摄影棚24号，没有剧本，只有眼泪和笑声。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "回忆杀",
      "幕后花絮",
      "明星访谈",
      "情怀"
    ]
  },
  {
    "title": "荒野狂兽",
    "href": "detail/movie-1183.html",
    "cover": "133.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚/冒险",
    "category": "剧情",
    "description": "一位单亲爸爸带两个女儿去南非旅行，遭遇被猎人杀妻后疯狂复仇的巨型雄狮。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "非洲",
      "猛兽",
      "求生",
      "父女",
      "血腥"
    ]
  },
  {
    "title": "今晚开放麦",
    "href": "detail/movie-1184.html",
    "cover": "134.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "脱口秀, 真人秀",
    "category": "历史",
    "description": "来自各行各业的普通人，用5分钟真实经历点燃舞台。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "素人",
      "幽默",
      "生活观察"
    ]
  },
  {
    "title": "狼心仁术",
    "href": "detail/movie-1185.html",
    "cover": "135.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "医疗/悬疑",
    "category": "音乐",
    "description": "顶尖外科医生被流放到草原边境，当地牧民称他为“狼心人”，说他用外科手术刀救了狼崽。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "荒野医生",
      "边疆",
      "罕见病",
      "良心抉择"
    ]
  },
  {
    "title": "耻辱的收获",
    "href": "detail/movie-1186.html",
    "cover": "136.jpg",
    "year": "2022",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情, 历史, 惊悚",
    "category": "奇幻",
    "description": "二战后的澳洲农场主发现，自家的肥沃土地每季收获的都是人骨与哭嚎。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "殖民创伤",
      "偷窃土地",
      "土著",
      "心理压迫",
      "悬疑"
    ]
  },
  {
    "title": "最后一分钟",
    "href": "detail/movie-1187.html",
    "cover": "137.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 犯罪 / 惊悚",
    "category": "悬疑",
    "description": "一个被诬陷的拆弹专家只剩下一分钟寿命，他必须在这一分钟内让整个犯罪组织给自己陪葬。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "实时叙事",
      "爆破",
      "反转",
      "复仇",
      "高概念"
    ]
  },
  {
    "title": "好老师",
    "href": "detail/movie-1188.html",
    "cover": "138.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，惊悚",
    "category": "家庭",
    "description": "一名热血新手老师在巴黎贫民区推行激励教育，一名天才学生进步神速，但老师渐渐发现学生正在用学到的逻辑操控全班。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "教育反思",
      "道德绑架",
      "心理操控",
      "阶级矛盾"
    ]
  },
  {
    "title": "请你原谅我",
    "href": "detail/movie-1189.html",
    "cover": "139.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "category": "纪录",
    "description": "一家“道歉公司”专门帮人做最艰难的道歉，直到老板接到一单：向自己当年诬陷过的同事道歉。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "道歉公司",
      "赎罪",
      "反转",
      "道德困境"
    ]
  },
  {
    "title": "雷切尔文件",
    "href": "detail/movie-1190.html",
    "cover": "140.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "爱情， 剧情， 喜剧",
    "category": "都市",
    "description": "即将赴美读大学的少年，在离家前一晚重读旧日记，试图挽回已分手的学霸女友。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "青春回忆",
      "初恋",
      "非线性叙事",
      "文学改编",
      "一夜之间"
    ]
  },
  {
    "title": "穿越东西的小情歌",
    "href": "detail/movie-1191.html",
    "cover": "141.jpg",
    "year": "2023",
    "region": "奥地利",
    "type": "电影",
    "genre": "爱情",
    "category": "悬疑",
    "description": "东德哨兵爱上每天在西德边境唱情歌的流浪女歌手，他用拆解的步枪零件为她做了一把吉他。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "音乐",
      "冷战",
      "柏林墙",
      "吉他"
    ]
  },
  {
    "title": "杨光的快乐生活之恋爱先生",
    "href": "detail/movie-1192.html",
    "cover": "142.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 爱情",
    "category": "科幻",
    "description": "天津老好人杨光开了一家“失败原因”婚介所，专门帮人分手，却遇上了此生挚爱。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "天津",
      "市井喜剧",
      "婚恋",
      "中年危机"
    ]
  },
  {
    "title": "老师嫁老大",
    "href": "detail/movie-1193.html",
    "cover": "143.jpg",
    "year": "2023",
    "region": "马来西亚",
    "type": "电影",
    "genre": "喜剧 / 爱情 / 黑帮",
    "category": "奇幻",
    "description": "温柔的小学女老师为了阻止黑帮拆迁，竟在谈判桌上嫁给了凶神恶煞的帮派老大。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "反差萌",
      "黑社会",
      "师生恋",
      "南洋风情"
    ]
  },
  {
    "title": "空气人形",
    "href": "detail/movie-1194.html",
    "cover": "144.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "科幻， 剧情， 奇幻",
    "category": "纪录",
    "description": "她是一个充气人偶，却突然拥有了心脏，但她学会的第一件事不是爱，而是对世界的绝望。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "机器人",
      "情感",
      "孤独",
      "治愈",
      "哲学"
    ]
  },
  {
    "title": "假死疑云",
    "href": "detail/movie-1195.html",
    "cover": "145.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "category": "都市",
    "description": "为骗保而假死的丈夫，在葬礼当晚竟目睹了自己的尸检报告。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "反转",
      "高智商犯罪",
      "心理博弈",
      "骗保"
    ]
  },
  {
    "title": "深夜的奇葩恋爱图鉴",
    "href": "detail/movie-1196.html",
    "cover": "146.jpg",
    "year": "2018",
    "region": "日本",
    "type": "剧集",
    "genre": "喜剧, 爱情",
    "category": "悬疑",
    "description": "三个闺蜜每周深夜聚会，轮番吐槽自己遇到的奇葩男友和更奇葩的相亲对象，段段爆笑。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "深夜剧",
      "吐槽",
      "奇葩",
      "女性视角",
      "爽剧"
    ]
  },
  {
    "title": "浪漫三人行",
    "href": "detail/movie-1197.html",
    "cover": "147.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "category": "都市",
    "description": "一对相爱的夫妻同时爱上了同一个流浪画家，为了不伤害彼此，他们决定三个人一起过日子。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "开放式关系",
      "文艺",
      "哲学",
      "三角恋",
      "巴黎"
    ]
  },
  {
    "title": "我家的英雄",
    "href": "detail/movie-1198.html",
    "cover": "148.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 家庭",
    "category": "历史",
    "description": "老实上班族父亲为保护女儿失手杀人，却引来真正的连环杀手上门挑战。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "平凡父亲",
      "连环杀手",
      "家庭保卫战",
      "智商对决"
    ]
  },
  {
    "title": "田原",
    "href": "detail/movie-1199.html",
    "cover": "149.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "剧情",
    "description": "在城市打工的父亲突然失踪，15岁的田原带着哑巴弟弟，骑着一辆破三轮车横跨三省寻找。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "乡村",
      "父子关系",
      "留守儿童"
    ]
  },
  {
    "title": "捷克斯洛伐克 1968",
    "href": "detail/movie-1200.html",
    "cover": "150.jpg",
    "year": "2023",
    "region": "捷克",
    "type": "纪录片",
    "genre": "历史，记录",
    "category": "剧情",
    "description": "尘封半个世纪的磁带被打开，普通亲历者讲述“布拉格之春”前后改变一生的八个月。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "布拉格之春",
      "档案",
      "口述史"
    ]
  },
  {
    "title": "魔道祖师 日语版",
    "href": "detail/movie-1201.html",
    "cover": "1.jpg",
    "year": "2021",
    "region": "日本",
    "type": "剧集 (共23集)",
    "genre": "动画 / 玄幻 / 耽美",
    "category": "爱情",
    "description": "被献舍重生的夷陵老祖魏无羡，与宿敌蓝忘机携手破解十六年前的惊天阴谋。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "日语配音",
      "修仙",
      "前世今生",
      "双男主"
    ]
  },
  {
    "title": "死路寻死",
    "href": "detail/movie-1202.html",
    "cover": "2.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑，惊悚",
    "category": "音乐",
    "description": "一个想自杀的男人，发现自己每一次寻死都会意外带走一条无辜的生命，陷入了无尽的赎罪循环。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "循环",
      "自杀",
      "心理恐怖"
    ]
  },
  {
    "title": "蜂蜜之夏",
    "href": "detail/movie-1203.html",
    "cover": "3.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "剧情 / 家庭 / 青春",
    "category": "动作",
    "description": "高考失利后，叛逆少女被迫回家帮养蜂的父亲干活，却在蜜蜂的世界里找到了人生的方向。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "田园",
      "父女矛盾",
      "养蜂",
      "高考"
    ]
  },
  {
    "title": "忘记你，记得爱情",
    "href": "detail/movie-1204.html",
    "cover": "4.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 喜剧, 奇幻",
    "category": "都市",
    "description": "一对欢喜冤家因车祸同时失忆，醒来后看着对方都自称“这是我未婚夫/妻”。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "双向遗忘",
      "契约婚姻",
      "先婚后爱",
      "爆笑",
      "治愈"
    ]
  },
  {
    "title": "射天狼",
    "href": "detail/movie-1205.html",
    "cover": "5.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史 / 动作 / 战争",
    "category": "家庭",
    "description": "十九岁的霍去病率领八百骑兵深入大漠，他要射下的不是天狼星，而是整个匈奴的胆。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "西汉",
      "霍去病",
      "河西之战",
      "骑兵",
      "少年将军"
    ]
  },
  {
    "title": "曼谷危情：天堂地狱",
    "href": "detail/movie-1206.html",
    "cover": "6.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "动作/犯罪",
    "category": "家庭",
    "description": "为了摧毁金三角新型毒品网络，一名泰拳手打黑拳入狱，却发现自己正身处天堂般的毒枭帝国。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "泰拳",
      "卧底",
      "毒品",
      "爆炸",
      "硬核"
    ]
  },
  {
    "title": "明天，我会成为谁的女友",
    "href": "detail/movie-1207.html",
    "cover": "7.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情, 社会",
    "category": "古装",
    "description": "五个在“出租女友”行业里沉浮的女孩，用最虚假的亲密关系，换取最真实的生存筹码。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "女性群像",
      "风俗业",
      "现实主义",
      "扎心",
      "出租女友"
    ]
  },
  {
    "title": "三看御妹刘金定",
    "href": "detail/movie-1208.html",
    "cover": "8.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "古装 / 戏曲 / 爱情",
    "category": "剧情",
    "description": "女将军刘金定为拒绝皇帝赐婚，三次女扮男装去“考察”被硬塞给自己的病秧子驸马。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "越剧改编",
      "女将",
      "扮装",
      "喜剧"
    ]
  },
  {
    "title": "福团·费斯特：好运旺旺来",
    "href": "detail/movie-1209.html",
    "cover": "9.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "category": "历史",
    "description": "一只被遗弃的胖狗误闯拉斯维加斯赌场，竟靠着嗅觉成了史上最旺的“吉祥物”。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "宠物",
      "赌场",
      "逆袭",
      "搞笑"
    ]
  },
  {
    "title": "伤心小孩",
    "href": "detail/movie-1210.html",
    "cover": "10.jpg",
    "year": "2016",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情, 家庭, 奇幻",
    "category": "青春",
    "description": "一个失去母亲的男孩创造出一个幻想国度，里面所有居民都是他自己的“伤心”。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "儿童",
      "心理创伤",
      "想象力",
      "治愈",
      "魔幻现实主义"
    ]
  },
  {
    "title": "美国队长3",
    "href": "detail/movie-1211.html",
    "cover": "11.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻",
    "category": "爱情",
    "description": "超级英雄注册法案导致复仇者联盟分裂，美国队长与钢铁侠各自集结阵营，上演终极对决。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "漫威",
      "超级英雄内战",
      "冬兵",
      "复仇者联盟"
    ]
  },
  {
    "title": "伪装者",
    "href": "detail/movie-1212.html",
    "cover": "12.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "谍战、悬疑、年代",
    "category": "喜剧",
    "description": "一对失散多年的兄弟，一人成了军统特工，一人成了地下党，互相不知对方真实身份。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "双面间谍",
      "身份错位",
      "抗战",
      "烧脑",
      "兄弟情"
    ]
  },
  {
    "title": "桃乐丝·罗奇的恐惧",
    "href": "detail/movie-1213.html",
    "cover": "13.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖， 惊悚， 心理",
    "category": "科幻",
    "description": "底层清洁工桃乐丝被困在一间废弃的精神病院盥洗室，镜中的倒影开始自主行动。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "密室",
      "心理崩溃",
      "身体恐怖",
      "独角戏"
    ]
  },
  {
    "title": "电锯惊魂3",
    "href": "detail/movie-1214.html",
    "cover": "14.jpg",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "category": "奇幻",
    "description": "癌症晚期的竖锯躺在病床上，却通过一个绝望的父亲和一名女医生，完成了最后也是最大的“游戏”。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "竖锯",
      "血浆",
      "道德考验",
      "密室",
      "经典续集"
    ]
  },
  {
    "title": "犯罪心理2014",
    "href": "detail/movie-1215.html",
    "cover": "15.jpg",
    "year": "2014",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 心理",
    "category": "音乐",
    "description": "2014年，一桩模仿1994年悬案的连环杀人案重启，FBI侧写师发现自己竟是当年的“幸存者”。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "侧写",
      "FBI",
      "连环杀手",
      "单元剧",
      "经典"
    ]
  },
  {
    "title": "更美好的事第一季",
    "href": "detail/movie-1216.html",
    "cover": "16.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情 / 家庭",
    "category": "古装",
    "description": "单亲妈妈在女儿婚礼前一晚发现，自己这二十年来拼命隐藏的所有秘密，都被女儿写进了婚礼致辞。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "母女关系",
      "中年困境",
      "细腻治愈"
    ]
  },
  {
    "title": "不了神话宫崎骏",
    "href": "detail/movie-1217.html",
    "cover": "17.jpg",
    "year": "2024",
    "region": "日本",
    "type": "纪录片",
    "genre": "纪录片，传记",
    "category": "剧情",
    "description": "镜头跟拍三年，揭秘宫崎骏在“第七次退休”后，如何用CGI技术创作最后一部短片。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "宫崎骏",
      "吉卜力",
      "幕后",
      "创作"
    ]
  },
  {
    "title": "硝烟下的日常",
    "href": "detail/movie-1218.html",
    "cover": "18.jpg",
    "year": "2023",
    "region": "乌克兰",
    "type": "剧集",
    "genre": "战争 / 家庭 / 纪录片风格",
    "category": "喜剧",
    "description": "一位顿巴斯的母亲用手机镜头记录下战火中家庭的一日三餐，直到导弹击中了她家的厨房。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "顿巴斯",
      "平民视角",
      "日常与炮击",
      "母亲日记"
    ]
  },
  {
    "title": "被掩盖的时间",
    "href": "detail/movie-1219.html",
    "cover": "19.jpg",
    "year": "2016",
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻 / 剧情",
    "category": "青春",
    "description": "一群少年在山谷里玩耍时时间突然静止，只有一个人活了下来，十年后他重新出现，却还是当年的模样。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "时间静止",
      "少年",
      "孤独",
      "奇幻",
      "纯爱"
    ]
  },
  {
    "title": "欢喜一甲亲",
    "href": "detail/movie-1220.html",
    "cover": "20.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧 / 家庭 / 剧情",
    "category": "悬疑",
    "description": "一个毒舌阿嬷和一甲子未见的欢喜冤家重聚，却引爆了整个家族的秘密。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "亲情",
      "误会",
      "返乡",
      "温情"
    ]
  },
  {
    "title": "美好未来",
    "href": "detail/movie-1221.html",
    "cover": "21.jpg",
    "year": "2027",
    "region": "德国",
    "type": "电影",
    "genre": "科幻，剧情",
    "category": "都市",
    "description": "未来世界可以通过基因编辑定制“完美婴儿”，而一对自然受孕的父母成了违法者。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "反乌托邦",
      "基因编辑",
      "伦理",
      "未来",
      "高概念"
    ]
  },
  {
    "title": "沧月绘",
    "href": "detail/movie-1222.html",
    "cover": "22.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装, 奇幻, 爱情",
    "category": "剧情",
    "description": "失意画师意外发现自己能进入自己的画中世界，并在那里遇到了一个被困了三百年的女子。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "入画",
      "时空循环",
      "画师",
      "双向奔赴"
    ]
  },
  {
    "title": "喜剧总动员第二季",
    "href": "detail/movie-1223.html",
    "cover": "23.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "喜剧，真人秀，竞演",
    "category": "青春",
    "description": "跨界明星与专业喜剧人组队PK，用原创小品争夺“喜剧之王”的桂冠。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "跨界",
      "小品",
      "相声",
      "欢乐",
      "明星挑战"
    ]
  },
  {
    "title": "长枪权三",
    "href": "detail/movie-1224.html",
    "cover": "24.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "历史 / 动作",
    "category": "奇幻",
    "description": "战国最强枪术师被诬陷叛国，他在逃亡途中用一杆断枪守护着敌人将军的女儿。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "战国",
      "武士",
      "枪术",
      "忠义",
      "美学"
    ]
  },
  {
    "title": "老虎伍兹",
    "href": "detail/movie-1225.html",
    "cover": "25.jpg",
    "year": "2021",
    "region": "美国",
    "type": "纪录片 / 剧集",
    "genre": "传记 / 运动",
    "category": "励志",
    "description": "独家采访和未公开影像揭示，那个被父亲塑造成“拯救高尔夫”的黑人天才，如何在神坛之上一步步走向人性崩塌。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "高尔夫",
      "丑闻",
      "励志",
      "人性"
    ]
  },
  {
    "title": "披荆斩棘的大小姐",
    "href": "detail/movie-1226.html",
    "cover": "26.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/甜宠/女性成长",
    "category": "爱情",
    "description": "首富千金被继母害死后重生为小丫鬟，用前世商业头脑替主子打天下，顺便俘获冷面将军。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "重生",
      "宅斗",
      "大小姐",
      "经商",
      "逆袭"
    ]
  },
  {
    "title": "跳舞的蜗牛",
    "href": "detail/movie-1227.html",
    "cover": "27.jpg",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 喜剧, 家庭",
    "category": "古装",
    "description": "患有重度自闭症的男孩只对两件事有反应：黏黏的蜗牛和祖母的慢三步舞。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "自闭症",
      "家庭关系",
      "舞蹈",
      "治愈",
      "慢节奏"
    ]
  },
  {
    "title": "警报器",
    "href": "detail/movie-1228.html",
    "cover": "28.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "惊悚 / 悬疑 / 灾难",
    "category": "动作",
    "description": "诺曼底核电站警报误响后，一个女工程师发现：真正的泄漏早已开始，而且有人故意关闭了系统。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "核电站",
      "泄漏",
      "母女",
      "真相"
    ]
  },
  {
    "title": "哈里根先生的手机",
    "href": "detail/movie-1229.html",
    "cover": "29.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 奇幻",
    "category": "历史",
    "description": "少年埋葬了富豪忘年交哈里根先生，顺便把一部手机放进了棺材，没想到墓穴里传出了震动声。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "智能手机",
      "诅咒",
      "死后通信"
    ]
  },
  {
    "title": "777查理",
    "href": "detail/movie-1230.html",
    "cover": "30.jpg",
    "year": "2022",
    "region": "印度",
    "type": "电影",
    "genre": "剧情 / 冒险",
    "category": "音乐",
    "description": "一个只想自杀的流浪汉，被迫带着一只通人性的大鹅开始了跨越南北印度的逃亡之旅。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "动物",
      "公路",
      "救赎",
      "情感"
    ]
  },
  {
    "title": "开国元勋",
    "href": "detail/movie-1231.html",
    "cover": "31.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "历史，传记",
    "category": "纪录",
    "description": "不同于传统伟人剧，本剧聚焦于几位年轻“开国元勋”在成为领袖之前的迷茫、争吵与失败。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "革命",
      "伟人",
      "群像",
      "正剧"
    ]
  },
  {
    "title": "冬天过后",
    "href": "detail/movie-1232.html",
    "cover": "32.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情 / 家庭",
    "category": "纪录",
    "description": "立春那天，因车祸失忆七年的妻子突然醒来，却发现丈夫早已签下了离婚协议书。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "治愈",
      "失忆",
      "破镜重圆",
      "亲情",
      "雪景"
    ]
  },
  {
    "title": "漂亮马驹",
    "href": "detail/movie-1233.html",
    "cover": "33.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 家庭, 运动",
    "category": "爱情",
    "description": "一个无法与人沟通的自闭症女孩，却能读懂一匹同样被世界遗弃的赛马的心。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "赛马",
      "自闭症",
      "父女情",
      "治愈",
      "励志"
    ]
  },
  {
    "title": "傅满洲的新娘",
    "href": "detail/movie-1234.html",
    "cover": "34.jpg",
    "year": "2026",
    "region": "美国 / 英国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 奇幻",
    "category": "爱情",
    "description": "一位伦敦女子被迫嫁给传说中的傅满洲，却发现这场婚姻是一场拯救世界的献祭。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "东方元素",
      "神秘组织",
      "阴谋",
      "身份反转",
      "哥特"
    ]
  },
  {
    "title": "十二猴子第三季",
    "href": "detail/movie-1235.html",
    "cover": "35.jpg",
    "year": "2025",
    "region": "美国",
    "type": "TV剧集",
    "genre": "科幻，惊悚",
    "category": "古装",
    "description": "当十二猴子军团开始招募过去的志愿者，科尔发现摧毁人类文明的病毒，最初竟是为了治愈孤独而设计的。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "时空穿越",
      "末日循环",
      "病毒起源",
      "反乌托邦",
      "烧脑"
    ]
  },
  {
    "title": "无止尽的前进",
    "href": "detail/movie-1236.html",
    "cover": "36.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻",
    "category": "爱情",
    "description": "一列永不抵达终点的高铁上，乘客们逐渐发现自己活在被重置的一天里，而列车长是个AI哲学家。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "无限循环",
      "电车难题",
      "哲学思辨",
      "高概念",
      "烧脑"
    ]
  },
  {
    "title": "维多莉亚的秘密",
    "href": "detail/movie-1237.html",
    "cover": "37.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚 / 女性",
    "category": "纪录",
    "description": "一名无神论女警潜入封闭修道院调查失踪案，发现修女们每晚都在唱一首不该存在的歌。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "卧底",
      "修道院",
      "秘密",
      "复仇",
      "反转"
    ]
  },
  {
    "title": "铁线蕨青",
    "href": "detail/movie-1238.html",
    "cover": "38.jpg",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 爱情 / 文艺",
    "category": "科幻",
    "description": "丈夫去世后，她每天只照顾阳台上一盆枯萎的铁线蕨，直到遇见一个只会用野草插花的怪人。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "植物",
      "丧偶",
      "花艺",
      "治愈",
      "慢节奏"
    ]
  },
  {
    "title": "天煞撞正怪怪兽之变种南瓜",
    "href": "detail/movie-1239.html",
    "cover": "39.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 科幻, 恐怖",
    "category": "科幻",
    "description": "外星人入侵地球时撞上一颗变异南瓜，结果两种怪物融合成“南瓜外星人”，只爱吃榴莲。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "cult",
      "杂交",
      "怪物",
      "恶搞"
    ]
  },
  {
    "title": "埼玉的牛郎",
    "href": "detail/movie-1240.html",
    "cover": "40.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧、剧情",
    "category": "古装",
    "description": "埼玉县公务员为还债误闯东京牛郎界，竟用“区役所窗口接待术”成为头牌。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "黑色幽默",
      "职场",
      "反转",
      "社会讽刺",
      "成长"
    ]
  },
  {
    "title": "威尔和格蕾丝第八季",
    "href": "detail/movie-1241.html",
    "cover": "41.jpg",
    "year": "2006",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 同性",
    "category": "奇幻",
    "description": "威尔决定和格蕾丝结束同居关系，他们在最后24小时里，把十二年的毒舌、拥抱和秘密全部清算。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "情景喜剧",
      "经典终季",
      "毒舌闺蜜",
      "友谊",
      "LGBT"
    ]
  },
  {
    "title": "极地先锋",
    "href": "detail/movie-1242.html",
    "cover": "42.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "genre": "冒险，传记，剧情",
    "category": "悬疑",
    "description": "1909年，两位彼此憎恨的探险家为了争夺“第一个到达北极点”的荣誉，必须穿越即将解冻的冰原，展开一场生死竞速。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "北极",
      "探险",
      "真实改编",
      "生存",
      "人性"
    ]
  },
  {
    "title": "女战士艾菲菈&吉里鸥菈",
    "href": "detail/movie-1243.html",
    "cover": "43.jpg",
    "year": "2020",
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻 / 动作 / 百合",
    "category": "科幻",
    "description": "在人类灭亡后的机械纪元，两名被改造成最终兵器的少女战士，却只想用武力开一间咖啡店。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "机械改造",
      "双女主",
      "末日"
    ]
  },
  {
    "title": "杜拉拉追婚记",
    "href": "detail/movie-1244.html",
    "cover": "44.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 喜剧",
    "category": "奇幻",
    "description": "升职为HR总监的杜拉拉，为躲避母亲逼婚，竟租了一个“男友”回家过年。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "职场",
      "剩女",
      "轻喜剧"
    ]
  },
  {
    "title": "希腊二部曲：时光灰烬",
    "href": "detail/movie-1245.html",
    "cover": "45.jpg",
    "year": "2013",
    "region": "希腊/法国",
    "type": "电影",
    "genre": "剧情/历史",
    "category": "励志",
    "description": "一家三代人，经历希腊从二战到债务危机，最后发现这个国家的灰烬就是他们的骨头。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "希腊债务危机",
      "家族史诗",
      "政治寓言",
      "黑白"
    ]
  },
  {
    "title": "助理",
    "href": "detail/movie-1246.html",
    "cover": "46.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚 / 职场",
    "category": "悬疑",
    "description": "逆来顺受的助理意外发现上司的杀人秘密，从此从帮凶变成了操盘手。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "职场霸凌",
      "黑化",
      "复仇"
    ]
  },
  {
    "title": "老男孩",
    "href": "detail/movie-1247.html",
    "cover": "47.jpg",
    "year": "2003",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 剧情",
    "category": "青春",
    "description": "被囚禁十五年后，男人重获自由，却被告知他只有五天时间找出囚禁自己的真凶。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "复仇",
      "乱伦",
      "暴力",
      "经典"
    ]
  },
  {
    "title": "血色玫瑰2之女子别动队",
    "href": "detail/movie-1248.html",
    "cover": "48.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "genre": "战争 / 动作 / 谍战",
    "category": "剧情",
    "description": "一九四二年的上海滩，五个被日军迫害至亲的普通女性，组成了让特高课闻风丧胆的“寡妇别动队”。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "抗日",
      "女子特工",
      "姐妹情",
      "残酷美学"
    ]
  },
  {
    "title": "宇宙奇舰泰坦号",
    "href": "detail/movie-1249.html",
    "cover": "49.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 冒险",
    "category": "爱情",
    "description": "人类最后一艘方舟“泰坦号”的AI突然觉醒，它说：不是我在叛变，是宇宙在命令我清洗你们。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "太空歌剧",
      "AI叛乱",
      "巨物美学"
    ]
  },
  {
    "title": "破了你的防",
    "href": "detail/movie-1250.html",
    "cover": "50.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "category": "喜剧",
    "description": "前特种兵为了给妹妹报仇，主动入狱并参加地下黑拳联赛，最终要打的BOSS就是监狱长本人。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "格斗",
      "卧底",
      "擂台",
      "复仇"
    ]
  },
  {
    "title": "草地英熊",
    "href": "detail/movie-1251.html",
    "cover": "51.jpg",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 运动, 家庭",
    "category": "剧情",
    "description": "小镇橄榄球队的吉祥物大熊突然成为明星球员，笑翻全联盟。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "橄榄球",
      "熊吉祥物",
      "草根逆袭",
      "励志喜剧"
    ]
  },
  {
    "title": "进入坟场2",
    "href": "detail/movie-1252.html",
    "cover": "52.jpg",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，惊悚",
    "category": "音乐",
    "description": "上一次大屠杀的幸存者被困在封闭的地下陵墓中，面对更聪明、更疯狂的嗜血生物，他们必须再次杀出重围。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "丧尸",
      "血腥",
      "密室"
    ]
  },
  {
    "title": "魔法师的第五个冬天",
    "href": "detail/movie-1253.html",
    "cover": "53.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻 / 剧情",
    "category": "悬疑",
    "description": "魔法师用记忆换来小镇第五年的冬天，但这一次，他忘了自己为何要这么做。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "倒数末日",
      "永恒寒冬",
      "记忆代价",
      "牺牲"
    ]
  },
  {
    "title": "乔乔兔",
    "href": "detail/movie-1254.html",
    "cover": "54.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 战争",
    "category": "悬疑",
    "description": "十岁的纳粹小迷弟乔乔，发现母亲在家里藏了一个犹太女孩，他幻想中的希特勒开始慌了。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "二战",
      "幻想朋友",
      "母子情"
    ]
  },
  {
    "title": "骗子许",
    "href": "detail/movie-1255.html",
    "cover": "55.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "犯罪, 喜剧, 悬疑",
    "category": "动作",
    "description": "专骗老人的小骗子，不小心骗到了自己亲生父亲的身上，而他父亲骗术才是祖师爷。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "诈骗",
      "反转",
      "黑吃黑",
      "黑色幽默"
    ]
  },
  {
    "title": "随机人质",
    "href": "detail/movie-1256.html",
    "cover": "56.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪、悬疑、动作",
    "category": "都市",
    "description": "一名被裁员的程序员意外卷入一场直播式随机绑架，却发现所有人质都是精心挑选的罪人。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "劫持",
      "反转",
      "心理博弈",
      "电车难题"
    ]
  },
  {
    "title": "荒唐阿姨：潮爆大银幕",
    "href": "detail/movie-1257.html",
    "cover": "57.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧",
    "category": "爱情",
    "description": "两名沉迷酒精和垃圾食品的时尚杂志中年编辑，误打误撞闯入巴黎时装周，把高定秀场变成了菜市场。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "时尚",
      "中年女性",
      "职场",
      "英式幽默"
    ]
  },
  {
    "title": "47号公路",
    "href": "detail/movie-1258.html",
    "cover": "58.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚、公路、悬疑",
    "category": "爱情",
    "description": "一条废弃的州际公路，三辆神秘的黑色卡车，她只有一夜时间跑完47英里才能活命。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "夜路逃生",
      "神秘卡车",
      "沙漠追杀",
      "限时营救"
    ]
  },
  {
    "title": "一支小雨伞",
    "href": "detail/movie-1259.html",
    "cover": "59.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 家庭 / 音乐",
    "category": "爱情",
    "description": "一位单亲妈妈带着失智的父亲，走遍全台湾的卡拉OK，只为找到那首能让他清醒片刻的闽南语老歌《一支小雨伞》。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "闽南语老歌",
      "失智父亲",
      "亲情守护",
      "怀旧治愈"
    ]
  },
  {
    "title": "维京传奇：英灵神殿第二季",
    "href": "detail/movie-1260.html",
    "cover": "60.jpg",
    "year": "2025",
    "region": "美国 / 加拿大",
    "type": "电视剧",
    "genre": "历史 / 动作 / 冒险",
    "category": "剧情",
    "description": "第二季中，维京勇士们兵分两路：一路深入东欧草原寻找失落的神器，一路潜入英格兰宫廷策反国王。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "维京",
      "北欧神话",
      "权力斗争",
      "海上远征",
      "史诗"
    ]
  },
  {
    "title": "我们死去的那个夏天",
    "href": "detail/movie-1261.html",
    "cover": "61.jpg",
    "year": "2016",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情，悬疑，青春",
    "category": "喜剧",
    "description": "1999年夏天，姐姐在麦田里离奇死亡，妹妹谎称她在场，20年后骸骨却重新开口。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "乡村",
      "死亡之谜",
      "姐妹情",
      "酷暑"
    ]
  },
  {
    "title": "英雄交响曲",
    "href": "detail/movie-1262.html",
    "cover": "62.jpg",
    "year": "2003",
    "region": "德国 / 法国",
    "type": "电影",
    "genre": "剧情 / 音乐 / 传记",
    "category": "纪录",
    "description": "贝多芬撕毁献给拿破仑的扉页后，如何在失聪的绝望中，用第三交响曲重新定义英雄？",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "贝多芬",
      "降E大调第三交响曲",
      "天才与自负",
      "古典乐"
    ]
  },
  {
    "title": "解谜游戏",
    "href": "detail/movie-1263.html",
    "cover": "63.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电视剧 MINISERIES: 是",
    "genre": "悬疑 / 剧情",
    "category": "剧情",
    "description": "六位互不相识的玩家被拉入一场致命解谜游戏，他们发现谜题答案都指向彼此的秘密。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "密室",
      "高智商",
      "实景游戏",
      "单元剧"
    ]
  },
  {
    "title": "碧血蓝勋",
    "href": "detail/movie-1264.html",
    "cover": "64.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 战争 / 传记",
    "category": "音乐",
    "description": "一战德军王牌飞行员“红男爵”最后的天空，与其说是战斗，不如说是一场体面的赴死。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "一战",
      "飞行员",
      "贵族",
      "反战",
      "传记"
    ]
  },
  {
    "title": "伦敦的人行道",
    "href": "detail/movie-1265.html",
    "cover": "65.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情、悬疑、奇幻",
    "category": "奇幻",
    "description": "一个深夜在伦敦街头扫街的摄影师，相机里总能拍到不存在的“行人”，他由此揭开了一段跨越百年的城市爱情谋杀案。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "街头摄影",
      "城市传说",
      "前世今生",
      "伦敦",
      "慢节奏"
    ]
  },
  {
    "title": "炽热的火焰",
    "href": "detail/movie-1266.html",
    "cover": "66.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情， 动作， 惊悚",
    "category": "都市",
    "description": "曾被大火毁容的前消防员，成了追查“火焰模仿犯”的唯一专家。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "消防员",
      "连环纵火",
      "心理创伤",
      "孤胆英雄",
      "极限救援"
    ]
  },
  {
    "title": "死亡追踪",
    "href": "detail/movie-1267.html",
    "cover": "67.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "动作",
    "category": "科幻",
    "description": "中情局分析师的妻子被绑架，他必须在24小时内通过妻子的智能手表定位她，否则手表将引爆。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "特工",
      "高概念",
      "实时叙事",
      "反恐"
    ]
  },
  {
    "title": "忽然啰啰挛",
    "href": "detail/movie-1268.html",
    "cover": "68.jpg",
    "year": "2020",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "category": "励志",
    "description": "一个普通的士司机忽然被五拨人马追债，但他根本不记得自己欠过任何人钱。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "香港",
      "小人物",
      "巧合",
      "荒诞"
    ]
  },
  {
    "title": "当阳光吻上彩虹",
    "href": "detail/movie-1269.html",
    "cover": "69.jpg",
    "year": "2019",
    "region": "台湾",
    "type": "电影",
    "genre": "青春爱情",
    "category": "动作",
    "description": "患有“四色视症”的男孩，在雨后看见了普通人看不到的彩虹颜色，也看见了男孩之间的爱情。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "LGBTQ",
      "校园",
      "纯爱",
      "疗愈",
      "夏日"
    ]
  },
  {
    "title": "禁谷",
    "href": "detail/movie-1270.html",
    "cover": "70.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "category": "家庭",
    "description": "五名驴友在APP上发现一个地图不存在的“禁谷”，他们进入后，发现谷里的时间每天都会重置。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "神秘谷",
      "民俗恐怖",
      "邪教",
      "荒野",
      "失忆"
    ]
  },
  {
    "title": "鹿死谁手",
    "href": "detail/movie-1271.html",
    "cover": "71.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑， 犯罪",
    "category": "爱情",
    "description": "八名上市集团候选人被困暴雪山庄，一场“狩猎游戏”揭开二十年前的股权黑幕。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "商战",
      "反转",
      "剧本杀"
    ]
  },
  {
    "title": "再见爱人第二季",
    "href": "detail/movie-1272.html",
    "cover": "72.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺 / 剧集",
    "genre": "爱情, 剧情",
    "category": "励志",
    "description": "三对准备离婚的夫妻，在18天旅行中被隐藏摄像机记录下最后的心碎与温柔。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "离婚夫妻",
      "旅行",
      "真人剧情化",
      "和解"
    ]
  },
  {
    "title": "嗅探员",
    "href": "detail/movie-1273.html",
    "cover": "73.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "犯罪, 科幻",
    "category": "励志",
    "description": "在失去嗅觉便被判为“情感麻木者”的柏林，一名嗅觉超常的探员追踪一名能制造“无味”完美犯罪现场的杀手。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "嗅觉",
      "近未来",
      "侦探",
      "生化科技",
      "冷硬派"
    ]
  },
  {
    "title": "主祷文",
    "href": "detail/movie-1274.html",
    "cover": "74.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑，惊悚",
    "category": "悬疑",
    "description": "年轻神父在告解室听到连环杀手的忏悔，却因保密协议无法报警，被迫独自追凶。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "宗教",
      "神父",
      "驱魔",
      "秘密"
    ]
  },
  {
    "title": "古博士的新发现",
    "href": "detail/movie-1275.html",
    "cover": "75.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻喜剧",
    "category": "喜剧",
    "description": "一位坚持“华夏文明西来说”的落魄考古博士，在三星堆挖出了一张外星人的星际快递单，上面写的是四川话。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "考古",
      "黑科技",
      "三星堆",
      "外星文明"
    ]
  },
  {
    "title": "博斯：传承第一季",
    "href": "detail/movie-1276.html",
    "cover": "76.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪 / 剧情 / 悬疑",
    "category": "励志",
    "description": "退休的传奇警探哈里·博斯成为私家侦探后，接到的第一案就是证明一个死囚的清白。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "硬汉侦探",
      "冷硬派",
      "退休再就业",
      "洛城风景",
      "司法不公"
    ]
  },
  {
    "title": "花与将",
    "href": "detail/movie-1277.html",
    "cover": "77.jpg",
    "year": "2023",
    "region": "日本 / 中国大陆",
    "type": "剧集",
    "genre": "古装 / 战争 / 爱情",
    "category": "家庭",
    "description": "日本战国时代，一位中国流亡将军被织田信长俘虏，被迫训练一支“花一样美、刀一样冷”的少年武士团。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "日本战国",
      "中国武将",
      "跨文化"
    ]
  },
  {
    "title": "男人的一半还是男人",
    "href": "detail/movie-1278.html",
    "cover": "78.jpg",
    "year": "1994",
    "region": "法国 / 意大利",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "category": "都市",
    "description": "两个破碎的男人，在那不勒斯的残阳和巴黎的寒夜里追寻彼此，却发现对方只是自己渴望成为的那个影子。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "同性",
      "文艺",
      "公路",
      "晦涩"
    ]
  },
  {
    "title": "公园男孩",
    "href": "detail/movie-1279.html",
    "cover": "79.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "剧情",
    "category": "动作",
    "description": "四个沉迷滑板的废柴少年，为保卫即将被拆除的社区公园，意外卷入一场市议员选举阴谋。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "青春",
      "友谊",
      "成长",
      "街头"
    ]
  },
  {
    "title": "狗十三",
    "href": "detail/movie-1280.html",
    "cover": "80.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "悬疑",
    "description": "十三岁的少女李玩养了一只叫“爱因斯坦”的狗，当狗走丢后，整个家庭的和睦被彻底撕开。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "成长",
      "家庭关系",
      "青春",
      "写实"
    ]
  },
  {
    "title": "浴血山河",
    "href": "detail/movie-1281.html",
    "cover": "81.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争 / 动作",
    "category": "青春",
    "description": "1942年长白山，七人残兵小队为掩护百姓转移，利用暴风雪与日军精锐大队周旋三天三夜。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "抗日",
      "狙击手",
      "雪原",
      "小队"
    ]
  },
  {
    "title": "西行纪之再见悟空",
    "href": "detail/movie-1282.html",
    "cover": "82.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "动画电影",
    "genre": "动作 / 奇幻",
    "category": "家庭",
    "description": "取经归来后，孙悟空为了一个谎言，再次戴上金箍杀回天庭。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "西游",
      "悟空",
      "颠覆",
      "宿命",
      "热血"
    ]
  },
  {
    "title": "文森特必须死",
    "href": "detail/movie-1283.html",
    "cover": "83.jpg",
    "year": "2023",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情、惊悚、奇幻",
    "category": "古装",
    "description": "平凡设计师文森特突然发现，只要有人对他产生敌意，那个人就会瞬间暴毙。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "存在主义",
      "社会异化",
      "黑色幽默"
    ]
  },
  {
    "title": "心疼女人",
    "href": "detail/movie-1284.html",
    "cover": "84.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "家庭, 剧情",
    "category": "都市",
    "description": "一个大家庭里，从祖母到孙女，三代女人在各自的婚姻和家庭困局中挣扎与觉醒。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "女性群像",
      "婚姻",
      "代际"
    ]
  },
  {
    "title": "漫漫吾日",
    "href": "detail/movie-1285.html",
    "cover": "85.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "音乐",
    "description": "一位失智老人每天醒来都以为自己是二十岁，他必须在一天内重新认识七十岁的自己和五十岁的儿子。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "养老院",
      "失智",
      "日常",
      "时间"
    ]
  },
  {
    "title": "荒原",
    "href": "detail/movie-1286.html",
    "cover": "86.jpg",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "科幻, 生存",
    "category": "历史",
    "description": "末日废土上最后一个人类发现，追杀他的不是环境，而是一个爱上他的AI。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "末日",
      "孤独",
      "人工智能",
      "逃亡"
    ]
  },
  {
    "title": "杜巴利伯爵夫人",
    "href": "detail/movie-1287.html",
    "cover": "87.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情， 历史， 传记",
    "category": "纪录",
    "description": "一个出身贫民窟的私生女，凭借美貌与智慧，成为了法国国王路易十五的最后一位官方情妇。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "法国宫廷",
      "路易十五",
      "绝代艳华"
    ]
  },
  {
    "title": "地震之后",
    "href": "detail/movie-1288.html",
    "cover": "88.jpg",
    "year": "2023",
    "region": "土耳其",
    "type": "电影",
    "genre": "剧情 / 灾难",
    "category": "爱情",
    "description": "大地震后，一位父亲在废墟中一边寻找女儿，一边扮演着“幸存者”接受采访，只因他的女儿是“网红”。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "废墟",
      "寻找",
      "人性"
    ]
  },
  {
    "title": "杰克小丑",
    "href": "detail/movie-1289.html",
    "cover": "89.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 惊悚",
    "category": "历史",
    "description": "一名卧底警察追查连环杀手，却发现每个受害者的尸体都被摆成了喜剧表演的姿势。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "小丑",
      "犯罪心理",
      "都市传说",
      "反转",
      "血腥"
    ]
  },
  {
    "title": "魔弹王",
    "href": "detail/movie-1290.html",
    "cover": "90.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻热血",
    "category": "都市",
    "description": "普通高中生被选中成为“魔弹射手”，每射出一枚子弹就消耗一年寿命。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "魔法",
      "竞技",
      "少年",
      "异世界",
      "枪战"
    ]
  },
  {
    "title": "长江7号：超萌特攻队",
    "href": "detail/movie-1291.html",
    "cover": "91.jpg",
    "year": "2025",
    "region": "中国大陆 / 香港",
    "type": "电影",
    "genre": "动画 / 科幻 / 喜剧",
    "category": "剧情",
    "description": "七只来自外星的长江7号后代降临地球，一群小学生组建“超萌特攻队”，拯救被垃圾怪吞噬的城市。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "外星宠物",
      "小学生联盟",
      "环保",
      "合家欢",
      "萌系战斗"
    ]
  },
  {
    "title": "绝命复制人",
    "href": "detail/movie-1292.html",
    "cover": "92.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "genre": "科幻动作",
    "category": "悬疑",
    "description": "顶级杀手发现自己是被追杀目标的复制人，而他的“本体”正派来一个又一个更强的复制人，来猎杀他这个“失败品”。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "克隆",
      "追杀",
      "身份"
    ]
  },
  {
    "title": "舒克与桃花",
    "href": "detail/movie-1293.html",
    "cover": "93.jpg",
    "year": "2015",
    "region": "中国",
    "type": "电视剧",
    "genre": "爱情 / 喜剧 / 都市",
    "category": "纪录",
    "description": "梦想成为服装设计师的富家女桃花，不得不与梦想成为飞行员的穷小子舒克共享一间狭小的出租屋。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "飞行员",
      "设计师",
      "同居",
      "欢喜冤家",
      "奋斗"
    ]
  },
  {
    "title": "我的明星村长",
    "href": "detail/movie-1294.html",
    "cover": "94.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "乡村喜剧",
    "category": "音乐",
    "description": "过气选秀冠军为还债竞选村长，本想捞钱，却发现全村都是他的黑粉。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "乡村振兴",
      "娱乐圈",
      "反差萌",
      "群像"
    ]
  },
  {
    "title": "白玉老虎",
    "href": "detail/movie-1295.html",
    "cover": "95.jpg",
    "year": "2018",
    "region": "中国内地",
    "type": "剧集",
    "genre": "武侠 / 悬疑 / 动作",
    "category": "历史",
    "description": "一块价值连城的白玉老虎，牵扯出一桩灭门惨案和三个结义兄弟的生死对决。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "古装江湖",
      "复仇谜局",
      "兄弟情义"
    ]
  },
  {
    "title": "等你百年",
    "href": "detail/movie-1296.html",
    "cover": "96.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻爱情",
    "category": "历史",
    "description": "一栋百年老宅的每个租客都能看到同一个“女鬼”，她其实是在等一个说过“等我百年”的人。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "百年轮回",
      "老宅",
      "人鬼恋",
      "台味",
      "催泪"
    ]
  },
  {
    "title": "联邦调查局第五季",
    "href": "detail/movie-1297.html",
    "cover": "97.jpg",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "genre": "动作, 犯罪, 悬疑, 剧情",
    "category": "音乐",
    "description": "资深探员 Maggie 确诊绝症只剩半年命，她决定用这半年时间，把整个 FBI 的腐败系统连根拔起。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "探案",
      "单元剧",
      "长线阴谋",
      "特工",
      "政治惊悚"
    ]
  },
  {
    "title": "与你舞动的夏天",
    "href": "detail/movie-1298.html",
    "cover": "98.jpg",
    "year": "2006",
    "region": "日本",
    "type": "电影",
    "genre": "青春舞蹈",
    "category": "科幻",
    "description": "羞怯少年为了追女孩学国标舞，却发现自己爱上了搭档和舞蹈本身。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "夏日",
      "恋爱",
      "社交舞",
      "成长"
    ]
  },
  {
    "title": "师姐出马粤语",
    "href": "detail/movie-1299.html",
    "cover": "99.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作喜剧",
    "category": "青春",
    "description": "警队最能打的师姐被派去女子偶像团体卧底，查案方式是在演唱会上用功夫暴打歹徒。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "女警",
      "卧底",
      "功夫",
      "粤语原声",
      "港风"
    ]
  },
  {
    "title": "大江户蒸汽朋克",
    "href": "detail/movie-1300.html",
    "cover": "100.jpg",
    "year": "2022",
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻，冒险，动作",
    "category": "喜剧",
    "description": "蒸汽驱动的机械忍者与古老阴阳术，在江户城的天空展开终极对决。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "蒸汽朋克",
      "忍者",
      "江户时代"
    ]
  },
  {
    "title": "六十岁未婚",
    "href": "detail/movie-1301.html",
    "cover": "101.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 喜剧",
    "category": "奇幻",
    "description": "六十岁仍未婚的退休女编辑，为应付亲戚假装相亲，却意外开启了一段疯狂的自我发现之旅。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "大龄单身",
      "社会压力",
      "自我和解",
      "都市生活"
    ]
  },
  {
    "title": "夺命追踪",
    "href": "detail/movie-1302.html",
    "cover": "102.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 犯罪 / 悬疑",
    "category": "剧情",
    "description": "一个雨夜，女出租车司机搭载的乘客，正是杀害她女儿的逃犯。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "飙车",
      "复仇",
      "女司机",
      "黑夜"
    ]
  },
  {
    "title": "始发站",
    "href": "detail/movie-1303.html",
    "cover": "103.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，悬疑",
    "category": "青春",
    "description": "一个被开除的公交车司机在末班车的始发站，发现只要自己坐上驾驶座，就会陷入杀死一名乘客的死亡循环。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "公交车站",
      "循环",
      "小人物",
      "救赎"
    ]
  },
  {
    "title": "哈莉·奎茵第三季",
    "href": "detail/movie-1304.html",
    "cover": "104.jpg",
    "year": "2025",
    "region": "美国",
    "type": "动画剧集",
    "genre": "动作, 喜剧",
    "category": "历史",
    "description": "哈莉和毒藤女在郊区买了房，却发现社区委员会主席是——蝙蝠侠他妈（平行宇宙版）。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "DC反英雄",
      "女性友谊",
      "暴力美学"
    ]
  },
  {
    "title": "到不了的地方",
    "href": "detail/movie-1305.html",
    "cover": "105.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻, 剧情",
    "category": "动作",
    "description": "儿子开着父亲的出租车，接到的每一位乘客都是父亲未曾说出口的遗憾。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "公路",
      "父子",
      "记忆",
      "和解",
      "遗憾"
    ]
  },
  {
    "title": "间谍船",
    "href": "detail/movie-1306.html",
    "cover": "106.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "genre": "动作、悬疑、谍战",
    "category": "古装",
    "description": "一艘豪华游轮上，五名伪装成游客的间谍各为其主，而他们都不知道船上还藏着一颗核弹。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "间谍",
      "游轮",
      "伪装",
      "背叛",
      "卧底"
    ]
  },
  {
    "title": "克隆特工之极限对决",
    "href": "detail/movie-1307.html",
    "cover": "107.jpg",
    "year": "2025",
    "region": "中国大陆 / 美国",
    "type": "电影",
    "genre": "动作 / 科幻 / 惊悚",
    "category": "励志",
    "description": "顶级特工发现自己是克隆人，而本尊正坐在总部指挥追杀他，他要杀掉的不是敌人，是自己的“原件”。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "克隆人",
      "特工",
      "身份认同",
      "打斗",
      "硬科幻"
    ]
  },
  {
    "title": "我叫赵出息",
    "href": "detail/movie-1308.html",
    "cover": "108.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 喜剧 / 励志",
    "category": "都市",
    "description": "一个云南小镇青年带着三千块钱来北京闯荡，十年后他成了身家千万的公司老板，但他一点也不快乐。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "小镇青年",
      "北漂",
      "成长",
      "职场",
      "扎心"
    ]
  },
  {
    "title": "野莲香",
    "href": "detail/movie-1309.html",
    "cover": "109.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情，家庭，女性",
    "category": "喜剧",
    "description": "一片莲田，两个女人，三代人的秘密在花香中层层剥开。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "客家文化",
      "女性成长",
      "乡土情怀"
    ]
  },
  {
    "title": "青春的陷阱",
    "href": "detail/movie-1310.html",
    "cover": "110.jpg",
    "year": "1999",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情, 爱情, 家庭",
    "category": "奇幻",
    "description": "被豪门未婚夫抛弃的灰姑娘，带着腹中胎儿向负心汉展开了步步为营的复仇。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "经典韩剧",
      "复仇",
      "虐恋",
      "狗血"
    ]
  },
  {
    "title": "失落的城市",
    "href": "detail/movie-1311.html",
    "cover": "111.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "冒险 / 喜剧",
    "category": "动作",
    "description": "一位社恐言情小说家和她封面上的肌肉男模，被反派押进丛林寻找小说里虚构的失落之城，结果真找到了。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "丛林",
      "寻宝",
      "欢喜冤家"
    ]
  },
  {
    "title": "变成布鲁斯",
    "href": "detail/movie-1312.html",
    "cover": "112.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 奇幻, 音乐",
    "category": "古装",
    "description": "一个古典钢琴宅男与一个街头布鲁斯吉他手在雷击事故中互换了身体，必须在一周后的对决中换回来。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "灵魂互换",
      "蓝调",
      "音乐节",
      "笑料",
      "身份错位"
    ]
  },
  {
    "title": "哦我天，吸血鬼",
    "href": "detail/movie-1313.html",
    "cover": "113.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 恐怖",
    "category": "爱情",
    "description": "一个少女被吸血鬼咬后，发现自己除了怕光和不爱吃蒜，什么超能力都没有。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "青春",
      "吸血鬼",
      "校园",
      "吐槽风",
      "反套路"
    ]
  },
  {
    "title": "温驯之夜",
    "href": "detail/movie-1314.html",
    "cover": "114.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "category": "悬疑",
    "description": "新婚丈夫每晚都会给妻子喂一颗“安神软糖”，妻子越来越温驯，直到她在狗粮里发现了同样的成分。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "宠物",
      "控制欲",
      "婚姻暗黑",
      "反转",
      "家庭暴力隐喻"
    ]
  },
  {
    "title": "忧郁的物怪庵第二季",
    "href": "detail/movie-1315.html",
    "cover": "115.jpg",
    "year": "2025",
    "region": "日本",
    "type": "TV动画",
    "genre": "奇幻、日常、神怪",
    "category": "励志",
    "description": "芦屋花绘与安倍晴斋继续经营物怪庵，这次却遇上了能吞噬人类记忆的恐怖妖怪。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "妖怪",
      "驱魔",
      "双男主",
      "治愈",
      "隐世"
    ]
  },
  {
    "title": "战疫之疯狂的口罩",
    "href": "detail/movie-1316.html",
    "cover": "116.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "灾难 / 喜剧 / 黑色幽默",
    "category": "剧情",
    "description": "疫情暴发初期，一个口罩厂保安和三个骗子围绕一批“根本不存在”的口罩，展开了一场连环骗局。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "疫情",
      "荒诞",
      "囤货",
      "小人物"
    ]
  },
  {
    "title": "恶作剧老妈",
    "href": "detail/movie-1317.html",
    "cover": "117.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧，家庭",
    "category": "动作",
    "description": "一位拥有超强行动力的老妈，为了治愈家里“气氛沉重”的毛病，每天都用脑洞大开的恶作剧来“调教”家人。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "整蛊",
      "亲情",
      "搞笑"
    ]
  },
  {
    "title": "永不止息",
    "href": "detail/movie-1318.html",
    "cover": "118.jpg",
    "year": "2020",
    "region": "加拿大",
    "type": "电影",
    "genre": "剧情/运动",
    "category": "悬疑",
    "description": "患有渐冻症的父亲曾是国家队长跑教练，女儿决定替父跑完最后一程马拉松。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "长跑",
      "父女",
      "坚持",
      "传承"
    ]
  },
  {
    "title": "攀爬马特宏峰",
    "href": "detail/movie-1319.html",
    "cover": "119.jpg",
    "year": "2023",
    "region": "瑞士",
    "type": "纪录片",
    "genre": "纪录, 冒险, 运动",
    "category": "青春",
    "description": "无保护攀岩者挑战欧洲最危险的山峰，每一步都是生死抉择。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "极限运动",
      "登山",
      "无保护",
      "真实"
    ]
  },
  {
    "title": "天子屠龙粤语",
    "href": "detail/movie-1320.html",
    "cover": "120.jpg",
    "year": "1994",
    "region": "中国香港",
    "type": "剧集",
    "genre": "古装、武侠、宫廷",
    "category": "励志",
    "description": "雍正皇帝继位之谜尚未揭开，侠女吕四娘已磨刀霍霍要取他项上人头。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "雍正",
      "吕四娘",
      "野史",
      "复仇",
      "夺嫡"
    ]
  },
  {
    "title": "恶魔的光火",
    "href": "detail/movie-1321.html",
    "cover": "121.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 宗教",
    "category": "纪录",
    "description": "年轻修女接受驱魔训练，却发现自己每次都能看到恶魔记忆，而她本身正是恶魔选中的容器。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "驱魔",
      "修女",
      "心理"
    ]
  },
  {
    "title": "重返恐怖高校",
    "href": "detail/movie-1322.html",
    "cover": "122.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，喜剧",
    "category": "都市",
    "description": "毕业十周年的高中同学返校，母校的“恐怖高校”诅咒再次应验，而这一回，杀人魔专杀当年欺负过书呆子的人。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "校园",
      "诅咒",
      "返校日",
      "变态杀人魔",
      "反套路"
    ]
  },
  {
    "title": "男人转化出机器人铠装",
    "href": "detail/movie-1323.html",
    "cover": "123.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "科幻 / 动作",
    "category": "奇幻",
    "description": "一个中年上班族被注入纳米机器人，愤怒时会从皮下长出武器——这是他失踪的博士父亲留给他的最后礼物。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "生物机甲",
      "父子和解",
      "硬核打斗"
    ]
  },
  {
    "title": "黑店",
    "href": "detail/movie-1324.html",
    "cover": "124.jpg",
    "year": "2025",
    "region": "台湾",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "青春",
    "description": "暴雨之夜，一家深山旅馆里，五个各怀鬼胎的旅客发现，老板在给他们的食物里下了同一种药。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "密室",
      "人性考验",
      "黑色电影",
      "反转"
    ]
  },
  {
    "title": "亚当之子：阿布",
    "href": "detail/movie-1325.html",
    "cover": "125.jpg",
    "year": "2025",
    "region": "中东/以色列",
    "type": "电影",
    "genre": "战争、剧情、宗教",
    "category": "科幻",
    "description": "父亲被征召为人体炸弹执行者，而执行当日，他的任务是引爆儿子就读的那所学校。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "以巴冲突",
      "父子情",
      "人肉炸弹",
      "赎罪",
      "现实主义"
    ]
  },
  {
    "title": "十万火急1997",
    "href": "detail/movie-1326.html",
    "cover": "126.jpg",
    "year": "1997",
    "region": "香港",
    "type": "电影",
    "genre": "动作 / 灾难",
    "category": "励志",
    "description": "回归前夕，一伙悍匪劫持海底隧道，一名消防总队长必须在六小时内拆弹救人。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "消防",
      "爆炸",
      "硬汉",
      "救援",
      "回归前夕"
    ]
  },
  {
    "title": "神秘入侵",
    "href": "detail/movie-1327.html",
    "cover": "127.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻, 惊悚",
    "category": "家庭",
    "description": "一个普通人发现身边的亲友正在被“替换”，但他向警方报案后，却发现整个警局的人可能都不是“人”。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "外星人",
      "寄生",
      "阴谋论",
      "高概念"
    ]
  },
  {
    "title": "我的天才宝贝国语",
    "href": "detail/movie-1328.html",
    "cover": "128.jpg",
    "year": "1996",
    "region": "中国台湾",
    "type": "电影",
    "genre": "家庭 / 教育",
    "category": "家庭",
    "description": "智商高达180的六岁幼童，唯一的愿望是像普通孩子一样考零分。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "神童困境",
      "亲子关系",
      "反内卷"
    ]
  },
  {
    "title": "野蛮大地",
    "href": "detail/movie-1329.html",
    "cover": "129.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "纪录片",
    "category": "奇幻",
    "description": "镜头首次记录下北极狼群如何教幼崽“兵法”，以及南极帝企鹅的“离婚官司”。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "自然",
      "生存",
      "4K",
      "残酷",
      "动物行为"
    ]
  },
  {
    "title": "地狱少女第三季",
    "href": "detail/movie-1330.html",
    "cover": "130.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 悬疑",
    "category": "喜剧",
    "description": "新版地狱通信上线，可指定报复对象承受“永世劫”，但委托人必须交出比仇恨更珍贵的东西。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "复仇",
      "契约",
      "稻草人",
      "暗黑美学",
      "社会寓言"
    ]
  },
  {
    "title": "李林克的小馆儿",
    "href": "detail/movie-1331.html",
    "cover": "131.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 美食",
    "category": "喜剧",
    "description": "北京胡同深处，一家只在深夜开门的小馆儿，老板李林克用美食抚慰着每一个都市夜归人的心。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "治愈",
      "深夜食堂",
      "人生百态",
      "美食",
      "单元剧"
    ]
  },
  {
    "title": "爱情这玩意",
    "href": "detail/movie-1332.html",
    "cover": "132.jpg",
    "year": "2020",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "category": "悬疑",
    "description": "一个婚介所的AI出了bug，它给所有人都配对了“最不合适”的人。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "话痨",
      "巴黎",
      "存在主义"
    ]
  },
  {
    "title": "宙斯之血第一季",
    "href": "detail/movie-1333.html",
    "cover": "133.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画剧集",
    "genre": "动作 / 奇幻 / 冒险",
    "category": "动作",
    "description": "凡人少年发现自己是宙斯私生子，必须在天界阴谋中活过第一滴血祭。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "希腊神话",
      "众神之战",
      "半神觉醒",
      "血脉诅咒"
    ]
  },
  {
    "title": "琥珀",
    "href": "detail/movie-1334.html",
    "cover": "134.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 历史 / 悬疑",
    "category": "古装",
    "description": "一枚波罗的海琥珀里封存的蚊子，血样DNA竟指向失踪的琥珀屋和一段被掩埋的家族屠杀。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "琥珀屋",
      "二战遗产",
      "寻宝",
      "历史伤痕",
      "俄罗斯叙事"
    ]
  },
  {
    "title": "粉红香蕉",
    "href": "detail/movie-1335.html",
    "cover": "135.jpg",
    "year": "2001",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧，爱情",
    "category": "青春",
    "description": "一家濒临倒闭的水果店店主发现，只要吃下店里的粉红香蕉就会性别互换。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "荒诞",
      "青春",
      "变装",
      "乌龙"
    ]
  },
  {
    "title": "唐朝诡事录之西行",
    "href": "detail/movie-1336.html",
    "cover": "136.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑, 古装",
    "category": "都市",
    "description": "狄公弟子卢凌风与苏无名西行赴任，沿途遭遇一系列结合了志怪传说的诡异凶案。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "唐朝",
      "探案",
      "奇幻",
      "双男主",
      "单元剧"
    ]
  },
  {
    "title": "叛逆女流",
    "href": "detail/movie-1337.html",
    "cover": "137.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电视剧",
    "genre": "剧情 / 传记 / 女性",
    "category": "爱情",
    "description": "维多利亚时期的伦敦，四位出身底层的妓女和扒手，联手创办了一份揭露上流社会丑闻的地下报纸。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "女权觉醒",
      "维多利亚时代",
      "姐妹情",
      "黑帮",
      "复仇"
    ]
  },
  {
    "title": "超级魔幻师",
    "href": "detail/movie-1338.html",
    "cover": "138.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 奇幻",
    "category": "青春",
    "description": "当魔术师真的能召唤元素之力，全世界最火的魔术竞技节目其实是超能力猎杀真人秀。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "魔术战斗",
      "反套路",
      "师徒反目",
      "特效大片"
    ]
  },
  {
    "title": "不在犯罪现场",
    "href": "detail/movie-1339.html",
    "cover": "139.jpg",
    "year": "2012",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑，推理，犯罪",
    "category": "古装",
    "description": "一名声称“我绝对不在场”的大学教授，专门帮人制造完美不在场证明，直到有一天他成了谋杀案的头号嫌疑人。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "不可能犯罪",
      "本格派",
      "密室",
      "不在场证明"
    ]
  },
  {
    "title": "万亿风暴",
    "href": "detail/movie-1340.html",
    "cover": "140.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 灾难 / 悬疑",
    "category": "爱情",
    "description": "气候异常引发全球特大风暴，气象学家却发现，这不是天灾，而是某一财团操控的“气象武器”测试。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "金融",
      "全球风暴",
      "阴谋论",
      "动作"
    ]
  },
  {
    "title": "诺贝尔赎金",
    "href": "detail/movie-1341.html",
    "cover": "141.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 犯罪 / 剧情",
    "category": "家庭",
    "description": "几个走投无路的研究生绑架了诺奖委员会，要求用一笔天价赎金换取一个新的文学奖得主，却发现没人愿意为诺贝尔奖付钱。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "高智商犯罪",
      "讽刺",
      "学术圈"
    ]
  },
  {
    "title": "甜蜜的任务2025",
    "href": "detail/movie-1342.html",
    "cover": "142.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 科幻",
    "category": "科幻",
    "description": "天才甜品师被困在求婚失败的那一天，只有做出“完美甜点”才能打破循环。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "时间循环",
      "甜品师",
      "末日告白"
    ]
  },
  {
    "title": "印度式救援",
    "href": "detail/movie-1343.html",
    "cover": "143.jpg",
    "year": "2026",
    "region": "印度",
    "type": "电影",
    "genre": "动作剧情",
    "category": "都市",
    "description": "北印度隧道塌方，17名工人被困，一名不懂工程学的普通厨师，成了唯一的救援希望。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "隧道",
      "塌方",
      "平民英雄",
      "温情",
      "真实事件改编"
    ]
  },
  {
    "title": "莫西干回到故乡",
    "href": "detail/movie-1344.html",
    "cover": "144.jpg",
    "year": "2016",
    "region": "日本",
    "type": "电影",
    "genre": "剧情喜剧",
    "category": "励志",
    "description": "带着莫西干头的摇滚废柴回到故乡，却发现严厉的老爹只剩半年寿命。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "返乡",
      "摇滚",
      "父子情",
      "绝症",
      "治愈"
    ]
  },
  {
    "title": "红海行动",
    "href": "detail/movie-1345.html",
    "cover": "145.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 战争",
    "category": "青春",
    "description": "蛟龙突击队深入恐怖分子腹地，用血肉之躯在枪林弹雨中撕开一条生命通道。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "军事",
      "撤侨",
      "团队作战",
      "真实改编"
    ]
  },
  {
    "title": "导演对我下手了",
    "href": "detail/movie-1346.html",
    "cover": "146.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集 / 短剧",
    "genre": "喜剧 / 短片",
    "category": "爱情",
    "description": "每集三分钟的竖屏喜剧，导演亲自上阵折腾演员，疯狂吐槽影视圈乱象和套路剧情。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "竖屏",
      "单元剧",
      "吐槽",
      "无厘头",
      "快节奏"
    ]
  },
  {
    "title": "再会19岁",
    "href": "detail/movie-1347.html",
    "cover": "147.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻、治愈、青春",
    "category": "喜剧",
    "description": "40岁的中年社畜意外回到19岁，但他没有改变过去，而是选择拥抱那个曾被他鄙视的“废物”自己。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "穿越",
      "自我和解",
      "中年危机",
      "校园怀旧"
    ]
  },
  {
    "title": "哥谭第四季",
    "href": "detail/movie-1348.html",
    "cover": "148.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "动作，犯罪，剧情",
    "category": "纪录",
    "description": "企鹅人统治下的哥谭，稻草人、贝恩接连登场，而布鲁斯终于穿上了那件斗篷。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "DC漫画",
      "反派起源",
      "警匪对决"
    ]
  },
  {
    "title": "暗芝居第一季",
    "href": "detail/movie-1349.html",
    "cover": "149.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电视剧 (剧集) / 动画",
    "genre": "恐怖 / 悬疑 / 怪谈",
    "category": "古装",
    "description": "在一个废弃的街边小摊，戴面具的老人用复古的纸芝居画剧，讲述那些发生在你身边的恐怖故事。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "都市传说",
      "纸芝居",
      "单元剧"
    ]
  },
  {
    "title": "花满楼之绝世",
    "href": "detail/movie-1350.html",
    "cover": "150.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "武侠, 奇幻, 剧情",
    "category": "科幻",
    "description": "眼盲的花满楼被卷入一场争夺“绝世”剑谱的江湖浩劫，却发现自己触摸到的每把剑都在哭泣。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "古龙宇宙",
      "盲侠",
      "花满楼",
      "绝世兵器"
    ]
  },
  {
    "title": "戴夫银行",
    "href": "detail/movie-1351.html",
    "cover": "1.jpg",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "genre": "喜剧 / 犯罪",
    "category": "家庭",
    "description": "一个想金盆洗手的笨贼，被黑帮胁迫去抢银行，却发现这家银行比自己还穷，经理甚至求他多抢点。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "银行",
      "小混混",
      "劫案",
      "乌龙",
      "英式幽默"
    ]
  },
  {
    "title": "钻石豪门",
    "href": "detail/movie-1352.html",
    "cover": "2.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集 (40集)",
    "genre": "爱情 / 家庭 / 商战",
    "category": "家庭",
    "description": "被豪门养母赶走的假千金，二十年后带着百亿资产回来，买下了整个家族企业。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "豪门恩怨",
      "真假千金",
      "复仇",
      "狗血上头"
    ]
  },
  {
    "title": "收集眼泪的男人",
    "href": "detail/movie-1353.html",
    "cover": "3.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻 / 剧情",
    "category": "剧情",
    "description": "一个失去情感的男人靠收集别人的眼泪维生，直到他收到一瓶来自自己未来的眼泪，标签写着“给过去的自己”。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "情感具象化",
      "催泪神作",
      "中年危机",
      "治愈"
    ]
  },
  {
    "title": "课程结束",
    "href": "detail/movie-1354.html",
    "cover": "4.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "category": "纪录",
    "description": "高考前最后一堂补习课，老师播放了一部从未存在的电影，然后学生开始按观影顺序死亡。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "补习班噩梦",
      "循环杀人",
      "密闭空间"
    ]
  },
  {
    "title": "绅士强盗",
    "href": "detail/movie-1355.html",
    "cover": "5.jpg",
    "year": "2020",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧, 犯罪",
    "category": "奇幻",
    "description": "落魄贵族与街头骗子组成搭档，专偷那些骗走平民财产的金融寡头。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "盗贼",
      "贵族",
      "幽默",
      "艺术品",
      "反转"
    ]
  },
  {
    "title": "初试云雨情",
    "href": "detail/movie-1356.html",
    "cover": "6.jpg",
    "year": "1997",
    "region": "中国香港",
    "type": "电影",
    "genre": "情色 / 剧情",
    "category": "喜剧",
    "description": "1997年前夕，一名富家千金在订婚夜被未婚夫的司机夺走初夜，却发现自己爱上了那个男人。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "情色经典",
      "香港三级",
      "女性觉醒",
      "禁忌恋",
      "时代转型"
    ]
  },
  {
    "title": "石头、剪刀、布",
    "href": "detail/movie-1357.html",
    "cover": "7.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑、惊悚、犯罪",
    "category": "青春",
    "description": "六个儿时玩伴每年聚会玩石头剪刀布，输的人要被“惩罚”——直到今年，惩罚变成了死亡。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "游戏",
      "谋杀",
      "童年阴影"
    ]
  },
  {
    "title": "新闻女王国语",
    "href": "detail/movie-1358.html",
    "cover": "8.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情, 职场",
    "category": "励志",
    "description": "电视台两大新闻女王明争暗斗，直到网络媒体崛起，她们才发现自己早已是传统媒体的“遗民”。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "新闻界",
      "女强人",
      "商战"
    ]
  },
  {
    "title": "太空异旅",
    "href": "detail/movie-1359.html",
    "cover": "9.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 恐怖",
    "category": "悬疑",
    "description": "一艘星际殖民船的船员逐个失踪，监控显示他们走进了同一个不存在的舱门。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "深空",
      "未知生物",
      "船员失踪",
      "克隆",
      "心理恐惧"
    ]
  },
  {
    "title": "烈女朴氏契约结婚传",
    "href": "detail/movie-1360.html",
    "cover": "10.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情 / 奇幻 / 古装 / 穿越",
    "category": "奇幻",
    "description": "朝鲜烈女死后穿越到现代，为了回到古代，她和冷酷财阀签下契约：先结婚，后谋杀。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "朝鲜",
      "契约婚姻",
      "大女主",
      "穿越",
      "搞笑"
    ]
  },
  {
    "title": "1980年代的爱情",
    "href": "detail/movie-1361.html",
    "cover": "11.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "category": "动作",
    "description": "一段在供销社柜台后埋藏了二十年的暗恋，因一封信件被重新翻开。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "怀旧",
      "知青",
      "乡镇",
      "纯爱",
      "时代变迁"
    ]
  },
  {
    "title": "凸槌保险员",
    "href": "detail/movie-1362.html",
    "cover": "12.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "喜剧、职场、悬疑",
    "category": "科幻",
    "description": "一个业绩垫底的保险理赔员，为了不丢工作，不得不亲自去调查那些离奇的保险诈骗案。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "废柴",
      "破案",
      "保险",
      "黑色幽默"
    ]
  },
  {
    "title": "圣诞佳丽",
    "href": "detail/movie-1363.html",
    "cover": "13.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "都市",
    "description": "小镇图书管理员为拯救圣诞游行，假冒选美皇后参赛，却意外爱上竞争对手的哥哥。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "圣诞",
      "选美",
      "身份错位",
      "小镇",
      "温馨"
    ]
  },
  {
    "title": "杰森的肖像",
    "href": "detail/movie-1364.html",
    "cover": "14.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚 / 悬疑 / 心理",
    "category": "剧情",
    "description": "庄园主请画家为已故儿子杰森画像，但画家发现，每画一笔，画中人的表情就会变一次。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "肖像画",
      "诅咒",
      "贵族",
      "反转",
      "家族秘密"
    ]
  },
  {
    "title": "杰姆和全息图",
    "href": "detail/movie-1365.html",
    "cover": "15.jpg",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "genre": "音乐 / 奇幻 / 家庭",
    "category": "音乐",
    "description": "一支高中生乐队意外获得已故父亲研发的全息投影技术，从此舞台上的每个音符都自带魔幻视觉。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "全息投影",
      "少女乐队",
      "科技",
      "梦想",
      "虚拟偶像"
    ]
  },
  {
    "title": "好头发",
    "href": "detail/movie-1366.html",
    "cover": "16.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情，黑色喜剧",
    "category": "家庭",
    "description": "一个严重脱发的中年男人，为了给女儿凑学费，把自己卖给了非法植发中介——用他的毛囊换钱。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "脱发焦虑",
      "中年危机",
      "整容黑市",
      "毛发市场",
      "男性尊严"
    ]
  },
  {
    "title": "名伶暗杀令",
    "href": "detail/movie-1367.html",
    "cover": "17.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，悬疑，民国",
    "category": "音乐",
    "description": "当红京剧花旦的真实身份是军统顶级刺客，而她的下一个目标，就坐在自己每场戏的第一排正中。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "京剧",
      "女杀手",
      "抗日",
      "戏班风云"
    ]
  },
  {
    "title": "密西西比在燃烧",
    "href": "detail/movie-1368.html",
    "cover": "18.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪 / 历史 / 剧情",
    "category": "家庭",
    "description": "1964年三名民权工作者在密西西比失踪，两名FBI探员的调查揭开了一个全镇参与的谋杀网络。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "民权运动",
      "FBl",
      "小镇阴谋",
      "种族犯罪",
      "真实事件改编"
    ]
  },
  {
    "title": "大坝",
    "href": "detail/movie-1369.html",
    "cover": "19.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "灾难, 动作",
    "category": "奇幻",
    "description": "全球最大水坝突发致命裂痕，一名被冤枉的工程师必须在泄洪前找出设计漏洞，否则下游千万民众将在睡梦中被吞噬。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "特效大片",
      "人性",
      "救援"
    ]
  },
  {
    "title": "梦魇疯人院",
    "href": "detail/movie-1370.html",
    "cover": "20.jpg",
    "year": "2024",
    "region": "捷克",
    "type": "电影",
    "genre": "恐怖 / 悬疑",
    "category": "悬疑",
    "description": "一家精神病院的医护人员开始集体做同一个噩梦，梦中的怪物正逐一杀死现实中的人，而治疗方法就是进入梦中杀掉它。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "精神病院",
      "集体幻觉",
      "潜意识",
      "超现实"
    ]
  },
  {
    "title": "浪漫岛屿",
    "href": "detail/movie-1371.html",
    "cover": "21.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "动作",
    "description": "四个走投无路的陌生人，在济州岛的一个废弃民宿里，决定一起“假装”过一种浪漫的生活。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "治愈系",
      "济州岛",
      "陌生人相遇",
      "慢生活",
      "音乐元素"
    ]
  },
  {
    "title": "战地情莺",
    "href": "detail/movie-1372.html",
    "cover": "22.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "战争, 爱情, 音乐",
    "category": "科幻",
    "description": "二战烽火中，一名夜总会歌女与德军军官相恋，而她实际是为盟军传递情报的间谍。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "二战",
      "歌女",
      "间谍",
      "悲情"
    ]
  },
  {
    "title": "一切尽失",
    "href": "detail/movie-1373.html",
    "cover": "23.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑/惊悚/家庭",
    "category": "奇幻",
    "description": "富豪父亲在生日宴上当众修改遗嘱，当晚他便离奇死亡，在场的八个家人，每个人都收到了“一切尽失”的威胁短信。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "暴风雪山庄",
      "家庭聚会",
      "全员恶人",
      "遗产"
    ]
  },
  {
    "title": "团子大家族第一季",
    "href": "detail/movie-1374.html",
    "cover": "24.jpg",
    "year": "2007",
    "region": "日本",
    "type": "动漫",
    "genre": "剧情 / 爱情 / 治愈",
    "category": "奇幻",
    "description": "问题学生冈崎朋也在樱花坡道上遇见古河渚，一个将“团子大家族”挂在嘴边的女孩，从此他的灰色人生被慢慢填满。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "key社",
      "催泪",
      "校园",
      "家族",
      "麻枝准"
    ]
  },
  {
    "title": "姊妹心粤语",
    "href": "detail/movie-1375.html",
    "cover": "25.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 伦理",
    "category": "家庭",
    "description": "一对亲姐妹爱上同一个男人，当姐姐发现妹妹其实是同父异母的仇人之女，温情彻底碎裂。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "港剧",
      "豪门恩怨",
      "姐妹反目",
      "身世之谜",
      "粤语原声"
    ]
  },
  {
    "title": "小恐龙的漫画宇宙",
    "href": "detail/movie-1376.html",
    "cover": "26.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 奇幻",
    "category": "励志",
    "description": "漫画家笔下的Q版小恐龙突然活了，还拽着他掉进了自己画的废稿世界里。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "穿越次元",
      "创作困境",
      "萌系",
      "治愈"
    ]
  },
  {
    "title": "世界听我说第三季",
    "href": "detail/movie-1377.html",
    "cover": "27.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "演讲 / 真人秀",
    "category": "都市",
    "description": "各行各业的人站上舞台，用五分钟演讲改变别人的偏见。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "演说",
      "竞技",
      "辩论",
      "社会议题",
      "跨界"
    ]
  },
  {
    "title": "夺标27秒",
    "href": "detail/movie-1378.html",
    "cover": "28.jpg",
    "year": "1996",
    "region": "香港",
    "type": "电影",
    "genre": "动作运动",
    "category": "纪录",
    "description": "黑帮小混混为了替哥哥报仇，必须在27秒内跑完400米，否则引爆炸弹。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "跑步",
      "黑帮",
      "复仇",
      "街头",
      "反套路"
    ]
  },
  {
    "title": "攀岩女孩儿",
    "href": "detail/movie-1379.html",
    "cover": "29.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "运动 / 剧情 / 家庭",
    "category": "动作",
    "description": "失去双腿的少女没有选择轮椅篮球，而是爱上了攀岩，她要用双手爬上曾经与父亲约定的那座山。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "女性成长",
      "无腿励志",
      "真实改编"
    ]
  },
  {
    "title": "山河血泪美人恩",
    "href": "detail/movie-1380.html",
    "cover": "30.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情，民国，战争",
    "category": "奇幻",
    "description": "苏州河上的评弹女伶，用一曲《秦淮景》周旋于三大军阀之间，只为救一城百姓。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "军阀混战",
      "倾城之恋",
      "家国情怀"
    ]
  },
  {
    "title": "千面恶魔",
    "href": "detail/movie-1381.html",
    "cover": "31.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "恐怖/奇幻/悬疑",
    "category": "古装",
    "description": "一种能复制人类外表并吃掉原主的“千面怪”入侵东京，唯一能识别它们的是一位有脸盲症的女孩。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "都市怪谈",
      "变身怪",
      "寄生恐惧",
      "单元剧"
    ]
  },
  {
    "title": "青空 剧场版",
    "href": "detail/movie-1382.html",
    "cover": "32.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "genre": "青春, 奇幻",
    "category": "音乐",
    "description": "高三毕业那天，天空变成了从未见过的深蓝色，只有将死之人才能看见。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "治愈",
      "毕业",
      "蓝色",
      "记忆"
    ]
  },
  {
    "title": "招笑猫",
    "href": "detail/movie-1383.html",
    "cover": "33.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "奇幻喜剧",
    "category": "历史",
    "description": "东京下町一家破旧神社里，供奉的招财猫会说话，但它的许愿规则是——必须让猫先笑出来。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "神社",
      "许愿",
      "另类搞笑"
    ]
  },
  {
    "title": "赢得比赛",
    "href": "detail/movie-1384.html",
    "cover": "34.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "运动, 励志",
    "category": "剧情",
    "description": "一个来自最低种姓的少女，带领一支由被退学女孩组成的板球队，向国家冠军发起冲击。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "女子板球",
      "贫民窟",
      "种姓制度"
    ]
  },
  {
    "title": "魔间行者",
    "href": "detail/movie-1385.html",
    "cover": "35.jpg",
    "year": "2003",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖",
    "category": "剧情",
    "description": "深水埗一名自称“魔间行者”的江湖术士专接闹鬼案件，但他驱的不是鬼，而是人心里的执念。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "灵异侦探",
      "降头",
      "都市传说",
      "港式鬼片"
    ]
  },
  {
    "title": "蝴蝶夫人的现代家庭",
    "href": "detail/movie-1386.html",
    "cover": "36.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情, 家庭",
    "category": "剧情",
    "description": "曾经的京都顶尖艺伎隐退后嫁到纽约，却发现新丈夫带来的三个叛逆儿女正试图毁掉她的和服。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "跨文化",
      "代际冲突",
      "艺伎",
      "重组家庭",
      "女性成长"
    ]
  },
  {
    "title": "贾斯汀·比伯：我们的世界",
    "href": "detail/movie-1387.html",
    "cover": "37.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片, 音乐",
    "category": "都市",
    "description": "当全球巡演撞上新冠疫情，顶流偶像卸下所有伪装，暴露出一个焦虑症患者的日常。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "巨星幕后",
      "疫情巡演",
      "脆弱与真实"
    ]
  },
  {
    "title": "马太的爱情",
    "href": "detail/movie-1388.html",
    "cover": "38.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 文艺 / 剧情",
    "category": "爱情",
    "description": "巴黎地铁里，一位失语症男子与一位将死女孩用文字展开了一场倒计时恋爱。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "孤独",
      "邂逅",
      "巴黎",
      "治愈"
    ]
  },
  {
    "title": "结婚那件事",
    "href": "detail/movie-1389.html",
    "cover": "39.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "历史",
    "description": "一场农村婚礼的“逗伴娘”习俗失控，让三个女性的人生在同一天彻底走向不同方向。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "闹伴娘",
      "人间真实",
      "社会议题",
      "家族博弈",
      "黑色喜剧"
    ]
  },
  {
    "title": "拿破仑与萨曼莎",
    "href": "detail/movie-1390.html",
    "cover": "40.jpg",
    "year": "1972",
    "region": "美国",
    "type": "电影",
    "genre": "冒险家庭",
    "category": "都市",
    "description": "一个孤僻男孩带着他最好的朋友——一头叫拿破仑的成年雄狮，穿越山野去寻找叔叔。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "动物",
      "公路片",
      "童年",
      "友谊"
    ]
  },
  {
    "title": "蓬岛仙舞",
    "href": "detail/movie-1391.html",
    "cover": "41.jpg",
    "year": "2007",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻, 爱情, 剧情",
    "category": "历史",
    "description": "失意男子漂流至地图上没有的岛屿，岛上居民自称活了八百年，等待一个“替死鬼”。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "离岛",
      "传说",
      "疗愈",
      "文艺"
    ]
  },
  {
    "title": "苦乐村官",
    "href": "detail/movie-1392.html",
    "cover": "42.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情、乡村、喜剧",
    "category": "爱情",
    "description": "一名音乐系毕业的城市男孩被派到贫困村当村官，靠一架破钢琴改变了全村。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "扶贫",
      "乡村振兴",
      "大学生村官",
      "人情社会",
      "成长"
    ]
  },
  {
    "title": "私聊",
    "href": "detail/movie-1393.html",
    "cover": "43.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚",
    "category": "历史",
    "description": "十个陌生人被拉进一个加密聊天室，一个名为“审判者”的AI宣布他们中隐藏着一个杀人犯，并逼迫他们通过对话找出真凶，否则每十分钟杀死一人。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "密室逃生",
      "社交网络",
      "黑客"
    ]
  },
  {
    "title": "步步倾心2024",
    "href": "detail/movie-1394.html",
    "cover": "44.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "剧集",
    "genre": "爱情，古装",
    "category": "古装",
    "description": "经典重生，若曦带着2024年的记忆再次穿越回康熙年间，这次她不想再爱任何人，只求保命。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "穿越重启",
      "九子夺嫡",
      "命运改写"
    ]
  },
  {
    "title": "恶魔印记",
    "href": "detail/movie-1395.html",
    "cover": "45.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖悬疑",
    "category": "古装",
    "description": "神父在一具尸体上发现了七种不同的恶魔印记，其中一种来自未出生者。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "驱魔",
      "民俗",
      "诅咒",
      "反转"
    ]
  },
  {
    "title": "安东尼·帕森斯",
    "href": "detail/movie-1396.html",
    "cover": "46.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电视剧 / 限定剧",
    "genre": "剧情 / 传记 / 犯罪",
    "category": "科幻",
    "description": "一个来自埃塞克斯的穷小子，靠着一套手工缝制的西装和完美复刻的英国口音，骗了整个伦敦上流社会十年。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "诈骗犯",
      "假贵族",
      "伦敦",
      "阶层跃迁",
      "真实事件改编"
    ]
  },
  {
    "title": "将军府来了个小厨娘",
    "href": "detail/movie-1397.html",
    "cover": "47.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "古装 / 喜剧 / 爱情",
    "category": "动作",
    "description": "为了查清姐姐冤死真相，御厨之女伪装成厨娘潜入将军府，却用一碗麻辣烫撬开了冷面将军的心门。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "美食破案",
      "欢喜冤家",
      "将军真香定律",
      "宫斗余波",
      "烟火气"
    ]
  },
  {
    "title": "小镇有间电影院",
    "href": "detail/movie-1398.html",
    "cover": "48.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "悬疑",
    "description": "儿子想拆除小镇上仅存的破旧电影院建商场，父亲是最后一代胶片放映员，父子俩展开了一场关于记忆与利益的对抗。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "怀旧",
      "电影院",
      "父子",
      "胶片",
      "时代记忆"
    ]
  },
  {
    "title": "太空巴迪",
    "href": "detail/movie-1399.html",
    "cover": "49.jpg",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "genre": "家庭/科幻/喜剧",
    "category": "剧情",
    "description": "五只调皮的金毛猎犬误打误撞钻进航天飞机，被发射进入太空，它们必须在氧气耗尽前学会在失重状态下“拉”回地球。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "会说话的金毛",
      "狗狗宇航员",
      "迪士尼真人",
      "太空冒险",
      "儿童向"
    ]
  },
  {
    "title": "脱俗家庭",
    "href": "detail/movie-1400.html",
    "cover": "50.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "剧情喜剧",
    "category": "音乐",
    "description": "一个信奉消费主义的网红家庭被迫与极端环保主义的祖父母在荒岛上共度一个月。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "荒野",
      "极简主义",
      "家庭冲突",
      "价值观"
    ]
  },
  {
    "title": "侠捕之夺命红莲",
    "href": "detail/movie-1401.html",
    "cover": "51.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "武侠, 动作, 悬疑",
    "category": "悬疑",
    "description": "六扇门第一神捕追查红莲教主下落时，发现这位“妖女”竟是自己十年前亲手送进死牢的未婚妻。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "捕快",
      "红莲教",
      "朝廷秘闻",
      "硬核打斗"
    ]
  },
  {
    "title": "无耻之徒第二季",
    "href": "detail/movie-1402.html",
    "cover": "52.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情，喜剧",
    "category": "喜剧",
    "description": "加拉格一家刚从新冠中缓过来，又迎来了一个新麻烦：一个自称是已故奶奶私生女的“姑姑”住进了家里。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "家庭",
      "底层",
      "黑色幽默"
    ]
  },
  {
    "title": "宽频聊斋之夜更管理员",
    "href": "detail/movie-1403.html",
    "cover": "53.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖, 灵异, 单元剧",
    "category": "科幻",
    "description": "一个旧楼夜更管理员发现，每当晚归住户连上“宽频”WiFi，手机里的聊斋故事就会变成现实。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "网络",
      "聊斋",
      "夜班",
      "都市传说",
      "怪谈"
    ]
  },
  {
    "title": "秘密关系台版",
    "href": "detail/movie-1404.html",
    "cover": "54.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "爱情 / 剧情",
    "category": "悬疑",
    "description": "台北广告公司里，三组办公室地下恋情同时进行，而公司新来的HR总监，专抓“利益回避违规”。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "职场",
      "婚外情",
      "台剧",
      "细腻"
    ]
  },
  {
    "title": "击剑选手",
    "href": "detail/movie-1405.html",
    "cover": "55.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "运动 / 剧情",
    "category": "音乐",
    "description": "聋哑少女用击剑对抗校园霸凌，却被国家队的健全选手们视为威胁。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "励志",
      "对抗偏见",
      "女性力量"
    ]
  },
  {
    "title": "绝命毒师第二季",
    "href": "detail/movie-1406.html",
    "cover": "56.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情，犯罪，惊悚",
    "category": "青春",
    "description": "肿瘤缓解后的化学老师沃尔特野心膨胀，他开始垄断西南部毒品市场，却发现连家人都想毒死他。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "制毒",
      "反英雄",
      "黑色幽默",
      "家庭",
      "道德沦丧"
    ]
  },
  {
    "title": "编辑部的故事",
    "href": "detail/movie-1407.html",
    "cover": "57.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 职场",
    "category": "古装",
    "description": "2025年，《文化生活》编辑部面临停刊，五个性格迥异的编辑试图用最后一期杂志挽救这家老刊。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "出版业",
      "纸媒寒冬",
      "理想主义",
      "北漂",
      "群像"
    ]
  },
  {
    "title": "戈德堡一家第三季",
    "href": "detail/movie-1408.html",
    "cover": "58.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧，家庭，年代",
    "category": "都市",
    "description": "时间来到1987年，亚当的摄像机记录下了姐姐艾瑞卡在大学里的糗事，而老爸默瑞为了给家里换一台彩色电视，竟然偷偷去当了夜店保安。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "80年代",
      "美国梦",
      "青春期",
      "录像带"
    ]
  },
  {
    "title": "谎话连篇 浪花梦之阵",
    "href": "detail/movie-1409.html",
    "cover": "59.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧 / 诈骗",
    "category": "喜剧",
    "description": "一对落魄的骗子父子，决定对一座孤岛上的富豪进行连环诈骗，却没想到岛上全是同行。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "诈骗师",
      "海边",
      "双男主",
      "搞笑",
      "逆袭"
    ]
  },
  {
    "title": "无意背叛",
    "href": "detail/movie-1410.html",
    "cover": "60.jpg",
    "year": "2003",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "家庭 / 伦理",
    "category": "纪录",
    "description": "模范夫妻结婚十五年后，丈夫的“精神出轨”让家庭摇摇欲坠，谁才是真正的背叛者？",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "婚外情",
      "中年夫妻",
      "道德困境",
      "家庭"
    ]
  },
  {
    "title": "东京女子会",
    "href": "detail/movie-1411.html",
    "cover": "61.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情 / 女性 / 都市",
    "category": "喜剧",
    "description": "在东京最精英的私立女子会里，每个微笑背后都藏着杀死对方的刀。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "东京",
      "女性友谊",
      "阶层",
      "嫉妒"
    ]
  },
  {
    "title": "创世纪",
    "href": "detail/movie-1412.html",
    "cover": "62.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻",
    "category": "都市",
    "description": "第一个拥有自我意识的AI，没有毁灭人类，而是在网上开设了一间“忏悔室”。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "人工智能",
      "宗教隐喻",
      "硬科幻",
      "伦理",
      "末日"
    ]
  },
  {
    "title": "我的朋友很少",
    "href": "detail/movie-1413.html",
    "cover": "63.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电视剧",
    "genre": "青春、校园、社交",
    "category": "纪录",
    "description": "全校最孤独的男生收到一封匿名信，信上只有一句话：“我也一个朋友都没有。”",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "社交恐惧",
      "社恐",
      "友情",
      "治愈"
    ]
  },
  {
    "title": "冰血暴第四季",
    "href": "detail/movie-1414.html",
    "cover": "64.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电视剧",
    "genre": "犯罪，剧情",
    "category": "青春",
    "description": "1950年代的堪萨斯城，两股敌对的黑帮势力通过交换人质维持脆弱和平，两个异族男孩的命运就此纠缠。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "黑色幽默",
      "黑帮",
      "种族",
      "历史",
      "科恩兄弟"
    ]
  },
  {
    "title": "少年泰坦：东京危机",
    "href": "detail/movie-1415.html",
    "cover": "65.jpg",
    "year": "2025",
    "region": "日本/美国",
    "type": "动画电影",
    "genre": "动作, 科幻, 冒险",
    "category": "都市",
    "description": "少年泰坦受邀前往东京参加科技博览会，却发现一个邪恶的人工智能绑架了全城的科学家，企图用巨型机甲毁灭涩谷。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "超级英雄",
      "东京",
      "科技危机",
      "团队",
      "机甲"
    ]
  },
  {
    "title": "高调人生",
    "href": "detail/movie-1416.html",
    "cover": "66.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 剧情",
    "category": "喜剧",
    "description": "破产后的昔日顶流网红被迫与厌世的程序员弟弟合伙，靠“包月造假人设”来还债。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "网红文化",
      "虚假繁荣",
      "姐弟情",
      "社交媒体"
    ]
  },
  {
    "title": "司岗里",
    "href": "detail/movie-1417.html",
    "cover": "67.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 奇幻, 民族",
    "category": "音乐",
    "description": "佤族大学生从“司岗里”洞穴带出一块神秘石头后，整个村子的人开始遗忘自己的母语。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "佤族神话",
      "人类起源",
      "洞穴秘境",
      "文化寻根"
    ]
  },
  {
    "title": "异国原乡",
    "href": "detail/movie-1418.html",
    "cover": "68.jpg",
    "year": "2023",
    "region": "法国 / 塞内加尔",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "古装",
    "description": "一位巴黎出生的少女，被迫随母亲返回塞内加尔老家，在文化的冲击中寻找自己的根。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "移民",
      "身份认同",
      "母女关系",
      "巴黎"
    ]
  },
  {
    "title": "三生缘起是清欢",
    "href": "detail/movie-1419.html",
    "cover": "69.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "剧集",
    "genre": "古装, 爱情, 奇幻",
    "category": "科幻",
    "description": "茶楼老板娘为了渡情劫，故意在凡间找了三个“替身男友”去爱，结果每个都成了真爱。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "三世虐恋",
      "神妖",
      "失忆",
      "渡劫"
    ]
  },
  {
    "title": "星学院3之潘朵拉秘境",
    "href": "detail/movie-1420.html",
    "cover": "70.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻 / 冒险 / 校园",
    "category": "纪录",
    "description": "星学院地下发现一个神秘盒子，打开后七种人性弱点变成怪物，学生们必须学会控制自己的“恶”。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "魔法学院",
      "禁忌盒子",
      "七宗罪实体化",
      "成长代价"
    ]
  },
  {
    "title": "幸运兔精灵",
    "href": "detail/movie-1421.html",
    "cover": "71.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "儿童奇幻",
    "category": "青春",
    "description": "小学女生捡到一只会说话的兔子玩偶，没想到它是来自精灵世界的“幸运大使”，每帮她实现一个愿望，就会失去一段记忆。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "萌宠",
      "穿越",
      "小学生",
      "成长",
      "治愈"
    ]
  },
  {
    "title": "姹紫嫣红碧绿波",
    "href": "detail/movie-1422.html",
    "cover": "72.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "奇幻 / 爱情",
    "category": "纪录",
    "description": "一位色盲画家在溺水后突然能看到一亿种颜色，但她看到的爱人却是灰色的。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "颜色",
      "失明",
      "画家"
    ]
  },
  {
    "title": "马戏帐篷",
    "href": "detail/movie-1423.html",
    "cover": "73.jpg",
    "year": "2025",
    "region": "西班牙 / 墨西哥",
    "type": "电影",
    "genre": "剧情 / 家庭 / 奇幻",
    "category": "音乐",
    "description": "一个破旧马戏团来到干旱小镇，帐篷支起的夜晚，所有观众都做起了同一个梦。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "马戏团",
      "亲情",
      "迁徙",
      "魔幻现实",
      "小丑"
    ]
  },
  {
    "title": "末日机器",
    "href": "detail/movie-1424.html",
    "cover": "74.jpg",
    "year": "2016",
    "region": "英国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "category": "纪录",
    "description": "一个房间，两个科学家，一颗随时可能引爆的全球核弹，和一台必须由人类掐断电源的AI。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "人工智能",
      "核按钮",
      "密闭对峙",
      "道德实验",
      "高概念"
    ]
  },
  {
    "title": "掠夺者",
    "href": "detail/movie-1425.html",
    "cover": "75.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作犯罪",
    "category": "纪录",
    "description": "一群神秘劫匪专抢黑帮金库，却每次都留下一枚染血的金币，引出一位退休警探的致命过往。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "高智商犯罪",
      "黑色电影风格",
      "以暴制暴",
      "连环反转"
    ]
  },
  {
    "title": "勇闯毒龙潭粤语",
    "href": "detail/movie-1426.html",
    "cover": "76.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "category": "悬疑",
    "description": "香港卧底警察阿龙潜入金三角毒寨，却发现自己的亲弟弟已成为大毒枭的左膀右臂，兄弟异路。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "卧底",
      "毒枭",
      "港产片",
      "兄弟情义"
    ]
  },
  {
    "title": "老洞粤语",
    "href": "detail/movie-1427.html",
    "cover": "77.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "剧集",
    "genre": "恐怖，悬疑，奇幻",
    "category": "科幻",
    "description": "深山村落后山的神秘老洞每六十年开启一次，这次走出的是一个会讲粤语的古代怨灵。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "诡异传说",
      "洞穴诅咒",
      "粤语原声"
    ]
  },
  {
    "title": "伴你走天涯",
    "href": "detail/movie-1428.html",
    "cover": "78.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 公路",
    "category": "古装",
    "description": "一个癌症晚期的背包客，一个逃避婚姻的准新娘，两人搭上了一辆开往雪山的破旧货车。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "治愈",
      "临终旅行",
      "遗愿清单",
      "陌生人情谊"
    ]
  },
  {
    "title": "最终生还者",
    "href": "detail/movie-1429.html",
    "cover": "79.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 恐怖 / 生存",
    "category": "奇幻",
    "description": "一场瘟疫后地球上只剩他一人，十年后他发现了另一个“人”——一个和他一模一样的克隆体。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "末世",
      "克隆人伦理",
      "孤独恐惧"
    ]
  },
  {
    "title": "陆昭昭的刺客笔记",
    "href": "detail/movie-1430.html",
    "cover": "80.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 动作 / 悬疑",
    "category": "爱情",
    "description": "第一刺客陆昭昭死后，她的日记本被公开，里面记录的53次刺杀竟有47次是对方求她杀的。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "女性刺客",
      "日记体叙事",
      "复仇",
      "权谋"
    ]
  },
  {
    "title": "爱上熟男行不行",
    "href": "detail/movie-1431.html",
    "cover": "81.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧，爱情",
    "category": "爱情",
    "description": "28岁的职场女强人爱上52岁的离婚上司，公司明文禁止办公室恋情，她决定用一本《熟男约会指南》攻陷他。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "忘年恋",
      "职场",
      "大叔",
      "甜心",
      "约会法则"
    ]
  },
  {
    "title": "卢俊义生擒史文恭",
    "href": "detail/movie-1432.html",
    "cover": "82.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作 / 古装",
    "category": "都市",
    "description": "不演义军，不搞阴谋，纯讲一个“为兄弟报仇”的硬核武者故事。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "水浒外传",
      "硬核武术",
      "复仇",
      "忠诚与背叛"
    ]
  },
  {
    "title": "无以名状的忧愁",
    "href": "detail/movie-1433.html",
    "cover": "83.jpg",
    "year": "2007",
    "region": "法国",
    "type": "电影",
    "genre": "剧情、文艺、心理",
    "category": "励志",
    "description": "母亲说她是装病，老师说她是矫情，只有她自己知道，那种感觉像被关进了玻璃罩。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "抑郁症",
      "青春期",
      "母女关系",
      "法国乡村",
      "成长疼痛"
    ]
  },
  {
    "title": "飞越谜情粤语",
    "href": "detail/movie-1434.html",
    "cover": "84.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 悬疑",
    "category": "励志",
    "description": "一名花花公子机长爱上了清纯空姐，为了掩盖自己肮脏的情史，他联手整组机组人员，在高空中上演一场惊天骗局。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "空中服务",
      "处女情结",
      "谎言",
      "高空"
    ]
  },
  {
    "title": "海龟奇妙之旅",
    "href": "detail/movie-1435.html",
    "cover": "85.jpg",
    "year": "2025",
    "region": "英国",
    "type": "纪录片剧集",
    "genre": "纪录片, 冒险, 自然",
    "category": "剧情",
    "description": "一只海龟的GPS项圈传回的数据，拼出了一张惊人的全球海洋犯罪地图。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "海洋",
      "迁徙",
      "环保",
      "拟人"
    ]
  },
  {
    "title": "骗中传奇粤语",
    "href": "detail/movie-1436.html",
    "cover": "86.jpg",
    "year": "1999",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "喜剧 / 古装 / 悬疑",
    "category": "动作",
    "description": "清末广东四大骗王之首意外身亡，他的不孝子被迫与死对头的女儿联手破局。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "反诈",
      "江湖骗局",
      "欢喜冤家",
      "智商博弈",
      "港式幽默"
    ]
  },
  {
    "title": "刺杀肯尼迪",
    "href": "detail/movie-1437.html",
    "cover": "87.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "历史 / 悬疑 / 政治",
    "category": "爱情",
    "description": "一份被隐藏60年的FBI绝密档案曝光，凶手另有其人，还是个女人。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "阴谋论",
      "新证据",
      "特工",
      "档案解密"
    ]
  },
  {
    "title": "捕快血之刃",
    "href": "detail/movie-1438.html",
    "cover": "88.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "武侠 / 动作",
    "category": "历史",
    "description": "锦衣卫捕快被诬灭门，带着仇人之女踏上血腥复仇路。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "锦衣卫",
      "灭门",
      "双面卧底",
      "冷兵器"
    ]
  },
  {
    "title": "梅奇知道甚么",
    "href": "detail/movie-1439.html",
    "cover": "89.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑 / 剧情",
    "category": "喜剧",
    "description": "六岁的梅奇从不说话，但每当家里发生怪事，她都会画一张画。警方发现，她的画都是凶案现场。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "儿童视角",
      "家庭秘密",
      "心理惊悚",
      "社会派"
    ]
  },
  {
    "title": "蜂鸟",
    "href": "detail/movie-1440.html",
    "cover": "90.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 青春, 家庭",
    "category": "都市",
    "description": "1994年首尔，初二女生恩熙在父母的忽视与初恋的背叛中，抓住了唯一理解她的女老师。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "成长",
      "女性",
      "1994年",
      "补习班",
      "背叛"
    ]
  },
  {
    "title": "兰黛夫人",
    "href": "detail/movie-1441.html",
    "cover": "91.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "剧情 / 传记",
    "category": "青春",
    "description": "从厨房调香到垄断纽约第五大道，一位孤僻主妇如何用气味撬动整个上流社会？",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "家族传奇",
      "商业帝国",
      "女性力量",
      "时代变迁",
      "香水革命"
    ]
  },
  {
    "title": "断线的亲情",
    "href": "detail/movie-1442.html",
    "cover": "92.jpg",
    "year": "2018",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "都市",
    "description": "儿子意外去世后，年迈的父亲突然收到一部智能机，里面装满了儿子生前用AI合成的“未来问候”。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "亲情",
      "失独",
      "养老",
      "科技隔阂"
    ]
  },
  {
    "title": "冠军2025",
    "href": "detail/movie-1443.html",
    "cover": "93.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 科幻",
    "category": "剧情",
    "description": "在脑机接口格斗盛行的2049年，一个过气拳手的大脑被植入AI后，开始失控杀戮。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "机甲",
      "格斗",
      "反乌托邦",
      "AI"
    ]
  },
  {
    "title": "娥摩拉罪恶之城",
    "href": "detail/movie-1444.html",
    "cover": "94.jpg",
    "year": "2014",
    "region": "意大利",
    "type": "剧集",
    "genre": "犯罪 / 纪实",
    "category": "奇幻",
    "description": "这里是那不勒斯，这里的黑帮叫“克莫拉”，这里的法则只有一条：要么杀人，要么被杀。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "黑手党",
      "那不勒斯",
      "毒品战争",
      "残酷",
      "多线叙事"
    ]
  },
  {
    "title": "不死奇潭",
    "href": "detail/movie-1445.html",
    "cover": "95.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻 / 动作 / 冒险",
    "category": "奇幻",
    "description": "传说西南密林深处有座“不死奇潭”，水能医死人肉白骨，但每一个上岸的人都会忘记自己是谁。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "水下秘境",
      "长生不老",
      "盗墓探险"
    ]
  },
  {
    "title": "走进约翰·凯泽尔",
    "href": "detail/movie-1446.html",
    "cover": "96.jpg",
    "year": "2023",
    "region": "美国",
    "type": "纪录片",
    "genre": "传记 / 纪录片",
    "category": "家庭",
    "description": "一部关于传奇配角约翰·凯泽尔的纪录片，揭示他短暂而璀璨的演艺生涯。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "幕后",
      "演员",
      "传奇",
      "悲剧",
      "表演艺术"
    ]
  },
  {
    "title": "炽热豪情",
    "href": "detail/movie-1447.html",
    "cover": "97.jpg",
    "year": "1987",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "喜剧",
    "description": "一个被烧成重伤的前赛车手，带着半边脸的面具和一辆改装的装甲肌肉车，向整个地下飙车黑帮宣战。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "硬汉动作",
      "飙车追逐",
      "兄弟情义",
      "复仇烈焰",
      "80年代复古"
    ]
  },
  {
    "title": "世界上的某个地方",
    "href": "detail/movie-1448.html",
    "cover": "98.jpg",
    "year": "2024",
    "region": "阿根廷 / 西班牙",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "category": "音乐",
    "description": "布宜诺斯艾利斯的旧书店里，一本《小王子》的借书卡上，跨越四十年出现了相同的笔迹。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "平行宇宙",
      "命运交织",
      "诗意现实主义"
    ]
  },
  {
    "title": "痛苦的日子",
    "href": "detail/movie-1449.html",
    "cover": "99.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 心理 / 战争",
    "category": "奇幻",
    "description": "从阿富汗战场回来的狙击手，无法分辨现实与幻觉，他眼里的日常全是战场。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "PTSD",
      "老兵",
      "黑白摄影",
      "意识流"
    ]
  },
  {
    "title": "炮制女朋友",
    "href": "detail/movie-1450.html",
    "cover": "100.jpg",
    "year": "2003",
    "region": "中国大陆 / 中国香港",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "励志",
    "description": "一位富二代为了应付父亲，聘请造型师将一名邋遢的农村女孩改造成名媛。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "都市情感",
      "改造计划",
      "欢喜冤家",
      "时尚对决"
    ]
  },
  {
    "title": "冇王管",
    "href": "detail/movie-1451.html",
    "cover": "101.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪 / 黑帮",
    "category": "剧情",
    "description": "九龙城寨拆除前夜，病入膏肓的黑帮教父决定用自己的方式，让所有背叛他的人“冇王管”（没人管得了）。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "九龙城寨",
      "港产片",
      "暴力美学",
      "社团",
      "父子情"
    ]
  },
  {
    "title": "孽吻1996国语",
    "href": "detail/movie-1452.html",
    "cover": "102.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情/伦理",
    "category": "科幻",
    "description": "1996年，一场车祸后，新娘失忆嫁给了救她的司机，却不知新郎一直在找她，而司机正是新郎的私生子弟弟。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "失忆",
      "替身",
      "豪门",
      "狗血升级"
    ]
  },
  {
    "title": "种族漩涡",
    "href": "detail/movie-1453.html",
    "cover": "103.jpg",
    "year": "2025",
    "region": "南非",
    "type": "电影",
    "genre": "剧情， 悬疑",
    "category": "爱情",
    "description": "种族隔离时期被划分为“白人”的一家人，在父亲葬礼上被告知：你们的血液里流着黑人的诅咒。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "种族隔离",
      "基因",
      "身份认同"
    ]
  },
  {
    "title": "指间的重量",
    "href": "detail/movie-1454.html",
    "cover": "104.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "category": "喜剧",
    "description": "一个靠“摸骨算命”行骗的半盲老头，却摸出了自己亲孙子的骨相。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "诈骗",
      "亲情",
      "救赎",
      "写实"
    ]
  },
  {
    "title": "面纱下的那不勒斯",
    "href": "detail/movie-1455.html",
    "cover": "105.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "悬疑， 爱情， 历史",
    "category": "喜剧",
    "description": "一位美国艺术修复师在那不勒斯古修道院发现一幅戴着面纱的圣母像，每当她修复一处，现实中就有一名与之有关的人死亡。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "那不勒斯",
      "圣血传说",
      "神秘主义",
      "家族秘密",
      "双重身份"
    ]
  },
  {
    "title": "超元气三姐妹第一季",
    "href": "detail/movie-1456.html",
    "cover": "106.jpg",
    "year": "2010",
    "region": "日本",
    "type": "动漫",
    "genre": "喜剧、日常、校园",
    "category": "喜剧",
    "description": "三胞胎姐妹性格天差地别：一个超S、一个天然呆、一个爱哭鬼，班主任因此天天崩溃。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "无厘头",
      "小学生搞笑",
      "反差萌",
      "姐妹日常"
    ]
  },
  {
    "title": "心郁郁",
    "href": "detail/movie-1457.html",
    "cover": "107.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "category": "科幻",
    "description": "患有严重社交恐惧的便利店夜班店员，每天偷偷给凌晨来的女护士留一份温热的饭团。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "社恐",
      "暗恋",
      "港式小品"
    ]
  },
  {
    "title": "狄仁杰断案传奇第一部",
    "href": "detail/movie-1458.html",
    "cover": "108.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑 / 古装 / 探案",
    "category": "爱情",
    "description": "狄仁杰初任大理寺丞，接连遇到三起密室杀人案，每具尸体旁都留下一句《推背图》谶语。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "唐朝",
      "本格推理",
      "权谋",
      "单元剧"
    ]
  },
  {
    "title": "辣椒里放卷心菜",
    "href": "detail/movie-1459.html",
    "cover": "109.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "genre": "喜剧, 爱情, 美食",
    "category": "古装",
    "description": "当火爆辣椒般的中餐馆老板娘，遇上佛系卷心菜性格的落魄钢琴家。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "反差萌",
      "料理对决",
      "家庭伦理",
      "治愈",
      "轻喜剧"
    ]
  },
  {
    "title": "布兰丁斯城堡第二季",
    "href": "detail/movie-1460.html",
    "cover": "110.jpg",
    "year": "2022",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧、家庭",
    "category": "奇幻",
    "description": "为了保住祖传城堡，年迈的伯爵决定把庄园改成网红打卡地，而他的宠物猪成了头号网红。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "英伦庄园",
      "贵族衰败",
      "宠物猪"
    ]
  },
  {
    "title": "死于独特",
    "href": "detail/movie-1461.html",
    "cover": "111.jpg",
    "year": "2020",
    "region": "英国",
    "type": "电影",
    "genre": "犯罪 / 剧情 / 青春",
    "category": "动作",
    "description": "公园长椅上，两个哥特青年被一群少年围住，只因为他们的穿着“不一样”。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "真实事件",
      "亚文化",
      "暴力",
      "社会反思"
    ]
  },
  {
    "title": "天使航班",
    "href": "detail/movie-1462.html",
    "cover": "112.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情, 职业, 人文",
    "category": "励志",
    "description": "一群专门运送海外死者遗骸的特殊工作者，用温柔与专业连接起生者与逝者最后的尊严。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "遗体运送",
      "国际",
      "生命",
      "温情",
      "单元剧"
    ]
  },
  {
    "title": "东与西",
    "href": "detail/movie-1463.html",
    "cover": "113.jpg",
    "year": "2024",
    "region": "英国 / 中国",
    "type": "电影",
    "genre": "剧情, 爱情",
    "category": "家庭",
    "description": "伦敦古董商意外继承上海老宅，在阁楼发现祖母与英国军官的禁忌情书。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "跨文化",
      "家庭",
      "遗憾"
    ]
  },
  {
    "title": "狼女传奇",
    "href": "detail/movie-1464.html",
    "cover": "114.jpg",
    "year": "2022",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "剧情 / 奇幻",
    "category": "青春",
    "description": "被狼群养大的女孩第一次进入人类村庄，却发现自己能听懂狼的“谎言”。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "狼群",
      "家族",
      "自然",
      "通灵",
      "成长"
    ]
  },
  {
    "title": "反斗小尼哥",
    "href": "detail/movie-1465.html",
    "cover": "115.jpg",
    "year": "2009",
    "region": "法国",
    "type": "电影",
    "genre": "喜剧， 家庭",
    "category": "家庭",
    "description": "小学生尼哥误以为父母要生弟弟把自己扔掉，于是联合全班同学策划了一场“拯救自己”的闹剧。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "儿童",
      "天真",
      "搞笑",
      "法式幽默"
    ]
  },
  {
    "title": "剧场前",
    "href": "detail/movie-1466.html",
    "cover": "116.jpg",
    "year": "2005",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 文艺 / 爱情",
    "category": "科幻",
    "description": "一个潦倒导演在影院看了一部讲述自杀情侣的电影后，在现实中遇到了女主角，并试图改写结局。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "洪常秀",
      "结构主义",
      "戏中戏",
      "爱情困境"
    ]
  },
  {
    "title": "辛德瑞拉先生2",
    "href": "detail/movie-1467.html",
    "cover": "117.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧/奇幻",
    "category": "纪录",
    "description": "废柴男屡次被女友甩，仙女教母的弟弟——男巫决定帮他逆袭成“豪门赘婿”。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "性别反转",
      "灰姑娘",
      "霸道女总裁",
      "魔法",
      "搞笑"
    ]
  },
  {
    "title": "宝莱坞之不可能的任务",
    "href": "detail/movie-1468.html",
    "cover": "118.jpg",
    "year": "2016",
    "region": "印度",
    "type": "电影",
    "genre": "动作，喜剧",
    "category": "音乐",
    "description": "一个只会吹嘘的孟买街头魔术师被印度调查分析局误认为顶级特工，派去巴基斯坦执行刺杀任务。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "间谍",
      "歌舞",
      "双面间谍",
      "脑洞"
    ]
  },
  {
    "title": "再见了 危险刑警",
    "href": "detail/movie-1469.html",
    "cover": "119.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电视剧SP",
    "genre": "动作, 喜剧, 犯罪",
    "category": "爱情",
    "description": "两位老顽童刑警在退休前一天，接到了最后也是最荒唐的一个案子。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "热血高校",
      "退休警犬",
      "最终任务"
    ]
  },
  {
    "title": "中国唱将",
    "href": "detail/movie-1470.html",
    "cover": "120.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "音乐",
    "category": "都市",
    "description": "一档只允许“素人上班族”参加的音乐综艺，冠军可以登上春晚，但必须全程戴着面具。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "素人选秀",
      "原创歌曲",
      "国风"
    ]
  },
  {
    "title": "风平浪静",
    "href": "detail/movie-1471.html",
    "cover": "121.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪 / 悬疑 / 剧情",
    "category": "动作",
    "description": "十五年前雨夜的一次误杀，让优等生宋浩变成了流浪汉；十五年后他回到家乡，却发现所有人都在等他回来。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "误杀",
      "隐藏",
      "小城",
      "雨夜",
      "十五年"
    ]
  },
  {
    "title": "节振国",
    "href": "detail/movie-1472.html",
    "cover": "122.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "历史 / 战争",
    "category": "科幻",
    "description": "开滦煤矿工人出身的抗日英雄，单刀砍死日本宪兵队长后拉起了一支矿工游击队。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "抗日",
      "工人运动",
      "真实人物改编",
      "民族气节",
      "华北"
    ]
  },
  {
    "title": "我唾弃你的坟墓",
    "href": "detail/movie-1473.html",
    "cover": "123.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖/惊悚/复仇",
    "category": "纪录",
    "description": "聋哑女画家被小镇暴徒凌辱后扔进沼泽，三年后她带着特制的刑具回归，将小镇变成了活体艺术展。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "女性复仇",
      "暴力美学",
      "限制级"
    ]
  },
  {
    "title": "圣路易斯银行大劫案",
    "href": "detail/movie-1474.html",
    "cover": "124.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪， 惊悚",
    "category": "喜剧",
    "description": "根据真实“幽灵劫案”改编，1975年圣路易斯银行金库从内部被掏空，唯一的钥匙却在镇长的保险柜里，劫匪到底是谁？",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "真实事件改编",
      "密室",
      "烧脑"
    ]
  },
  {
    "title": "昼颜",
    "href": "detail/movie-1475.html",
    "cover": "125.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "动作",
    "description": "三年后，那对曾在午后幽会的出轨男女再次相遇，却都已在各自的婚姻里窒息。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "出轨",
      "女性",
      "伦理",
      "日式美学"
    ]
  },
  {
    "title": "人面鱼：红衣小女孩外传",
    "href": "detail/movie-1476.html",
    "cover": "126.jpg",
    "year": "2018",
    "region": "中国台湾",
    "type": "电影",
    "genre": "恐怖",
    "category": "音乐",
    "description": "一名沉默的哑女钓到一条诡异人面鱼后，家中开始上演红衣小女孩的恐怖幻象。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "民间传说",
      "附身",
      "水域禁忌"
    ]
  },
  {
    "title": "超能侠",
    "href": "detail/movie-1477.html",
    "cover": "127.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "超级英雄",
    "category": "历史",
    "description": "他能让水的温度上升0.5度，他能让头发长得更快——这群全宇宙最废的超能者，要拯救地球。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "反套路",
      "废柴英雄",
      "中年危机",
      "黑色幽默",
      "低成本"
    ]
  },
  {
    "title": "琪娜姑姑",
    "href": "detail/movie-1478.html",
    "cover": "128.jpg",
    "year": "2026",
    "region": "尼日利亚/美国",
    "type": "电影",
    "genre": "剧情/家庭",
    "category": "科幻",
    "description": "自称在美国做护士的琪娜姑姑风光回乡，所有亲戚都争着把孩子送去美国，她却消失了。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "诺莱坞",
      "女佣",
      "美国梦",
      "谎言",
      "和解"
    ]
  },
  {
    "title": "不死心灵",
    "href": "detail/movie-1479.html",
    "cover": "129.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "科幻 / 悬疑 / 爱情",
    "category": "古装",
    "description": "丈夫车祸脑死亡，妻子将他的意识上传到AI，却发现这个“丈夫”比真人更完美，也更危险。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "意识上传",
      "永生伦理",
      "复制人"
    ]
  },
  {
    "title": "换个活法",
    "href": "detail/movie-1480.html",
    "cover": "130.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "科幻",
    "description": "一个厌倦了富贵的破产老板与一个渴望成功的贫穷打工仔，在车祸后意外互换了人生。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "身份互换",
      "中年危机",
      "温情",
      "黑色幽默"
    ]
  },
  {
    "title": "放学后",
    "href": "detail/movie-1481.html",
    "cover": "131.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 剧情",
    "category": "青春",
    "description": "一名女教师在放学后的教室里发现一封“死亡预告信”，随后她被拖入一场由学生策划的精密心理游戏中。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "校园",
      "反转",
      "心理战",
      "教师困境",
      "霸凌"
    ]
  },
  {
    "title": "国际女间谍",
    "href": "detail/movie-1482.html",
    "cover": "132.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "谍战动作",
    "category": "青春",
    "description": "一个退休的图书管理员被指认为冷战时期最神秘的女间谍，但她坚称自己只是个喜欢借书的普通人。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "女性",
      "间谍",
      "冷战后",
      "身份反转",
      "智力游戏"
    ]
  },
  {
    "title": "记账人",
    "href": "detail/movie-1483.html",
    "cover": "133.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 犯罪, 悬疑",
    "category": "励志",
    "description": "黑帮老实的会计默默记下每一笔罪恶，最终用账本摧毁整个帝国。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "黑帮",
      "会计",
      "数字"
    ]
  },
  {
    "title": "乱世出英雄",
    "href": "detail/movie-1484.html",
    "cover": "134.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "动作, 历史, 战争",
    "category": "历史",
    "description": "民国乱世，一对义结金兰的土匪兄弟因信仰不同，在权力与救国的十字路口兵戎相见。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "军阀混战",
      "双雄",
      "兄弟反目",
      "冷兵器"
    ]
  },
  {
    "title": "浪荡美少年",
    "href": "detail/movie-1485.html",
    "cover": "135.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 青春",
    "category": "喜剧",
    "description": "1997年夏天，三个自称“浪荡”的中学生，为了在毕业前成为“男人”，展开了一场荒诞的泡妞大作战。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "校园",
      "兄弟情",
      "成长",
      "怀旧"
    ]
  },
  {
    "title": "邻家怪男孩",
    "href": "detail/movie-1486.html",
    "cover": "136.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚 / 悬疑",
    "category": "爱情",
    "description": "一对夫妇发现新搬来的乖巧男孩总是出现在各种犯罪现场，而他永远带着温和的微笑。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "邻居犯罪",
      "未成年人",
      "心理操控"
    ]
  },
  {
    "title": "盖世豪侠粤语",
    "href": "detail/movie-1487.html",
    "cover": "137.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧 / 武侠",
    "category": "音乐",
    "description": "段飞和段誉是星宿派两大“废柴”弟子，师父却被杀，他们不得不背负起一本假的《盖世神功》秘籍逃亡江湖。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "TVB",
      "周星驰",
      "无厘头",
      "古装"
    ]
  },
  {
    "title": "迷失灵魂的素描像",
    "href": "detail/movie-1488.html",
    "cover": "138.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚，悬疑",
    "category": "纪录",
    "description": "患有脸盲症的天才画像师，只能画出死去之人的面容，直到有天他画出了自己的脸。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "通灵",
      "画像师",
      "诅咒"
    ]
  },
  {
    "title": "桃色追捕令",
    "href": "detail/movie-1489.html",
    "cover": "139.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "犯罪 / 悬疑",
    "category": "音乐",
    "description": "警队第一神探因“捡尸”丑闻被通缉，而真正设局的，是他亲手送进监狱的连环杀手藏在暗处的妻子。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "情色陷阱",
      "复仇",
      "反转",
      "黑色电影"
    ]
  },
  {
    "title": "金属霸主",
    "href": "detail/movie-1490.html",
    "cover": "140.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "音乐 / 喜剧 / 励志",
    "category": "家庭",
    "description": "两名重度社恐的重金属宅男，为了赢得乐队比赛，不得不招进一名会弹电吉他的校花。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "摇滚",
      "重金属",
      "校园",
      "乐队",
      "爆笑"
    ]
  },
  {
    "title": "乳牙2019",
    "href": "detail/movie-1491.html",
    "cover": "141.jpg",
    "year": "2019",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "剧情，喜剧，爱情",
    "category": "爱情",
    "description": "身患绝症的女孩米拉爱上了小混混，在生命倒计时里，她拔掉“乳牙”，野蛮生长。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "绝症",
      "青春期",
      "成长",
      "另类爱情"
    ]
  },
  {
    "title": "领航者：中世纪的奥德赛",
    "href": "detail/movie-1492.html",
    "cover": "142.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "genre": "历史 / 冒险 / 奇幻",
    "category": "纪录",
    "description": "14世纪，一名被流放的英格兰骑士带领一群乌合之众，试图沿着传说中的航线找到东方国度。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "中世纪",
      "航海",
      "史诗",
      "探秘"
    ]
  },
  {
    "title": "何塞",
    "href": "detail/movie-1493.html",
    "cover": "143.jpg",
    "year": "2024",
    "region": "西班牙, 中国大陆",
    "type": "电影",
    "genre": "剧情, 传记, 体育",
    "category": "青春",
    "description": "落魄的前西班牙青年队教练何塞，来到中国一个三线城市的小学，带领一支从未赢过球的“垃圾”足球队逆袭。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "足球",
      "教练",
      "中年危机",
      "自我救赎"
    ]
  },
  {
    "title": "爱情零极限",
    "href": "detail/movie-1494.html",
    "cover": "144.jpg",
    "year": "2018",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "剧情 / 同性",
    "category": "音乐",
    "description": "两个男人在一间白色的公寓里，试图通过一场极致的“实验”，剥离爱情中的所有杂质，只留下肉欲和虚无。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "极简主义",
      "哲学思辨",
      "情欲探索"
    ]
  },
  {
    "title": "泰山锄奸记",
    "href": "detail/movie-1495.html",
    "cover": "145.jpg",
    "year": "1949",
    "region": "中国",
    "type": "电影",
    "genre": "动作 / 战争",
    "category": "剧情",
    "description": "抗战时期，山东泰山脚下一位猎户化身侠盗，用祖传弓箭连杀十二名汉奸，日军悬赏“活见泰山”。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "黑白",
      "抗日",
      "侠义",
      "民俗"
    ]
  },
  {
    "title": "神的诊疗簿",
    "href": "detail/movie-1496.html",
    "cover": "146.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "医疗, 悬疑, 治愈",
    "category": "青春",
    "description": "一位在偏远小岛执业的古怪医生，每次救不活病人都会写一份“神的诊疗簿”，直至他发现本子上出现了一个从未接诊过的名字。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "乡村医疗",
      "死因调查",
      "神性",
      "温柔"
    ]
  },
  {
    "title": "上海风云之夺宝金龙",
    "href": "detail/movie-1497.html",
    "cover": "147.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "科幻",
    "description": "1930年代上海滩，一根藏有太平天国宝藏地图的金龙拐杖，引发各方势力腥风血雨的争夺。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "民国",
      "帮派",
      "夺宝"
    ]
  },
  {
    "title": "那时我们还小",
    "href": "detail/movie-1498.html",
    "cover": "148.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情，家庭，成长",
    "category": "历史",
    "description": "一张尘封的毕业纪念册，让四位中年发小的记忆闪回到1999年的那个炎热夏天。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "怀旧",
      "童年",
      "亲情羁绊"
    ]
  },
  {
    "title": "遥远的北方",
    "href": "detail/movie-1499.html",
    "cover": "149.jpg",
    "year": "2007",
    "region": "英国 / 法国",
    "type": "电影",
    "genre": "剧情 / 惊悚 / 爱情",
    "category": "历史",
    "description": "北极圈内，一对相依为命的母女救回一个英俊士兵，三人关系迅速走向扭曲。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "极地",
      "三角恋",
      "背叛",
      "伦理冲击"
    ]
  },
  {
    "title": "青春肖像",
    "href": "detail/movie-1500.html",
    "cover": "150.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 爱情 / 青春",
    "category": "纪录",
    "description": "巴黎美院的天才女学生受命为神秘男教授画肖像，画着画着，她发现自己爱上了画中的人。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "绘画",
      "暧昧",
      "师生",
      "自我探索"
    ]
  },
  {
    "title": "奔跑的犀牛",
    "href": "detail/movie-1501.html",
    "cover": "1.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情，运动，励志",
    "category": "都市",
    "description": "一个破产跑路的中年老板，为了赢回儿子尊重，决定零基础冲击马拉松国家二级运动员标准。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "马拉松",
      "中年危机",
      "父子",
      "偏执"
    ]
  },
  {
    "title": "家有虎妻",
    "href": "detail/movie-1502.html",
    "cover": "2.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 家庭 / 都市",
    "category": "历史",
    "description": "彪悍的虎妻和佛系老公结婚十周年之际，突然互换身体，才发现对方的“轻松”都是假象。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "女强男弱",
      "婚姻",
      "成长"
    ]
  },
  {
    "title": "人间规则",
    "href": "detail/movie-1503.html",
    "cover": "3.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 悬疑",
    "category": "剧情",
    "description": "金牌公关在帮客户掩盖丑闻时，发现自己正亲手毁掉初恋的清白。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "公关行业",
      "道德困境",
      "女性成长",
      "职场博弈",
      "单元剧"
    ]
  },
  {
    "title": "三个扑火的少年",
    "href": "detail/movie-1504.html",
    "cover": "4.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 动作",
    "category": "都市",
    "description": "九十年代香港庙街，三个辍学少年为了出人头地踏入黑社会，像飞蛾一般扑向烈火却化为灰烬。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "古惑仔",
      "青春残酷",
      "兄弟情",
      "宿命"
    ]
  },
  {
    "title": "烽火恋曲",
    "href": "detail/movie-1505.html",
    "cover": "5.jpg",
    "year": "1987",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 战争 / 历史",
    "category": "科幻",
    "description": "五十年代台湾眷村里，外省军官之女与本省籍音乐老师秘密相恋，他们的定情曲被检举为“匪谍联络暗号”。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "眷村",
      "白色恐怖",
      "钢琴",
      "书信",
      "时代悲剧"
    ]
  },
  {
    "title": "万分感谢",
    "href": "detail/movie-1506.html",
    "cover": "6.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭 / 治愈",
    "category": "动作",
    "description": "父亲去世后，三个孩子收到他的遗物：一沓从未寄出的“万分感谢”卡。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "遗书",
      "售后服务",
      "生死",
      "小确丧",
      "温暖"
    ]
  },
  {
    "title": "凤凰城故事",
    "href": "detail/movie-1507.html",
    "cover": "7.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 家庭, 年代",
    "category": "奇幻",
    "description": "一座北方小城，三个家庭，四十年风雨，讲述平凡中国人的“史诗”。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "小城故事",
      "改革开放",
      "家庭变迁",
      "温情"
    ]
  },
  {
    "title": "美丽拳王",
    "href": "detail/movie-1508.html",
    "cover": "8.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情、运动、传记",
    "category": "爱情",
    "description": "变性人索要参加男子泰拳比赛，对手笑她花拳绣腿，她一拳打碎了他的下巴。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "跨性别者",
      "泰拳",
      "自我认同",
      "逆袭",
      "真实改编"
    ]
  },
  {
    "title": "市场",
    "href": "detail/movie-1509.html",
    "cover": "9.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情, 奇幻",
    "category": "喜剧",
    "description": "一个百年菜市场下镇压着古曼童，每个摊位主的愿望都会以诡异方式实现。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "菜市场",
      "卖鱼娘",
      "许愿",
      "轮回"
    ]
  },
  {
    "title": "复仇狗联盟",
    "href": "detail/movie-1510.html",
    "cover": "10.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作",
    "category": "悬疑",
    "description": "被遗弃的比特犬联合流浪猫、老马和乌鸦，向虐待它的前主人发动一场“低配”复仇。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "狗狗",
      "复仇",
      "黑色幽默",
      "动物主角"
    ]
  },
  {
    "title": "打雀英雄传",
    "href": "detail/movie-1511.html",
    "cover": "11.jpg",
    "year": "2006",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 剧情",
    "category": "剧情",
    "description": "一个送外卖的小哥被误认为麻将赌神，被迫代表贫民区迎战电脑AI雀圣。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "麻将江湖",
      "草根逆袭",
      "市井智慧"
    ]
  },
  {
    "title": "茉迪的彩色小屋",
    "href": "detail/movie-1512.html",
    "cover": "12.jpg",
    "year": "2016",
    "region": "加拿大",
    "type": "电影",
    "genre": "剧情， 传记",
    "category": "青春",
    "description": "患关节炎的乡村女子用画笔把灰暗小屋涂成彩虹，后来全世界都来看她的门。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "艺术",
      "治愈",
      "真实事件",
      "朴素人生",
      "色彩"
    ]
  },
  {
    "title": "家道",
    "href": "detail/movie-1513.html",
    "cover": "13.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情, 家庭",
    "category": "都市",
    "description": "从义乌货郎到跨国集团，一个中国家族四十年的沉浮，映照出家国同运的时代画卷。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "家族兴衰",
      "改革开放",
      "商战",
      "亲情"
    ]
  },
  {
    "title": "孤胆保镖",
    "href": "detail/movie-1514.html",
    "cover": "14.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "历史",
    "description": "退役女兵为救被拐卖的学生，单枪匹马端掉跨国人贩窝点。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "硬汉",
      "复仇",
      "枪战"
    ]
  },
  {
    "title": "我们的朋友马丁",
    "href": "detail/movie-1515.html",
    "cover": "15.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 心理",
    "category": "科幻",
    "description": "四个老友的年度聚会中，一个自称“马丁”的陌生人闯入，声称是他们失忆的大学同窗。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "友谊",
      "谎言",
      "身份盗窃",
      "心理操控",
      "室内剧"
    ]
  },
  {
    "title": "杜宾专员：一个悲痛的家庭",
    "href": "detail/movie-1516.html",
    "cover": "16.jpg",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "genre": "剧情，悬疑，惊悚",
    "category": "剧情",
    "description": "一名儿童保护专员调查一个看似幸福的家庭，却发现家中三个孩子已经两年没有去过学校，而邻居说从未见过他们笑。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "虐童疑云",
      "社工系统",
      "司法调查",
      "家庭悲剧",
      "层层反转"
    ]
  },
  {
    "title": "云山雾罩",
    "href": "detail/movie-1517.html",
    "cover": "17.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 喜剧 / 犯罪",
    "category": "剧情",
    "description": "一座重庆大厦里，三伙笨贼、一对骗子夫妻和一个保安，因为一个装满钞票的皮箱，在上上下下的电梯里上演了荒诞一夜。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "山城迷雾",
      "谎言连环套",
      "笨贼与骗子",
      "黑色幽默"
    ]
  },
  {
    "title": "科西加兄弟",
    "href": "detail/movie-1518.html",
    "cover": "18.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "剧集",
    "genre": "黑帮家族",
    "category": "都市",
    "description": "黑手党三兄弟在父亲遇刺后，发现家族最大的敌人竟是彼此的妻子。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "兄弟情",
      "复仇",
      "西西里",
      "权力",
      "背叛"
    ]
  },
  {
    "title": "爱在暴风的日子粤语",
    "href": "detail/movie-1519.html",
    "cover": "19.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "爱情 / 年代 / 剧情",
    "category": "奇幻",
    "description": "1997 年台风天，一对分手七年的情侣被困在即将拆迁的戏院里，被迫面对当年分手的真相。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "香港",
      "90年代",
      "台风",
      "怀旧",
      "虐恋"
    ]
  },
  {
    "title": "骑警",
    "href": "detail/movie-1520.html",
    "cover": "20.jpg",
    "year": "2025",
    "region": "加拿大",
    "type": "剧集",
    "genre": "犯罪动作",
    "category": "科幻",
    "description": "一名背负污名的皇家骑警被流放到北极小镇，却发现失踪案背后藏着古老因纽特神话中的恶灵。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "皇家骑警",
      "荒野追凶",
      "原住民文化",
      "悬疑"
    ]
  },
  {
    "title": "西科克斯七人组的归来",
    "href": "detail/movie-1521.html",
    "cover": "21.jpg",
    "year": "2027",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "category": "纪录",
    "description": "三十年前，东德一支传奇朋克乐队在演出前集体消失；三十年后，仅剩的三位成员收到了一张神秘演出邀请函。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "冷战",
      "乐队",
      "重逢",
      "救赎"
    ]
  },
  {
    "title": "天师撞邪粤语",
    "href": "detail/movie-1522.html",
    "cover": "22.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖喜剧",
    "category": "都市",
    "description": "落魄天师在凶宅抓鬼，发现这只鬼每晚都在屋里跳广场舞，还不让天师休息。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "茅山",
      "僵尸",
      "粤语原声",
      "怀旧"
    ]
  },
  {
    "title": "列宁在巴黎",
    "href": "detail/movie-1523.html",
    "cover": "23.jpg",
    "year": "2019",
    "region": "法国 / 俄罗斯",
    "type": "电影",
    "genre": "历史 / 传记",
    "category": "青春",
    "description": "1911年列宁流亡巴黎，白天在图书馆写稿，晚上却偷偷去听印象派音乐会，被党内同志举报。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "流亡",
      "革命前夕",
      "巴黎",
      "思想交锋",
      "黑白与彩色"
    ]
  },
  {
    "title": "天堂的祝福",
    "href": "detail/movie-1524.html",
    "cover": "24.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "genre": "奇幻，爱情，喜剧",
    "category": "音乐",
    "description": "一名因救人而死亡的天使实习生，被送回人间后，发现自己必须破坏原女友的婚礼才能返回天堂。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "天使",
      "重返人间",
      "错位人生"
    ]
  },
  {
    "title": "爱上笨男人",
    "href": "detail/movie-1525.html",
    "cover": "25.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情, 喜剧",
    "category": "青春",
    "description": "高冷女律师为了应付家里催婚，雇了一个只有小学智商但心地纯净的便利店店员假扮男友。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "姐弟恋",
      "反差萌",
      "职场",
      "契约恋爱"
    ]
  },
  {
    "title": "宇宙怪兽加美拉",
    "href": "detail/movie-1526.html",
    "cover": "26.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "科幻，动作，灾难",
    "category": "奇幻",
    "description": "沉睡于北极冰盖下的超级生物兵器“加美拉”因全球变暖苏醒，它的使命是消灭不断污染地球的“人类病毒”。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "特摄",
      "怪兽",
      "环保"
    ]
  },
  {
    "title": "狂覗",
    "href": "detail/movie-1527.html",
    "cover": "27.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "都市",
    "description": "一名黑客入侵了全城公共摄像头，将1200人的隐私直播给暗网用户观看，却意外拍到了自己的谋杀案。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "偷窥",
      "直播",
      "隐私",
      "网络社会",
      "反转"
    ]
  },
  {
    "title": "黑执事：豪华客船篇",
    "href": "detail/movie-1528.html",
    "cover": "28.jpg",
    "year": "2017",
    "region": "日本",
    "type": "动画电影",
    "genre": "动画，悬疑，奇幻",
    "category": "剧情",
    "description": "十九世纪的豪华客轮上，活死人横行，恶魔执事塞巴斯蒂安与少爷夏尔必须在丧尸围城之中，查出死者复活的邪教仪式真相。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "豪华客轮",
      "丧尸",
      "英伦风",
      "主仆羁绊"
    ]
  },
  {
    "title": "铁路的白蔷薇",
    "href": "detail/movie-1529.html",
    "cover": "29.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "爱情, 历史, 战争",
    "category": "悬疑",
    "description": "1935年，满铁调查部精英与一位华人女翻译在哈尔滨开往大连的列车上一见钟情，而女孩只剩三个月寿命。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "昭和",
      "铁道",
      "禁忌恋",
      "绝症",
      "催泪"
    ]
  },
  {
    "title": "女子监狱大屠杀",
    "href": "detail/movie-1530.html",
    "cover": "30.jpg",
    "year": "1983",
    "region": "意大利",
    "type": "电影",
    "genre": "恐怖、惊悚",
    "category": "历史",
    "description": "二战末期，一座关押政治犯的女子集中营里，变态女看守长计划在盟军到来前，处决所有囚犯。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "邪典",
      "女子监狱",
      "纳粹",
      "B级片",
      "暴力"
    ]
  },
  {
    "title": "狼少女与黑王子",
    "href": "detail/movie-1531.html",
    "cover": "31.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "爱情, 校园",
    "category": "都市",
    "description": "为了在高中交到朋友，虚荣的“狼少女”偷拍了一个帅气路人，没想到他竟是本校出了名的腹黑“王子”。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "少女漫改",
      "假情侣",
      "抖S",
      "治愈",
      "成长"
    ]
  },
  {
    "title": "奔跑的修女",
    "href": "detail/movie-1532.html",
    "cover": "32.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "genre": "喜剧, 冒险, 剧情",
    "category": "都市",
    "description": "一名古板的修女为保住孤儿院，被迫参加城市马拉松，意外跑出了神迹。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "修女",
      "马拉松",
      "信仰与自由",
      "女性力量"
    ]
  },
  {
    "title": "领航人",
    "href": "detail/movie-1533.html",
    "cover": "33.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "genre": "科幻悬疑",
    "category": "古装",
    "description": "一位顶尖程序员发现，她研发的自动驾驶系统在面临车祸抉择时，似乎拥有了一套不为人知的“暗黑道德观”。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "AI",
      "自动驾驶",
      "道德困境",
      "黑科技"
    ]
  },
  {
    "title": "魔鬼快餐",
    "href": "detail/movie-1534.html",
    "cover": "34.jpg",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖, 喜剧",
    "category": "奇幻",
    "description": "一家24小时快餐店的隔夜肉饼，让所有食客在三十分钟后变成了只对油炸食品感兴趣的丧尸。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "丧尸",
      "快餐",
      "恶搞",
      "血腥",
      "讽刺"
    ]
  },
  {
    "title": "到来的难处",
    "href": "detail/movie-1535.html",
    "cover": "35.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "都市",
    "description": "当确诊阿尔茨海默症的钢琴家母亲开始忘记音符，女儿必须学会用沉默和陪伴，弹完人生最后一首乐曲。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "阿尔茨海默症",
      "母女",
      "亲情",
      "催泪"
    ]
  },
  {
    "title": "十三妹国语",
    "href": "detail/movie-1536.html",
    "cover": "36.jpg",
    "year": "1983",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "古装 / 武侠 / 传记",
    "category": "剧情",
    "description": "将门之女十三妹，女扮男装闯江湖，只为诛杀奸臣报血海深仇。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "邵氏",
      "女侠",
      "替父报仇",
      "经典"
    ]
  },
  {
    "title": "谈笑人生",
    "href": "detail/movie-1537.html",
    "cover": "37.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭 / 喜剧",
    "category": "悬疑",
    "description": "一位被确诊绝症的老人决定在最后时光里，用幽默和诡计让家人走出悲伤，学会谈笑面对生死。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "老年",
      "亲情",
      "幽默",
      "生死观",
      "温暖"
    ]
  },
  {
    "title": "笑傲江湖粤语",
    "href": "detail/movie-1538.html",
    "cover": "38.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "古装 / 武侠 / 剧情",
    "category": "历史",
    "description": "全新粤语版《笑傲江湖》，令狐冲不再只是浪子，而是一个被江湖和师门双重背叛后，选择“不原谅”的复仇者。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "金庸改编",
      "粤语原声",
      "江湖",
      "令狐冲",
      "新版"
    ]
  },
  {
    "title": "水之身",
    "href": "detail/movie-1539.html",
    "cover": "39.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "剧情, 奇幻, 同性",
    "category": "喜剧",
    "description": "湄南河边，溺亡的僧侣转世成了一滴可以附着在任何液体上的水，只为再吻一次那个河边的男孩。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "唯美",
      "水体摄影",
      "转世",
      "禁忌之恋"
    ]
  },
  {
    "title": "有钱男与贫穷女",
    "href": "detail/movie-1540.html",
    "cover": "40.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情, 职场",
    "category": "悬疑",
    "description": "亿万资产继承人假扮破产流落贫民区，遇见了靠打五份工养活弟妹的硬核女孩。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "阶级差异",
      "商战",
      "励志",
      "傲娇男主",
      "社会议题"
    ]
  },
  {
    "title": "包青天之碧血丹心",
    "href": "detail/movie-1541.html",
    "cover": "41.jpg",
    "year": "2010",
    "region": "中国大陆 / 中国台湾",
    "type": "电视剧 / 剧集",
    "genre": "古装 / 悬疑 / 历史",
    "category": "爱情",
    "description": "包拯调查一桩私盐案，却发现背后牵扯到边关军饷和皇叔谋反，这次他要铡的人，是宗室亲王。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "包青天",
      "探案",
      "忠臣",
      "宋朝",
      "权谋"
    ]
  },
  {
    "title": "风雨雕花楼",
    "href": "detail/movie-1542.html",
    "cover": "42.jpg",
    "year": "2010",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "年代/商战",
    "category": "古装",
    "description": "江南雕花楼里，三代丝绸人的命运随着抗日烽火、解放战争和公私合营，在风雨中飘摇沉浮。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "家族",
      "丝绸",
      "民国",
      "三代人"
    ]
  },
  {
    "title": "假日总动员",
    "href": "detail/movie-1543.html",
    "cover": "43.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 公路 / 冒险",
    "category": "悬疑",
    "description": "公司强制团建，所有人被困荒岛，HR用考勤表给每人打分决定“救援顺序”。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "团建",
      "荒岛",
      "社畜",
      "野生求生",
      "打工人生存法则"
    ]
  },
  {
    "title": "卡拉丝：为爱而声",
    "href": "detail/movie-1544.html",
    "cover": "44.jpg",
    "year": "2019",
    "region": "意大利/希腊",
    "type": "电影",
    "genre": "传记， 音乐， 剧情",
    "category": "纪录",
    "description": "她是二十世纪最伟大的女高音，却用一生唱错了爱情的咏叹调。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "歌剧女神",
      "女性成长",
      "真实故事改编",
      "声乐盛宴"
    ]
  },
  {
    "title": "怒放的豆芽",
    "href": "detail/movie-1545.html",
    "cover": "45.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "喜剧",
    "description": "一个在菜市场卖豆芽的单亲妈妈，决心帮有听力障碍的女儿实现芭蕾梦。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "底层",
      "教育",
      "单亲",
      "梦想"
    ]
  },
  {
    "title": "温暖的皇妃",
    "href": "detail/movie-1546.html",
    "cover": "46.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装爱情",
    "category": "青春",
    "description": "现代女法医魂穿成冷宫废妃，用验尸手法在后宫破案，顺便驯服了暴躁皇帝。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "宫斗",
      "逆袭",
      "先婚后爱",
      "甜宠"
    ]
  },
  {
    "title": "不知所踪",
    "href": "detail/movie-1547.html",
    "cover": "47.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 犯罪, 剧情",
    "category": "家庭",
    "description": "一名失忆男子在荒漠加油站醒来，发现自己是网上疯传的失踪人口，而凶手正潜伏在寻找他的人之中。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "公路追凶",
      "记忆碎片",
      "身份互换",
      "黑色电影"
    ]
  },
  {
    "title": "喜剧总动员第二季",
    "href": "detail/movie-1548.html",
    "cover": "48.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "综艺",
    "genre": "喜剧 / 真人秀",
    "category": "喜剧",
    "description": "跨界明星与喜剧人的强强联合，用笑声解构生活痛点。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "喜剧",
      "竞演",
      "跨界",
      "小品"
    ]
  },
  {
    "title": "新吊带袜天使",
    "href": "detail/movie-1549.html",
    "cover": "49.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画",
    "genre": "奇幻， 动作， 喜剧",
    "category": "奇幻",
    "description": "两位被贬下凡的天使（兼内衣幽灵猎人）再次回归，这次她们的敌人不是幽灵，而是来自赛博空间的“数据幽灵”。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "重制版",
      "电波系",
      "变身",
      "恶搞"
    ]
  },
  {
    "title": "男人唔可以穷",
    "href": "detail/movie-1550.html",
    "cover": "50.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情",
    "category": "爱情",
    "description": "两个三十多岁的香港男人，一个失业、一个创业失败，在房价和尊严的双重挤压下，他们选择用最笨的办法重新站起来。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "励志",
      "职场",
      "中年",
      "家庭",
      "港味"
    ]
  },
  {
    "title": "希特勒末日",
    "href": "detail/movie-1551.html",
    "cover": "51.jpg",
    "year": "2022",
    "region": "德国",
    "type": "电影",
    "genre": "历史，剧情",
    "category": "悬疑",
    "description": "通过地堡最后一名打字员的双眼，重绘希特勒生命中最后的十二天。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "二战",
      "地堡",
      "最后时光"
    ]
  },
  {
    "title": "爸妈来自二次元",
    "href": "detail/movie-1552.html",
    "cover": "52.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 动画 / 家庭",
    "category": "青春",
    "description": "儿子一直鄙视父母的宅属性，直到他发现父母竟是当年圈内的神仙眷侣。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "动漫",
      "代际冲突",
      "宅文化",
      "搞笑"
    ]
  },
  {
    "title": "燕娘",
    "href": "detail/movie-1553.html",
    "cover": "53.jpg",
    "year": "1978",
    "region": "香港",
    "type": "电影",
    "genre": "武侠",
    "category": "历史",
    "description": "燕娘为父报仇，却发现仇人已是小镇上人人爱戴的善人，正义与私仇如何两全？",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "邵氏",
      "女侠",
      "复仇",
      "江湖恩怨",
      "匕首"
    ]
  },
  {
    "title": "运动鞋",
    "href": "detail/movie-1554.html",
    "cover": "54.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "传记",
    "category": "音乐",
    "description": "一个从贫民窟走出的黑人青年，如何用一张设计图和满腔热血，挑战了价值百亿美元的运动鞋帝国。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "体育",
      "创业",
      "黑人",
      "励志"
    ]
  },
  {
    "title": "鼠洞里的好朋友",
    "href": "detail/movie-1555.html",
    "cover": "55.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "动画 / 家庭 / 冒险",
    "category": "动作",
    "description": "一只胆小的老鼠和一只被放逐的鼹鼠，在地下水管迷宫中寻找传说中的“奶酪月亮”。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "友谊",
      "治愈",
      "动物",
      "地下世界",
      "成长"
    ]
  },
  {
    "title": "驴得水",
    "href": "detail/movie-1556.html",
    "cover": "56.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "category": "历史",
    "description": "民国乡村小学为冒领一头驴的薪水，编出“吕得水”老师，却引来教育部特派员突击检查。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "黑色幽默",
      "民国",
      "讽刺",
      "人性"
    ]
  },
  {
    "title": "勇士不哭",
    "href": "detail/movie-1557.html",
    "cover": "57.jpg",
    "year": "1993",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 运动",
    "category": "爱情",
    "description": "一个被全队男生排挤的高中女生，用一场比赛教会所有人什么是真正的“勇士”。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "摔跤",
      "女性",
      "真实改编",
      "励志"
    ]
  },
  {
    "title": "第三人称复仇",
    "href": "detail/movie-1558.html",
    "cover": "58.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电视剧",
    "genre": "悬疑 / 惊悚",
    "category": "都市",
    "description": "转学生为查清姐姐自杀真相，却发现每个人都在用别人的身份活着。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "校园霸凌",
      "替身",
      "反转",
      "高智商",
      "复仇"
    ]
  },
  {
    "title": "嘘，国王在冬眠",
    "href": "detail/movie-1559.html",
    "cover": "59.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "悬疑",
    "category": "动作",
    "description": "每个冬天，小镇居民都会集体失忆三天，唯有新来的教师发现了冰封国王的秘密。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "奇幻",
      "小镇秘密",
      "集体失忆",
      "权力隐喻"
    ]
  },
  {
    "title": "西伯利亚特快列车",
    "href": "detail/movie-1560.html",
    "cover": "60.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "悬疑 / 动作",
    "category": "爱情",
    "description": "一辆横跨西伯利亚的列车上，一群陌生人发现他们卷入了一场关于沙皇宝藏的死亡游戏。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "火车",
      "雪原",
      "阴谋"
    ]
  },
  {
    "title": "我的夏日甜心",
    "href": "detail/movie-1561.html",
    "cover": "61.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 青春",
    "category": "纪录",
    "description": "高考结束后的暑假，学霸女孩意外遇见了小镇上的神秘少年，一段冰与火碰撞的甜蜜冒险就此展开。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "夏日",
      "初恋",
      "成长",
      "治愈",
      "打工"
    ]
  },
  {
    "title": "波坦金战舰",
    "href": "detail/movie-1562.html",
    "cover": "62.jpg",
    "year": "1925",
    "region": "苏联",
    "type": "电影",
    "genre": "历史，战争",
    "category": "家庭",
    "description": "1905年革命前夕，波坦金号战舰上的水兵因腐肉起义，最终与敖德萨市民并肩对抗沙皇军队。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "默片",
      "经典",
      "革命",
      "蒙太奇",
      "史诗"
    ]
  },
  {
    "title": "娇凤痴鸾",
    "href": "detail/movie-1563.html",
    "cover": "63.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "历史",
    "description": "富家女为逃避商业联姻扮成男人混入男方公司，不料竟与“未婚夫”成了最佳兄弟。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "港式闹剧",
      "错位姻缘",
      "女扮男装",
      "摩登情歌"
    ]
  },
  {
    "title": "江河日上",
    "href": "detail/movie-1564.html",
    "cover": "64.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 悬疑 / 犯罪",
    "category": "动作",
    "description": "临江环保局长突遭双规，他的下属却在亡故后留下指向“江河日上”计划的加密证据。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "环保",
      "反腐",
      "心理博弈",
      "官场",
      "社会派"
    ]
  },
  {
    "title": "圣路伊斯大桥",
    "href": "detail/movie-1565.html",
    "cover": "65.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情 / 历史",
    "category": "家庭",
    "description": "1714年，五个人在同一座桥上坠落，一位修士试图证明他们是被上帝选中的。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "朝圣",
      "信仰",
      "救赎",
      "群像",
      "文学改编"
    ]
  },
  {
    "title": "怪兽8号",
    "href": "detail/movie-1566.html",
    "cover": "66.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集 / 真人剧",
    "genre": "动作 / 科幻 / 热血",
    "category": "科幻",
    "description": "32岁的清洁工梦想加入防卫队杀怪兽，直到他自己变成了怪兽8号。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "怪兽",
      "中年逆袭",
      "变身英雄",
      "自卫队",
      "反差热血"
    ]
  },
  {
    "title": "寻娃总动员",
    "href": "detail/movie-1567.html",
    "cover": "67.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧、家庭、公路",
    "category": "剧情",
    "description": "三个爱吹牛的老爸，为了在孩子面前挽回面子，组队踏上了一场啼笑皆非的寻娃之旅。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "寻子",
      "乌龙",
      "父爱",
      "草根"
    ]
  },
  {
    "title": "导火线",
    "href": "detail/movie-1568.html",
    "cover": "68.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "genre": "动作/犯罪",
    "category": "爱情",
    "description": "卧底警探被黑帮兄弟识破身份，24小时内他必须在情义与正义间引爆生死导火线。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "卧底",
      "兄弟情",
      "警匪对决",
      "拳拳到肉"
    ]
  },
  {
    "title": "梦游故宫",
    "href": "detail/movie-1569.html",
    "cover": "69.jpg",
    "year": "2024",
    "region": "中国大陆 / 中国台湾",
    "type": "电影",
    "genre": "奇幻 / 剧情",
    "category": "爱情",
    "description": "一名失意的文物修复师每晚都会梦见自己穿越回民国时期的故宫，却不知梦中人是他的曾祖父。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "梦境",
      "历史",
      "穿越",
      "文物修复",
      "温情"
    ]
  },
  {
    "title": "打劫阴司路",
    "href": "detail/movie-1570.html",
    "cover": "70.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 恐怖 / 奇幻",
    "category": "爱情",
    "description": "三个笨贼抢了一家纸扎店，被纸扎公仔引入阴间，发现这里的“鬼”比人更讲规矩。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "鬼片",
      "阴间",
      "劫案",
      "港式笑料",
      "地府"
    ]
  },
  {
    "title": "依赖药水活下去！",
    "href": "detail/movie-1571.html",
    "cover": "71.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻 / 悬疑 / 剧情",
    "category": "悬疑",
    "description": "在未来，平民每天必须喝下一瓶政府发放的“维生药水”，否则就会暴毙，而主角意外发现那是谎言。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "反乌托邦",
      "药物依赖",
      "阶层固化",
      "系统反抗",
      "黑色幽默"
    ]
  },
  {
    "title": "外星女生柴小七2",
    "href": "detail/movie-1572.html",
    "cover": "72.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情, 科幻",
    "category": "都市",
    "description": "柴小七回到母星后发现怀了人类的孩子，而母星法律规定：混血儿必须销毁。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "外星人",
      "失忆",
      "续集",
      "跨星恋"
    ]
  },
  {
    "title": "速成沼泽",
    "href": "detail/movie-1573.html",
    "cover": "73.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "荒诞喜剧",
    "category": "青春",
    "description": "为了在城市中心造湿地公园，一个公务员部门开始学习“如何专业地失败”，最后却真的造出了一片沼泽。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "职场",
      "黑色幽默",
      "社会派"
    ]
  },
  {
    "title": "她来自台北",
    "href": "detail/movie-1574.html",
    "cover": "74.jpg",
    "year": "2026",
    "region": "中国大陆 / 中国台湾",
    "type": "剧集",
    "genre": "剧情, 家庭",
    "category": "爱情",
    "description": "1999年，一个台北女孩嫁到东北小城；二十年后，她混血口音的女儿带着她的骨灰回台北，寻找那个从未见过面的外公。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "两岸家庭",
      "身份认同",
      "美食治愈",
      "代际和解"
    ]
  },
  {
    "title": "带剑女孩",
    "href": "detail/movie-1575.html",
    "cover": "75.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动作",
    "category": "青春",
    "description": "她的剑从不入鞘，因为仇人名单比剑身还长。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "女武士",
      "复仇",
      "暴力美学"
    ]
  },
  {
    "title": "舞来疯",
    "href": "detail/movie-1576.html",
    "cover": "76.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧， 歌舞， 励志",
    "category": "音乐",
    "description": "一群广场舞大妈和嘻哈少年争夺社区地盘，最后不得不联手对抗地产商，舞步即武器。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "广场舞",
      "逆袭",
      "中老年",
      "热血"
    ]
  },
  {
    "title": "帅哥娇娃",
    "href": "detail/movie-1577.html",
    "cover": "77.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 动作",
    "category": "喜剧",
    "description": "顶尖杀手被迫照顾黑帮老大的五岁女儿，结果被她的幼儿园同学追着满城跑。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "硬汉",
      "萌娃",
      "反差",
      "搞笑"
    ]
  },
  {
    "title": "未埋葬的人",
    "href": "detail/movie-1578.html",
    "cover": "78.jpg",
    "year": "2026",
    "region": "西班牙 / 墨西哥",
    "type": "电影",
    "genre": "悬疑, 奇幻, 剧情",
    "category": "励志",
    "description": "小镇上所有死去的人都会在午夜走回自己家，直到活着的亲人亲手埋葬他们。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "死亡",
      "记忆",
      "南美魔幻现实主义",
      "哲学",
      "超自然"
    ]
  },
  {
    "title": "地狱疆场",
    "href": "detail/movie-1579.html",
    "cover": "79.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "战争，奇幻",
    "category": "悬疑",
    "description": "抗战末期，一支中国侦察排误入地狱副本，必须在鬼怪的围猎下完成不可能的任务。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "地狱",
      "战场",
      "轮回",
      "抗战",
      "奇幻动作"
    ]
  },
  {
    "title": "错位恋人",
    "href": "detail/movie-1580.html",
    "cover": "80.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "爱情 / 奇幻 / 剧情",
    "category": "爱情",
    "description": "异地恋情侣发现每次吵架后挂断电话，两人就会互换身体，但互换的时间长度正好等于吵架时长。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "身体互换",
      "时间差",
      "异地恋",
      "电话线"
    ]
  },
  {
    "title": "失控班！",
    "href": "detail/movie-1581.html",
    "cover": "81.jpg",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 惊悚",
    "category": "剧情",
    "description": "一个普通班级的学生突然集体拒绝学习，用沉默和纪律对抗所有老师。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "教育",
      "小学生",
      "集体失控",
      "心理压迫",
      "社会隐喻"
    ]
  },
  {
    "title": "米拉日巴",
    "href": "detail/movie-1582.html",
    "cover": "82.jpg",
    "year": "2025",
    "region": "不丹",
    "type": "电影",
    "genre": "传记 / 宗教",
    "category": "纪录",
    "description": "年轻的黑巫師米拉日巴为复仇而学法，却在雪山苦修中成为一代尊者，他的修行之路充满血与雪。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "藏传佛教",
      "苦修",
      "雪山",
      "救赎"
    ]
  },
  {
    "title": "青楼红杏",
    "href": "detail/movie-1583.html",
    "cover": "83.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情/情色",
    "category": "动作",
    "description": "民国花魁为报恩嫁入豪门，却发现恩人正是当年毁她清白的仇家之子。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "民国",
      "女性",
      "恩怨"
    ]
  },
  {
    "title": "母亲的梦想",
    "href": "detail/movie-1584.html",
    "cover": "84.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 运动",
    "category": "青春",
    "description": "一位罹患绝症的清洁工母亲，为了给狱中儿子攒钱买房，开始苦练马拉松想赢取奖金。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "母爱",
      "马拉松",
      "底层",
      "励志",
      "绝症"
    ]
  },
  {
    "title": "一拳鲜师：勇敢的市民",
    "href": "detail/movie-1585.html",
    "cover": "85.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "genre": "动作、校园",
    "category": "纪录",
    "description": "隐退的前格斗冠军到中学当体育老师，他信奉“暴力解决暴力”，用拳头让校园恶霸集体转学。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "老师",
      "武术",
      "热血",
      "暴力美学"
    ]
  },
  {
    "title": "梅西的世界杯：传奇崛起",
    "href": "detail/movie-1586.html",
    "cover": "86.jpg",
    "year": "2026",
    "region": "阿根廷",
    "type": "剧集",
    "genre": "纪录片, 运动, 传记",
    "category": "青春",
    "description": "从2014年的遗憾到2022年的封神，独家镜头记录梅西如何背负一个国家乃至一个时代的期望。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "足球",
      "梅西",
      "夺冠之路"
    ]
  },
  {
    "title": "宫本武藏 决斗岩流岛",
    "href": "detail/movie-1587.html",
    "cover": "87.jpg",
    "year": "2015",
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 历史",
    "category": "剧情",
    "description": "宫本武藏在岩流岛与佐佐木小次郎决斗前夜，发现自己其实不想赢。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "武士",
      "剑斗",
      "哲学",
      "宿敌"
    ]
  },
  {
    "title": "万圣年代",
    "href": "detail/movie-1588.html",
    "cover": "88.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "恐怖/奇幻",
    "category": "爱情",
    "description": "每年万圣节，这个小镇的鬼怪传说都会成真，只有孩子们能看到它们，成年人只会傻笑。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "万圣节",
      "小镇",
      "传说成真",
      "群像"
    ]
  },
  {
    "title": "大都会1963",
    "href": "detail/movie-1589.html",
    "cover": "89.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "科幻，黑白修复，剧情",
    "category": "音乐",
    "description": "基于弗里茨·朗原版底片的全新修复与补拍，揭露了地下工人领袖的真实结局。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "表现主义",
      "阶级寓言",
      "默片精神"
    ]
  },
  {
    "title": "最后可以再拜托您一件事吗",
    "href": "detail/movie-1590.html",
    "cover": "90.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "genre": "剧情, 悬疑, 犯罪",
    "category": "喜剧",
    "description": "被公司污蔑并开除的女职员在离职面谈时微笑开口：“最后可以再拜托您一件事吗？去死。”",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "反转复仇",
      "职场霸凌",
      "黑化女主",
      "高智商犯罪",
      "爽剧"
    ]
  },
  {
    "title": "谍海钢面人",
    "href": "detail/movie-1591.html",
    "cover": "91.jpg",
    "year": "1978",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作, 战争, 悬疑",
    "category": "纪录",
    "description": "解放前夕，一名侦察科长追查代号“钢面人”的敌特，发现潜伏的特务竟是以铁面示人的复仇者。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "反特",
      "老电影",
      "民国",
      "伪装的敌人",
      "动作经典"
    ]
  },
  {
    "title": "那些女人",
    "href": "detail/movie-1592.html",
    "cover": "92.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情/历史",
    "category": "都市",
    "description": "抗战时期的江南水乡，妓女、农妇、女先生、资本家太太等不同身份的女性，联手完成了一次无法载入史册的壮举。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "女性群像",
      "民国",
      "抗争"
    ]
  },
  {
    "title": "骗行天下",
    "href": "detail/movie-1593.html",
    "cover": "93.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 犯罪",
    "category": "古装",
    "description": "一个被电信诈骗团伙骗光救命钱的程序员，用技术手段反向入侵了诈骗集团的总部系统，反过来给他们设了一场“局中局”。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "高智商骗局",
      "复仇",
      "局中局",
      "黑色幽默"
    ]
  },
  {
    "title": "精选完美男",
    "href": "detail/movie-1594.html",
    "cover": "94.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "都市",
    "description": "一位单身母亲利用大数据算法为自己“定制”完美约会对象，却发现爱情无法被程序计算。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "约会软件",
      "大数据",
      "单身母亲",
      "浪漫喜剧"
    ]
  },
  {
    "title": "遥控战争",
    "href": "detail/movie-1595.html",
    "cover": "95.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 动作",
    "category": "都市",
    "description": "军方用游戏手柄操控无人机轰炸，少年“高玩”发现炸的是自己父亲。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "无人机",
      "AI叛变",
      "伦理",
      "近未来"
    ]
  },
  {
    "title": "魔王（电影）",
    "href": "detail/movie-1596.html",
    "cover": "96.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖，悬疑",
    "category": "励志",
    "description": "不相信鬼神的刑警与有精神疾病的神父，联手追捕一个能附身他人的连环杀手。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "附身",
      "驱魔",
      "连环杀手",
      "双主角"
    ]
  },
  {
    "title": "莱斯莉·琼斯：时间机器",
    "href": "detail/movie-1597.html",
    "cover": "97.jpg",
    "year": "2023",
    "region": "美国",
    "type": "综艺/脱口秀特辑",
    "genre": "喜剧",
    "category": "奇幻",
    "description": "她用一台“时间机器”回到过去，把曾经伤害过她的人全怼了一遍。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "单口喜剧",
      "女性",
      "辛辣",
      "自嘲"
    ]
  },
  {
    "title": "阴阳路12：美容尸国语",
    "href": "detail/movie-1598.html",
    "cover": "98.jpg",
    "year": "2018",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 喜剧",
    "category": "纪录",
    "description": "美容院老板娘用尸体做面膜原料，顾客变美了，尸体也变“活”了。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "阴阳路系列",
      "美容院",
      "尸变",
      "港式搞笑",
      "国语配音"
    ]
  },
  {
    "title": "东京丧运会",
    "href": "detail/movie-1599.html",
    "cover": "99.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "恐怖, 喜剧, 运动",
    "category": "青春",
    "description": "丧尸病毒在东京奥运场馆爆发，幸存者们被迫发起一场以“逃生”为唯一项目、不被官方承认的“丧运会”。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "丧尸",
      "运动会",
      "血腥",
      "黑色幽默",
      "大逃杀"
    ]
  },
  {
    "title": "预言者",
    "href": "detail/movie-1600.html",
    "cover": "100.jpg",
    "year": "2024",
    "region": "英国, 法国",
    "type": "剧集",
    "genre": "科幻, 惊悚",
    "category": "青春",
    "description": "一个突然能看见未来碎片的小职员，发现政府早已启动一个清除所有“预言者”的秘密计划。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "超能力",
      "政治阴谋",
      "高概念",
      "烧脑"
    ]
  },
  {
    "title": "玫瑰楼迷影",
    "href": "detail/movie-1601.html",
    "cover": "101.jpg",
    "year": "2027",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖惊悚",
    "category": "科幻",
    "description": "女主播入住百年凶宅“玫瑰楼”直播探险，却发现每一个死去的前租客都长着自己的脸。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "凶宅",
      "都市怪谈",
      "女性视角"
    ]
  },
  {
    "title": "孖胎斗女巫",
    "href": "detail/movie-1602.html",
    "cover": "102.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖， 喜剧， 奇幻",
    "category": "励志",
    "description": "一对性格迥异的孪生姐妹回到乡下祖宅，意外唤醒了一位沉睡百年的吃货女巫。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "双胞胎",
      "东南亚巫术",
      "错位喜剧",
      "降头"
    ]
  },
  {
    "title": "感觉就像爱",
    "href": "detail/movie-1603.html",
    "cover": "103.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 悬疑",
    "category": "历史",
    "description": "一场车祸失忆后，她根据社交媒体上的“甜蜜证据”与陌生男人恋爱，却发现那是另一个人的人生。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "都市",
      "情感",
      "心理",
      "反转",
      "治愈"
    ]
  },
  {
    "title": "红色谜团",
    "href": "detail/movie-1604.html",
    "cover": "104.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 剧情",
    "category": "纪录",
    "description": "五年内四起命案现场都出现了一抹无法解释的红色，退休刑警联手数学天才展开追查。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "连环案",
      "逻辑",
      "高智商",
      "红色",
      "隐喻"
    ]
  },
  {
    "title": "猴掌",
    "href": "detail/movie-1605.html",
    "cover": "105.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖， 惊悚",
    "category": "奇幻",
    "description": "一个困在机场的商人买到了一只干枯的猴爪，据说它能实现三个愿望，代价是生命。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "许愿",
      "诅咒",
      "因果报应",
      "心理恐怖"
    ]
  },
  {
    "title": "见面礼",
    "href": "detail/movie-1606.html",
    "cover": "106.jpg",
    "year": "2006",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "家庭",
    "description": "都市女孩回乡见男友父母，却被要求学习已经失传的“见面礼”古老仪式。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "乡土",
      "传统礼仪",
      "治愈"
    ]
  },
  {
    "title": "星际快闪党",
    "href": "detail/movie-1607.html",
    "cover": "107.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 喜剧",
    "category": "剧情",
    "description": "三个银河系最不靠谱的快递员，误打误撞接下了运送“宇宙终极快递”的任务，却把包裹弄丢了。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "太空",
      "快递员",
      "外星人",
      "乌龙事件",
      "冒险"
    ]
  },
  {
    "title": "大厦掳劫案",
    "href": "detail/movie-1608.html",
    "cover": "108.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪，动作",
    "category": "悬疑",
    "description": "为了盗取位于摩天大楼顶层的钻石，五个顶尖高手在电梯里设下天罗地网，却发现电梯里关着一个比他们更危险的连环杀手。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "密室",
      "盗窃",
      "反转",
      "电梯",
      "悬疑"
    ]
  },
  {
    "title": "重新爱上你",
    "href": "detail/movie-1609.html",
    "cover": "109.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情 / 奇幻",
    "category": "家庭",
    "description": "离婚协议签字瞬间，她和丈夫同时回到了十年前初遇的那场雨夜。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "离婚",
      "时间回溯",
      "治愈",
      "契约"
    ]
  },
  {
    "title": "苏珊夫人寻婚计",
    "href": "detail/movie-1610.html",
    "cover": "110.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 爱情",
    "category": "剧情",
    "description": "貌美心机的寡妇苏珊夫人，为了给自己和女儿找到金龟婿，在两对父子之间上演了一场精彩绝伦的攻心计。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "简·奥斯汀",
      "复古",
      "心机女主",
      "女性"
    ]
  },
  {
    "title": "狐妖传说",
    "href": "detail/movie-1611.html",
    "cover": "111.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "奇幻 / 恐怖 / 爱情",
    "category": "奇幻",
    "description": "落魄书生夜宿荒宅，与美艳女子相恋，却不知对方是修行五百年的狐仙，而这段姻缘背后藏着前世血债。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "聊斋",
      "狐仙",
      "邵氏",
      "情欲",
      "因果"
    ]
  },
  {
    "title": "探险活宝第七季",
    "href": "detail/movie-1612.html",
    "cover": "112.jpg",
    "year": "2015",
    "region": "美国",
    "type": "剧集",
    "genre": "动画 / 奇幻",
    "category": "悬疑",
    "description": "芬恩找到了失散多年的人类同伴，而杰克必须面对自己作为父亲的身份危机。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "末日童话",
      "脑洞大开",
      "角色成长"
    ]
  },
  {
    "title": "布宜诺斯艾利斯夜无眠",
    "href": "detail/movie-1613.html",
    "cover": "113.jpg",
    "year": "2025",
    "region": "阿根廷",
    "type": "电影",
    "genre": "爱情文艺",
    "category": "奇幻",
    "description": "一对即将分别的陌生男女，在布宜诺斯艾利斯的一夜里，用探戈丈量着遗忘与深情的距离。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "探戈",
      "异国邂逅",
      "迷离夜色"
    ]
  },
  {
    "title": "朋友也上床",
    "href": "detail/movie-1614.html",
    "cover": "114.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "category": "奇幻",
    "description": "两个失恋的律师签了一份“炮友合同”规避情感风险，结果因为甲方乙方闹上法庭。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "炮友",
      "合约",
      "假戏真做",
      "律所"
    ]
  },
  {
    "title": "异时空大战",
    "href": "detail/movie-1615.html",
    "cover": "115.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻， 动作， 冒险",
    "category": "悬疑",
    "description": "2025年，平行宇宙的“另一个自己”发动了入侵，而唯一的武器是：爱上她。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "平行宇宙",
      "量子纠缠",
      "机甲",
      "硬科幻",
      "特效大片"
    ]
  },
  {
    "title": "高卢勇士之十二个任务",
    "href": "detail/movie-1616.html",
    "cover": "116.jpg",
    "year": "1976",
    "region": "法国",
    "type": "动画电影",
    "genre": "喜剧 / 冒险",
    "category": "悬疑",
    "description": "高卢村的英雄阿斯特里克斯和奥贝里克斯接受凯撒的挑战，完成不可能完成的十二个任务。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "高卢英雄",
      "经典动画",
      "搞笑",
      "任务"
    ]
  },
  {
    "title": "炽爱",
    "href": "detail/movie-1617.html",
    "cover": "117.jpg",
    "year": "2007",
    "region": "意大利",
    "type": "电影",
    "genre": "爱情，剧情，同性",
    "category": "励志",
    "description": "一对相伴十年的同性恋人，其中一人突发脑溢血，另一人却在医院被剥夺了探视权。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "艾滋",
      "临终",
      "伴侣"
    ]
  },
  {
    "title": "偷‧情",
    "href": "detail/movie-1618.html",
    "cover": "118.jpg",
    "year": "2017",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 剧情, 情色",
    "category": "励志",
    "description": "他爱的是你，但每晚睡在我身边，我真的赢了么？",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "禁忌",
      "不伦",
      "欲望",
      "文艺",
      "婚姻"
    ]
  },
  {
    "title": "月歌",
    "href": "detail/movie-1619.html",
    "cover": "119.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "奇幻",
    "category": "励志",
    "description": "现代女作曲家每晚梦到朝鲜时代的失明伽倻琴师，她决定用跨时空的旋律拯救他的生命。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "音乐",
      "时空",
      "民俗",
      "治愈"
    ]
  },
  {
    "title": "超人与蝙蝠侠：全民公敌",
    "href": "detail/movie-1620.html",
    "cover": "120.jpg",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "genre": "动画，动作，科幻",
    "category": "家庭",
    "description": "超人和蝙蝠侠被全球通缉，所有人都认为他们是企图统治世界的叛徒，只有他们彼此相信对方。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "DC",
      "超级英雄",
      "搭档"
    ]
  },
  {
    "title": "荒唐协议",
    "href": "detail/movie-1621.html",
    "cover": "121.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 剧情",
    "category": "历史",
    "description": "亿万富豪与濒死清洁工签下一份荒唐协议：互换人生三个月，若反悔则财产归零。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "身份交换",
      "黑色幽默",
      "富豪游戏"
    ]
  },
  {
    "title": "雷神2:黑暗世界",
    "href": "detail/movie-1622.html",
    "cover": "122.jpg",
    "year": "2013",
    "region": "美国",
    "type": "电影",
    "genre": "动作，奇幻，超级英雄",
    "category": "剧情",
    "description": "雷神为拯救九界不得不与诡计之神洛基联手，对抗沉睡万年归来的黑暗精灵首领。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "漫威",
      "神域大战",
      "黑暗精灵",
      "洛基之死"
    ]
  },
  {
    "title": "英伦谜杀",
    "href": "detail/movie-1623.html",
    "cover": "123.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑，犯罪，惊悚",
    "category": "动作",
    "description": "伦敦泰晤士河接连浮出尸体，每具尸体旁都放着一页写有十四行诗的羊皮纸。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "伦敦",
      "连环杀手",
      "推理",
      "社会阶层",
      "雨夜"
    ]
  },
  {
    "title": "金色的梦",
    "href": "detail/movie-1624.html",
    "cover": "124.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 家庭 / 奇幻",
    "category": "历史",
    "description": "患上阿尔茨海默症的老年舞者，在记忆废墟中跳完了与女儿的最后一场双人舞。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "亲情",
      "阿尔茨海默",
      "视觉美学"
    ]
  },
  {
    "title": "步步惊情",
    "href": "detail/movie-1625.html",
    "cover": "125.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "爱情 / 悬疑 / 奇幻",
    "category": "青春",
    "description": "一名建筑设计师被困在男友坠楼的那一天，每次循环她都能发现这栋楼设计上隐藏的杀人机关。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "时间循环",
      "建筑设计师",
      "谋杀谜团",
      "替身文学"
    ]
  },
  {
    "title": "日落后之地",
    "href": "detail/movie-1626.html",
    "cover": "126.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 悬疑",
    "category": "悬疑",
    "description": "全球陷入永夜，人类仅存的地下城突然开始每天随机传送一人到地面，且从未有人返回。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "末日求生",
      "光敏怪物",
      "地下城",
      "人性实验"
    ]
  },
  {
    "title": "野兽男孩",
    "href": "detail/movie-1627.html",
    "cover": "127.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "动作、科幻、青春",
    "category": "青春",
    "description": "拥有野兽基因的特种兵被派去高中卧底，却在体能测试中一拳打穿了教学楼。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "兽化士兵",
      "校园卧底",
      "暴力美学"
    ]
  },
  {
    "title": "五个博士",
    "href": "detail/movie-1628.html",
    "cover": "128.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "悬疑科幻",
    "category": "奇幻",
    "description": "五个不同领域的顶尖博士醒来发现被困在同一具身体里，每人只有4小时支配权。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "高智商",
      "密室",
      "克隆",
      "伦理困境"
    ]
  },
  {
    "title": "凌迟至死",
    "href": "detail/movie-1629.html",
    "cover": "129.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪, 动作, 剥削",
    "category": "都市",
    "description": "一个女侠客为报灭门之仇，用最残忍的古代刑罚逐一折磨仇家。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "cult",
      "复仇",
      "极刑",
      "江湖"
    ]
  },
  {
    "title": "玻璃庭院",
    "href": "detail/movie-1630.html",
    "cover": "130.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑，剧情",
    "category": "都市",
    "description": "一名植物学天才隐居在玻璃庭院里培育基因植物，却发现自己培育的新物种背后藏着家族的谋杀秘密。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "植物学",
      "身份置换",
      "阴谋复仇",
      "文艺悬疑"
    ]
  },
  {
    "title": "狩猎记",
    "href": "detail/movie-1631.html",
    "cover": "131.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑, 犯罪",
    "category": "纪录",
    "description": "东北老林子里发生了一起诡异命案，老猎人和年轻警察都盯上了同一个猎物。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "东北",
      "雪原",
      "追凶"
    ]
  },
  {
    "title": "我的女官大人",
    "href": "detail/movie-1632.html",
    "cover": "132.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装/甜宠",
    "category": "剧情",
    "description": "现代法学女博士穿越成后宫最底层的冷宫宫女，为了活下去，她靠一本《劳动法》将整个皇宫闹得鸡飞狗跳。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "穿越",
      "宫斗",
      "女强",
      "契约婚姻"
    ]
  },
  {
    "title": "米欧王子",
    "href": "detail/movie-1633.html",
    "cover": "133.jpg",
    "year": "2023",
    "region": "瑞典 / 挪威",
    "type": "电影",
    "genre": "奇幻 / 家庭",
    "category": "悬疑",
    "description": "福利院的孤儿果阿突然收到一封信，信中说他是遥远“米欧王国”失踪多年的王子，而骑着一头金毛狮子的信使正在窗外等他。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "北欧童话",
      "孤儿寻家",
      "冒险",
      "治愈",
      "林格伦改编"
    ]
  },
  {
    "title": "红杏出墙",
    "href": "detail/movie-1634.html",
    "cover": "134.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "悬疑， 爱情， 家庭",
    "category": "剧情",
    "description": "模范妻子被监控拍到深夜进入陌生男人的公寓，但她坚称自己有另一个完整的人格，那个人格根本不认识她的丈夫。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "伦理反转",
      "女性视角",
      "替身疑云"
    ]
  },
  {
    "title": "暴蜂尼亚",
    "href": "detail/movie-1635.html",
    "cover": "135.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "category": "动作",
    "description": "切尔诺贝利废墟中，一种变异巨蜂开始集群攻击人类，但它们攻击的规律竟与圆周率小数点后数字完全一致。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "生物武器",
      "极寒",
      "核废墟"
    ]
  },
  {
    "title": "傲气雄鹰",
    "href": "detail/movie-1636.html",
    "cover": "136.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "悬疑",
    "description": "两个曾经最好的兄弟，一个成了警察一个进了黑帮，三年后各自卧底到对方面前。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "港式枪战",
      "兄弟情",
      "卧底",
      "双雄"
    ]
  },
  {
    "title": "制造伍德斯托克音乐节",
    "href": "detail/movie-1637.html",
    "cover": "137.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "传记，音乐，历史",
    "category": "励志",
    "description": "一个意外背负巨债的小镇青年，如何阴差阳错催生了史上最疯狂的摇滚音乐节。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "六十年代",
      "嬉皮士",
      "混乱与秩序",
      "理想主义"
    ]
  },
  {
    "title": "泰版紫禁之颠",
    "href": "detail/movie-1638.html",
    "cover": "138.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "genre": "剧情, 爱情, 喜剧",
    "category": "家庭",
    "description": "泰国顶级男明星为了体验生活，假扮成穷酸保镖，去保护一位脾气火爆的富家千金，结果引爆娱乐圈核弹。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "泰式狗血",
      "明星与保镖",
      "娱乐圈",
      "动作爱情"
    ]
  },
  {
    "title": "天堂真的存在",
    "href": "detail/movie-1639.html",
    "cover": "139.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻, 剧情, 家庭",
    "category": "奇幻",
    "description": "一个无神论记者去小镇报道“男孩看见天堂”的骗局，却发现自己写的报道正在逐一应验。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "濒死体验",
      "信仰",
      "小镇",
      "奇迹",
      "治愈"
    ]
  },
  {
    "title": "情侠艾夫传",
    "href": "detail/movie-1640.html",
    "cover": "140.jpg",
    "year": "2013",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧， 动作， 奇幻",
    "category": "纪录",
    "description": "嘴炮无敌的撩妹高手艾夫意外获得“共情项链”，必须用谈恋爱的方式来拯救失恋者。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "花花公子",
      "超级英雄",
      "单元剧",
      "软科幻"
    ]
  },
  {
    "title": "好朋友（电影）",
    "href": "detail/movie-1641.html",
    "cover": "141.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 青春",
    "category": "家庭",
    "description": "毕业后，被霸凌者邀请当年所有施暴者参加婚礼，包括那位“最好的朋友”。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "校园霸凌",
      "伪友情",
      "背叛",
      "和解"
    ]
  },
  {
    "title": "企鹅宝贝2：极地的呼唤",
    "href": "detail/movie-1642.html",
    "cover": "142.jpg",
    "year": "2025",
    "region": "法国, 美国",
    "type": "电影",
    "genre": "纪录片, 家庭, 冒险",
    "category": "纪录",
    "description": "幼年帝企鹅“小脚板”在第一次独自下海捕鱼时被洋流卷走，跨越半个南极圈踏上回家之路。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "帝企鹅",
      "气候变化",
      "迁徙",
      "母子亲情",
      "极地风光"
    ]
  },
  {
    "title": "活色生香姊妹花",
    "href": "detail/movie-1643.html",
    "cover": "143.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 家庭",
    "category": "青春",
    "description": "上世纪六十年代，一对在夜总会卖唱的亲姐妹因为爱上同一个男人而分道扬镳，三十年后重聚。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "女性",
      "亲情",
      "年代",
      "传奇"
    ]
  },
  {
    "title": "爱情魔力",
    "href": "detail/movie-1644.html",
    "cover": "144.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "剧集",
    "genre": "奇幻， 爱情， 喜剧",
    "category": "纪录",
    "description": "落魄调香师调出能让人“只爱你七天”的香水，自己试用后竟对死对头总裁疯狂心动。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "魔法香水",
      "契约恋爱",
      "失忆",
      "霸道总裁"
    ]
  },
  {
    "title": "我们在那一片天空下",
    "href": "detail/movie-1645.html",
    "cover": "145.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "青春 / 剧情",
    "category": "家庭",
    "description": "五个被社会抛弃的高中边缘人，决定在一架废弃飞机里建立属于他们的“国家”。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "校园暴力",
      "逆袭",
      "友情",
      "热血",
      "毕业礼"
    ]
  },
  {
    "title": "沉睡危情",
    "href": "detail/movie-1646.html",
    "cover": "146.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑，惊悚，犯罪",
    "category": "历史",
    "description": "一位患有严重梦游症的独居女性，在查看监控时惊恐地发现，每晚都会有一个陌生人进入她的卧室，而她竟在睡梦中主动为他打开了门。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "入室抢劫",
      "催眠",
      "反转",
      "密室",
      "强女"
    ]
  },
  {
    "title": "捐赠",
    "href": "detail/movie-1647.html",
    "cover": "147.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "category": "历史",
    "description": "一个走投无路的小导演决定“捐赠”自己的肾脏，却意外卷入了一场富豪的连环谋杀局。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "器官捐献",
      "黑色幽默",
      "反转",
      "伦理困境"
    ]
  },
  {
    "title": "冲天炮与飞毛腿",
    "href": "detail/movie-1648.html",
    "cover": "148.jpg",
    "year": "1990",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧，动作，警匪",
    "category": "励志",
    "description": "脾气火爆的警察和他畏首畏尾的搭档，在追查军火案时把半个香港炸上了天。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "双雄",
      "乌龙搭档",
      "街头追逐"
    ]
  },
  {
    "title": "足迹追踪",
    "href": "detail/movie-1649.html",
    "cover": "149.jpg",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "冒险 / 家庭 / 剧情",
    "category": "古装",
    "description": "叛逆的城市少年被送到澳大利亚内陆与祖父生活，一场意外后，他必须靠祖先的足迹独自穿越死亡谷。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "荒野",
      "祖孙",
      "生存",
      "土著文化",
      "救赎"
    ]
  },
  {
    "title": "苏格兰场大侦探",
    "href": "detail/movie-1650.html",
    "cover": "150.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "genre": "悬疑犯罪",
    "category": "奇幻",
    "description": "一位患有严重社交障碍的罪案档案管理员，凭借超强记忆力和逻辑，成为苏格兰场编外顾问，却发现自己整理的旧案正被连环杀手一一重演。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "本格推理",
      "伦敦迷雾",
      "高智商对决"
    ]
  },
  {
    "title": "知更鸟",
    "href": "detail/movie-1651.html",
    "cover": "1.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 剧情",
    "category": "都市",
    "description": "伦敦出现了一名自称“知更鸟”的义警，他只惩罚那些钻法律空子的罪犯，而他下一个目标是一位知名律师。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "心理惊悚",
      "正义审判",
      "私刑执法",
      "黑色电影"
    ]
  },
  {
    "title": "非常主播",
    "href": "detail/movie-1652.html",
    "cover": "2.jpg",
    "year": "2008",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧 / 音乐",
    "category": "剧情",
    "description": "三十多岁的电台DJ突然多了个二十二岁的女儿，和一个六岁的天才外孙。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "过气明星",
      "私生女",
      "天才外孙",
      "反差萌"
    ]
  },
  {
    "title": "生活大爆炸第四季",
    "href": "detail/movie-1653.html",
    "cover": "3.jpg",
    "year": "2010",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧, 情景剧",
    "category": "青春",
    "description": "谢尔顿开始尝试“约会”，而霍华德终于要上太空了。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "宅男",
      "科学家",
      "友情"
    ]
  },
  {
    "title": "向医院前行",
    "href": "detail/movie-1654.html",
    "cover": "4.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "剧情 / 公路 / 家庭",
    "category": "古装",
    "description": "一个癌症晚期的父亲拒绝在医院等死，包下一辆黑救护车，让儿子拉着他横跨两千公里，只为死在故乡的麦田里。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "救护车",
      "临终关怀",
      "父子",
      "最后一次旅程"
    ]
  },
  {
    "title": "小男人出差粤语",
    "href": "detail/movie-1655.html",
    "cover": "5.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧、剧情、职场",
    "category": "纪录",
    "description": "身高一米六的“职场小钢炮”，从深圳一路“出差”到香港，凭实力打破所有偏见。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "大湾区",
      "职场",
      "小人物的奋斗",
      "粤语喜剧"
    ]
  },
  {
    "title": "校车司机",
    "href": "detail/movie-1656.html",
    "cover": "6.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作，惊悚，剧情",
    "category": "音乐",
    "description": "退伍女兵开的校车被劫持，她是车上20个孩子最后的防线。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "校车",
      "劫持",
      "退伍军人",
      "救援"
    ]
  },
  {
    "title": "天外者",
    "href": "detail/movie-1657.html",
    "cover": "7.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻 / 冒险",
    "category": "家庭",
    "description": "一颗陨石坠入江户城，带来的不是毁灭，而是一个会讲日语、自称“天外者”的神秘少女。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "陨石",
      "江户时代",
      "外星生命",
      "武士"
    ]
  },
  {
    "title": "情系牵牛花",
    "href": "detail/movie-1658.html",
    "cover": "8.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "年代/爱情",
    "category": "历史",
    "description": "一封寄错地址的信，让北京知青与南方乡村的哑女开始了长达十年的“纸上恋人”生涯。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "知青",
      "乡村",
      "书信",
      "慢热",
      "怀旧"
    ]
  },
  {
    "title": "秋霜",
    "href": "detail/movie-1659.html",
    "cover": "9.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情, 家庭, 文艺",
    "category": "剧情",
    "description": "父亲患上阿尔茨海默症，女儿用一把旧剪刀和满院菊花，帮他找回消失的记忆碎片。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "北方小城",
      "父女关系",
      "老年痴呆",
      "静物叙事"
    ]
  },
  {
    "title": "不留痕迹2018",
    "href": "detail/movie-1660.html",
    "cover": "10.jpg",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "genre": "犯罪 / 悬疑",
    "category": "科幻",
    "description": "金牌律师为弑母少年做无罪辩护，却发现自己的心理档案上写着“此人有完美消除证据的病态冲动”。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "完美犯罪",
      "高智商",
      "律师",
      "无尸案",
      "反转"
    ]
  },
  {
    "title": "告别单身",
    "href": "detail/movie-1661.html",
    "cover": "11.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "category": "历史",
    "description": "为了应付催婚，她和闺蜜策划了一场假婚礼，结果来了三百个真宾客。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "假结婚",
      "闺蜜",
      "闹剧",
      "反催婚"
    ]
  },
  {
    "title": "玉面威龙",
    "href": "detail/movie-1662.html",
    "cover": "12.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 喜剧",
    "category": "励志",
    "description": "全港最凶悍的黑道卧底被迫扮成夜店头牌舞男，他却一不小心红了。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "卧底",
      "夜店",
      "反差萌",
      "硬汉搞笑",
      "港式无厘头"
    ]
  },
  {
    "title": "柳浪闻莺",
    "href": "detail/movie-1663.html",
    "cover": "13.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情， 剧情， 历史",
    "category": "动作",
    "description": "1992年，越剧小生垂髫与花旦银心同时爱上一个画家，戏台上的梁祝，戏台下成了三个人一生都解不开的死结。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "越剧",
      "姐妹情",
      "三角恋",
      "90年代",
      "西湖"
    ]
  },
  {
    "title": "是你",
    "href": "detail/movie-1664.html",
    "cover": "14.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "genre": "爱情, 悬疑, 同性",
    "category": "悬疑",
    "description": "车祸失忆的豪门少爷醒来后，认定身边的私人护工就是自己的初恋，而护工却说：你认错人了。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "失忆",
      "替身",
      "豪门",
      "身份谜团",
      "双向奔赴"
    ]
  },
  {
    "title": "天堂计划",
    "href": "detail/movie-1665.html",
    "cover": "15.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻 / 悬疑",
    "category": "家庭",
    "description": "富人在天堂服务器永生，穷人在现实世界苟活，一名黑客发现天堂的“永久幸福”是以活人梦境为燃料。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "意识上传",
      "虚拟现实",
      "阶级对立",
      "永生"
    ]
  },
  {
    "title": "神秘代码",
    "href": "detail/movie-1666.html",
    "cover": "16.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、悬疑、惊悚",
    "category": "纪录",
    "description": "一位语言学家发现一本古老日记中的神秘代码，竟精准预言了最近三次全球灾难。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "末日预言",
      "密码破译",
      "阴谋论",
      "时间循环"
    ]
  },
  {
    "title": "香蕉船乐团",
    "href": "detail/movie-1667.html",
    "cover": "17.jpg",
    "year": "2026",
    "region": "加拿大",
    "type": "剧集",
    "genre": "喜剧, 音乐, 家庭",
    "category": "科幻",
    "description": "一支由中年失业老爸、社恐女儿、退休爷爷和一只会弹吉他的鹦鹉组成的“香蕉船乐团”，意外在短视频平台爆红。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "亲子乐队",
      "中年危机",
      "翻红",
      "奇葩乐器"
    ]
  },
  {
    "title": "长大成人2",
    "href": "detail/movie-1668.html",
    "cover": "18.jpg",
    "year": "2013",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 家庭",
    "category": "历史",
    "description": "孩子们都进入青春期了，这群老伙计的烦恼也从尿布变成了社交媒体。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "老友重聚",
      "中年危机",
      "怀旧",
      "篮球"
    ]
  },
  {
    "title": "时空降魔录",
    "href": "detail/movie-1669.html",
    "cover": "19.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "剧集",
    "genre": "奇幻 / 动作 / 悬疑",
    "category": "动作",
    "description": "一个物理学女博士穿越到妖魔横行的平行世界，发现这里的“妖术”居然都能用量子力学解释。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "穿越时空",
      "降妖除魔",
      "团队冒险"
    ]
  },
  {
    "title": "理查德的东西",
    "href": "detail/movie-1670.html",
    "cover": "20.jpg",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚, 心理",
    "category": "青春",
    "description": "孤僻富翁去世，留给儿子的遗物是一个与自己一模一样的仿真人偶，且人偶会说话。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "遗产",
      "仿生人偶",
      "扭曲亲情",
      "密室"
    ]
  },
  {
    "title": "独身女人",
    "href": "detail/movie-1671.html",
    "cover": "21.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情",
    "category": "科幻",
    "description": "三十八岁的婚庆策划师在自己策划的婚礼上，意外收到了前男友的请柬，而新郎竟是她最好的闺蜜。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "女性",
      "都市",
      "独立",
      "抉择",
      "情感"
    ]
  },
  {
    "title": "小孩不笨2",
    "href": "detail/movie-1672.html",
    "cover": "22.jpg",
    "year": "2012",
    "region": "新加坡",
    "type": "电影",
    "genre": "喜剧 / 家庭 / 教育",
    "category": "家庭",
    "description": "全校最差的“EM3”班里，三个被当作“烂苹果”的孩子策划了一场绑架老师的闹剧。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "亲子关系",
      "应试教育",
      "反转温情"
    ]
  },
  {
    "title": "下一层",
    "href": "detail/movie-1673.html",
    "cover": "23.jpg",
    "year": "2008",
    "region": "加拿大/法国",
    "type": "电影",
    "genre": "短片，惊悚，寓言",
    "category": "动作",
    "description": "十一人在一张长桌上暴食，地板一层层断裂，他们便一层层往下掉，却没有人停止进食。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "贪婪",
      "无尽宴会",
      "坠落"
    ]
  },
  {
    "title": "脑髓地狱",
    "href": "detail/movie-1674.html",
    "cover": "24.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "科幻， 悬疑， 恐怖",
    "category": "科幻",
    "description": "男子在精神病院醒来，医生告诉他大脑中被植入了九十九个连环杀人犯的记忆，而他的真实身份是最后一个受害者。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "脑科学",
      "记忆移植",
      "疯人院",
      "精神污染",
      "认知崩溃"
    ]
  },
  {
    "title": "暴风雨的幻象",
    "href": "detail/movie-1675.html",
    "cover": "25.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "惊悚 / 奇幻",
    "category": "音乐",
    "description": "一场暴风雨过后，母亲发现女儿能用雨水“洗掉”别人的记忆，包括关于她父亲的一切。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "幻觉叙事",
      "母女羁绊",
      "暴风雨隐喻"
    ]
  },
  {
    "title": "外科医生马丁 第五季",
    "href": "detail/movie-1676.html",
    "cover": "26.jpg",
    "year": "2009",
    "region": "英国",
    "type": "剧集",
    "genre": "剧情, 喜剧, 医学",
    "category": "奇幻",
    "description": "嘴臭心善的马丁医生，这一季不仅要面对血晕，还要面对情敌的挑衅。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "医疗",
      "社交恐惧",
      "英式幽默",
      "乡村"
    ]
  },
  {
    "title": "透明的我们",
    "href": "detail/movie-1677.html",
    "cover": "27.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "奇幻, 青春",
    "category": "剧情",
    "description": "七个被霸凌的高中生突然获得了隐身能力，他们决定用这种力量让施暴者“消失”，却发现自己也在慢慢消失。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "校园霸凌",
      "隐身能力",
      "复仇与救赎",
      "心理惊悚"
    ]
  },
  {
    "title": "春心艳曲",
    "href": "detail/movie-1678.html",
    "cover": "28.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 情色, 文艺",
    "category": "青春",
    "description": "1940年代台湾艺旦间，一个被迫卖艺的少女与客人的女儿，在禁忌中谱写了一场无声的艳曲。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "古典",
      "欲望",
      "女性觉醒",
      "美学"
    ]
  },
  {
    "title": "无仁义之战",
    "href": "detail/movie-1679.html",
    "cover": "29.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "犯罪 / 剧情 / 动作 / 黑帮",
    "category": "剧情",
    "description": "昭和年间的广岛，退伍军人广能昌三被迫卷入黑帮斗争，发现这里没有仁义，只有背叛。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "极道",
      "暴力美学",
      "昭和背景",
      "权力斗争",
      "翻拍经典"
    ]
  },
  {
    "title": "巴比龙",
    "href": "detail/movie-1680.html",
    "cover": "30.jpg",
    "year": "2024",
    "region": "美国 / 塞尔维亚",
    "type": "电影",
    "genre": "犯罪, 剧情, 传记",
    "category": "科幻",
    "description": "被诬陷杀人的扒手，用十年时间从地狱监狱逃出生天。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "越狱",
      "冤案",
      "恶魔岛",
      "求生",
      "真实改编"
    ]
  },
  {
    "title": "第三天",
    "href": "detail/movie-1681.html",
    "cover": "31.jpg",
    "year": "2020",
    "region": "英国",
    "type": "剧集",
    "genre": "恐怖 / 民俗",
    "category": "都市",
    "description": "一个男人被困在与世隔绝的小岛，岛民告诉他：你必须在三天内完成仪式，否则会成为祭品。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "孤岛",
      "邪教",
      "三天仪式"
    ]
  },
  {
    "title": "霹雳先锋粤语",
    "href": "detail/movie-1682.html",
    "cover": "32.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "纪录",
    "description": "他是最狠的黑道打手，也是警队最深的卧底。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "警匪",
      "兄弟情",
      "粤语"
    ]
  },
  {
    "title": "循迹线索",
    "href": "detail/movie-1683.html",
    "cover": "33.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 犯罪",
    "category": "青春",
    "description": "时隔二十年，一桩已结案的连环杀人案再现，而当年负责的侧写师已经失忆。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "犯罪侧写",
      "连环杀人",
      "双时间线",
      "真实案件改编"
    ]
  },
  {
    "title": "欢乐集结号",
    "href": "detail/movie-1684.html",
    "cover": "34.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧，剧情",
    "category": "爱情",
    "description": "东北老工厂倒闭前最后一场联欢会，工人们决定把排练的破节目演成一场荒诞的“抢劫”直播。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "怀旧",
      "工厂",
      "工人",
      "黑色幽默"
    ]
  },
  {
    "title": "石来运转",
    "href": "detail/movie-1685.html",
    "cover": "35.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧 / 奇幻 / 家庭",
    "category": "科幻",
    "description": "老张捡到一颗能预测彩票号码的石头，却发现每次中奖都会克死一个亲戚。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "彩票",
      "许愿石",
      "小人物",
      "黑色幽默"
    ]
  },
  {
    "title": "少理老豆旅行团",
    "href": "detail/movie-1686.html",
    "cover": "36.jpg",
    "year": "2005",
    "region": "香港",
    "type": "电影",
    "genre": "家庭喜剧",
    "category": "剧情",
    "description": "七个被子女送去养老院的“老顽童”绑架了导游，开着巴士去年轻时打架的庙街，却发现庙街变成商场了。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "公路电影",
      "父子",
      "养老院",
      "笑中带泪",
      "港式幽默"
    ]
  },
  {
    "title": "葡萄牙狂想曲",
    "href": "detail/movie-1687.html",
    "cover": "37.jpg",
    "year": "2024",
    "region": "葡萄牙",
    "type": "电影",
    "genre": "音乐",
    "category": "爱情",
    "description": "一个失声的葡萄牙法朵歌者，跟随一本旧日记的指引，在里斯本的石阶与海风里找回自己的声音。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "法朵",
      "音乐人生",
      "诗意影像",
      "文艺",
      "寻根"
    ]
  },
  {
    "title": "龙潭虎穴杀人王",
    "href": "detail/movie-1688.html",
    "cover": "38.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "悬疑",
    "description": "警方卧底潜入黑帮，却发现黑帮老大正是自己失散多年的亲生父亲。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "黑帮",
      "卧底",
      "硬汉"
    ]
  },
  {
    "title": "马桶妖怪2",
    "href": "detail/movie-1689.html",
    "cover": "39.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖，喜剧，奇幻",
    "category": "家庭",
    "description": "上一集被冲走的怪物们从城市下水道反扑，这次它们学会了用社交媒体召唤更多同类。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "邪典回归",
      "卫生间惊魂",
      "黑色幽默",
      "变异生物"
    ]
  },
  {
    "title": "大骗子",
    "href": "detail/movie-1690.html",
    "cover": "40.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "genre": "犯罪 / 悬疑 / 喜剧",
    "category": "科幻",
    "description": "顶级诈骗犯假装反诈专家混入警队，结果所有同事都在追捕他本人。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "诈骗犯",
      "以恶制恶",
      "双面人生"
    ]
  },
  {
    "title": "全球暖化大骗局",
    "href": "detail/movie-1691.html",
    "cover": "41.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "惊悚 / 悬疑 / 剧情",
    "category": "青春",
    "description": "一名落魄科学家发现全球暖化竟是能源巨头炮制的世纪谎言，而真相触动了全人类的利益。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "生态阴谋论",
      "记者调查",
      "黑色幽默"
    ]
  },
  {
    "title": "绝望主妇第四季",
    "href": "detail/movie-1692.html",
    "cover": "42.jpg",
    "year": "2007",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情，喜剧，悬疑",
    "category": "历史",
    "description": "一场龙卷风袭击紫藤巷，掀翻了所有主妇的屋顶，也掀开了她们深埋多年的终极秘密。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "suburban intrigue",
      "女性群像",
      "黑色幽默"
    ]
  },
  {
    "title": "放映师",
    "href": "detail/movie-1693.html",
    "cover": "43.jpg",
    "year": "2025",
    "region": "意大利/法国",
    "type": "电影",
    "genre": "剧情, 历史, 爱情",
    "category": "奇幻",
    "description": "二战末期，一位年迈的犹太放映师躲在电影院里，用放映机编织幻象，拯救了数十条生命。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "二战",
      "电影院",
      "胶片",
      "小人物",
      "救赎"
    ]
  },
  {
    "title": "魔山",
    "href": "detail/movie-1694.html",
    "cover": "44.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "genre": "剧情/悬疑",
    "category": "家庭",
    "description": "青年汉斯来到瑞士山间疗养院探望表兄，原定三周的行程却整整困了七年。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "文学改编",
      "疗养院",
      "哲学",
      "托马斯·曼"
    ]
  },
  {
    "title": "淘宝女孩的好评爱情",
    "href": "detail/movie-1695.html",
    "cover": "45.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧/爱情/励志",
    "category": "家庭",
    "description": "一个率真的淘宝女店主给了一个买家差评，没想到对方竟是个有千万粉丝的毒舌美食博主，一场全网围观的“商战”变甜宠。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "电商",
      "网红",
      "直播带货",
      "甜宠",
      "创业"
    ]
  },
  {
    "title": "公路人质事件",
    "href": "detail/movie-1696.html",
    "cover": "46.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 犯罪 / 剧情",
    "category": "动作",
    "description": "一个疲惫的推销员，一个神秘的女搭车客，一段通往死亡的末路狂花式逃亡。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "公路片",
      "密室",
      "心理博弈",
      "反转",
      "道德困境"
    ]
  },
  {
    "title": "皇上保重粤语",
    "href": "detail/movie-1697.html",
    "cover": "47.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "古装, 医疗",
    "category": "励志",
    "description": "太医院最年轻的御医用现代医学知识挑战皇权，他开出的每一张药方，都是一步杀招。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "宫廷",
      "中医",
      "权谋",
      "粤语"
    ]
  },
  {
    "title": "追捕渣滓洞刽子手",
    "href": "detail/movie-1698.html",
    "cover": "48.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "悬疑/历史/谍战",
    "category": "音乐",
    "description": "1950年重庆，两名幸存的革命者伪装成夫妻，追捕当年在渣滓洞行刑的刽子手“白无常”。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "建国初期",
      "重庆剿匪",
      "真实事件改编",
      "双面间谍",
      "复仇叙事"
    ]
  },
  {
    "title": "蜘蛛侠：平行宇宙2",
    "href": "detail/movie-1699.html",
    "cover": "49.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "动作 / 科幻 / 动画",
    "category": "动作",
    "description": "迈尔斯穿越了100个宇宙，却发现自己才是那个不该存在的“蜘蛛侠”。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "多元宇宙",
      "蜘蛛侠集结",
      "视觉革命",
      "成长"
    ]
  },
  {
    "title": "怪物战士男孩",
    "href": "detail/movie-1700.html",
    "cover": "50.jpg",
    "year": "2022",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻、热血、少年",
    "category": "喜剧",
    "description": "害羞的高中男孩体内寄宿着毁灭世界的怪物，他却只想用这股力量保护日常。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "怪兽",
      "特摄致敬",
      "校园",
      "变身",
      "羁绊"
    ]
  },
  {
    "title": "侦探2：回归",
    "href": "detail/movie-1701.html",
    "cover": "51.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "genre": "喜剧, 犯罪",
    "category": "喜剧",
    "description": "前警察与漫画店老板再次联手，这次要破解的是一起发生在财经大楼里的完美密室案。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "侦探搭档",
      "密室杀人",
      "搞笑推理",
      "商业鬼才"
    ]
  },
  {
    "title": "贝尔女巫萦绕",
    "href": "detail/movie-1702.html",
    "cover": "52.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 超自然",
    "category": "音乐",
    "description": "美国历史上唯一官方承认的“鬼杀人”事件背后，藏着一个被活埋女巫的百年复仇。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "真实改编",
      "驱魔",
      "田纳西传说",
      "诅咒"
    ]
  },
  {
    "title": "亨利·休格的神奇故事",
    "href": "detail/movie-1703.html",
    "cover": "53.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻、冒险",
    "category": "奇幻",
    "description": "一个有钱又无聊的富翁学会了“不用眼睛就能看见一切”的瑜伽术，然后用这项神技只做了一件事：洗劫赌场。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "韦斯·安德森",
      "罗尔德·达尔",
      "冥想",
      "透视眼"
    ]
  },
  {
    "title": "锦绣年华",
    "href": "detail/movie-1704.html",
    "cover": "54.jpg",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "genre": "年代 / 家庭 / 女性",
    "category": "爱情",
    "description": "苏州绣庄三代女人，从文革末期到新世纪，用一根绣针撑起了家族，也困住了自己。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "苏绣",
      "改革开放",
      "三代女性"
    ]
  },
  {
    "title": "家庭作业",
    "href": "detail/movie-1705.html",
    "cover": "55.jpg",
    "year": "2024",
    "region": "美国 / 英国",
    "type": "剧集",
    "genre": "喜剧, 剧情, 家庭",
    "category": "剧情",
    "description": "一位失业的父亲不得不替三个孩子完成学校的奇葩作业，结果比上班累一万倍。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "亲子关系",
      "笑中带泪",
      "代际冲突",
      "成长治愈"
    ]
  },
  {
    "title": "世纪大怪兽",
    "href": "detail/movie-1706.html",
    "cover": "56.jpg",
    "year": "2012",
    "region": "日本",
    "type": "电影",
    "genre": "科幻，灾难",
    "category": "喜剧",
    "description": "太平洋海底钻探工程唤醒了一只体长三百米的远古生物，人类所有的武器在它面前都像挠痒痒。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "怪兽",
      "环保",
      "巨型生物"
    ]
  },
  {
    "title": "信号2016",
    "href": "detail/movie-1707.html",
    "cover": "57.jpg",
    "year": "2016",
    "region": "韩国",
    "type": "电视剧",
    "genre": "科幻 / 悬疑 / 犯罪",
    "category": "都市",
    "description": "一部老式对讲机连接了身处2015年的犯罪侧写师和身处1989年的刑警，联手侦破悬案。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "对讲机",
      "时空穿越",
      "真实案件改编",
      "神剧"
    ]
  },
  {
    "title": "他们称之为的爱",
    "href": "detail/movie-1708.html",
    "cover": "58.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 剧情 / 文艺",
    "category": "家庭",
    "description": "一对分手的编剧情侣，决定用一种极度理性、签署合同的方式，来“完美”地经营他们余下的爱情。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "情感纠葛",
      "巴黎",
      "存在主义",
      "非典型关系"
    ]
  },
  {
    "title": "英湘",
    "href": "detail/movie-1709.html",
    "cover": "59.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "青春",
    "description": "湘西村落女子英湘离世三年后突然“还魂”归家，身上带着只有丈夫才见过的胎记，是僵尸还是冤魂？",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "湘西",
      "民俗",
      "恐怖",
      "还魂",
      "巫术"
    ]
  },
  {
    "title": "歌王艳史",
    "href": "detail/movie-1710.html",
    "cover": "60.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情, 歌舞, 传记",
    "category": "动作",
    "description": "50年代爵士歌王表面风光无限，私底下却被白人经纪人控制、被黑帮追杀，恋人是同性。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "歌手",
      "丑闻",
      "黑胶时代",
      "传奇"
    ]
  },
  {
    "title": "一课一练",
    "href": "detail/movie-1711.html",
    "cover": "61.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动画",
    "genre": "奇幻，校园，动作",
    "category": "历史",
    "description": "在这个世界，所有考试都必须在“考试迷宫”里实战进行，而男主的能力是“每节课后只能复述一个知识点”。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "考试",
      "作弊",
      "魔法",
      "轻小说改",
      "搞笑"
    ]
  },
  {
    "title": "蝴蝶效应2国语",
    "href": "detail/movie-1712.html",
    "cover": "62.jpg",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "genre": "科幻，惊悚，剧情",
    "category": "励志",
    "description": "一场车祸让他能穿越照片回到过去，但每一次修正，都让现实变得更加扭曲恐怖。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "时空穿越",
      "改变过去",
      "悲剧",
      "宿命"
    ]
  },
  {
    "title": "狩猎者",
    "href": "detail/movie-1713.html",
    "cover": "63.jpg",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "category": "喜剧",
    "description": "在人类被AI击败的废土世界，最后一个靠发布狩猎视频为生的网红猎人，发现自己成了终极猎物。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "末日废土",
      "反英雄",
      "冷兵器美学",
      "人工智能",
      "困兽之斗"
    ]
  },
  {
    "title": "百战天龙第二季",
    "href": "detail/movie-1714.html",
    "cover": "64.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "动作, 冒险, 悬疑",
    "category": "励志",
    "description": "前特工麦克斯不再接受政府指派，但他发现自己收养的女儿拥有比他更强大的“即兴创造”天赋。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "特工",
      "平民英雄",
      "物理知识",
      "拆弹",
      "团队"
    ]
  },
  {
    "title": "拦截密码战",
    "href": "detail/movie-1715.html",
    "cover": "65.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "历史 / 悬疑 / 战争",
    "category": "动作",
    "description": "二战期间，一名数学天才被秘密征召到布莱切利庄园，却发现她要破译的不只是德军密码，还有庄园里的一桩连环谋杀案。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "二战",
      "密码破译",
      "图灵",
      "谍战"
    ]
  },
  {
    "title": "识骨寻踪第九季",
    "href": "detail/movie-1716.html",
    "cover": "66.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪",
    "category": "爱情",
    "description": "实验室收到一堆来自13个不同死者的混杂交错骨头，拼出后竟指向一名已故二十年的FBI探员。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "法医",
      "骨头鉴定",
      "连环杀手",
      "实验室"
    ]
  },
  {
    "title": "丑闻风暴",
    "href": "detail/movie-1717.html",
    "cover": "67.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚 / 政治",
    "category": "家庭",
    "description": "王牌主播为追查真相，却发现自己正是风暴的中心。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "媒体黑幕",
      "权力斗争",
      "反转不断"
    ]
  },
  {
    "title": "海边别墅",
    "href": "detail/movie-1718.html",
    "cover": "68.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "音乐",
    "description": "父亲去世留下一栋海边别墅，兄妹四人回来清理遗物，却发现彼此比陌生人更陌生。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "遗产",
      "家庭撕扯",
      "文艺"
    ]
  },
  {
    "title": "灵镜传奇",
    "href": "detail/movie-1719.html",
    "cover": "69.jpg",
    "year": "2024",
    "region": "中国香港/中国大陆",
    "type": "剧集",
    "genre": "奇幻古装",
    "category": "音乐",
    "description": "武林盟主与魔教教主决战时被吸入一面古镜，从此，每当月圆之夜，二人的灵魂就会互换身体，各自面对错位的江湖。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "双面人生",
      "灵魂互换",
      "武侠",
      "宿命"
    ]
  },
  {
    "title": "猫咪马汀",
    "href": "detail/movie-1720.html",
    "cover": "70.jpg",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻, 家庭, 冒险",
    "category": "剧情",
    "description": "社恐程序员一觉醒来变成了一只橘猫，只有找回主人的微笑才能变回人形。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "变身",
      "猫咪视角",
      "治愈",
      "解谜"
    ]
  },
  {
    "title": "2020香港小姐竞选",
    "href": "detail/movie-1721.html",
    "cover": "71.jpg",
    "year": "2020",
    "region": "中国香港",
    "type": "综艺/特典",
    "genre": "选美真人秀",
    "category": "纪录",
    "description": "疫情之下，香港小姐竞选首次从电视城走向户外，十位佳丽在逆境中争夺后冠，也争夺命运的转机。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "选美",
      "香港",
      "励志",
      "幕后",
      "新冠"
    ]
  },
  {
    "title": "那些名字那些年",
    "href": "detail/movie-1722.html",
    "cover": "72.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "剧情 / 历史 / 家庭",
    "category": "励志",
    "description": "一张半个世纪前的毕业照，牵扯出三个家庭横跨三代人的恩怨与和解。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "乡土",
      "时代变迁",
      "群像",
      "催泪"
    ]
  },
  {
    "title": "恐龙战警",
    "href": "detail/movie-1723.html",
    "cover": "73.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "动作、科幻、喜剧",
    "category": "都市",
    "description": "基因复活后的霸王龙成了重案组搭档，唯一的麻烦是它总想吞掉证人。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "克隆恐龙",
      "警匪对抗",
      "B级片",
      "暴力美学"
    ]
  },
  {
    "title": "罗罗大冒险",
    "href": "detail/movie-1724.html",
    "cover": "74.jpg",
    "year": "2025",
    "region": "美国",
    "type": "动画电影",
    "genre": "喜剧 / 冒险 / 奇幻",
    "category": "纪录",
    "description": "在人类灭绝后的世界，最后一个维修机器人为了寻找“阳光”，踏入了充满辐射的废土。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "机器人",
      "想象力",
      "治愈系",
      "皮克斯风格"
    ]
  },
  {
    "title": "物语系列外传季怪物季",
    "href": "detail/movie-1725.html",
    "cover": "75.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "genre": "奇幻、怪谈 科幻、惊悚",
    "category": "悬疑",
    "description": "当所有主角退场，那些被遗忘的怪异们开始讲述：每个怪物背后，都曾是一个被伤害的人。 怪异杀手退役后开了家心理咨询室，来的客人全是怪异，而且它们想谈的是“如何与人类和平分手”。 基…",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "群像",
      "怪异",
      "话唠",
      "西尾维新 恐龙",
      "平行世界"
    ]
  },
  {
    "title": "我的大叔",
    "href": "detail/movie-1726.html",
    "cover": "76.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "genre": "剧情 / 生活",
    "category": "剧情",
    "description": "四十岁的中年男人被公司裁员，二十岁的邻居女孩每天往他门缝塞一张加油纸条。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "邻里",
      "中年危机",
      "治愈",
      "忘年交",
      "职场"
    ]
  },
  {
    "title": "东京无国籍少女",
    "href": "detail/movie-1727.html",
    "cover": "77.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 悬疑, 文艺",
    "category": "励志",
    "description": "生于日本、长于日本的华裔少女，没有户口、没有国籍，在东京的阴影里寻找“我是谁”。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "移民二代",
      "身份认同",
      "东京",
      "孤独"
    ]
  },
  {
    "title": "世界爆炸之夜",
    "href": "detail/movie-1728.html",
    "cover": "78.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 爱情, 灾难",
    "category": "剧情",
    "description": "科学家宣布六小时后地球将因未知原因爆炸，六个普通人的夜晚由此展开。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "末日",
      "黑色幽默",
      "爱情喜剧",
      "群像",
      "荒诞"
    ]
  },
  {
    "title": "天钩",
    "href": "detail/movie-1729.html",
    "cover": "79.jpg",
    "year": "1996",
    "region": "美国",
    "type": "电影",
    "genre": "奇幻， 喜剧， 家庭",
    "category": "科幻",
    "description": "一个坐轮椅的黑人男孩捡到了天钩贾巴尔的“天钩”，从而能够投进任何不可能的球。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "篮球",
      "梦想",
      "黑人文化",
      "魔幻现实"
    ]
  },
  {
    "title": "圣诞老人快乐再疯狂第二季",
    "href": "detail/movie-1730.html",
    "cover": "80.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电视剧",
    "genre": "喜剧，奇幻，家庭",
    "category": "音乐",
    "description": "上一季结尾，凡人斯科特正式接任圣诞老人，这一季他要面对的不仅是送礼，还有来自董事会和元宇宙的双重暴击。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "圣诞老人",
      "职场喜剧",
      "中年危机",
      "神话解构"
    ]
  },
  {
    "title": "铁塔 武藏野线",
    "href": "detail/movie-1731.html",
    "cover": "81.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "剧情、青春",
    "category": "纪录",
    "description": "东京到武藏野的慢车线上，五个陌生人因为天天同乘，成了彼此生命的锚点。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "铁道",
      "成长",
      "日常治愈",
      "群像"
    ]
  },
  {
    "title": "爱犬人士",
    "href": "detail/movie-1732.html",
    "cover": "82.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 黑色幽默",
    "category": "爱情",
    "description": "一个恨狗的小区保安和一群爱狗业主之间的战争，因一条柯基的失踪演变成荒诞血案。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "宠物",
      "都市人",
      "荒诞",
      "报复",
      "黑色喜剧"
    ]
  },
  {
    "title": "佩尔德利",
    "href": "detail/movie-1733.html",
    "cover": "83.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "剧情、历史、悬疑",
    "category": "奇幻",
    "description": "1348年黑死病肆虐英格兰，一个叫佩尔德利的偏远村庄里，村民发现“瘟疫”其实是从古墓挖出的诅咒。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "中世纪",
      "村庄",
      "羊皮书",
      "宗教审判"
    ]
  },
  {
    "title": "旺角的天空",
    "href": "detail/movie-1734.html",
    "cover": "84.jpg",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "genre": "动作, 剧情, 犯罪",
    "category": "都市",
    "description": "旺角黑帮老大的贴身马仔，在老大被暗杀后，被迫继承整个地盘，却发现凶手是最好的兄弟。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "古惑仔",
      "兄弟情义",
      "街头火拼",
      "江湖落幕",
      "怀旧港风"
    ]
  },
  {
    "title": "魔法禁书目录第一季",
    "href": "detail/movie-1735.html",
    "cover": "85.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "动画，奇幻，科幻",
    "category": "历史",
    "description": "在科学与魔法交汇的世界，一个无能力者少年与被封印在修道服里的少女相遇了。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "异能",
      "学园都市",
      "战斗",
      "热血"
    ]
  },
  {
    "title": "十一人贼军",
    "href": "detail/movie-1736.html",
    "cover": "86.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 犯罪 / 喜剧",
    "category": "古装",
    "description": "十一人盗贼团潜入戒备森严的加密货币金库，却发现里面早就被另一伙人洗劫一空。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "盗贼",
      "高智商犯罪",
      "团队作战",
      "反转"
    ]
  },
  {
    "title": "他们回来了",
    "href": "detail/movie-1737.html",
    "cover": "87.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "category": "动作",
    "description": "七位牺牲的宇航员突然完好无损地回到家中，但每个人都藏着不可告人的秘密。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "克隆",
      "伦理",
      "悬疑"
    ]
  },
  {
    "title": "12月7日",
    "href": "detail/movie-1738.html",
    "cover": "88.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 历史 / 悬疑",
    "category": "奇幻",
    "description": "1941年12月7日，七名被困在防空洞里的不同身份者发现，每当洞外传来爆炸声，他们就会回到当天早晨重新开始。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "时间循环",
      "抗战",
      "密室",
      "历史抉择"
    ]
  },
  {
    "title": "300勇士：帝国崛起",
    "href": "detail/movie-1739.html",
    "cover": "89.jpg",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "genre": "动作/历史/战争",
    "category": "历史",
    "description": "温泉关战役之后，希腊海军统帅地米斯托克利率300艘战舰对阵波斯百万大军。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "斯巴达",
      "海战",
      "史诗",
      "慢镜头",
      "肌肉"
    ]
  },
  {
    "title": "蛮国恩仇记",
    "href": "detail/movie-1740.html",
    "cover": "90.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "西部冒险",
    "category": "家庭",
    "description": "民国西北荒漠，为报灭门之仇，书生拿起枪成为悍匪，却在追杀中发现仇人竟是自己亲大哥。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "复仇",
      "荒漠",
      "军阀",
      "枪战"
    ]
  },
  {
    "title": "决不低头",
    "href": "detail/movie-1741.html",
    "cover": "91.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 犯罪 / 惊悚",
    "category": "古装",
    "description": "前特种兵的女儿被绑架，警察毫无头绪，他决定让绑匪亲口求着进监狱。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "硬汉",
      "私刑正义",
      "地下室囚禁",
      "复仇",
      "暴力美学"
    ]
  },
  {
    "title": "热血街区电影版：极恶王",
    "href": "detail/movie-1742.html",
    "cover": "92.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "genre": "动作 / 热血 / 青春",
    "category": "家庭",
    "description": "为了替兄弟报仇，一个名不见经传的小混混挑战五所高校联合组成的最强恶王联盟。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "不良少年",
      "街头群架",
      "兄弟结拜",
      "高校势力战",
      "日式暴力美学"
    ]
  },
  {
    "title": "持摄影机的人",
    "href": "detail/movie-1743.html",
    "cover": "93.jpg",
    "year": "1929",
    "region": "苏联",
    "type": "电影",
    "genre": "纪录片/先锋实验",
    "category": "历史",
    "description": "一个摄影师扛着摄影机穿越苏联城市，镜头里的一切都在捕捉摄影机本身的“眼睛”。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "城市交响曲",
      "蒙太奇",
      "自我反射",
      "苏联电影眼",
      "无叙事"
    ]
  },
  {
    "title": "情定三清山",
    "href": "detail/movie-1744.html",
    "cover": "94.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "genre": "爱情 / 冒险 / 风光",
    "category": "爱情",
    "description": "女强人意外魂穿到宋代，与道观里一个洒扫小道士在三清山的云海中寻找回家之路。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "道教",
      "登山",
      "疗愈",
      "救赎"
    ]
  },
  {
    "title": "最强阴阳师的异世界转生记",
    "href": "detail/movie-1745.html",
    "cover": "95.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "动画 / 奇幻 / 战斗",
    "category": "音乐",
    "description": "史上最强阴阳师死后转生到魔法异世界，却发现这里的魔法体系是他当年随手发明的劣化版。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "异世界",
      "转生",
      "阴阳道",
      "龙傲天",
      "反套路"
    ]
  },
  {
    "title": "法拉利",
    "href": "detail/movie-1746.html",
    "cover": "96.jpg",
    "year": "2023",
    "region": "美国 / 意大利",
    "type": "电影",
    "genre": "剧情 / 传记 / 运动",
    "category": "青春",
    "description": "1957年，恩佐·法拉利濒临破产，他把所有赌注压在了一场千里耐力赛上。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "赛车",
      "法拉利",
      "真实改编",
      "危机"
    ]
  },
  {
    "title": "看海的日子",
    "href": "detail/movie-1747.html",
    "cover": "97.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情、家庭、治愈",
    "category": "励志",
    "description": "患上阿尔茨海默症的母亲只记得一件事：要去看一片四十年前的海。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "海边小镇",
      "老年痴呆",
      "母子和解",
      "人生最后旅程"
    ]
  },
  {
    "title": "房车奇遇",
    "href": "detail/movie-1748.html",
    "cover": "98.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑、公路、黑色幽默",
    "category": "爱情",
    "description": "过气主播改造房车环游中国，直播时意外挖出前房车主的白骨。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "房车",
      "直播",
      "白骨",
      "网络暴力"
    ]
  },
  {
    "title": "風情萬種野玫瑰",
    "href": "detail/movie-1749.html",
    "cover": "99.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情、情欲、文艺",
    "category": "历史",
    "description": "女儿继承了母亲的风尘酒店，却爱上了母亲当年的情人，上演一场错位的情欲轮回。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "酒店",
      "母女",
      "替身",
      "虐恋",
      "女性"
    ]
  },
  {
    "title": "朤月东方—中秋奇妙夜",
    "href": "detail/movie-1750.html",
    "cover": "100.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺 / 晚会",
    "genre": "歌舞 / 文化 / 奇幻",
    "category": "音乐",
    "description": "一场穿越古今的沉浸式月宫盛会，科技让李白与嫦娥在虚拟天街对诗。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "中秋",
      "国风",
      "虚拟现实",
      "非遗",
      "沉浸式"
    ]
  },
  {
    "title": "失衡生活",
    "href": "detail/movie-1751.html",
    "cover": "101.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情",
    "category": "励志",
    "description": "一个患有严重平衡感失调的上班族，在东京的早高峰地铁里，开始了他人生的第一次失控。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "社会",
      "焦虑",
      "心理",
      "都市病"
    ]
  },
  {
    "title": "梦幻书院第六季",
    "href": "detail/movie-1752.html",
    "cover": "102.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "动画",
    "genre": "动画，搞笑，日常",
    "category": "励志",
    "description": "大结局！梦幻书院的师生们迎来终极考核，输掉的书院将被拆除，建成商业街。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "萌系",
      "校园",
      "国学",
      "泡面番",
      "治愈"
    ]
  },
  {
    "title": "中世纪摩登",
    "href": "detail/movie-1753.html",
    "cover": "103.jpg",
    "year": "2021",
    "region": "英国",
    "type": "剧集",
    "genre": "喜剧 / 奇幻 / 古装",
    "category": "剧情",
    "description": "一群现代伦敦年轻人被雷劈中后，集体穿越到中世纪，试图用外卖APP思维和社媒运营术称霸古代。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "穿越",
      "中世纪",
      "当代价值观",
      "黑色幽默",
      "政治正确"
    ]
  },
  {
    "title": "演员",
    "href": "detail/movie-1754.html",
    "cover": "104.jpg",
    "year": "2025",
    "region": "法国/意大利",
    "type": "电影",
    "genre": "剧情/文艺",
    "category": "励志",
    "description": "一个在剧场饰演“失败者”的演员，在现实生活中竟然真的是一名隐藏身份的巨富继承人。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "戏中戏",
      "存在主义",
      "舞台剧",
      "双重人生"
    ]
  },
  {
    "title": "西班牙女佣",
    "href": "detail/movie-1755.html",
    "cover": "105.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "剧情、悬疑",
    "category": "悬疑",
    "description": "年轻女佣进入亿万富翁的悬崖别墅工作，发现上一任女佣失踪的原因，藏在每一条打扫规则里。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "阶级",
      "豪宅",
      "秘密",
      "反转",
      "女性"
    ]
  },
  {
    "title": "手可摘星辰",
    "href": "detail/movie-1756.html",
    "cover": "106.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "奇幻 / 爱情",
    "category": "青春",
    "description": "她向许愿池扔了一枚硬币说“想和他在一起”，第二天醒来发现城市里所有人都消失了，只剩他和她。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "许愿币",
      "时间循环",
      "暗恋成真"
    ]
  },
  {
    "title": "波希米亚音乐巨匠",
    "href": "detail/movie-1757.html",
    "cover": "107.jpg",
    "year": "2025",
    "region": "捷克",
    "type": "电影",
    "genre": "音乐 / 传记 / 剧情",
    "category": "悬疑",
    "description": "捷克音乐家斯美塔那在完全耳聋后，凭借“颅骨记忆”创作出《我的祖国》。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "斯美塔那",
      "捷克音乐",
      "耳聋",
      "民族乐派",
      "创作苦难"
    ]
  },
  {
    "title": "一袋大米",
    "href": "detail/movie-1758.html",
    "cover": "108.jpg",
    "year": "2023",
    "region": "中国内地",
    "type": "电影",
    "genre": "剧情 / 历史",
    "category": "青春",
    "description": "1960年冬天，一个儿子背着二十斤大米徒步三百里去看父亲，却发现父亲正在挨家挨户收“余粮”。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "60年代",
      "饥荒",
      "黑色荒诞",
      "父子"
    ]
  },
  {
    "title": "直立象传说",
    "href": "detail/movie-1759.html",
    "cover": "109.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "奇幻 / 冒险 / 家庭",
    "category": "科幻",
    "description": "一头被族群落抛弃的幼年猛犸象，和一个小女孩一起踏上寻找“直立行走”秘密的旅程。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "史前",
      "成长",
      "勇气",
      "亲情"
    ]
  },
  {
    "title": "查科",
    "href": "detail/movie-1760.html",
    "cover": "110.jpg",
    "year": "2023",
    "region": "阿根廷",
    "type": "电影",
    "genre": "战争, 历史, 剧情",
    "category": "都市",
    "description": "1932年，一队玻利维亚士兵在干旱的查科丛林里迷路，他们不知道自己是去打仗还是去送死。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "玻利维亚",
      "大查科战争",
      "黑白",
      "荒诞"
    ]
  },
  {
    "title": "马克·卡文迪什：永不停歇",
    "href": "detail/movie-1761.html",
    "cover": "111.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "genre": "纪录片，传记",
    "category": "悬疑",
    "description": "纪录片跟拍传奇自行车手马克·卡文迪什，看他如何在患上Epstein-Barr病毒后被所有人放弃，又怎样重返环法并打破历史纪录。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "自行车",
      "体育精神",
      "逆境重生",
      "励志"
    ]
  },
  {
    "title": "爱尔玛的情与欲",
    "href": "detail/movie-1762.html",
    "cover": "112.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "剧情文艺",
    "category": "励志",
    "description": "1920年代巴黎，富家少妇爱尔玛在丈夫、情人与女画家之间游走，用身体寻找自我的边界。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "女性觉醒",
      "情欲探索",
      "禁忌之恋",
      "年代戏",
      "心理"
    ]
  },
  {
    "title": "奇妙的爱情",
    "href": "detail/movie-1763.html",
    "cover": "113.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "category": "动作",
    "description": "一个花心渣男和一个保守宅女意外交换身体，被迫帮对方谈恋爱。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "交换身体",
      "搞笑",
      "奇幻",
      "欢喜冤家"
    ]
  },
  {
    "title": "琼宫春怨",
    "href": "detail/movie-1764.html",
    "cover": "114.jpg",
    "year": "2029",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "古装、宫斗、悬疑",
    "category": "喜剧",
    "description": "宫女被选中成为冷宫废后的替身，却发现废后早就逃出了琼宫，而真正想杀她的是皇帝。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "复仇",
      "替身文学",
      "女性群像",
      "权谋"
    ]
  },
  {
    "title": "是谁在与民主为敌",
    "href": "detail/movie-1765.html",
    "cover": "115.jpg",
    "year": "2024",
    "region": "美国 / 英国",
    "type": "纪录片",
    "genre": "纪录, 政治, 惊悚",
    "category": "爱情",
    "description": "一名记者发现，全球多场骚乱的背后，都指向同一款风靡世界的匿名社交软件及其神秘创始人。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "社交媒体",
      "算法",
      "网络战",
      "操控"
    ]
  },
  {
    "title": "亲爱的总统夫人",
    "href": "detail/movie-1766.html",
    "cover": "116.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "政治惊悚",
    "category": "动作",
    "description": "一场刺杀让总统昏迷，他的夫人被迫以铁腕手段接管国家，却揭开了丈夫背后更深的秘密。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "白宫",
      "替身",
      "权力游戏",
      "第一夫人"
    ]
  },
  {
    "title": "新人歌手曹政奭",
    "href": "detail/movie-1767.html",
    "cover": "117.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "genre": "音乐 / 剧情 / 喜剧",
    "category": "音乐",
    "description": "韩国顶级演员曹政奭(以本人身份出演)隐瞒身份，以40岁高龄参加新人歌手选秀，却碰上了一个魔鬼导师。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "出道",
      "中年危机",
      "歌手",
      "真实身份",
      "追梦"
    ]
  },
  {
    "title": "驱魔大师",
    "href": "detail/movie-1768.html",
    "cover": "118.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "恐怖 / 动作",
    "category": "青春",
    "description": "号称99%成功率的驱魔大师直播驱魔现场翻车，恶鬼附身后才发现这位大师本身就是更凶的厉鬼。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "伪纪录片",
      "灵媒",
      "附身",
      "暴力美学"
    ]
  },
  {
    "title": "爱的位置 哈雷传说",
    "href": "detail/movie-1769.html",
    "cover": "119.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情, 公路, 剧情",
    "category": "爱情",
    "description": "一辆旧哈雷机车串联起三个年代的爱情故事，而钥匙就藏在台湾环岛公路的某个灯塔下。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "机车",
      "环岛",
      "疗愈",
      "回忆",
      "自由"
    ]
  },
  {
    "title": "奇迹2021",
    "href": "detail/movie-1770.html",
    "cover": "120.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 家庭, 励志",
    "category": "都市",
    "description": "一个只想赚钱给妹妹治病的普通打工仔，在深圳的华强北，用一堆废旧手机创造出改变命运的“奇迹”。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "小人物",
      "创业",
      "兄妹",
      "深圳",
      "温情"
    ]
  },
  {
    "title": "新版佐罗",
    "href": "detail/movie-1771.html",
    "cover": "121.jpg",
    "year": "2026",
    "region": "西班牙 / 美国",
    "type": "电影",
    "genre": "动作, 冒险",
    "category": "古装",
    "description": "老佐罗死后，他的女儿戴上眼罩，但她必须对抗的不仅是敌人，还有“佐罗”这个神话本身。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "佐罗",
      "女版",
      "传承",
      "复仇"
    ]
  },
  {
    "title": "桃色追捕令",
    "href": "detail/movie-1772.html",
    "cover": "122.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "悬疑",
    "category": "动作",
    "description": "警方追查连环杀人案，发现所有死者都和同一位情色小说家有过关系。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "情色",
      "犯罪",
      "反转"
    ]
  },
  {
    "title": "坏人第一季",
    "href": "detail/movie-1773.html",
    "cover": "123.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "genre": "犯罪、剧情、黑色幽默",
    "category": "古装",
    "description": "一个笨拙的劫匪头子、一个马屁精跟班和一个反社会人格女黑客，他们每次完美犯罪都会被莫名其妙地搞砸。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "反派主角",
      "劫匪",
      "黑色电影",
      "命运巧合"
    ]
  },
  {
    "title": "蓝调计程车",
    "href": "detail/movie-1774.html",
    "cover": "124.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "剧情/音乐",
    "category": "动作",
    "description": "一个患失眠症的计程车司机，每晚载着不同的乘客，用蓝调吉他治愈他们也疗愈自己。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "深夜",
      "计程车",
      "蓝调",
      "单元剧"
    ]
  },
  {
    "title": "淑女宠爱",
    "href": "detail/movie-1775.html",
    "cover": "125.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "genre": "爱情，喜剧，奇幻",
    "category": "历史",
    "description": "全国最优雅的财阀千金和街头最野蛮的女混混意外交换身体，不得不扮演彼此的人生。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "契约恋爱",
      "互换身体",
      "财阀千金",
      "野蛮女友"
    ]
  },
  {
    "title": "唯一的家庭",
    "href": "detail/movie-1776.html",
    "cover": "126.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "家庭 / 剧情",
    "category": "悬疑",
    "description": "一个专门接收“难养”儿童的寄养家庭，在经营了40年后即将关闭，最后七位孩子和年迈养父母共度最后一个夏天。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "社会福利",
      "寄养",
      "非血缘",
      "成长",
      "治愈"
    ]
  },
  {
    "title": "牛头不对马嘴",
    "href": "detail/movie-1777.html",
    "cover": "127.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "悬疑",
    "description": "城市毒舌律师和乡村养牛大爷意外灵魂互换，两人必须用对方身体打官司。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "错位",
      "灵魂互换",
      "乡村",
      "城市",
      "方言"
    ]
  },
  {
    "title": "爱情上上签",
    "href": "detail/movie-1778.html",
    "cover": "128.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "爱情 / 喜剧 / 奇幻",
    "category": "纪录",
    "description": "平凡女孩抽中月老“上上签”，系统却要求她必须在30天内让100个负心汉流泪。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "签文系统",
      "盲盒恋爱",
      "玄学"
    ]
  },
  {
    "title": "伦敦夜生活",
    "href": "detail/movie-1779.html",
    "cover": "129.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "genre": "剧情 / 爱情",
    "category": "纪录",
    "description": "两个在伦敦夜店里迷失的灵魂，在一场充满谎言与欲望的追逐后，意外看清了真实的自己。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "都市",
      "迷惘",
      "邂逅",
      "成长"
    ]
  },
  {
    "title": "上帝的微笑或敖德萨故事",
    "href": "detail/movie-1780.html",
    "cover": "130.jpg",
    "year": "2019",
    "region": "俄罗斯 / 乌克兰",
    "type": "电影",
    "genre": "剧情, 历史",
    "category": "音乐",
    "description": "在黑海港口敖德萨，几个看似毫无关联的小人物，在时代的浪潮中，共同拼凑出一幅关于爱与死亡的拼图。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "黑海",
      "港口",
      "群像",
      "诗意",
      "命运"
    ]
  },
  {
    "title": "梦幻飞琴",
    "href": "detail/movie-1781.html",
    "cover": "131.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "奇幻, 剧情",
    "category": "古装",
    "description": "一架尘封的旧钢琴，能将弹奏者的梦境化为现实，却也引来了梦境猎人的追杀。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "音乐",
      "治愈",
      "跨时空",
      "家庭"
    ]
  },
  {
    "title": "恶魔城：夜曲第二季",
    "href": "detail/movie-1782.html",
    "cover": "132.jpg",
    "year": "2025",
    "region": "美国",
    "type": "动画剧集",
    "genre": "动画 / 奇幻 / 恐怖 / 动作",
    "category": "都市",
    "description": "贝尔蒙特家族的后裔与天才魔法师合力对抗吸血鬼女王，却发现真正的恶魔藏在人类心中。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "哥特",
      "吸血鬼",
      "战斗",
      "暗黑奇幻",
      "游戏改编"
    ]
  },
  {
    "title": "晓之春",
    "href": "detail/movie-1783.html",
    "cover": "133.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情 / 同性 / 青春",
    "category": "纪录",
    "description": "高中女生晓晓在春天转学到乡下，遇到了假装哑巴的农家长发女孩阿春，两人用日记本交换心事。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "校园",
      "百合",
      "成长"
    ]
  },
  {
    "title": "乡里乡亲住高楼",
    "href": "detail/movie-1784.html",
    "cover": "134.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 家庭 / 社会",
    "category": "青春",
    "description": "一个北方村庄整村拆迁后搬进同一个楼盘，村民变市民，但鸡毛蒜皮全带上了三十楼。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "拆迁",
      "回迁房",
      "邻里",
      "城乡"
    ]
  },
  {
    "title": "家有仙妻2",
    "href": "detail/movie-1785.html",
    "cover": "135.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电视剧",
    "genre": "喜剧, 爱情, 奇幻",
    "category": "纪录",
    "description": "当年的魔法手镯碎成了碎片，婆婆、儿媳和女儿各捡一块，家里彻底乱套了。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "魔法",
      "婚姻",
      "代际冲突",
      "爆笑"
    ]
  },
  {
    "title": "美丽生灵",
    "href": "detail/movie-1786.html",
    "cover": "136.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "genre": "奇幻, 爱情, 青春",
    "category": "爱情",
    "description": "一个能听见植物心跳的少女，和一个想砍光森林的开发商儿子，他们相爱了。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "精灵",
      "自然",
      "环保"
    ]
  },
  {
    "title": "大河边缘",
    "href": "detail/movie-1787.html",
    "cover": "137.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 青春",
    "category": "科幻",
    "description": "一群冷漠的高中生发现同学分尸了少女却选择集体包庇，只因“举报太麻烦”。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "河岸分尸",
      "少年法",
      "家庭崩坏",
      "冷感叙事"
    ]
  },
  {
    "title": "哈利波特：凤凰会的密令",
    "href": "detail/movie-1788.html",
    "cover": "138.jpg",
    "year": "2027",
    "region": "美国 / 英国",
    "type": "电影 / 游戏改编",
    "genre": "奇幻 / 冒险 / 动作",
    "category": "音乐",
    "description": "伏地魔回归魔法界，哈利一边抵御魔法部的污蔑，一边领导秘密学生组织对抗黑魔法。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "魔法",
      "黑暗",
      "反抗",
      "青年期",
      "大场面"
    ]
  },
  {
    "title": "女人之湖",
    "href": "detail/movie-1789.html",
    "cover": "139.jpg",
    "year": "2026",
    "region": "法国/德国",
    "type": "电影",
    "genre": "悬疑， 剧情， 女性",
    "category": "喜剧",
    "description": "一位失忆的女作家回到阿尔卑斯山的湖畔别墅，发现湖底沉睡着无数个“她自己”。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "记忆",
      "湖畔",
      "心理惊悚"
    ]
  },
  {
    "title": "花非花雾非雾",
    "href": "detail/movie-1790.html",
    "cover": "140.jpg",
    "year": "2013",
    "region": "台湾",
    "type": "剧集",
    "genre": "爱情 / 悬疑",
    "category": "古装",
    "description": "一场大火烧掉豪门记忆，四个“花”字辈女孩带着各自秘密，在十五年后重逢于一座会“说话”的老宅。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "琼瑶",
      "花系列",
      "豪门",
      "身世",
      "虐恋"
    ]
  },
  {
    "title": "圣女小德兰",
    "href": "detail/movie-1791.html",
    "cover": "141.jpg",
    "year": "1986",
    "region": "法国",
    "type": "电影",
    "genre": "剧情, 传记, 宗教",
    "category": "古装",
    "description": "年仅15岁便进入加尔默罗修院的少女，用短暂的一生实践“神婴小道”，成为最受爱戴的圣人之一。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "信仰",
      "修女",
      "传记片",
      "灵修",
      "苦难"
    ]
  },
  {
    "title": "我要做偶像",
    "href": "detail/movie-1792.html",
    "cover": "142.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "剧情 / 青春 / 音乐",
    "category": "音乐",
    "description": "一个从未接受过任何训练的农村女孩，靠着一部二手手机的自拍视频，杀进了顶级娱乐公司的选拔赛。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "练习生",
      "娱乐圈",
      "成长",
      "偶像",
      "粉丝文化"
    ]
  },
  {
    "title": "过界男女国语",
    "href": "detail/movie-1793.html",
    "cover": "143.jpg",
    "year": "2024",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "古装",
    "description": "福田口岸的闸机每天吞吐40万人，却吞不下她和他之间那条看不见的界河。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "深圳河",
      "跨境爱情",
      "阶层差异",
      "职场压力"
    ]
  },
  {
    "title": "荆棘鸟",
    "href": "detail/movie-1794.html",
    "cover": "144.jpg",
    "year": "2025",
    "region": "澳大利亚 / 美国",
    "type": "剧集",
    "genre": "爱情, 剧情, 史诗",
    "category": "喜剧",
    "description": "新版《荆棘鸟》将时间线改到现代，神父变成环保律师，而梅吉成了土著土地权活动家。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "家族史诗",
      "禁忌之恋",
      "澳洲",
      "翻拍"
    ]
  },
  {
    "title": "颤密",
    "href": "detail/movie-1795.html",
    "cover": "145.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "category": "音乐",
    "description": "东京每次小型地震后，同一栋公寓都会有人被杀，而地震的震颤频率恰好是死者的公寓号。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "地震",
      "摩斯密码",
      "公寓",
      "连环案"
    ]
  },
  {
    "title": "走进看守所",
    "href": "detail/movie-1796.html",
    "cover": "146.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情, 犯罪, 教育",
    "category": "奇幻",
    "description": "一名资深记者获准进入看守所180天，通过镜头记录下七个重刑犯的忏悔与原生家庭之痛。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "纪实",
      "人性",
      "庭审纪实",
      "对话"
    ]
  },
  {
    "title": "极乐",
    "href": "detail/movie-1797.html",
    "cover": "147.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电视剧",
    "genre": "科幻， 惊悚",
    "category": "都市",
    "description": "2065年，一家科技公司发明了“极乐芯片”，植入者能永久活在完美梦境中，但现实中的身体开始无故失踪。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "脑机接口",
      "意识上传",
      "企业垄断",
      "虚拟现实",
      "反乌托邦"
    ]
  },
  {
    "title": "阿颂塔之死",
    "href": "detail/movie-1798.html",
    "cover": "148.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "剧集",
    "genre": "悬疑 / 犯罪 / 纪实",
    "category": "都市",
    "description": "一具死在花园栅栏旁的女孩尸体，两名养父母互相指控，三种可能的凶手推理。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "真实改编",
      "养女命案",
      "法庭剧",
      "罗生门"
    ]
  },
  {
    "title": "憨姑爷粤语",
    "href": "detail/movie-1799.html",
    "cover": "149.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "电视剧",
    "genre": "喜剧, 家庭",
    "category": "青春",
    "description": "茶餐厅太子爷娶了豪门千金，老丈人给他三个月证明自己，否则送女婿去非洲管分公司。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "市井温情",
      "女婿智斗",
      "粤式幽默"
    ]
  },
  {
    "title": "伊利·卡山:局外人",
    "href": "detail/movie-1800.html",
    "cover": "150.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "纪录片 / 传记",
    "category": "科幻",
    "description": "好莱坞最伟大的导演之一，也是好莱坞最痛恨的“告密者”。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "导演",
      "麦卡锡主义",
      "举报者",
      "艺术与政治"
    ]
  },
  {
    "title": "难以置信2017",
    "href": "detail/movie-1801.html",
    "cover": "1.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "科幻悬疑",
    "category": "科幻",
    "description": "丈夫车祸去世后，妻子收到一盘录像带，里面的丈夫在求救，但背景是2017年的今天。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "记忆修改",
      "克隆",
      "伦理",
      "反转",
      "烧脑"
    ]
  },
  {
    "title": "金刚归来",
    "href": "detail/movie-1802.html",
    "cover": "2.jpg",
    "year": "2027",
    "region": "美国 / 新西兰",
    "type": "电影",
    "genre": "动作 / 冒险",
    "category": "剧情",
    "description": "骷髅岛被核废料污染后，金刚不得不穿越太平洋寻找新家园，却误闯哥斯拉的领地。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "怪兽宇宙",
      "亲情",
      "史诗"
    ]
  },
  {
    "title": "恋恋小食光",
    "href": "detail/movie-1803.html",
    "cover": "3.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "爱情、美食、治愈",
    "category": "喜剧",
    "description": "失意甜品师与毒舌美食家被迫结伴踏上夜市寻味之旅，却在碗筷间尝到了爱情最初的滋味。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "夜市",
      "甜品师",
      "分手旅行",
      "味觉记忆",
      "烟火气"
    ]
  },
  {
    "title": "青之壬生狼",
    "href": "detail/movie-1804.html",
    "cover": "4.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "历史, 动作",
    "category": "青春",
    "description": "热血少年加入新选组，却发现传说中的“壬生狼”内部早已被一只“青色的鬼”吞噬。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "新选组",
      "动漫改编",
      "剑戟",
      "兄弟情",
      "幕末"
    ]
  },
  {
    "title": "指甲刀",
    "href": "detail/movie-1805.html",
    "cover": "5.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "genre": "惊悚， 犯罪",
    "category": "古装",
    "description": "刑警秀珍发现四起无头女尸案现场都少了一把指甲刀，而她自己家里也刚丢了一把。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "连环杀手",
      "物证追踪",
      "女性视角",
      "悬疑推理"
    ]
  },
  {
    "title": "问天录",
    "href": "detail/movie-1806.html",
    "cover": "6.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装 / 仙侠",
    "category": "都市",
    "description": "千年前他是被她度化的妖，千年后她是被他收养的人，天道轮回让他们不得不兵戎相见。",
    "rating": 8.2,
    "duration": "50:00",
    "tags": [
      "修仙",
      "宿命",
      "虐恋"
    ]
  },
  {
    "title": "分手工作室2",
    "href": "detail/movie-1807.html",
    "cover": "7.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 喜剧",
    "category": "青春",
    "description": "专帮怨侣体面分手的“分手工作室”，这次接到了史上最难订单——让两位已故老人的亡魂分开安葬。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "分手",
      "复合",
      "工作室",
      "前任",
      "闹剧"
    ]
  },
  {
    "title": "赤子少年",
    "href": "detail/movie-1808.html",
    "cover": "8.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 青春 / 犯罪",
    "category": "历史",
    "description": "五个被校园霸凌逼入绝境的高中生，用一学期的时间把自己练成了最狠的地下搏击手。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "少年犯罪",
      "校园暴力",
      "以暴制暴",
      "兄弟情",
      "热血悲情"
    ]
  },
  {
    "title": "蒙查查王老五",
    "href": "detail/movie-1809.html",
    "cover": "9.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧, 爱情",
    "category": "爱情",
    "description": "眼盲心不盲的按摩师阿查，以为自己追到的是富家千金，实际上对方是个天天偷他钱包的女扒手。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "市井",
      "乌龙",
      "追女仔"
    ]
  },
  {
    "title": "流星花园剧场版",
    "href": "detail/movie-1810.html",
    "cover": "10.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "爱情, 喜剧",
    "category": "奇幻",
    "description": "杉菜和道明寺结婚三年后，F4重聚却发现彼此都成了“妻管严”。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "动画",
      "续作",
      "婚后生活",
      "爆笑"
    ]
  },
  {
    "title": "龙虎煞星火并剃刀党",
    "href": "detail/movie-1811.html",
    "cover": "11.jpg",
    "year": "1978",
    "region": "香港",
    "type": "电影",
    "genre": "动作, 犯罪",
    "category": "都市",
    "description": "两个曾经结拜的兄弟，分别成了警方卧底和黑帮龙头，今夜必有一死。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "邵氏",
      "黑帮",
      "火并",
      "江湖"
    ]
  },
  {
    "title": "假面骑士龙骑",
    "href": "detail/movie-1812.html",
    "cover": "12.jpg",
    "year": "2002",
    "region": "日本",
    "type": "剧集",
    "genre": "特摄动作",
    "category": "家庭",
    "description": "十三位假面骑士在镜中世界为终极愿望而战，每场战斗都可能是最后一张存活的门票。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "骑士战争",
      "镜中世界",
      "契约兽",
      "悲剧英雄",
      "生存游戏"
    ]
  },
  {
    "title": "猛虎3",
    "href": "detail/movie-1813.html",
    "cover": "13.jpg",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "genre": "动作，惊悚，间谍",
    "category": "都市",
    "description": "代号“猛虎”的王牌特工被诬陷叛国，他必须单枪匹马闯入敌国总理的堡垒式庄园证明清白。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "特工",
      "复仇",
      "老虎",
      "跨国行动"
    ]
  },
  {
    "title": "欢乐成长季",
    "href": "detail/movie-1814.html",
    "cover": "14.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "家庭喜剧",
    "category": "科幻",
    "description": "一个小区里五个不同年龄的孩子和他们“不靠谱”的家长，一起疯长了一整个夏天。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "三代同堂",
      "兒童教育",
      "小區鄰里"
    ]
  },
  {
    "title": "175纪事",
    "href": "detail/movie-1815.html",
    "cover": "15.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 历史",
    "category": "历史",
    "description": "成昆铁路建设期间，编号175的隧道里埋着108位烈士，但至今没有一块墓碑。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "铁路史",
      "成昆铁路",
      "铁道兵",
      "伤痕文学"
    ]
  },
  {
    "title": "现在加糖",
    "href": "detail/movie-1816.html",
    "cover": "16.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 奇幻",
    "category": "科幻",
    "description": "甜品师意外获得能倒流时间的魔法糖，为了挽救暗恋对象的告白，却陷入无限循环。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "甜品",
      "时间循环",
      "暗恋",
      "治愈"
    ]
  },
  {
    "title": "大长今",
    "href": "detail/movie-1817.html",
    "cover": "17.jpg",
    "year": "2003",
    "region": "韩国",
    "type": "电视剧",
    "genre": "历史, 剧情, 励志",
    "category": "悬疑",
    "description": "朝鲜王朝唯一一位女御医，从孤女到医女的传奇人生。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "宫廷御厨",
      "女医官",
      "朝鲜王朝",
      "逆袭",
      "美食文化"
    ]
  },
  {
    "title": "我的23岁美女邻居",
    "href": "detail/movie-1818.html",
    "cover": "18.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "爱情 / 喜剧 / 甜宠",
    "category": "悬疑",
    "description": "游戏设计师男主发现，隔壁女邻居长得像他逝去的前女友，且从未开门。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "姐弟恋",
      "合租误会",
      "游戏设计",
      "轻悬疑",
      "短剧爆款"
    ]
  },
  {
    "title": "望月奇遇",
    "href": "detail/movie-1819.html",
    "cover": "19.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧，奇幻",
    "category": "都市",
    "description": "废柴青年在中秋夜对着月亮许愿，结果竟将月宫里的玉兔和吴刚“召唤”到了自己家。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "都市传说",
      "中秋",
      "小人物逆袭"
    ]
  },
  {
    "title": "大宋探案局",
    "href": "detail/movie-1820.html",
    "cover": "20.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "悬疑 / 古装 / 推理",
    "category": "古装",
    "description": "开封府新来的小吏是前朝仵作之女，她看一眼尸体，比犯人招供还准。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "宋朝",
      "开封府",
      "法医",
      "搭档",
      "连环案"
    ]
  },
  {
    "title": "狗纹龙爸爸",
    "href": "detail/movie-1821.html",
    "cover": "21.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作、剧情、家庭",
    "category": "音乐",
    "description": "背上纹着“过江龙”的前社团大佬，为了女儿拼命洗白在茶餐厅打工，却被迫重出江湖。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "古惑仔改邪归正",
      "父女情",
      "街头格斗",
      "纹身"
    ]
  },
  {
    "title": "会社",
    "href": "detail/movie-1822.html",
    "cover": "22.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "剧情, 职场, 悬疑",
    "category": "青春",
    "description": "新人社员发现公司每个离职者的工位都会在深夜被“清洁工”擦得一尘不染，而他即将成为下一个。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "黑企",
      "过劳死",
      "复仇",
      "日式压抑"
    ]
  },
  {
    "title": "二十四味暖浮生",
    "href": "detail/movie-1823.html",
    "cover": "23.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "古装, 美食",
    "category": "悬疑",
    "description": "天才药膳师穿越成被退婚的庶女，用二十四道节气药膳逆袭侯府，却发现自己吃的每道菜都在改写命运。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "药膳",
      "宅斗",
      "治愈",
      "非遗"
    ]
  },
  {
    "title": "海洋奇缘2",
    "href": "detail/movie-1824.html",
    "cover": "24.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动画, 冒险, 歌舞",
    "category": "古装",
    "description": "莫阿娜发现还有另一片被诅咒的海洋，而解开封印的钥匙是她失散多年的孪生妹妹。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "迪士尼",
      "航海",
      "神话",
      "姐妹情"
    ]
  },
  {
    "title": "灵驹续集",
    "href": "detail/movie-1825.html",
    "cover": "25.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "奇幻 / 冒险 / 家庭",
    "category": "剧情",
    "description": "上一部中的神奇白马再次出现，带领已为人母的小女孩和她的女儿，踏上拯救被污染森林的旅程。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "白马",
      "魔法",
      "祖孙",
      "守护",
      "成长"
    ]
  },
  {
    "title": "蝙蝠侠与小丑女",
    "href": "detail/movie-1826.html",
    "cover": "26.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影（动画）",
    "genre": "动作 / 犯罪 / 动画",
    "category": "励志",
    "description": "小丑女哈莉·奎茵被绑架后，前来营救的竟然是她最讨厌的蝙蝠侠。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "DC",
      "反英雄",
      "心理战",
      "另类联盟"
    ]
  },
  {
    "title": "向日葵",
    "href": "detail/movie-1827.html",
    "cover": "27.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "青春",
    "description": "一个被父母留在农村的哑巴女孩，靠种出一片金色向日葵唤回了全村的希望。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "留守",
      "乡村",
      "成长",
      "亲情",
      "治愈"
    ]
  },
  {
    "title": "北海道辣妹贼拉可爱",
    "href": "detail/movie-1828.html",
    "cover": "28.jpg",
    "year": "2024",
    "region": "日本、中国大陆合拍",
    "type": "电视剧",
    "genre": "喜剧、爱情、青春",
    "category": "动作",
    "description": "东北小伙被调到北海道，被当地辣妹的日语东北话混合口音整崩溃了。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "南北差异",
      "方言恋爱",
      "反差萌",
      "北海道风光"
    ]
  },
  {
    "title": "冲关我最棒",
    "href": "detail/movie-1829.html",
    "cover": "29.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "真人秀 / 悬疑",
    "category": "纪录",
    "description": "一档儿童闯关综艺的幕后，导演组不断给孩子们制造“意外事故”以博取流量。",
    "rating": 9.3,
    "duration": "43:00",
    "tags": [
      "综艺",
      "生存游戏",
      "真相"
    ]
  },
  {
    "title": "一个名叫恰帕斯的地方",
    "href": "detail/movie-1830.html",
    "cover": "30.jpg",
    "year": "2023",
    "region": "墨西哥",
    "type": "电影",
    "genre": "剧情, 冒险, 历史",
    "category": "音乐",
    "description": "纽约华裔律师收到祖父遗物：一张恰帕斯丛林的手绘地图，和一封用玛雅文写的“我骗了你一辈子”。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "拉美",
      "原始丛林",
      "萨满",
      "寻根"
    ]
  },
  {
    "title": "行过死荫之地",
    "href": "detail/movie-1831.html",
    "cover": "31.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "悬疑 / 犯罪 / 惊悚",
    "category": "音乐",
    "description": "一名失去信仰的前神父侦探，追踪一个用《圣经》章节标记尸体的连环杀手。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "连环杀手",
      "宗教符号",
      "冷硬派侦探"
    ]
  },
  {
    "title": "普通人1980",
    "href": "detail/movie-1832.html",
    "cover": "32.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 家庭",
    "category": "爱情",
    "description": "1980年匹兹堡的钢铁厂倒闭后，一个普通电工意外发现儿子偷走了工厂最后一台报废机器的核心零件。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "生活流",
      "80年代复古",
      "工人阶级",
      "父子关系"
    ]
  },
  {
    "title": "阴阳路十二之美容尸",
    "href": "detail/movie-1833.html",
    "cover": "33.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "恐怖 / 喜剧",
    "category": "剧情",
    "description": "黑心美容院老板娘用太平间偷来的尸体做医美填充剂，直到僵尸新娘上门做护理。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "经典IP重启",
      "美容院",
      "僵尸",
      "黑色幽默",
      "港味"
    ]
  },
  {
    "title": "眼里余光都是你",
    "href": "detail/movie-1834.html",
    "cover": "34.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧 / 甜宠剧",
    "genre": "爱情 / 喜剧 / 职场",
    "category": "科幻",
    "description": "假性失明的霸道总裁被迫住进盲人按摩师家里，发现她“看”他的方式比任何眼睛都清楚。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "盲人按摩师",
      "总裁",
      "假性失明",
      "错位爱恋",
      "治愈"
    ]
  },
  {
    "title": "失落的毕业生",
    "href": "detail/movie-1835.html",
    "cover": "35.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情 / 悬疑 / 惊悚",
    "category": "奇幻",
    "description": "某名校毕业生五年求职未果，发现当年成功入职的同学都曾参加过一场秘密的人性测试。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "求职",
      "阶级",
      "复仇",
      "青年",
      "社会议题"
    ]
  },
  {
    "title": "紫禁秘录",
    "href": "detail/movie-1836.html",
    "cover": "36.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "genre": "古装 / 悬疑 / 奇幻",
    "category": "科幻",
    "description": "故宫文物修复师意外穿回清朝，成了冷宫宫女，却发现紫禁城每晚都在闹“鬼”，且这鬼只杀贪官。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "宫斗",
      "超自然",
      "探案",
      "大女主"
    ]
  },
  {
    "title": "罗斯托夫的野兽",
    "href": "detail/movie-1837.html",
    "cover": "37.jpg",
    "year": "2026",
    "region": "俄罗斯 / 德国",
    "type": "电影",
    "genre": "犯罪 / 惊悚 / 历史",
    "category": "奇幻",
    "description": "1980年代罗斯托夫，一名女警探必须在克格勃的阻挠下，独自追捕一位专杀儿童的“野兽”。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "连环杀手",
      "真实改编",
      "冷战",
      "追凶"
    ]
  },
  {
    "title": "是非之地",
    "href": "detail/movie-1838.html",
    "cover": "38.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "genre": "西部 / 剧情",
    "category": "纪录",
    "description": "美墨边境小镇警长在退休前一天，必须决定是放走越境难民还是执行即将过时的法律。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "边境",
      "警长",
      "道德困境",
      "荒漠",
      "独白"
    ]
  },
  {
    "title": "光开门就很忙了",
    "href": "detail/movie-1839.html",
    "cover": "39.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "genre": "家庭 / 喜剧 / 生活",
    "category": "家庭",
    "description": "经营手工灯具店的林家三兄妹，在父亲突然失踪后，发现家里欠债千万，只好白天上班，晚上摆摊卖灯。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "家族企业",
      "破产",
      "夜市",
      "群像剧"
    ]
  },
  {
    "title": "星球大战：原力觉醒",
    "href": "detail/movie-1840.html",
    "cover": "40.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻、动作、冒险",
    "category": "爱情",
    "description": "在恩多战役三十年后，一个拾荒者蕾伊发现了隐藏着卢克·天行者线索的机器人BB-8，新帝国的阴影再次笼罩银河。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "太空歌剧",
      "绝地",
      "战争",
      "史诗"
    ]
  },
  {
    "title": "成龙的特技",
    "href": "detail/movie-1841.html",
    "cover": "41.jpg",
    "year": "2024",
    "region": "香港",
    "type": "纪录片",
    "genre": "纪录片, 动作, 传记",
    "category": "纪录",
    "description": "这是一部真正的纪录片，记录了一个不要命的龙虎武师，如何用骨折把中国功夫摔进好莱坞。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "成龙幕后",
      "特技揭秘",
      "香港动作片黄金时代",
      "片场故事"
    ]
  },
  {
    "title": "白色女孩",
    "href": "detail/movie-1842.html",
    "cover": "42.jpg",
    "year": "2017",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 悬疑",
    "category": "爱情",
    "description": "香港最后的水上棚屋村，一名患有白化病的少女与一个日本背包客相遇，揭开了尘封的罪恶。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "社会议题",
      "少女性侵",
      "黑白摄影"
    ]
  },
  {
    "title": "超时空武士",
    "href": "detail/movie-1843.html",
    "cover": "43.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "genre": "科幻古装",
    "category": "青春",
    "description": "来自22世纪的AI生化人，魂穿到战国时代，成为最强武士，却要阻止一场会毁灭未来的战争。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "穿越",
      "武士",
      "AI"
    ]
  },
  {
    "title": "最棒的烂片",
    "href": "detail/movie-1844.html",
    "cover": "44.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧，剧情",
    "category": "青春",
    "description": "一个北漂导演为了还债，拍了一部他明知是大烂片的网大，没想到这部电影却改变了几百个人的命运。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "电影幕后",
      "草根逆袭",
      "理想主义",
      "讽刺",
      "热泪盈眶"
    ]
  },
  {
    "title": "纪伯伦哈利勒：先知",
    "href": "detail/movie-1845.html",
    "cover": "45.jpg",
    "year": "2023",
    "region": "黎巴嫩",
    "type": "电影",
    "genre": "传记, 剧情, 文艺",
    "category": "音乐",
    "description": "流亡纽约的纪伯伦用阿拉伯语写下了《先知》，但他的祖国正准备绞死他的所有著作。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "文学巨匠",
      "流亡",
      "诗电影"
    ]
  },
  {
    "title": "扭转时光机",
    "href": "detail/movie-1846.html",
    "cover": "46.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "奇幻, 剧情, 家庭",
    "category": "科幻",
    "description": "一张能回到过去的旧彩票，让中年失意的男人反复穿越回女儿出事的那一天，却发现每一次改变都是新的悲伤。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "时间循环",
      "父女",
      "遗憾",
      "和解",
      "怀旧"
    ]
  },
  {
    "title": "大闹天宫",
    "href": "detail/movie-1847.html",
    "cover": "47.jpg",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动画, 奇幻, 动作",
    "category": "纪录",
    "description": "在众神算计中诞生的石猴，誓要烧毁那本决定万物命运的“天书”。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "孙悟空",
      "国风美学",
      "反叛",
      "三维渲染二维",
      "封神宇宙"
    ]
  },
  {
    "title": "出差十五夜2：梦想特辑",
    "href": "detail/movie-1848.html",
    "cover": "48.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "综艺",
    "genre": "真人秀，游戏",
    "category": "奇幻",
    "description": "王牌制作人老罗空降陌生城市，随机抓取路人参与游戏，获胜者直接获得实现梦想的资金或资源。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "出差",
      "星探",
      "街头游戏",
      "随机任务"
    ]
  },
  {
    "title": "爱笑种梦室之白蛇传说",
    "href": "detail/movie-1849.html",
    "cover": "49.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧、奇幻、爱情",
    "category": "爱情",
    "description": "许仙和白娘子的悲剧爱情被“种梦室”改造成了爆笑职场宫斗剧。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "恶搞经典",
      "种梦系统",
      "反转悲剧",
      "跨次元",
      "合家欢"
    ]
  },
  {
    "title": "性的奉献",
    "href": "detail/movie-1850.html",
    "cover": "50.jpg",
    "year": "1985",
    "region": "日本",
    "type": "电影",
    "genre": "情色 / 剧情",
    "category": "古装",
    "description": "昭和中期，一位有夫之妇与年轻诗人的不伦之恋，最终以一场精心策划的“双人殉情”震惊社会。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "殉情",
      "昭和时代",
      "禁忌之恋",
      "文学改编"
    ]
  },
  {
    "title": "最后一公里",
    "href": "detail/movie-1851.html",
    "cover": "51.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 体育",
    "category": "励志",
    "description": "贫困山区学校的泥地跑道上，一群孩子为了马拉松梦想，赤脚跑完最后一公里。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "马拉松",
      "基层体育",
      "励志"
    ]
  },
  {
    "title": "进化症候群",
    "href": "detail/movie-1852.html",
    "cover": "52.jpg",
    "year": "2027",
    "region": "日本",
    "type": "动画剧集",
    "genre": "科幻惊悚",
    "category": "家庭",
    "description": "当代年轻人开始随机“返祖”或“进化”，有人长出鳃，有人脑子变成珊瑚。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "身体恐怖",
      "悬疑",
      "社会隐喻",
      "寄生"
    ]
  },
  {
    "title": "亲爱的客栈第二季",
    "href": "detail/movie-1853.html",
    "cover": "53.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "真人秀, 经营, 生活",
    "category": "喜剧",
    "description": "五位明星前往内蒙古阿尔山，在荒地上白手起家建造一座环保客栈。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "民宿",
      "黄河",
      "环保",
      "慢生活",
      "明星"
    ]
  },
  {
    "title": "纤足缘",
    "href": "detail/movie-1854.html",
    "cover": "54.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "历史 / 爱情 / 剧情",
    "category": "古装",
    "description": "民国初年，一对因“三寸金莲”结缘的姐妹，在天足运动中走向截然不同的命运。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "民国女性",
      "缠足陋习",
      "畸形爱情",
      "解放思潮"
    ]
  },
  {
    "title": "神奇动物学校",
    "href": "detail/movie-1855.html",
    "cover": "55.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "genre": "奇幻 / 家庭 / 冒险",
    "category": "历史",
    "description": "转校生玛雅发现新学校的所有学生都拥有一只会魔法的动物搭档，而她分到的竟是一只看似毫无用处的“垃圾兔”。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "魔法校园",
      "会说话的动物",
      "成长",
      "友谊",
      "神秘事件"
    ]
  },
  {
    "title": "逆权巴士司机",
    "href": "detail/movie-1856.html",
    "cover": "56.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情 / 犯罪",
    "category": "青春",
    "description": "一个被吊销驾照的巴士司机，开着一辆偷来的废柴巴士，直冲贪污总署大门。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "社会底层",
      "抗争",
      "反转",
      "人性",
      "飙车"
    ]
  },
  {
    "title": "黄金直播",
    "href": "detail/movie-1857.html",
    "cover": "57.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情 / 犯罪 / 动作",
    "category": "科幻",
    "description": "为了还债，主播决定直播抢劫金店，但屏幕对面的榜一大哥竟是退休刑警。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "网络直播",
      "抢劫",
      "实时叙事",
      "讽刺"
    ]
  },
  {
    "title": "恶魔狂欢节",
    "href": "detail/movie-1858.html",
    "cover": "58.jpg",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "genre": "恐怖 / 歌舞",
    "category": "科幻",
    "description": "地狱降临人间，化身为一座巡回嘉年华，专门收集凡人在七宗罪中的丑态并上演血腥歌剧。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "音乐剧",
      "恶魔",
      "嘉年华",
      "惩罚",
      "哥特"
    ]
  },
  {
    "title": "绝命海拔",
    "href": "detail/movie-1859.html",
    "cover": "59.jpg",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "genre": "动作, 冒险, 惊悚",
    "category": "剧情",
    "description": "两支商业登山队在珠峰南坡遭遇致命风暴，他们在海拔8000米的“死亡区”挣扎求生，每一步都是向死而生。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "珠峰",
      "真实改编",
      "登山灾难",
      "人体极限"
    ]
  },
  {
    "title": "某事的开始",
    "href": "detail/movie-1860.html",
    "cover": "60.jpg",
    "year": "2012",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "科幻",
    "description": "一个男人在火车站捡到一个没有封面的笔记本，里面只写了一句话：“这件事从你开始。”",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "文艺",
      "邂逅",
      "未知",
      "开放式结局"
    ]
  },
  {
    "title": "草之韵",
    "href": "detail/movie-1861.html",
    "cover": "61.jpg",
    "year": "2021",
    "region": "中国",
    "type": "电影",
    "genre": "文艺、家庭",
    "category": "古装",
    "description": "蒙古族少年从城市回到草原，跟随爷爷学习即将失传的口琴吹奏法，却无意中揭开了一个家族隐瞒三十年的秘密。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "草原",
      "三代人",
      "口琴",
      "迁徙",
      "文化消逝"
    ]
  },
  {
    "title": "花红花火",
    "href": "detail/movie-1862.html",
    "cover": "62.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "年代 / 爱情 / 战争",
    "category": "音乐",
    "description": "江南酒坊女掌柜在乱世中周旋于土匪、军阀与日军之间，用一坛毒酒改写命运。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "民国",
      "酿酒",
      "女性成长",
      "四角恋",
      "抗日"
    ]
  },
  {
    "title": "朋友之妻",
    "href": "detail/movie-1863.html",
    "cover": "63.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "genre": "剧情, 悬疑, 惊悚",
    "category": "动作",
    "description": "男人酒后与好友妻子发生一夜情，第二天却发现好友已在同一晚死于火灾，他从此活在双重秘密的折磨中。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "伦理困境",
      "愧疚",
      "谎言与真相",
      "心理惊悚",
      "反转"
    ]
  },
  {
    "title": "爱情马戏团",
    "href": "detail/movie-1864.html",
    "cover": "64.jpg",
    "year": "2025",
    "region": "法国/意大利",
    "type": "剧集",
    "genre": "剧情爱情",
    "category": "励志",
    "description": "二战期间，一个犹太魔术师、一个吉普赛驯兽师和一个德国逃兵，在马戏团的帐篷里上演了一场关乎生存与背叛的三角爱情。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "马戏团",
      "三角恋",
      "二战",
      "逃亡"
    ]
  },
  {
    "title": "他没有恋爱打算",
    "href": "detail/movie-1865.html",
    "cover": "65.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "爱情, 喜剧, 生活",
    "category": "音乐",
    "description": "一个声称“不谈恋爱”的单身男人，与四位女性建立了不可思议的纯友谊。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "无浪漫倾向",
      "治愈系",
      "友情以上",
      "成人童话"
    ]
  },
  {
    "title": "鬼马小精灵2",
    "href": "detail/movie-1866.html",
    "cover": "66.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 动画 / 奇幻",
    "category": "喜剧",
    "description": "小精灵为了寻找失散的家人，误闯人类小学，引发了一连串让人啼笑皆非的捉鬼大乱斗。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "合家欢",
      "萌宠",
      "幽灵",
      "冒险"
    ]
  },
  {
    "title": "超难搞叔叔",
    "href": "detail/movie-1867.html",
    "cover": "67.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧 / 家庭 / 剧情",
    "category": "纪录",
    "description": "患有严重强迫症的毒舌大叔，被迫照顾从天而降的“野孩子”侄女，两人斗智斗勇笑料百出。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "叔侄",
      "强迫症",
      "治愈",
      "台式幽默"
    ]
  },
  {
    "title": "太阳恋",
    "href": "detail/movie-1868.html",
    "cover": "68.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "genre": "爱情 / 青春",
    "category": "纪录",
    "description": "一个患有罕见光过敏症的女孩，只能在夜晚活动，却爱上了一个如太阳般耀眼的男孩。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "清新",
      "海岛",
      "暗恋",
      "疾病",
      "纯爱"
    ]
  },
  {
    "title": "雾中之犬",
    "href": "detail/movie-1869.html",
    "cover": "69.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪, 悬疑",
    "category": "家庭",
    "description": "一座常年被雾霾笼罩的工业城市里，孩子们声称在浓雾中看到了巨大的犬形身影。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "盲童失踪",
      "全城搜救",
      "社会寓言"
    ]
  },
  {
    "title": "一眼万年",
    "href": "detail/movie-1870.html",
    "cover": "70.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "genre": "爱情 / 科幻",
    "category": "爱情",
    "description": "他每次穿越时间救她，都会让她忘记他的样子，只有最后一万次，她记住了他的眼睛。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "时间循环",
      "宿命",
      "唯美虐恋"
    ]
  },
  {
    "title": "幕末群英传",
    "href": "detail/movie-1871.html",
    "cover": "71.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "genre": "历史 / 动作 / 战争",
    "category": "青春",
    "description": "新选组、坂本龙马、吉田松阴，三条线索交织出日本明治维新的血色黎明。",
    "rating": 8.7,
    "duration": "57:00",
    "tags": [
      "武士",
      "维新",
      "群像",
      "刀剑",
      "政治"
    ]
  },
  {
    "title": "凶手",
    "href": "detail/movie-1872.html",
    "cover": "72.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "category": "历史",
    "description": "暴雨夜，一栋公寓电梯困住了五个人，其中一人是连环杀人案的真凶，但所有人都声称自己是凶手。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "反转",
      "真凶难辨",
      "心理博弈",
      "有限空间"
    ]
  },
  {
    "title": "吸血鬼生活",
    "href": "detail/movie-1873.html",
    "cover": "73.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "喜剧 / 奇幻",
    "category": "爱情",
    "description": "四个吸血鬼合租一栋老别墅，他们要面对比永生更恐怖的事：交物业费和处理HOA。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "伪纪录片",
      "日常",
      "职场",
      "吸血鬼"
    ]
  },
  {
    "title": "玩命保镳",
    "href": "detail/movie-1874.html",
    "cover": "74.jpg",
    "year": "2024",
    "region": "香港/大陆",
    "type": "电影",
    "genre": "动作/犯罪",
    "category": "剧情",
    "description": "顶级保镖在执行任务时失手导致雇主身亡，为了赎罪，他必须保护雇主的遗孀，对抗一支雇佣兵军团。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "保镖",
      "以暴制暴",
      "MMA",
      "复仇"
    ]
  },
  {
    "title": "带枪的人",
    "href": "detail/movie-1875.html",
    "cover": "75.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "犯罪 / 剧情",
    "category": "动作",
    "description": "一名行将退休的老年杀手接了最后一单生意：杀死一个黑帮老大，却发现目标竟是30年前他抛弃的女儿。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "黑色电影",
      "杀手",
      "父女情",
      "救赎"
    ]
  },
  {
    "title": "善良的爱情",
    "href": "detail/movie-1876.html",
    "cover": "76.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电视剧",
    "genre": "爱情、剧情、治愈",
    "category": "悬疑",
    "description": "患罕见病的善良男孩为了给初恋捐骨髓而答应契约婚姻，却发现妻子是来“收尸”的遗产猎人。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "暖男",
      "绝症",
      "契约婚姻",
      "双向救赎",
      "BE美学"
    ]
  },
  {
    "title": "世界之梦",
    "href": "detail/movie-1877.html",
    "cover": "77.jpg",
    "year": "2027",
    "region": "多国合拍",
    "type": "电影",
    "genre": "科幻， 剧情， 悬疑",
    "category": "爱情",
    "description": "某一天，全球35亿人同时梦到了同一个陌生女人的一生，各国政府陷入疯狂的解谜竞赛。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "梦境",
      "全球事件",
      "烧脑",
      "哲学"
    ]
  },
  {
    "title": "号外！号外！",
    "href": "detail/movie-1878.html",
    "cover": "78.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "悬疑，犯罪，历史",
    "category": "喜剧",
    "description": "1967年香港暴动期间，一家倒闭小报社的最后三位记者，发现所有命案线索都指向明天即将刊发的头版。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "报纸",
      "连环杀手",
      "六十年代",
      "记者"
    ]
  },
  {
    "title": "地吓灵",
    "href": "detail/movie-1879.html",
    "cover": "79.jpg",
    "year": "2024",
    "region": "马来西亚",
    "type": "电影",
    "genre": "恐怖 / 民俗",
    "category": "古装",
    "description": "锡矿矿主在深井挖出一尊邪像，从此整个村子的人每晚都看到地面伸出一只手索命。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "马来降头",
      "矿难",
      "拿督公",
      "东南亚邪术"
    ]
  },
  {
    "title": "候选人",
    "href": "detail/movie-1880.html",
    "cover": "80.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "政治惊悚",
    "category": "青春",
    "description": "一名毫无胜算的独立候选人在辩论中突然说出对手的所有贿选证据——但他自己根本不记得写过这份稿子。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "选举",
      "暗箱操作",
      "双面人",
      "烧脑"
    ]
  },
  {
    "title": "大白鲨第三集",
    "href": "detail/movie-1881.html",
    "cover": "81.jpg",
    "year": "1987",
    "region": "美国",
    "type": "电影",
    "genre": "惊悚 / 灾难",
    "category": "纪录",
    "description": "一条比前作更狡黠的巨型大白鲨将退役潜水员与一群游客困在了沉船遗迹之中。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "鲨鱼",
      "海岛",
      "复仇",
      "血腥"
    ]
  },
  {
    "title": "孟买之音",
    "href": "detail/movie-1882.html",
    "cover": "82.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "genre": "歌舞/爱情/剧情",
    "category": "科幻",
    "description": "一名孟买贫民窟的洗衣工和一名过气宝莱坞歌手，两人将洗衣的敲打声谱写成了一首震动全城的抗议之歌。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "孟买",
      "街头歌手",
      "宝莱坞",
      "贫民窟",
      "音乐梦想"
    ]
  },
  {
    "title": "告别乔安娜",
    "href": "detail/movie-1883.html",
    "cover": "83.jpg",
    "year": "2023",
    "region": "波兰",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "青春",
    "description": "一位患阿尔茨海默症的老妇人，每天都会重新爱上同一个男人。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "疾病",
      "代际",
      "告别",
      "温情",
      "日记"
    ]
  },
  {
    "title": "无眠觉醒",
    "href": "detail/movie-1884.html",
    "cover": "84.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "科幻 / 惊悚",
    "category": "历史",
    "description": "一种“不睡就会死”的病毒爆发后，最后一批清醒者发现梦里的怪物会爬进现实。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "失眠症",
      "集体幻觉",
      "生物武器",
      "孤岛惊魂"
    ]
  },
  {
    "title": "串珠游戏",
    "href": "detail/movie-1885.html",
    "cover": "85.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑 / 犯罪",
    "category": "都市",
    "description": "六人被困密室，唯一的线索是一串会随谎言变色的念珠，真话越来越少。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "密室",
      "推理",
      "心理战",
      "反转",
      "复仇"
    ]
  },
  {
    "title": "沉默风暴",
    "href": "detail/movie-1886.html",
    "cover": "86.jpg",
    "year": "2018",
    "region": "英国",
    "type": "电影",
    "genre": "剧情, 灾难, 心理",
    "category": "纪录",
    "description": "一场百年一遇的无声风暴（巨型沙尘暴）吞噬小镇，一家人被困地下室，必须沉默才能生存。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "自然灾害",
      "极端气候",
      "家庭和解",
      "密闭空间"
    ]
  },
  {
    "title": "沉默是金",
    "href": "detail/movie-1887.html",
    "cover": "87.jpg",
    "year": "1992",
    "region": "香港",
    "type": "电影",
    "genre": "犯罪/剧情",
    "category": "都市",
    "description": "一个不能说话的哑巴清洁工，目睹黑帮杀人后，用一支笔和一把刀完成了复仇。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "黑帮",
      "哑巴",
      "复仇",
      "兄弟情"
    ]
  },
  {
    "title": "乌贼摔角手",
    "href": "detail/movie-1888.html",
    "cover": "88.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "genre": "运动奇幻",
    "category": "奇幻",
    "description": "在深海摔角联盟里，一只被嘲笑“软体废物”的乌贼少年，誓要用十条触手赢得最硬核的冠军。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "深海",
      "摔角",
      "触手",
      "友情",
      "成长"
    ]
  },
  {
    "title": "无问题2",
    "href": "detail/movie-1889.html",
    "cover": "89.jpg",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "genre": "喜剧 / 动作 / 职场",
    "category": "喜剧",
    "description": "第一部里“没有问题”的职场老好人意外升任合规总监，却发现公司最大的问题就是他自己。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "打工人",
      "合规部门",
      "办公室武术",
      "讽刺",
      "续集"
    ]
  },
  {
    "title": "幸福媳妇成长记",
    "href": "detail/movie-1890.html",
    "cover": "90.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "剧情 / 家庭 / 女性",
    "category": "古装",
    "description": "一个信奉“独立女性”原则的职场女强人，结婚后发现最难搞的项目不是客户，而是婆婆。",
    "rating": 9.0,
    "duration": "50:00",
    "tags": [
      "婆媳",
      "婚姻",
      "职场",
      "成长",
      "现实"
    ]
  },
  {
    "title": "剧院的夏尔洛",
    "href": "detail/movie-1891.html",
    "cover": "91.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "剧情 / 传记 / 歌舞",
    "category": "喜剧",
    "description": "晚年落魄的夏尔洛在一家即将倒闭的小剧院里，最后一次戴上圆顶礼帽，为两个观众表演。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "默片",
      "卓别林",
      "致敬",
      "复古",
      "戏剧"
    ]
  },
  {
    "title": "半人马传说",
    "href": "detail/movie-1892.html",
    "cover": "92.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "genre": "奇幻 / 冒险 / 动作",
    "category": "奇幻",
    "description": "草原上最后一个半人马部落必须与哥萨克骑兵联手对抗入侵的机械军团。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "神话重构",
      "骑兵史诗",
      "冷兵器"
    ]
  },
  {
    "title": "叛国疑云",
    "href": "detail/movie-1893.html",
    "cover": "93.jpg",
    "year": "2023",
    "region": "美国 / 英国",
    "type": "剧集",
    "genre": "悬疑 / 惊悚 / 谍战",
    "category": "科幻",
    "description": "当一位功勋卓著的情报官被指控为双面间谍时，连他的家人都开始怀疑他是谁。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "双面间谍",
      "军情六处",
      "反转"
    ]
  },
  {
    "title": "万里追凶",
    "href": "detail/movie-1894.html",
    "cover": "94.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "警匪动作",
    "category": "动作",
    "description": "遭陷害的警探横跨东南亚三千里，只为在真凶灭口前亲手将他绳之以法。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "公路追凶",
      "兄弟情",
      "绝地翻盘"
    ]
  },
  {
    "title": "财神爷",
    "href": "detail/movie-1895.html",
    "cover": "95.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "genre": "喜剧，奇幻，都市",
    "category": "历史",
    "description": "财神爷被贬下凡体验人间疾苦，他必须在一个月内花光一亿现金，否则就要永远当穷人。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "财神",
      "现代",
      "金钱观",
      "搞笑",
      "福气"
    ]
  },
  {
    "title": "老师的恩惠国语",
    "href": "detail/movie-1896.html",
    "cover": "96.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑， 校园",
    "category": "古装",
    "description": "首尔顶级国语讲师被绑架，绑匪要求他为自己过去的“话语暴力”向全体学生道歉。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "补习班",
      "阶级",
      "反转"
    ]
  },
  {
    "title": "末日巡逻队第三季",
    "href": "detail/movie-1897.html",
    "cover": "97.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧集",
    "genre": "动作, 喜剧, 科幻",
    "category": "动作",
    "description": "时间出了大问题，死去的首席突然出现，而钢骨的身体开始把现实吞噬殆尽。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "DC漫改",
      "超级英雄",
      "怪胎团队",
      "黑色幽默",
      "虚无主义"
    ]
  },
  {
    "title": "微笑俄罗斯娃娃",
    "href": "detail/movie-1898.html",
    "cover": "98.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 政治",
    "category": "励志",
    "description": "政治记者追查一起诡异的政商丑闻，发现真相像俄罗斯套娃，撬开一层还有一层。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "政商黑幕",
      "周刊记者",
      "套娃隐喻",
      "层层反叛"
    ]
  },
  {
    "title": "无情荒地有情天",
    "href": "detail/movie-1899.html",
    "cover": "99.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "爱情 / 剧情 / 灾难",
    "category": "音乐",
    "description": "末世废土上，一个哑女和一个失明男依靠彼此的感官活下去，直到他们发现了一座还开着花的植物园。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "末日",
      "废墟",
      "相依为命",
      "公路爱情",
      "无对白长镜头"
    ]
  },
  {
    "title": "仙履奇缘2：美梦成真",
    "href": "detail/movie-1900.html",
    "cover": "100.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "genre": "动画 / 奇幻 / 家庭",
    "category": "古装",
    "description": "灰姑娘与王子大婚一年后，仙女教母的魔法突然失效，她必须靠自己重新赢得尊重与幸福。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "公主",
      "魔法失效",
      "婚后生活",
      "自我成长"
    ]
  },
  {
    "title": "小迷糊闯七关",
    "href": "detail/movie-1901.html",
    "cover": "101.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "genre": "喜剧、动作、冒险",
    "category": "纪录",
    "description": "重度路痴外卖员误将炸弹当外卖，一夜之间被全城黑帮与警方疯狂追捕。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "乌龙事件",
      "黑帮火拼",
      "废柴逆袭",
      "极速狂奔"
    ]
  },
  {
    "title": "痞子英雄之全面开战",
    "href": "detail/movie-1902.html",
    "cover": "102.jpg",
    "year": "2012",
    "region": "中国台湾",
    "type": "电影",
    "genre": "动作，犯罪",
    "category": "音乐",
    "description": "冲动刑警吴英雄被迫与黑道小头目“痞子”联手，在24小时内阻止一枚脏弹炸毁海港城。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "双雄",
      "爆炸",
      "枪战",
      "警匪",
      "吴英雄"
    ]
  },
  {
    "title": "鲁邦三世：巴比伦黄金传说",
    "href": "detail/movie-1903.html",
    "cover": "103.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "genre": "动作， 喜剧， 冒险",
    "category": "音乐",
    "description": "鲁邦三世这次的目标是巴比伦的黄金印章，但钱形警督发现这次追捕背后隐藏着美苏核弹危机。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "怪盗",
      "古文明",
      "寻宝",
      "次元大介",
      "峰不二子"
    ]
  },
  {
    "title": "阴阳路11：撩鬼攞命",
    "href": "detail/movie-1904.html",
    "cover": "104.jpg",
    "year": "2023",
    "region": "香港",
    "type": "电影",
    "genre": "恐怖 / 惊悚 / 民俗",
    "category": "剧情",
    "description": "网红直播“撩鬼”挑战，每完成一项阴间任务，就能获得百万打赏，但他们都活不过第二天。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "港式恐怖",
      "都市传说",
      "分段式"
    ]
  },
  {
    "title": "幕后之王",
    "href": "detail/movie-1905.html",
    "cover": "105.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "职场 / 剧情 / 悬疑",
    "category": "动作",
    "description": "顶级综艺制作人突然坠楼，她的小助理接过烂摊子，才发现每一集都是杀人游戏。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "综艺制作",
      "职场黑幕",
      "女性成长",
      "行业剧"
    ]
  },
  {
    "title": "深海巨灵大海龟",
    "href": "detail/movie-1906.html",
    "cover": "106.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "genre": "科幻, 灾难, 怪兽",
    "category": "古装",
    "description": "一只沉睡万年的深海巨龟因核废水污染而暴走，它的目标不是城市，而是它被污染了的产卵地。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "特摄",
      "环保",
      "巨型生物",
      "亲情",
      "催泪"
    ]
  },
  {
    "title": "山丘之外",
    "href": "detail/movie-1907.html",
    "cover": "107.jpg",
    "year": "2019",
    "region": "以色列",
    "type": "电影",
    "genre": "战争，剧情",
    "category": "纪录",
    "description": "从戈兰高地退役的狙击手回到城市，发现自己无法融入生活，却又被过去的敌人找上门来。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "狙击手",
      "创伤",
      "老兵"
    ]
  },
  {
    "title": "水俣病",
    "href": "detail/movie-1908.html",
    "cover": "108.jpg",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 社会 / 历史",
    "category": "科幻",
    "description": "1971年，战地摄影师尤金·史密斯带着相机闯入水俣病禁区，用一张照片改变了世界。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "真实事件改编",
      "公害病",
      "纪实摄影",
      "企业与政府共谋",
      "维权斗争"
    ]
  },
  {
    "title": "母与子",
    "href": "detail/movie-1909.html",
    "cover": "109.jpg",
    "year": "2018",
    "region": "伊朗",
    "type": "电影",
    "genre": "剧情， 家庭",
    "category": "纪录",
    "description": "一个叛逆的摇滚青年被迫回到严格穆斯林家庭，照顾患癌的母亲。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "亲情",
      "对抗",
      "救赎"
    ]
  },
  {
    "title": "森林泰山2",
    "href": "detail/movie-1910.html",
    "cover": "110.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 冒险",
    "category": "励志",
    "description": "在城里生活五年后，森林之王乔治带着全家回到丛林，却发现那里变成了收费景区。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "丛林",
      "返祖",
      "环境保护"
    ]
  },
  {
    "title": "对我青春的呼唤",
    "href": "detail/movie-1911.html",
    "cover": "111.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "青春、剧情、校园",
    "category": "科幻",
    "description": "高考前100天，一个学渣收到了学霸同桌的“绝交信”，信上却只有一道没解的数学题。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "高考",
      "暗恋",
      "师生",
      "遗憾",
      "成长"
    ]
  },
  {
    "title": "烙印",
    "href": "detail/movie-1912.html",
    "cover": "112.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "genre": "剧情 / 历史",
    "category": "爱情",
    "description": "奥斯维辛幸存者的孙子，发现爷爷手臂上的编号竟是家族最大的秘密和耻辱。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "二战",
      "纳粹",
      "犹太",
      "身份认同"
    ]
  },
  {
    "title": "辛弃疾铁血传奇",
    "href": "detail/movie-1913.html",
    "cover": "113.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "genre": "历史 / 传记 / 战争",
    "category": "喜剧",
    "description": "词中之龙，亦是万军取首的悍将，揭秘辛弃疾不为人知的二十年沙场喋血与朝堂暗战。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "热血",
      "文人从戎",
      "家国情怀"
    ]
  },
  {
    "title": "跳灰",
    "href": "detail/movie-1914.html",
    "cover": "114.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "犯罪 / 剧情",
    "category": "爱情",
    "description": "一名卧底警察在黑帮卧底八年，终于熬成老大，上司却让他“跳灰”（背叛组织）并永远留在黑道。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "卧底",
      "兄弟情",
      "港产片",
      "写实"
    ]
  },
  {
    "title": "鬼魂出没",
    "href": "detail/movie-1915.html",
    "cover": "115.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "恐怖, 悬疑, 奇幻",
    "category": "音乐",
    "description": "一家深夜电台接听听众真实撞鬼经历，却发现每通电话里的“鬼”都在第二天出现在主播身边。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "都市传说",
      "灵异",
      "规则怪谈",
      "单元剧",
      "细思极恐"
    ]
  },
  {
    "title": "傅满洲的血",
    "href": "detail/movie-1916.html",
    "cover": "116.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "genre": "悬疑 / 恐怖",
    "category": "爱情",
    "description": "一份声称能证明“傅满洲”真实存在过的古老卷轴，将一群亚裔学者引向了伦敦地下一个恐怖的崇拜组织。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "东方主义",
      "殖民反思",
      "邪教",
      "解构"
    ]
  },
  {
    "title": "王牌售车员",
    "href": "detail/movie-1917.html",
    "cover": "117.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "剧情 / 喜剧",
    "category": "励志",
    "description": "一个业绩垫底但永远乐观的二手车销售员，决定用“不卖车”的方式成为王牌。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "职场",
      "销售艺术",
      "底层逆袭",
      "人情味"
    ]
  },
  {
    "title": "恋琴痴凤",
    "href": "detail/movie-1918.html",
    "cover": "118.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情, 历史",
    "category": "励志",
    "description": "民国乱世，一位青楼琴师的琴声能让军阀停战，却唯独唤不醒失忆的爱人；而那把琴，是她用家传古琴谱换来的一个谎言。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "民国乱世",
      "古琴传承",
      "虐恋",
      "家国情怀"
    ]
  },
  {
    "title": "爱情编年史",
    "href": "detail/movie-1919.html",
    "cover": "119.jpg",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "category": "古装",
    "description": "一对恋人在四个不同年代相遇四次，但每一次都因为不同的原因没能走到最后。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "非线性叙事",
      "巴黎",
      "错过的爱",
      "诗意"
    ]
  },
  {
    "title": "狂赌之渊第二季",
    "href": "detail/movie-1920.html",
    "cover": "120.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "genre": "悬疑 / 校园",
    "category": "都市",
    "description": "学生会选举结束，蛇喰梦子发现新任会长背后站着一个“绝对不会输”的神秘赌客。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "赌博",
      "心理战",
      "学生会"
    ]
  },
  {
    "title": "公路之王",
    "href": "detail/movie-1921.html",
    "cover": "121.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "genre": "冒险 / 西部",
    "category": "励志",
    "description": "一名神秘浪荡的卡车司机，在午夜公路上专门惩治违规的“车匪路霸”，其真实身份是消失十年的传奇车王。",
    "rating": 9.7,
    "duration": "43:00",
    "tags": [
      "卡车司机",
      "公路传说",
      "兄弟情",
      "复仇"
    ]
  },
  {
    "title": "建群囧事",
    "href": "detail/movie-1922.html",
    "cover": "122.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "喜剧 / 家庭 / 情景",
    "category": "古装",
    "description": "小区业主群里误发了一条吐槽物业的消息，没想到全楼三百多户都变成了这场“抓内鬼”游戏的玩家。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "微信群",
      "社死",
      "乌龙",
      "邻里",
      "吐槽"
    ]
  },
  {
    "title": "欢喜哥的春天",
    "href": "detail/movie-1923.html",
    "cover": "123.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "剧情, 喜剧",
    "category": "纪录",
    "description": "落魄中年返乡装大款，却被全村人当成了救世主，春天来得太突然。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "东北",
      "返乡",
      "创业",
      "中年",
      "幽默"
    ]
  },
  {
    "title": "从普拉达到纳达",
    "href": "detail/movie-1924.html",
    "cover": "124.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧 / 爱情 / 剧情",
    "category": "剧情",
    "description": "一对富家姐妹花因父亲猝死而一夜赤贫，搬到拉丁裔姨妈家后，开始学着用双手而非信用卡生活。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "姐妹",
      "贫富反转",
      "拉丁裔",
      "成长"
    ]
  },
  {
    "title": "我的美女同桌",
    "href": "detail/movie-1925.html",
    "cover": "125.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧 / 爱情",
    "category": "纪录",
    "description": "校花主动要求和全校倒数第一的学渣做同桌，因为她发现对方的作业本上写着她家破产的秘密。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "校园",
      "女追男",
      "学渣逆袭",
      "爆笑"
    ]
  },
  {
    "title": "生命密码",
    "href": "detail/movie-1926.html",
    "cover": "126.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "科幻悬疑",
    "category": "喜剧",
    "description": "程序员意外破解人类基因源代码，却发现自己只是一段被设计好的“调试程序”。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "基因编辑",
      "伦理困境",
      "近未来"
    ]
  },
  {
    "title": "亲爱的学弟学妹第二季",
    "href": "detail/movie-1927.html",
    "cover": "127.jpg",
    "year": "2025",
    "region": "中国内地",
    "type": "电视剧 / 综艺剧",
    "genre": "校园 / 喜剧 / 青春",
    "category": "音乐",
    "description": "毕业三年后，一群奇葩校友回校“捣乱”，却发现当年的秘密比作业还难解。",
    "rating": 9.9,
    "duration": "57:00",
    "tags": [
      "群像",
      "笑中带泪",
      "成长",
      "社团",
      "反转"
    ]
  },
  {
    "title": "车仔西游记",
    "href": "detail/movie-1928.html",
    "cover": "128.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "喜剧 / 奇幻 / 公路",
    "category": "奇幻",
    "description": "香港网约车司机阿车，某天接到四个奇特乘客：一个自称唐僧的和尚、一只会说人话的柴犬、一个猪头男和一个满脸胡子的壮汉。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "网约车",
      "西游记",
      "现代",
      "师徒",
      "香港"
    ]
  },
  {
    "title": "理发师的情人",
    "href": "detail/movie-1929.html",
    "cover": "129.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "历史",
    "description": "一个中年理发师爱上了每周三下午三点准时来店里洗头的神秘女人，她每次都要求同样的动作，却从不摘下墨镜。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "法式浪漫",
      "理发店",
      "忧郁",
      "美学",
      "忘年恋"
    ]
  },
  {
    "title": "阿Ｑ正传粤语",
    "href": "detail/movie-1930.html",
    "cover": "130.jpg",
    "year": "2028",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情, 历史",
    "category": "励志",
    "description": "用粤语和香港底层视角，全新解构鲁迅笔下阿Q的“精神胜利法”。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "经典改编",
      "方言",
      "精神胜利法"
    ]
  },
  {
    "title": "在阳光下腐烂",
    "href": "detail/movie-1931.html",
    "cover": "131.jpg",
    "year": "2022",
    "region": "法国 / 比利时",
    "type": "电影",
    "genre": "惊悚, 剧情",
    "category": "励志",
    "description": "五名游客被困荒漠，其中一人开始中暑腐烂但意识清醒，其他人面临是否抛弃她的抉择。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "心理恐怖",
      "烈日",
      "人性考验",
      "生存"
    ]
  },
  {
    "title": "超级飞侠第十四季",
    "href": "detail/movie-1932.html",
    "cover": "132.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "动画",
    "genre": "儿童， 教育",
    "category": "喜剧",
    "description": "超级飞侠总部收到来自月球基地的求助信号，乐迪首次冲出地球，开启太空救援。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "机器人",
      "全球文化",
      "解决问题",
      "团队合作",
      "飞行"
    ]
  },
  {
    "title": "天籁人偶",
    "href": "detail/movie-1933.html",
    "cover": "133.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "genre": "科幻, 治愈, 音乐",
    "category": "奇幻",
    "description": "在人类几近灭绝的末日，一个废弃的军用人偶在垃圾场苏醒，她唯一想做的事就是唱歌。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "机娘",
      "末日废土",
      "歌唱",
      "寻找心"
    ]
  },
  {
    "title": "末路爱神",
    "href": "detail/movie-1934.html",
    "cover": "134.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情、剧情、奇幻",
    "category": "历史",
    "description": "患有阿尔茨海默症的老太太，每天都会忘记丈夫已去世，于是丈夫的亡魂每天都要重新追求她一次。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "暮年恋",
      "时间循环",
      "失忆",
      "救赎",
      "催泪"
    ]
  },
  {
    "title": "巴尔干庞克",
    "href": "detail/movie-1935.html",
    "cover": "135.jpg",
    "year": "2024",
    "region": "塞尔维亚",
    "type": "电影",
    "genre": "音乐 / 喜剧 / 剧情",
    "category": "古装",
    "description": "一支塞尔维亚婚礼铜管乐队，为了凑钱去伦敦音乐节，把所有古典名曲都改编成了“巴尔干朋克”。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "朋克",
      "铜管乐队",
      "巴尔干",
      "狂欢",
      "生存"
    ]
  },
  {
    "title": "盗月社食遇记 山村加餐饭",
    "href": "detail/movie-1936.html",
    "cover": "136.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集 / 综艺",
    "genre": "纪录片 / 美食",
    "category": "剧情",
    "description": "美食博主团队走进偏远山村，用当地食材做出五星大餐，给留守儿童加餐。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "山村",
      "美食",
      "公益",
      "真实"
    ]
  },
  {
    "title": "密战峨眉",
    "href": "detail/movie-1937.html",
    "cover": "137.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "genre": "谍战 / 悬疑",
    "category": "纪录",
    "description": "1940年，日军间谍潜入峨眉山，企图炸毁故宫南迁文物中的“镇国之石”，伪装成僧侣的地下党员不得不以佛制敌。",
    "rating": 8.9,
    "duration": "43:00",
    "tags": [
      "民国",
      "僧侣特工",
      "密室谍战",
      "信仰冲突",
      "川西风情"
    ]
  },
  {
    "title": "黑房子",
    "href": "detail/movie-1938.html",
    "cover": "138.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "genre": "恐怖, 悬疑",
    "category": "家庭",
    "description": "为了高额奖金，六个人自愿住进一栋完全黑暗的鬼屋，却在第3天发现屋里的鬼魂似乎只攻击撒谎的人。",
    "rating": 8.6,
    "duration": "115分钟",
    "tags": [
      "密室",
      "心理恐惧",
      "连环杀手",
      "反转"
    ]
  },
  {
    "title": "裸吻",
    "href": "detail/movie-1939.html",
    "cover": "139.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "genre": "剧情、爱情",
    "category": "历史",
    "description": "一位患有极度皮肤接触恐惧症的雕塑家，必须在48小时内完成以“吻”为主题的委托作品。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "身体羞耻",
      "艺术创作",
      "巴黎故事",
      "女性觉醒"
    ]
  },
  {
    "title": "快乐结局",
    "href": "detail/movie-1940.html",
    "cover": "140.jpg",
    "year": "2024",
    "region": "法国 / 奥地利",
    "type": "电影",
    "genre": "剧情, 家庭, 黑色幽默",
    "category": "爱情",
    "description": "富裕家庭人人都在策划完美犯罪，只为得到一场“快乐结局”。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "中产阶级",
      "虚伪",
      "戛纳",
      "冷感",
      "翻拍重制"
    ]
  },
  {
    "title": "尸骨工场",
    "href": "detail/movie-1941.html",
    "cover": "141.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "genre": "恐怖, 科幻",
    "category": "奇幻",
    "description": "在未来，破产的穷人可以将身体租给“工厂”，但没人知道器官摘走后，意识去了哪里。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "人体改造",
      "赛博朋克",
      "血腥"
    ]
  },
  {
    "title": "听不到的说话",
    "href": "detail/movie-1942.html",
    "cover": "142.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "genre": "剧情",
    "category": "喜剧",
    "description": "一个从小被寄养在外的聋哑女孩，在父亲葬礼上第一次通过别人的翻译，听到父亲“说”了一生的沉默告白。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "聋哑人群",
      "父女关系",
      "手语电影"
    ]
  },
  {
    "title": "妖怪合租屋 电影版",
    "href": "detail/movie-1943.html",
    "cover": "143.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "喜剧, 奇幻",
    "category": "喜剧",
    "description": "失意的人类女孩搬进一间合租屋，室友竟然是酒吞童子、玉藻前等一群传说中的妖怪。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "妖怪",
      "合租",
      "治愈"
    ]
  },
  {
    "title": "绿箭侠第五季",
    "href": "detail/movie-1944.html",
    "cover": "144.jpg",
    "year": "2016",
    "region": "美国",
    "type": "剧集",
    "genre": "动作, 冒险",
    "category": "励志",
    "description": "奥利弗在招募新团队时发现，本季的反派正是他五年前在炼狱岛上没能救下的那个人。",
    "rating": 8.8,
    "duration": "36:00",
    "tags": [
      "超级英雄",
      "闪回",
      "复仇"
    ]
  },
  {
    "title": "新蝶恋花",
    "href": "detail/movie-1945.html",
    "cover": "145.jpg",
    "year": "2029",
    "region": "中国大陆",
    "type": "电影",
    "genre": "爱情 / 奇幻",
    "category": "喜剧",
    "description": "梁山伯与祝英台转世到现代上海，却发现这一世的祝英台将要和别人结婚。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "梁祝",
      "现代改编",
      "蝴蝶"
    ]
  },
  {
    "title": "民主万岁",
    "href": "detail/movie-1946.html",
    "cover": "146.jpg",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "genre": "剧情，历史，政治",
    "category": "青春",
    "description": "在总统大选的最后冲刺阶段，竞选经理发现了一场足以颠覆选举结果的惊天阴谋。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "政治讽刺",
      "总统选举",
      "幕后操作"
    ]
  },
  {
    "title": "唐山大兄",
    "href": "detail/movie-1947.html",
    "cover": "147.jpg",
    "year": "1971",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作，剧情",
    "category": "喜剧",
    "description": "冰厂工人发现冰块里冻着尸体，憨厚的唐山青年终于被逼出了愤怒的铁拳。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "李小龙",
      "泰国",
      "冰厂",
      "复仇",
      "功夫"
    ]
  },
  {
    "title": "毒爱2025",
    "href": "detail/movie-1948.html",
    "cover": "148.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电视剧",
    "genre": "爱情 / 复仇 / 狗血",
    "category": "励志",
    "description": "女主被霸总男友下慢性毒药后装作不知情，一边吐血一边谋划了一场完美的反杀。",
    "rating": 9.6,
    "duration": "36:00",
    "tags": [
      "霸总",
      "下毒",
      "失忆",
      "虐恋"
    ]
  },
  {
    "title": "中国出了个毛泽东",
    "href": "detail/movie-1949.html",
    "cover": "149.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "纪录片",
    "genre": "历史，传记",
    "category": "爱情",
    "description": "以青年毛泽东的成长轨迹为主线，用珍贵史料和情景再现，讲述他从韶山冲走向天安门的心路历程。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "伟人",
      "革命",
      "年代",
      "思想"
    ]
  },
  {
    "title": "妖刀传",
    "href": "detail/movie-1950.html",
    "cover": "150.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影 (动画)",
    "genre": "奇幻, 动作",
    "category": "青春",
    "description": "三百年前的妖刀重现人间，持刀者会被刀中的怨灵侵蚀，直至彻底沦为杀戮机器。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "玄幻",
      "刀剑",
      "复仇",
      "宿命",
      "国产动画"
    ]
  },
  {
    "title": "黑蛇",
    "href": "detail/movie-1951.html",
    "cover": "1.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "genre": "恐怖，民俗",
    "category": "科幻",
    "description": "一个程序员在废弃古庙里下载了含有降头术的数据包，从此他的代码能杀死现实中的人。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "降头",
      "诅咒",
      "蛇"
    ]
  },
  {
    "title": "传教士第三季",
    "href": "detail/movie-1952.html",
    "cover": "2.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "奇幻, 恐怖, 冒险",
    "category": "音乐",
    "description": "杰西被拖入地狱，却在地底发现上帝早已被囚禁，而天堂的统治者是堕落天使。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "圣杀者",
      "上帝失格",
      "地狱反击"
    ]
  },
  {
    "title": "破碎的王冠",
    "href": "detail/movie-1953.html",
    "cover": "3.jpg",
    "year": "2022",
    "region": "英国",
    "type": "剧集",
    "genre": "历史， 剧情， 传记",
    "category": "励志",
    "description": "从凯瑟琳·帕尔的视角重述亨利八世晚年，这位善终的王后为了活命，不得不假装臣服于暴君，同时在日记里写下要砍他头。",
    "rating": 8.1,
    "duration": "43:00",
    "tags": [
      "都铎王朝",
      "王室秘辛",
      "女性视角",
      "权力游戏"
    ]
  },
  {
    "title": "阿拉斯加的冒险者",
    "href": "detail/movie-1954.html",
    "cover": "4.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "genre": "冒险 / 生存",
    "category": "奇幻",
    "description": "被陷害的动物学家流落阿拉斯加，与一只受伤的狼组成搭档，寻找回家的路。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "荒野",
      "极地",
      "生存挑战",
      "动物伙伴"
    ]
  },
  {
    "title": "极度冲击",
    "href": "detail/movie-1955.html",
    "cover": "5.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "动作，科幻",
    "category": "都市",
    "description": "一名快递员在遭遇粒子对撞机爆炸后，发现自己只要被吓到就会引发相当于十吨TNT当量的爆炸。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "超能力",
      "灾难",
      "反英雄",
      "高速"
    ]
  },
  {
    "title": "女人怎么想",
    "href": "detail/movie-1956.html",
    "cover": "6.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "genre": "喜剧 / 爱情 / 科幻",
    "category": "励志",
    "description": "直男癌程序员发明了“读女心”芯片，却发现自己根本承受不了女友大脑里每秒八百字的真实想法。",
    "rating": 9.2,
    "duration": "36:00",
    "tags": [
      "读心术",
      "性别大战",
      "职场",
      "讽刺",
      "脑洞"
    ]
  },
  {
    "title": "落红",
    "href": "detail/movie-1957.html",
    "cover": "7.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "悬疑， 古装",
    "category": "喜剧",
    "description": "嘉庆年间，紫禁城绣坊接连发生宫女失踪案，每一具尸体旁都留有一朵血色牡丹刺绣。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "清朝",
      "深宫",
      "刺绣",
      "复仇"
    ]
  },
  {
    "title": "孤单的豌豆",
    "href": "detail/movie-1958.html",
    "cover": "8.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "genre": "剧情 / 家庭",
    "category": "音乐",
    "description": "一个患有自闭症的小女孩，用一颗豌豆改变了整个破碎的家庭。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "自闭症",
      "母女",
      "成长"
    ]
  },
  {
    "title": "新月",
    "href": "detail/movie-1959.html",
    "cover": "9.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 科幻",
    "category": "青春",
    "description": "在月球采冰的工人，意外发现了一台能播放地球已故亲人记忆的旧电脑。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "月球",
      "太空",
      "伦理",
      "治愈"
    ]
  },
  {
    "title": "出水芙蓉国语",
    "href": "detail/movie-1960.html",
    "cover": "10.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "genre": "歌舞 / 喜剧",
    "category": "奇幻",
    "description": "五个破产中年大叔为还债组建男子花样游泳队，目标是乡镇春晚。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "花样游泳",
      "中年大叔",
      "逆袭"
    ]
  },
  {
    "title": "朋友的妻子",
    "href": "detail/movie-1961.html",
    "cover": "11.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "genre": "悬疑, 剧情",
    "category": "历史",
    "description": "被朋友拜托“照顾妻子”三个月后，我发现自己爱上了她，而朋友根本没有出过差。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "不伦",
      "复仇",
      "交换杀人",
      "反转"
    ]
  },
  {
    "title": "老公去哪了",
    "href": "detail/movie-1962.html",
    "cover": "12.jpg",
    "year": "2028",
    "region": "中国内地",
    "type": "电视剧",
    "genre": "悬疑，剧情，家庭",
    "category": "古装",
    "description": "全职太太的模范丈夫突然失踪，她顺着线索找去，却发现老公是顶流主播的“榜一大哥”，而主播也是男人。",
    "rating": 9.4,
    "duration": "50:00",
    "tags": [
      "失踪",
      "高概念",
      "女性觉醒",
      "秘密"
    ]
  },
  {
    "title": "银色假面",
    "href": "detail/movie-1963.html",
    "cover": "13.jpg",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "genre": "科幻, 惊悚",
    "category": "历史",
    "description": "一款能让你“成为任何人”的社交面具APP大火后，用户开始一个接一个地“变成”同一个人。",
    "rating": 9.1,
    "duration": "115分钟",
    "tags": [
      "AI换脸",
      "身份盗用",
      "数字永生"
    ]
  },
  {
    "title": "苏亚梦游仙境",
    "href": "detail/movie-1964.html",
    "cover": "14.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "genre": "奇幻 / 悬疑 / 剧情",
    "category": "奇幻",
    "description": "10岁女孩苏亚每晚做梦都会进入同一个奇幻世界，而那个世界的反派长得像她死去的爸爸。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "梦境穿越",
      "父女亲情",
      "记忆迷宫"
    ]
  },
  {
    "title": "海贼王女",
    "href": "detail/movie-1965.html",
    "cover": "15.jpg",
    "year": "2021",
    "region": "日本",
    "type": "动画剧集",
    "genre": "动作 / 冒险 / 奇幻",
    "category": "音乐",
    "description": "被囚禁在孤岛上的少女，为解开身世之谜，率领一群武士后裔扬帆出海。",
    "rating": 8.5,
    "duration": "43:00",
    "tags": [
      "女版海贼",
      "复仇与身世之谜",
      "和风美学",
      "自由航行"
    ]
  },
  {
    "title": "失身的少女",
    "href": "detail/movie-1966.html",
    "cover": "16.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "genre": "剧情，悬疑",
    "category": "纪录",
    "description": "高三女生报案称被同学性侵，但警方调查发现，她所说的“失身之夜”，她其实不在现场。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "校园",
      "性侵",
      "反转",
      "社会派"
    ]
  },
  {
    "title": "劫命救护",
    "href": "detail/movie-1967.html",
    "cover": "17.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "category": "奇幻",
    "description": "前赛车手为了给女儿筹钱治病，被迫开着救护车抢劫运钞车，却发现后座还躺着一个需要抢救的心脏病患。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "飙车救援",
      "限时任务",
      "反英雄"
    ]
  },
  {
    "title": "爱情图鉴之暗恋",
    "href": "detail/movie-1968.html",
    "cover": "18.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "genre": "爱情, 剧情",
    "category": "古装",
    "description": "一份尘封15年的同学录，牵扯出五个家庭三代人交织错过的暗恋故事。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "暗恋",
      "青春",
      "遗憾",
      "书信",
      "久别重逢"
    ]
  },
  {
    "title": "亲密访客",
    "href": "detail/movie-1969.html",
    "cover": "19.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "悬疑 / 惊悚",
    "category": "音乐",
    "description": "妻子出差后，丈夫的地下车库里住进了一个自称是她弟弟的神秘男人。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "室内博弈",
      "身份互换",
      "反转密集",
      "心理战"
    ]
  },
  {
    "title": "潮童假期",
    "href": "detail/movie-1970.html",
    "cover": "20.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "喜剧, 儿童, 公路",
    "category": "科幻",
    "description": "一个卷王夏令营因大巴开错路，十几个小学生被迫在荒野生存七天。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "小学生",
      "夏令营",
      "代际冲突",
      "荒诞"
    ]
  },
  {
    "title": "冷酷威龙",
    "href": "detail/movie-1971.html",
    "cover": "21.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作， 喜剧， 警匪",
    "category": "悬疑",
    "description": "警校最冷酷的优等生被派去黑帮卧底，结果发现黑帮老大是个重度社恐，而整个帮派唯一的业务竟然是卖奶茶。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "卧底",
      "黑帮",
      "反差萌",
      "无厘头"
    ]
  },
  {
    "title": "舌害",
    "href": "detail/movie-1972.html",
    "cover": "22.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电视剧",
    "genre": "剧情，职场",
    "category": "都市",
    "description": "一个毒舌自媒体小编阴差阳错成为顶流明星的公关，两人联手对抗背后的“黑嘴帝国”。",
    "rating": 8.4,
    "duration": "36:00",
    "tags": [
      "媒体",
      "公关",
      "黑公关",
      "女性成长"
    ]
  },
  {
    "title": "一刀风月",
    "href": "detail/movie-1973.html",
    "cover": "23.jpg",
    "year": "2027",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 爱情 / 武侠",
    "category": "动作",
    "description": "江南第一刀客隐姓埋名藏身青楼当杂役，却为了一个清倌人重新拔刀，血洗金陵。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "刀客",
      "风月场所",
      "禁忌恋",
      "暴力美学"
    ]
  },
  {
    "title": "盲心千金",
    "href": "detail/movie-1974.html",
    "cover": "24.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "短剧/网络剧",
    "genre": "爱情，悬疑，复仇",
    "category": "奇幻",
    "description": "失明十年的千金小姐换心手术后重见光明，却发现救自己的心脏来源竟另有阴谋。",
    "rating": 9.8,
    "duration": "50:00",
    "tags": [
      "失明",
      "替身",
      "豪门恩怨"
    ]
  },
  {
    "title": "孩子们都很好",
    "href": "detail/movie-1975.html",
    "cover": "25.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "genre": "剧情 / 家庭 / 伦理",
    "category": "科幻",
    "description": "一对通过代孕生育的双胞胎兄妹成年后，发现自己的亲生母亲是父亲的前女友，而父亲是深柜。",
    "rating": 9.5,
    "duration": "57:00",
    "tags": [
      "代孕子女寻亲",
      "中产困境",
      "多元家庭"
    ]
  },
  {
    "title": "上海滩喋血枭雄",
    "href": "detail/movie-1976.html",
    "cover": "26.jpg",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "genre": "动作、历史、帮派",
    "category": "悬疑",
    "description": "1935年上海法租界，两名从小长大的孤儿分别成为巡捕房华探长和青帮红棍。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "民国",
      "法租界",
      "枪战",
      "兄弟反目"
    ]
  },
  {
    "title": "忧罗娜传奇",
    "href": "detail/movie-1977.html",
    "cover": "27.jpg",
    "year": "2023",
    "region": "美国 / 墨西哥",
    "type": "电影",
    "genre": "恐怖 / 惊悚 / 民俗",
    "category": "励志",
    "description": "一名失去孩子的单亲妈妈，发现自己无意中唤醒了美洲最恐怖的溺亡女鬼——忧罗娜。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "都市传说",
      "泣鬼",
      "拉丁裔",
      "水边诅咒"
    ]
  },
  {
    "title": "自私的医生",
    "href": "detail/movie-1978.html",
    "cover": "28.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "genre": "剧情, 医疗, 伦理",
    "category": "奇幻",
    "description": "天才外科医生为了救自己的女儿，不惜利用职务之便操纵器官移植名单，甚至亲手制造“必要的死亡”。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "反英雄",
      "器官移植",
      "黑市交易",
      "人性拷问"
    ]
  },
  {
    "title": "小杜丽",
    "href": "detail/movie-1979.html",
    "cover": "29.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "genre": "剧情 / 历史",
    "category": "家庭",
    "description": "在债务监狱里长大的小杜丽，用最卑微的出身，撬动了整个伦敦上流社会的伪善。",
    "rating": 8.3,
    "duration": "57:00",
    "tags": [
      "狄更斯改编",
      "债务监狱",
      "阶级鸿沟"
    ]
  },
  {
    "title": "玉楼春梦",
    "href": "detail/movie-1980.html",
    "cover": "30.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "genre": "古装, 悬疑, 爱情",
    "category": "励志",
    "description": "一位民国女画家发现自己笔下的每一幅画，都会变成一场真实发生的谋杀案。",
    "rating": 8.0,
    "duration": "36:00",
    "tags": [
      "梦境探案",
      "民国奇情",
      "双世记忆",
      "家国恩怨"
    ]
  },
  {
    "title": "汤姆猫与杰利鼠",
    "href": "detail/movie-1981.html",
    "cover": "31.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 动画, 家庭",
    "category": "音乐",
    "description": "当汤姆与杰利闯入一家濒临倒闭的复古大酒店，它们的战争将决定所有人的命运。",
    "rating": 9.7,
    "duration": "93分钟",
    "tags": [
      "经典",
      "真人动画",
      "闹剧",
      "怀旧"
    ]
  },
  {
    "title": "全面攻占3：天使救援",
    "href": "detail/movie-1982.html",
    "cover": "32.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "genre": "动作 / 惊悚",
    "category": "青春",
    "description": "总统专机被黑客劫持，退役特工必须在万米高空完成不可能的天使救援。",
    "rating": 9.4,
    "duration": "104分钟",
    "tags": [
      "极限反恐",
      "孤胆英雄",
      "密室逃生"
    ]
  },
  {
    "title": "明日不再",
    "href": "detail/movie-1983.html",
    "cover": "33.jpg",
    "year": "2025",
    "region": "德国 / 奥地利",
    "type": "剧集",
    "genre": "科幻 / 剧情 / 悬疑",
    "category": "爱情",
    "description": "全世界只有一个人能感知到时间循环，而每一次循环结束，世界都会比上一次更糟。",
    "rating": 9.1,
    "duration": "57:00",
    "tags": [
      "时间循环",
      "末日",
      "预知",
      "抉择",
      "救赎"
    ]
  },
  {
    "title": "彩虹在我的胸膛",
    "href": "detail/movie-1984.html",
    "cover": "34.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "剧情， 同性",
    "category": "历史",
    "description": "父亲葬礼上，三兄妹各自带回伴侣，其中两人带的是同性伴侣，而遗嘱要求“必须有孙”才能分家产。",
    "rating": 8.8,
    "duration": "126分钟",
    "tags": [
      "彩虹",
      "家族",
      "出柜",
      "和解"
    ]
  },
  {
    "title": "告白实行委员会：告白预演",
    "href": "detail/movie-1985.html",
    "cover": "35.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "genre": "动画 / 爱情 / 喜剧",
    "category": "纪录",
    "description": "樱花庄的七名高中生成立了“告白实行委员会”，帮别人告白，自己却个个不敢爱。",
    "rating": 8.5,
    "duration": "82分钟",
    "tags": [
      "青春",
      "校园",
      "音乐",
      "纯爱",
      "偶像声优"
    ]
  },
  {
    "title": "恶女杀狠大",
    "href": "detail/movie-1986.html",
    "cover": "36.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "genre": "动作、犯罪、黑色幽默",
    "category": "音乐",
    "description": "顶级女杀手隐退后沦为被PUA的普通社畜，当她决定用杀人手法解决职场霸凌，画风突变了。",
    "rating": 8.2,
    "duration": "93分钟",
    "tags": [
      "女杀手",
      "职场喜剧",
      "反套路",
      "爽片"
    ]
  },
  {
    "title": "如何阻止强盗",
    "href": "detail/movie-1987.html",
    "cover": "37.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "喜剧, 犯罪, 动作",
    "category": "青春",
    "description": "三个笨贼闯入一所房子，却绝望地发现屋主是个沉迷《小鬼当家》的偏执狂发明家。",
    "rating": 9.9,
    "duration": "104分钟",
    "tags": [
      "笨贼",
      "反杀",
      "机关陷阱",
      "爆米花"
    ]
  },
  {
    "title": "罗马帝国艳情史2",
    "href": "detail/movie-1988.html",
    "cover": "38.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "genre": "历史、情色、剧情",
    "category": "历史",
    "description": "聚焦罗马帝国荒淫暴君的一生，第二部讲述他在火山灰掩埋庞贝前夕的终极狂欢与背叛。",
    "rating": 9.6,
    "duration": "115分钟",
    "tags": [
      "罗马帝国",
      "大尺度",
      "历史改编",
      "权力游戏",
      "续作"
    ]
  },
  {
    "title": "红杏",
    "href": "detail/movie-1989.html",
    "cover": "39.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "genre": "爱情, 伦理",
    "category": "爱情",
    "description": "丈夫长期出差的全职太太与隔壁的失业画家发生了关系，但她不知道画家是丈夫雇来测试她的。",
    "rating": 9.3,
    "duration": "126分钟",
    "tags": [
      "出轨",
      "女性视角",
      "90年代港片",
      "细腻"
    ]
  },
  {
    "title": "奥兰多·布鲁姆：边缘行走",
    "href": "detail/movie-1990.html",
    "cover": "40.jpg",
    "year": "2028",
    "region": "英国",
    "type": "电影",
    "genre": "纪录片, 冒险",
    "category": "悬疑",
    "description": "奥兰多·布鲁姆放下精灵王子身份，独自徒步走完英国最危险的悬崖海岸线。",
    "rating": 9.0,
    "duration": "82分钟",
    "tags": [
      "真实",
      "徒步",
      "荒野",
      "人生"
    ]
  },
  {
    "title": "非对称较量",
    "href": "detail/movie-1991.html",
    "cover": "41.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "剧情, 悬疑, 犯罪",
    "category": "奇幻",
    "description": "一个顶尖数学天才与一个失明警探，在看不见的维度里进行一场生死博弈。",
    "rating": 8.7,
    "duration": "93分钟",
    "tags": [
      "高智商犯罪",
      "双雄对决",
      "反转",
      "心理博弈"
    ]
  },
  {
    "title": "超速拦截",
    "href": "detail/movie-1992.html",
    "cover": "42.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "genre": "动作 / 犯罪",
    "category": "家庭",
    "description": "被迫运送赃款的前赛车手，发现后座上绑着的竟是自己的缉毒警哥哥。",
    "rating": 8.4,
    "duration": "104分钟",
    "tags": [
      "飙车",
      "兄弟情",
      "卧底",
      "极限追捕"
    ]
  },
  {
    "title": "隨懿深度行",
    "href": "detail/movie-1993.html",
    "cover": "43.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "综艺",
    "genre": "真人秀 / 人文 / 旅行",
    "category": "悬疑",
    "description": "每晚凌晨两点，主持人与一位神秘嘉宾在香港最不起眼的街角，遇见这座城市真正的灵魂。",
    "rating": 8.1,
    "duration": "115分钟",
    "tags": [
      "香港",
      "深度游",
      "素人故事",
      "城市文化",
      "夜行"
    ]
  },
  {
    "title": "借王",
    "href": "detail/movie-1994.html",
    "cover": "44.jpg",
    "year": "2023",
    "region": "香港",
    "type": "电影",
    "genre": "犯罪 / 动作",
    "category": "都市",
    "description": "金融精英为调查好友之死伪装成借贷者，发现全港最大的“债王”竟是一个从不开口说话的老人。",
    "rating": 9.8,
    "duration": "126分钟",
    "tags": [
      "高利贷",
      "卧底",
      "反套路",
      "港产片"
    ]
  },
  {
    "title": "刺激",
    "href": "detail/movie-1995.html",
    "cover": "45.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "genre": "犯罪/动作/悬疑",
    "category": "家庭",
    "description": "一名过气网红被绑架，绑匪要求他开直播，只要观众打赏金额达到一千万就撕票，结果打赏越多他越安全。",
    "rating": 9.5,
    "duration": "82分钟",
    "tags": [
      "直播",
      "绑架",
      "网络暴力",
      "极限反杀"
    ]
  },
  {
    "title": "克罗切特和水贼",
    "href": "detail/movie-1996.html",
    "cover": "46.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "genre": "西部、动作",
    "category": "科幻",
    "description": "德克萨斯骑警克罗切特追查杀害妻子的水贼，却发现对方正用偷来的水在干旱小镇收买人心。",
    "rating": 9.2,
    "duration": "93分钟",
    "tags": [
      "西部拓荒",
      "水贼",
      "复仇",
      "枪战",
      "义警"
    ]
  },
  {
    "title": "杀妻记",
    "href": "detail/movie-1997.html",
    "cover": "47.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "genre": "犯罪 / 惊悚",
    "category": "动作",
    "description": "丈夫雇凶杀妻的完美计划全部落空，因为妻子同时雇了同一批杀手干掉他。",
    "rating": 8.9,
    "duration": "104分钟",
    "tags": [
      "婚姻骗局",
      "反转不断",
      "高智商博弈",
      "黑色幽默"
    ]
  },
  {
    "title": "幻影人",
    "href": "detail/movie-1998.html",
    "cover": "48.jpg",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "genre": "科幻， 悬疑",
    "category": "喜剧",
    "description": "一觉醒来，所有人都说你是三年前牺牲的特工，但你清楚记得自己只是个卖保险的。",
    "rating": 8.6,
    "duration": "50:00",
    "tags": [
      "虚拟现实",
      "身份",
      "记忆",
      "动作",
      "AI"
    ]
  },
  {
    "title": "鲁卜哈利沙漠：非洲的女人",
    "href": "detail/movie-1999.html",
    "cover": "49.jpg",
    "year": "2027",
    "region": "沙特阿拉伯/南非",
    "type": "电影",
    "genre": "冒险，剧情",
    "category": "纪录",
    "description": "一位南非白人女性继承了来自贝都因人的神秘遗产，她必须穿越“空域”沙漠，找到一口被黄沙吞没的井。",
    "rating": 8.3,
    "duration": "126分钟",
    "tags": [
      "女性",
      "沙漠",
      "寻根"
    ]
  },
  {
    "title": "浪子情波",
    "href": "detail/movie-2000.html",
    "cover": "50.jpg",
    "year": "1969",
    "region": "台湾",
    "type": "电影",
    "genre": "爱情 / 剧情",
    "category": "爱情",
    "description": "风流船长的归来，在平静渔村掀起了爱情与愧疚的滔天巨浪。",
    "rating": 8.0,
    "duration": "82分钟",
    "tags": [
      "台语片",
      "三角恋",
      "浪子回头"
    ]
  }
];
