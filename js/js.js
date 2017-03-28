$(function(){
	$('.login_box input').blur(function(e){
		e.stopPropagation();
		if ($(this).val()!='') {
			$(this).addClass('login_input_focus')
		}else{
			$(this).removeClass('login_input_focus')
		}
	})
	$('.zhuce_box input').blur(function(e){
		e.stopPropagation();
		if ($(this).val()!='') {
			$(this).addClass('login_input_focus1')
		}else{
			$(this).removeClass('login_input_focus1')
		}
	})
	var arr=[{
			left:'221px',
			width:'636px',
			height:'325px'	
		},{
			left:'579px',
			width:'500px',
			height:'256px'
		},{
			left:'333px',
			width:'500px',
			height:'256px'
		},{
			left:'0px',
			width:'500px',
			height:'256px'
		}]
		var arr1=[{
			left:'333px',
			width:'500px',
			height:'256px'
		},{
			left:'0px',
			width:'500px',
			height:'256px'
		},{
			left:'221px',
			width:'636px',
			height:'325px'	
		},{
			left:'579px',
			width:'500px',
			height:'256px'
		}]

		var zIndex=[{'z-index':'15'},{'z-index':'5'},{'z-index':'5'},{'z-index':'5'}]
		var zIndex1=[{'z-index':'5'},{'z-index':'5'},{'z-index':'15'},{'z-index':'5'}]
	$('.banner_right').click(function(e){
		e.stopPropagation();
		$(".banner_img").each(function(i,obj){
			if(i==0){
				$(obj).find(".banner_mask").hide();
				$(obj).find(".banner_box").show();
			}else{
				$(obj).find(".banner_mask").show();
				$(obj).find(".banner_box").hide();
			}
			$(obj).css(zIndex[i]);
			$(obj).stop().animate(arr[i],200);
			if(i==3){
				$(obj).insertBefore($('.banner_img:first'));
			}
			
		})

	})
	$('.banner_left').click(function(e){
		e.stopPropagation();
		$(".banner_img").each(function(i,obj){
			if(i==2){
				$(obj).find(".banner_mask").hide();
				$(obj).find(".banner_box").show();
			}else{
				$(obj).find(".banner_mask").show();
				$(obj).find(".banner_box").hide();
			}
			$(obj).css(zIndex1[i]);
			$(obj).stop().animate(arr1[i],200);
			if(i==0){
				$(obj).insertAfter($('.banner_img:last'));
			}
			
		})
	})
	var flag=true;
	$('.women').click(function(e){
		e.stopPropagation();
		var ScrollTop=$(window).scrollTop()+345;
		$('.women').css('color','#DC53DA')
		if (flag==true) {
			$('.lianxi_women').stop().animate({
				'margin-bottom':'0px'
			},200);
	        $('body,html').animate({
	         	scrollTop: ScrollTop
	     	}, 200);
			flag=false;
		}else{
			$('.women').css('color','#fff')
			$('.lianxi_women').stop().animate({
				'margin-bottom':'-345px'
			},200)
			flag=true;
		}
	})
	$(document).click(function(){
		$('.women').css('color','#fff')
		$('.lianxi_women').stop().animate({
			'margin-bottom':'-345px'
		},200)
		flag=true;
	})
	$('.xieyi').click(function(){
		$('.xieyi_tankuang').show();
	})
	$('.xieyi_cha').click(function(){
		$('.xieyi_tankuang').hide();
	})
})