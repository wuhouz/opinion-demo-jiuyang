import React from 'react';
import radio from '../radio'; // 系数
// 企业独占的特征 Top5
const special = [
    {
        name: '公司: 值钱',
        num: 44 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>我认为，在一家正常的公司里，如果只是某个人"最<span className="highlight">值钱</span>"，大概只能说明这家公司本身就不怎么样。因为，公司最<span className="highlight">值钱</span>的人不应该是"某个人"，而是"某些人"。只有聚合了很多<span className="highlight">值钱</span>的人才，公司才会越来越<span className="highlight">值钱</span>。</p>
            <p className="username">用户二：</p>
            <p>本人为美的的13个事业部和集团服务着，可能由于每天都在接触，所以觉得美的在引进核心人才方面尤其是外籍专家方面还是挺慷慨的，需求也蛮大。同时也看到了国内家电企业和欧美老牌家电公司的差距。有时候觉得国内企业打价格战真心low，公司最<span className="highlight">值钱</span>的是技术。</p>
        </div>
    },
    {
        name: '人: 怀疑',
        num: 44 * radio,
        desc:
            <div>
                <p className="username">用户一：</p>
                <p>我现在对这公司的诚信度产生<span className="highlight">怀疑</span>，他开出的12-20万的年薪可信度应该也不高，由此可见也不是什么规范的公司吧，庆幸没进终面了，现在化身美的地产一生黑，希望让大家知道这件事。</p>
                <p className="username">用户二：</p>
                <p>美的加班加的我<span className="highlight">怀疑</span>人生--2018.4.15-我现在正在美的实习，怎么说呢，美的肯定是一个很严格的地方，工作细节比较到位，规矩也比较多，每年都会淘汰人的，不够优秀肯定没法呆下去。</p>
            </div>
    },
    {
        name: '公司: 节约',
        num: 40 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>美的这样的制造业，产能共享能够优化资源配置、<span className="highlight">节约</span>成本、促进产业链协同。</p>
            <p className="username">用户二：</p>
            <p>美的通过合理合法合规的方法如果能达到<span className="highlight">节约</span>成本固然好。但是如果这个行为的代价是违反法律的话，那你终究会付出惨痛代价。</p>
        </div>
    },
    {
        name: '人: 失望',
        num: 34 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>已经<span className="highlight">失望</span>透顶，而之前拒了那么多的小公司，来到美的。毕竟作为一个好学校的毕业生，身边人都已经平步青云的时候，我在车间流着汗。原谅女孩子的玻璃心。</p>
            <p className="username">用户二：</p>
            <p>因为美的二字，签了三方协议，现在签了实习协议在分公司实习，令人<span className="highlight">失望</span>的是糟糕的办公条件，破败的宿舍，偏远的公交车都没有。还有恣意妄为的无偿加班，身边的员工基本上都是专科生，一想到如果以后就是在这里开始社会的打拼，不免心就冷了一半了。</p>
        </div>
    },
    {
        name: '人: 忽悠',
        num: 30 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>有些人被<span className="highlight">忽悠</span>去当校园宣传大使却连说好的面试机会都没有。有些人说收到短信叫他第二天早上去另一个市面试，结果HR却说该市的面试已经结束了，那个同学在QQ群上因为不爽多问了一句就被HR禁言了，呵呵。一句话，垃圾美的。</p>
            <p className="username">用户二：</p>
            <p>由于广大消费者普遍缺乏相关知识，就被美的利用了，弄一个新绰头打广告<span className="highlight">忽悠</span>人。一晚一度电的广告，为美的带来了巨额收入。美的为了赚钱，不惜牺牲广大市民的身体健康。在遭到消费者持续的举报和揭露之后，美的仍然想尽办法掩饰和歪曲事实，继续误导消费者，实属明知故犯，其心恶毒，罪不可恕。</p>
        </div>
    }
];

export default special;