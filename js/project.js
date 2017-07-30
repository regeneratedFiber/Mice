$(function () {
	
	//给头部的导航链接设置背景颜色
	$(".head_title a").eq(3).css("background","#302F2F");
	//延迟加载.delay()方法是common.js里面的方法
	delay($(".project_show_li_first"));
	delay($(".project_show_li_second"));
	delay($(".project_ourTeam_people_show img"));
});