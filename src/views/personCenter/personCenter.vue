<template>
  <div class="personCenter">
    <van-nav-bar :title="title" left-text="" left-arrow>
      <template #left>
        <van-icon name="arrow-left" />
      </template>
      <template #middle></template>
      <template #right>
        <van-icon name="gift-o" size="18" badge="5" />
        <span style="width: 10px"></span>
        <van-icon name="setting-o" />
      </template>
    </van-nav-bar>
    <div class="contentCard">
      <div class="head">
        <!-- <img   src="../../assets/avatar1.png" alt=""> -->
      </div>
      <div style="padding-top: 12px">
        <van-row>
          <van-col span="10" offset="7">
            <span style="color: gray; font-size: 10px">通行证ID:277269185</span>
          </van-col>
          <van-col offset="1">
            <van-button round type="primary" size="small" style="width: 5em" plain>编辑</van-button>
          </van-col>
        </van-row>
      </div>
      <van-row>
        <van-col span="5" offset="1">罗宾逊</van-col>
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
    <div style="padding-top:10px">
      <van-tabs>
        <van-tab title="发帖">
          <div>发帖</div>
        </van-tab>
        <van-tab title="回复">
          <div>回复</div>
        </van-tab>
        <van-tab title="收藏">
          <div>收藏</div>
        </van-tab>
      </van-tabs>
    </div>
    <div>
      <!-- <div class="wrapper">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
      </div> -->
    </div>
    <div class="container">
      <div class="item"></div>
      <p>
        Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean
        corn fava bean mustard tigernut jícama green bean celtuce.
      </p>
      <p>
        Grape silver beet collard greens avocado quandong fennel gumbo black-eyed pea watercress
        potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet
        pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring
        onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd
        winter purslane silver beet rock melon radish asparagus spinach.
      </p>
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
  height: 100%;
  /* padding: 20px; */
  /* font: 1em Helvetica Neue, Helvetica, Arial, sans-serif; */
}

p {
  margin: 0 0 1em 0;
}

.container {
  width: 100%;
  border-radius: 0.5em;
  overflow: hidden;
}

.item {
  float: left;
  background-color: rgba(111, 41, 97, 0.3);

}
.contentCard {
  border-radius: 2%;
  width: 95%;
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
  width: 1.7rem;
  height: 1.7rem;
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
