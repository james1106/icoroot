import Vue from 'Vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://192.168.1.103:8080'

export function getDetail (id) {
  return Vue.axios.get('/detail', {
    params: {
      id: id
    }
  })
}
