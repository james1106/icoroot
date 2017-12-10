<template>
  <b-container fluid class="container-fluid" id="box-bige">
    <b-container class="container">
      <b-row align-h="center" class="box-row">
        <b-col md="9" sm="12" class="col-item">
          <b-carousel id="carousel1"
                      style="text-shadow: 1px 1px 2px #333;"
                      controls
                      indicators
                      background="#ababab"
                      :interval="3000"
                      v-model="slide"
                      @sliding-start="onSlideStart"
                      @sliding-end="onSlideEnd"
          >

            <!-- Text slides with image -->
            <b-carousel-slide caption="First slide"
                              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                              style="height: 300px;background-image: url('https://cdn.icoroot.com/public/static/img/bg-banner1.png?_=20171206142557')"
            ></b-carousel-slide>

            <!-- Text slides with image -->
            <b-carousel-slide caption="First slide"
                              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                              style="height: 300px;background-image: url('https://cdn.icoroot.com/public/static/img/bg-banner2.png?_=20171206142557')"
            ></b-carousel-slide>

          </b-carousel>
        </b-col>
        <b-col md="3" sm="12" class="col-item toutiao">
          <div class="tou-cont">
            <h4>ICO头条</h4>
            <p class="tou-p">
              <a href="https://www.icoroot.com/news/detail/76">
                Genaro 与Storj宣布全面战略合作与产品整合
              </a>
            </p>
            <p class="tou-p">
              <a href="https://www.icoroot.com/news/detail/77">
                同样是共享CDN+数字资产 为何百度金矿退避三分而迅雷却高歌猛进？
              </a>
            </p>
            <p class="tou-p">
              <a href="https://www.icoroot.com/news/detail/78">
                重庆市高度重视区块链发展 区块链在地方落地进程加快
              </a>
            </p>
            <p class="tou-p">
              <a href="https://www.icoroot.com/news/detail/75">
                用AI约会，唱歌，见偶像……PAI想用区块链打造每个人的人工智能
              </a>
            </p>
          </div>
        </b-col>
      </b-row>
      <p class="p-title font1">
        <span class="p-spn1">热门项目</span>
        <a href="https://www.icoroot.com/project/list">
          <span class="p-spn2">查看更多</span>
        </a>
      </p>
      <b-row align-h="center" class="row">
        <b-col md="3" sm="6" xs="12" class="box">
          <div class="box-cont">
            <div class="box-img lazyload " data-src="//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557" style="background-image: url(&quot;//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557&quot;);">
              <a href="https://www.icoroot.com/project/detail/115">
                <img class="lazyload" data-src="//cdn.icoroot.com/project/201711135a090d5c30a57.png" alt="" src="//cdn.icoroot.com/project/201711135a090d5c30a57.png">
              </a>
              <a href="https://www.icoroot.com/project/detail/115">
                <div class="fenshu">
                  <span class="sp1">评级</span>
                  <span class="sp2">77.0</span>
                </div>
              </a>
            </div>
            <div class="box-bottom">
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p1">CyberMiles</p></a>
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p2">旨在链接区块链和现实商业，帮助大众在更多的商业场景中使用区块链带来的更高的商业效率，为现实世界的商业场景提供智能合约服务</p></a>

              <p class="box-p3">
                于 2017-12-05 15:00:00 结束
              </p>

              <a href="https://www.icoroot.com/project/detail/115" class="btn btn-default btn-bg-4" role="button">
                ICO结束
              </a>
            </div>
          </div>
        </b-col>
        <b-col md="3" sm="6" xs="12" class="box">
          <div class="box-cont">
            <div class="box-img lazyload " data-src="//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557" style="background-image: url(&quot;//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557&quot;);">
              <a href="https://www.icoroot.com/project/detail/115">
                <img class="lazyload" data-src="//cdn.icoroot.com/project/201711135a090d5c30a57.png" alt="" src="//cdn.icoroot.com/project/201711135a090d5c30a57.png">
              </a>
              <a href="https://www.icoroot.com/project/detail/115">
                <div class="fenshu">
                  <span class="sp1">评级</span>
                  <span class="sp2">77.0</span>
                </div>
              </a>
            </div>
            <div class="box-bottom">
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p1">CyberMiles</p></a>
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p2">旨在链接区块链和现实商业，帮助大众在更多的商业场景中使用区块链带来的更高的商业效率，为现实世界的商业场景提供智能合约服务</p></a>

              <p class="box-p3">
                于 2017-12-05 15:00:00 结束
              </p>

              <a href="https://www.icoroot.com/project/detail/115" class="btn btn-default btn-bg-4" role="button">
                ICO结束
              </a>
            </div>
          </div>
        </b-col>
        <b-col md="3" sm="6" xs="12" class="box">
          <div class="box-cont">
            <div class="box-img lazyload " data-src="//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557" style="background-image: url(&quot;//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557&quot;);">
              <a href="https://www.icoroot.com/project/detail/115">
                <img class="lazyload" data-src="//cdn.icoroot.com/project/201711135a090d5c30a57.png" alt="" src="//cdn.icoroot.com/project/201711135a090d5c30a57.png">
              </a>
              <a href="https://www.icoroot.com/project/detail/115">
                <div class="fenshu">
                  <span class="sp1">评级</span>
                  <span class="sp2">77.0</span>
                </div>
              </a>
            </div>
            <div class="box-bottom">
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p1">CyberMiles</p></a>
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p2">旨在链接区块链和现实商业，帮助大众在更多的商业场景中使用区块链带来的更高的商业效率，为现实世界的商业场景提供智能合约服务</p></a>

              <p class="box-p3">
                于 2017-12-05 15:00:00 结束
              </p>

              <a href="https://www.icoroot.com/project/detail/115" class="btn btn-default btn-bg-4" role="button">
                ICO结束
              </a>
            </div>
          </div>
        </b-col>
        <b-col md="3" sm="6" xs="12" class="box">
          <div class="box-cont">
            <div class="box-img lazyload " data-src="//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557" style="background-image: url(&quot;//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557&quot;);">
              <a href="https://www.icoroot.com/project/detail/115">
                <img class="lazyload" data-src="//cdn.icoroot.com/project/201711135a090d5c30a57.png" alt="" src="//cdn.icoroot.com/project/201711135a090d5c30a57.png">
              </a>
              <a href="https://www.icoroot.com/project/detail/115">
                <div class="fenshu">
                  <span class="sp1">评级</span>
                  <span class="sp2">77.0</span>
                </div>
              </a>
            </div>
            <div class="box-bottom">
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p1">CyberMiles</p></a>
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p2">旨在链接区块链和现实商业，帮助大众在更多的商业场景中使用区块链带来的更高的商业效率，为现实世界的商业场景提供智能合约服务</p></a>

              <p class="box-p3">
                于 2017-12-05 15:00:00 结束
              </p>

              <a href="https://www.icoroot.com/project/detail/115" class="btn btn-default btn-bg-4" role="button">
                ICO结束
              </a>
            </div>
          </div>
        </b-col>
        <b-col md="3" sm="6" xs="12" class="box">
          <div class="box-cont">
            <div class="box-img lazyload " data-src="//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557" style="background-image: url(&quot;//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557&quot;);">
              <a href="https://www.icoroot.com/project/detail/115">
                <img class="lazyload" data-src="//cdn.icoroot.com/project/201711135a090d5c30a57.png" alt="" src="//cdn.icoroot.com/project/201711135a090d5c30a57.png">
              </a>
              <a href="https://www.icoroot.com/project/detail/115">
                <div class="fenshu">
                  <span class="sp1">评级</span>
                  <span class="sp2">77.0</span>
                </div>
              </a>
            </div>
            <div class="box-bottom">
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p1">CyberMiles</p></a>
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p2">旨在链接区块链和现实商业，帮助大众在更多的商业场景中使用区块链带来的更高的商业效率，为现实世界的商业场景提供智能合约服务</p></a>

              <p class="box-p3">
                于 2017-12-05 15:00:00 结束
              </p>

              <a href="https://www.icoroot.com/project/detail/115" class="btn btn-default btn-bg-4" role="button">
                ICO结束
              </a>
            </div>
          </div>
        </b-col>
        <b-col md="3" sm="6" xs="12" class="box">
          <div class="box-cont">
            <div class="box-img lazyload " data-src="//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557" style="background-image: url(&quot;//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557&quot;);">
              <a href="https://www.icoroot.com/project/detail/115">
                <img class="lazyload" data-src="//cdn.icoroot.com/project/201711135a090d5c30a57.png" alt="" src="//cdn.icoroot.com/project/201711135a090d5c30a57.png">
              </a>
              <a href="https://www.icoroot.com/project/detail/115">
                <div class="fenshu">
                  <span class="sp1">评级</span>
                  <span class="sp2">77.0</span>
                </div>
              </a>
            </div>
            <div class="box-bottom">
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p1">CyberMiles</p></a>
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p2">旨在链接区块链和现实商业，帮助大众在更多的商业场景中使用区块链带来的更高的商业效率，为现实世界的商业场景提供智能合约服务</p></a>

              <p class="box-p3">
                于 2017-12-05 15:00:00 结束
              </p>

              <a href="https://www.icoroot.com/project/detail/115" class="btn btn-default btn-bg-4" role="button">
                ICO结束
              </a>
            </div>
          </div>
        </b-col>
        <b-col md="3" sm="6" xs="12" class="box">
          <div class="box-cont">
            <div class="box-img lazyload " data-src="//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557" style="background-image: url(&quot;//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557&quot;);">
              <a href="https://www.icoroot.com/project/detail/115">
                <img class="lazyload" data-src="//cdn.icoroot.com/project/201711135a090d5c30a57.png" alt="" src="//cdn.icoroot.com/project/201711135a090d5c30a57.png">
              </a>
              <a href="https://www.icoroot.com/project/detail/115">
                <div class="fenshu">
                  <span class="sp1">评级</span>
                  <span class="sp2">77.0</span>
                </div>
              </a>
            </div>
            <div class="box-bottom">
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p1">CyberMiles</p></a>
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p2">旨在链接区块链和现实商业，帮助大众在更多的商业场景中使用区块链带来的更高的商业效率，为现实世界的商业场景提供智能合约服务</p></a>

              <p class="box-p3">
                于 2017-12-05 15:00:00 结束
              </p>

              <a href="https://www.icoroot.com/project/detail/115" class="btn btn-default btn-bg-4" role="button">
                ICO结束
              </a>
            </div>
          </div>
        </b-col>
        <b-col md="3" sm="6" xs="12" class="box">
          <div class="box-cont">
            <div class="box-img lazyload " data-src="//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557" style="background-image: url(&quot;//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557&quot;);">
              <a href="https://www.icoroot.com/project/detail/115">
                <img class="lazyload" data-src="//cdn.icoroot.com/project/201711135a090d5c30a57.png" alt="" src="//cdn.icoroot.com/project/201711135a090d5c30a57.png">
              </a>
              <a href="https://www.icoroot.com/project/detail/115">
                <div class="fenshu">
                  <span class="sp1">评级</span>
                  <span class="sp2">77.0</span>
                </div>
              </a>
            </div>
            <div class="box-bottom">
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p1">CyberMiles</p></a>
              <a href="https://www.icoroot.com/project/detail/115"><p class="box-p2">旨在链接区块链和现实商业，帮助大众在更多的商业场景中使用区块链带来的更高的商业效率，为现实世界的商业场景提供智能合约服务</p></a>

              <p class="box-p3">
                于 2017-12-05 15:00:00 结束
              </p>

              <a href="https://www.icoroot.com/project/detail/115" class="btn btn-default btn-bg-4" role="button">
                ICO结束
              </a>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>
<script>
  export default {
    data () {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  #box-bige
    min-height: 100%
    padding-bottom: 110px;
    margin-top: 20px;
  .container-fluid,.container
    padding: 0px
    .box-row
      background-color #edeeef
      .col-item
        border-radius 5px
        overflow hidden
      .toutiao
        height: 300px;
        padding-right: 10px;
        padding-left: 10px;
        .tou-cont
          width: 100%;
          height: 300px;
          background-color: #fff;
          border-radius: 3px;
          padding-left: 20px;
          padding-right: 20px;
          overflow: hidden;
          h4
            margin: 0px;
            font-size: 14px;
            height: 46px;
            line-height: 46px;
            color: #000;
            font-weight: bold;
            border-bottom: 2px solid #574F60;
          .tou-p
            height: 62px;
            padding: 11px 0px;
            margin-bottom: 0px;
            border-bottom: 1px solid #DDDDDD;
          .tou-p:last-child
              border-bottom 0px
            a
              font-size: 14px;
              color: #574F60;
              line-height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
    .p-title
      height: 63px;
      line-height: 63px;
      width: 100%;
      padding-left: 15px;
      padding-right: 15px;
      .p-spn1
        font-size: 20px;
        color: #000;
      a .p-spn2
        float: right;
        color: #0072E6;
        font-size: 12px;
    .row
      margin: 0px
      .box
        height: 417px;
        padding-right: 10px;
        padding-left: 10px;
        margin-bottom: 20px;
        .box-cont
          width: 100%;
          height: 417px;
          background-color: #fff;
          .box-img
            width: 100%;
            height: 180px;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            text-align: center;
            line-height: 180px;
            position: relative;
            background-size: cover;
            a img
              display: inline-block;
              width: 90px;
              height: 90px;
            a .fenshu
              width: 82px;
              height: 30px;
              background-color: #007EFF;
              border-radius: 3px 0px 0px 3px;
              text-align: center;
              line-height: 30px;
              font-weight: bold;
              color: #fff;
              position: absolute;
              top: 20px;
              right: 0px;
              z-index: 22;
              .sp1
                font-size: 12px;
                vertical-align: middle;
              .sp2
                font-size: 16px;
                vertical-align: middle;
          .box-bottom
            padding-left: 20px;
            padding-right: 20px;
            a .box-p1
              font-size: 18px;
              color: #0072E6;
              font-weight: bold;
              margin-top: 14px;
              margin-bottom: 4px;
            a .box-p2
              font-size: 12px;
              color: #574F60;
              font-weight: lighter;
              height: 41px;
              line-height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              margin-bottom: 5px;
            .box-p3
              height: 63px;
              border-top: 1px solid #EDEDED;
              border-bottom: 1px solid #EDEDED;
              text-align: center;
              line-height: 63px;
              font-size: 16px;
              font-weight: bold;
              color: #574F60;
              margin-bottom: 20px;
            .btn
              display: inline-block;
              padding: 6px 12px;
              margin-bottom: 0;
              font-size: 14px;
              font-weight: 400;
              line-height: 1.42857143;
              text-align: center;
              white-space: nowrap;
              vertical-align: middle;
              -ms-touch-action: manipulation;
              touch-action: manipulation;
              cursor: pointer;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              background-image: none;
              border: 1px solid transparent;
              border-radius: 4px;
            .btn.focus, .btn:focus, .btn:hover
              color: #333;
              text-decoration: none;
            .btn
              width: 100%;
              height: 45px;
              font-size: 14px;
              font-weight: bold;
              border-radius: 3px;
              line-height: 30px;
            .btn-default
              color: #333;
              background-color: #fff;
              border-color: #ccc;
</style>
