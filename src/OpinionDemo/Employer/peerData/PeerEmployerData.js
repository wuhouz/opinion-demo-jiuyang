const data = [
    {
        "name": "兴奋",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 18,
        "r": 23.2,
        "x": 40,
        "y": -2.81
    },
    {
        "name": "盈利",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 14,
        "r": 21.84,
        "x": 45.33,
        "y": 55.77
    },
    {
        "name": "有趣",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 12,
        "r": 21,
        "x": 42.67,
        "y": -32.93
    },
    {
        "name": "节约",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 12,
        "r": 21,
        "x": 21.33,
        "y": 10.26
    },
    {
        "name": "怀疑",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 12,
        "r": 21,
        "x": -29.33,
        "y": 6.94
    },
    {
        "name": "奖励",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 11,
        "r": 20.53,
        "x": 48,
        "y": -16.26
    },
    {
        "name": "值钱",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 11,
        "r": 20.53,
        "x": 34.67,
        "y": 31.31
    },
    {
        "name": "不爽",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 11,
        "r": 20.53,
        "x": -56,
        "y": -8.62
    },
    {
        "name": "贡献",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 11,
        "r": 20.53,
        "x": 18.67,
        "y": -13.42
    },
    {
        "name": "牛逼",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 10,
        "r": 20.02,
        "x": 48,
        "y": -29.88
    },
    {
        "name": "失望",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 10,
        "r": 20.02,
        "x": -37.33,
        "y": 38.72
    },
    {
        "name": "困难",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 10,
        "r": 20.02,
        "x": -37.33,
        "y": -57.13
    },
    {
        "name": "扩张",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 10,
        "r": 20.02,
        "x": 32,
        "y": 37.57
    },
    {
        "name": "领军",
        "division": "行业",
        "type": "#3cb371",
        "count": 9,
        "r": 19.44,
        "x": 45.33,
        "y": 20.49
    },
    {
        "name": "裁员",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 9,
        "r": 19.44,
        "x": -32,
        "y": 34.88
    },
    {
        "name": "讨厌",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 9,
        "r": 19.44,
        "x": -29.33,
        "y": -13.68
    },
    {
        "name": "唯利是图",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 9,
        "r": 19.44,
        "x": -53.33,
        "y": -73.9
    },
    {
        "name": "有钱",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 8,
        "r": 18.8,
        "x": 29.33,
        "y": 44.32
    },
    {
        "name": "失业",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 8,
        "r": 18.8,
        "x": -45.33,
        "y": -6.91
    },
    {
        "name": "破产",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 8,
        "r": 18.8,
        "x": -64,
        "y": 0.3
    },
    {
        "name": "脚踏实地",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 8,
        "r": 18.8,
        "x": 48,
        "y": -72.05
    },
    {
        "name": "死掉",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 8,
        "r": 18.8,
        "x": -61.33,
        "y": -13.99
    },
    {
        "name": "死亡",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 8,
        "r": 18.8,
        "x": -66.67,
        "y": -0.3
    },
    {
        "name": "友好",
        "originDivision": "同事",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 7,
        "r": 18.08,
        "x": 42.67,
        "y": 13.18
    },
    {
        "name": "景气",
        "division": "行业",
        "type": "#3cb371",
        "count": 7,
        "r": 18.08,
        "x": 45.33,
        "y": 66.7
    },
    {
        "name": "忽悠",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 7,
        "r": 18.08,
        "x": -26.67,
        "y": 7.71
    },
    {
        "name": "懒",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 7,
        "r": 18.08,
        "x": -45.33,
        "y": -2.72
    },
    {
        "name": "着想",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 6,
        "r": 17.24,
        "x": 32,
        "y": 66.08
    },
    {
        "name": "乱",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 6,
        "r": 17.24,
        "x": -56,
        "y": -17.9
    },
    {
        "name": "加工资",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 6,
        "r": 17.24,
        "x": 53.33,
        "y": -66.37
    },
    {
        "name": "绝望",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 6,
        "r": 17.24,
        "x": -66.67,
        "y": -4.84
    },
    {
        "name": "枯燥",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 6,
        "r": 17.24,
        "x": -34.67,
        "y": 56.27
    },
    {
        "name": "认真",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 6,
        "r": 17.24,
        "x": 40,
        "y": 57.78
    },
    {
        "name": "遗憾",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 6,
        "r": 17.24,
        "x": -29.33,
        "y": -21.32
    },
    {
        "name": "萎缩",
        "originDivision": "市场",
        "division": "行业",
        "type": "#3cb371",
        "count": 6,
        "r": 17.24,
        "x": -37.33,
        "y": 19.39
    },
    {
        "name": "逼疯",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 6,
        "r": 17.24,
        "x": -66.67,
        "y": -66.37
    },
    {
        "name": "上榜",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 6,
        "r": 17.24,
        "x": 37.33,
        "y": 9.22
    },
    {
        "name": "放松",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 6,
        "r": 17.24,
        "x": 32,
        "y": 5.86
    },
    {
        "name": "差异化",
        "division": "产品",
        "type": "#ff6666",
        "count": 6,
        "r": 17.24,
        "x": 16,
        "y": 13.26
    },
    {
        "name": "听话",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 6,
        "r": 17.24,
        "x": 8,
        "y": -17.9
    },
    {
        "name": "嘲笑",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 6,
        "r": 17.24,
        "x": -32,
        "y": 9.22
    },
    {
        "name": "友善",
        "originDivision": "同事",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 6,
        "r": 17.24,
        "x": 42.67,
        "y": 47.33
    },
    {
        "name": "孤独",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 6,
        "r": 17.24,
        "x": -34.67,
        "y": 1.67
    },
    {
        "name": "尴尬",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 6,
        "r": 17.24,
        "x": -26.67,
        "y": 13.18
    },
    {
        "name": "心寒",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 6,
        "r": 17.24,
        "x": -40,
        "y": 41.13
    },
    {
        "name": "极致",
        "division": "产品",
        "type": "#ff6666",
        "count": 5,
        "r": 16.25,
        "x": 37.33,
        "y": -48.51
    },
    {
        "name": "忍受",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 5,
        "r": 16.25,
        "x": -24,
        "y": 60.74
    },
    {
        "name": "能干",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 5,
        "r": 16.25,
        "x": 53.33,
        "y": -16.64
    },
    {
        "name": "反感",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 5,
        "r": 16.25,
        "x": -26.67,
        "y": 17.3
    },
    {
        "name": "物美价廉",
        "division": "产品",
        "type": "#ff6666",
        "count": 5,
        "r": 16.25,
        "x": 42.67,
        "y": -63.03
    },
    {
        "name": "挣钱",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 5,
        "r": 16.25,
        "x": 45.33,
        "y": 40.77
    },
    {
        "name": "焦虑",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 5,
        "r": 16.25,
        "x": -26.67,
        "y": -13.91
    },
    {
        "name": "靠谱",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 5,
        "r": 16.25,
        "x": 32,
        "y": 51.32
    },
    {
        "name": "单一",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 5,
        "r": 16.25,
        "x": -8,
        "y": 16.84
    },
    {
        "name": "忠诚",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 5,
        "r": 16.25,
        "x": 45.33,
        "y": 5.23
    },
    {
        "name": "怨天尤人",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 5,
        "r": 16.25,
        "x": -48,
        "y": -90
    },
    {
        "name": "懈怠",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 5,
        "r": 16.25,
        "x": -29.33,
        "y": -26.31
    },
    {
        "name": "领头羊",
        "division": "行业",
        "type": "#3cb371",
        "count": 4,
        "r": 15.04,
        "x": 48,
        "y": 38.69
    },
    {
        "name": "不靠谱",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": -53.33,
        "y": 5.55
    },
    {
        "name": "不安",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": -24,
        "y": -14.79
    },
    {
        "name": "留不住",
        "originDivision": "人才",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": -29.33,
        "y": 4.71
    },
    {
        "name": "受伤",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": -40,
        "y": -19.9
    },
    {
        "name": "垮",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 4,
        "r": 15.04,
        "x": -58.67,
        "y": -40.38
    },
    {
        "name": "垮掉",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 4,
        "r": 15.04,
        "x": -58.67,
        "y": -16.62
    },
    {
        "name": "待遇好",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 4,
        "r": 15.04,
        "x": 42.67,
        "y": 7.76
    },
    {
        "name": "温暖",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": 53.33,
        "y": 10.33
    },
    {
        "name": "幸福",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": 58.67,
        "y": 38
    },
    {
        "name": "平易近人",
        "originDivision": "领导",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": 45.33,
        "y": -10.54
    },
    {
        "name": "衰落",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 4,
        "r": 15.04,
        "x": -34.67,
        "y": 12.95
    },
    {
        "name": "和善",
        "originDivision": "领导",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": 45.33,
        "y": 15.25
    },
    {
        "name": "心痛",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": -42.67,
        "y": -33.93
    },
    {
        "name": "可怜",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": -26.67,
        "y": -27.66
    },
    {
        "name": "翘楚",
        "division": "行业",
        "type": "#3cb371",
        "count": 4,
        "r": 15.04,
        "x": 48,
        "y": 41.86
    },
    {
        "name": "不忠",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 4,
        "r": 15.04,
        "x": -42.67,
        "y": -90
    },
    {
        "name": "恶劣",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 4,
        "r": 15.04,
        "x": -45.33,
        "y": 46.2
    },
    {
        "name": "自私",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": -50.67,
        "y": -56.45
    },
    {
        "name": "放心",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": 34.67,
        "y": 58.92
    },
    {
        "name": "过硬",
        "division": "产品",
        "type": "#ff6666",
        "count": 4,
        "r": 15.04,
        "x": 45.33,
        "y": 10.93
    },
    {
        "name": "进取",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": 45.33,
        "y": 21.49
    },
    {
        "name": "迷失",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": -40,
        "y": 8.91
    },
    {
        "name": "洗脑",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 4,
        "r": 15.04,
        "x": -53.33,
        "y": 41.86
    },
    {
        "name": "犯错",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 4,
        "r": 15.04,
        "x": -32,
        "y": -90
    },
    {
        "name": "逃离",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": -45.33,
        "y": -19.9
    },
    {
        "name": "自律",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 4,
        "r": 15.04,
        "x": 42.67,
        "y": -40.38
    },
    {
        "name": "乏味",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 4,
        "r": 15.04,
        "x": -10.67,
        "y": 23.24
    },
    {
        "name": "压抑",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 4,
        "r": 15.04,
        "x": -29.33,
        "y": 5.55
    },
    {
        "name": "繁忙",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 4,
        "r": 15.04,
        "x": -13.33,
        "y": -27.66
    },
    {
        "name": "诚恳",
        "originDivision": "态度",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": 42.67,
        "y": -56.45
    },
    {
        "name": "牛",
        "originDivision": "技术",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 4,
        "r": 15.04,
        "x": 61.33,
        "y": -6.35
    },
    {
        "name": "丢失",
        "originDivision": "数据",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 4,
        "r": 15.04,
        "x": -24,
        "y": -19.9
    },
    {
        "name": "泄露",
        "originDivision": "数据",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 4,
        "r": 15.04,
        "x": -40,
        "y": -24.11
    },
    {
        "name": "倒挂",
        "originDivision": "薪酬",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 4,
        "r": 15.04,
        "x": -34.67,
        "y": -90
    },
    {
        "name": "吝啬",
        "originDivision": "薪酬",
        "division": "企业",
        "type": "rgb(252, 196, 38)",
        "count": 4,
        "r": 15.04,
        "x": -42.67,
        "y": -90
    },
    {
        "name": "乐观",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": 50.67,
        "y": -30.97
    },
    {
        "name": "肝胆相照",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 4,
        "r": 15.04,
        "x": 37.33,
        "y": -90
    },
    {
        "name": "端正",
        "originDivision": "领导",
        "division": "人",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 15.04,
        "x": 37.33,
        "y": -90
    },
    {
        "x": -35,
        "y": -82,
        "r": 2,
        "type": "rgb(252, 196, 38)",
        "name": ""
    },
    {
        "x": -21,
        "y": 9,
        "r": 3,
        "type": "rgb(249, 79, 133)",
        "name": ""
    },
    {
        "x": -13,
        "y": -81,
        "r": 2,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": -47,
        "y": 6,
        "r": 3,
        "type": "rgb(249, 79, 133)",
        "name": ""
    },
    {
        "x": 19,
        "y": -26,
        "r": 2,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": 45,
        "y": 20,
        "r": 4,
        "type": "rgb(252, 196, 38)",
        "name": ""
    },
    {
        "x": 1,
        "y": -84,
        "r": 3,
        "type": "rgb(249, 79, 133)",
        "name": ""
    },
    {
        "x": -37,
        "y": 32,
        "r": 3,
        "type": "rgb(252, 196, 38)",
        "name": ""
    },
    {
        "x": 53,
        "y": 72,
        "r": 2,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": -58,
        "y": 43,
        "r": 4,
        "type": "rgb(249, 79, 133)",
        "name": ""
    },
    {
        "x": -3,
        "y": -63,
        "r": 2,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": 86,
        "y": -34,
        "r": 4,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": 23,
        "y": 33,
        "r": 4,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": 14,
        "y": 30,
        "r": 5,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": -32,
        "y": 10,
        "r": 3,
        "type": "rgb(252, 196, 38)",
        "name": ""
    },
    {
        "x": 12,
        "y": -63,
        "r": 4,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": 38,
        "y": 35,
        "r": 3,
        "type": "rgb(252, 196, 38)",
        "name": ""
    },
    {
        "x": -75,
        "y": 48,
        "r": 4,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": 4,
        "y": 51,
        "r": 2,
        "type": "rgb(252, 196, 38)",
        "name": ""
    },
    {
        "x": -8,
        "y": 59,
        "r": 3,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": 64,
        "y": 73,
        "r": 4,
        "type": "rgb(249, 79, 133)",
        "name": ""
    },
    {
        "x": -55,
        "y": 85,
        "r": 5,
        "type": "rgb(249, 79, 133)",
        "name": ""
    },
    {
        "x": -67,
        "y": -85,
        "r": 4,
        "type": "rgb(249, 79, 133)",
        "name": ""
    },
    {
        "x": 72,
        "y": -31,
        "r": 3,
        "type": "rgb(249, 79, 133)",
        "name": ""
    },
    {
        "x": -81,
        "y": 30,
        "r": 3,
        "type": "rgb(249, 79, 133)",
        "name": ""
    },
    {
        "x": -85,
        "y": -82,
        "r": 3,
        "type": "rgb(249, 79, 133)",
        "name": ""
    },
    {
        "x": -33,
        "y": -66,
        "r": 3,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": 79,
        "y": -41,
        "r": 3,
        "type": "rgb(252, 196, 38)",
        "name": ""
    },
    {
        "x": -12,
        "y": -56,
        "r": 4,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": 45,
        "y": -11,
        "r": 2,
        "type": "rgb(249, 79, 133)",
        "name": ""
    },
    {
        "x": 73,
        "y": 88,
        "r": 3,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": -13,
        "y": 45,
        "r": 4,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": -86,
        "y": 4,
        "r": 4,
        "type": "rgb(249, 79, 133)",
        "name": ""
    }
]

export default data;

