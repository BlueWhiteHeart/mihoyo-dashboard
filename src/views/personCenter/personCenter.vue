<template>
  <div>
    <van-nav-bar :title="title" left-text="" left-arrow>
      <template #left>
        <van-icon name="arrow-left" />
      </template>
      <template #middle></template>
      <template #right>
        <van-icon name="gift-o" size="18" badge="5" />
        <span style="width: 20px"></span>
        <van-icon name="setting-o" size="18" />
      </template>
    </van-nav-bar>
    <van-row>
      <van-col span="12" offset="6">
        <div class="miyob-container">
          <img src="../../assets/miyob63fa36fd.png" class="mhy-img-icon" />
          <span>我的米游币 120</span>
        </div>
      </van-col>
    </van-row>
    <div style="height: 10%"></div>
    <!-- <div class="personCenter" style="width: 100%; height: 200px; z-index: 1;position:absolute"></div> -->
    <div class="contentCard">
      <div class="head"></div>
      <div style="padding-top: 12px">
        <van-row>
          <van-col span="10" offset="7">
            <span style="color: gray; font-size: 10px">通行证ID:277269185</span>
          </van-col>
          <van-col offset="1">
            <van-button round type="primary" size="small" style="width: 5em" plain @click="edit"
              >编辑</van-button
            >
          </van-col>
        </van-row>
      </div>
      <van-row>
        <van-col span="6" offset="1">罗宾逊</van-col>
        <van-col span="4">
          <img src="https://img-static.mihoyo.com/level/level1.png" class="mhy-img-icon" />
        </van-col>
      </van-row>
      <div style="margin-top: 10px">
        <van-row>
          <van-col span="4" offset="1">
            <span>0</span>
            <span class="lowGray">粉丝</span>
          </van-col>
          <van-col span="4" offset="1">
            <span>0</span>
            <span class="lowGray">关注</span>
          </van-col>
          <van-col span="4" offset="1">
            <span>0</span>
            <span class="lowGray">获赞</span>
          </van-col>
        </van-row>
      </div>
      <div style="padding-top: 10px">
        <van-row justify="center">
          <van-col span="22" offset="2">
            <van-icon name="coupon-o" size="10" />
            <span style="font-size: 10px; padding-left: 5px">系统原装签名，送给每一位小可爱~ </span>
          </van-col>
        </van-row>
      </div>
    </div>
    <div style="padding-top: 10px">
      <van-tabs>
        <van-tab title="发帖">
          <div style="height: 10rem">
            <div style="text-align: center">
              <img
                src="../../assets/noDatac9a869bc.png"
                alt=""
                style="width: 6rem; padding: 1rem 0 1rem 0"
              />
              <p style="color: #cccccc; font-size: 12px">暂时没有帖子哟</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="回复">
          <div style="height: 10rem">
            <div style="text-align: center">
              <img
                src="../../assets/noDatac9a869bc.png"
                alt=""
                style="width: 6rem; padding: 1rem 0 1rem 0"
              />
              <p style="color: #cccccc; font-size: 12px">暂时没有帖子哟</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="收藏">
          <div style="height: 10rem">
            <div style="text-align: center">
              <img
                src="../../assets/noDatac9a869bc.png"
                alt=""
                style="width: 6rem; padding: 1rem 0 1rem 0"
              />
              <p style="color: #cccccc; font-size: 12px">暂时没有帖子哟</p>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  data() {
    return { title: '', tabData: [] }
  },
  components: {},
  name: 'PersonCenter',
  props: {
    msg: {
      // type: String,
      // required: true
    }
  },
  methods: {
    edit() {
      this.$router.push({
        path: '/editPerson'
      })
      console.log('edit')
    },
    getTab() {}
  },
  created() {
    this.getTab()
  },

  setup: (props, context) => {
    console.log(ref())
    console.log(defineComponent)
    const count = ref(0)
    // let tabData = ref(0)
    const { ctx, proxy }: any = getCurrentInstance()
    console.log(ctx, props, context, proxy)
    const active = ref(2)
    return { count, active }
  }
})
</script>

<style scoped>
.personCenter {
  background: url('../../assets/ysCenterBackground62c1bfcb (1).png') center;
  background-size: cover;
  background-color: gainsboro;
  /* height: 100%; */
  /* padding: 20px; */
  /* font: 1em Helvetica Neue, Helvetica, Arial, sans-serif; */
}
.miyob-container {
  position: absolute;
  height: 0.5rem;
  line-height: 0.5rem;
  right: 10%;
  top: 10%;
  background-color: rgba(0, 0, 0, 0.6);
  padding-right: 0.15rem;
  font-size: 0.12rem;
  color: #fff;
  border-radius: 0.12rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.mhy-img-icon {
  font-size: 0.24rem;
  margin-right: 0.1rem;
  vertical-align: top;
}
p {
  margin: 0 0 1em 0;
}

.container {
  width: 100%;
  border-radius: 0.5em;
  overflow: hidden;
}

.contentCard {
  border-radius: 2%;
  width: 90%;
  height: 5rem;
  margin: 0 auto;
  margin-top: 15%;
  /* padding-top:10%; */
  background-color: white;
  box-shadow: 0 0.01rem 0.2rem 0 rgb(51 45 36 / 10%);
}
.contentCard .head {
  background: url('../../assets/avatar1.png');
  background-size: cover;
  background-color: white;
  width: 2.7em;
  height: 2.7em;
  position: absolute;
  border-radius: 50%;
  left: 10%;
  top: 10%;
  /* top: 0px; */
}
.mhy-img-icon {
  height: 0.5rem;
  vertical-align: middle;
}
.lowGray {
  font-size: 10px;
  color: #ccc;
  padding-left: 5px;
}
</style>
