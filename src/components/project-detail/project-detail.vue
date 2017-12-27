<template>
  <div class="box-bige">
    <IHeader></IHeader>
    <b-container fluid class="title-box">
      <b-container>
        <b-row>
          <b-col sm="9" cols="12" class="box-sm">
            <div class="box-sm-top">
              <div class="sm-img">
                <img class="lazyload" data-src="//cdn.icoroot.com/project/2017103159f80e2f0899a.png" alt="" src="//cdn.icoroot.com/project/2017103159f80e2f0899a.png">
              </div>
              <div class="sm-neirong">
                Genaro Network
              </div>
              <div id="topContainer">
                <div class="title-nav" id="topStickyNav">
                  <ul class="box-sm-bottom">
                    <li><a href="#" class="jump a-active" jump="jump1" jump-margin-top="10">项目概况</a>
                    </li>
                    <li><a href="#" class="jump" jump="jump2">市场分析</a></li>
                    <li><a href="#" class="jump" jump="jump3">团队分析</a></li>
                    <li><a href="#" class="jump" jump="jump4">技术分析</a></li>
                    <li><a href="#" class="jump" jump="jump5">资金监管分析</a></li>
                    <li><a href="#" class="jump" jump="jump6">盈利模式分析</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </b-col>
          <b-col sm="3" cols="12" right class="box-rating">
            <div class="sm-right font2" id="background-image" style="display: block;">
              <span class="right-span1">RATING</span>
              <span class="right-span2">{{data.projectOverview.rating}}</span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container fluid class="content-fluid">
      <b-container>
        <b-row>
          <b-col lg="9" md="12" sm="12" cols="12" class="col-left">
            <div class="left-cont">
              <div class="left-head font2" name="jump1" role="anchor">
                项目概况
              </div>
              <b-row class="left-p">
                <b-col class="left-span" lg="2" md="2" sm="12" cols="12">众筹开始时间</b-col>
                <b-col class="right-span" lg="10" md="10" sm="12" cols="12">
                  {{data.projectOverview.beginTime}}
                </b-col>
              </b-row>
              <b-row class="left-p">
                <b-col class="left-span" lg="2" md="2" sm="12" cols="12">众筹结束时间</b-col>
                <b-col class="right-span" lg="10" md="10" sm="12" cols="12">
                  {{data.projectOverview.overTime}}
                </b-col>
              </b-row>
              <b-row class="left-p">
                <b-col lg="2" md="2" sm="2" cols="12" class="left-span left-sp1">项目发行基本信息</b-col>
                <b-col lg="10" md="10" sm="10" cols="12">
                  <table class="table table-bordered font2">
                    <tbody><tr class="active">
                      <td>ICO总量</td>
                      <td>代币总量</td>
                    </tr>
                    <tr class="tab-tr">
                      <td>{{data.projectOverview.iocTotal}}</td>
                      <td>{{data.projectOverview.tokenTotal}}</td>
                    </tr>
                    <tr class="active">
                      <td>募资上限</td>
                      <td>接受币种</td>
                    </tr>
                    <tr class="tab-tr">
                      <td>{{data.projectOverview.prospectusUpperlimit}}</td>
                      <td>{{data.projectOverview.tokenAccept}}</td>
                    </tr>
                    <tr class="active">
                      <td>代币类型</td>
                      <td>官网</td>
                    </tr>
                    <tr class="tab-tr">
                      <td>{{data.projectOverview.tokenType}}</td>
                      <td><a class="url" :href=data.projectOverview.officialWebsite target="_blank">{{data.projectOverview.officialWebsite}}</a></td>
                    </tr>
                    </tbody></table>
                </b-col>
              </b-row>
              <b-row class="left-p">
                <b-col lg="2" md="2" sm="2" cols="12" class="left-span">项目说明</b-col>
                <b-col class="p-state" lg="10" md="10" sm="10" cols="12">
                  {{data.marketAnalysis.projectDescription}}
                </b-col>
              </b-row>
            </div>
            <p class="bg-p"></p>
            <div class="left-cont">
              <div class="gauge font2">

                <p class="p1">Genaro Network评级报告</p>
                <p class="p3"><span class="grade-sp1">74.0</span><span class="grade-sp2">分</span></p>
              </div>
              <!-- 市场分析 -->
              <div class="left-head font2 left-fen-p" name="jump2" role="anchor">
                一. 市场分析
              </div>
              <div class="left-p left-p1 font1">
                <p><strong>概述</strong></p><p>{{data.marketAnalysis.summary}}</p><p><strong>项目优势</strong></p><p>{{data.marketAnalysis.advantage}}</p><p><strong>小结</strong></p><p>{{data.marketAnalysis.conclusion}}</p>
              </div>
              <div class="left-p left-p1 font1">
                <h4 class="font1">市场评分参数
                  <span>总分：100分</span>
                  <span>有效得分：{{data.projectOverview.rating}}分</span>
                </h4>
              </div>
              <b-row class="left-p left-p2 row">
                <b-col lg="8" md="8" sm="8" cols="12">
                  <b-table :items="marketItems" :fields="fields"></b-table>
                </b-col>
                <b-col lg="4" md="4" sm="4" cols="12">
                  <pie :options="marketOptions"></pie>
                </b-col>
              </b-row>
              <!-- 团队分析 -->
              <div class="left-head font2 left-fen-p" name="jump3" role="anchor">
                二. 团队分析
              </div>
              <div class="row">
                <dl class="col-sm-4 tm-dl font2">
                  <dt>
                    <img class="lazyload" data-src="//cdn.icoroot.com/project/2017091859bf840608ac5.png" alt="" src="//cdn.icoroot.com/project/2017091859bf840608ac5.png">
                  </dt>
                  <dd class="tm-dd1">Larry Liu</dd>
                  <dd class="tm-dd2">CEO</dd>
                </dl>
                <dl class="col-sm-4 tm-dl font2">
                  <dt>
                    <img class="lazyload" data-src="//cdn.icoroot.com/project/2017091859bf84060bc1d.png" alt="" src="//cdn.icoroot.com/project/2017091859bf84060bc1d.png">
                  </dt>
                  <dd class="tm-dd1">Waylon Wu</dd>
                  <dd class="tm-dd2">CTO</dd>
                </dl>
                <dl class="col-sm-4 tm-dl font2">
                  <dt>
                    <img class="lazyload" data-src="//cdn.icoroot.com/project/2017091859bf84060eb27.png" alt="" src="//cdn.icoroot.com/project/2017091859bf84060eb27.png">
                  </dt>
                  <dd class="tm-dd1">Andrea Liu</dd>
                  <dd class="tm-dd2">COO</dd>
                </dl>
                <dl class="col-sm-4 tm-dl font2">
                  <dt>
                    <img class="lazyload" data-src="//cdn.icoroot.com/project/201711105a05868f4fad1.png" alt="" src="//cdn.icoroot.com/project/201711105a05868f4fad1.png">
                  </dt>
                  <dd class="tm-dd1">​Jason Inch</dd>
                  <dd class="tm-dd2">战略总监</dd>
                </dl>
              </div>
              <div class="left-p left-p1 font1">
                <p><strong>概述</strong></p><p>{{data.teamAnalysis.summary}}</p><p><strong>小结</strong></p><p>{{data.teamAnalysis.conclusion}}</p>
              </div>

              <div class="left-p left-p1 font1">
                <h4 class="font1">团队评分参数
                  <span>总分：100分</span>
                  <span>有效得分：{{teamItems[7].effective_score}} 分</span>
                </h4>
              </div>
              <b-row class="left-p left-p2 row">
                <b-col lg="8" md="8" sm="8" cols="12">
                  <b-table :items="teamItems" :fields="fields"></b-table>
                </b-col>
                <b-col lg="4" md="4" sm="4" cols="12">
                  <pie :options="teamOptions"></pie>
                </b-col>
              </b-row>
              <!-- 技术分析 -->
              <div class="left-head font2 left-fen-p" name="jump4" role="anchor">
                三. 技术分析
              </div>
              <div class="left-p left-p1 font2">
                <p>Genaro网络包含三个项目：Genaro公链、Genaro存储、Genaro孵化器及加速器。</p><p>为了支持Genaro生态系统的发展，Genaro会在世界各地建立孵化器以帮助组织和个人建立基于Genaro网络的应用。Genaro的目标是将云服务搬到区块链上，将“云存储”改造为“链存储”。</p><table><tbody><tr style="height:17px" class="firstRow"><td width="422" valign="top" style="padding: 4px; border-width: 1px; border-color: windowtext;"><p><strong><span style="font-family: 'Book Antiqua';color: rgb(46, 80, 30);font-size: 13px">Genaro</span></strong><strong><span style="font-family: 'Songti SC Regular';color: rgb(46, 80, 30);font-size: 13px">去中心化存储网络</span></strong></p></td></tr><tr style="height:61px"><td width="422" valign="top" style="padding: 4px; border-left-width: 1px; border-left-color: windowtext; border-right-width: 1px; border-right-color: windowtext; border-top: none; border-bottom-width: 1px; border-bottom-color: windowtext;"><p><span style=";font-family:'Superclarendon Black';color:rgb(81,81,81);font-size:10px">&nbsp;&nbsp; Genaro </span><span style=";font-family:'Songti SC Regular';color:rgb(81,81,81);font-size:10px">是一个基于区块链技术的存储空间，旨在建立一个基于区块链技术的可靠的去中心化的存储网络，用户可以将</span><span style=";font-family:'Superclarendon Black';color:rgb(81,81,81);font-size:10px">Genaro</span><span style=";font-family:'Songti SC Regular';color:rgb(81,81,81);font-size:10px">作为一个高效且经济的私人永久云存储途径。</span></p><p><span style=";font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">&nbsp; &nbsp; </span><span style=";font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">和中央服务器相比，</span><span style=";font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">Genaro </span><span style=";font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">网络是一个更加隐私、有效和经济的永久存储空间。数据被分割、加密，并随机分配到不同节点进行多次备份，没有用户的私人秘钥任何人不能读取或改写这些数据</span></p></td></tr><tr style="height:17px"><td width="422" valign="top" style="padding: 4px; border-left-width: 1px; border-left-color: windowtext; border-right-width: 1px; border-right-color: windowtext; border-top: none; border-bottom-width: 1px; border-bottom-color: windowtext;"><p><strong><span style="font-family: 'Book Antiqua';color: rgb(46, 80, 30);font-size: 13px">PoR</span></strong><strong><span style="font-family: 'Songti SC Regular';color: rgb(46, 80, 30);font-size: 13px">技术</span></strong></p></td></tr><tr style="height:77px"><td width="422" valign="top" style="padding: 4px; border-left-width: 1px; border-left-color: windowtext; border-right-width: 1px; border-right-color: windowtext; border-top: none; border-bottom-width: 1px; border-bottom-color: windowtext;"><p><span style=";font-family:'Superclarendon Black';color:rgb(81,81,81);font-size:10px">&nbsp; </span><span style=";font-family:'Songti SC Regular';color:rgb(81,81,81);font-size:10px">官方白皮书中提到了使用</span><span style=";font-family:'Superclarendon Black';color:rgb(81,81,81);font-size:10px">PoR</span><span style=";font-family:'Songti SC Regular';color:rgb(81,81,81);font-size:10px">技术，在用户不下载文件的前提下检测文件是否损坏或丢失。在</span><span style=";font-family:'Superclarendon Black';color:rgb(81,81,81);font-size:10px">PoR</span><span style=";font-family:'Songti SC Regular';color:rgb(81,81,81);font-size:10px">中，验证者代表请求文件的网络节点，证明者代表提供文件的网络节点。</span></p><p><span style=";font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">&nbsp; </span><span style=";font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">使用</span><span style="font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">&nbsp;</span><span style=";font-family:'Times New Roman';color:rgb(68,68,68);font-size:10px">PoR </span><span style=";font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">协议加密文件并随机嵌入一组名为</span><span style="font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">“</span><span style=";font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">守卫</span><span style="font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">”</span><span style=";font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">的随机值检查块。</span><span style="font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">&nbsp;</span><span style=";font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">验证者通过指定</span><span style="font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">“</span><span style=";font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">守卫</span><span style="font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">”</span><span style=";font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">集合的位置并要求证明者返回相关联的</span><span style="font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">“</span><span style=";font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">守卫</span><span style="font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">”</span><span style="font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">值</span><span style="font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">&nbsp;</span><span style=";font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">来挑战证明者。如果证明者修改或删除了大部分文件，很可能也会抑制</span><span style="font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">&nbsp;</span><span style=";font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">一些</span><span style="font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">“</span><span style=";font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">守卫</span><span style="font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">”</span><span style=";font-family:'PingFang SC Regular';color:rgb(68,68,68);font-size:10px">。因此，不太可能对验证者进行正确的响应。</span><span style="font-family:'Avenir Next Regular';color:rgb(68,68,68);font-size:10px">&nbsp;</span></p></td></tr><tr style="height:17px"><td width="422" valign="top" style="padding: 4px; border-left-width: 1px; border-left-color: windowtext; border-right-width: 1px; border-right-color: windowtext; border-top: none; border-bottom-width: 1px; border-bottom-color: windowtext;"><p><strong><span style="font-family: 'Book Antiqua';color: rgb(46, 80, 30);font-size: 13px">Genaro</span></strong><strong><span style="font-family: 'Songti SC Regular';color: rgb(46, 80, 30);font-size: 13px">公链</span></strong></p></td></tr><tr style="height:45px"><td width="422" valign="top" style="padding: 4px; border-left-width: 1px; border-left-color: windowtext; border-right-width: 1px; border-right-color: windowtext; border-top: none; border-bottom-width: 1px; border-bottom-color: windowtext;"><p><span style=";font-family:'Superclarendon Black';color:rgb(81,81,81);font-size:10px">Genaro</span><span style=";font-family:'Songti SC Regular';color:rgb(81,81,81);font-size:10px">网络是第一个支持去中心化存储的公链，提供合约部署和存储的一站式解决方案。在</span><span style=";font-family:'Superclarendon Black';color:rgb(81,81,81);font-size:10px">Genaro</span><span style=";font-family:'Songti SC Regular';color:rgb(81,81,81);font-size:10px">网络中，每个区块由存储活动产生，矿工被称为收据制造者（</span><span style=";font-family:'Superclarendon Black';color:rgb(81,81,81);font-size:10px">Receipt Maker</span><span style=";font-family:'Songti SC Regular';color:rgb(81,81,81);font-size:10px">），他们被节点选中为存储活动生成收据。收据见证人（</span><span style=";font-family:'Superclarendon Black';color:rgb(81,81,81);font-size:10px">Receipt Prover</span><span style=";font-family:'Songti SC Regular';color:rgb(81,81,81);font-size:10px">）为网络提供算力，证明存储有效性以获得奖励。</span></p></td></tr></tbody></table><p><strong>小结</strong></p><p>Genaro目标是建立一个去中心化存储的生态系统。系统包含Genaro公链和去中心化存储网络，同时支持合约的发布和大数据量存储。在以存储为主的Genaro网络中，合约的地位显得有点鸡肋。而且，当前以太坊的性能问题Genaro公链也会存在，但白皮书没有更进一步的阐述。</p><p><br></p>
              </div>
              <div class="left-p left-p1 font1">
                <h4 class="font1">技术评分参数
                  <span>总分：100分</span>
                  <span>有效得分：{{techItems[7].effective_score}}分</span>
                </h4>
              </div>
              <b-row class="left-p left-p2 row">
                <b-col lg="8" md="8" sm="8" cols="12">
                  <b-table :items="techItems" :fields="fields"></b-table>
                </b-col>
                <b-col lg="4" md="4" sm="4" cols="12">
                  <pie :options="techOptions"></pie>
                </b-col>
              </b-row>
              <!-- 资金监管分析 -->
              <div class="left-head font2 left-fen-p" name="jump5" role="anchor">
                四. 资金监管分析
              </div>
              <div class="left-p left-p1 font2">
                <p><strong>概述&nbsp;&nbsp;&nbsp;&nbsp;</strong></p><p>{{data.superviseAnalysis.summary}}</p><p><br></p>
              </div>

              <div class="left-p left-p1 font1">
                <h4 class="font1">资金监管评分参数
                  <span>总分：100分</span>
                  <span>有效得分：{{superviseItems[2].effective_score}}分</span>
                </h4>
              </div>
              <b-row class="left-p left-p2 row">
                <b-col lg="8" md="8" sm="8" cols="12">
                  <b-table :items="superviseItems" :fields="fields"></b-table>
                </b-col>
                <b-col lg="4" md="4" sm="4" cols="12">
                  <pie :options="superviseOptions"></pie>
                </b-col>
              </b-row>
              <!-- 盈利模式分析 -->
              <div class="left-head font2 left-fen-p" name="jump6" role="anchor">
                五. 盈利模式分析
              </div>
              <div class="left-p left-p1 font2">
                <p><strong>概述</strong></p><p>{{data.profitAnalysis.summary}}</p><p><br></p>
              </div>

              <div class="left-p left-p1 font1">
                <h4 class="font1">盈利模式评分参数
                  <span>总分：100分</span>
                  <span>有效得分：{{profitItems[1].effective_score}}分</span>
                </h4>
              </div>
              <b-row class="left-p left-p2 row">
                <b-col lg="8" md="8" sm="8" cols="12">
                  <b-table :items="profitItems" :fields="fields"></b-table>
                </b-col>
                <b-col lg="4" md="4" sm="4" cols="12">
                  <pie :options="profitOptions"></pie>
                </b-col>
              </b-row>
              <!-- 投资建议 -->
              <div class="left-head font2">
                投资建议
              </div>
              <p class="zy-p1 font1">总分： 100分</p>
              <p class="zy-p2 font1">74.0</p>
              <div class="left-p left-p2">
                <table class="font2 bi-ge zy-bg">
                  <tbody><tr class="ttr ttr1">
                    <td></td>
                    <td>维度</td>
                    <td>总比分占比</td>
                    <td>项目总分</td>
                    <td>有效得分</td>
                  </tr>
                  <tr class="ttr ttr2">
                    <td style="width: 10px;background-color: #36BBD2;"></td>
                    <td>市场评分</td>
                    <td>20%</td>
                    <td>{{marketItems[3].effective_score}} 分</td>
                    <td>{{score.marketScore }} 分</td>
                  </tr>
                  <tr class="ttr ttr2">
                    <td style="width: 10px;background-color: #3D586A;"></td>
                    <td>团队评分</td>
                    <td>30%</td>
                    <td>{{teamItems[7].effective_score}} 分</td>
                    <td>{{score.teamScore }} 分</td>
                  </tr>
                  <tr class="ttr ttr2">
                    <td style="width: 10px;background-color: #85C225;"></td>
                    <td>技术评分</td>
                    <td>30%</td>
                    <td>{{techItems[7].effective_score}} 分</td>
                    <td>{{score.techScore }} 分</td>
                  </tr>
                  <tr class="ttr ttr2">
                    <td style="width: 10px;background-color: #EC6908;"></td>
                    <td>盈利模式评分</td>
                    <td>10%</td>
                    <td>{{superviseItems[2].effective_score}}分</td>
                    <td>{{score.superviseScore}} 分</td>
                  </tr>
                  <tr class="ttr ttr2">
                    <td style="width: 10px;background-color: #D6B3D4;"></td>
                    <td>资金管监管评分</td>
                    <td>10%</td>
                    <td>{{profitItems[1].effective_score}} 分</td>
                    <td>{{score.profitScore}} 分</td>
                  </tr>
                  <tr class="ttr ttr3">
                    <td></td>
                    <td>总计</td>
                    <td></td>
                    <td></td>
                    <td>{{score.totalScore}} 分</td>
                  </tr>
                  </tbody></table>
              </div>
              <table class="table table-striped font2">
                <tbody><tr>
                  <td>80~100</td>
                  <td>高质量资产投资项目</td>
                </tr>
                <tr>
                  <td>60~80</td>
                  <td>未来有向上趋势</td>
                </tr>
                <tr>
                  <td>40~60</td>
                  <td>风险性投资项目</td>
                </tr>
                <tr>
                  <td>20~40</td>
                  <td>高风险，可疑性项目</td>
                </tr>
                <tr>
                  <td>0~20</td>
                  <td>多风险提示项目</td>
                </tr>
                </tbody></table>
              <!-- 声明 -->
              <div class="left-head font2">
                声明
              </div>
              <p class="font1 statement">
                1. 评级分数参照评级规则表，参考进行投资决策。
              </p>
              <p class="font1 statement">
                2.本次评级依据评级对象提供或已经正式对外公布的信息，相关信息的合法性、真实性、完整性、准确性由评级对象负责。
              </p>
              <p class="font1 statement">
                3. 本报告的分析及结论只能用于相关决策参考，不构成任何买入或卖出等投资建议，ICO源不对投资者据此操作造成的任何损失承担后果。
              </p>
              <p class="font1 statement">
                4. 本报告版权属于ICO源所有，未经授权，任何机构和个人不得复制、转载、出售和发布，如引用、刊发，须注明出处，且不得歪曲和篡改。
              </p>
            </div>
          </b-col>

          <b-col lg="3" md="12" sm="12" cols="12" class="col-right">
            <div class="right-cont font2">

              <div id="exchangeProgressArea" style="display:none;">
                <p id="exchangeStatus" class="can-bili-p">
                  已筹 <span id="crowdTotalSupply">-</span> <span>ETH</span>
                </p>
              </div>

              <span class="can-time-p timeOut crowdTimer" style="display:none;" id="time-40" timeclass="time-40" time="">
                                    </span>

              <p class="can-duihuan-p needMM">
                兑换比例：
                <span>
                                            1 ETH = <span id="crowdChangeRate">-</span> <span id="crowdSymbolName" class="crowdSymbolName">-</span>
                                        </span>
              </p>

              <a href="javascript:;" class="btn btn-cheng can-btns" id="btnProjectLoading" style="display: none;">
                <i class="crowdloading"></i>
              </a>

              <a href="javascript:;" class="btn btn-cheng can-btns" style="" id="btnNeedMetaMask">
                安装MetaMask参与众筹
              </a>
              <a href="javascript:;" class="btn btn-cheng can-btns" style="display: none;" id="btnNeedLoginMetaMask">
                登录MetaMask参与众筹
              </a>
              <a href="javascript:;" class="btn btn-nocheng can-btns" style="display: none;" id="btnProjectCommingSoon">
                即将开始众筹
              </a>
              <a href="javascript:;" class="btn btn-nocheng can-btns" style="display: none;" id="btnIssueToken">
                等待发放代币
              </a>
              <a href="javascript:;" class="btn btn-cheng can-btns" style="display: none;" id="btnWithdrawToken">
                我要提币
              </a>
              <a href="javascript:;" class="btn btn-nocheng can-btns" style="display: none;" id="btnCrowdOver">
                众筹结束
              </a>
              <a href="javascript:;" class="btn btn-cheng can-btns" style="display: none;" id="btnJoinProject">
                参与众筹
              </a>

              <dl class="can-dl">
                <dt class="can-dl-dt"><img src="//cdn.icoroot.com/public/static/img/Path2162.svg" alt="">
                </dt>
                <dd class="can-dl-dd1">MetaMask</dd>

                <dd class="can-dl-hide needMMHide">请使用MetaMask插件登录您的钱包</dd>

                <div class="qian-hide needMM">
                  <a href="javascript:;" target="_blank" title="查看我的交易记录">
                    <dd class="can-dl-dd2" id="crowdAccountAddress"></dd>
                  </a>
                  <dd class="can-dl-dd3">
                    我的ETH：<span id="crowdEthBalance">-</span>
                    <span>ETH</span>
                  </dd>
                  <dd class="can-dl-dd3" id="rightDepositedETH" style="display:none;">
                    已投ETH：<span class="crowdSuppiedEth" id="crowdSuppiedEth">-</span>
                    <span>ETH</span>
                    <a href="javascript:;" id="btnWithdraw" style="display: none;">撤资</a>
                  </dd>
                  <dd class="can-dl-dd3" id="rightPreCalcToken" style="display:none;">
                    预计获得：<span class="crowdPreCalcToken">-</span>
                    <span id="crowdSymbolName" class="crowdSymbolName">-</span>
                  </dd>
                </div>
              </dl>
            </div>
            <p class="bg-p"></p>
            <div class="right-cont font2">
              <div class="left-head font2">
                <!-- <span class="iconfont icon-lianjie"></span> -->
                官网直投
              </div>
              <p class="zhi-time-p">
                于 2017年11月30日21时00分 结束
              </p>
              <a href="https://genaro.network" target="_blank" class="btn can-btns
                                                                             btn-hui
                                       ">
                ICO结束
              </a>
            </div>
            <p class="bg-p"></p>
            <div class="right-cont font2">
              <div class="left-head font2">
                <span class="iconfont icon-lianjie"></span>
                链接
              </div>
              <div class="lianjie">
                <a href="https://genaro.network" target="_blank" class="right-a" title="http://....">
                  <span class="iconfont icon-zhuye1"></span> 官网
                </a>
                <a href="{empty($detail['link']['site2'])?'javascript:;':$detail['link']['site2']}}" target="_blank" class="right-a" title="slack">
                                <span class="iconfont icon-slack">
                                </span>Slack</a>
                <a href="javascript:;" target="_blank" class="right-a" title="facebook">
                                <span class="iconfont icon-facebookf">
                                </span>暂无</a>
                <a href="https://genaro.network/en/blog/" target="_blank" class="right-a" title="telegram">
                                <span class="iconfont icon-telegram">
                                </span>Telegram</a>
                <a href="https://twitter.com/GenaroNetwork" target="_blank" class="right-a" title="twitter">
                                <span class="iconfont icon-twitter1">
                                </span>Twitter</a>
                <a href="https://genaro.network/en/blog/" target="_blank" class="right-a" title="微博">
                                <span class="iconfont icon-weibo">
                                </span>微博</a>
                <a href="https://github.com/GenaroSanada" target="_blank" class="right-a" title="github">
                                <span class="iconfont icon-github">
                                </span>Github</a>
                <a href="https://genaro.network/en/whitepaper/" target="_blank" class="right-a" title="白皮书">
                                <span class="iconfont icon-shu1">
                                </span>白皮书</a>
              </div>
            </div>
            <p class="bg-p"></p>
            <div class="right-cont font2">
              <div class="left-head font2">
                <span class="iconfont icon-xinwen"></span>
                相关新闻
              </div>
              <div class="news">
                <p class="news-a-p1">
                  <a href="https://www.icoroot.com/news/detail/6">基于区块链的去中心化共享模式能否在云储存市场占有一席之地？</a>
                </p>
                <p class="news-a-p2">
                  <a href="https://www.icoroot.com/news/detail/6">“面向个人用户的免费云盘在2016年出现了一波关停潮，你们为什么还要做云存储？”
                    面对巴比特记者的这一提问，Genaro项目负责人刘昱反而显得相当自信，“这正是我们的机会所在。”</a>
                </p>
                <p><span>2017-09-26</span></p>
              </div>
              <div class="news">
                <p class="news-a-p1">
                  <a href="https://www.icoroot.com/news/detail/38">Datum Presale白名单</a>
                </p>
                <p class="news-a-p2">
                  <a href="https://www.icoroot.com/news/detail/38">为了保持DAT代币公平的分布，我们一直在研究不同的模式，以确保广泛分发，并使关键社区成员参与而不被忽视。我们已经通过预售智能合同中的下列表格，为已登记并致力于最低/最高金额的白名单社区成员ETH地址进行了解决。</a>
                </p>
                <p><span>2017-10-05</span></p>
              </div>
              <div class="news">
                <p class="news-a-p1">
                  <a href="https://www.icoroot.com/news/detail/37">Datum代币销售更新：重新安排到2017年10月中旬</a>
                </p>
                <p class="news-a-p2">
                  <a href="https://www.icoroot.com/news/detail/37">Datum社区的最大利益是将主要的公共销售销售延迟到2017年10月中旬。这个额外的时间将有助于更好的监管理解和透明度，并进一步确保我们的项目完全符合规定，并依赖于稳固的监管基础。</a>
                </p>
                <p><span>2017-10-05</span></p>
              </div>
              <div class="news">
                <p class="news-a-p1">
                  <a href="https://www.icoroot.com/news/detail/51">Inside Launching a Token Sale</a>
                </p>
                <p class="news-a-p2">
                  <a href="https://www.icoroot.com/news/detail/51">Last night we launched our Public Token Sale to the world. Months of work and preparation lead up to this incredible mil</a>
                </p>
                <p><span>2017-10-05</span></p>
              </div>
              <div class="news" style="border-bottom: none;">
                <p class="news-a-p1">
                  <a href="https://www.icoroot.com/news/detail/77">同样是共享CDN+数字资产 为何百度金矿退避三分而迅雷却高歌猛进？</a>
                </p>
                <p class="news-a-p2">
                  <a href="https://www.icoroot.com/news/detail/77">是规避风险还是高歌猛进！</a>
                </p>
                <p><span>2017-12-05</span></p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <IFooter></IFooter>
    <Fix></Fix>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import IHeader from '@/components/header/iHeader'
  import IFooter from '@/components/footer/iFooter'
  import Fix from '@/components/fix/fix'
  import api from '../../api/index'

  export default {
    components: {
      IHeader,
      IFooter,
      Fix
    },
    data () {
      return {
        id: '',
        marketOptions: {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            x: 'center',
            y: 'bottom'
          },
          calculable: true,
          series: [
            {
              type: 'pie',
              radius: [25, 90],
              center: ['25%', '50%'],
              roseType: 'radius',
              label: {
                normal: {
                  position: 'inner'
                },
                emphasis: {
                  show: true
                }
              },
              lableLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              data: [
                {value: 10, name: '行业发展'},
                {value: 10, name: '市场份额'},
                {value: 10, name: '区块链创新及代币必要性'}
              ]
            }
          ]
        },
        teamOptions: {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            x: 'center',
            y: 'bottom'
          },
          calculable: true,
          series: [
            {
              type: 'pie',
              radius: [25, 90],
              center: ['25%', '50%'],
              roseType: 'radius',
              label: {
                normal: {
                  position: 'inner'
                },
                emphasis: {
                  show: true
                }
              },
              lableLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              data: [
                {value: 10, name: '技术项目经验'},
                {value: 10, name: '技术实力'},
                {value: 10, name: '技术完整性'},
                {value: 10, name: '运营经验'},
                {value: 10, name: '运营实力'},
                {value: 10, name: '运营团队完整性'},
                {value: 10, name: '投资人'}
              ]
            }
          ]
        },
        techOptions: {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            x: 'center',
            y: 'bottom'
          },
          calculable: true,
          series: [
            {
              type: 'pie',
              radius: [25, 90],
              center: ['25%', '50%'],
              roseType: 'radius',
              label: {
                normal: {
                  position: 'inner'
                },
                emphasis: {
                  show: true
                }
              },
              lableLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              data: [
                {value: 10, name: '技术创新'},
                {value: 10, name: '架构设计'},
                {value: 10, name: '网络'},
                {value: 10, name: '技术难度'},
                {value: 10, name: '专利/开源'},
                {value: 10, name: '应用前景'},
                {value: 10, name: '开发进度'}
              ]
            }
          ]
        },
        superviseOptions: {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            x: 'center',
            y: 'bottom'
          },
          calculable: true,
          series: [
            {
              type: 'pie',
              radius: [25, 90],
              center: ['25%', '50%'],
              roseType: 'radius',
              label: {
                normal: {
                  position: 'inner'
                },
                emphasis: {
                  show: true
                }
              },
              lableLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              data: [
                {value: 10, name: '内部监管'},
                {value: 10, name: '外部监管'}
              ]
            }
          ]
        },
        profitOptions: {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            x: 'center',
            y: 'bottom'
          },
          calculable: true,
          series: [
            {
              type: 'pie',
              radius: [25, 90],
              center: ['25%', '50%'],
              roseType: 'radius',
              label: {
                normal: {
                  position: 'inner'
                },
                emphasis: {
                  show: true
                }
              },
              lableLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              data: [
                {value: 10, name: '盈利模式'}
              ]
            }
          ]
        },
        fields: {
          dimension: {
            label: '维度'
          },
          description: {
            label: '说明'
          },
          total_project: {
            label: '项目总分'
          },
          effective_score: {
            label: '有效得分'
          }
        },
        score: {
          marketScore: '',
          teamScore: '',
          techScore: '',
          superviseScore: '',
          profitScore: '',
          totalScore: ''
        },
        marketItems: [
          {
            dimension: '行业发展',
            description: '',
            total_project: '30分',
            effective_score: ''
          },
          {
            dimension: '市场份额',
            description: '',
            total_project: '30分',
            effective_score: ''
          },
          {
            dimension: '区块链创新及代币必要性',
            description: '',
            total_project: '40分',
            effective_score: ''
          },
          {
            dimension: '总计',
            description: '',
            total_project: '100分',
            effective_score: ''
          }
        ],
        teamItems: [
          {
            dimension: '技术团队区块链项目经验',
            description: '',
            total_project: '15分',
            effective_score: ''
          },
          {
            dimension: '技术团队实力',
            description: '',
            total_project: '15分',
            effective_score: ''
          },
          {
            dimension: '技术团队完整性',
            description: '',
            total_project: '10分',
            effective_score: ''
          },
          {
            dimension: '运营团队实力',
            description: '',
            total_project: '15分',
            effective_score: ''
          },
          {
            dimension: '运营团队完整性',
            description: '',
            total_project: '15分',
            effective_score: ''
          },
          {
            dimension: '投资人',
            description: '',
            total_project: '10分',
            effective_score: ''
          },
          {
            dimension: '技术团队完整性',
            description: '',
            total_project: '20分',
            effective_score: ''
          },
          {
            dimension: '总计',
            description: '',
            total_project: '100分',
            effective_score: ''
          }
        ],
        techItems: [
          {
            dimension: '技术创新',
            description: '',
            total_project: '20分',
            effective_score: ''
          },
          {
            dimension: '架构设计',
            description: '',
            total_project: '10分',
            effective_score: ''
          },
          {
            dimension: '网络',
            description: '',
            total_project: '10分',
            effective_score: ''
          },
          {
            dimension: '技术难度',
            description: '',
            total_project: '10分',
            effective_score: ''
          },
          {
            dimension: '专利/开源',
            description: '',
            total_project: '10分',
            effective_score: ''
          },
          {
            dimension: '应用前景',
            description: '',
            total_project: '20分',
            effective_score: ''
          },
          {
            dimension: '开发进度',
            description: '',
            total_project: '20分',
            effective_score: ''
          },
          {
            dimension: '总计',
            description: '',
            total_project: '100分',
            effective_score: ''
          }
        ],
        superviseItems: [
          {
            dimension: '内部监管',
            description: '',
            total_project: '50分',
            effective_score: ''
          },
          {
            dimension: '外部监管',
            description: '',
            total_project: '50分',
            effective_score: ''
          },
          {
            dimension: '总计',
            description: '',
            total_project: '100分',
            effective_score: ''
          }
        ],
        profitItems: [
          {
            dimension: '盈利模式',
            description: '',
            total_project: '100分',
            effective_score: ''
          },
          {
            dimension: '总计',
            description: '',
            total_project: '100分',
            effective_score: ''
          }
        ],
        data: {
          projectOverview: {
            beginTime: '',
            id: '',
            iocTotal: '',
            officialWebsite: '',
            overTime: '',
            projectDescription: '',
            projectIntroduction: '',
            projectName: '',
            prospectusUpperlimit: '',
            rating: '',
            tokenAccept: '',
            tokenTotal: '',
            tokenType: ''
          },
          marketAnalysis: {
            advantage: '',
            conclusion: '',
            id: '',
            industryDevelop: '',
            innovate: '',
            marketShare: '',
            summary: '',
            data: ''
          },
          teamAnalysis: {
            id: '',
            summary: '',
            conclusion: '',
            data: ''
          },
          techAnalysis: {
            id: '',
            summary: '',
            conclusion: '',
            data: ''
          },
          superviseAnalysis: {
            id: '',
            summary: '',
            data: ''
          },
          profitAnalysis: {
            id: '',
            summary: '',
            data: ''
          }
        }
      }
    },
    created () {
      this._getDetail()
    },
    computed: {
      ...mapGetters([
        'project'
      ])
    },
    methods: {
      _getDetail: function () {
        if (!this.project.id) {
          this.$router.push('/')
        }
        api.getDetail(this.project.id).then((res) => {
          this.data = res.data.data
          const marketStrObj = String(this.data.marketAnalysis.data)
          const teamStrObj = String(this.data.teamAnalysis.data)
          const techStrObj = String(this.data.techAnalysis.data)
          const superviseStrObj = String(this.data.superviseAnalysis.data)
          const profitStrObj = String(this.data.profitAnalysis.data)
          const marketArr = marketStrObj.split('|')
          const teamArr = teamStrObj.split('|')
          const techArr = techStrObj.split('|')
          const superviseArr = superviseStrObj.split('|')
          const profitArr = profitStrObj.split('|')
          for (let i = 0; i < marketArr.length - 1; i++) {
            this.marketItems[i].description = marketArr[i].slice(marketArr[i].indexOf('&') + 1, -1)
            this.marketItems[i].effective_score = marketArr[i].slice(0, marketArr[i].indexOf('&'))
            this.marketItems[this.marketItems.length - 1].effective_score += this.marketItems[i].effective_score
          }
          for (let i = 0; i < teamArr.length - 1; i++) {
            this.teamItems[i].description = teamArr[i].slice(teamArr[i].indexOf('&') + 1, -1)
            this.teamItems[i].effective_score = teamArr[i].slice(0, teamArr[i].indexOf('&'))
            this.teamItems[this.teamItems.length - 1].effective_score += this.teamItems[i].effective_score
          }
          for (let i = 0; i < techArr.length - 1; i++) {
            this.techItems[i].description = techArr[i].slice(techArr[i].indexOf('&') + 1, -1)
            this.techItems[i].effective_score = techArr[i].slice(0, techArr[i].indexOf('&'))
            this.techItems[this.techItems.length - 1].effective_score += this.techItems[i].effective_score
          }
          for (let i = 0; i < superviseArr.length - 1; i++) {
            this.superviseItems[i].description = superviseArr[i].slice(superviseArr[i].indexOf('&') + 1, -1)
            this.superviseItems[i].effective_score = superviseArr[i].slice(0, superviseArr[i].indexOf('&'))
            this.superviseItems[this.superviseItems.length - 1].effective_score += this.superviseItems[i].effective_score
          }
          for (let i = 0; i < profitArr.length - 1; i++) {
            this.profitItems[i].description = profitArr[i].slice(profitArr[i].indexOf('&') + 1, -1)
            this.profitItems[i].effective_score = profitArr[i].slice(0, profitArr[i].indexOf('&'))
            this.profitItems[this.profitItems.length - 1].effective_score += this.profitItems[i].effective_score
          }
          this.score.marketScore = parseInt(this.marketItems[3].effective_score) * 0.2
          this.score.teamScore = parseInt(this.teamItems[7].effective_score) * 0.3
          this.score.techScore = parseInt(this.techItems[7].effective_score) * 0.3
          this.score.superviseScore = parseInt(this.superviseItems[2].effective_score) * 0.1
          this.score.profitScore = parseInt(this.profitItems[1].effective_score) * 0.1
          this.score.totalScore = parseFloat(this.score.marketScore) + parseFloat(this.score.teamScore) + parseFloat(this.score.techScore) + parseFloat(this.score.superviseScore) + parseFloat(this.score.profitScore)
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .box-bige
    min-height: 100%;
    .title-box
      height: auto;
      width: 100%;
      background-color: #574F60;
      .container
        padding: 0px
    .container-fluid
      padding: 0px
      .row
        margin: 0
        .box-sm
          padding: 0
          .box-sm-top
            height: 90px;
            width: 100%;
            line-height: 90px;
          .sm-img
            display: inline-block;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            img
              width: 60px;
              height: 60px;
              vertical-align: middle;
          .sm-neirong
            display: inline-block;
            color: #fff;
            font-size: 32px;
            font-weight: bold;
            vertical-align: middle;
            margin-left: 20px;
          #topContainer
            height: 50px;
            overflow: hidden;
            #topStickyNav
              position: relative;
              overflow-x: scroll;
              height: 70px;
              .box-sm-bottom
                width: 100%;
                height: 49px;
                background-color: #443C4D;
                border-radius: 5px 5px 0px 0px;
                li
                  float: left;
                  padding: 0px 30px;
                  height: 50px;
                  line-height: 50px;
                  background-color: #443c4d;
                  a
                    padding: 14px 0px 13.8px;
                    color: #fff;
                    font-size: 14px;
                    text-decoration none
                  a.a-active
                    color: #00CC95;
                    font-weight: bold;
                    border-bottom: 3px solid #00CC95;
        .box-rating
          .sm-right
            width: 131px;
            height: 112px;
            margin: 14px auto;
            overflow: hidden;
            .right-span1
              display: inline-block;
              width: auto;
              height: 14px;
              color: #fff;
              font-size: 10px;
              font-weight: bold;
              margin-top: 26px;
              margin-left: 45px;
            .right-span2
              display: inline-block;
              font-size: 32px;
              font-weight: bold;
              color: #fff;
              margin-top: 0px;
              margin-left: 35px;

    .content-fluid
      height: auto;
      margin-top: 20px;
      padding: 0px;
      .container
        padding: 0px
        .row
          margin: 0
          .col-left
            padding: 0
            margin-bottom: 40px;
            .left-cont
              background-color: #fff;
              height: auto;
              padding: 15px 30px;
              border-radius: 5px;
              .left-head
                height: 50px;
                border-bottom: 2px solid #574F60;
                font-size: 16px;
                color: #574F60;
                line-height: 50px;
              .left-p
                margin: 30px 0px;
                .left-span
                  display: inline-block;
                  font-size: 14px;
                  color: #574F60;
                .right-span
                  display: inline-block;
                  font-size: 14px;
                  color: #574F60;
                  font-weight: bold;
                  padding-left: 20px;
            .bg-p
              width: 100%;
              height: 20px;
              background-color: #EDEEEF;
            .left-cont
              background-color: #fff;
              height: auto;
              padding: 15px 30px;
              border-radius: 5px;
              .gauge
                height: 60px;
                width: 100%;
                border-bottom: 2px solid #574F60;
                margin-bottom: 30px;
                p.p1
                  float: left;
                  height: 60px;
                  line-height: 60px;
                  font-size: 16px;
                  color: #574F60;
                  margin-right: 22px;
                .p3
                  float: right;
                  .grade-sp1
                    display: block;
                    float: left;
                    font-size: 24px;
                    color: #0072E6;
                    font-weight: bold;
                    line-height: 60px;
                  .grade-sp2
                    display: block;
                    float: left;
                    font-size: 24px;
                    color: #0072E6;
                    font-weight: bold;
                    line-height: 60px;
              .left-p
                margin: 30px 0px;
                div
                  table
                    tbody
                      tr.tab-tr
                        td
                          font-weight bold
                      tr.active
                        td
                          background-color #f5f5f5
                .left-span
                  display: inline-block;
                  font-size: 14px;
                  color: #574F60;
                .right-span
                  display: inline-block;
                  font-size: 14px;
                  color: #574F60;
                  font-weight: bold;
                  padding-left: 20px;
                p
                  font-size: 14px;
                  color: #3C3C3C;
                  line-height: 34px;
                  margin: 20px 0px;
                  font-weight: 400;
                h4
                  font-size: 16px;
                  font-weight: 500;
                  color: #574F60;
                  line-height: 42px;
                  margin: 0px;
                  white-space: nowrap;
                  span
                    display: inline-block;
                    font-size: 14px;
                    color: #464646;
                  span:nth-child(1)
                    padding-left: 30px;
                    padding-right: 30px;
              .left-fen-p
                border-bottom: 1px solid #DDDDDD;
              .left-p1
                margin: 20px 0px;
              .left-p2
                margin-bottom: 50px;
              .row
                .tm-dl
                  margin-top: 30px;
                  dt
                    width: 120px;
                    height: 120px;
                    margin: 0 auto 18px;
                    img
                      width: 120px;
                      height: 120px;
                  .tm-dd1
                    font-size: 18px;
                    color: #000;
                    text-align: center;
                    margin-bottom: 8px;
                  .tm-dd2
                    font-size: 14px;
                    color: #959595;
                    text-align: center;
              .table
                margin-left: 0px;
                border: 1px solid #e2e2e2;
              .statement
                font-size: 14px;
                color: #3C3C3C;
                line-height: 26px;
                margin: 15px 0px;
          .col-right
            padding-right: 10px;
            padding-left: 10px;
            margin-bottom: 40px;
            .bg-p
              width: 100%;
              height: 20px;
              background-color: #EDEEEF;
            .right-cont
              width: 100%;
              height: auto;
              background-color: #fff;
              padding: 15px 20px;
              border-radius: 5px;
              margin-left: 0px;
              #exchangeProgressArea
                .can-bili-p
                  margin-top: 20px;
                  text-align: center;
                  font-size: 20px;
                  color: #574F60;
              .can-duihuan-p
                font-size: 14px;
                margin-top: 20px;
                color: #574F60;
                margin-bottom: 10px;
                text-align: center;
              .can-time-p
                display: inline-block;
                width: 100%;
                text-align: center;
                padding-top: 20px;
                /* float: right; */
                color: #574F60;
                font-size: 16px;
                font-weight: bold;
              .can-btns
                width: 100%;
                height: 45px;
                border-radius: 5px;
                /* font-size: 16px; */
                font-weight: bold;
                color: #fff;
                margin: 10px 0px;
                line-height: 30px;
              .btn-cheng
                background-color: #FF9100;
                color: #fff;
              .btn-cheng:hover
                color: #fff;
                background-color: #DB7D00;
              .needMM
                display: none;
              .can-dl
                height: auto;
                width: 100%;
                background-color: #EDEEEF;
                border-radius: 5px;
                overflow: hidden;
                padding: 15px 15px 15px;
                margin-bottom: 5px;
                margin-top: 10px;
                .can-dl-dt
                  text-align: center;
                  height: 70px;
                  img
                    display: inline-block;
                    width: 70px;
                    height: 70px;
                .can-dl-dd1
                  font-size: 12px;
                  color: #574F60;
                  font-weight: bold;
                  text-align: center;
                .can-dl-hide
                  display: none;
                  font-size: 13px;
                  color: #0072E6;
                  white-space: nowrap;
                  padding-top: 15px;
                  padding-bottom: 20px;
                  text-align: center;
                  .can-dl-dd3
                    font-size: 13px;
                    color: #574F60;
                    height: 25px;
                    line-height: 25px;
                    white-space: nowrap;
                .needMMHide
                  display: block;
              .left-head
                height: 50px;
                border-bottom: 2px solid #574F60;
                font-size: 16px;
                color: #574F60;
                line-height: 50px;
              .zhi-time-p
                width: 100%;
                font-size: 14px;
                color: #574F60;
                text-align: center;
                font-weight: bold;
                margin-top: 35px;
              .can-btns
                width: 100%;
                height: 45px;
                border-radius: 5px;
                font-weight: bold;
                color: #fff;
                margin: 10px 0px;
                line-height: 30px;
              .btn-hui
                color: #fff;
                background-color: #A6A2AC;
              .left-head
                height: 50px;
                border-bottom: 2px solid #574F60;
                font-size: 16px;
                color: #574F60;
                line-height: 50px;
                span.iconfont
                  font-size: 25px;
              .lianjie
                height: 170px;
                margin-bottom: 20px;
                .right-a
                  display: inline-block;
                  width: 50%;
                  font-size: 14px;
                  color: #574F60;
                  padding: 10px 0px;
                  float: left;
                  line-height: 22px;
                  overflow: hidden;
                  white-space: normal;
                  text-overflow: ellipsis;
                  border-bottom: 1px solid rgba(166, 162, 172, 0.2);
                  span
                    font-size: 16px;
                    padding-right: 8px;
              .news
                width: 100%;
                height: auto;
                border-bottom: 1px solid #e5e5e5;
                .news-a-p1
                  font-size: 14px;
                  line-height: 20px;
                  color: #0072E6;
                  margin-top: 30px;
                  margin-bottom: 5px;
                  a
                    color: #0072E6;
                .news-a-p2
                  font-size: 14px;
                  margin-bottom: 20px;
                  line-height 16px
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  a
                    color: #5D5D5D;
                p
                  span:nth-child(1)
                    display: inline-block;
                    margin-right: 20px;
                p:nth-child(3)
                  margin-bottom: 20px;
  @media (max-width: 991px) and (min-width: 768px)
    .box-bige
      .container-fluid
        .container
          width: 100%
          #topContainer
            #topStickyNav
              .box-sm-bottom
                li
                  padding: 0px 12px;
                  a
                    padding: 13px 0px 13px;
      .content-fluid
        .row
          .col-left
            .left-cont
              .left-p
                .left-span
                  margin-bottom: 10px;
                .right-span
                  padding-left: 0px;
                  font-size: 14px;
</style>
