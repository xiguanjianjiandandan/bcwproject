module.exports={
	//配置入口文件
	entry:{
		app:__dirname+"/src/scripts/app.js"
	},
	
	//配置出口文件
	output:{
		path:__dirname+"/prd/",
		filename:'bundle.js'
	},
	
	//调试工具
	devtool:"eval-source-map",
	
	//配置本地服务
	devServer: {
	    contentBase: "./",//本地服务器所加载的页面所在的目录
	    colors: true,//终端中输出结果为彩色
	    inline: true,//实时刷新
	    //设置代理，这样就可以实现本地服务的跨域请求
	    proxy: {
	      '/rest/*': {
	        target: 'http://localhost:9090',
	        secure: true,
	        pathRewrite: {
	          '^/rest': ''
	        }
	      }
    	}
//		proxy: {
//	      '/rest/*': {
//	        target: 'http://api2.vipbcw.com/goods/detial?v=2.0',
//	        secure: true,
//	        pathRewrite: {
//	          '^/rest': ''
//	        }
//	      }
//  	}
	},
	
	//模块配置
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style!css'
			},
			{
				test:/\.scss$/,
				loader:'style!css!sass'
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel'
			},
			{
				test:/\.vue$/,
				loader:'vue'
			}
		]
		
	},
	
	vue:{
		loaders:{
			js: 'babel'
		}	
	}
	
}
