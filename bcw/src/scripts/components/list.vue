<template>
	<div class="list-container">
		<vue-loading v-show="isShow"></vue-loading>
		<header>
			<img src="/images/list/ic_back_gray.png" class="backimg"  @click="back"/>
			<span>进口美食</span>
			<img src="/images/list/ic_home_black_search.png" class="searchimg" />
		</header>
		<nav>
			<ul>
				<li  v-for="tab in tablist"  v-bind:class="curpage == $index ? 'active':''"  @click="switchpage($index)">
					<span>{{tab.title}}</span>
					<img  v-show="$index == 2? true:false" v-bind:src="tab.img"/>
				</li>
			</ul>
		</nav>
		
		<div class="swiper-container" >
		  <div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="slide in tablist" id="list-scroll" >
		    	<div v-bind:class="slide.scrollname" v-show="!isShow">
		    		<div>
		    			<div class="head">
			                <img src="/images/list/arrow.png" width="18" height="18"/>
			                <span>下拉刷新...</span>
			            </div>
			    		<ul class="comlist">
				    		<li v-for="item in comlist"   v-link="{'name':'comid','params':{comid:123}}">
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
			    		<div class="foot">
			                <img src="/images/list/arrow.png" width="18" height="18"/>
			                <span>上拉加载更多...</span>
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
	 
	import commonUtil from '../util/commonUtil.js';
	
	var mySwiper = null;
	var myScroll =null;
	export default {
	 	data(){
	 		return {
	 			isShow:true,
	 			curpage:0,
	 			tablist:[
	 				{
	 					title:"综合",
	 					scrollname:"isroll-wrapper1"
	 				},
	 				{
	 					title:"销量",
	 					scrollname:"isroll-wrapper2"
	 				},
	 				{
	 					title:"价格",
	 					img:'/images/list/ic_fiter_default.png',
	 					scrollname:"isroll-wrapper3"
	 				}
	 			],
	 			comlist:[]
	 		}
	 	},
	 	ready(){
	 		var that=this;
	 		mySwiper = new Swiper('.swiper-container',{
	 			
	 			onSlideChangeStart: function(swiper){
	 				
	 				that.curpage=swiper.activeIndex;
	              	var curslide=swiper.activeIndex;
	           
	              	var url='../mock/listall'+curslide+'.json';
	              	
	              	//资源全部加载完成之后，关闭loading框
//				 	setTimeout(function(){
				 		that.isShow=false;
				 	
		              	that.$http.get(url)
					        .then(function (res) {
				          that.comlist=res.data.result_data.list;
				          var curname='.isroll-wrapper'+(curslide+1);
				   		  myScroll = new IScroll(curname,{
				 			   preventDefault:false,
				 			   mouseWheel: true,
				 			   scrollbars:true
				 			});
				 			
				 			
				 			myScroll.scrollTo(0, -35);
				 			 var head = $('.head img'),
                                topImgHasClass = head.hasClass('up');
                            var foot = $('.foot img'),
                                bottomImgHasClass = head.hasClass('down');

                            myScroll.on('scroll', function() {
                                var y = this.y,
                                    maxY = this.maxScrollY - y;
                                if (y >= 0) {
                                    !topImgHasClass && head.addClass('up');
                                    return '';
                                }
                                if (maxY >= 0) {
                                    !bottomImgHasClass && foot.addClass('down');
                                    return '';
                                }
                            });
                            myScroll.on('scrollEnd', function() {
                                if (this.y >= -35 && this.y < 0) {
                                    myScroll.scrollTo(0, -35);
                                    head.removeClass('up');
                                } else if (this.y >= 0) {
                                    head.attr('src', '/images/list/ajax-loader.gif');

                                    // ajax下拉刷新数据
                                    that.$http.get('/mock/listall0.json')
                                        .then((res) => {
                                          that.comlist = res.data.result_data.list.concat(that.comlist);
                                          myScroll.scrollTo(0, -35);
                                          head.removeClass('up');
                                          head.attr('src', '/images/list/arrow.png');
                                          Vue.nextTick(function() {
                                            myScroll.refresh();
                                          });
                                        })
                                }

                                var self = this;
                                var maxY = this.maxScrollY - this.y;
                                if (maxY > -35 && maxY < 0) {
                                    myScroll.scrollTo(0, self.maxScrollY + 35);
                                    foot.removeClass('down')
                                } else if (maxY >= 0) {
                                    foot.attr('src', '/images/list/ajax-loader.gif');
                                    //ajax上拉加载数据
                                    that.$http.get('/mock/listall0.json')
                                        .then((res) => {
                                          that.comlist = that.comlist.concat(res.data.result_data.list);
                                          foot.removeClass('down');
                                          foot.attr('src', '/images/list/arrow.png');
                                          Vue.nextTick(function() {
                                            myScroll.refresh();
                                            myScroll.scrollTo(0, self.maxScrollY + 35);
                                          });
                                        });
                                }
                                 });
				 			
				      }, function (res) {
				          // error callback
				      });
//				   	},300);
	            }
				 
	 		});
	 		
	 		//资源全部加载完成之后，关闭loading框
			setTimeout(function(){
				 that.isShow=false;
				 
				 that.$http.get('../mock/listall0.json')
		        .then(function (res) {
		     	
		          that.comlist=res.data.result_data.list;
		          //注意：由于可能css文件还没有加载完，导致Iscroll的依然为0，所以要加一个延时，然后再new Scroll();
			 		Vue.nextTick(function(){
			 			commonUtil.isAllLoaded("#list-scroll",function(){
			 				
			 				myScroll = new IScroll('.isroll-wrapper1',{
				 			   preventDefault:false,
				 			   mouseWheel: true,
				 			   scrollbars:true
				 			});
				 			
				 			
				 			
				 			 myScroll.scrollTo(0, -35);
				 			 var head = $('.head img'),
                                topImgHasClass = head.hasClass('up');
                            var foot = $('.foot img'),
                                bottomImgHasClass = head.hasClass('down');

                            myScroll.on('scroll', function() {
                                var y = this.y,
                                    maxY = this.maxScrollY - y;
                                if (y >= 0) {
                                    !topImgHasClass && head.addClass('up');
                                    return '';
                                }
                                if (maxY >= 0) {
                                    !bottomImgHasClass && foot.addClass('down');
                                    return '';
                                }
                            });
                            myScroll.on('scrollEnd', function() {
                                if (this.y >= -35 && this.y < 0) {
                                    myScroll.scrollTo(0, -35);
                                    head.removeClass('up');
                                } else if (this.y >= 0) {
                                    head.attr('src', '/images/list/ajax-loader.gif');

                                    // ajax下拉刷新数据
                                    that.$http.get('/mock/listall0.json')
                                        .then((res) => {
                                          that.comlist = res.data.result_data.list.concat(that.comlist);
                                          myScroll.scrollTo(0, -35);
                                          head.removeClass('up');
                                          head.attr('src', '/images/list/arrow.png');
                                          Vue.nextTick(function() {
                                            myScroll.refresh();
                                          });
                                        })
                                }

                                var self = this;
                                var maxY = this.maxScrollY - this.y;
                                if (maxY > -35 && maxY < 0) {
                                    myScroll.scrollTo(0, self.maxScrollY + 35);
                                    foot.removeClass('down')
                                } else if (maxY >= 0) {
                                    foot.attr('src', '/images/list/ajax-loader.gif');
                                    //ajax上拉加载数据
                                    that.$http.get('/mock/listall0.json')
                                        .then((res) => {
                                          that.comlist = that.comlist.concat(res.data.result_data.list);
                                          foot.removeClass('down');
                                          foot.attr('src', '/images/list/arrow.png');
                                          Vue.nextTick(function() {
                                            myScroll.refresh();
                                            myScroll.scrollTo(0, self.maxScrollY + 35);
                                          });
                                        });
                                }
                            });
				 			
			 			});
			 			
			 		})
		      }, function (res) {
		          // error callback
		      });
			},500);	 			
		    

	 	},
	 	methods: {
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