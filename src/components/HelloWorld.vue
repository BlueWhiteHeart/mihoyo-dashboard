<template>
  <div>
    <van-button type="primary" @click="fetch">主要按钮</van-button>
    <van-icon name="chat-o" />
    <h1>{{ msg }}</h1>
    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">
        Vetur
      </a>
      or
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      (if using
      <code>&lt;script setup&gt;</code>)
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button @click="count++">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
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
      type: String,
      required: true
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
    const { ctx } = getCurrentInstance()
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
