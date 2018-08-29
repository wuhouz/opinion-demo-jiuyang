import React from 'react';

// 企业独占的特征 Top5
const radio = 8; // 系数

const special = [
    {
        name: '领导: 和善',
        num: 2 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>不是很了解啊，就是刚听过宣讲会，觉得是一个注重品质，注重细节的企业，<span className="highlight">创新</span>也引领世茂走向了成功的转型。</p>
            <p className="username">用户二：</p>
            <p>这一系列大胆又<span className="highlight">创新</span>的服务方式和销售策略，在努力提升宾客满意度的同时，也大大增加了酒店的收益。</p>
        </div>
    },
    {
        name: '公司: 盈利',
        num: 1 * radio,
        desc:
            <div>
                <p className="username">用户一：</p>
                <p>为什么愿意推荐朋友来这里工作？学习到的东西很多，这里的工作强度挺大的，全球化的<span className="highlight">运营</span>。但是大公司的福利什么的都挺好的，晋升机会也比较多。
                </p>
                <p className="username">用户二：</p>
                <p>世茂的发展速度快，而且在很多城市都有地标性建筑，未来还有很多的项目会发展。而且世茂已经有两家上市公司，所以整个公司的<span className="highlight">运营</span>状况是不错的。
                </p>
            </div>
    }
];

export default special;