/* 通过mutations间接更新state的多个方法的对象 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_FOOD_TYPES,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SHOP_RATINGS,
  RECEIVE_SHOP_INFO,
  RECEIVE_SHOP_GOODS
} from './mutation-types'
import {
  reqAddress,
  reqFoodTypes,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from '../api'
export default {
  //  异步获取地址
  async getAddress ({commit, state}) {
    //  发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //  提交mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  //  异步获取食品分类数组
  async getFoodTypes ({commit}) {
    //  发送异步ajax请求
    const result = await reqFoodTypes()
    //  提交mutation
    if (result.code === 0) {
      const foodTypes = result.data
      commit(RECEIVE_FOOD_TYPES, {foodTypes})
    }
  },
  //  异步获取商店列表
  async getShops ({commit, state}) {
    //  发送异步ajax请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    //  提交mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  //  同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  //  异步获取用户信息
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },
  //  异步退出
  async logout ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },
  async getShopRatings ({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_SHOP_RATINGS, {ratings})
    }
  },
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_SHOP_INFO, {info})
    }
  },
  async getShopGoods ({commit}) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_SHOP_GOODS, {goods})
    }
  }
}
