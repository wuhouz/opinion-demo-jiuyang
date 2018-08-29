import React from 'react';

// 最多被提及的特征 Top5
const radio = 16; // 系数

const mentioned = [
    {
        name: '人: 兴奋',
        num: 16 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p> 在这里工作压力大吗？压力主要来源于哪些方面？不是太大，延续性项目，每次都是一写<span className="highlight">优化</span>需求；由于和甲方的关系比较好，需求量和进度这些都可以商量，哈哈哈。
            </p>
            <p className="username">用户二：</p>
            <p>你觉得公司在行业中处于什么地位？未来发展前景如何？与同类公司相比优势在哪？消费类电子产品的制造与研发，目前整体处于夕阳行业，远落后于主流的软件及互联网相关的行业；公司未来很难突破现状，改革创新风险太高，只能保守<span
                className="highlight">优化</span>制造工艺及成本；与同类公司相比优势明显，有非常全面的加工设备及生产线，有广泛的供应商及客户，有稳定的利润收入，相对稳定很多。</p>
        </div>
    },
    {
        name: '公司: 盈利',
        num: 12 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p> 部分嘉宾在铂涛大厦合影留念
                本次业主私董会，酒店高参秉承活动内容创新原则，不仅仅在私董会为业主嘉宾提供专业的酒店投资内容，还将高度前瞻的理论内容和深度体验的品牌实践结合起来——12月16日，从品牌酒店体验<span
                    className="highlight">入住</span>到带领众多酒店业主及投资人详细参观了国内酒店业最具创新意识的铂涛集团总部；同时带领所有酒店业主以铂涛秀邀请VIP嘉宾身份出席铂涛集团每年一度的酒店业唯一的大型“维密秀”——铂涛新品时尚秀。
            </p>
            <p className="username">用户二：</p>
            <p>而宜尚Plus酒店在有限空间里整合了“FIKA”咖啡大堂、多功能餐厅、多项配套设施（健身房／洗衣房／独立会议室）等功能性空间，大大提升了<span className="highlight">入住</span>体验感。
            </p>
        </div>
    },
    {
        name: '公司: 节约',
        num: 11 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>公司晋升机制还算合理吧，但是有待<span className="highlight">改进</span>的地方，毕竟企业还在发展中。</p>
            <p className="username">用户二：</p>
            <p>公司一直在发展<span className="highlight">改进</span>，也做了许多工作，不得不说，公司能发展到现在这个规模，真的非常的不容易，可能就成本这块较市场偏低，但是看个人能力，踏实肯干的，公司也会对你的努力肯定。
            </p>
        </div>
    },
    {
        name: '人: 怀疑',
        num: 11 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>你觉得公司在行业中处于什么地位？未来发展前景如何？与同类公司相比优势在哪？中下游，前景不明，成本低，跟我导师有产学研合作项目，但是感觉研发水平一般，生产条件和水平一般，员工满意度和<span
                className="highlight">执行</span>力不行，管理比较混乱，和落后，内部有矛盾。</p>
            <p>在经营一家酒店时，敏锐的头脑、正确的策略和有效的<span className="highlight">执行</span>非常重要。</p>
            <p className="username">用户二：</p>
            <p>说说你在公司的工作经历对你产生了哪些影响？技能无增长，公司不提倡个人思考，只提倡<span className="highlight">执行</span>力和所谓的“忠诚度”。</p>
        </div>
    },
    {
        name: '人: 不爽',
        num: 10 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>为什么愿意推荐朋友来这里工作？因为学校气氛很好 不像其他地方那么复杂，与老师学生交流起来会<span className="highlight">轻松</span>很多，职位受人尊重，等等原因。</p>
            <p className="username">用户二：</p>
            <p>为什么看好公司未来半年发展？非常好，氛围<span className="highlight">轻松</span>，简单阳光，学校的环境还是比社会上其他职业的环境简单很多，强烈推荐不管男生女生都可以来这里工作，领导也不会咄咄逼人
            </p>
        </div>
    }
];

export default mentioned;