<template>
  <div class="login-wrapper">
    <sign></sign>
    <div>
      <form action="">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="exampleInputGroup1">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="form.email"
                          required
                          placeholder="请输入邮箱">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup2">
            <b-form-input id="exampleInput2"
                          type="password"
                          v-model="form.password"
                          required
                          placeholder="请输入密码">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleGroup4">
            <b-form-checkbox v-model="form.checked" id="exampleInput4">
              <span class="remember-password">
                记住密码
              </span>
            </b-form-checkbox>
          </b-form-group>
          <b-form-group>
            <b-button type="submit" variant="primary" class="loginButton">登录</b-button>
          </b-form-group>
        </b-form>
      </form>
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
        form: {
          email: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        api.localLogin(this.user).then(function (response) {
          if (response.data.type === true) {
            window.location = '/'
          } else {
            alert('请输入正确的邮箱和密码')
          }
        })
          .catch(function (error) {
            console.log(error)
          })
      },
      onReset (evt) {
        evt.preventDefault()
        this.form.email = ''
        this.form.name = ''
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
    .loginButton
      width 100%
@media (min-width: 1201px)
  .login-wrapper
    width 100%
    padding-top 180px
    background-color #fff
    & > div
      width 600px
      margin 0 auto
    .remember-password
      line-height 25px
@media (max-width: 1200px) and (min-width: 769px)
  .login-wrapper
    width 100%
    padding-top 180px
    background-color #fff
    & > div
      width 500px
      margin 0 auto
    .remember-password
      line-height 25px
@media (max-width: 768px)
  .login-wrapper
    width 100%
    padding-top 180px
    background-color #fff
    & > div
      padding-left 20px
      padding-right 20px
      margin 0 auto
    .remember-password
      line-height 25px
</style>
