$(function () {
	"use strict";
    var sect = $( window.location.hash ),
		portfolio = $('.portfolio-items');
		console.log(portfolio)
	
	if(sect.length == 1){
		$('.section.active').removeClass('active');
		sect.addClass('active');
		if( sect.hasClass('border-d') ){
			$('body').addClass('border-dark');
		}
	}

		$(window).on('load',function(){   //页面加载成功后实现preloader动画
			$('body').addClass('loaded');
			/*=========================================================================
			Portfolio Grid
		    =========================================================================*/
		    portfolio.shuffle();
		    $('.portfolio-filters > li > a').on('click',function(){
		    	$('.portfolio-filters > li > a').removeClass('active');
		    	var groupName = $(this).attr('data-group');
		    	$(this).addClass('active');
		    	portfolio.shuffle('shuffle',groupName)
		    })
		})

	/*=========================================================================
		Navigation Functions
	=========================================================================*/
	$('.section-toggle').on('click',function () {
		var $this = $(this),
		    sect = $('#' + $this.data('section')),  // $this.data('section')  返回当前section id
		    current_sect = $('.section.active')

		/**如果选择的是当前的 section(已经有active)，则不变化，如果选中的不是当前的，给body添加section-switching
			判断选中的section和当前section的序号来判定 动画向上或者向下，动画结束 移除 section-switching up down'类，
			给选中的section添加active*/

		if(sect.length==1){
			if(sect.hasClass('active') == false && $('body').hasClass('section-switching') == false){
			$('body').addClass('section-switching')
			if(sect.index() < current_sect.index()){
				$('body').addClass('up');
			}else{
				$('body').addClass('down');
			}
			setTimeout(function(){
				$('body').removeClass('section-switching up down');
			},2500)
			setTimeout(function(){
				current_sect.removeClass('active');
				sect.addClass('active')
			},1250);
			if(sect.hasClass('border-d')){
				$('body').addClass('border-dark')
			}else{
				$('body').removeClass('border-dark')
			}

		}
		}
	})

	/*=========================================================================
		Testimonials Slider
	=========================================================================*/

	
	
	/*=========================================================================
		Contact Form (NOT WORKING IN DEMO ONLY)
	=========================================================================*/
	
	// body...
})
	

		
		
