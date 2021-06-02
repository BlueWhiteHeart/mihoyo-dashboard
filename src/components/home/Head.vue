<template>
  <div>
    <div>
      <!-- <div class="mhy-header">
        <div class="mhy-account-avatar header-avatar">
          <i class="mhy-icon iconfont icon-dots"></i>
          <img src="https://img-static.mihoyo.com/avatar/avatar1.png" />
        </div>
        <div class="title-text">
          <div class="text-absolute"><span>原神</span></div>
        </div>
        <div class="header-right">
          <i class="mhy-icon iconfont search-icon notify-icon icon-sousuo"></i>
          <i class="mhy-icon iconfont notify-icon icon-xiaoxizhongxin"></i>
          <div count-num="12" class="notify-point"></div>
        </div>
      </div> -->
      <van-nav-bar :title="title" left-text="返回" class="mhy-header">
        <template #left>
          <van-icon name="https://img-static.mihoyo.com/avatar/avatar1.png" size="18" @click="jumpPesonCenter()" />
        </template>
        <template #middle> </template>
        <template #right>
          <van-icon name="search" size="18" />
          <span style="width: 10px"></span>
          <van-icon name="chat-o" size="18" badge="5" />
        </template>
      </van-nav-bar>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
// import { Button } from 'vant'

export default defineComponent({
  components: {},
  name: 'HelloWorld',
  props: {
    msg: {
      // type: String,
      // required: true
    }
  },
  data() {
    return { title: '原神' }
  },
  methods: {

    jumpPesonCenter() {
      this.$router.push({
        path: 'personCenter'
      })
      console.log('发送请求')
      console.log(this)
    }
  },
  setup: () => {
    const count = ref(0)
    // const { ctx } = getCurrentInstance()
    // function fetch() {}

    return { count }
  }
})
</script>

<style scoped>
</style>
