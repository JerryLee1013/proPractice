<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id ? '/userinfo' : '/login'">
        <span class="header_login_text" v-if="userInfo._id">
          <i class="iconfont icon-wode"></i>
        </span>
        <span class="header_login_text" v-else>
          登录|注册
        </span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="foodTypes.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(foodTypes, index) in foodTypesArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(foodType, index) in foodTypes" :key="index">
              <div class="food_container">
                <img :src="baseImgUrl+foodType.image_url">
              </div>
              <span>{{foodType.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination">
        </div>
      </div>
      <img src="./images/msite_back.svg" alt="" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: 'MSite',
  data () {
    return {
      baseImgUrl: 'https://fuss10.elemecdn.com'
    }
  },
  mounted () {
    this.$store.dispatch('getFoodTypes')
    this.$store.dispatch('getShops')
  },
  computed: {
    ...mapState(['address', 'foodTypes', 'userInfo']),
    //  根据foodTypes生成一个二维数组，小数组中元素个数最大为8
    foodTypesArr () {
      const {foodTypes} = this
      //  准备一个空的二维数组
      let arr = []
      let minArr = []
      //  遍历foodTypes
      foodTypes.forEach(foodType => {
        if (minArr.length === 8) {
          minArr = []
        }
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        minArr.push(foodType)
      })
      return arr
    }
  },
  watch: {
    foodTypes (value) {
      // setTimeout(() => {
      //   //  创建一个Swiper实例对象实现轮播
      //   // eslint-disable-next-line
      //   new Swiper ('.swiper-container', {
      //     // 循环模式选项
      //     loop: true,
      //     // 如果需要分页器
      //     pagination: {
      //       el: '.swiper-pagination',
      //       type: 'bullets'
      //     }
      //   })
      // })

      //  界面更新就立即创建Swiper对象
      this.$nextTick(() => {
        //  创建一个Swiper实例对象实现轮播
        // eslint-disable-next-line
        new Swiper ('.swiper-container', {
          // 循环模式选项
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
          }
        })
      })
    }
  },
  components: {
    HeaderTop,
    ShopList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  //首页
  .msite
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        --swiper-pagination-color #00ff33
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
