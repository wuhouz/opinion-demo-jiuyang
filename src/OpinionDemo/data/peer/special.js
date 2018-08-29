import React from 'react';

// 企业独占的特征 Top5
const radio = 16; // 系数

const special = [
    {
        name: '公司: 盈利',
        num: 12 * radio,
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
        name: '公司: 节约',
        num: 11 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>为什么愿意推荐朋友来这里工作？因为学校气氛很好 不像其他地方那么复杂，与老师学生交流起来会<span className="highlight">轻松</span>很多，职位受人尊重，等等原因。</p>
            <p className="username">用户二：</p>
            <p>为什么看好公司未来半年发展？非常好，氛围<span className="highlight">轻松</span>，简单阳光，学校的环境还是比社会上其他职业的环境简单很多，强烈推荐不管男生女生都可以来这里工作，领导也不会咄咄逼人
            </p>
        </div>
    },
    {
        name: '人: 怀疑',
        num: 11 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>公司优点：我比较<span className="highlight">喜欢</span>学校文化，希望以后能有依然在学校的机会。 我会努力的。</p>
            <p className="username">用户二：</p>
            <p>为什么愿意推荐朋友来这里工作？一般 经常做无用功，关键看带自己的是什么人 有的领导话不多 但句句都能降到关键点 有点不行 跟您讲很多 没用的东西 有的则是不停地修改图纸 文本等 而且总是前面做 后面改
                还<span className="highlight">喜欢</span>提前催你完成，反正看领导。</p>
        </div>
    },
    {
        name: '公司: 值钱',
        num: 10 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>7月17日，世茂与云南世博旅游控股集团有限公司<span className="highlight">签署</span>合作协议，并就推进特色小镇和城市建设，深化旅游文化、大健康产业等多领域合作进行交流。
            </p>
            <p className="username">用户二：</p>
            <p> 恒大+苏宁:6月22日，苏宁易购集团股份有限公司发布公告称，公司全资子公司南京苏宁商业管理有限公司与恒大地产集团有限公司<span className="highlight">签署</span>《关于深圳市恒宁商业发展有限公司股东协议书》。
            </p>
        </div>
    },
    {
        name: '人: 失望',
        num: 9 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>交通<span className="highlight">便利</span>,只有死工资,体制僵化,个人发挥受限,按点上下班公司管理者水平太差了，原本一个有前景的公司快被他们搞垮了。</p>
            <p className="username">用户二：</p>
            <p>你是否愿意推荐朋友来这里工作？原因是什么？愿意 算是大平台知名企业 工作环境好 附近交通<span className="highlight">便利</span>同事之间相处也很不错 能交到新朋友</p>
        </div>
    }
];

export default special;