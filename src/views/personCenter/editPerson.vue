<template>
  <div>
    <van-nav-bar title="编辑个人资料" left-text="" left-arrow style="color:gray">
      <template #left>
        <van-icon name="arrow-left" />
      </template>
      <template #middle>
      </template>
      <template #right>
        <span >保存</span>
      </template>
    </van-nav-bar>
    <div class="content-card">
      123
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
    edit(){
      console.log('edit');
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
.content-card {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: relative;
    padding: 0 .16rem;
    overflow: auto;
    background-color: #f7f9fa;
    /* height: 100rem; */
}
</style>
