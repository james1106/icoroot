<template>
  <div class="list-wrapper">
    <ul class="underway-title">
      <li class="li1">{{li1}}</li>
      <li class="li2">{{li2}}</li>
    </ul>
    <ul class="list-box" v-for="(item,index) in items" :class="{deep: (index%2==0)?false:true}">
      <li class="list-li1">
        <div class="list-img">
          <a href="#">
            <img v-lazy="images.projectLogo" alt="">
          </a>
        </div>
        <div class="list-right">
          <a href="#">
            <p class="right-p1">
              {{item.projectName}}
            </p>
          </a>
          <a href="#">
            <p class="right-p2">
              {{item.projectIntroduction}}
            </p>
          </a>
        </div>
      </li>
      <li>
        <b-button size="sm" @click="modifyProject(item)">修改项目</b-button>
      </li>
      <li>
        <b-button size="sm" @click="deleteProject(item.id)">删除项目</b-button>
      </li>
      <li>
        <b-button size="sm" @click="selectProject(item.id, item)">查看详情</b-button>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapMutations } from 'vuex'
  import api from '../../api/index'

  export default {
    props: {
      items: {
        type: Array,
        default: ''
      }
    },
    data () {
      return {
        li1: '项目名称',
        li2: '操作',
        images: {
          projectLogo: require('common/images/projectLogo.png')
        }
      }
    },
    methods: {
      selectProject (id, item) {
        this.setProject(item)
        this.$router.push({
          path: `/project/${id}`
        })
      },
      deleteProject (id) {
        api.deleteProject(id).then(() => {
          this.$router.push({
            path: '/manage'
          })
            .catch(() => {
              alert('删除操作错误')
            })
        })
      },
      modifyProject (item) {
        this.modifyProject(item)
        this.$router.push({
          path: '/modifyPro'
        })
      },
      ...mapMutations({
        setProject: 'SET_PROJECT',
        modifyProject: 'MODIFY_PROJECT'
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @media (min-width: 1201px)
    .list-wrapper
      width 100%
      height auto
      overflow hidden
      .underway-title
        margin 0
        height 47px
        background-color #574F60
        &>li
          width 11%
          float left
          height 47px
          font-size 13px
          color #fff
          line-height 47px
        .li1
          width 40%
          padding-left 110px
        .li4
          width 16%
      .list-box
        margin 0
        width 100%
        height 110px
        padding 20px
        list-style none
        background-color #fff
        &>li
          float left
        .list-li1
          float left
          width 40%
          .list-img
            width: 70px;
            height: 70px;
            border: 1px solid #E2E2E2;
            border-radius: 3px;
            text-align: center;
            line-height: 70px;
            float: left;
          .list-img>a>img
            display: inline-block;
            width: 50px;
            height: 50px;
            vertical-align: middle;

          .list-right
            width: 300px;
            float: left;
            padding-left: 20px;
          .list-right a
            text-decoration none
            .right-p1
              font-size: 16px;
              font-weight: bold;
              color: #0072E6;
              margin-bottom: 8px;
            .right-p2
              font-size: 12px;
              color: #574F60;
              height: 41px;
              line-height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              margin-bottom: 5px;
        .list-li2
          float left
          width 11%
          .start-span1
            font-size: 14px;
            font-weight: bold;
            color: #000;
            line-height: 22px;
            margin-left: -5px;
          .start-span2
            font-size: 12px;
            color: #574F60;
            line-height: 22px;
            margin-left: -5px;

        .list-li3
          color: #000000;
          font-size: 14px;
          width 11%
        .list-li4
          width 17%
          height 10px
        .list-li5
          color: #0072E6;
          font-size: 16px;
          font-weight: bold;
          height: 70px;
          padding-left: 5px;
          width 11%
      .deep
        background-color #F8F8F8
  @media (max-width: 1200px) and (min-width: 769px)
    .list-wrapper
      width 100%
      height auto
      overflow hidden
      .underway-title
        margin 0
        height 47px
        background-color #574F60
        &>li
          width 13%
          float left
          height 47px
          font-size 13px
          color #fff
          line-height 47px
        .li1
          width 48%
          padding-left 110px
        .li4
          width 16%
          display none
        .li5
          width 13%
        .li6
          width 13%
      .list-box
        margin 0
        width 100%
        height 110px
        padding 20px
        list-style none
        background-color #fff
        &>li
          float left
        .list-li1
          width 48%
          .list-img
            width: 70px;
            height: 70px;
            border: 1px solid #E2E2E2;
            border-radius: 3px;
            text-align: center;
            line-height: 70px;
            float: left;
          .list-img>a>img
            display: inline-block;
            width: 50px;
            height: 50px;
            vertical-align: middle;
          .list-right
            width: 230px;
            float: left;
            padding-left: 20px;
          .list-right a
            text-decoration none
            .right-p1
              font-size: 16px;
              font-weight: bold;
              color: #0072E6;
              margin-bottom: 8px;
            .right-p2
              font-size: 12px;
              color: #574F60;
              height: 41px;
              line-height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              margin-bottom: 5px;
        .list-li2
          float left
          width 13%
          .start-span1
            font-size: 14px;
            font-weight: bold;
            color: #000;
            line-height: 22px;
            margin-left: 0px;
          .start-span2
            font-size: 12px;
            color: #574F60;
            line-height: 22px;
            margin-left: 0px;

        .list-li3
          color: #000000;
          font-size: 14px;
          width 13%
          padding-left 5px
        .list-li4
          display none
          width 17%
          height 10px
        .list-li5
          color: #0072E6;
          font-size: 16px;
          font-weight: bold;
          height: 70px;
          padding-left: 2%;
          width: 13%;
        .list-li6
          padding-left 2%
          width 13%
      .deep
        background-color #F8F8F8
  @media (max-width: 768px)
    .list-wrapper
      width 100%
      height auto
      overflow hidden
      .underway-title
        margin 0
        height 47px
        background-color #574F60
        &>li
          width 25%
          float left
          height 47px
          font-size 13px
          color #fff
          line-height 47px
        .li1
          padding-left 20px
        .li2
          padding-left 20px
        .li3
          padding-left 20px
        .li4
          width 16%
          display none
        .li5
          padding-left 20px
        .li6
          width 13%
          display none
      .list-box
        margin 0
        width 100%
        overflow hidden
        height auto
        padding 20px
        list-style none
        background-color #fff
        &>li
          width 25%
          float left
        .list-li1
          position relative
          .list-img
            width: 70px;
            height: 70px;
            border: 1px solid #E2E2E2;
            margin-bottom 5px
            border-radius: 3px;
            text-align: center;
            line-height: 70px;
            float: left;
          .list-img>a>img
            display: inline-block;
            width: 50px;
            height: 50px;
            vertical-align: middle;
          .list-right
            width: 230px;
            float: left;
          .list-right a
            text-decoration none
            .right-p1
              font-weight: bold;
              color: #0072E6;
              margin-bottom: 8px;
              display block
              width: 70px;
              text-align: center;
              overflow: hidden;
              word-wrap: break-word;
              font-size: 14px;
            .right-p2
              font-size: 12px;
              color: #574F60;
              height: 41px;
              line-height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              display none
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              margin-bottom: 5px;
        .list-li2
          float left
          padding-left 15px
          .start-span1
            font-size: 14px;
            font-weight: bold;
            color: #000;
            line-height: 22px;
            margin-left: 0px;
          .start-span2
            font-size: 12px;
            color: #574F60;
            line-height: 22px;
            margin-left: 0;
        .list-li3
          color: #000000;
          font-size: 14px;
          padding-left 19px
        .list-li4
          display none
          width 17%
          height 10px
        .list-li5
          color: #0072E6;
          font-size: 16px;
          font-weight: bold;
          height: 70px;
          padding-left: 35px;
        .list-li6
          display none
          padding-left 2%
          width 13%
      .deep
        background-color #F8F8F8

</style>
