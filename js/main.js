//当前页
var nowpage = 1;

$(document).ready(function(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	
	$(".content").width(width);
	$(".content").height(4*height);
	
	$(".page").width(width);
	$(".page").height(height);
	
	//添加滑动监听
	$(".content").swipe({
		//当监听到滑动时执行
		//event事件 direction方向  distance距离  duration时间  fingerCount触屏的点数
		swipe:function(event,direction,distance,duration,fingerCount){
//			console.log("滑动");
			if(direction == "up" && nowpage < 5)
			{
				//?:三目运算符
//				判断的条件?当条件为真时执行:为假时执行
//				nowpage <4?nowpage+=1:nowpage=4;
				nowpage += 1;
			}
			else if(direction == "down" && nowpage>1)
			{
				nowpage -= 1;
			}
			//js中的css动画  animate()  {}改变属性及其值  {}时间  方法等
			//animateOfPage()为立即执行   而去掉()才为结束之后执行
			$(".content").animate({top:(nowpage - 1)* -100 + "%"},{duration:2000,complete:animateOfPage})
			
//			if(nowpage>4)
//			{
//				nowpage = 4;
//			}

		}
		
	})
	$(".heart").fadeIn(200,function(){
		$(".page1_p").delay(4800).fadeIn(500,function () {
			$(".top_lip").animate({width:"130%",height:"25%",top:"40%",left:"-12%",opacity:'0.4',},{duration:1200})
			$(".bot_lip").animate({width:"130%",height:"25%",top:"65%",left:"-12%",opacity:'0.4',},{duration:1200}) 
			$(".bot_lip,.top_lip").fadeOut(200)
		})
	}) 
		
})
$('.first.circle').circleProgress({
	startAngle: 1*Math.PI,
	size:50,
    value: .5,
    lineCap: 'round',
    fill: { color:'#f77a54' } ,
	animation: { duration: 1200, easing: "linear" }
});
$('.first.circle').on("circle-animation-end", null,function(){
	//alert(1);
	$('.second.circle').circleProgress({
		startAngle: 1*Math.PI,
		value: .5,
		size:50,
		thickness: '20px',
		lineCap: 'round',
		fill: { color:'#f77a54' },
		animation: { duration: 1200, easing: "linear" }
	});
	$('.second.circle').on("circle-animation-end", null,function(){
		//alert(2);
		$('.third.circle').circleProgress({
			startAngle: 0*Math.PI,
			thickness:3.5,
			size:200,
			value: 0.16,
			lineCap: 'round',
			fill: { color:'#f77a54' },
			animation: { duration: 1200, easing: "linear" }
		});
		$('.third.circle').on("circle-animation-end", null,function(){
			//alert(3);
			$('.forth.circle').circleProgress({
				startAngle: 0.675*Math.PI,
				size:200,
				value: 0.16,
				thickness:3.5,
				lineCap: 'round',
				fill: { color:'#f77a54' },
				animation: { duration: 1200, easing: "linear" }
			});
		});		
	});
});
	
function animateOfPage(){
	if(nowpage == 2)
	{
		$(".page2_welcome div:nth-child(1)").fadeIn(200,function() {
			$(".page2_welcome div:nth-child(2)").fadeIn(200,function  () {
				$(".page2_welcome div:nth-child(3)").fadeIn(200,function  () {
					$(".page2_welcome div:nth-child(4)").fadeIn(200,function  () {
					     $(".page2_welcome div:nth-child(5)").fadeIn(200,function  () {
							$(".page2_welcome div:nth-child(6)").fadeIn(200,function  () {
								$(".page2_welcome div:nth-child(7)").fadeIn(200,function  () {
									$(".page2_welcome div:nth-child(8)").fadeIn(200,function  () {
										$(".page2_welcome div:nth-child(9)").fadeIn(200,function  () {
											$(".page2_welcome div:nth-child(10)").fadeIn(200,function  () {
												$(".page2_welcome div:nth-child(11)").fadeIn(200,function  () {
													$(".page2_welcome div:nth-child(12)").fadeIn(200,function  () {
														$(".page2_welcome div:nth-child(13)").fadeIn(200,function  () {
															$(".page2_welcome div:nth-child(14)").fadeIn(200,function  () {
																$(".page2_welcome div:nth-child(15)").fadeIn(200,function  () {
																	$(".page2_welcome div:nth-child(16)").fadeIn(200,function  () {
																		$(".page2_welcome div:nth-child(17)").fadeIn(200,function  () {
																			$(".page2_welcome div:nth-child(18)").fadeIn(200,function  () {
																				$(".page2_welcome div:nth-child(19)").fadeIn(200,function  () {
																					$(".page2_welcome div:nth-child(20)").fadeIn(200,function  () {
																						$(".page2_welcome div:nth-child(21)").fadeIn(200,function  () {
																							$(".page2_welcome div:nth-child(22)").fadeIn(200,function  () {
																								$(".page2_welcome div:nth-child(23)").fadeIn(200,function  () {
																									$(".page2_welcome div:nth-child(24)").fadeIn(200)
																								})
				})
				})
				})
				})			
				})
				})
				})
				})
				})
				})
				})
				})
				})
				})
				})
				})
				})
				})
				})
				})
			})
		})
	}
	else if(nowpage == 3)
	{
		
		$(".page3_words_border,.page3_words").fadeIn(1000)
		$(".page5_words,.page5_words_border").fadeIn(1000)
		
	//别踩白块
		$(function(){
	var screenW = $(window).width();
	var screenH = $(window).height();
	//设置起点
	var startIdx = 0;
	//结束点
	var endIdx = 30;
	//创建盒子
	createBlock(endIdx);
	//耗时计算
	var startTime = 0;
	var timeInterval = null;
	//设置屏幕高度
	$("#main-screen").height(screenH);
	//滚动条置底
	$("#main-screen").scrollTop($("#main-screen")[0].scrollHeight);
	//点击算法
	$(".col").each(function(idx){
		$(this).click(function(){
			if ($(this).attr('id')=='block-'+(startIdx+1)) {
				//开始计时
				if (startIdx == 0) {
					timeInterval = setInterval(function(){
						startTime+=0.01;
						$("#time-show span").html(startTime.toFixed(2));
					}, 10);
				}
				//滑动效果
				$("#main-screen").stop(true,true).animate({scrollTop:($("#main-screen").scrollTop()-$(window).height()/4)},300);
				$(this).css("background", "#333");
				startIdx++;
				//游戏结束
				if (startIdx == endIdx) {
					clearInterval(timeInterval);
					$("#main-screen").stop(true,true).animate({scrollTop:($("#main-screen").scrollTop()-$(window).height()/4)},300);
					$("#time-show").hide();
					$("#end-time").html(startTime.toFixed(2)+'s');
					$("div[id=retry]").fadeIn().click(function(){
						window.location.reload();
//						window.location.hash = ".page2";
						
					});
				}
			} else {
				clearInterval(timeInterval);
				$("div[id=retry]").fadeIn().click(function(){
				var message_text = confirm("示例文字")
				if (message_text == true)
				{window.location.reload();}
				else
				{window.location.hash = ".page4"}
//				alert("456");
//				window.location.reload();				
				});
				$("#game-over").fadeIn();
				//window.location.reload();
			}
		});
	});
	//重置窗口
	window.onresize = function(){
		$("#main-screen").height($(window).height());
	}
});
function createBlock(num) {
	var blockHtml = '';
	var randomNum = 0;
	for(i=0; i<num; i++) {
		blockHtml += '<div class="row">';
		randomNum = getRandomNum(1,4);
		for(j=1; j<=4; j++) {
			if (j==randomNum) {
				blockHtml+='<div id="block-'+(num-i)+'"  class="col need-to-click"></div>';
			} else {
				blockHtml+='<div class="col"></div>';
			}
		}
		blockHtml += '</div>'
	}
	blockHtml += '<div class="row">';
    blockHtml += '            <div class="col yellow"></div>';
    blockHtml += '            <div class="col yellow"></div>';
    blockHtml += '            <div class="col yellow"></div>';
    blockHtml += '            <div class="col yellow"></div>';
    blockHtml += '        </div>';
	$("#block-box").html(blockHtml);
}
function getRandomNum(_min, _max)
{   
	var range = _max - _min;   
	var rand = Math.random();   
	return(_min + Math.round(rand * range));   
}
		
	}
	
}


$(".page5_words,.page5_words_border").fadeIn(1000)

 function showp () {
 	$('.page5_words,.page5_words_border').fadeOut(500,function  () {
 		$('#pi').animate({width:'90%',height:'34%', left:'5%', top:'33%'})
 	})
 }






	
