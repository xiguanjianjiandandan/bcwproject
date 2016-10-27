let VueLoading=function(){}

import loading from './vue-loading.vue';

VueLoading.install=function(){
	Vue.component('vue-loading',loading);//关键是这一步，将组件映射到插件中
}
export default VueLoading;