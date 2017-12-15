import api from './index'

export const UserLogin = (data) => {
  api.localLogin(data).then(function (response) {
    if (response.data.type === true) {
      window.location = '/homepage'
    } else {
      alert('请输入正确的用户名和密码')
    }
  })
    .catch(function (error) {
      console.log(error)
    })
}

export const UserLogout = () => {
  api.localLogout().then(function (response) {
    window.location = '/'
  })
    .catch(function (error) {
      console.log(error)
    })
}

export const UserReg = (data) => {
  api.localReg(data).then(function () {
    alert('请到你的邮箱点击激活链接，激活后才可登录')
  })
    .catch(function (error) {
      console.log(error)
    })
}

export const SendEmail = (data) => {
  api.localEmail(data).then(function () {
    alert('right')
  })
    .catch(function (error) {
      console.log(error)
    })
}
