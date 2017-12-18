<template>
  <b-container fluid class="footer-fluid">
      <b-row>
        <b-col md="4" sm="12" class="foot-tip">
          <a href="#" class="foot-a">
            <img src="//cdn.icoroot.com/public/static/img/icoroot.svg" alt="">
          </a>
        </b-col>
        <b-col md="8" sm="12" class="foot-tip">
          <ul class="foot-us">
            <li class="font1"><a href="https://www.icoroot.com/about?about=service">服务条款</a></li>
            <li class="font1 li-bor"><a href="https://www.icoroot.com/about?about=contanct">联系我们</a></li>
            <li class="font1"><a href="https://www.icoroot.com/about?about=about">关于我们</a></li>
          </ul>
        </b-col>
      </b-row>
  </b-container>
</template>

<script>

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .footer-fluid
    width: 100%;
    height: 110px;
    background-color #fff;
    .foot-tip
      margin-top: 40px;
      padding-left: 0px;
      padding-right: 0px;
      a.foot-a
        img
          display: inline-block;
          width: 100px;
          height: 35px;
          margin-left: 20px;
    .foot-us
      display flex
      margin-top: 45px;
      li
        flex 1
        height: 19px;
        color: #000;
        width: 105px;
        line-height: 20px;
        font-size: 14px;
        text-align: center;
        font-weight: regular;
        cursor: pointer;
        a
          color: #000;
</style>
