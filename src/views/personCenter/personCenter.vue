<template>
  <div>
    <van-nav-bar :title="title" left-text="" left-arrow>
      <template #left>
        <van-icon name="arrow-left" />
      </template>
      <template #middle> 123</template>
      <template #right>
        <van-icon name="search" size="18" />
        <span style="width: 10px"></span>
        <van-icon name="chat-o" size="18" badge="5" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  data() {
    return { title: '个人', tabData: [] }
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
</style>
