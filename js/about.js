$(function () {
	
	//给头部的导航链接设置背景颜色
	$(".head_title a").eq(1).css("background","#302F2F");

	//delay()是common.js里面的方法，目的是为了延迟加载	
	var introduce_right = $(".introduce_right img");
	var company_business = $(".company_business img");
	var develop_content_product = $(".develop_content_product img");
	delay(introduce_right);
	delay(company_business);
	delay(develop_content_product);
	
});