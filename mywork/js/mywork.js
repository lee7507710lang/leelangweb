$(function(){

(function(){		
	$('.nav_right').find('li').eq(0).click(function(){
		$(document).scrollTop(650);
	})
	$('.nav_right').find('li').eq(1).click(function(){
		$(document).scrollTop(1096);
	})
	$('.nav_right').find('li').eq(2).click(function(){
		$(document).scrollTop(1480);
	})
	$('.nav_right').find('li').eq(3).click(function(){
		$(document).scrollTop(1945);
	})
	$('.nav_right').find('li').eq(4).click(function(){
		$(document).scrollTop(2468);
	})
	$('.nav_right').find('li').eq(5).click(function(){
		$(document).scrollTop(2972);
	})
	jump1('.nav_right',0,650);
	jump1('.nav_right',1,1096);
	jump1('.nav_right',2,1480);
	jump1('.nav_right',3,1945);
	jump1('.nav_right',4,2468);
	jump1('.nav_right',5,2972);
	
	
	jump('.n_b_l',0,650,'#0c8cd1');
	jump('.n_b_l',1,1096,'#f87678');
	jump('.n_b_l',2,1480,'#c069cc');
	jump('.n_b_l',3,1945,'#67aff9');
	jump('.n_b_l',4,2468,'#6db178');
	jump('.n_b_l',5,2972,'#f2b94b');
	jump('.n_b_l',6,0,'#65afa2');
	function jump(a,b,c,d){
		$(a).find('li').eq(b).click(function(){
			$(document).scrollTop(c);
			$(a).find('li').css('background','#e5e5e5');
			$(a).find('li').css('color','#535354');
			$(this).css('background',d);
			$(this).css('color','#fff');
		})
	}
	function jump1(a,b,c){
		$(a).find('li').eq(b).click(function(){
			$(document).scrollTop(c);
		})
	}

    var num_li;
	mouse_In(0,'#0c8cd1');
	mouse_In(1,'#f87678');
	mouse_In(2,'#c069cc');
	mouse_In(3,'#67aff9');
	mouse_In(4,'#6db178');
	mouse_In(5,'#f2b94b');
	mouse_In(6,'#65afa2');
	function mouse_In(a,b,c,d){
		$('.n_b_l').find('li').eq(a).mouseover(function(){
			$(this).css('background',b);
			$(this).css('color','#fff');
		})
		$('.n_b_l').find('li').eq(a).mouseout(function(){
			if(a==num_li){
				$(this).css('background',b);
			}else{
				$(this).css('background','#e5e5e5');
				$(this).css('color','#535354');	
			}			
		})
	}

	$(window).scroll(function(){
			var scrollTop=$(document).scrollTop();
			if(scrollTop>=650){
			  $('.nav_bar').css('display','block');
			  changeColor(0);
			  $('.n_b_l').find('li').eq(0).css('background','#0c8cd1');
			  num_li=0;
			}else{
			  $('.nav_bar').css('display','none')
			}
			
			if(scrollTop>=1096){
              changeColor(1);
			  $('.n_b_l').find('li').eq(1).css('background','#f87678');
			  num_li=1;
			}
			
			if(scrollTop>=1364){
               changeWidth('.s_l_p',0,'130px','#d52959');
               changeWidth('.s_l_p',1,'120px','#d54d29');
               changeWidth('.s_l_p',2,'130px','#d52959');
               changeWidth('.s_l_p',3,'130px','#d52959');
               changeWidth('.s_l_p',4,'110px','#d56629');               
               changeWidth('.s_r_p',0,'100px','#4ca443');
               changeWidth('.s_r_p',1,'100px','#4ca443');
               changeWidth('.s_r_p',2,'95px','#43a483');
               changeWidth('.s_r_p',3,'75px','#43a4a3');
               changeWidth('.s_r_p',4,'35px','#4fadac');
			}
			
			function changeWidth(a,b,c,d){
		      $(a).find('li').children().eq(b).animate({'width':c},'slow');
		      $(a).find('li').children().eq(b).css('background',d);
		    }
			
					
			if(scrollTop>=1480){
              changeColor(2);
			  $('.n_b_l').find('li').eq(2).css('background','#c069cc');
			  num_li=2;
			}	
			if(scrollTop>=1945){
              changeColor(3);
			  $('.n_b_l').find('li').eq(3).css('background','#67aff9');
			  num_li=3;
			}
			if(scrollTop>=2468){
              changeColor(4);
			  $('.n_b_l').find('li').eq(4).css('background','#6db178');
			  num_li=4;
			}
			if(scrollTop>=2972){
              changeColor(5);
			  $('.n_b_l').find('li').eq(5).css('background','#f2b94b');
			  num_li=5;
			}
			
	})
		
	function changeColor(a){
		  $('.n_b_l').find('li').css('background','#e5e5e5');
		  $('.n_b_l').find('li').css('color','#535354');			  
		  $('.n_b_l').find('li').eq(a).css('color','#fff');
	}
		
	$('.headsanjiao').click(function(){
		$(document).scrollTop(650);headdown
	})
	$('.headdown').click(function(){
		$(document).scrollTop(650);
	})
	
	
	var lis=$('.nav_right').find('li');
    var spans=$('.nav_r_d').find('span');
    
    var sMove=$('.headsanjiao').get(0);
    setInterval(function(){
    	startMove(sMove,'top',50,60);
    	//console.log(sMove.style.top)
    	if(parseInt(sMove.style.top)==50){
    		sMove.style.top='-15px'
    	}
    },500)

    for(var i=0;i<lis.length;i++){
		lis[i].index=i
		lis[i].onmouseover=function(){
			startMove(spans[this.index],'height',50,4)
		}
		lis[i].onmouseout=function(){
				startMove(spans[this.index],'height',6,4)		
		}
    }
    
    function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
    }

    function startMove(obj, attr, iTarget,x){
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
			var iCur=0;			
			if(attr=='opacity'){
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}
			else{
				iCur=parseInt(getStyle(obj, attr));
			}			
			var iSpeed=(iTarget-iCur)/x;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);			
			if(iCur==iTarget){
				clearInterval(obj.timer);
			}
			else{
				if(attr=='opacity'){
					obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
					obj.style.opacity=(iCur+iSpeed)/100;
				}
				else{
					obj.style[attr]=iCur+iSpeed+'px';
				}
			}
		}, 30)
    }
    
    $('.design').find('span').mouseover(function(){
	$(this).css('background','#2db6c9');
	})
	$('.design').find('span').mouseout(function(){
		$(this).css('background','#6db178');
	})
		
})();
	
fixleft("#J_m_nav","nav_fixed");  
  function fixleft(J,N){
  	var nt = !1;
	$(window).bind("scroll",
	function() {
	var st = $(document).scrollTop();
	nt = nt ? nt: $(J).offset().top;
	var sel=$(J);
	if (nt < st) {
	sel.addClass(N);
	}
	});
  }
	
})
