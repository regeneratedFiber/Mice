$(function () {
	//设置轮播图
	var index =0;
	$('.box p span').hover(function(){
		index = $(this).index();//获取当前的序列号
		$(this).addClass('hover').siblings('span').removeClass('hover');//相邻的hover被清除
		$('.box ul li ').eq(index).fadeIn(500).siblings('li').fadeOut();//获取图片li,fadeIn  淡入的效果  $()  获取的意思
	});
	$('.box').hover(function(){
        $('.left').show();//滑入显示
        $('.right').show();
	},function(){
        $('.left').hide();//滑入隐藏
        $('.right').hide();
	});
	$('.right').click(function(){//点击事件
		index ++;//往旁边加一个
		if (index >5) {
			index=0;
		}
		$('.box p span').eq(index).addClass('hover').siblings('span').removeClass('hover');//相邻的hover被清除
		$('.box ul li ').eq(index).fadeIn(500).siblings('li').fadeOut();//获取图片li,fadeIn  淡入的效果  $()  获取的意思
	});
	$('.left').click(function(){//点击事件
		index --;//往旁边加一个
		if (index < 0) {
			index = 5;
		}
		$('.box p span').eq(index).addClass('hover').siblings('span').removeClass('hover');//相邻的hover被清除
		$('.box ul li ').eq(index).fadeIn(500).siblings('li').fadeOut();//获取图片li,fadeIn  淡入的效果  $()  获取的意思
	});
	//给轮播图定时
	var timer=null;   //定时器返回值，主要用于关闭定时器
	function open() {
		timer=setInterval(function(){        //打开定时器
	        index++;                          //让图片的索引值次序加1，这样就可以实现顺序轮播图片
	        if(index>5){    //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
	            index=0;
	        }
	        $('.box p span').eq(index).addClass('hover').siblings('span').removeClass('hover');//相邻的hover被清除
			$('.box ul li ').eq(index).fadeIn(500).siblings('li').fadeOut();//获取图片li,fadeIn  淡入的效果  $()  获取的意思
	    },3000);   //3000为轮播的时间
	}
	open();
	$(".box").hover(function () {
		clearInterval(timer);
	},function () {
		open();
	});

	//显示导航链接的背景颜色
	$(".head_title a").eq(0).css("background","#302F2F");
	//延迟图片的加载，delay()的方法是common.js里面的
	delay($(".main_project_img_li img"));
	delay($(".performance_left_img img"));
	delay($(".performance_right_second img"));
	delay($(".show_img_first img"));
	delay($(".main_project_img_li img"));



	// var box_width = parseInt($(".box").css("width").split("px")[0]);
	// var li_width = parseInt($(".box ul li").css("width").split("px")[0]);
	// var img_width = parseInt($(".box ul li img").css("width").split("px")[0]);
	$(window).resize(function () {
		if ($(window).innerWidth() <=1200) {
			$(".box ul li img").css("width","1200px");
			$(".picture_text").css({"width":"900px","height":"40%","top":"180px","left":"0px"});
		}
		else{
			$(".box ul li img").css("width","100%");
			$(".picture_text").css({"width":"62%","height":"200px","top":"273px","left":"155px"});
		}
		// if (img_width <=1200 && box_width <=1200 && img_width <= 1200) {
		// 	$(".box").css("width","1200px");
		// 	$(".box ul li").css("width","1200px");
		// 	$(".box ul li img").css("width","1200px");
		// }
		// if (img_width >1200 && box_width >1200 && img_width > 1200) {
		// 	console.log($(window).innerWidth());
			
		// }
	});

})