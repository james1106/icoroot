<template>
  <div>
    <b-container fluid class="header-fluid">
      <b-container>
        <b-navbar toggleable="md" style="background-color: #fff">
          <b-navbar-brand href="#">
            <img src="https://cdn.icoroot.com/public/static/img/svg-01.svg" class="login" alt="">
          </b-navbar-brand>
          <b-navbar-toggle target="nav_collapse" class="nav-toggle"></b-navbar-toggle>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
              <b-nav-item right>
                <router-link to="/">首页</router-link>
              </b-nav-item>
              <b-nav-item right>
                <router-link to="calendar">ICO日程表</router-link>
              </b-nav-item>
              <b-nav-item right>
                <router-link to="">推出你的ICO</router-link>
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
    components: {
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
          display: inline-block;
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
