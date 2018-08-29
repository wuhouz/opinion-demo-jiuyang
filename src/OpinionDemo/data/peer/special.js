import React from 'react';
import radio from '../radio'; // 系数
// 企业独占的特征 Top5
const special = [
    {
        name: '公司: 盈利',
        num: 12 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>毕竟不是暴利行业，公司的<span className="highlight">盈利</span>压力也是与日俱增，主要还是看个人的潜力和想法</p>
            <p className="username">用户二：</p>
            <p>公司<span className="highlight">盈利</span>能力应该不错，受宏观行业冲击影响也会比较小一些。</p>
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
        name: '公司: 值钱',
        num: 10 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>只有聚合了很多<span className="highlight">值钱</span>的人才，公司才会基业长青，越做越大，公司所有人就会越来越<span className="highlight">值钱</span>。</p>
            <p className="username">用户二：</p>
            <p>由于我会做一些海外的职位，所以也看到了国内家电企业和欧美老牌家电公司的差距。有时候觉得国内企业打价格战真心low，技术才最<span className="highlight">值钱</span>好吗！</p>
        </div>
    },
    {
        name: '人: 失望',
        num: 9 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>走的很和谐，对老板也没有什么指责，主要原因还是对公司前景<span className="highlight">失望</span>了，以及老板多个决策失误。</p>
            <p className="username">用户二：</p>
            <p>自己做了非常多的改善性努力，但是收不到效果或者得不到支持，<span className="highlight">失望</span>离开</p>
        </div>
    }
];

export default special;