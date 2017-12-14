<template>
  <div class="begin">
    <cal-list></cal-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import CalendarList from '../../calendarList/calendarList.vue'
  export default {
    components: {
      calList: CalendarList
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .begin
    position relative
    top -1px
</style>
