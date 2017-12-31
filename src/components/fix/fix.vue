<template>
  <div class="fix">
    <div class="chat icon-message-square" @click="showChat = !showChat" ref="chat"></div>
    <div class="chat-box" v-show="showChat">
      <p class="chat-title-p" id="chatMove" style="cursor:move;" draggable="true">
        <span class="name-color1" style="font-size: 14px;color: #00CC95;float: left;margin-left: 10px;" id="displayGuestName">游客FMCUL5F2BA</span>
        <span class="iconfont icon-minus" @click="showChat = !showChat"></span>
      </p>
      <div id="chatContainer" class="hide-bourse">
        <div class="talking-record">
          <div id="chatContent" class="bourse">
            <div class="bourse-box">
              <p class="bourse-p1">
                <span class="name-color1 name-color2" role="from" guestname="游客FLMMKST3Z6">游客FLMMKST3Z6</span>
                <span class="span-time" role="time">2017/11/18</span>
              </p>
              <p class="bourse-p2" role="content">新币都没钱包地址吧？</p>
            </div>
          </div>
        </div>
        <div class="bourse-chat">
          <div class="bourse-chat-box">
            <textarea id="inputChat" placeholder="说点什么吧"></textarea>
          </div>
          <button type="submit" id="btnChatSend" class="btn btn-bgcolor2">发送</button>
        </div>
      </div>
    </div>
    <div class="goTop icon-chevron-up" v-show="isShow" @click="getTop" ref="top"></div>
  </div>
</template>

<script>
  export default {
    props: {
      scrollmyself: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        showChat: false,
        isShow: false,
        target: ''
      }
    },
    methods: {
      addchathoverClass (e) {
        if (e.type === 'mouseover') {
          this.$refs.chat.classList.add('chatHover')
        } else if (e.type === 'mouseout') {
          this.$refs.chat.classList.remove('chatHover')
        }
      },
      addtophoverClass (e) {
        if (e.type === 'mouseover') {
          this.$refs.top.classList.add('topHover')
        } else if (e.type === 'mouseout') {
          this.$refs.top.classList.remove('topHover')
        }
      },
      showIcon () {
        if (this.target.pageYOffset > 100) {
          this.isShow = true
          this.$refs.top.addEventListener('mouseover', this.addtophoverClass)
          this.$refs.top.addEventListener('mouseout', this.addtophoverClass)
        } else {
          this.isShow = false
        }
      },
      getTop () {
        let timer
        clearInterval(timer)
        timer = setInterval(() => {
          let curHeight = document.documentElement.scrollTop || document.body.scrollTop
          let now = curHeight
          let speed = (0 - now) / 7
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
          if (curHeight === 0) {
            clearInterval(timer)
          }
          document.documentElement.scrollTop = curHeight + speed
          document.body.scrollTop = curHeight + speed
        }, 30)
      }
    },
    mounted () {
      this.target = window
      this.target.addEventListener('scroll', this.showIcon)
      this.$refs.chat.addEventListener('mouseover', this.addchathoverClass)
      this.$refs.chat.addEventListener('mouseout', this.addchathoverClass)
    },
    beforeDestroy () {
      this.$nextTick(() => {
        this.target = document.body
        this.target.removeEventListener('scroll', this.showIcon)
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .chat
    font-size: 20px;
    width: 40px;
    height: 40px;
    background-color: #E2E2E2
    border-radius: 50%;
    color: #A6A2AC;
    text-align: center;
    line-height: 40px;
    position: fixed;
    right: 20px;
    bottom: 165px;
    z-index: 333;
  .chatHover
    color: #fff;
    background-color: #666
  .chat-box
    display: block;
    width: 600px;
    height: 430px;
    position: fixed;
    right: 90px;
    bottom: 150px;
    background-color: rgb(255, 255, 255);
    z-index: 888;
    box-shadow: rgb(136, 136, 136) 0px 1px 2px;
    border-radius: 5px;
    overflow: hidden;
    .chat-title-p
      width: 100%;
      height: 35px;
      line-height: 35px;
      box-shadow: rgb(136, 136, 136) 0px 1px 2px;
      background-color: rgb(51, 44, 59);
      span
        font-size: 18px;
        height: 35px;
        line-height 35px;
        color: rgb(255, 255, 255);
        float: right;
        cursor: pointer;
        margin-right: 15px;
    .hide-bourse
      .talking-record
        .bourse
          height: 100%;
          overflow-x: hidden;
          overflow-y: scroll;
          margin-right: -30px;
          height: 320px;
          padding: 10px;
          border-bottom: 1px solid #EDEDED;
          .bourse-box
            height: auto;
            width: 100%;
            margin-bottom: 10px;
            .bourse-p1
              color: grey;
              font-size: 12px;
              margin-bottom: 3px;
              .name-color2
                color: #0072E6;
                font-size: 14px;
                cursor: pointer;
              .span-time
                float: right;
                font-size: 12px;
                padding-right: 15px;
            .bourse-p2
              width: 100%;
              height: auto;
              color: #000;
              font-size: 12px;
              word-wrap: break-word;
              line-height: 13px;
              text-align: justify;
              padding-right: 15px;
      .bourse-chat
        width: 100%;
        height: 80px;
        .bourse-chat-box
          width: 500px;
          height: 75px;
          overflow: hidden;
          padding-left: 10px;
          float: left;
          textarea
            width: 510px;
            height: 75px;
            padding-right: 20px;
            border: none;
            outline: none;
            resize: none;
            overflow-x: hidden;
            line-height: 25px;
            padding-top: 20px;
            color: #574F60;
            padding-bottom: 5px;
        .btn
          float: right;
          padding: 6px 15px;
          margin-top: 20px;
          margin-right: 10px;
          color: #fff;
        .btn-bgcolor2
          background-color: #E5E5E5;
  .goTop
    width: 40px;
    height: 40px;
    background-color: #E2E2E2;
    border-radius: 50%;
    color: #A6A2AC;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    position: fixed;
    right: 20px;
    bottom: 110px;
    z-index: 333;
    opacity: 0.5;
    display: block;
  .topHover
    background-color #666
    color: #fff;
  @media (max-width: 767px) and (min-width: 0px)
    .chat-box
      width: 100%;
      height: 260px;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #fff;
      border-radius: 0px;
      z-index: 888;
      overflow: hidden;
      .hide-bourse
        .talking-record
          .bourse
            margin-right: -20px;
            height: 150px;
</style>
