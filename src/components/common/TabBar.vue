<template>
  <van-tabbar route  active-color='#1989fa' fixed>
  <van-tabbar-item icon="home-o" to='/home'>首页</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to='/classification' >分类</van-tabbar-item>

  <van-tabbar-item icon="search" to='/jingxi' dot>京喜</van-tabbar-item>

  <van-tabbar-item icon="friends-o" to='/cart' badge="5">购物车</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to='/login' >登入</van-tabbar-item>
</van-tabbar>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
 
}
</script>

<style>

</style>