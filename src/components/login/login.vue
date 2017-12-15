<template>
  <div class="login-wrapper">
    <div>
      <form action="">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="exampleInputGroup1"
                        label="用户名">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="form.email"
                          required
                          placeholder="请输入账号/邮箱">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup2" label="密码">
            <b-form-input id="exampleInput2"
                          type="password"
                          v-model="form.name"
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
          <b-button type="submit" variant="primary">登录</b-button>
        </b-form>
      </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        form: {
          email: '',
          name: '',
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
        alert(JSON.stringify(this.form))
        api.localLogin(this.user).then(function (response) {
          if (response.data.type === true) {
            window.location = '/'
          } else {
            alert('请输入正确的用户名和密码')
          }
        })
          .catch(function (error) {
            console.log(error)
          })
      },
      onReset (evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = false
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
