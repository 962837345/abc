import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
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
        component: () => import('../views/Webpack.vue')
      },
      {
        path: 'vModel',
        name: 'vModel',
        meta: {
          title: 'v-model的使用及实现原理'
        },
        component: () => import('../views/VModel.vue')
      },
      {
        path: 'v-showAndV-if',
        name: 'v-showAndV-if',
        meta: {
          title: 'v-show和v-if的区别'
        },
        component: () => import('../views/V-showAndV-if.vue')
      },
      {
        path: 'vueCom',
        name: 'vueCom',
        meta: {
          title: 'vue中的通信'
        },
        component: () => import('../views/VueCommunication.vue')
      },
      {
        path: 'routerCom',
        name: 'routerCom',
        meta: {
          title: 'vue-router的使用'
        },
        component: () => import('../views/RouterCommunication.vue')
      },
      {
        path: 'promise',
        name: 'promise',
        meta: {
          title: 'promise的使用'
        },
        component: () => import('../views/Promise.vue')
      },
      {
        path: 'vuex',
        name: 'vuex',
        meta: {
          title: 'vuex的使用'
        },
        component: () => import('../views/Vuex.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
