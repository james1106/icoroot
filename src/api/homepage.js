import Vue from 'Vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export function getHomepage () {
  return Vue.axios.get('/project')
}
