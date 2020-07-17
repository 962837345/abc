import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/studyNote/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/mall'
  },
  {
    path: '/mall',
    redirect: '/mall/myHome',
    component: () => import('../views/mall/Mall.vue'),
    children: [
      {
        path: 'myHome',
        meta: {
          title: '首页',
        },
        component: () => import('../views/home/MyHome.vue')
      },
      {
        path: 'category',
        meta: {
          title: '分类',
        },
        component: () => import('../views/category/Category.vue')
      },
      {
        path: 'cart',
        meta: {
          title: '购物车',
        },
        component: () => import('../views/cart/Cart.vue')
      },
      {
        path: 'profile',
        meta: {
          title: '个人中心',
        },
        component: () => import('../views/profile/Profile.vue')
      },
      {
        path: 'detail/:iid',
        meta: {
          title: '详情',
        },
        component: () => import('../views/detail/Detail.vue')
      }
    ]
  },
  {
    path: '/mainTabBar',
    component: () => import('../components/content/mainTabBar/MainTabBar.vue'),
  },

  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'webpack'
      },
      {
        path: 'webpack',
        name: 'webpack',
        meta: {
          title: 'webpack的使用'
        },
        component: () => import('../views/studyNote/Webpack.vue')
      },
      {
        path: 'vModel',
        name: 'vModel',
        meta: {
          title: 'v-model的使用及实现原理'
        },
        component: () => import('../views/studyNote/VModel.vue')
      },
      {
        path: 'v-showAndV-if',
        name: 'v-showAndV-if',
        meta: {
          title: 'v-show和v-if的区别'
        },
        component: () => import('../views/studyNote/V-showAndV-if.vue')
      },
      {
        path: 'vueCom',
        name: 'vueCom',
        meta: {
          title: 'vue中的通信'
        },
        component: () => import('../views/studyNote/VueCommunication.vue')
      },
      {
        path: 'routerCom',
        name: 'routerCom',
        meta: {
          title: 'vue-router的使用'
        },
        component: () => import('../views/studyNote/RouterCommunication.vue')
      },
      {
        path: 'promise',
        name: 'promise',
        meta: {
          title: 'promise的使用'
        },
        component: () => import('../views/studyNote/Promise.vue')
      },
      {
        path: 'vuex',
        name: 'vuex',
        meta: {
          title: 'vuex的使用'
        },
        component: () => import('../views/studyNote/Vuex.vue')
      },
      {
        path: 'axios',
        name: 'axios',
        meta: {
          title: 'axios的使用'
        },
        component: () => import('../views/studyNote/Axios.vue')
      },
      {
        path: 'jsFunction',
        name: 'jsFunction',
        meta: {
          title: 'Js高阶函数的使用'
        },
        component: () => import('../views/studyNote/JsFunction')
      },
      {
        path: 'betterScroll',
        name: 'betterScroll',
        meta: {
          title: 'better-scroll的使用'
        },
        component: () => import('../views/studyNote/BetterScroll')
      },
    ]
  }
];

const router = new VueRouter({
  //mode: 'history',
  routes
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
