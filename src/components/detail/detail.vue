<template>
  <div class="box-bige">
    <div class="container-fluid title-box">
      <b-container class="container">
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
              <span class="right-span2">74.0</span>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="content-fluid">
        <b-container class="de-cont">
          <b-row>
            <b-col lg="9" md="9" sm="12" cols="12" class="col-left">
              <div class="left-cont">
                <div class="left-head font2" name="jump1" role="anchor">
                  项目概况
                </div>
                <b-row class="left-p">
                  <b-col lg="2" md="2" sm="2" cols="12">众筹开始时间</b-col>
                  <b-col lg="10" md="10" sm="10" cols="12">
                    2017年11月17日 21时00分
                  </b-col>
                </b-row>
                <b-row class="left-p">
                  <b-col lg="2" md="2" sm="2" cols="12">众筹结束时间</b-col>
                  <b-col lg="10" md="10" sm="10" cols="12">
                    2017年11月30日 21时00分
                  </b-col>
                </b-row>
                <b-row class="left-p">
                  <b-col lg="2" md="2" sm="2" cols="12" class="left-span left-sp1">项目发行基本信息</b-col>
                  <b-col lg="10" cols="12">
                    <table class="table table-bordered font2">
                      <tbody><tr class="active">
                        <td>ICO总量</td>
                        <td>代币总量</td>
                      </tr>
                      <tr class="tab-tr">
                        <td>2.17亿</td>
                        <td>7亿</td>
                      </tr>
                      <tr class="active">
                        <td>募资上限</td>
                        <td>接受币种</td>
                      </tr>
                      <tr class="tab-tr">
                        <td>20000000美金</td>
                        <td>ETH</td>
                      </tr>
                      <tr class="active">
                        <td>代币类型</td>
                        <td>官网</td>
                      </tr>
                      <tr class="tab-tr">
                        <td>自建公链</td>
                        <td><a class="url" href="https://genaro.network" target="_blank">https://genaro.network</a></td>
                      </tr>
                      </tbody></table>
                  </b-col>
                </b-row>
                <b-row class="left-p">
                  <b-col lg="2" md="2" sm="2" cols="12" class="left-span">项目说明</b-col>
                  <b-col class="p-state" lg="10" md="10" sm="10" cols="12">
                    <p>参投前请先阅读GNX代币购买协议&nbsp; <a href="https://genaro.network/en/documentation/agreement" target="_blank">https://genaro.network/en/documentation/agreement</a></p><p>Genaro旨在建立一站式区块链技术的去中心化存储网络和完整的公链，缔造区块链3.0存储生态，为DAPP开发者搭建一个底层平台。区块链1.0时代，比特币构造了去中心化存储账本，区块链2.0时代，以太坊构造了去中心化执行智能合约，区块链3.0，去中心化存储大数据。用户数据被分割、加密并随机分配到不同节点进行多次备份，只有具备私钥才能进行解锁，提升了存储的安全性（避免盗窃、丢失）；多节点存储使数据可以随时被调用；就近存储保证了调用速度，更加高效；竞争性的存储市场降低了存储成本。相对传统中心化云存储，Genaro更加安全、高效、经济，只有当区块链有能力处理现实世界中海量的数据的时候，区块链才能真正得到大范围的应用。</p><p><br></p>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col lg="3" md="3" sm="12" cols="12">

            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .box-bige
    min-height: 100%;
    padding-bottom: 110px;
    .title-box
      height: auto;
      width: 100%;
      background-color: #574F60;
    .container-fluid
      padding: 0px
      .container
        padding: 0px
        .box-sm
          padding-left: 10px;
          padding-right: 10px;
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
        .de-cont
          .col-left
            padding-right: 10px;
            padding-left: 10px;
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
          .col-right
            padding-right: 10px;
            padding-left: 10px;
            margin-bottom: 40px;
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
</style>
