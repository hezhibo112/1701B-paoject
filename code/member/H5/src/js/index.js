//require引入配置模块
require.config({
	paths:{
		"mui":"libs/mui.min"
	}
})



require(["mui"],function(mui){
	
	console.log(mui);
	
	//ajax
	//
	mui.ajax('http://localhost:3000/api/getUser',{
		data:{ //传入的参数
			
		},
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:function(res){
			console.log(res);
		},
		error:function(xhr,type,errorThrown){
			
		}
	});
	
	
	
	
})
