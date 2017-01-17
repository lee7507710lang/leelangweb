$(function (){

(function(){
    headB($('.mytao'),$('.mytaobottom'),$('.webnavdown3'));
    headN($('.mytao'),$('.mytaobottom'),$('.webnavdown3'));
	headB($('.shouchang'),$('.shouchangbottom'),$('.webnavdown2'));
    headN($('.shouchang'),$('.shouchangbottom'),$('.webnavdown2'));
    headB($('.mobileT'),$('.erweima'),'','no');
    headB($('.mobileT'),$('.jiantou'),'','no');
    headN($('.mobileT'),$('.erweima'));
    headN($('.mobileT'),$('.jiantou'));
    headB($('.bns'),$('.shopbottom'),$('.webnavdown1'));
    headN($('.bns'),$('.shopbottom'),$('.webnavdown1'));
    headB($('.webnavt'),$('.webnavb'),$('.webnavdown'));
    headN($('.webnavt'),$('.webnavb'),$('.webnavdown'));
    
    cover();
	function headB(fin,finup,jiantou,no){
		fin.mouseover(function(){
			finup.css('display','block');
			if(jiantou) jiantou.css('background','url(img/headpic.jpg) no-repeat -55px -4px');			
			$(this).css('background','#fff');
			if(no) $(this).css('background','none');
		})
	}
	
	function headN(fin,finup,jiantou){
		fin.mouseout(function(){
			finup.css('display','none');
			if(jiantou) jiantou.css('background','url(img/headpic.jpg) no-repeat -55px 0');
			$(this).css('background','none');
		})
	}
		
	function cover(){
		var content=document.body.scrollHeight||document.documentElement.scrollHeight;
	    $('.cover').css('height',content);
		$('.othercity').click(function(){
			$('.coverAll').css('display','block');
			$('.cityL').find('span').click(function(){
				$('.othercity').find('span').html($(this).html());
				$('.coverAll').css('display','none')
			})
		})
		$('.Xclose').click(function(){
			$('.coverAll').css('display','none')
		})
	}

})();
		
	shopgroup();
	function shopgroup(){
		var lis=$('.shopgroup').children();
		
		var shopgroupnext=$('.shopgroupnext');	
		lis.each(function(i){
			var I=i;
			lis.eq(I).mouseover(function(){
			var As=$(this).children();
			$(this).css('background','#fff');
			shopgroupnext.css('display','block');
            As.css('color','#999')
		})
		})

		lis.mouseout(function(){
		    var As=$(this).children();
			$(this).css('background','');
			shopgroupnext.css('display','none')	;
			As.css('color','#fff')
		})
		
		shopgroupnext.mouseover(function(){
		   $(this).css('display','block')
		})
		shopgroupnext.mouseout(function(){
		   $(this).css('display','none')
		})			
	}
	
	returnPic();
	function  returnPic(){
		var fmiddle=$('.fmiddle');
		var prev=$('#prev');
		var next=$('#next');
		var imgs=fmiddle.find('img');
		var aSpanfath=$('.num');
		var aSpan=aSpanfath.find('span');
		var arrs=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
		var num=0;
		var timer;
		aSpan.eq(num).css('background','#0f64c2');
		ss();
		aSpan.each(function(i){
			var I=i;
		  aSpan.eq(I).click(function(){
		  	imgs.attr('src',arrs[I]);
		  	aSpan.css('background','#000');
			aSpan.eq(I).css('background','#0f64c2');
			num=I;
		  })
			
		})
		fmiddle.mouseover(function(){
			clearInterval(timer);
			prev.css('display','block');
			next.css('display','block')
		})
		fmiddle.mouseout(function(){
			prev.css('display','none');
			next.css('display','none');
			ss()
		})
		function ss(){
			timer=setInterval(function(){
			num++;
			if(num==arrs.length)
			num=0;
			tab();
		},1000)
		}

		next.click(function(){
			num++;
			if(num==arrs.length) 
			num=0;
            tab()
		})
		prev.click(function(){
			if(num==0)
		    num=arrs.length;
			num--;
            tab()
		})
		
		function tab(){
			imgs.attr('src',arrs[num]);
			aSpan.css('background','#000');
			aSpan.eq(num).css('background','#0f64c2');
		}
	}
	  
	  
	  fbots();
	  function fbots(){
	  	var lis=$('.fbotgroup').find('li');
	  	lis.each(function(){
	  		$(this).mouseover(function(){
	  			var aSpan=$(this).find('span');
	  			aSpan.css('background','#0f64c2')
	  		})
	  		$(this).mouseout(function(){
	  			var aSpan=$(this).find('span');
	  			aSpan.css('background','#000');
	  		})
	  	})
	  }
	  
	  
	  dapai();
	  function dapai(){
	  	    $('.dapainav').children().each(function(){
	  	    	$(this).click(function(){
	  	    		$('.showlove').css('background','url(img/all'+$(this).index()+'.jpg) no-repeat');
	  	    		$('.dapainav').children().each(function(){$(this).removeClass();})
	  	    		$(this).addClass('firstB')
	  	    	})
	  	    })
	  	    $('.showlove').children().each(function(){
		  	    $(this).mouseover(function(){
		  			$(this).addClass('showloveactive');
		  		})
		  		$(this).mouseout(function(){
		  			$(this).removeClass('showloveactive');
		  		})
	  	    })

	  }
	  
	  
	  
	  shihui();
	  function shihui(){
	  	$('.shihui_nav').children().first().click(function(){
	  		$('.shihui_nav').children().each(function(){
	  			$(this).removeClass()
	  		})
	  		$('.shihui_content1').css('display','none');
	  		$('.shihui_content').css('display','block');
	  		$(this).addClass('shihui_nav_active')
	  	})
	  	$('.shihui_nav').children().last().click(function(){
	  		$('.shihui_nav').children().each(function(){
	  			$(this).removeClass()
	  		})
	  		$('.shihui_content').css('display','none');
	  		$('.shihui_content1').css('display','block');
	  		$(this).addClass('shihui_nav_active');
	  	})
	  }
	  
	  var createTop=0;
	  loadmore();
	  function loadmore(){
	  	$('.loadmore').click(function(){
	  		createTop=286;
	  		$(this).css('display','none');
	  		$('.shihui_content2').html("<li><img src='img/shihui1.jpg' /><a href='#'>TCL 430升风冷无霜对开门冰箱</a><span>风冷无霜宽薄对开</span><strong>￥2499</strong><em>立即购买</em></li><li><img src='img/shihui2.jpg' /><a href='#'>美的电压力锅 双胆6升</a><span>一键排气，6升大容量</span><strong>￥339</strong><em>立即购买</em></li><li><img src='img/shihui3.jpg' /><a href='#'>美菱207L三门家用一级节能冰箱</a><span>中门软冷冻即用即切</span><strong>￥1099</strong><em>立即购买</em></li><li><img src='img/shihui4.jpg' /><a href='#'>8公斤全自动滚筒洗衣机</a><span>中门软冷三门三温</span><strong>￥848</strong><em>立即购买</em></li><li class='shihui_noline'><img src='img/shihui5.jpg' /><a href='#'>双鹿190升三门冰箱</a><span>风冷无霜宽薄对开</span><strong>￥2499</strong><em>立即购买</em></li>")
	  	})
	  	
	  }
	  
	  
	  
	  var arr1=['img/computer_offic0.jpg','img/computer_offic1.jpg'];
	  var arr2=["img/img_point_2.jpg"];
	  var arr3=["img/computer_offic_a_3.jpg","img/computer_offic_a_31.jpg"];
	  var arr4=["img/computer_offic_a_4.jpg","img/computer_offic_a_41.jpg"];
	  var arr5=["img/computer_offic_a_5.jpg"];
	  officLeft('.offic_content_left','.img_point','.offic_content_left_top',arr1);
	  officLeft('.offic_content_left_2','.img_point_2','.offic_content_left_top_2',arr2); 
	  officLeft('.offic_content_left_3','.img_point_3','.offic_content_left_top_3',arr3);
	  officLeft('.offic_content_left_4','.img_point_4','.offic_content_left_top_4',arr4); 
	  officLeft('.offic_content_left_5','.img_point_5','.offic_content_left_top_5',arr5);
	  function officLeft(offic_content_left,img_point,offic_content_left_top,arr){
	  	var timer=null;
	  	var num=0;
	  	 var stop=$(offic_content_left);
	  	 $(offic_content_left_top).find('img').attr('src',arr[0]);
	  	 stop.mouseover(function(){
	  	 	clearInterval(timer)
	  	 })
	  	 stop.mouseout(function(){
	  	 	officmove();
	  	 })
	  	 $(img_point).find('span').click(function(){
	  	    $(img_point).find('span').each(function(){
		  	 		$(this).css('background','#999')
		  	 })
	  	 	$(offic_content_left_top).find('img').attr('src',arr[$(this).index()]);
            $(this).css('background','#fff')
	  	 })
	  	 
	  	 officmove();
	  	 function officmove(){
		  	 timer=setInterval(function(){
		  	 	num++;
		  	 	if(num==arr.length) num=0;
		  	 	$(offic_content_left_top).find('img').attr('src',arr[num]);
		  	 	$(img_point).find('span').each(function(){
		  	 		$(this).css('background','#999')
		  	 	})
		  	 	$(img_point).find('span').eq(num).css('background','#fff')
		  	 },1000)
	  	 }

	  }
	  	  
	  picmove('.offic_content_midd_bot');
	  picmove('.offic_content_midd_bot_3');
	  function picmove(offic_content_midd_bot){
	  	var ain=$(offic_content_midd_bot).find('a');
	  	ain.each(function(index){
		  		$(this).bind({
		  		'mouseenter':function(){
		  		startMove(ain.find('img').eq(index).get(0),'right',18,4);
		  	},
			  	'mouseleave':function(){
			  		startMove(ain.find('img').eq(index).get(0),'right',10,4);
			  	}
		  	})
	  	})

	  }
	  
(function(){	
	  officnav('.r_headlist','r_headlist_line',4);
	  officnav('.r_headlist_2','r_headlist_line_2',7);
	  officnav('.r_headlist_3','r_headlist_line_3',4);
	  officnav('.r_headlist_4','r_headlist_line_4',4);
	  officnav('.r_headlist_5','r_headlist_line_5',4);
	  function officnav(r_headlist,r_headlist_line,L){  	 
	  	var oUl=$(r_headlist);
		var aLi=oUl.find('li');
		var As=aLi.find('a');
		As.css('color','#000')
		var navbar=document.getElementById(r_headlist_line);
		navbar.style.width=aLi[0].offsetWidth+'px';
		navbar.style.left=L+'px';
		oUl.mouseleave(function(){
		  
		})
        for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;	
       	aLi[i].onmouseover=function(){
       		 navbar.style.width=this.offsetWidth+'px';
       		 As.css('color','#333');
       		 As.eq(this.index).css('color','#0f64c2');
       		 startMove(navbar,'left',this.offsetLeft+L,4);      		 
       	}
      }		
	}
})();

(function(){	
	    var title1=['宁美国度四核i5 65.','攀升兄	i5 6500/..','京天华盛i5 6500/GTX..','京天华盛i5 6500/GTX..','宁美国度四核i5 650...','AMT组装电脑主机组...','攀升兄	i5 6500/RX4..'];
	  	var price1=['¥3188','¥3999','¥3999','¥3684','¥3765','¥1288','¥2999'];
	  	var num1=['月销量11682','月销量7326','月销量2336','月销量3915','月销量3480','月销量3449','月销量8727'];
	  	var picimg1=['r_headlist0.jpg','r_headlist1.jpg','r_headlist2.jpg','r_headlist3.jpg','r_headlist4.jpg','r_headlist5.jpg','r_headlist6.jpg'];

	  	var title2=['Xiaomi/小米 红米手','hornor/荣耀 畅玩5x','Meizu/魅族 魅蓝metal','Meizu/魅族 魅蓝MX5','Huawei/华为 华为畅玩...','SMARTISAN/锤子 T2','hornor/荣耀 荣耀7'];
	  	var price2=['¥699','¥999','¥999','¥1499','¥1099','¥1999','¥1399'];
	  	var num2=['月销量32','月销量9466','月销量682','月销量915','月销量480','月销量449','月销量727'];
	  	var picimg2=['r_headlist0_0.jpg','r_headlist0_1.jpg','r_headlist0_2.jpg','r_headlist0_3.jpg','r_headlist0_4.jpg','r_headlist0_5.jpg','r_headlist0_6.jpg'];
	  		  	
	  	var title3=['正品包邮小米平衡.','小米9号平衡车智','【赠三个应用】 H...','DJI大疆精灵plantom..','DJI大疆精灵plantom..','新品小天才电话手表.','ugp VR虚拟现实3'];
	  	var price3=['¥1999','¥1999','¥6999','¥8499','¥2999','¥999','¥2999'];
	  	var num3=['月销量32','月销量9466','月销量682','月销量915','月销量480','月销量449','月销量727'];
	  	var picimg3=['r_headlist1_0.jpg','r_headlist1_1.jpg','r_headlist1_2.jpg','r_headlist1_3.jpg','r_headlist1_4.jpg','r_headlist1_5.jpg','r_headlist1_6.jpg'];


	  	var title4=['【9期分期0利息】.','【9期分期0利息】.','SUPOR/苏泊尔/SWF1','美的电磁炉/Midea/美...','AUX/奥克斯 AUX-PB9...','Midea/美的 MB-WFS4','心园智能净水器家用...'];
	  	var price4=['¥2699','¥2999','¥99','¥199','¥1299','¥339','¥1399'];
	  	var num4=['月销量4668','月销量9466','月销量682','月销量915','月销量480','月销量449','月销量727'];
	  	var picimg4=['r_headlist2_0.jpg','r_headlist2_1.jpg','r_headlist2_2.jpg','r_headlist2_3.jpg','r_headlist2_4.jpg','r_headlist2_5.jpg','r_headlist2_6.jpg'];
	  	
	  	var title5=['乐视TV X3-55超3','正品4K智能网络.','乐视电视50英寸乐视','正品液晶网格4K智能...','kttv K43康佳43寸液...','乐视TV X3-40超3 高...','whaley/微鲸 WTV43...'];
	  	var price5=['¥3699','¥4999','¥2599','¥5199','¥1799','¥1799','¥2099'];
	  	var num5=['月销量4668','月销量9466','月销量682','月销量915','月销量480','月销量449','月销量727'];
	  	var picimg5=['r_headlist3_0.jpg','r_headlist3_1.jpg','r_headlist3_2.jpg','r_headlist3_3.jpg','r_headlist3_4.jpg','r_headlist3_5.jpg','r_headlist3_6.jpg'];
	  
	  officright('.r_headlist2',title1,price1,num1,picimg1);
	  officright('.r_headlist2_2',title2,price2,num2,picimg2);
	  officright('.r_headlist2_3',title3,price3,num3,picimg3);
	  officright('.r_headlist2_4',title4,price4,num4,picimg4);
	  officright('.r_headlist2_5',title5,price5,num5,picimg5);
	  function officright(r_headlist,title,price,num,picimg){
	  	var lis=$(r_headlist).find('li');
	  	lis.css('border-bottom','1px solid #e5e5e5');
	  	lis.eq(6).css('border-bottom','none');
	  	lis.eq(0).html('<span class="r_headlist2_active">'+title[0]+'</span><em class="r_headlist2_active">'+price[0]+'</em><strong class="r_headlist2_active">'+num[0]+'</strong><img src="img/'+picimg[0]+'"/>');
	  	
	  	lis.eq(1).html('<span class="r_headlist2_active">'+title[1]+'</span><em class="r_headlist2_active">'+price[1]+'</em><strong class="r_headlist2_active">'+num[1]+'</strong><img src="img/'+picimg[1]+'"/>')
	  	
        for(var i=2;i<lis.length;i++){
        	lis.eq(i).html('<span>'+title[i]+'</span><em class="em_active">'+price[i]+'</em>');
        }
        
        for(var i=1;i<lis.length;i++){
         	lis.eq(i).mouseenter(function(){
        		for(var i=1;i<lis.length;i++){
        			lis.eq(i).html('<span>'+title[i]+'</span><em class="em_active">'+price[i]+'</em>');
        		}
        		$(this).html('<span class="r_headlist2_active">'+title[$(this).index()]+'</span><em class="r_headlist2_active">'+price[$(this).index()]+'</em><strong class="r_headlist2_active">'+num[$(this).index()]+'</strong><img src="img/'+picimg[$(this).index()]+'"/>');
        	})
         }
      	
        	lis.mouseleave(function(){
        		for(var i=2;i<lis.length;i++){
        			lis.eq(i).html('<span>'+title[i]+'</span><em class="em_active">'+price[i]+'</em>');
        		}
        		
        		lis.eq(1).html('<span class="r_headlist2_active">'+title[1]+'</span><em class="r_headlist2_active">'+price[1]+'</em><strong class="r_headlist2_active">'+num[1]+'</strong><img src="img/'+picimg[1]+'"/>')
        		
        	})

        
	  };
	  
})();
	  
scrollNav();
function scrollNav(){
	var onoff=true;
	setInterval(function(){  	
	  	 var sTop=$(document).scrollTop();
	  	 if(sTop<=480){
	  	 	$('.leftfix').css('display','none');
	  	 	
	  	 	$('.leftfix').find('li').removeClass('leftfix_active');
	  	 }
	  	 if(sTop>=480){
	  	 	$('.leftfix').css('display','block');
	  	 	$('.leftfix').find('li').removeClass('leftfix_active');
	  	 	$('.leftfix').find('li').eq(0).addClass('leftfix_active');
	  	 }
	  	 if(sTop>=1040){
	  	 	$('.leftfix').find('li').removeClass('leftfix_active');
	  	 	$('.leftfix').find('li').eq(1).addClass('leftfix_active');
	  	 }
	  	 if(sTop>=1754+createTop){
	  	 	$('.leftfix').find('li').removeClass('leftfix_active');
	  	 	$('.leftfix').find('li').eq(2).addClass('leftfix_active');
	  	 }
	  	 if(sTop>=2380+createTop){
	  	 	$('.leftfix').find('li').removeClass('leftfix_active');
	  	 	$('.leftfix').find('li').eq(3).addClass('leftfix_active');
	  	 }
	  	 if(sTop>=3000+createTop){
	  	 	$('.leftfix').find('li').removeClass('leftfix_active');
	  	 	$('.leftfix').find('li').eq(4).addClass('leftfix_active');
	  	 }
	  	 if(sTop>=3750+createTop){
	  	 	$('.leftfix').find('li').removeClass('leftfix_active');
	  	 	$('.leftfix').find('li').eq(5).addClass('leftfix_active');
	  	 }
	  	 if(sTop>=4375+createTop){
	  	 	$('.leftfix').find('li').removeClass('leftfix_active');
	  	 	$('.leftfix').find('li').eq(6).addClass('leftfix_active');
	  	 }
	  	 if(sTop>=126){
	  	 	if(onoff){
	  	 	$('.navTop').css('display','block');
				navbars('.navT1','navbar1');
				onoff=false;
	  	 	}
 	 	
	  	 }else{
	  	 	$('.navTop').css('display','none');
	  	 	onoff=true;
	  	 }
},100)
	
	var lis=$('.leftfix').find('li');
	lis.eq(0).click(function(){
		$('.leftfix').find('li').removeClass('leftfix_active');
		$(document).scrollTop(682);
		$(this).addClass('leftfix_active');
	})
	lis.eq(1).click(function(){
		$('.leftfix').find('li').removeClass('leftfix_active');
		$(document).scrollTop(1100);
		$(this).addClass('leftfix_active');
	})
	lis.eq(2).click(function(){
		$('.leftfix').find('li').removeClass('leftfix_active');
		$(document).scrollTop(1936+createTop);
		$(this).addClass('leftfix_active');
	})
	lis.eq(3).click(function(){
		$('.leftfix').find('li').removeClass('leftfix_active');
		$(document).scrollTop(2582+createTop);
		$(this).addClass('leftfix_active');
	})
	lis.eq(4).click(function(){
		$('.leftfix').find('li').removeClass('leftfix_active');
		$(document).scrollTop(3252+createTop);
		$(this).addClass('leftfix_active');
	})
	lis.eq(5).click(function(){
		$('.leftfix').find('li').removeClass('leftfix_active');
		$(document).scrollTop(3914+createTop);
		$(this).addClass('leftfix_active');
	})
	lis.eq(6).click(function(){
		$('.leftfix').find('li').removeClass('leftfix_active');
		$(document).scrollTop(4566+createTop);
		$(this).addClass('leftfix_active');
	})
	$('.leftfix_pic1').click(function(){
		$(document).scrollTop(0);
	})
	$('.navTs').find('li').eq(1).click(function(){
		$(document).scrollTop(1100);
	})	
}

   	navbars('.navT','navbar');
	function navbars(navT,navbar){
		var oUl=$(navT);   
		var aLi=oUl.find('li');
		var As=aLi.find('a');
		var navbar=document.getElementById(navbar);
		navbar.style.width=aLi[0].offsetWidth+'px';
		oUl.mouseleave(function(){
			for(var i=0;i<aLi.length;i++){
				As.css('color','#333');
			}
			As.eq(0).css('color','#0f64c2');
			startMove(navbar,'left',aLi.eq(0).get(0).offsetLeft,4);		
			navbar.style.width=aLi[0].offsetWidth+'px';
		})
        for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;	
       	aLi[i].onmouseover=function(){
       		 navbar.style.width=this.offsetWidth+'px';
       		 As.css('color','#333');
       		 As.eq(this.index).css('color','#0f64c2');
       		 startMove(navbar,'left',this.offsetLeft,4);
       	}
      }		
	}	
		  
fixleft("#J_m_nav","nav_fixed");  
fixleft("#J_m_nav1","nav_fixed1"); 
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
  
(function(){
lazyImg('.wait_load');
lazyImg('.wait_load1');
lazyImg('.wait_load2');
lazyImg('.wait_load3');
lazyImg('.wait_load4');
lazyImg('.wait_load5');

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
	
})


        















