<template>
  <div class="ended">
    <cal-list :items="this.data"></cal-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import CalendarList from '@/components/calendarList/calendarList'
  import api from '../../../api/index'

  export default {
    components: {
      calList: CalendarList
    },
    data () {
      return {
        data: []
      }
    },
    created () {
      api.getEnded().then((res) => {
        this.data = Array.from(res.data.data)
      })
    }
  }
</script>

<style lang="stylus" type="text/stylus">

</style>
