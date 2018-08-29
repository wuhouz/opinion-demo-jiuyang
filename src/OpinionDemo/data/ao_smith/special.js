import React from 'react';

// 企业独占的特征 Top5
const radio = 8; // 系数

const special = [
    {
        name: '同事: 友好',
        num: 26 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>不是很了解啊，就是刚听过宣讲会，觉得是一个注重品质，注重细节的企业，<span className="highlight">创新</span>也引领世茂走向了成功的转型。</p>
            <p className="username">用户二：</p>
            <p>这一系列大胆又<span className="highlight">创新</span>的服务方式和销售策略，在努力提升宾客满意度的同时，也大大增加了酒店的收益。</p>
        </div>
    },
    {
        name: '同事: 友善',
        num: 18 * radio,
        desc:
            <div>
                <p className="username">用户一：</p>
                <p>为什么愿意推荐朋友来这里工作？学习到的东西很多，这里的工作强度挺大的，全球化的<span className="highlight">运营</span>。但是大公司的福利什么的都挺好的，晋升机会也比较多。
                </p>
                <p className="username">用户二：</p>
                <p>世茂的发展速度快，而且在很多城市都有地标性建筑，未来还有很多的项目会发展。而且世茂已经有两家上市公司，所以整个公司的<span className="highlight">运营</span>状况是不错的。
                </p>
            </div>
    },
    {
        name: '工作: 枯燥',
        num: 16 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>坚持以人为本的管理理念，将<span className="highlight">公益</span>项目落到实处，定期举行相关<span className="highlight">公益</span>关爱活动回报社会
            </p>
            <p className="username">用户二：</p>
            <p>铂涛集团业务涵盖酒店、公寓、艺术品、<span className="highlight">公益</span>平台等。</p>
        </div>
    },
    {
        name: '工作: 单一',
        num: 16 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>为什么愿意推荐朋友来这里工作？入职的世茂浙江区域，正式录用前会有一个月左右的实习，主要任务是学习销售。公司同事都比较<span className="highlight">友好</span>，有些领导真的比较有能力，但是加班压力也比较大，房地产行业就是这个样子。
            </p>
            <p className="username">用户二：</p>
            <p>上级处理事情严肃，有自己原则。工作氛围比较轻松，没什么压力，同事之间很团结<span className="highlight">友好</span>。</p>
        </div>
    },
    {
        name: '公司: 有钱',
        num: 16 * radio,
        desc: <div>
            <p className="username">用户一：</p>
            <p>公司都有哪些福利呢？（比如房补、交通补助、补充保险之类的）有什么特别优于其他公司的福利吗？五险一金，食宿<span className="highlight">便宜</span>。</p>
            <p className="username">用户二：</p>
            <p>提供住宿，自己吃饭公司内饭很<span className="highlight">便宜</span>，五险一金缴存很低。</p>
        </div>
    }
];

export default special;