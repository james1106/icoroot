<template>
  <div class="doing">
    <cal-list></cal-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import CalendarList from '@/components/calendarList/calendarList'
  export default {
    components: {
      calList: CalendarList
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .doing
    position: relative
    top: -1px
</style>
