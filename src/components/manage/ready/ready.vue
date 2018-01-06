<template>
  <div class="ready">
    <man-list :items="this.data"></man-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import ManageList from '@/components/manage/manageList'
  import api from '../../../api/index'

  export default {
    components: {
      manList: ManageList
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
