<template>
  <div class="cart">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      right-text="。。。"
      left-arrow
      @click-left="onClickLeft"
      fixed
   >
     <template #right>
        <van-icon name="underway-o" />
    </template>
    </van-nav-bar>

  <!-- 购物车商品列表 -->

   <div class="cart-good" v-for="(item,index) in list" :key="item._id">
     <van-swipe-cell>
      <van-row type="flex" justify='center' align='center'>
        <van-col span="4">
          <van-cell>
            <van-checkbox v-model="item.checked" @change="checkChange(index, $event)"  />
          </van-cell>
        </van-col>
      <van-col span='20'>
        <van-card
            :num="item.num"
            :price="item.good.price"
            :desc="item.good.desc"
            :title="item.good.name"
            :thumb="item.good.img"
          >
        
        <template #footer>
          <van-button size="mini" @touchstart='onUpdate("sub", item)'>-</van-button>
          <van-button size="mini" @touchstart='onUpdate("add", item)'>+</van-button>
        </template>
       </van-card>
      </van-col>

    </van-row>
     <template #right>
        <van-button square text="删除"  @touchstart='onDelete(item)' type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </div>
  
    <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
        <template #tip>
          你的收货地址不支持同城送, <span @click="editAddr">修改地址</span>
        </template>
    </van-submit-bar>
  </div>
</template>
<script>
import { 
  NavBar,
  Icon,
  SubmitBar,
  Checkbox ,
  Card ,
  tag ,
  button ,
  Col,
  Cell,
  Row,
  SwipeCell,
  Toast 
 } from 'vant';
import {mapState, mapGetters,mapMutations ,mapActions} from 'vuex'
export default {
  name: 'Cart',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [SubmitBar.name ]: SubmitBar,
    [Checkbox.name] : Checkbox ,
    [Card.name ]: Card ,
    [tag.name]: tag ,
    [button.name]: button,
    [Col.name]: Col,
    [Cell.name]: Cell,

    [Row.name]: Row,
    [SwipeCell.name]: SwipeCell,
    [Toast.name] : Toast
  },
  computed: {
    ...mapState('cart',['list']),
    ...mapGetters('cart',['total'])
  },
  data() {
    return {
      checked: true,
      // list: []
    }
  },
  mounted() {
    this.getCartList({})
  },
  methods: {
    ...mapActions('cart',['getCartList']),
    ...mapMutations('cart',[ 'updateListItem']),
  
  // 删除一条记录
  onDelete(item) {
    // 删除一条记录
    let params = {
      id: item._id
    }
    this.$http.deleteToCart(params).then(res => {
       // 刷新购物车
        Toast('删除成功')
      console.log('删除成功',res)
      this.getCartList({})
    })
  },

  // 修改数量
  onUpdate(type, item) {
    if(type=='sub' && 'sub'==1) return
    if(type == 'sub') {
      console.log(item)
      let data = {
        num: item.num-1,
        id: item._id
      }
      this.$http.updateCartNum(data).then(res => {
        console.log(res)
         Toast('减少成功')
        this.getCartList({})
      })

    }else {
       let data = {
        num: item.num+1,
        id: item._id
      }
      this.$http.updateCartNum(data).then(res => {
        console.log(res)
         Toast('添加成功')

        this.getCartList({})
      })
    }
  },

  // 修改选中不选中
  checkChange(index , check) {
    this.updateListItem({index,check})
  },
    // 返回上一页
    onClickLeft(){
      this.$router.back()
    },
        onSubmit() {
      // 提交订单
    },
    editAddr() {
      // 跳转到地址修改页面
      console.log('23')
    },
  }
}
</script>


<style lang='scss' scoped>
  .cart{
    padding-bottom: 2rem;
    padding-top: 1.6rem;
  }
    .delete-button {
    height: 100%;
  }
</style>