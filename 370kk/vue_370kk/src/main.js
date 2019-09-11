import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入第三方组件库 mint-ui
// (1)完成引入所有组件
import MintUI from 'mint-ui'
// (2)单引入样式文件mint-ui/lib/style.css
import "mint-ui/lib/style.css"


// (1)引入第三方axios库
import axios from "axios";
// (2)设置实现发送ajax请求时保持session信息
axios.defaults.withCredentials=true;
// (3)设置ajax请求的基础路径
axios.defaults.baseURL="http://127.0.0.1:5050/";
// (4)注册axios
Vue.prototype.axios=axios;



Vue.config.productionTip = false

// (3)注册mint-ui组件库
Vue.use(MintUI)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
