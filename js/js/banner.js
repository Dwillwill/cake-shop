define(["jquery","swiper"],function(swiper){
	function init(){
		new Swiper(".swiper-container",{
			//延迟时间3s
			autoplay:3000,
			loop:true,
			 // 如果需要分页器
		    pagination:".swiper-pagination",
		    
		    // 如果需要前进后退按钮
		    nextButton:".swiper-button-next",
		    prevButton:".swiper-button-prev",
		})
		
		//鼠标移开/悬浮   隐藏/显示按钮
		$(function(){
			$(".swiper-container").mouseover(function(){
				$(".swiper-button-prev").css("display","block")
				$(".swiper-button-next").css("display","block")
			})
			$(".swiper-container").mouseout(function(){
				$(".swiper-button-prev").css("display","none")
				$(".swiper-button-next").css("display","none")
			})
		})	
	}	
	return {
		init:init
	}
})