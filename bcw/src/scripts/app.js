import '../styles/usage/page/app.scss'
import app from './components/app.vue'
import index from './components/index.vue';
import category from './components/category.vue';
import cart from './components/cart.vue';
import mine from './components/mine.vue';
import list from './components/list.vue';
import detail from './components/detail.vue'
import guide from './components/guide.vue'

////引入vue
//import Vue from './libs/vue.js';
//
////引入vue-router
//import VueRouter from './libs/vue-router.js';
//
////声明使用插件
//Vue.use(VueRouter);

//引入store.js
import store from './vuex/store.js';

//路由需要一个根组件
var App = Vue.extend({
	store:store
})

//创建路由实例
var router = new VueRouter()

router.map({
	'/':{
		component: guide
	},
    '/app': {
        component: app,
        subRoutes: {
	      '/': {
	        component: index
	      },
	      '/category': {
	        component: category
	      },
	      '/cart': {
	        component: cart
	      },
	      '/mine': {
	        component: mine
	      }
	    }
    },
    '/list':{
    	component:list
    },
    '/detail/:comid':{
    	name:'comid',
    	component:detail
    }
})

router.start(App, 'body')