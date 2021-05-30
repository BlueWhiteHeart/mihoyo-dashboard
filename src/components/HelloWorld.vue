<template>
  <div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue'
import { Button } from 'vant'

export default defineComponent({
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
  // methods: {
  //   fetch() {
  //     console.log('发送请求')
  //     console.log(this)
  //   }
  // },
  setup: () => {
    const count = ref(0)
    const { ctx }:any = getCurrentInstance()
    function fetch() {
      ctx.$http.get('/test', { a: '111' } , {}).then(() => {
        //请求成功
      })
    }

    return { count, fetch }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
