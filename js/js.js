$(document).ready(function(){
	$('.move_main').mouseover(function(){
		$('.move_btn').css({'opacity':'.8'})
	})
	$('.move_main').mouseout(function(){
		$('.move_btn').css({'opacity':'0'})
	})
	var i = 0;
	$('.move_left').click(function(){
		i--
		if(i<0){
			i = $('.move_li').length - 1
		}
		var w = $('.move_li').width()
		$('.move_ul').css({'margin-left':i*-w})
	})
	$('.move_right').click(function(){
		i++
		if(i>$('.move_li').length-1){
			i = 0
		}
		var w = $('.move_li').width()  
		$('.move_ul').css({'margin-left':i*-w})
	})
	$('.server_li').eq(0).addClass('server_li_addClass')
	$('.server_li_btn').eq(0).css({'background':'#5985ff'})
	$('.server_li_btn').click(function(){
		var index = $(this).index()
		$('.server_li').eq(index).addClass('server_li_addClass').siblings().removeClass('server_li_addClass')
		$('.server_li_btn').eq(index).css({'background':'#5985ff'}).siblings().css({'background':'white'})
		console.log(index)
	})	
	
	$('#name').blur(function(){
		var name = $('#name').val()
		var zz =  /^[a-zA-Z0-9]+$/
		if(!zz.test(name)){
			$(this).val('')
			$(this).css({'color':'red','border-bottom':'1px solid red'})
		}else{
			$(this).css({'color':'white','border-bottom':'1px solid white'})
		}
	})
	$('#email').blur(function(){
		var email = $('#email').val()
		var zz =  /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
		if(!zz.test(email)){
			$(this).val('')
			$(this).css({'color':'red','border-bottom':'1px solid red'})
		}else{
			$(this).css({'color':'white','border-bottom':'1px solid white'})
		}
	})
	$('.contactR_btn').click(function(){
		var name = $('#name').val()
		var email = $('#email').val()
		if(name == '' || email == ''){
			alert('请填写内容')
		}else{
			alert('提交成功')
		}
	})
	$(window).scroll(function(){
		var top = $(window).scrollTop()
		var hei = $('.top').height()
		var hei2 = $('.move').height()
		var hei3 = $('.about').height()
		var hei4 = $('.server').height()
		var hei5 = $('.img_content').height()
		if(top>hei+hei2){
			$('.server_fortion').addClass('add_server_fortion')
		}else{
			$('.server_fortion').removeClass('add_server_fortion')
		}
		
		if(top>hei+hei2+hei3+hei4/2){
			$('.img_content_right').addClass('add_img_content_right')
			$('.img_content_left').addClass('add_img_content_left')
		}else{
			$('.img_content_right').removeClass('add_img_content_right')
			$('.img_content_left').removeClass('add_img_content_left')
		}
		
		if(top>hei+hei2+hei3+hei4+hei5/2){
			$('.video_img_left').addClass('add_video_img')
			$('.video_img_right').addClass('add_video_img')
		}else{
			$('.video_img_left').removeClass('add_video_img')
			$('.video_img_right').removeClass('add_video_img')
		}
	})
}) 