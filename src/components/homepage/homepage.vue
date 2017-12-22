<template>
  <div>
    <IHeader></IHeader>
    <b-container fluid class="container-fluid" id="box-bige">
      <b-container>
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
        <Project :items="this.data"></Project>
        <p class="underway-p">
          进行中的项目
        </p>
        <b-container class="list-container">
          <cal-list></cal-list>
        </b-container>
      </b-container>
    </b-container>
    <IFooter></IFooter>
    <Fix :scrollmyself="true"></Fix>
  </div>
</template>
<script>
  import IHeader from '@/components/header/iHeader'
  import IFooter from '@/components/footer/iFooter'
  import Fix from '@/components/fix/fix'
  import Project from '@/components/project/project'
  import CalendarList from '@/components/calendarList/calendarList.vue'
  import api from '../../api/index'

  export default {
    components: {
      calList: CalendarList,
      IHeader,
      IFooter,
      Fix,
      Project
    },
    data () {
      return {
        slide: 0,
        sliding: null,
        data: [
          {
            beginTime: null,
            id: 1,
            iocTotal: '',
            officialWebsite: '',
            overTime: null,
            projectDescription: '',
            projectIntroduction: '',
            projectName: '',
            prospectusUpperlimit: '',
            rating: '5',
            tokenAccept: '',
            tokenTotal: '',
            tokenType: ''
          },
          {
            beginTime: null,
            id: 2,
            iocTotal: '',
            officialWebsite: '',
            overTime: null,
            projectDescription: '',
            projectIntroduction: '',
            projectName: '',
            prospectusUpperlimit: '',
            rating: '5',
            tokenAccept: '',
            tokenTotal: '',
            tokenType: ''
          }
        ]
      }
    },
    created () {
      this._getHomepage()
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      },
      _getHomepage: function () {
        api.getHomepage().then((res) => {
          this.data = Array.from(res.data.data)
        })
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
        padding-left 10px;
        padding-right 10px;
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
      padding-left: 10px;
      padding-right: 10px;
      .p-spn1
        font-size: 20px;
        color: #000;
      a .p-spn2
        float: right;
        color: #0072E6;
        font-size: 12px;
    .underway-p
      width: 100%;
      height: 71px;
      line-height: 71px;
      padding-left: 10px;
      padding-right: 10px;
      color: #574F60;
      font-size: 20px;
    .list-container
      padding-left 10px
      padding-right 10px
  @media (min-width: 1200px)
    .container
      max-width: 1170px;
</style>
