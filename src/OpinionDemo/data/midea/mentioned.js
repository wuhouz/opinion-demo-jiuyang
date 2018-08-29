import React from 'react';

// 最多被提及的特征 Top5
const radio = 8; // 系数

const mentioned = [
    {
        name: '人: 兴奋',
        num: 80 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>在经营一家酒店时，敏锐的头脑、正确的策略和有效的<span className="highlight">执行</span>非常重要。</p>
            <p className="username">用户二：</p>
            <p>将文化融入人才管理的全周期首先，世茂将企业文化转换为可<span className="highlight">执行</span>的员工行为标准。</p>
        </div>
    },
    {
        name: '公司: 值钱',
        num: 44 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>不是很了解啊，就是刚听过宣讲会，觉得是一个注重品质，注重细节的企业，<span className="highlight">创新</span>也引领世茂走向了成功的转型。</p>
            <p className="username">用户二：</p>
            <p>这一系列大胆又<span className="highlight">创新</span>的服务方式和销售策略，在努力提升宾客满意度的同时，也大大增加了酒店的收益。</p>
        </div>
    },
    {
        name: '人: 怀疑',
        num: 44 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>为什么愿意推荐朋友来这里工作？学习到的东西很多，这里的工作强度挺大的，全球化的<span className="highlight">运营</span>。但是大公司的福利什么的都挺好的，晋升机会也比较多。
            </p>
            <p className="username">用户二：</p>
            <p>世茂的发展速度快，而且在很多城市都有地标性建筑，未来还有很多的项目会发展。而且世茂已经有两家上市公司，所以整个公司的<span className="highlight">运营</span>状况是不错的。
            </p>
        </div>
    },
    {
        name: '公司: 节约',
        num: 40 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>行业<span className="highlight">领军</span>人物对话:度假酒店新增长周期下的应对策略</p>
        </div>
    },
    {
        name: '人: 失望',
        num: 34 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>培训比较多，工作比较<span className="highlight">轻松</span></p>
            <p className="username">用户二：</p>
            <p>工作氛围比较<span className="highlight">轻松</span>，没什么压力，同事之间很团结友好。</p>
        </div>
    }
];

export default mentioned;