<template>
  <div class="begin">
    <cal-list :items="this.data"></cal-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import CalendarList from '../../calendarList/calendarList.vue'
  import api from '../../../api/index'

  export default {
    data () {
      return {
        data: []
      }
    },
    components: {
      calList: CalendarList
    },
    created () {
      api.getBegin().then((res) => {
        this.data = Array.from(res.data.data)
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .begin
    position relative
    top -1px
</style>
