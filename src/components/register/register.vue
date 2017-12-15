<template>
  <div class="login-wrapper">
    <div>
      <form action="">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="exampleInputGroup1"
                        label="用户名">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="user.name"
                          required
                          placeholder="请输入用户名">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup1"
                        label="邮箱">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="user.email"
                          required
                          placeholder="请输入邮箱">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup1"
                        label="验证码">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="user.verifyCode"
                          required
                          placeholder="请输入验证码">
            </b-form-input>
            <b-button type="button" @click="onSendEmail" variant="primary">点击发送</b-button>
          </b-form-group>
          <b-form-group id="exampleInputGroup2" label="密码">
            <b-form-input id="exampleInput2"
                          type="password"
                          v-model="user.password"
                          required
                          placeholder="请输入密码">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup2" label="确认密码">
            <b-form-input id="exampleInput2"
                          type="password"
                          v-model="user.pwd"
                          required
                          placeholder="请再次输入密码">
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">登录</b-button>
        </b-form>
      </form>
      <div class="error" v-show="error">{{error}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../../api/index'

  export default {
    data () {
      return {
        error: false,
        user: {
          email: '',
          name: '',
          password: '',
          pwd: '',
          verifyCode: '',
          food: null,
          checked: false
        },
        foods: [
          {text: 'Select One', value: null},
          'Carrots', 'Beans', 'Tomatoes', 'Corn'
        ],
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
        } else if (this.user.password.length < 3) {
          this.error = '密码长度不得小于3位'
        } else if (!this.user.email) {
          this.error = '邮箱不得为空'
        } else {
          api.localReg(this.user).then(function () {
            alert('登录成功')
          })
            .catch(function (error) {
              console.log(error)
            })
          alert('验证码已发送，15分钟内失效，请注意查收');
        }
      },
      onSendEmail () {
        api.localEmail(this.user.email).then(function () {
          alert('验证码已发送')
        })
          .catch(function (error) {
            console.log(error)
          })
      },
      onReset (evt) {
        evt.preventDefault()
        // Reset our form values
        this.user.email = ''
        this.user.name = ''
        this.user.password = ''
        this.user.pwd = ''
        this.user.food = null
        this.user.checked = false
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  @media (min-width: 1201px)
    .login-wrapper
      width 100%
      padding-top 150px
      background-color #fff
      padding-bottom 150px
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
      padding-bottom 150px
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
      padding-bottom 150px
      & > div
        padding-left 20px
        padding-right 20px
        margin 0 auto
      .remember-password
        line-height 25px
</style>
