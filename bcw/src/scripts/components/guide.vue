<template>
	<div id="guide-container">
		<div class="swiper-container">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="img in imgurls">
		        <img v-if="$index==3" v-bind:src="img" v-link="{path:'/app'}"/>
          		<img v-else v-bind:src="img" >
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgurls:[
					'../images/guide/guide_1.png',
					'../images/guide/guide_2.png',
					'../images/guide/guide_3.png',
					'../images/guide/guide_4.png'
				]
			}
		},
		ready(){
			new Swiper('.swiper-container');
		}
	}
</script>