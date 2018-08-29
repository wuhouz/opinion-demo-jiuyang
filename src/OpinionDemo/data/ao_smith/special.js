import React from 'react';
import radio from '../radio'; // 系数
// 企业独占的特征 Top5
const special = [
    {
        name: '同事: 友好',
        num: 26 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>公司环境很好，同事也很<span className="highlight">友好</span>，刚入职的时候有很多在职同事帮助我，带领我，能够快速融入集体，没有勾心斗角的东西，正能量很强。</p>
            <p className="username">用户二：</p>
            <p>你是否愿意推荐朋友来AO史密斯工作？原因是什么？
                愿意，工作氛围好，待遇好，提供午餐和晚餐，上下班有班车。公司人机关系很简单，同事们之间相处都很<span className="highlight">友好</span>。
            </p>
        </div>
    },
    {
        name: '同事: 友善',
        num: 18 * radio,
        desc:
            <div>
                <p className="username">用户一：</p>
                <p>公司里的每一个人都那么<span className="highlight">友善</span>，包括老板、领导和所有同事，大家互帮互助，没有尔虞我诈，相处的和乐融融，一天工作下来就是2个字--开心！</p>
                <p className="username">用户二：</p>
                <p>在史密斯工作的氛围很好，同事之间都比较<span className="highlight">友善</span>，有什么问题都很乐意回答和帮助，领导也很<span className="highlight">友善</span>培训机会多，在这里可以快速的成长。</p>
            </div>
    },
    {
        name: '工作: 枯燥',
        num: 16 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>你觉得具有哪些特质的人更适合来AO史密斯工作？
                工作轻松，平台看的过去，作为一个大企业让人比较安心，感觉公司财力不错，就是可能需要适应前期有些<span className="highlight">枯燥</span>单调比较简单的工作，还要找到晋升的途径，如果想工作稳定点还是个不错的选择。
            </p>
            <p className="username">用户二：</p>
            <p>你是否愿意推荐朋友来AO史密斯工作？原因是什么？
                不推荐。除非是想求稳定单一工作的同学。工作内容非常<span className="highlight">枯燥</span>，有朝气有想法有实力敢打拼的年轻人在这样传统的企业里很难有好的发展。
            </p>
        </div>
    },
    {
        name: '工作: 单一',
        num: 16 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>为什么愿意推荐朋友来AO史密斯工作？
                工作内容比较<span className="highlight">单一</span>。总部环境一般般，加班比较少，不过工资也不算高。
            </p>
            <p className="username">用户二：</p>
            <p>你是否愿意推荐朋友来AO史密斯工作？原因是什么？
                不推荐。工作内容比较<span className="highlight">单一</span>，发展道路窄。起薪太低，尤其是本科生更是低的可怜，入行需要慎重！
            </p>
        </div>
    },
    {
        name: '公司: 有钱',
        num: 16 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>公司<span className="highlight">有钱</span>，地点优越，员工有不少名校毕业的，有羽毛球篮球活动。</p>
            <p className="username">用户二：</p>
            <p>史密斯作为一家行业领先的传统软件公司，真的很<span className="highlight">有钱</span>。环境很不错，给员工的福利待遇也是国企一样的丰厚。</p>
        </div>
    }
];

export default special;