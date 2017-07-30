$(function () {
	//展示的两张图片的滚轮事件
	var specific_info_show_img = $(".specific_info_show_img");
	var show_img_first_row = $(".show_img_first_row");
	var show_img_second_row = $(".show_img_second_row");
	//delay()是common.js里面的方法，目的是为了延迟加载	
	delay(specific_info_show_img);
	delay(show_img_first_row);
	delay(show_img_second_row);
	//给头部的导航链接设置背景颜色
	$(".head_title a").eq(2).css("background","#302F2F");

});