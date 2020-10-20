/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

// import MSite from '../pages/MSite/MSite'
// import Search from '../pages/Search/Search'
// import Order from '../pages/Order/Order'
// import Profile from '../pages/Profile/Profile'

const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/msite'},
  {path: '/msite', component: MSite, meta: {showFooter: true}},
  {path: '/search', component: Search, meta: {showFooter: true}},
  {path: '/images', component: Order, meta: {showFooter: true}},
  {path: '/profile', component: Profile, meta: {showFooter: true}},
  {path: '/login', component: Login},
  {
    path: '/shop',
    component: Shop,
    children: [
      {path: '', redirect: '/shop/goods'},
      {path: '/shop/goods', component: ShopGoods},
      {path: '/shop/ratings', component: ShopRatings},
      {path: '/shop/info', component: ShopInfo}
    ]
  }
]

// eslint-disable-next-line
export default new VueRouter({
  routes
})
