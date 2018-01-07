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
  },
  writeInfo: function (data) {
    return Vue.axios.post('/projectPut', data)
  },
  modifyInfo: function (data) {
    return Vue.axios.post('/projectModify', data)
  },
  getBegin: function () {
    return Vue.axios.get('/ready/project')
  },
  getDoing: function () {
    return Vue.axios.get('/running/project')
  },
  getEnded: function () {
    return Vue.axios.get('/over/project')
  },
  deleteProject: function (id) {
    return Vue.axios.post('/projectDelete', id)
  }
}
