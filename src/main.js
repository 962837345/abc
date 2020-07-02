import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(Element)
import {Container,Header,Aside,Main,Row,Menu,MenuItem,Input,Button} from "element-ui";
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Row);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Button);

import axios from 'axios'


Vue.config.productionTip = false;

router.beforeEach((to,from,next) => {
  document.title = to.meta.title;
  next();
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
