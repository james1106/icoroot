import Vue from 'Vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export function getDetail (id) {
  return Vue.axios.get('/detail', {
    params: {
      id: id
    }
  })
}
