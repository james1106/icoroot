import Vue from 'Vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

var instance = axios.create()

export default {
  localLogin: function (data) {
    return Vue.axios.post('/login', data)
  },
  localLogout: function () {
    return instance.post('/logout')
  },
  localReg: function (data) {
    return Vue.axios.post('/register', data)
  },
  localEmail: function (data) {
    console.log(data)
    return Vue.axios.post('/emailSend', data)
  },
  getDetail: function (id) {
    return Vue.axios.get(`/project/${id}`)
  },
  getHomepage: function () {
    return Vue.axios.get('/project')
  }
}
