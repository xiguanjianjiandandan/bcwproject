<template>
	<div class="detail-container">
		 <vue-loading v-show="isShow"></vue-loading>
		<header v-bind:class="curlocation <0 ? 'headeractive':'normal' " transition="">
				<img src="/images/detail/ic_back_cir_grey.png" class="back" v-on:click="back"/>
				<span>商品详情</span>
				<img src="/images/detail/ic_share_cir.png" class="share"/>
		</header>
		<div class="detailbox">
			<div id="iscroll-wrapper"  >
				<div class="content" v-show="!isShow" >
					<div class="banner-swiper-container">
					  <div class="swiper-wrapper">
					    <div class="swiper-slide" v-for="banner in bannerlist">
					    	<img v-bind:src="banner"/>
					    </div>
					    
					  </div>
					</div>
					<div class="cominfo">
						<p class="price"><span>￥{{comdetail.shop_price}}</span><b>￥{{comdetail.market_price}}</b></p>
						<div class="des">
							<p class="title">{{comdetail.goods_name}}</p>
							<p class="text">{{comdetail.goods_subtitle}}</p>
						</div>
					</div>
					<div class="postage">
						<div class="title">
							<div>包邮</div>
							<b>{{comdetail.goods_sale_plan}}</b>
						</div>
						<ul>
							<li>
								<img src="/images/detail/ic_ck.png" alt="" />
								<span>购物赚味豆</span>
							</li>
							<li>
								<img src="/images/detail/ic_ck.png" alt="" />
								<span>闪电发货</span>
							</li>
							<li>
								<img src="/images/detail/ic_ck.png" alt="" />
								<span>正品保证</span>
							</li>
							<li>
								<img src="/images/detail/ic_ck.png" alt="" />
								<span>优质服务</span>
							</li>
							
						</ul>
					</div>
					<div class="eaterlove">
						<div class="title">
							<img src="/images/detail/fire.png" alt="" />
							<span>吃货最爱</span>
						</div>
						    	<ul>
						    		<li v-for="item in comdetail.recommend_goods">
						    			<img v-bind:src="item.goods_img" alt="" />
						    			<p>{{item.goods_title}}</p>
						    			<span>￥{{item.shop_price}}</span>
						    		</li>
						    	</ul>
						   </div>
						 </div>
</div>
					</div>
					
				
		<footer>
			<ul>
				<li>
					<img src="/images/detail/ic_servicer_black.png" alt="" />
					<b>客服</b>
				</li>
				<li>
					<img src="/images/detail/icon_collect.png" alt="" />
					<b>喜欢</b>
				</li>
				<li>
					<img src="/images/detail/icon_cart_goodsdetail.png" alt="" />
					<b>购物车</b>
				</li>
			</ul>
			<div>
				<button>加入购物车</button>
			</div>
			
		</footer>
	</div>
			</div>
		</div>
	</div>
	
	
</template>

<script type="text/javascript">
//	var Vue = require('../libs/vue.js');
//	var VueResource = require('../libs/vue-resource.js');
//	 Vue.use(VueResource);
	 
	import commonUtil from '../util/commonUtil';
	import VueLoading from '../plugins/loading';
	Vue.use(VueLoading);
	
	var myScroll =null;
	export default {
	 	data(){
	 		return {
	 			isShow:true,
	 			curlocation:0,
	 			comdetail:{},
	 			bannerlist:[
	 				'/images/detail/img1.png',
	 				'/images/detail/img2.png',
	 				'/images/detail/img3.png',
	 				'/images/detail/img4.png',
	 				'/images/detail/img5.png'
	 			]
	 		}
	 	},
	 	ready(){
	 		//获取列表路由传过来的商品id
	 		var curcomid=this.$route.params.comid;
	 		console.log(curcomid);
	 		var that=this;
	 		
	 		console.log(this.isShow);
	 		setTimeout(function(){
			 	that.isShow=false;
			 
		 		//注意：由于可能css文件还没有加载完，导致Iscroll的依然为0，所以要加一个延时，然后再new Scroll();
		 		Vue.nextTick(function(){	 			
				 commonUtil.isAllLoaded("#list-scroll",function(){
				
		 			myScroll = new IScroll('#iscroll-wrapper',{
		 			   preventDefault:false,
		 			   mouseWheel: true,
		 			   scrollbars: true
		 			});
		 				 			
		 			myScroll.on('scrollEnd', function () {
		 				console.log(this.y);
					    if(this.y>=0){
					    	console.log("top");
					    	that.curlocation=0;
					    }else{
					    	console.log("scroll");
					    	that.curlocation=this.y;
					    }
					});		
				
		 		})
		 		});
	 		},500);
	 		//设置swiper
	 		new Swiper(".banner-swiper-container");
	 		
		    this.$http.get('../mock/detail.json',{"goods_id":891})
		        .then(function (res) {
		          this.comdetail=res.data.result_data;
		      }, function (res) {
		          // error callback
		      });

	 	},
	 	methods:{
	 		switchpage(index){
	 			this.curpage=index;
	 			mySwiper.slideTo(index);
	 		},
	 		back(){
	 			window.history.back();
	 		}
	 	}
	}
	
</script>