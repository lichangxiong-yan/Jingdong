<template>
  <div class="regist">
       <van-nav-bar
          title="京东注册"
          
          right-text="。。。"
          left-arrow
          @click-left="onClickLeft"
          fixed
      >
     <template #right>
        ...
    </template>
    </van-nav-bar>

    <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-field
      v-model="password2"
      type="password"
      name="密码"
      label="密码"
      placeholder="确认密码"
      :rules="[{ required: true, message: '请确认密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
        注册
      </van-button>
    </div>
  </van-form>
  </div>
</template>

<script>
import {
  NavBar,
  Icon,
  Form,
  Field,
  Button
} from 'vant'
export default {
  name:'Regist',
  components: {
       [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
   data: function() {
    return {
      username: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onSubmit() {
      console.log('zhuce')
      let data = {
        username: this.username,
        password: this.password,
        password2: this.password2
      }
      this.$http.regist(data).then((res) => {
          console.log(res)
          this.$router.push('/login')
      }).catch()
    }
  }
}
</script>

<style lang="scss" scoped>
  .van-form{
    margin-top: 1.3333rem;
  }
</style>