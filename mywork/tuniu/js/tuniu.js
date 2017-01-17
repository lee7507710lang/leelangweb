$(function(){
	header_order('.myorderAll','.myorderup','.up_down1');
	header_order('.webmapAll','.webmapup','.up_down2');
	function header_order(mayorder,myorderup,up_down){
		$(mayorder).mouseover(function(){
			$(this).css('background','#fff');
			$(this).css('border-left','1px solid #eee');
			$(this).css('border-right','1px solid #eee');
			$(myorderup).css('display','block');
			$(up_down).css('background','url(img/head.jpg) no-repeat -76px -3px')
		})
		$(mayorder).mouseout(function(){
			$(this).css('background','#f8f8f8');
			$(this).css('border-left','1px solid #f8f8f8');
			$(this).css('border-right','1px solid #f8f8f8');
			$(myorderup).css('display','none');
			$(up_down).css('background','url(img/head.jpg) no-repeat -76px 0')
		})
	}
		
	$('.head_span1').mouseover(function(){
		$(this).css('background','url(img/head.jpg) no-repeat -47px 0')
	})
	$('.head_span1').mouseout(function(){
		$(this).css('background','url(img/head.jpg) no-repeat 0 0')
	})
	
	$('.head_span2').mouseover(function(){
		$(this).css('background','url(img/head.jpg) no-repeat -65px 0')
	})
	$('.head_span2').mouseout(function(){
		$(this).css('background','url(img/head.jpg) no-repeat -18px 0')
	})
	
	$('.head_span3').mouseover(function(){
		$(this).css('background','url(img/head.jpg) no-repeat -81px 0')
	})
	$('.head_span3').mouseout(function(){
		$(this).css('background','url(img/head.jpg) no-repeat -29px 0')
	})
		
	$('.address').mouseover(function(){
		$(this).css('color','#fd8700');
		$('.address_order').css('border','1px solid #dedede');
		$('.address_order').css('border-bottom','none');
		$('.add_pic1').css('background','url(img/icon.jpg) no-repeat -19px -65px');
		$('.address_up').css('display','block')
	})

	$('.address').mouseout(function(){
		$(this).css('color','#000');
		$('.address_order').css('border','1px solid #fff');
		$('.address_order').css('border-bottom','none');
		$('.add_pic1').css('background','url(img/icon.jpg) no-repeat -14px -65px');
		$('.address_up').css('display','none')
	})
		
	$('.address_up_list').find('li').children().click(function(){
			$('.add_text1').html($(this).html()+'站')
	})
	
	$('.all_pro').mouseover(function(){
	  	$('.all_pro_list').css('display','block')
	})
	$('.all_pro').mouseout(function(){
	  	$('.all_pro_list').css('display','none')
	})
	
	$('.all_pro_list').find('li').click(function(){
	  	$('.all_pro').find('span').eq('0').html($(this).text());
	  	$('.all_pro_list').css('display','none')
	})
	  
	$('.input_cover').click(function(){
	  	 $(this).css('display','none');
	  	 $('.seach_input').val('');
	  	 $('.input_content').css('display','none');
	})
	
	$('.seach_input').focus(function(){
	  	$('.input_cover').css('display','none');
	  	$('.input_content').css('display','none');
	})
	$('.seach_input').blur(function(){
	  	$('.input_cover').css('display','block');
	  	$('.seach_input').val();
	  	if($(this).val()){
	  		$('.input_content').css('display','none');
	  	}else{
	  		$('.input_content').css('display','block');
	  	}

	})
	  
Tab('.t_s_content3_more','.more_content','.t_s_content3_sanjiao');
Tab('.t_s_content3_more1','.more_content1','.t_s_content3_sanjiao1');
 function Tab(a,b,c){
	  	    var onoff=true;
		  	$(a).click(function(){
		  		if(onoff){
				  	$(b).css('display','block');
				  	$(this).text('收起');
				  	$(c).css('background','url(img/icon.jpg) no-repeat -27px -58px');			  	
		  		onoff=false;
		  		}else{
		  			$(b).css('display','none');
				  	$(this).text('更多');
				  	$(c).css('background','url(img/icon.jpg) no-repeat -15px -58px');
		  	        onoff=true
		  		}
		  })	  	
 }
	  
(function(){
		var onoff=true;
	  	$('.t_s_u_2').animate({'height':'0'});
	  	$('.t_s_u_3').find('p').click(function(){
	  		if(onoff){
		  		$('.t_s_u_2').animate({'height':'290px'});
		  		$(this).text('收起');
		  		onoff=false;
	  		}else{
	  			$('.t_s_u_2').animate({'height':'0'});
		  		$(this).text('更多条件（交通类型、住宿类型、组团特色、产品特色');
		  		onoff=true;
	  		}
	  	})
})();
	  
allchecked('.t_s_content3');
allchecked('.t_s_content4');
function allchecked(a){
		  $(a).find('em').click(function(){
		  	$(a).find($("input[type='checkbox']")).removeAttr("checked");
            $(this).css('background','#ff8800');
            $(this).css('color','#fff');
		  })
	  }
	  
	  $('.t_s_content3').find($("input[type='checkbox']")).click(function(){
	  	if($(this).get(0).checked==true){
	  		$('.t_s_content3').find('em').css('background','#fff');
		  	$('.t_s_content3').find('em').css('color','#6c6c6c');
	  	}
	  })
	  
	  $('.t_s_content4').find($("input[type='checkbox']")).click(function(){
	  	if($(this).get(0).checked==true){
	  		$('.t_s_content4').find('em').css('background','#fff');
		  	$('.t_s_content4').find('em').css('color','#6c6c6c');
	  	}
	  	$(this).eq($(this).index()).attr('checked','true')
	  })
	  
	  $('.t_s_u_3').find('span').click(function(){
	  	$('.top_search_up').find($("input[type='checkbox']")).removeAttr("checked");
	  })
	  
	  $('.t_s_none').click(function(){
	  	$('.top_search_up').css('display','none')
	  })
	  
	  $('.top_search').click(function(e){
	  	e.stopPropagation();
	  	$('.top_search_up').css('display','block')
	  })
	  $(document).click(function(){
	  	$('.top_search_up').css('display','none')
	  })
	  $('.top_search_up').click(function(e){
	  	e.stopPropagation()
	  })
	  	  
	  for(var i=1;i<$('.navList').children().length;i++){
		  $('.navList').children().eq(i).not($('.ticket')).mouseover(function(){
		  	$(this).append('<div class="navjiantou"></div>');
		  	$('.navjiantou').css('left',$(this).width()/2+'px');
		  	$('.navList').children().css('background','#fff');
		  	$(this).css('background','#f0f1f3');
		  	$('.navList_li').css('background','#38c249');
		  	$('.navList_li').children().css('color','#fff');
	        $(this).find('span').css('background','url(img/icon.jpg) no-repeat -30px -65px');
	        $('.navDown').css('display','block');
	        $('.navDownList'+$(this).index()).css('display','block');
		  })
		  
	  $('.ticket').mouseover(function(){
	  	$(this).css('background','#f0f1f3');
	  })
	  
	  $('.navList').children().eq(i).mouseout(function(){	  	
	  	$('.navDownList').css('display','none');
	  	$('.navDown').css('display','none');
	  	$('.navList').children().css('background','#fff');
	  	$('.navList_li').css('background','#38c249');
	  	$('.navList_li').children().css('color','#fff');
        $(this).find('span').css('background','url(img/icon.jpg) no-repeat -25px -65px')
        $('.navjiantou').remove();
	  })	  
}

(function(){  //轮播
	var arr=['img/lunbo1.jpg','img/lunbo2.jpg','img/lunbo3.jpg','img/lunbo4.jpg','img/lunbo5.jpg','img/lunbo6.jpg'];
	  	var num=0;
	  	var timer=null;	  	
	  	$('.guanggao').mouseover(function(){
	  		clearInterval(timer);
	  		$('.lunbo_jiantou1').css('display','block');
	  		$('.lunbo_jiantou2').css('display','block');
	  	})
	  	$('.guanggao').mouseout(function(){
	  		setI();
	  		$('.lunbo_jiantou1').css('display','none');
	  		$('.lunbo_jiantou2').css('display','none');
	  	})
	  	$('.lunbo_jiantou2').bind({
	  		'mouseover':function(){
	  			clearInterval(timer);
	  			$(this).css('display','block');
	  			$('.lunbo_jiantou1').css('display','block');
	  		},
	  		'mouseout':function(){
	  			setI();
	  			$(this).css('display','none');
	  			$('.lunbo_jiantou1').css('display','none');
	  		}
	  	})
	  	
	  	$('.lunbo_jiantou1').bind({
	  		'mouseover':function(){
	  			clearInterval(timer);
	  			$(this).css('display','block');
	  			$('.lunbo_jiantou2').css('display','block');
	  		},
	  		'mouseout':function(){
	  			setI();
	  			$(this).css('display','none');
	  			$('.lunbo_jiantou2').css('display','none');
	  		}
	  	})
	  	
	  	$('.lunbo_text').bind({
	  		'mouseover':function(){
	  			clearInterval(timer);
	  		},
	  		'mouseout':function(){
	  			setI();
	  		}
	  	})
	  	
	  	setI();
	  	function setI(){
		  	timer=setInterval(function(){
	            numC();
		  	},2000)
	  	}
	  	
	  	$('.lunbo_jiantou1').click(function(){	  			  		
	  		if(num==0){
	  			num=arr.length
	  		}
	  		num--;
            show();
	  	})
	  	
	  	$('.lunbo_jiantou2').click(function(){	  		
              numC()
	  	})
	  	
	  	function numC(){
	  		num++;
	  		if(num==arr.length){
	  			num=0
	  		}	  		
	  		
            show()    
	  	}
	  	function show(){
	  		$('.lunbo_list li img').attr('src',arr[num]);
	  		$('.lunbo_text li').css('background','#fff').children().css('color','#000');
	  		$('.lunbo_text li').eq(num).css('background','#000').children().css('color','#fff');
	  	}
	  		  	
	  	$('.lunbo_text li').click(function(){
	  		$('.lunbo_text li').css('background','#fff').children().css('color','#000');
	  		$(this).css('background','#000').children().css('color','#fff');
	  		$('.lunbo_list li img').attr('src',arr[$(this).index()]);
	  	})	  		  	
})();
	  
 lunbo_left();
 function lunbo_left(){
	  	firstShow();
	  	function firstShow(){
		  	$('.lunbo_l_li1').css('background','#fff').css('border-bottom','1px solid #fff');
		  	$('.lunbo_l_li1').find('span').css('background','url(img/icon.jpg) no-repeat -124px -75px');
		  	$('.lunbo_l_li1').find('em').css('color','#2f9e3f');
	  	}
	  	
	  	$('.lunbo_l_li1').click(function(){
	  		tackT();
            firstShow();
            $('.l_list_All').css('display','block');
	  		$('.l_list2').css('display','none');
	  		$(this).css('border-bottom','1px solid #fff');
	  	})
	  	
	  	$('.lunbo_l_li2').click(function(){
	  		tackT();
	  		Tab('.lunbo_l_li2','url(img/icon.jpg) no-repeat 0 -100px');
	  		$('.l_list_All').css('display','none');
	  		$('.l_list2').css('display','block');
	  		$(this).css('border-bottom','1px solid #fff');
	  	})
	  	$('.lunbo_l_li3').click(function(){
	  		tackT();
	  		Tab('.lunbo_l_li3','url(img/icon.jpg) no-repeat -21px -101px');
	  		$('.l_list_All').css('display','none');
	  		$('.l_list2').css('display','block');
	  		$(this).css('border-bottom','1px solid #fff');
	  	})
	  	$('.lunbo_l_li4').click(function(){
	  		tackT();
	  		Tab('.lunbo_l_li4','url(img/icon.jpg) no-repeat -40px -101px');
	  		$('.l_list_All').css('display','none');
	  		$('.l_list2').css('display','block');
	  		$(this).css('border-bottom','1px solid #fff');
	  	})
	  	$('.lunbo_l_li5').click(function(){
	  		tackT();
	  		Tab('.lunbo_l_li5','url(img/icon.jpg) no-repeat -60px -101px');
	  		$('.l_list_All').css('display','none');
	  		$('.l_list2').css('display','block');
	  		$(this).css('border-bottom','1px solid #fff');
	  	})
	  	$('.lunbo_l_li6').click(function(){
	  		tackT();
	  		Tab('.lunbo_l_li6','url(img/icon.jpg) no-repeat -98px -101px');
	  		$('.l_list_All').css('display','none');
	  		$('.l_list2').css('display','block');
	  		$(this).css('border-bottom','1px solid #fff');
	  	})
	  	$('.lunbo_l_li7').click(function(){
	  		tackT();
	  		Tab('.lunbo_l_li7','url(img/icon.jpg) no-repeat -78px -101px');
	  		$('.l_list_All').css('display','none');
	  		$('.l_list2').css('display','block');
	  		$(this).css('border-bottom','1px solid #fff');
	  	})
	  		
	  		function Tab(a,b){
			  	$(a).css('background','#fff').css('border-bottom','1px; solid #fff')
			  	$(a).find('span').css('background',b);
			  	$(a).find('em').css('color','#2f9e3f');
			  	
	  		}
	  		
	  		function tackT(){
		  		Tabs('.lunbo_l_li1','url(img/icon.jpg) no-repeat -58px -55px');
		  		Tabs('.lunbo_l_li2','url(img/icon.jpg) no-repeat -75px -55px');
		  		Tabs('.lunbo_l_li3','url(img/icon.jpg) no-repeat -96px -55px');
		  		Tabs('.lunbo_l_li4','url(img/icon.jpg) no-repeat -116px -55px');
		  		Tabs('.lunbo_l_li5','url(img/icon.jpg) no-repeat -58px -76px');
		  		Tabs('.lunbo_l_li6','url(img/icon.jpg) no-repeat -81px -76px');
		  		Tabs('.lunbo_l_li7','url(img/icon.jpg) no-repeat -103px -76px');
	  		}

	  		function Tabs(a,b){
			  	$(a).css('background','#39414c').css('border-bottom','1px dashed #151e27')
			  	$(a).find('span').css('background',b);
			  	$(a).find('em').css('color','#fff4ec');
	  		}	  		
	  }
	  	 
(function(){ //滚动的文字
	var arr=[
	{'name':'用户***130','content':'<帕劳买飞鸟航空送尼莫酒店4晚5日自助游>澳门直飞，7月5日赠送2天出海'},
	{'name':'用户***270','content':'<帕劳买飞鸟航空送尼莫酒店5晚6日自助游>澳门直飞'},
	{'name':'用户***992','content':'<帕劳买飞鸟机票送爱莱6日自助游>澳门直飞'},
	{'name':'用户***52','content':'<帕劳买机票送经济型酒店4晚6自助游>狮子航空澳门直飞，任性甩'},
	{'name':'用户***56','content':'<帕劳买飞鸟航空送尼莫酒店4晚5日自助游>澳门直飞，7月5日赠送2天出海'}
	];
	
	var oUl=$('.pinglun_list');
	var str='';
	var iNow=0;
	var iH=0;
	var timer=null;
	for(var i=0;i<arr.length;i++){
		str+='<li><p>'+arr[i].content+'</p><span>'+arr[i].name+'</span></li>'
	}
	
	oUl.html(str);
	iH=oUl.find('li').height();
	
	oUl.mouseover(function(){
		clearInterval(timer)
	})
	oUl.mouseout(function(){
		showText();
	})
    showText();
	function showText(){
		timer=setInterval(function(){
			iNow++
			if(iNow==arr.length){
			  iNow=0
		    }
			oUl.animate({'top':-iH*iNow});
		},2500)
	}	
})();

(function(){
  tab('.pinglun_list_d1');
  tab('.pinglun_list_d2');
	function tab(a){
		$(a).find('li').mouseenter(function(){
			startMove($(this).find('span').get(0), 'top', 11);
			$(this).find('em').css('color','#ff9d30')
		})
		$(a).find('li').mouseleave(function(){
			startMove($(this).find('span').get(0), 'top', 13);
			$(this).find('em').css('color','#5f6769')
		})
	}
})();

(function(){  //变种手风琴
	var oDiv=$('#lunbo_bottom');
	oDiv.timer=null;
	oLi=oDiv.find('li');
	var aImg=oDiv.find('img');
	var ispeed=0;
	var timer=null;
	var onoff=0;
	oLi.eq(0).css('width','124px');
	aImg.eq(0).css('left','-98px');
	for(i=0;i<oLi.length;i++){
		oLi[i].index=i;
		oLi.eq(i).mouseover(function(){
			var that=this;			
			clearInterval(timer);
			for(i=0;i<oLi.length;i++){				
				oLi.eq(i).not(oLi.eq(that.index)).css('width','98px');
				aImg.eq(i).not(aImg.eq(that.index)).css('left','0px');
			}
			if($(this).index()!=onoff){
				timer=setInterval(function(){			
					ispeed-=10;
					if(ispeed<=-98)ispeed=-98;
					aImg.eq(that.index).css('left',ispeed+'px')
				},30)
				$(this).css('width','124px')
				ispeed=0;
			}
		})
		
		oLi.eq(i).mouseout(function(){
			onoff=$(this).index();
		})
	}
})();

(function(){  //图片延迟加载
lazyImg('.wait_load');
lazyImg('.wait_load2');
lazyImg('.wait_load3');
lazyImg('.wait_load4');
lazyImg('.wait_load5');
lazyImg('.wait_load6');
lazyImg('.wait_load7');
lazyImg('.wait_load8');
lazyImg('.wait_load9');
lazyImg('.wait_load10');
lazyImg('.wait_load11');
	function lazyImg(a){
		var wait_load=$(a);
			wait_load.css('opacity','0');
			$(window).scroll(function(){
			  setTimeout(function(){ 
			  	wait_load.each(function(index){
			  		if($(document).scrollTop()+$(window).height()>=wait_load.offset().top){
			  	       wait_load.eq(index).attr('src',wait_load.eq(index).attr('xsrc')).animate({
			  	       	'opacity':'1'},500);
			        }
			  	})
			
			  },100)
		})	
	}	
})();

(function(){  //轮播下的导航
	navdown('.l_list1','.l_cont1All','#23c62f');
	navdown('.l_list_2','.nav2_right_list','#5179be');
	navdown('.l_list_2_2','.nav2_right_list_2','#23c62f','false');
	navdown('.l_list_2_3','.nav2_right_list_3','#d24669','false');
	navdown('.l_list_2_4','.nav2_right_list_3','#08acb6','false');
	navdown('.l_list_2_5','.nav2_right_list_3','#ef8108','false');
	navdown('.l_list_2_6','.nav2_right_list_3','#f0ac09','false');
	function navdown(a,b,c,f){
		var lis=$(a).find('li');
		var all=$(b);
		lis.eq(0).css('border-bottom','3px solid '+c);
		all.eq(0).css('display','block');
		lis.mouseenter(function(){
			lis.css('border-bottom','none');
			$(this).css('border-bottom','3px solid '+c);
			if(!f){
				all.fadeOut(100);
				all.eq($(this).index()).fadeIn(100);
			}

		})
	}
})();

(function(){
	opacity_c('.c_r_pic1');
	opacity_c('.c_r_pic2');
	opacity_c('.H_act_list');
	function opacity_c(a){	
			var c=$(a).find('li');
			c.hover(function(){
				$(this).css('opacity',0.7)
			},function(){
				$(this).css('opacity',1)
			})
		}	
})();

(function(){
	$('.hotTop_list1').find('li').eq(0).css('border-bottom','3px solid #4ecf5b').css('color','#4ecf5b');
	$('.hotTop_list1').find('li').click(function(){
		$('.hotTop_list1').find('li').css('border-bottom','none').css('color','#676362');
		$(this).css('border-bottom','3px solid #4ecf5b').css('color','#4ecf5b');
	})
})();


(function(){
	var All=$('.bottom_All');
	var oUl=$('.bottom_All_img_f');
	var aLi=oUl.find('li');
    var arr=['<img src="img/bottom_All_img1.jpg" />','<img src="img/bottom_All_img2.jpg" />','<img src="img/bottom_All_img3.jpg" />']
    $(window).scroll(function(){
	    if($(document).scrollTop()+$(window).height()>=All.offset().top){
           aLi.each(function(index){
           	 aLi.eq(index).html(arr[index])
           })
	    }
    })			
		var height=-aLi.height();
		var timer=null;
		var top;
		var num=0;
		oUl.bind({
			'mouseover':function(){
				clearInterval(timer)
			},
			'mouseout':function(){
				moveTop();
			}
		})	
		moveTop();
		function moveTop(){
			timer=setInterval(function(){
			    top=num*height;	
			    num++;
			    if(num>=aLi.length){
					num=0
				}
				oUl.animate({
					'top':top
				})
			},2000)
		}			
})();


(function(){
	var a=0;
	var r_nav=$('.left_nav');
	var List=$('.left_nav_list');
	var Lis=List.find('li');
	$(window).scroll(function(){		
		var tops=$(document).scrollTop();
		//console.log(tops);
		if(tops>=452){
			if(a==0){
			  r_nav.css('display','block');
			  List.animate({'top':'900px'},500).animate({'top':'300px'},300);			  
			  setTimeout(function(){
			  	List.css('top','150px');
			  	List.css('position','fixed');
			  	Lis.css('background','#ddd').css('color','#666');
			  	Lis.eq(0).css('background','#5179be').css('color','#fff');
			  },850)			 
			  a++;
		    }
		}
		
		if(tops<=452){
		    r_nav.css('display','none');
		    a=0;
		}
		
		if(tops>=840){
			Lis.css('background','#ddd').css('color','#666');
			Lis.eq(1).css('background','#23c62f').css('color','#fff');
		}
		
		if(tops>=1240){
			Lis.css('background','#ddd').css('color','#666');
			Lis.eq(2).css('background','#d24669').css('color','#fff');
		}
		
		if(tops>=1600){
			Lis.css('background','#ddd').css('color','#666');
			Lis.eq(3).css('background','#08acb6').css('color','#fff');
		}
		
		if(tops>=2012){
			Lis.css('background','#ddd').css('color','#666');
			Lis.eq(4).css('background','#ef8108').css('color','#fff');
		}
		
		if(tops>=2502){
			Lis.css('background','#ddd').css('color','#666');
			Lis.eq(5).css('background','#f0ac09').css('color','#fff');
		}
		
		if(tops>=3002){
			Lis.css('background','#ddd').css('color','#666');
			Lis.eq(6).css('background','#44bfbe').css('color','#fff');
		}
		
	})	
	
Lis.eq(0).click(function(){
	$(document).scrollTop(780);
	Lis.css('background','#ddd').css('color','#666');
	$(this).css('background','#5179be').css('color','#fff');
})

Lis.eq(1).click(function(){
	$(document).scrollTop(1180);
	Lis.css('background','#ddd').css('color','#666');
	$(this).css('background','#23c62f').css('color','#fff');
})

Lis.eq(2).click(function(){
	$(document).scrollTop(1580);
	Lis.css('background','#ddd').css('color','#666');
	$(this).css('background','#d24669').css('color','#fff');
})

Lis.eq(3).click(function(){
	$(document).scrollTop(1980);
	Lis.css('background','#ddd').css('color','#666');
	$(this).css('background','#08acb6').css('color','#fff');
})

Lis.eq(4).click(function(){
	$(document).scrollTop(2380);
	Lis.css('background','#ddd').css('color','#666');
	$(this).css('background','#ef8108').css('color','#fff');
})

Lis.eq(5).click(function(){
	$(document).scrollTop(2780);
	Lis.css('background','#ddd').css('color','#666');
	$(this).css('background','#f0ac09').css('color','#fff');
})

Lis.eq(6).click(function(){
	$(document).scrollTop(3190);
	Lis.css('background','#ddd').css('color','#666');
	$(this).css('background','#44bfbe').css('color','#fff');
})
	
})();

(function(){
	right_nav('.right_nav_out','.right_nav_out_left',-215,-250);
	right_nav('.right_nav_APP','.right_nav_APP_left',-186,-220,'url(img/right_nav.jpg) no-repeat 0 -192px','url(img/right_nav.jpg) no-repeat 0 -149px');
	right_nav('.right_nav_love','.right_nav_love_left',-70,-110,'url(img/right_nav.jpg) no-repeat 0 -334px','url(img/right_nav.jpg) no-repeat 0 -293px');
	right_nav('.right_nav_order','.right_nav_order_left',-70,-110);
	right_nav('.right_nav_juan','.right_nav_juan_left',-70,-110,'url(img/right_nav.jpg) no-repeat 0 -457px','url(img/right_nav.jpg) no-repeat 0 -416px');
	right_nav('.right_nav_message','.right_nav_message_left',-70,-110,'url(img/right_nav.jpg) no-repeat 0 -539px','url(img/right_nav.jpg) no-repeat 0 -498px');
	right_nav('.right_nav_serve','.right_nav_serve_left',-70,-110,'url(img/right_nav.jpg) no-repeat 0 -622px','url(img/right_nav.jpg) no-repeat 0 -581px');
	right_nav('.right_nav_top','.right_nav_top_left',-70,-110,'url(img/right_nav.jpg) no-repeat 0 -706px','url(img/right_nav.jpg) no-repeat 0 -663px');
  function right_nav(a,b,c,d,e,f){	
	$(a).bind({
		'mouseover':function(){
		$(this).css('background',e);
		$(b).css('display','block');
		startMove($(b).get(0),'left',c);		
	   },
	   'mouseout':function(){
	   	$(this).css('background',f);
		$(b).css('display','none');
		startMove($(b).get(0),'left',d)
	   } 
   })
  }
  
  $('.right_nav_top').click(function(){
  	$(document).scrollTop(0);
  })
  
})();


})

















