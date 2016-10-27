<template>
	购物车..
	
</template>
<script>
	//引入action.js
	import { changeIndex } from "../vuex/actions";
	
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
			this.change(2);
		}
	}
</script>