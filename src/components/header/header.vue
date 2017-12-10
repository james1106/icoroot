<template>
  <div>
    <b-container fluid class="header-fluid">
      <b-container>
        <b-navbar toggleable="md" style="background-color: #fff">
          <div class="nav-header">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand href="#">
              <img src="https://cdn.icoroot.com/public/static/img/svg-01.svg" width="165" height="45" alt="">
            </b-navbar-brand>
          </div>
          <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav class="ml-auto">

              <b-nav-item text="Lang" right>首页</b-nav-item>

              <b-nav-item right>ICO日程表</b-nav-item>

              <b-nav-item right>推出你的ICO</b-nav-item>

            </b-navbar-nav>

          </b-collapse>
        </b-navbar>
      </b-container>
    </b-container>
    <!--<b-navbar toggleable="md" style="background-color: #fff">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">
        <img src="https://cdn.icoroot.com/public/static/img/svg-01.svg" width="165" height="45" alt="">
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        &lt;!&ndash; Right aligned nav items &ndash;&gt;
        <b-navbar-nav class="ml-auto">

          <b-nav-item text="Lang" right>首页</b-nav-item>

          <b-nav-item right>ICO日程表</b-nav-item>

          <b-nav-item right>推出你的ICO</b-nav-item>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>-->
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
    .container
      box-sizing border-box
      padding: 0px
</style>
