<template>
  <div>
    个人中心
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  data() {
    return { tabData: [] }
  },
  components: {
  },
  name: 'PersonCenter',
  props: {
    msg: {
      // type: String,
      // required: true
    }
  },
  methods: {
    getTab() {
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
    console.log(ctx,props,context,proxy);
    const active = ref(2)
    return { count, active }
  }
})
</script>

<style scoped>
</style>
