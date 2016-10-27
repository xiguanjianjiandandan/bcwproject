<template>
	我的.....
	
</template>

<script>
	//引入action.js
	import { changeIndex } from "../vuex/actions";
	//引入自定义插件
	import VueLoading from '../plugins/loading';
	Vue.use(VueLoading);
	
	export default {
		data(){
			return {
				
			}
		},
		vuex:{
			actions: {
	 			change: changeIndex
	 		}
		},
		ready(){
			this.change(3);
		}
	}
</script>