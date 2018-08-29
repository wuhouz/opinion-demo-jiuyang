import React from 'react';
import radio from '../radio'; // 系数
// 企业独占的特征 Top5
const special = [
    {
        name: '领导: 和善',
        num: 2 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>你是如何评价九阳CEO或你的直属领导的？工作氛围和团队怎么样？
                直属领导亲切<span className="highlight">和善</span>，乐意指导新员工，工作氛围轻松愉快，团队关系融洽。
            </p>
        </div>
    },
    {
        name: '公司: 盈利',
        num: 1 * radio,
        desc:
            <div>
                <p className="username">用户一：</p>
                <p>企业需要<span className="highlight">盈利</span>，品牌却需要的是变得更好、更强。首先要判断，这个产品，一定要带着<span className="highlight">盈利</span>的目的来到这个市场吗？九阳是想要用这台one cup来获取利润吗？难道它不知道自己现在已经有了好多款适合大众消费习惯的产品，它不想赚钱了吗？它只是有远见而已。</p>
                <p className="username">用户二：</p>
                <p>九阳这个品牌，推出一个产品，这个产品便是连接抽象的品牌和市场的一个工具，一个介质。产品必然是让公司能够<span className="highlight">盈利</span>的。</p>
            </div>
    }
];

export default special;