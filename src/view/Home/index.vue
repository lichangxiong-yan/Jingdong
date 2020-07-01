<template>
  <div class="page-home">

  
          
          
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">

         
            <el-backtop target=".page-home"  :bottom="100" :right='100'>
              <div class="gotop"
               
              >
                UP
              </div>
            </el-backtop>

    <!-- 顶部提示框 -->
    <van-notice-bar
      mode="closeable"
      background="#333333"
      color="#ffffff"
      scrollable
      left-icon="info-o"
    >打开京东App,购物更轻松
    </van-notice-bar>
    <!-- 搜索框 -->
    <van-search shape="round" background="#B00805" :placeholder="tips" show-action disabled>
       <template #left>
         <div class="tubiao">
           <van-icon name="wap-nav" size="20" />
         </div>
      </template>
      <template #action>
        <div class="login" @click="skipToLogin">
          登入
          </div>
      </template>
    </van-search>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image
          src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/118233/21/10385/193825/5ee9e683E5392791c/09391ad1586a223b.jpg!q70.jpg.dpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/118233/21/10385/193825/5ee9e683E5392791c/09391ad1586a223b.jpg!q70.jpg.dpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/118233/21/10385/193825/5ee9e683E5392791c/09391ad1586a223b.jpg!q70.jpg.dpg"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/118233/21/10385/193825/5ee9e683E5392791c/09391ad1586a223b.jpg!q70.jpg.dpg"
        />
      </van-swipe-item>
    </van-swipe>

    <!-- 分隔线 -->
    <van-divider :style="{ color: '#B00805', borderColor: '#B00805', padding: '0 16px' }">为你推荐</van-divider>

      <van-list
        :finished="finished"
         v-model= 'loading'
        finished-text="没有更多了"
        @load="onLoad" 
        :immediate-check= 'false'	 
        offset='50'
      >
      <div v-for="item in length" :key="item"  >
        <Good :good='list[2*(item-1)]'></Good>
        <Good :good='list[2*(item-1)+1]'></Good>

      </div>
      </van-list>
      
    </van-pull-refresh>

    <TabBar></TabBar>
  </div>
</template>

<script>
import { 
  NoticeBar, 
  Search, 
  Swipe, 
  SwipeItem, 
  Image,
  Divider,
  List,
  PullRefresh,
  Icon ,
  Toast
  } from "vant";
export default {
  name: "Home",
  components: {
    TabBar: () => import("../../components/common/TabBar"),
    Good: ()=>import('../../components/common/Good'),

    [NoticeBar.name]: NoticeBar,
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image,
    [Divider.name]: Divider,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh ,
    [Icon.name]: Icon,
    [Toast.name]: Toast
  },
  data() {
    return {
      list: [
      
      ],
      loading: false,
      finished: false,
      refreshing: false,
     page: 1
    };
  },
  computed: {
    tips: function() {
      var arr = ["九阳热水壶", "Mac Pro", "笔记本电脑"];
      return arr[Math.floor(Math.random() * 3)];
    },
    // 那个数组的 长度
    length: function() {
      return Math.floor(this.list.length/2)
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    // 获取首页数据

    getList() {
      let data = {
        hot: false,
        page: this.page,

      }
      this.$http.getHotGoodList(data).then((res) => {
        console.log('商品列表', res.data.data)
        if (res.data.data.length<10) {
          Toast('没有更多了')
        }
         if (this.refreshing) {
          this.list = res.data.data
        } else {
          this.list = [...this.list, ...res.data.data]
        }
       
         this.finished = false
        this.refreshing = false
        this.loading = false
      })
    },
    skipToLogin() {
      // 跳转到登入页
      console.log('213')
      this.$router.push('login')
    },
    onRefresh() {
      // 在这里调接口，刷新当前页面的数据
      this.page = 1
      this.getList() 
    },
    onLoad() {
      // 调接口，请求下一页数据
      console.log('快要到底了，赶紧请求接口吧')
    
          this.loading = true

     this.page++
      this.getList()
    
    }
  }
};
</script>
<style lang='scss' scoped>

.van-search{
  padding: 0 0 ;
  height:1.1733rem ;
}
.van-search .van-cell {
  height: 0.8rem ;
}
.login {
  color: #ffffff;
}
.tubiao{
  color: #fff;
  padding: 0 0.2133rem;
}
.van-search__action:active {
   background-color: transparent; 
}
.van-swipe-item {
  .van-image {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.gotop{
  width: 100px;
  height: 30px;
   background: red;
}
</style>