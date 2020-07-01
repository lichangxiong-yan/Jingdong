<template>
  <div>
    <van-nav-bar 
    :title="info.name" 
    right-text="。。。" 
    left-arrow 
    @click-left="onClickLeft" 
    fixed>
    <template #right>...</template>
    </van-nav-bar>
    <div class="box">
      <img :src="info.img" alt="">
      <span>{{info.price}}</span>
      <span>{{info.desc}}</span>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click='add(info._id)' />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

   
<script>
import {
   NavBar,
   Icon,
   GoodsAction,
   GoodsActionIcon,
   GoodsActionButton
  } from 'vant'
export default {
  name: 'Detail',
  components: {
    [NavBar.name] :NavBar,
    [Icon.name]: Icon,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data() {
    return {
      info: ''
    
    }
  },
  mounted(){
    let params = {
      good_id: this.$route.params.id
    }
    this.$http.getGoodDetail(params).then((res) => {
      
      console.log(res.data.data)
      this.info = res.data.data
     
    })
    
  },
  methods: {
    // 回退
    onClickLeft() {
      this.$router.back()
    },
    // 加入购物车
    add() {
      console.log('231')
      let data = {
       
        good_id : this.info
      }
      this.$http.addToCart(data).then((res) => {
        console.log(res)
        this.$router.push('/cart')
      })
    }
  }
};
</script>

<style lang='scss' scoped >
  .box{
    margin-top: 1.3333rem;
    width: 300px;
    height: 300px;
    img{
      width: 100%;
      height: 100%;
      display: block;
      margin-left: 1.133rem;
    }
    span{
      display: block;
      margin-top: 0.4rem;
      font-size: 0.5333rem;
      margin-left: 0.7rem;
    }
  }
</style>