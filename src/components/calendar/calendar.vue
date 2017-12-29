<template>
  <div>
    <IHeader></IHeader>
    <div class="container">
      <div class="tabs">
        <div class="tab-wrapper">
          <ul class="tab-select">
            <li><router-link class="r-link" to="/begin">即将开始的</router-link></li>
            <li><router-link class="r-link" to="/doing">进行中的</router-link></li>
            <li><router-link class="r-link" to="/ended">已结束的</router-link></li>
          </ul>
        </div>
        <div class="choose-wrapper">
          <b-dropdown id="ddown1" class="v-btn" text="行业类别">
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Something else here...</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
          <b-dropdown id="ddown1" class="v-btn" text="行业类别">
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Something else here...</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
          <b-dropdown id="ddown1" class="v-btn" text="行业类别">
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Something else here...</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <router-view to="/doing"></router-view>
    </div>
    <IFooter></IFooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import CalendarList from '../calendarList/calendarList.vue'
  import IHeader from '@/components/header/iHeader'
  import IFooter from '@/components/footer/iFooter'

  export default {
    components: {
      calendarList: CalendarList,
      IHeader,
      IFooter
    }
  }
</script>

<style lang="stylus" type="text/stylus">
@media (min-width: 1201px)
  .container
    padding-top 50px
    padding-bottom 50px
    .tabs
      height 45px
      .tab-wrapper
        float left
        overflow hidden
        .tab-select
          float left
          margin 0
          &>li
            height 45px;
            float: left;
            margin-right: 2px;
            background-color: #E4E2E6;
            border-radius: 5px 5px 0px 0px;
            overflow: hidden;
            .r-link:hover
              text-decoration none
              height 45px;
            .r-link
              padding: 13px 27px 15px
              height 45px;
              display: inline-block;
              font-size: 14px;
              color: #574F60;
            .router-link-active
              height 45px;
              color #fff
              background-color #574f60
      .choose-wrapper
        float right
        .v-btn button
          background-color #fff
          width 160px
          height 39px
          font-size 12px
          color #574F60
          line-height 25px
@media (max-width: 1200px) and (min-width: 769px)
  .container
    padding 0
    padding-top 50px
    padding-bottom 50px
    .tabs
      height 45px
      .tab-wrapper
        float left
        overflow hidden
        .tab-select
          float left
          margin 0
          &>li
            height 45px;
            float: left;
            margin-right: 2px;
            background-color: #E4E2E6;
            border-radius: 5px 5px 0px 0px;
            overflow: hidden;
            .r-link:hover
              text-decoration none
            .r-link
              display: inline-block;
              height 45px;
              padding: 13px 20px 14px;
              font-size: 14px;
              color: #574F60;
            .router-link-active
              color #fff
              background-color #574f60
      .choose-wrapper
        float right
        .v-btn button
          background-color #fff
          width: 130px;
          height: 39px;
          font-size: 12px;
          color: #574F60;
          line-height: 25px;

@media (max-width: 768px)
  .container
    padding 0
    padding-top 50px
    padding-bottom 50px
    .tabs
      height 90px
      display -webkit-flex
      display flex
      flex-direction column-reverse
      .tab-wrapper
        overflow hidden
        .tab-select
          padding-left 0
          padding-top 5px
          margin 0
          &>li
            height: 45px;
            float: left;
            margin-right: 2px;
            background-color: #e4e2e6;
            border-radius: 5px 5px 0px 0px;
            overflow: hidden;
            .r-link:hover
              text-decoration none
            .r-link
              display: inline-block;
              height 45px;
              color: #574F60;
              padding: 13px 18px 13px;
              font-size: 13px;
            .router-link-active
              color #fff
              background-color #574f60
      .choose-wrapper
        float right
        .v-btn
          width 31%
          button
            background-color #fff
            width 100%
            height: 39px;
            font-size: 12px;
            color: #574F60;
            line-height: 25px;
</style>
