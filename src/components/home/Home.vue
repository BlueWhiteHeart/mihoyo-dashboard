<template>
  <div class="mobile-mainPage">
    <div class="header-bar"><img src="../../assets/menu-dark.png" /></div>
    <div class="m-bbs-download"></div>
    <div class="m-left-logo up-animated"></div>
    <div class="m-right-logo down-animated"></div>
    <!-- <div class="m-main">
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
      ><a href="https://m.bbs.mihoyo.com/ys/" target="_blank" class="m-game-item-container"
        ><div class="m-game-item">
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
    </div> -->
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue'
import { Button } from 'vant'

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
.mobile-mainPage .header-bar {
  position: absolute;
  top: 1rem;
  left: 0.58rem;
  height: 0.92rem;
  width: 0.92rem;
  z-index: 2;
}
.mobile-mainPage .header-bar img {
  width: 100%;
  height: 100%;
}
.mobile-mainPage {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../../assets/m-bg.png') top no-repeat;
  background-size: cover;
}
.m-bbs-download {
  position: absolute;
  width: 5.47rem;
  height: 1.47rem;
  background: url('../../assets/m-download.png') no-repeat;
  background-size: contain;
  top: 7.3rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 2;
}
.m-left-logo {
  width: 4.27rem;
  height: 5.07rem;
  position: absolute;
  left: 0.11rem;
  top: 10.35rem;
  background: url('../../assets/m-left-logo.png') 50% no-repeat;
  background-size: cover;
}
.up-animated {
  -webkit-animation: upAnimation 4s linear infinite;
  animation: upAnimation 4s linear infinite;
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
.m-right-logo {
  width: 7.86rem;
  height: 8.6rem;
  position: absolute;
  top: 9rem;
  right: -2.33rem;
  background: url('../../assets/m-right-logo.png') 0 no-repeat;
  background-size: cover;
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
.down-animated {
  -webkit-animation: downAnimation 3s linear infinite;
  animation: downAnimation 3s linear infinite;
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
.mobile-mainPage .m-main {
  padding-top: 17.93rem;
  position: relative;
  z-index: 1;
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
</style>
