/* 直接更新state的多个方法的对象 */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_FOOD_TYPES,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_INFO,
  RECEIVE_SHOP_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_FOOD_TYPES] (state, {foodTypes}) {
    state.foodTypes = foodTypes
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_SHOP_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_SHOP_INFO] (state, {info}) {
    state.info = info
  },
  [RECEIVE_SHOP_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if (!food.count) {
      // food.count = 1
      Vue.set(food, 'count', 1) // 让新增的属性也有数据绑定
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) {
      food.count--
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART] (state) {
    //  清除food中的count
    state.cartFoods.forEach(food => { food.count = 0 })
    //  移除购物车中所有购物项
    state.cartFoods = []
  }
}
