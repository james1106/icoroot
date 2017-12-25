<template>
  <div>
    <b-row align-h="center" class="row">
      <b-col md="3" sm="6" xs="12" class="box" v-for="item in items" :key="item.id">
        <div class="box-cont">
          <div class="box-img lazyload " data-src="//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557" style="background-image: url(&quot;//cdn.icoroot.com/recommend/201711135a09209f1fedc.png?_=20171206142557&quot;);">
            <a @click="selectProject(item.id, item)">
              <img class="lazyload" data-src="//cdn.icoroot.com/project/201711135a090d5c30a57.png" alt="" src="//cdn.icoroot.com/project/201711135a090d5c30a57.png">
            </a>
            <a @click="selectProject(item.id, item)">
              <div class="fenshu">
                <span class="sp1">评级</span>
                <span class="sp2">77.0</span>
              </div>
            </a>
          </div>
          <div class="box-bottom">
            <a href="https://www.icoroot.com/project/detail/115"><p class="box-p1">CyberMiles</p></a>
            <a href="https://www.icoroot.com/project/detail/115"><p class="box-p2">{{item.projectDescription}}</p></a>

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
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    props: {
      items: {
        type: Array,
        default: ''
      }
    },
    data () {
      return {}
    },
    methods: {
      selectProject (id, item) {
        this.setProject(item)
        this.$router.push({
          path: `/project/${id}`
        })
      },
      ...mapMutations({
        setProject: 'SET_PROJECT'
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
