<template>
  <div class="footer-fluid">
    <b-row>
      <b-col md="4" sm="12" class="foot-tip">
        <ul class="foot-login">
          <li>
            <a href="#" class="foot-a">
              <img v-lazy="img" alt="" class="img-2">
            </a>
          </li>
        </ul>
      </b-col>
      <b-col md="8" sm="12" class="foot-tip">
        <ul class="foot-us">
          <li class="font1"><a href="#">服务条款</a></li>
          <li class="font1 li-bor"><a href="#">联系我们</a></li>
          <li class="font1"><a href="#">关于我们</a></li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        img: require('common/images/logo.svg')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .footer-fluid
    background-color #fff
    height 110px;
    .row
      margin 0
      .foot-tip
        padding: 0
        display flex
      .foot-login
        float: left;
        width: 30%;
        margin-top: 40px;
        padding-left: 70px;
        li
          .foot-a
            .img-2
              display: inline-block;
              width: 100px;
              height: 35px;
      .foot-us
        float: left;
        width: 70%;
        margin-top: 45px;
        li
          float: right;
          height: 19px;
          width: 105px;
          line-height: 20px;
          font-size: 14px;
          text-align: center;
          font-weight: regular;
          cursor: pointer;
          a
            color: #5D5D5D;
  @media (max-width: 767px) and (min-width: 0px)
    .footer-fluid
      background-color #fff
      height 110px;
      .row
        margin 0
        .foot-tip
          padding: 0
          display flex
        .foot-login
          height: 40px;
          margin: 20px auto 15px;
          padding-left: 0px;
          overflow: hidden;
          li
            height: 40px;
            width: 170px;
            margin: 0 auto;
            text-align: center;
            .img-2
              display: inline-block;
              width: 80px;
              height: 40px;
              margin-left: 10px;
        .foot-us
          width: 100%;
          height: 35px;
          padding-left: 0px;
          margin: 0 auto;
          display flex
          li
            flex: 1
            height: 35px;
            color: #000;
            line-height: 35px;
            font-size: 12px;
            text-align: center;
            font-weight: regular;
            cursor: pointer;
            a
              display: inline-block;
              color: #000;
</style>
