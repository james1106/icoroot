<template>
  <div>
    <header>
      <div class="logo-wrapper">
        <img v-lazy="img" class="login" alt="">
      </div>
    </header>
    <footer>
      <ul class="foot-us">
        <li class="font1"><a href="#">服务条款</a></li>
        <li class="font1 li-bor"><a href="#">联系我们</a></li>
        <li class="font1"><a href="#">关于我们</a></li>
      </ul>
    </footer>
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

<style lang="stylus" type="text/stylus">
  header
    position fixed
    left: 0px;
    top: 0px;
    width: 100%;
    height: 66px;
    z-index 100
    background-color #fff
    .logo-wrapper
      width 175px;
      height: 66px;
      line-height 66px
      margin: 0 auto;
      img
        width: 175px;
        height: 45px;
  footer
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 50px;
    z-index 100
    background-color #fff
    .foot-us
      width 320px;
      height 50px;
      margin 0 auto
      display flex
      li
        flex 1
        height: 20px;
        color: #000;
        width: 105px;
        line-height: 20px;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
</style>
