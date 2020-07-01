<template>
<div>
    <van-nav-bar
      
     
      right-text="。。。"
      left-arrow
      @click-left="onClickLeft"
      fixed
   >
    <template #title>
       <van-search
        
        shape="round"
        background="#ffffff"
        :placeholder="tips"
        disabled 
      />
    </template>
    
    </van-nav-bar>

  <div class="classification-left">
    <van-sidebar v-model="activeKey"  >
      <!-- <van-sidebar-item title="个人清洁"  @change='fn' :class="{on :activeKey==index }" /> -->
      <van-sidebar-item :title='item.title' v-for="item in list" :key="item.id"  @click='fn' :class="{on : item.id == index+1 }"/>
      <!-- <van-sidebar-item title="男装女装" />
      <van-sidebar-item title="个人清洁" />
      <van-sidebar-item title="汽车生活" />
      <van-sidebar-item title="男装女装" />
      <van-sidebar-item title="个人清洁" />
      <van-sidebar-item title="汽车生活" />
      <van-sidebar-item title="男装女装" />
      <van-sidebar-item title="个人清洁" />
      <van-sidebar-item title="汽车生活" />
      <van-sidebar-item title="男装女装" />
      <van-sidebar-item title="个人清洁" />
      <van-sidebar-item title="汽车生活" />
      <van-sidebar-item title="男装女装" />
      <van-sidebar-item title="个人清洁" />
      <van-sidebar-item title="汽车生活" />
      <van-sidebar-item title="男装女装" /> -->
    </van-sidebar>
  </div>

<div class="classification-right">
  <div v-for="item in 20" :key="item">
  <van-grid column-num='3'>
    <van-grid-item  >
       <template>
            <div class="find-good">
              <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
              <div>名字</div>
            </div>
        </template>
    </van-grid-item>
      <van-grid-item  >
       <template>
            <div class="find-good">
              <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
              <div>名字</div>
            </div>
        </template>
    </van-grid-item>
       <van-grid-item  >
       <template>
            <div class="find-good">
              <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
              <div>名字</div>
            </div>
        </template>
    </van-grid-item>
  </van-grid>
  </div>
</div>
  <TabBar></TabBar>
   </div>
</template>
<script>
import { 
  NavBar,
  Icon,
  Sidebar, 
  SidebarItem ,
  Grid, 
  GridItem,
  Image ,
  Search 
} from 'vant';

export default {
  name:'Classification',
   components: {
    TabBar: ()=> import('../../components/common/TabBar'),
    [NavBar.name]:NavBar,
    [Icon.name]: Icon,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
    [Search.name]: Search 
  },
  data() {
    return {
      activeKey: 0,
      index:0,
      list:[
        {id:1, title:"个人清洁"},
        {id:2, title:"个人清洁"},
        {id:3, title:"男装女装"},
        {id:4, title:"个人清洁"},
        {id:5, title:"个人清洁"},
        {id:6, title:"个人清洁"},
        {id:7, title:"个人清洁"},
        {id:8, title:"个人清洁"},
        {id:9, title:"个人清洁"},
        {id:10, title:"汽车生活"},
        {id:11, title:"个人清洁"},
        {id:12, title:"个人清洁"},
        {id:13, title:"个人清洁"},


      ]
    };
  },
  computed: {
    tips: function() {
         var arr = ["九阳热水壶", "Mac Pro", "笔记本电脑"];
      return arr[Math.floor(Math.random() * 3)];
    }
  },

  methods: {
    onClickLeft() {
      this.$router.back()
    },
    fn(index){
      console.log(index)
      this.index = index
      console.log(this.index)
    }
  }

  }

</script>

<style lang='scss' scoped>
  .classification-left {
    position: absolute;
    top: 1.2rem;
    left: 0;
    bottom: 0;
    width: 2.27rem;
    overflow: auto;
    // 在移动端有absolute产生滚动条，使用下面这个属性，可以更加流畅
    overflow-scrolling : touch;
  }
  .classification-right {
    position: absolute;
    top: 1.2rem;
    right: 0;
    left: 2.27rem;
    bottom: 1.6rem;
    
    overflow: auto;
    overflow-scrolling : touch;
  }
   .find-good {
    &>div {
      font-size: .4rem;
      text-align: center;
    }
  }
  .van-nav-bar__left{
    width: 1.0667rem;
  }
  .van-nav-bar__title{
    max-width: 0;
  }
  .on{
    color: red;
  }
</style>