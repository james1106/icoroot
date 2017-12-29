<template>
  <div>
    <b-container fluid class="header-fluid">
      <b-container>
        <b-navbar toggleable="md" style="background-color: #fff">
          <b-navbar-brand href="#">
            <img v-lazy="img" class="login" alt="">
          </b-navbar-brand>
          <b-navbar-toggle target="nav_collapse" class="nav-toggle"></b-navbar-toggle>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
              <b-nav-item right to="/">
                首页
              </b-nav-item>
              <b-nav-item right to="doing">
                ICO日程表
              </b-nav-item>
              <b-nav-item right to="">
                推出你的ICO
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-container>
    </b-container>
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
  .header-fluid
    background-color #fff
    text-align: right
    .container
      padding: 0
      .navbar
        padding: 0
        .navbar-brand
          display: block;
          float left
          width: auto;
          height: 66px;
          line-height: 66px;
          padding: 0px;
          color: #574F60;
          font-size: 12px;
          font-weight: 600;
          .login
            display: inline-block !important;
            width: 175px;
            height: 45px;
        .nav-toggle
          margin-right: 0px;
          border: none;
          outline: none;
</style>
