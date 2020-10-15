/* 直接更新state的多个方法的对象 */
import {RECEIVE_ADDRESS, RECEIVE_FOOD_TYPES, RECEIVE_SHOPS} from './mutation-types'
export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_FOOD_TYPES] (state, {foodTypes}) {
    state.foodTypes = foodTypes
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  }
}
