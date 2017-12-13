<template>
  <div id="app">
    <IHeader></IHeader>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <IFooter></IFooter>
    <Fix></Fix>
  </div>
</template>

<script>
  import IHeader from '@/components/iHeader/iHeader'
  import IFooter from '@/components/ifooter/ifooter'
  import Fix from '@/components/fix/fix'

  export default {
    name: 'app',
    components: {
      IHeader,
      IFooter,
      Fix
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #edeeef;
  font-size: 14px;
}
</style>
