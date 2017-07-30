// console.log($(window).innerHeight()+","+$(window).scrollTop()+","+specific_info_show.offset().top);
	//$(window).innerHeight() 可是区域的高度
	//$(window).scrollTop() 滚动条移动的距离
	//specific_info_show_img.offset().top  当前元素距离页面顶部的距离
	
	// function loading() {
	// 	document.onreadystatechange = function () {
	// 		if (document.readyState == "complete") {
	// 			console.log(1111111111111111);
	// 		}
	// 	}
	// }
	//首先判断，如果页面在可视区域内就直接显示，不在可视区域内就绑定鼠标滚动时间

//当页面缩放，时
// if ($(window).innerWidth() <=1200) {
// 	//头部导航的样式和显示图片的样式在小于1200px以后就固定
// 	$("header").css("width","1200px");
// 	$(".common_show_img img").css("width","1200px");
// }

// if ($(window).scrollTop()>=$("header").css("height")) {
// 	$("header").css("opacity",0);
// 	$("header").animate({
// 		"position":"fixed",
// 		"opacity":1,
// 		"margin-top":$("header").css("height")
// 	},1000);
// }
// if ($(window).scrollTop()>=$("header").css("height")) {
// 	alert(211)；
// 	// $("header").css("opacity",0);
// 	// $("header").animate({
// 	// 	"position":"fixed",
// 	// 	"opacity":1,
// 	// 	"margin-top":$("header").css("height")
// 	// },1000);
// }



function delay(obj) {
	if ($(window).innerHeight()>=obj.offset().top) {
		for (var i = 0; i < obj.length; i++) {
			var _this = obj.get(i);
			$(_this).attr("src",$(_this).attr("xsrc")).animate({"opacity":1},1500);
		}
	}
	else{
		$(window).scroll(function () {
		//设置延迟时间，防止图片抖动厉害
			setTimeout(function () {
				for (var i = 0; i < obj.length; i++) {
					var _this = obj.get(i);
					if ($(window).innerHeight()+$(window).scrollTop()>=obj.offset().top) {
						$(_this).attr("src",$(_this).attr("xsrc")).animate({"opacity":1},1500);
					}
				}
			},100);
		});
	}
}

