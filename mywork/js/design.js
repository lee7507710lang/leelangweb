$(function(){   
   var arr1=['img/design_show/d_p/d_p1.jpg','img/design_show/d_p/d_p2.jpg','img/design_show/d_p/d_p3.jpg','img/design_show/d_p/d_p4.jpg','img/design_show/d_p/d_p5.jpg','img/design_show/d_p/d_p6.jpg'];
   var arr2=['img/design_show/d_c/d_c1.jpg','img/design_show/d_c/d_c2.jpg','img/design_show/d_c/d_c3.jpg'];
   var arr3=['img/design_show/d_s/d_s1.jpg'];

   $('.design_span1').click(function(){
   	   design(arr1);
   	   $('.d_s_w').find('span').css('background','#ccc');
   	   $('.d_s_w').find('span').children().css('color','#282828');
   	   $(this).css('background','#fff');
   	   $(this).children().css('color','#999');
   	   $('.d_s_w').find('img').attr('src',arr1[0]);
   })
   $('.design_span2').click(function(){
   	   design(arr2);
   	   $('.d_s_w').find('span').css('background','#ccc');
   	   $('.d_s_w').find('span').children().css('color','#282828');
   	   $(this).css('background','#fff');
   	   $(this).children().css('color','#999');
   	   $('.d_s_w').find('img').attr('src',arr2[0])
   })
   $('.design_span3').click(function(){
   	   $('.d_s_w').find('span').css('background','#ccc');
   	   $('.d_s_w').find('span').children().css('color','#282828');
   	   design(arr3);
   	   $(this).css('background','#fff');
   	   $(this).children().css('color','#999');
   	   $('.d_s_w').find('img').attr('src',arr3[0])
   })   

   mouse_show('.next');
   mouse_show('.pre');
   mouse_show('.returnTop');
   function mouse_show(obj){
   	  $(obj).mouseover(function(){
   	  	$(this).css('background','#414141');
   	  	$(this).css('color','#fff')
   	  })
   	  $(obj).mouseout(function(){
   	  	$(this).css('background','#282828');
   	  	$(this).css('color','#666')
   	  })
   }
   
   design(arr1);
   $('.design_span1').css('background','#fff');
   $('.design_span1').children().css('color','#999');
   function design(arr){
   	var num=0;
   	var onoff=true;
   	 $('.next').click(function(){
   	 	num++;
   	 	//console.log(num);
   	 	if(num==arr.length){
   	 		num=arr.length-1;
   	 		onoff=false;
   	 	}
   	 	if(onoff) $(document).scrollTop(0);
   	 	$('.d_s_w').find('img').attr('src',arr[num])
   	 })
   	  $('.pre').click(function(){
   	 	num--;
   	 	console.log(num);
   	 	if(num<=0){
   	 		num=0;
   	 	}
   	 	$('.d_s_w').find('img').attr('src',arr[num])
   	 })
   }

   $('.returnTop').click(function(){
   	   $(document).scrollTop(0);
   })





fixleft("#J_m_nav","nav_fixed");  
fixleft("#J_m_nav1","nav_fixed1"); 
  function fixleft(J,N){
  	var nt = !1;
	$(window).bind("scroll",
	function() {
	var st = $(document).scrollTop();//往下滚的高度
	nt = nt ? nt: $(J).offset().top;
	// document.title=st;
	var sel=$(J);
	if (nt < st) {
	sel.addClass(N);
	}/* else {
	sel.removeClass("nav_fixed");
	}*/
	});
  }



})
