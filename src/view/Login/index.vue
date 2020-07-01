<template>
  <div class="page-login">
        <van-nav-bar
              title="京东登入"
              
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
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" size="small">
            登录
          </van-button>
         
        </div>
      </van-form>
        <van-button round block type="info" native-type="zhuce" @click='fn'>
            注册
        </van-button>
    <TabBar></TabBar>
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
  name:'Login',
  components: {
    TabBar: ()=> import('../../components/common/TabBar'),
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
     [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onSubmit() {
      console.log('312')
      // 提交注册
      let data = {
        username: this.username,
        password: this.password
      }
      this.$http.login(data).then((res) => {
        console.log('登入成功', res.data.data.token)
        localStorage.setItem('token', res.data.data.token)
        this.$router.push('/home')
      })
    },
    fn() {
      console.log('312312')
      this.$router.push('/regist')
    }
  }
}
</script>

<style lang="scss" scoped>
  .center{
    color: blue;
  }
  .van-form{
    margin-top: 1.3333rem;
  }
  .van-button--block {
    /* margin-left: 70px; */
    display: inline-block;
  }
</style>