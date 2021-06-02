<template>
  <div>
    <!-- <van-button type="primary" @click="createTab" size="small">创建tab模拟数据</van-button>
    <van-button type="primary" @click="getTab" size="small">获取tab模拟数据</van-button> -->
    <Head></Head>
    <van-tabs :active="active" swipeable>
      <van-tab v-for="(item, index) in tabData" :title="tabData[index].name" :key="item.id"
        >{{ tabData[index].des }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue'
import { Button } from 'vant'
import Head from '../../components/home/Head.vue'

export default defineComponent({
  data() {
    return { tabData: [] }
  },
  components: {
    [Button.name]: Button,
    Head
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
      const { ctx, proxy }: any = getCurrentInstance()
      console.log(proxy)
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
  created() {
    this.getTab()
  },

  setup: (props, context) => {
    console.log(ref())
    console.log(defineComponent)
    const count = ref(0)
    // let tabData = ref(0)
    const { ctx, proxy }: any = getCurrentInstance()
    console.log(props,context,proxy);
    function createTab() {
      console.log('创建')
      ctx.$http.get('/createTab', {}, {}).then(() => {
        //请求成功
      })
      console.log('发送请求')
    }
    // function getTab() {
    //   ctx.$http.get('/getTab', {}, {}).then((res: any) => {
    //     if (res.data.status === 'SUCCEED') {
    //       this.tabData = res.data.data
    //       console.log('获取')
    //       console.log(tabData)
    //       console.log('获取')
    //     }
    //     //请求成功
    //   })
    // }
    const active = ref(2)
    return { count, createTab, active }
  }
})
</script>

<style scoped>
.ys-theme .root-page .mhy-header {
    background: #2d2f33;
    color: #ccc;
}
</style>
