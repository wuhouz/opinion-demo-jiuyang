import React, {PureComponent} from 'react';
import {Button, Tabs, Tooltip} from 'antd';
import './reset.css';
import './index.css';
import Icon from './Icon';
import Employer from './Employer';
import Statistics from './Statistics';
// 九阳
import data_jiuyang from './data/jiuyang/data.js'; // 雇主数据
import description_jiuyang from './data/jiuyang/description.js'; // 坐标系下方ABCD四个象限的描述数据
import legend_jiuyang from './data/jiuyang/legend.js'; // 图例
import mentioned_jiuyang from './data/jiuyang/mentioned.js'; // 最多被提及的特性
import special_jiuyang from './data/jiuyang/special.js'; // 企业独占的特性
import random_jiuyang from './data/jiuyang/random.json'; // 加一些小点点

// AO 史密斯
import data_ao from './data/ao_smith/data.js'; // 雇主数据
import description_ao from './data/ao_smith/description.js'; // 坐标系下方ABCD四个象限的描述数据
import legend_ao from './data/ao_smith/legend.js'; // 图例
import mentioned_ao from './data/ao_smith/mentioned.js'; // 最多被提及的特性
import special_ao from './data/ao_smith/special.js'; // 企业独占的特性
// import random_ao from './data/ao_smith/random.json'; // 加一些小点点

// 美的  data_midea
import data_midea from './data/ao_smith/data.js'; // 雇主数据
import description_midea from './data/ao_smith/description.js'; // 坐标系下方ABCD四个象限的描述数据
import legend_midea from './data/ao_smith/legend.js'; // 图例
import mentioned_midea from './data/ao_smith/mentioned.js'; // 最多被提及的特性
import special_midea from './data/ao_smith/special.js'; // 企业独占的特性
// import random_midea from './data/ao_smith/random.json'; // 加一些小点点

// 行业数据
import data_peer from './data/peer/data.js'; // 雇主数据
import description_peer from './data/peer/description.js'; // 坐标系下方ABCD四个象限的描述数据
import legend_peer from './data/peer/legend.js'; // 图例
import mentioned_peer from './data/peer/mentioned.js'; // 最多被提及的特性
import special_peer from './data/peer/special.js'; // 企业独占的特性
import random_peer from './data/peer/random.json'; // 加一些小点点

data_jiuyang.splice(0, 0, ...random_jiuyang);
data_peer.splice(0, 0, ...random_peer);

const TabPane = Tabs.TabPane;
const NetworkOpinion = '"网络舆情"指网民关于社会中各种现象、问题所表达的信念、态度、意见和情绪等。"声量"用来描述与衡量信息传播的影响力大小，具体指标包含网络阅读量、点击量、转发量、评论量、点赞量、收藏数等。';

export default class extends PureComponent {
    render() {
        return (
            <div className="opinion-demo">
                <div className="demo-top">
                    <div className="content-top">
                        <div className="title-img"></div>
                    </div>
                    <div className="top-wrapper">
                        <div className="content-slogan">
                            <span>检测时段：2018年01月-2018年07月</span>
                            <span className="vertical-line">检测范围：同行业竞争公司全网舆情数据</span>
                        </div>
                        <div className="statistics">
                            <div className="total-number">
                                <div className="number-descr">
                                    网络舆情声量总数
                                    <Tooltip placement="top" overlayClassName="network-opinion" title={NetworkOpinion}>
                                        <Icon type="info_round"/>
                                    </Tooltip>
                                </div>
                                <div className="number-value">300,103</div>
                            </div>
                            <Statistics/>
                        </div>
                    </div>
                </div>
                <div className="demo-content-wrapper">
                    <div className="analyze-header">
                        <strong className="analyze-title">雇主竞争机会分析</strong>
                        <p className="analyze-slogan">根据全网声量进行话题分类，采用四大象限展示当前时段的市场口碑风向，提醒雇主时刻把握竞争机遇</p>
                        <Tabs animated={false}>
                            <TabPane tab="当前雇主" key="1">
                                <Employer
                                    data={data_jiuyang}
                                    desData={description_jiuyang}
                                    sort_mentioned={mentioned_jiuyang}
                                    sort_special={special_jiuyang}
                                    descriptionData={legend_jiuyang}
                                /></TabPane>
                            <TabPane tab="AO史密斯" key="2">
                                <Employer
                                    data={data_ao}
                                    desData={description_ao}
                                    sort_mentioned={mentioned_ao}
                                    sort_special={special_ao}
                                    descriptionData={legend_ao}
                                />
                            </TabPane>
                            <TabPane tab="美的电器" key="3">
                                <Employer
                                    data={data_midea}
                                    desData={description_midea}
                                    sort_mentioned={mentioned_midea}
                                    sort_special={special_midea}
                                    descriptionData={legend_midea}
                                />
                            </TabPane>
                            <TabPane tab="行业数据" key="4">
                                <Employer
                                    data={data_peer}
                                    desData={description_peer}
                                    sort_mentioned={mentioned_peer}
                                    sort_special={special_peer}
                                    descriptionData={legend_peer}
                                />
                            </TabPane>

                        </Tabs>
                    </div>
                </div>
                <div className="demo-footer">
                    {/*<Button className="apply-use-btn">申请试用</Button>*/}
                </div>
            </div>
        );
    }
}
