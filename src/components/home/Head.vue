<template>
  <div>
    <van-nav-bar :title="title" left-text="返回">
      <template #left>
        <van-icon name="user-circle-o" size="18" />
      </template>
      <template #middle>
      </template>
      <template #right>
        <van-icon name="search" size="18" />
        <span style="width:10px"></span>
        <van-icon name="chat-o" size="18" badge="5" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue'
import { Button } from 'vant'

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
  // methods: {
  //   fetch() {
  //     console.log('发送请求')
  //     console.log(this)
  //   }
  // },
  setup: () => {
    const count = ref(0)
    // const { ctx } = getCurrentInstance()
    function fetch() {}

    return { count, fetch }
  }
})
</script>

<style scoped>
</style>
