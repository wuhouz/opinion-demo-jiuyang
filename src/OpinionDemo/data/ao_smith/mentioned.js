import React from 'react';
import radio from '../radio'; // 系数
// 最多被提及的特征 Top5
const mentioned = [
    {
        name: '公司: 乱',
        num: 28 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>管理比较混<span className="highlight"><span className="highlight">乱</span></span>，混日子的人很多，很多领导都是吹牛，和领导关系好的人机会多点。</p>
            <p className="username">用户二：</p>
            <p>公司管理比较混<span className="highlight">乱</span>，官僚主义严重，加班多而且没有加班费，曾经连续上班一个月而中间没有休息一天，也曾经连续上班48小时而没有休息。</p>
        </div>
    },
    {
        name: '同事: 友好',
        num: 26 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>同事们都很<span className="highlight">友好</span>，工作气氛很活跃，项目组老大带大家起飞；老板会经常参与到项目的研发过程中来；公司还有免费班车，对于住在学院的我，这是一个很好的福利。</p>
            <p className="username">用户二：</p>
            <p>公司氛围较好，领导亲和，同事间关系较<span className="highlight">友好</span>；压力不大，相对较为轻松，能够有属于自己的时间做喜欢的事；公司市场不断扩张，前景较好，发展快速。</p>
        </div>
    },
    {
        name: '同事: 友善',
        num: 18 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>领导很好，同事都很<span className="highlight">友善</span>。经常组织活动。出去玩的很开心。部门领导人很好，典型的外企工作环境。</p>
            <p className="username">用户二：</p>
            <p>公司是很好的单位，同事<span className="highlight">友善</span>，互相帮助。工作，学习热情高。上级对于下级工作关心，平级之间的同时友爱互助。公司培训较多，力图让每位新老员工都能接收到较为专业的培训。使参训人员在培训中获得新知识，并获得满足感。同时公司注重企业文化的建设，每月都有员工庆生会，年底还有各种庆祝新年，圣诞节的party。</p>
        </div>
    },
    {
        name: '领导: 平易近人',
        num: 18 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>CEO<span className="highlight">平易近人</span>，在职业经理人圈里也比较有口碑，勤奋。过去的一年一直在到处奔走，就没闲着过，成立海外办事处、举办商业推广活动、招聘新员工、提薪、年会、上市运作、并购运作等等，是个努力作为的领导，虽然目前公司遇到各种各样的困难，但是这些困难也是所有公司在发展壮大过程中一定会遇到的。</p>
            <p className="username">用户二：</p>
            <p>领导非常不错，<span className="highlight">平易近人</span>，工作会指导你如何是思考，指明方向。非常有耐心、有魄力。公司高层都是苦战过来的，接触多了就能知道这个团队牛掰的很。</p>
        </div>
    },
    {
        name: '技术: 牛',
        num: 16 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>公司产品还是挺<span className="highlight">牛</span>逼的，在行业内也是排第一，第二这样。目前一直在做新产品研发，新业务线的发展，前景实话讲还可以。与其他公司比，技术比较先进，BIM很成熟。而且，软件比较完善。整体来讲还可以。</p>
            <p className="username">用户二：</p>
            <p>原来是做防雷的，技术很<span className="highlight">牛</span>，近几年面临转型扩大，提出的智慧电气的理论在到去年已经在电气圈引起了不小的震动。</p>
        </div>
    }
];

export default mentioned;