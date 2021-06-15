<template>
  <div>
    <van-nav-bar title="编辑个人资料" left-text="" left-arrow style="color: gray">
      <template #left>
        <van-icon name="arrow-left" @click="goBack"/>
      </template>
      <template #middle> </template>
      <template #right>
        <span @click="onSubmit">保存</span>
      </template>
    </van-nav-bar>
    <div class="content-card">
      <div class="avatar-container">
        <div class="avatar">
          <img
            src="https://img-static.mihoyo.com/communityweb/upload/be1d48fddcef6bd101398f5a3c02686a.png"
            class="avatar-img"
          />
        </div>
        <p>点击修改头像</p>
      </div>
    </div>
    <van-row justify="center">
      <van-col span="22">
        <van-form>
          <van-field
            v-model="state.username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field name="radio" label="单选框">
            <template #input>
              <van-radio-group v-model="checkedGeneral" direction="horizontal">
                <!-- <van-radio name="1">
                  男
                  <template #icon="props">
                    <img v-show="props" class="img-icon" src="../../assets/color-male.svg" />
                  </template>
                </van-radio>
                <van-radio name="2">
                  女
                  <template #icon="props">
                    <img v-show="props" class="img-icon" src="../../assets/color-female.svg" />
                  </template>
                </van-radio>
                <van-radio name="3">
                  保密
                  <template #icon="props">
                    <img v-show="props" class="img-icon" src="../../assets/lock.svg" />
                  </template>
                </van-radio> -->
                <van-radio name="1">
                  男
                  <template #icon="props">
                    <img class="img-icon" :src="props.checked ? colorMale : male" />
                  </template>
                </van-radio>
                <van-radio name="2">
                  女
                  <template #icon="props">
                    <img class="img-icon" :src="props.checked ? colorFemale : female" />
                  </template>
                </van-radio>
              </van-radio-group>
            </template>
          </van-field>
        </van-form>
      </van-col>
    </van-row>
    <van-row justify="center">
      <van-col span="22">
        <div class="introduce-label">个人签名：<span>(最多可以输入48个文字)</span></div>
      </van-col>
    </van-row>
    <br />
    <van-field
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      maxlength="48"
      placeholder="系统原装签名，送给每一个小可爱～"
      show-word-limit
    />
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
      checked,
      colorMale: 'https://annex.nx-engine.com/color-male.svg',
      male: 'https://annex.nx-engine.com/nocolor-male.svg',
      colorFemale: 'https://annex.nx-engine.com/color-female.svg',
      female: 'https://annex.nx-engine.com/nocolor-felmale.svg'
    }
  }
})
</script>

<style scoped>
.introduce-label span {
  font-size: 0.11rem;
  color: #ccc;
}
.content-card {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  padding: 0 0.16rem;
  overflow: auto;
  background-color: #f7f9fa;
  /* height: 100rem; */
}
.avatar {
  width: 2rem;
  height: 2rem;
  display: inline-block;
  position: relative;
  vertical-align: top;
}
.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.avatar-container {
  text-align: center;
  margin-top: 1rem;
  color: #ccc;
  font-size: 0.12rem;
}
.img-icon {
  height: 20px;
}
.introduce-label {
  margin: 0.4rem 0 0.12rem;
  font-size: 0.14rem;
}
</style>
