<template>
  <div class="footer-fluid">
    <b-row>
      <b-col md="4" sm="12" class="foot-tip">
        <ul class="foot-login">
          <li>
            <a href="https://www.icoroot.com" class="foot-a">
              <img src="//cdn.icoroot.com/public/static/img/icoroot.svg" alt="" class="img-2">
            </a>
          </li>
        </ul>
      </b-col>
      <b-col md="8" sm="12" class="foot-tip">
        <ul class="foot-us">
          <li class="font1"><a href="https://www.icoroot.com/about?about=service">服务条款</a></li>
          <li class="font1 li-bor"><a href="https://www.icoroot.com/about?about=contanct">联系我们</a></li>
          <li class="font1"><a href="https://www.icoroot.com/about?about=about">关于我们</a></li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>

<script>

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .footer-fluid
    background-color #fff
    .row
      margin 0
      .foot-tip
        padding: 0
  @media (max-width: 767px) and (min-width: 0px)
    .foot-login
      height: 40px;
      margin-top: 20px;
      padding-left: 0px;
      margin-bottom: 15px;
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
