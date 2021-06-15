<template>
  <div>
    <van-nav-bar title="设置" left-text="" left-arrow style="color: gray">
      <template #left>
        <van-icon name="arrow-left" @click="goBack" />
      </template>
      <template #middle> </template>
      <template #right> </template>
    </van-nav-bar>
    <div class="content">
      <van-cell is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <van-icon name="goods-collect-o" style="margin-right: 5px" />
          <span class="custom-title">隐私设置</span>
        </template>
      </van-cell>
      <van-cell is-link style="margin-top: 10px">
        <template #title>
          <van-icon name="fire-o" style="margin-right: 5px" />
          <span class="custom-title">官网首页</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template #title>
          <van-icon name="card" style="margin-right: 5px" />
          <span class="custom-title">米哈游通行证</span>
        </template>
      </van-cell>
      <van-button color="#7232dd" plain block style="margin-top:10px">退出登录</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  data() {
    return {
      message: '',
      title: '',
      tabData: [],
      state: {
        username: ''
      },
      checkedGeneral: ''
    }
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
    goBack() {
      // this.$router.push();
    },
    edit() {
      console.log('edit')
    },
    onSubmit() {
      console.log('提交')
    },
    getTab() {}
  },
  created() {
    this.getTab()
  },

  setup: (props, context) => {
    const checked = ref('1')
    console.log(ref())
    console.log(defineComponent)
    const count = ref(0)
    // let tabData = ref(0)
    const { ctx, proxy }: any = getCurrentInstance()
    console.log(ctx, props, context, proxy)
    const active = ref(2)
    return {
      count,
      active,
      checked
    }
  }
})
</script>

<style scoped>
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}
.content {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  padding: 0 0.16rem;
  overflow: auto;
  background-color: #f7f9fa;
}
</style>
