<template>
	<div id="category-container">
		<div class="search">
			<div class="searchbox"> 
				<img src="/images/category/aliwx_search_icon.png"/>
				<span>寻找精选品质美味</span>
			</div>
			
		</div>
		<div class="category_box">
			<div class="category_one_box">
			<ul>
				<li v-for='item in foodlist1' v-link="{path:'/list'}">
					<img v-bind:src="item.image_url"/>
				</li>
			</ul>
		</div>
		<div class="category_two_box">
			<p class="title">吃货必备</p>
			<div class="swiper-container">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide">
			    	<img src="/images/category/img1.png" />
			    </div>
			    <div class="swiper-slide">
			    	<img src="/images/category/img2.png" />
			    </div>
			    <div class="swiper-slide">
			    	<img src="/images/category/img3.png" />
			    </div>
			    <div class="swiper-slide">
			    	<img src="/images/category/img4.png" />
			    </div>
			    <div class="swiper-slide">
			    	<img src="/images/category/img5.png" />
			    </div>
			  </div>
			</div>
		</div>
		</div>
		
	</div>
	
</template>

<script>
//	 var Vue = require('../libs/vue.js');
//	 var VueResource = require('../libs/vue-resource.js');
//	 Vue.use(VueResource);
	//引入action.js
	import { changeIndex } from "../vuex/actions";
	
	var mySwiper = null;
	export default {
	 	data(){
	 		return {
	 			foodlist1:[],
	 			foodlist2:[]
	 		}
	 	},
	 	vuex: {
	 		actions: {
	 			change: changeIndex
	 		}
	 	},
	 	ready(){
	 		//修改全局状态属性state
	 		this.change(1);
	 		
	 		var mySwiper = new Swiper('.swiper-container', {
	 			initialSlide: 2,
				effect : 'coverflow',
				slidesPerView:2,
				centeredSlides: true,
				coverflow: {
				            rotate: 30,
				            stretch: 10,
				            depth: 60,
				            modifier: 2,
				            slideShadows : true
				        }
			});
	 		

	 		this.$http.get('../mock/category.json')
		        .then(function (res) {
		          this.foodlist1=res.data.result_data.bottom;
		          this.foodlist2=res.data.result_data.top;
		          console.log(this.foodlist1);
		          console.log(this.foodlist2);
		      }, function (res) {
		          // error callback
		      });

	 	},
	 	methods:{
	 		
	 	}
	}
	
	
</script>