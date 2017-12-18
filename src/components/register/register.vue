<template>
  <div class="login-wrapper">
    <sign></sign>
    <div>
      <form action="">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group>
            <b-form-input type="text"
                          v-model="user.name"
                          required
                          placeholder="请输入用户名">
            </b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input type="email"
                          v-model="user.email"
                          required
                          placeholder="请输入邮箱">
            </b-form-input>
          </b-form-group>
          <b-form-group class="text">
            <b-form-input type="text"
                          class="emailInput"
                          v-model="user.verifyCode"
                          required
                          placeholder="请输入验证码">
            </b-form-input>
            <b-button class="emailButton" type="button" @click="onSendEmail" variant="primary">点击发送</b-button>
          </b-form-group>
          <b-form-group>
            <b-form-input type="password"
                          v-model="user.password"
                          required
                          placeholder="请输入密码">
            </b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input type="password"
                          v-model="user.pwd"
                          required
                          placeholder="请再次输入密码">
            </b-form-input>
          </b-form-group>
          <b-form-group>
            <b-button type="submit" variant="primary" class="registerButton">注册</b-button>
          </b-form-group>
        </b-form>
      </form>
      <div class="error" v-show="error">{{error}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Sign from '@/components/sign/sign'
  import api from '../../api/login'

  export default {
    components: {
      sign: Sign
    },
    data () {
      return {
        error: false,
        user: {
          email: '',
          name: '',
          password: '',
          pwd: '',
          verifyCode: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        if (!this.user.name || !this.user.password || !this.user.pwd) {
          this.error = '输入不得为空'
        } else if (this.user.password !== this.user.pwd) {
          this.error = '两次密码输入不一致'
        } else if (this.user.password.length < 5) {
          this.error = '密码长度不得小于5位'
        } else if (!this.user.email) {
          this.error = '邮箱不得为空'
        } else {
          api.localReg(this.user).then(function () {
            alert('登录成功')
          })
          .catch(function (error) {
            console.log(error)
          })
        }
      },
      onSendEmail () {
        if (!this.user.email) {
          this.error = '邮箱不得为空'
        } else {
          api.localEmail(this.user).then(function () {
            alert('验证码已发送')
          })
          .catch(function (error) {
            console.log(error)
          })
        }
      },
      onReset (evt) {
        evt.preventDefault()
        this.user.email = ''
        this.user.name = ''
        this.user.password = ''
        this.user.pwd = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .col-12
    display flex
    .emailInput
      flex 2
    .emailButton
      flex 1
      margin-left 20px
    .registerButton
      width 100%
  @media (min-width: 1201px)
    .login-wrapper
      width 100%
      padding-top 150px
      background-color #fff
      & > div
        width 600px
        margin 0 auto
      .remember-password
        line-height 25px
  @media (max-width: 1200px) and (min-width: 769px)
    .login-wrapper
      width 100%
      padding-top 150px
      background-color #fff
      & > div
        width 500px
        margin 0 auto
      .remember-password
        line-height 25px
  @media (max-width: 768px)
    .login-wrapper
      width 100%
      padding-top 150px
      background-color #fff
      & > div
        padding-left 20px
        padding-right 20px
        margin 0 auto
      .remember-password
        line-height 25px
</style>
