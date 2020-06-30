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
      children:[
        {
          path: '',
          redirect: 'webpack'
        },
        {
          path: 'webpack',
          name: 'webpack',
          component: () => import('../views/Webpack.vue')
        },
        {
          path: 'vModel',
          name: 'vModel',
          component: () => import('../views/VModel.vue')
        }
      ]
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. 懒加载路由方式
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

];

const router = new VueRouter({
  mode:'history',
  routes
});

export default router
