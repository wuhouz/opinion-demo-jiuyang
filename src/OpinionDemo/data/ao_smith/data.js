const data = [
    {
        "name": "乱",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(44, 173, 177)",
        "count": 28,
        "r": 29.09,
        "x": -56,
        "y": -19.89
    },
    {
        "name": "友好",
        "originDivision": "同事",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 26,
        "r": 28.64,
        "x": 42.67,
        "y": 10.34
    },
    {
        "name": "友善",
        "originDivision": "同事",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 18,
        "r": 26.37,
        "x": 42.67,
        "y": 43.55
    },
    {
        "name": "平易近人",
        "division": "领导",
        "type": "#3cb371",
        "count": 18,
        "r": 26.37,
        "x": 45.33,
        "y": -12.73
    },
    {
        "name": "牛",
        "originDivision": "技术",
        "division": "企业",
        "type": "rgb(44, 173, 177)",
        "count": 16,
        "r": 25.64,
        "x": 61.33,
        "y": -8.65
    },
    {
        "name": "枯燥",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 16,
        "r": 25.64,
        "x": -34.67,
        "y": 52.24
    },
    {
        "name": "单一",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 16,
        "r": 25.64,
        "x": -8,
        "y": 13.9
    },
    {
        "name": "有钱",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(44, 173, 177)",
        "count": 16,
        "r": 25.64,
        "x": 29.33,
        "y": 40.62
    },
    {
        "name": "和善",
        "division": "领导",
        "type": "#3cb371",
        "count": 16,
        "r": 25.64,
        "x": 45.33,
        "y": 31.76
    },
    {
        "name": "压抑",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 16,
        "r": 25.64,
        "x": -29.33,
        "y": 2.91
    },
    {
        "name": "着想",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 14,
        "r": 24.82,
        "x": 32,
        "y": 61.78
    },
    {
        "name": "扩张",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(44, 173, 177)",
        "count": 14,
        "r": 24.82,
        "x": 32,
        "y": 34.06
    },
    {
        "name": "待遇好",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(44, 173, 177)",
        "count": 14,
        "r": 24.82,
        "x": 42.67,
        "y": 5.07
    },
    {
        "name": "领头羊",
        "division": "行业",
        "type": "#6699FF",
        "count": 12,
        "r": 23.87,
        "x": 48,
        "y": 35.15
    },
    {
        "name": "心寒",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 10,
        "r": 22.74,
        "x": -40,
        "y": 37.52
    },
    {
        "name": "乏味",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 10,
        "r": 22.74,
        "x": -10.67,
        "y": 20.12
    },
    {
        "name": "盈利",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(44, 173, 177)",
        "count": 9,
        "r": 22.1,
        "x": 45.33,
        "y": 56.55
    },
    {
        "name": "忽悠",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 8,
        "r": 21.37,
        "x": -26.67,
        "y": 5.02
    },
    {
        "name": "失望",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 8,
        "r": 21.37,
        "x": -37.33,
        "y": 35.18
    },
    {
        "name": "恶劣",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 8,
        "r": 21.37,
        "x": -45.33,
        "y": 42.45
    },
    {
        "name": "挣钱",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(44, 173, 177)",
        "count": 6,
        "r": 19.6,
        "x": 45.33,
        "y": 37.17
    },
    {
        "name": "靠谱",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(44, 173, 177)",
        "count": 6,
        "r": 19.6,
        "x": 32,
        "y": 40.45
    },
    {
        "name": "忍受",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 6,
        "r": 19.6,
        "x": -24,
        "y": 56.58
    },
    {
        "name": "听话",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 6,
        "r": 19.6,
        "x": 8,
        "y": -19.89
    },
    {
        "name": "洗脑",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 4,
        "r": 17.1,
        "x": -53.33,
        "y": 38.23
    },
    {
        "name": "反感",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 4,
        "r": 17.1,
        "x": -26.67,
        "y": 14.35
    },
    {
        "name": "进取",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 4,
        "r": 17.1,
        "x": 45.33,
        "y": 18.42
    },
    {
        "name": "不爽",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 4,
        "r": 17.1,
        "x": -56,
        "y": -10.86
    },
    {
        "name": "不靠谱",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 4,
        "r": 17.1,
        "x": -53.33,
        "y": 2.91
    },
    {
        "name": "节约",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 17.1,
        "x": 21.33,
        "y": 7.49
    },
    {
        "name": "有趣",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 4,
        "r": 17.1,
        "x": 42.67,
        "y": -34.5
    },
    {
        "name": "认真",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 4,
        "r": 17.1,
        "x": 40,
        "y": 53.71
    },
    {
        "name": "值钱",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(44, 173, 177)",
        "count": 4,
        "r": 17.1,
        "x": 34.67,
        "y": 27.97
    },
    {
        "name": "景气",
        "division": "行业",
        "type": "#6699FF",
        "count": 4,
        "r": 17.1,
        "x": 45.33,
        "y": 62.38
    },
    {
        "name": "领军",
        "division": "行业",
        "type": "#6699FF",
        "count": 4,
        "r": 17.1,
        "x": 45.33,
        "y": 17.45
    },
    {
        "name": "加工资",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 2,
        "r": 12.82,
        "x": 53.33,
        "y": -67.02
    },
    {
        "name": "能干",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 2,
        "r": 12.82,
        "x": 53.33,
        "y": 0
    },
    {
        "name": "懒",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 2,
        "r": 12.82,
        "x": -45.33,
        "y": -5.13
    },
    {
        "name": "牛逼",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 2,
        "r": 12.82,
        "x": 48,
        "y": -31.54
    },
    {
        "name": "脚踏实地",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 2,
        "r": 12.82,
        "x": 48,
        "y": -72.54
    },
    {
        "name": "心痛",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 2,
        "r": 12.82,
        "x": -42.67,
        "y": -35.47
    },
    {
        "name": "幸福",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 2,
        "r": 12.82,
        "x": 58.67,
        "y": 34.47
    },
    {
        "name": "留不住",
        "originDivision": "人才",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 2,
        "r": 12.82,
        "x": -29.33,
        "y": 2.1
    },
    {
        "name": "衰落",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(44, 173, 177)",
        "count": 2,
        "r": 12.82,
        "x": -34.67,
        "y": 10.11
    },
    {
        "name": "裁员",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(44, 173, 177)",
        "count": 2,
        "r": 12.82,
        "x": -32,
        "y": 31.43
    },
    {
        "name": "可怜",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 2,
        "r": 12.82,
        "x": -26.67,
        "y": -29.37
    },
    {
        "name": "繁忙",
        "division": "工作",
        "type": "rgb(23, 66, 121)",
        "count": 2,
        "r": 12.82,
        "x": -13.33,
        "y": -29.37
    },
    {
        "name": "贡献",
        "originDivision": "公司",
        "division": "企业",
        "type": "rgb(44, 173, 177)",
        "count": 2,
        "r": 12.82,
        "x": 18.67,
        "y": -15.53
    },
    {
        "name": "放心",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 2,
        "r": 12.82,
        "x": 34.67,
        "y": 54.82
    },
    {
        "name": "怀疑",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 2,
        "r": 12.82,
        "x": -29.33,
        "y": 4.27
    },
    {
        "name": "翘楚",
        "division": "行业",
        "type": "#6699FF",
        "count": 2,
        "r": 12.82,
        "x": 48,
        "y": 38.23
    },
    {
        "name": "温暖",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 2,
        "r": 12.82,
        "x": 53.33,
        "y": 7.57
    },
    {
        "name": "奖励",
        "division": "员工",
        "type": "rgb(249, 79, 133)",
        "count": 2,
        "r": 12.82,
        "x": 48,
        "y": -18.3
    },
    {
        "name": "失业",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 1,
        "r": 8.55,
        "x": -45.33,
        "y": 11.88
    },
    {
        "name": "放松",
        "division": "人",
        "type": "rgb(252, 196, 38)",
        "count": 1,
        "r": 8.55,
        "x": 32,
        "y": 3.22
    },
    {
        "x": 44,
        "y": -80,
        "r": 4,
        "type": "#3cb371",
        "name": ""
    },
    {
        "x": -36,
        "y": 65,
        "r": 5,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": 42,
        "y": 1,
        "r": 5,
        "type": "rgb(249, 79, 133)",
        "name": ""
    },
    {
        "x": 1,
        "y": -36,
        "r": 3,
        "type": "rgb(252, 196, 38)",
        "name": ""
    },
    {
        "x": 46,
        "y": 72,
        "r": 4,
        "type": "#6699FF",
        "name": ""
    },
    {
        "x": 62,
        "y": -24,
        "r": 3,
        "type": "rgb(23, 66, 121)",
        "name": ""
    },
    {
        "x": 45,
        "y": 23,
        "r": 3,
        "type": "#6699FF",
        "name": ""
    },
    {
        "x": 26,
        "y": 77,
        "r": 5,
        "type": "rgb(23, 66, 121)",
        "name": ""
    }
];

export default data;
