<template>
	<div id="index-container">
		<vue-loading v-show="isShow"></vue-loading>
		
		<header>
			<img src="/images/index/icon_home_logo.png" class="logo"/>
			<img src="/images/index/icon_home_search.png" class="searchimg"/>
		</header>
		<div class="nav" v-show="!isShow">
			<div id="nav-wrapper" >
			<ul class="navlist">
				<li v-on:click='switchnav(-1)' v-bind:class="curpage-1 == -1 ? 'active':''">推荐</li>
				<li v-for="item in navlist" v-bind:class="curpage-1 == $index ? 'active':''" v-on:click='switchnav($index)'>
					<span>{{item.name}}</span>
				</li>
			</ul>
		</div>
		</div>
		<div class="content-swiper-container" v-show="!isShow">
			<div class="swiper-wrapper">
			    <div class="swiper-slide">
			    	<div class="index-banner first-slide">
			    		<div class="banner-swiper-container">
						  <div class="swiper-wrapper">
						
						  		<div class="swiper-slide" v-for="banner in bannerlist">
							    	<img v-bind:src="banner.image"/>
							    </div>
						  		
						  </div>
						</div>
				    	<div class="ereabox">
							<ul class="arealist">
								<li v-for="areaitem in arealist">
									<img v-bind:src="areaitem.image" />
									<b>{{areaitem.title}}</b>
								</li>
							</ul>
						</div>
			    		
			    		<div class="homecomlist">
			    			<ul>
			    				<li class="listitem" v-for="comitem in homelist">
			    					<img v-bind:src="comitem.image"/>
			    					<div class="cominfo">
			    						<p class="name">{{comitem.goods_name}}</p>
			    						<p class="titlebox"><span>{{comitem.sub_title}}</span><b>疯抢价</b></p>
			    						<p class="pricebox"><span>{{comitem.end_time}}</span><b>￥{{comitem.price}}</b></p>
			    					</div>
			    				</li>
			    			</ul>
			    		</div>
			    	</div>
			    </div>
			    <div class="swiper-slide other-slide">
			    	<div class="topimg">
			    		<img src="/images/index/topimg.png"/>
			    	</div>
			    	<ul class="comlist">
			    		<li v-for="item in jgchlist">
			    			<img v-bind:src="item.goods_icon" class="comimg"/>
			    			<div class="cominfo">
			    				<p class="name">{{item.goods_name}}</p>
			    				<p class="pricebox">
			    					<span class="curprice">￥{{item.shop_price}}</span>
			    					<span class="oldprice">￥{{item.market_price}}</span>
			    					<i class="cartimg"><img src="/images/index/ic_shop_cart_col.png" alt="" /></i>
			    				</p>
			    			</div>
			    		</li>
			    	</ul>
			    </div>
			    <div class="swiper-slide other-slide">
			    	<div class="topimg">
			    		<img src="/images/index/topimg.png"/>
			    	</div>
			    	<ul class="comlist">
			    		<li v-for="item in jgchlist">
			    			<img v-bind:src="item.goods_icon" class="comimg"/>
			    			<div class="cominfo">
			    				<p class="name">{{item.goods_name}}</p>
			    				<p class="pricebox">
			    					<span class="curprice">￥{{item.shop_price}}</span>
			    					<span class="oldprice">￥{{item.market_price}}</span>
			    					<i class="cartimg"><img src="/images/index/ic_shop_cart_col.png" alt="" /></i>
			    				</p>
			    			</div>
			    		</li>
			    	</ul>
			    </div>
			    <div class="swiper-slide other-slide">
			    	<div class="topimg">
			    		<img src="/images/index/topimg.png"/>
			    	</div>
			    	<ul class="comlist">
			    		<li v-for="item in jgchlist">
			    			<img v-bind:src="item.goods_icon" class="comimg"/>
			    			<div class="cominfo">
			    				<p class="name">{{item.goods_name}}</p>
			    				<p class="pricebox">
			    					<span class="curprice">￥{{item.shop_price}}</span>
			    					<span class="oldprice">￥{{item.market_price}}</span>
			    					<i class="cartimg"><img src="/images/index/ic_shop_cart_col.png" alt="" /></i>
			    				</p>
			    			</div>
			    		</li>
			    	</ul>
			    </div>
			    <div class="swiper-slide other-slide">
			    	<div class="topimg">
			    		<img src="/images/index/topimg.png"/>
			    	</div>
			    	<ul class="comlist">
			    		<li v-for="item in jgchlist">
			    			<img v-bind:src="item.goods_icon" class="comimg"/>
			    			<div class="cominfo">
			    				<p class="name">{{item.goods_name}}</p>
			    				<p class="pricebox">
			    					<span class="curprice">￥{{item.shop_price}}</span>
			    					<span class="oldprice">￥{{item.market_price}}</span>
			    					<i class="cartimg"><img src="/images/index/ic_shop_cart_col.png" alt="" /></i>
			    				</p>
			    			</div>
			    		</li>
			    	</ul>
			    </div>
			    <div class="swiper-slide other-slide">
			    	<div class="topimg">
			    		<img src="/images/index/topimg.png"/>
			    	</div>
			    	<ul class="comlist">
			    		<li v-for="item in jgchlist">
			    			<img v-bind:src="item.goods_icon" class="comimg"/>
			    			<div class="cominfo">
			    				<p class="name">{{item.goods_name}}</p>
			    				<p class="pricebox">
			    					<span class="curprice">￥{{item.shop_price}}</span>
			    					<span class="oldprice">￥{{item.market_price}}</span>
			    					<i class="cartimg"><img src="/images/index/ic_shop_cart_col.png" alt="" /></i>
			    				</p>
			    			</div>
			    		</li>
			    	</ul>
			    </div>
			    <div class="swiper-slide other-slide">
			    	<div class="topimg">
			    		<img src="/images/index/topimg.png"/>
			    	</div>
			    	<ul class="comlist">
			    		<li v-for="item in jgchlist">
			    			<img v-bind:src="item.goods_icon" class="comimg"/>
			    			<div class="cominfo">
			    				<p class="name">{{item.goods_name}}</p>
			    				<p class="pricebox">
			    					<span class="curprice">￥{{item.shop_price}}</span>
			    					<span class="oldprice">￥{{item.market_price}}</span>
			    					<i class="cartimg"><img src="/images/index/ic_shop_cart_col.png" alt="" /></i>
			    				</p>
			    			</div>
			    		</li>
			    	</ul>
			    </div>
			  
			</div>
		</div>
		
	</div>
</template>
<script>
//	//引入iScroll	
//	import IScroll from '../libs/iscroll-probe.js';
//	//引入swiper
//	import mySwiper from '../libs/swiper-3.3.1.min.js';
	//引入vue，即vueajax请求插件
//	 var Vue = require('../libs/vue.js');
//	 var VueResource = require('../libs/vue-resource.js');
//	 Vue.use(VueResource);
	//引入action.js
	import { changeIndex } from "../vuex/actions";
	import commonUtil from '../util/commonUtil';
	
	var mySwiper = null;
	export default {
	 	data(){
	 		return {
	 			isShow:true,
	 			curpage:0,
	 			navlist:[],
	 			bannerlist:[],
	 			arealist:[],
	 			homelist:[],
	 			jgchlist:[]
	 		}
	 	},
	 	vuex:{
			actions: {
	 			change: changeIndex
	 		}
		},
	 	ready(){
	 		console.log("ready");
	 		var that = this;
	 		//修改全局状态属性
	 		this.change(0);
	 		
	 		Vue.nextTick(function(){
	 			commonUtil.isAllLoaded("#index-container",function(){
//	 				setTimeout(function(){
	 					that.isShow=false;
//	 				},500)
	 				
	 			});
	 		})
	 		var that=this;
			//设置
				mySwiper = new Swiper('.content-swiper-container', {
				 onSlideChangeStart: function(){
	              	//获取坚果炒货商品列表
	              	var curpage=mySwiper.activeIndex;
	              	if(curpage!=0){
	              		that.curpage=curpage;
	              		var cururl="../mock/indexprolist"+curpage+".json";
					    that.$http.get(cururl)
					        .then(function (res) {
					          that.jgchlist=res.data.result_data.list;
					      }, function (res) {
					          // error callback
					      });
	              	}else{
	              		that.curpage=0;
	              	}
	              	
	            }
			});
	 		
	 		
		      
			this.$http.get('../mock/bannerandarealist.json')
		        .then(function (res) {
		          this.bannerlist=res.data.result_data.banner;
		          this.arealist=res.data.result_data.area;
		          new Swiper('.banner-swiper-container', {
						autoplay:3000,
						observer:true,
						observeParents:true
					})
		      }, function (res) {
		          // error callback
		      });
		      
		      //获取nav列表
		      this.$http.get('../mock/navlist.json')
		        .then(function (res) {
		       		console.log(res.data.result_data.list);
		          this.navlist=res.data.result_data.list;
//		          //设置导航栏的横向滚动
//		          var myScroll = new IScroll('#nav-wrapper',{
//		          		 mouseWheel: false,
//  					scrollbars: false
//		          });
		      }, function (res) {
		          // error callback
		      });
		      
		   	//获取主页商品列表
		    this.$http.get('../mock/homelist.json')
		        .then(function (res) {
		          this.homelist=res.data.result_data.list;
		      }, function (res) {
		          // error callback
		      });
		      
		    
	 	},
 		methods:{
 			switchnav(index){
 				this.curpage=index+1;
 				mySwiper.slideTo(index+1);
 			}
 		}
	}
	
	
	
	
</script>
