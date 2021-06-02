<template>
  <div class="mobile-mainPage">
    <div class="header-bar"><img src="https://img-static.mihoyo.com/mainPage/menu-dark.png" /></div>
    <div class="m-bbs-bg"></div>
    <div class="m-bbs-download"></div>
    <div class="m-left-logo up-animated"></div>
    <div class="m-right-logo down-animated"></div>
    <div class="m-main">
      <div class="m-game-container">
        <div class="m-game-trapezoid"></div>
        <div class="m-game-title">
          <span class="m-title-arrow"></span> <span class="m-title">网页版官方社区</span>
          <span class="m-title-arrow right"></span>
        </div>
        <a href="https://m.bbs.mihoyo.com/bh2/" target="_blank" class="m-game-item-container"
          ><div class="m-game-item">
            <div class="m-game-logo">
              <img
                width="100%"
                height="100%"
                src="https://img-static.mihoyo.com/mainPage/m-bh2-logo.png"
                alt="米游社"
              />
            </div>
            <div class="m-game-name">崩坏学园2</div>
            <div class="m-game-btn"></div></div></a
        ><a href="https://m.bbs.mihoyo.com/bh3/" target="_blank" class="m-game-item-container"
          ><div class="m-game-item">
            <div class="m-game-logo">
              <img
                width="100%"
                height="100%"
                src="https://img-static.mihoyo.com/mainPage/m-bh3-logo.png"
                alt="米游社"
              />
            </div>
            <div class="m-game-name">崩坏3</div>
            <div class="m-game-btn"></div></div></a
        ><a target="_blank" class="m-game-item-container"  @click="clickYs()"
          ><div class="m-game-item">
             <!-- href="https://m.bbs.mihoyo.com/ys/" -->
            <div class="m-game-logo">
              <img
                width="100%"
                height="100%"
                src="https://img-static.mihoyo.com/mainPage/m-ys-logo.png"
                alt="米游社"
              />
            </div>
            <div class="m-game-name">原神</div>
            <div class="m-game-btn"></div></div></a
        ><a href="https://m.bbs.mihoyo.com/wd/" target="_blank" class="m-game-item-container"
          ><div class="m-game-item">
            <div class="m-game-logo">
              <img
                width="100%"
                height="100%"
                src="https://img-static.mihoyo.com/mainPage/m-wd-logo.png"
                alt="米游社"
              />
            </div>
            <div class="m-game-name">未定事件簿</div>
            <div class="m-game-btn"></div></div></a
        ><a href="https://m.bbs.mihoyo.com/dby/" target="_blank" class="m-game-item-container"
          ><div class="m-game-item">
            <div class="m-game-logo">
              <img
                width="100%"
                height="100%"
                src="https://img-static.mihoyo.com/mainPage/m-dby-logo.png"
                alt="米游社"
              />
            </div>
            <div class="m-game-name">大别野</div>
            <div class="m-game-btn"></div></div
        ></a>
      </div>
      <div class="m-feedback-container">
        <a href="https://bbs.mihoyo.com/dby/topicDetail/150" target="_blank" class="m-feedback"
          ><span class="m-feedback-title">意见反馈</span> <span class="m-feedback-btn"></span
        ></a>
      </div>
      <div class="m-bbs-rights">
        <p>
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402001113"
            target="_blank"
            >沪公网安备31010402001113号</a
          >
        </p>
        <p>
          <span>沪网文〔2019〕3168-216</span>
          <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"
            >沪ICP备19018275号-4</a
          >
        </p>
        <p><span>© 2018 米哈游版权所有</span></p>
      </div>
      <div class="m-bg-bottom"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue'
import { Button } from 'vant'
// import {useRouter} from 'vue-router'

export default defineComponent({
  data() {
    return { tabData: [] }
  },
  components: {
    [Button.name]: Button
  },
  name: 'HelloWorld',
  props: {
    msg: {
      // type: String,
      // required: true
    }
  },
  methods: {
    clickYs() {
      // const router = useRouter()
      this.$router.push('/ys/home');
      // router.push({
      //   path: '/axios'
      // })
      console.log('跳转原神');
      console.log(this.$route);
      console.log('跳转原神');
    },
    getTab() {
      const { ctx }: any = getCurrentInstance()
      ctx.$http.get('/getTab', {}, {}).then((res: any) => {
        if (res.data.status === 'SUCCEED') {
          this.tabData = res.data.data
          console.log('获取')
          console.log(this.tabData)
          console.log('获取')
        }
        //请求成功
      })
    }
  },
  created() {},

  setup: () => {
    console.log(ref())
    console.log(defineComponent)
    const count = ref(0)
    // let tabData = ref(0)
    const { ctx }: any = getCurrentInstance()
    function createTab() {
      console.log('创建')
      ctx.$http.get('/createTab', {}, {}).then(() => {
        //请求成功
      })
      console.log('发送请求')
    }
    const active = ref(2)
    return { count, createTab, active }
  }
})
</script>

<style scoped>
body,
html {
  height: 100%;
  width: 100%;
  background-color: #f6f9f9;
  color: #404040;
  font-family: Microsoft YaHei, \\5fae\8f6f\96c5\9ed1, miui, Helvetica, Arial, sans-serif;
  -webkit-overflow-scrolling: touch;
}
* {
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}
a {
  text-decoration: none;
}
.pc-mainPage {
  position: relative;
  margin: 0 auto;
  width: 100%;
  min-width: 1200px;
  min-height: 900px;
  height: 100%;
  font-size: 12px;
  background: #3ccefa url('https://img-static.mihoyo.com/mainPage/pc-bg.png?v1') 50% 36% no-repeat;
}
.pc-mainPage .pc-sidebar-container {
  position: relative;
  height: 100%;
  background: rgba(34, 42, 166, 0.4);
  width: 107px;
  padding: 0 17px;
  border-right: 1px solid rgba(122, 244, 255, 0.5);
  z-index: 999;
}
.pc-mainPage .pc-sidebar-container .pc-sidebar {
  position: absolute;
  top: 80px;
  text-align: center;
  z-index: 1;
}
.pc-mainPage .pc-sidebar-container .pc-sidebar .sidebar-title {
  font-weight: 700;
  color: #7fd4ff;
  margin-bottom: 60px;
}
.pc-mainPage .pc-sidebar-container .pc-sidebar .game-nav {
  margin-bottom: 37px;
  color: #73b9ff;
  font-size: 14px;
}
.pc-mainPage .pc-sidebar-container .pc-sidebar .game-nav:hover {
  color: #7fd4ff;
}
.pc-mainPage .pc-sidebar-container .pc-sidebar .game-nav .game-logo {
  border-radius: 50%;
  width: 68px;
  height: 68px;
  display: inline-block;
  margin-bottom: 10px;
  overflow: show;
}
.pc-mainPage .pc-sidebar-container .pc-sidebar .game-nav .game-name {
  line-height: 13px;
}
.pc-mainPage .pc-sidebar-container .pc-sidebar .game-nav img {
  -webkit-transition: -webkit-transform 0.1s linear;
  transition: -webkit-transform 0.1s linear;
  -o-transition: transform 0.1s linear;
  transition: transform 0.1s linear;
  transition: transform 0.1s linear, -webkit-transform 0.1s linear;
}
.pc-mainPage .pc-sidebar-container .pc-sidebar .game-nav:hover img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.pc-mainPage .pc-sidebar-container .sidebar-footer {
  text-align: center;
  position: absolute;
  bottom: 40px;
  left: 12px;
  z-index: 1;
}
.pc-mainPage .pc-sidebar-container .sidebar-feedback {
  width: 80px;
  height: 28px;
  line-height: 26px;
  background: #1b7bc8;
  border: 1px solid #5ca1e5;
  -webkit-box-shadow: 1px 2px 6px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 1px 2px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  color: #9cf;
}
.pc-mainPage .pc-sidebar-container .sidebar-feedback:hover {
  color: #99d4ff;
  border-color: #66b3ff;
}
.pc-mainPage .pc-main {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -480px 0 0 -621px;
  width: 1200px;
  height: 900px;
  z-index: 9;
}
.pc-mainPage .pc-main .bbs-left-logo {
  position: absolute;
  top: 296px;
  left: 120px;
  width: 240px;
  height: 280px;
  background-image: url('https://img-static.mihoyo.com/mainPage/bbs-left-logo.png');
}
.pc-mainPage .pc-main .bbs-right-logo {
  position: absolute;
  top: 156px;
  left: 815px;
  width: 422px;
  height: 460px;
  background-image: url('https://img-static.mihoyo.com/mainPage/bbs-right-logo.png');
}
.pc-mainPage .pc-main .bbs-qrcode {
  width: 168px;
  height: 168px;
  position: absolute;
  top: 680px;
  left: 422px;
  background: #fff;
  border-radius: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.pc-mainPage .pc-main .bbs-download-container {
  position: absolute;
  left: 620px;
  top: 685px;
}
.pc-mainPage .pc-main .bbs-download-container .bbs-download {
  width: 215px;
  height: 60px;
  color: #f5fafe;
  background: #31313d;
  line-height: 60px;
  padding-left: 78px;
  border-radius: 5px;
  cursor: pointer;
}
.pc-mainPage .pc-main .bbs-download-container .bbs-download:hover {
  color: #71e2ff;
}
.pc-mainPage .pc-main .bbs-download-container .bbs-download .bbs-en-text {
  font-size: 20px;
}
.pc-mainPage .pc-main .bbs-download-container .bbs-download .bbs-zh-text {
  font-size: 18px;
}
.pc-mainPage .pc-main .bbs-download-container .bbs-ios-download {
  margin-bottom: 38px;
  background-image: url('https://img-static.mihoyo.com/mainPage/bbs-ios-download.png');
}
.pc-mainPage .pc-main .bbs-download-container .bbs-ad-download {
  background-image: url('https://img-static.mihoyo.com/mainPage/bbs-ad-download.png');
}
.pc-mainPage .bbs-rights {
  position: absolute;
  left: 0;
  width: 100%;
  color: #fff;
  bottom: 30px;
  text-align: center;
  opacity: 0.5;
}
.pc-mainPage .bbs-rights a {
  color: #fff;
  text-decoration: none;
}
.mobile-mainPage {
  background: #4bd1fa;
  overflow-x: hidden;
  min-height: 100%;
  position: relative;
}
.mobile-mainPage .header-bar {
  position: absolute;
  top: 0.58rem;
  left: 0.58rem;
  height: 0.92rem;
  width: 0.92rem;
  z-index: 2;
}
.mobile-mainPage .header-bar img {
  width: 100%;
  height: 100%;
}
.mobile-mainPage .game-list-container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
}
.mobile-mainPage .game-list-container .game-list {
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 0.49rem;
  line-height: 1.38rem;
  padding: 0.58rem 0.72rem;
  width: 5.43rem;
  height: 100%;
  text-align: left;
  font-weight: 400;
}
.mobile-mainPage .game-list-container .game-list .close {
  position: relative;
  left: -0.15rem;
  width: 0.92rem;
  height: 0.92rem;
  margin-bottom: 0.1rem;
}
.mobile-mainPage .game-list-container .game-list .close img {
  width: 100%;
  height: 100%;
}
.mobile-mainPage .game-list-container .game-list li {
  display: block;
}
.mobile-mainPage .game-list-container .game-list li a {
  color: #fff;
}
.mobile-mainPage .m-bbs-bg {
  position: absolute;
  width: 100%;
  height: 27.02rem;
  background: url('https://img-static.mihoyo.com/mainPage/m-bg.png') top no-repeat;
  background-size: cover;
}
.mobile-mainPage .m-bbs-download {
  position: absolute;
  width: 5.47rem;
  height: 1.47rem;
  background: url('https://img-static.mihoyo.com/mainPage/m-download.png') no-repeat;
  background-size: contain;
  top: 7.3rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 2;
}
.mobile-mainPage .m-left-logo {
  width: 4.27rem;
  height: 5.07rem;
  position: absolute;
  left: 0.11rem;
  top: 10.35rem;
  background: url('https://img-static.mihoyo.com/mainPage/m-left-logo.png') 50% no-repeat;
  background-size: cover;
}
.mobile-mainPage .m-right-logo {
  width: 7.86rem;
  height: 8.6rem;
  position: absolute;
  top: 9rem;
  right: -2.33rem;
  background: url('https://img-static.mihoyo.com/mainPage/m-right-logo.png?v1') 0 no-repeat;
  background-size: cover;
}
.mobile-mainPage .m-main {
  padding-top: 17.93rem;
  position: relative;
  z-index: 1;
}
.mobile-mainPage .m-main .m-game-container {
  -webkit-box-shadow: inset 0 1px 0 0 #ffc94c;
  box-shadow: inset 0 1px 0 0 #ffc94c;
  padding: 0 0.7rem;
  width: 8.94rem;
  height: 17.74rem;
  background: #fff;
  border: 2px solid #0a8cf0;
  border-radius: 10px;
  margin: 0 auto;
  position: relative;
}
.mobile-mainPage .m-main .m-game-container .m-game-trapezoid {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2.57rem;
  height: 0.23rem;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background: url('https://img-static.mihoyo.com/mainPage/m-game-trapezoid.png') 50% no-repeat;
  background-size: contain;
}
.mobile-mainPage .m-main .m-game-container .m-game-title {
  margin-top: 0.94rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.mobile-mainPage .m-main .m-game-container .m-game-title .m-title {
  font-size: 0.54rem;
  font-weight: bolder;
  color: #3260cc;
  margin: 0 0.4rem;
}
.mobile-mainPage .m-main .m-game-container .m-game-title .m-title-arrow {
  display: inline-block;
  width: 0.32rem;
  height: 0.27rem;
  background: url('https://img-static.mihoyo.com/mainPage/m-title-arrow.png') 0 no-repeat;
  background-size: contain;
}
.mobile-mainPage .m-main .m-game-container .m-game-title .m-title-arrow.right {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.mobile-mainPage .m-main .m-game-container .m-game-item-container:not(:last-child) .m-game-item {
  border-bottom: 1px dashed #e6e6e6;
}
.mobile-mainPage .m-main .m-game-container .m-game-item {
  padding: 0.54rem 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.mobile-mainPage .m-main .m-game-container .m-game-item .m-game-logo {
  width: 2rem;
  height: 2rem;
  margin-right: 0.27rem;
}
.mobile-mainPage .m-main .m-game-container .m-game-item .m-game-name {
  font-size: 0.46rem;
  font-weight: 600;
  color: #3260cc;
}
.mobile-mainPage .m-main .m-game-container .m-game-item .m-game-btn {
  margin-left: auto;
  width: 2.25rem;
  height: 1.04rem;
  background: url('https://img-static.mihoyo.com/mainPage/m-game-btn.png') 0 no-repeat;
  background-size: contain;
}
.mobile-mainPage .m-main .m-feedback-container {
  padding: 0.8rem 0 0.6rem;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.mobile-mainPage .m-main .m-feedback-container,
.mobile-mainPage .m-main .m-feedback-container .m-feedback {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.mobile-mainPage .m-main .m-feedback-container .m-feedback .m-feedback-title {
  font-size: 0.38rem;
  color: #e5f8ff;
}
.mobile-mainPage .m-main .m-feedback-container .m-feedback .m-feedback-btn {
  display: inline-block;
  margin-left: 0.27rem;
  width: 0.43rem;
  height: 0.43rem;
  background: url('https://img-static.mihoyo.com/mainPage/m-feedback-btn.png') 0 no-repeat;
  background-size: contain;
}
.mobile-mainPage .m-main .m-bbs-rights {
  position: relative;
  z-index: 1;
  font-size: 0.27rem;
  color: #e5f8ff;
  text-align: center;
  padding-bottom: 1.2rem;
}
.mobile-mainPage .m-main .m-bbs-rights a {
  font-size: 0.27rem;
  color: #e5f8ff;
}
.mobile-mainPage .m-main .m-bg-bottom {
  width: 100%;
  height: 1.74rem;
  background: url('https://img-static.mihoyo.com/mainPage/m-bg-bottom.png') top no-repeat;
  background-size: cover;
  position: absolute;
  bottom: 0;
}
.up-animated {
  -webkit-animation: upAnimation 4s linear infinite;
  animation: upAnimation 4s linear infinite;
}
.down-animated {
  -webkit-animation: downAnimation 3s linear infinite;
  animation: downAnimation 3s linear infinite;
}
@-webkit-keyframes upAnimation {
  25% {
    -webkit-transform: translate(-10px, -10px);
    transform: translate(-10px, -10px);
  }
  50% {
    -webkit-transform: translate(5px, 8px);
    transform: translate(5px, 8px);
  }
  75% {
    -webkit-transform: translate(10px, 5px);
    transform: translate(10px, 5px);
  }
}
@keyframes upAnimation {
  25% {
    -webkit-transform: translate(-10px, -10px);
    transform: translate(-10px, -10px);
  }
  50% {
    -webkit-transform: translate(5px, 8px);
    transform: translate(5px, 8px);
  }
  75% {
    -webkit-transform: translate(10px, 5px);
    transform: translate(10px, 5px);
  }
}
@-webkit-keyframes downAnimation {
  25% {
    -webkit-transform: translate(-10px, 10px);
    transform: translate(-10px, 10px);
  }
  50% {
    -webkit-transform: translate(10px, 10px);
    transform: translate(10px, 10px);
  }
  75% {
    -webkit-transform: translate(-10px, -10px);
    transform: translate(-10px, -10px);
  }
}
@keyframes downAnimation {
  25% {
    -webkit-transform: translate(-10px, 10px);
    transform: translate(-10px, 10px);
  }
  50% {
    -webkit-transform: translate(10px, 10px);
    transform: translate(10px, 10px);
  }
  75% {
    -webkit-transform: translate(-10px, -10px);
    transform: translate(-10px, -10px);
  }
}
</style>
