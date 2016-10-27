<template>
	<div id="app-container">
		<div class="content">
			<router-view></router-view>
		</div>
		
		<footer>
			<ul>
				<li v-for="tab in tabList" v-on:click="switchtab($index)" v-link="{path:tab.path}">
					<img v-if="$index == curIndex" v-bind:src="tab.imgacturl"/>
					<img v-else v-bind:src="tab.imgurl" />
					<b>{{tab.title}}</b>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script type="text/javascript"> 
	//引入getter.js,获取当前全局状态属性的值
	import { getIndex } from '../vuex/getter.js';
	
export default {
	

 	data(){
		return {
			curpage:0,
			acttabimg:"../images/footer/ic_home_selected.png",
			normaltabimg:"../images/footer/ic_home_default.png",
			tabList:[
				{
					"path":'/app',
					"imgurl":'../images/footer/ic_home_default.png',
					"imgacturl":'../images/footer/ic_home_selected.png',
					"title":'首页'
				},
				{
					"path":'/app/category',
					"imgurl":'../images/footer/ic_department_default.png',
					"imgacturl":'../images/footer/ic_department_selected.png',
					"title":'分类'
				},
				{
					"path":'/app/cart',
					"imgurl":'../images/footer/ic_cart_default.png',
					"imgacturl":'../images/footer/ic_cart_selected.png',
					"title":'购物车'
				},
				{
					"path":'/app/mine',
					"imgurl":'../images/footer/ic_profile_default.png',
					"imgacturl":'../images/footer/ic_profile_selected.png',
					"title":'我的'
				}
			]
		}
	},
	vuex:{
		getters:{
			curIndex:getIndex
		}
	},
	methods:{
		switchtab:function(index){
			switch(index){
				case 0:
					this.curpage=0;
					this.acttabimg=this.tabList[0].imgacturl;
					
					break;
				case 1:
					this.curpage=1;
					this.acttabimg=this.tabList[1].imgacturl;
					break;
				case 2:
					this.curpage=2;
					this.acttabimg=this.tabList[2].imgacturl;
					break;
				case 3:
					this.curpage=3;
					this.acttabimg=this.tabList[3].imgacturl;
					break;
			}
		}
		
	}
	
 }
	
	
</script>