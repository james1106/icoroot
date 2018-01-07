<template>
  <div>
    <header>
      <div class="logo-wrapper">
        <img v-lazy="img" class="login" alt="">
      </div>
      <div class="title">后台管理系统</div>
    </header>
    <div class="contain">
      <div class="tabs">
        <div class="tab-wrapper">
          <ul class="tab-select">
            <li>
              <a>请登录你的管理员账号</a>
            </li>
            <li><router-link class="r-link active" to="/ready">即将开始的</router-link></li>
            <li><router-link class="r-link" to="/running">进行中的</router-link></li>
            <li><router-link class="r-link" to="/over">已结束的</router-link></li>
          </ul>
        </div>
      </div>
      <div class="content">
        <div class="content-header">
          <div class="search-wrapper">
            <input type="text">
            <span class="search-button">搜索</span>
          </div>
          <span class="add-button"><router-link to="/addPro">添加新项目</router-link></span>
        </div>
        <router-view to="/ready"></router-view>
      </div>
    </div>
    <IFooter></IFooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import IHeader from '@/components/header/iHeader'
  import IFooter from '@/components/footer/iFooter'

  export default {
    data () {
      return {
        isActive: false,
        img: require('common/images/logo.svg')
      }
    },
    components: {
      IHeader,
      IFooter
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  header
    width 100%;
    height 80px;
    .logo-wrapper
      float left
      width 200px
      height 80px
      line-height 1
      margin-left 30px
      margin-top 30px
    .title
      float right
      height 80px
      line-height 80px
      font-size 24px;
      margin-right 30px
  .contain
    width 100%
    display flex
    .tabs
      width 200px;
      height 900px;
      .tab-wrapper
        background-color #bbb
        height 900px;
        text-align center
        .tab-select
          li
            width 100%
            height 40px
            line-height 40px
            a
              display inline-block
              width 100%
              text-decoration: none
              color #000
            .router-link-active
              background-color #edeeef
          li:nth-of-type(1)
            height 180px
    .content
      flex 1
      .content-header
        width 100%;
        height 60px;
        background-color #fff
        .search-wrapper
          float left
          width auto
          padding-left 30px;
          margin-top 15px
          text-align center
          input
            float left
            width 200px
            height 30px
            line-height 30px
            padding-left 10px
            font-size 16px
            outline none
            border solid 1px #999
            border-right none
          .search-button
            float left
            width 70px;
            height 30px;
            color #fff
            line-height 30px
            background-color #0aa0f8
        .add-button
          margin-top 10px
          margin-right 10px
          float right
          a
            display inline-block
            text-decoration none
            width 120px;
            height 40px
            line-height 40px
            color #ffffff
            text-align center
            background-color #00cc95
</style>
