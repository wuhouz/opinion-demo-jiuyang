import React from 'react';
import radio from '../radio'; // 系数
// 最多被提及的特征 Top5
const mentioned = [
    {
        name: '人: 兴奋',
        num: 16 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>因为心中有梦想而闪闪发光，我们每天都在为能够和这样的团队并肩战斗而<span className="highlight">兴奋</span>和自豪。</p>
            <p className="username">用户二：</p>
            <p>并且根据用户的基本需求/期望需求/<span className="highlight">兴奋</span>点来提高用户的购买欲，一步一步引导用户，当然了，现在每一个消费者都非常精明，他也不是单一看完一个购买专题页就会掏钱买单。</p>
        </div>
    },
    {
        name: '公司: 盈利',
        num: 12 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>毕竟不是暴利行业，公司的<span className="highlight">兴奋</span>压力也是与日俱增，主要还是看个人的潜力和想法</p>
            <p className="username">用户二：</p>
            <p>公司<span className="highlight">兴奋</span>能力应该不错，受宏观行业冲击影响也会比较小一些。</p>
        </div>
    },
    {
        name: '公司: 节约',
        num: 11 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>制造业产能共享能够优化资源配置、<span className="highlight">节约</span>成本、促进产业链协同等，成为制造业企业转型过程中的重要抓手。</p>
            <p className="username">用户二：</p>
            <p>通过合理合法合规的方法如果能达到<span className="highlight">节约</span>成本固然好。但是如果这个行为的代价是违反法律的话，那你终究会付出惨痛代价。</p>
        </div>
    },
    {
        name: '人: 怀疑',
        num: 11 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>目前在博世成都实习，一样的岗位，薪酬却低到令人<span className="highlight">怀疑</span>人生，研究生和本科生薪酬一样，还要扣20%的税，平均下来每天80都不到。</p>
            <p className="username">用户二：</p>
            <p>我现在对这公司的诚信度产生<span className="highlight">怀疑</span>，他开出的12-20万的年薪可信度应该也不高，由此可见也不是什么规范的公司吧。</p>
        </div>
    },
    {
        name: '工作: 有趣',
        num: 10 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>正如在公司中,员工需要通过激励得到赏识、成就感、责任感一样,在做自己的事情时,对自身的及时、适当的"奖赏"也会使工作变得<span className="highlight">有趣</span>和有成就感。</p>
            <p className="username">用户二：</p>
            <p>但是这家公司很<span className="highlight">有趣</span>，当新员工通过面试开始试用期的时候，HR会发给他一张游戏通关卡，新员工需要从通关卡上有限的信息里，在几百人的公司里找到一个特定的人。</p>
        </div>
    }
];

export default mentioned;