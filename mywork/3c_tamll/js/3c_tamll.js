document.addEventListener('touchstart',function(e){
	e.preventDefault();
})


window.onload=function(){	
	var stopbar=true;
/*    var a=document.querySelectorAll('a');
	for(var i=0;i<a.length;i++){
		a[i].addEventListener('touchmove',function(){
			this.isMove=true;
		})
		a[i].addEventListener('touchend',function(){
			if(!this.isMove){
				window.location.href=this.href;
			}
			this.isMove=false;
		})
	}*/
	
searchShow();	
function searchShow(){
	var search=document.querySelector(".search");
	var searchs=document.querySelector(".searchs");
	var returnS=document.querySelector(".returnS");
	search.addEventListener('touchstart',function(){
		searchs.style.display='block';
	})
	returnS.addEventListener('touchstart',function(){
		searchs.style.display='none';
	})
}


buycar();
function buycar(){
	var point=document.querySelector(".point");
	var byc=document.querySelector(".maorbycar");
	var onOff=true;
	point.addEventListener('touchstart',function(e){
		e.stopPropagation();
		if(onOff){
			byc.style.display="block";
			onOff=false;
			onD=true;
		}else{
			byc.style.display="none";
			onOff=true;
			onD=false
		}		
	})
	    byc.addEventListener("touchstart",function(e){
			e.stopPropagation();
		})
		document.addEventListener("touchstart",function(e){
			byc.style.display="none";
			onOff=true;
			e.stopPropagation();
		})
}

chooseCity();

function chooseCity(){
	var ad=document.querySelector(".address");
	var city=document.querySelector(".city");
	var returnM=document.querySelector(".returnM");
	var two=document.querySelector(".nowcity_two");
	var cityContent=document.querySelector(".cityContent");
	var lis=cityContent.querySelectorAll('li');
	var left=city.offsetWidth;
	cssTransform(city,'translateX',left);
    ad.addEventListener('touchstart',function(){
    	city.style.transition='0.5s cubic-bezier(.34,.92,.58,.9)';
    	cssTransform(city,'translateX',0);
    	
    })
    for(var i=0;i<lis.length;i++){
    	lis[i].addEventListener('touchstart',function(){
    		var left=city.offsetWidth;
    		ad.innerHTML=this.innerHTML;
    		city.style.transition='0.5s';
    	    cssTransform(city,'translateX',left);
    	})
    }
    returnM.addEventListener('touchstart',function(){ 	
    	var left=city.offsetWidth;
    	city.style.transition='0.5s';
    	cssTransform(city,'translateX',left);
    })
}

totals();
function totals(){
	var more=document.querySelector(".more");
	var total=document.querySelector(".total");
	var returnT=document.querySelector(".returnT");
	var left=total.offsetWidth;
	cssTransform(total,'translateX',-left);
    more.addEventListener('touchstart',function(){
    	total.style.transition='0.5s cubic-bezier(.34,.92,.58,.9)';
    	cssTransform(total,'translateX',0);
    })
    returnT.addEventListener('touchstart',function(){ 	
    	total.style.transition='0.5s';
    	cssTransform(total,'translateX',-left);
    })
}
   var Tmove=true;
   
   
  scroll();
  function scroll(){
  	    if(!Tmove) return;
	    var wrap=document.querySelector('.wrap');
	    var tabNav=document.querySelector('.tabNav');
	    var navLFs=document.querySelector('.navLFs');
		var scroll = wrap.children[0];
		var bar=document.querySelector('#scrollBar');
		var stop=document.querySelector('.stop');
		var point=0;
		var callBack={};
		var scale=wrap.clientHeight/scroll.offsetHeight;
		//console.log(wrap.clientHeight,scroll.offsetHeight)
		bar.style.height=wrap.clientHeight*scale+'px';
		bar.style.opacity = 0;
		function getPos(obj) {
		    var pos = {left:0, top:0};
				while (obj) {
					pos.top += obj.offsetTop;
					obj = obj.offsetParent;
				}	
				return pos;
			}
		callBack.start=function(){
			point=cssTransform(scroll,'translateY');
		}
		callBack.in=function(){
			stopbar=false;
			var nowpoint=cssTransform(scroll,'translateY');
			if(nowpoint-point<-5||nowpoint-point>5){
			   	bar.style.opacity=0.3;	
			   	Tmove=false;
			}
			var tops=-cssTransform(scroll,'translateY')/4;
		    //console.log(tops);
			cssTransform(bar,"translateY",tops);
			var barTop=cssTransform(bar,"translateY");
			var p=getPos(tabNav);
			var s=Math.abs(p.top/barTop);
			//console.log(s);
			if(s<=3.99&&s>0) stop.style.display="block";
			if(s<1.83) stop.style.display="none";
			if(s>=3.99) stop.style.display="none";
			if(s<=1.36&&s>0) navLFs.style.display="inline-block";
			if(s>=1.36) navLFs.style.display="none";
		}
		callBack.over = function() {
			stopbar=true;
			bar.style.opacity=0;
			var tops =-cssTransform(scroll,"translateY")/4;
			cssTransform(bar,"translateY",tops);
			Tmove=true;
	    }
	    mscroll(wrap,callBack);
}
  
  
scrollPic();
function scrollPic() {
	//console.log(Tmove);
	if(!Tmove) return;
	var wrap = document.querySelector("#picTab");
	var list = document.querySelector("#picList");
	list.innerHTML+=list.innerHTML;
	var lis = document.querySelectorAll("#picList li");
	var spans = document.querySelectorAll("#picNav span");
	var css=document.createElement('style');
	var startP=0;
    var startE=0;
    var num=0;
    var timer=0;
    var firstX=0;
    var firstTime=0;
    var lastDis=0;
    var lastTimeDis=0;
    var isMove=true;
    var isFirst=true;
    listMove();
    var style='#picTab{height:'+lis[0].offsetHeight+'px}';
    style+='#picList{width:'+lis.length*100+'%}';
    style+='#picList li{width:'+1/lis.length*100+'%}';
    css.innerHTML+=style;
    document.head.appendChild(css);
	cssTransform(list,"translateX",0.01);
	cssTransform(list,"translateZ",0);
    wrap.addEventListener('touchstart',function(e){
    	clearInterval(timer);
    	list.style.transition='none';
    	var left=cssTransform(list,'translateX');
        num=Math.round(-left/picTab.offsetWidth);
    	if(num==0){num=spans.length};
    	if(num==lis.length-1){num=spans.length-1};
        left=-num*picTab.offsetWidth;
    	cssTransform(list,'translateX',left);
    	/*startP=e.changedTouches[0];*/
    	startP={pageX: e.changedTouches[0].pageX,pageY: e.changedTouches[0].pageY}
    	startE=cssTransform(list,'translateX');
    	firstX=startE;
    	firstTime=new Date().getTime();
    	var lastDis=0;
    	var lastTimerDis=0;
    	isMove=true;
    	isFirst=true;
    })
    wrap.addEventListener('touchmove',function(e){
    	if(!isMove){
    		return
    	}
    	var newstart=e.changedTouches[0];
    	var disY=newstart.pageY-startP.pageY;
    	var disX=newstart.pageX-startP.pageX;
    	if(isFirst){
    		isFirst=false;
    		if(Math.abs(disY)>Math.abs(disX)){
    			isMove=false;
    		}
    	}
    	var left=disX+startE;
    	if(isMove){
    		cssTransform(list,'translateX',left);
    	}
    	var nowTime=new Date().getTime();
    	lastDis=left-firstX;
    	lastTimeDis=nowTime-firstTime;
    })
    wrap.addEventListener('touchend',function(e){
    	var speed=lastDis/lastTimeDis;
    	var left=cssTransform(list,'translateX');
    	if(Math.abs(speed)>0.7&&speed<0){
    		num+=1
    	}else if(speed>1){
    		num-=1;
    	}else{
    		num=Math.round(-left/picTab.offsetWidth);
    	}   
        tab();
        listMove();
    })
    function listMove(){
    	clearInterval(timer);
    	timer=setInterval(function(){
            if(num==lis.length-1){num=spans.length-1};
            list.style.transition='none';
            left=-num*picTab.offsetWidth;
	        cssTransform(list,'translateX',left);
            setTimeout(function(){
	            num++;
                tab();
            },50)
    	},2000)
    }
    
    function tab(){
	    list.style.transition='0.5s';
	    left=-num*picTab.offsetWidth;
	    cssTransform(list,'translateX',left);
		for(var i=0;i<spans.length;i++){
		spans[i].className='';
	     }
	    spans[num%spans.length].className='active';
    }
   }
  
  
  lastTime();
  	setInterval(function(){
		lastTime();
	},1000)


   function lastTime(){
   	   var iDay=document.querySelector('.iDay');
   	   var iHours=document.querySelector('.iHours');
   	   var iMin=document.querySelector('.iMin');
   	   var iSed=document.querySelector('.iSed');
   	   var iNow=new Date();
   	   var iNew=new Date('July 1,2017 10:0:3');
   	   var t = Math.floor((iNew - iNow)/1000);
   	   iDay.innerHTML=Math.floor(t/86400);
   	   iHours.innerHTML=Math.floor(t%86400/3600);
   	   iMin.innerHTML=Math.floor(t%86400%3600/60);
   	   if(10>t%60){
   	   	iSed.innerHTML='0'+t%60;
   	   }else{
   	   	iSed.innerHTML=t%60;
   	   }
   	   
   }
    
   	tabList();
    function tabList(){
    	if(!Tmove) return;
    	if(!stopbar) return;
    	var wrap=document.querySelector('.wrapChild');
    	var tab=document.querySelector('.tab');
    	var tabList=document.querySelector('.tabList');
    	var tabShow=document.querySelectorAll('.tabShow');
    	var tabNav=document.querySelector('.tabNav');
    	var tabU=document.querySelector('.tabU');
    	var navQ=document.querySelector('.navQ');
    	var navM=document.querySelector('.navM');
    	var tabNavs=document.querySelector('.tabNavs');
    	var tabUs=document.querySelector('.tabUs');
    	var navQs=document.querySelector('.navQs');
    	var navMs=document.querySelector('.navMs');
    	var tabUs=document.querySelector('.tabUs');
    	var bar=document.querySelector('#scrollBar');
    	var css=document.createElement('style');
	    var style='.tabList{width:'+tabShow.length*100+'%}';
	    style+='.tabList .tabShow{width:'+1/tabShow.length*100+'%}';
	    css.innerHTML+=style;
	    document.head.appendChild(css);
    	var width=tabNav.offsetWidth;
    	var topreturn=tabNav.getBoundingClientRect().top;
   	    var minX=tab.clientWidth-tabList.offsetWidth;
   	    cssTransform(tabList,"translateZ",0.01);
    	var startP=0;
    	var startE=0;
    	var nowstartP=0;
    	var disY=0;
    	var disX=0;
    	var num=0;
    	var step=1;
    	var isMove=true;
        var isFirst=true;
        var firstX=0;
	    var firstTime=0;
	    var lastDis=0;
	    var lastTimeDis=0;
	    var onOff=true;    
    	tab.addEventListener('touchstart',function(e){
    		tabList.style.transition='none';
    		startP={pageX: e.changedTouches[0].pageX,pageY: e.changedTouches[0].pageY}
    		startE=cssTransform(tabList,'translateX');
    		firstX=startE;
    	    firstTime=new Date().getTime();
    	    lastDis=0;
    	    lastTimerDis=0;
    		isMove=true;
    	    isFirst=true;
    	})
    	tab.addEventListener('touchmove',function(e){
	    	if(!isMove){
	    		return
	    	}
    		nowstartP=e.changedTouches[0];
    		disY=nowstartP.pageY-startP.pageY;
    	    disX=nowstartP.pageX-startP.pageX;
    	    if(disX>-5&&disX<2) return; 
    		if(isFirst){
    		isFirst=false;
    		if(Math.abs(disY)>Math.abs(disX)){
    			isMove=false;
    		   }
    	    }
    	    var left=disX+startE;
    			
   		    if(left>0){
    			step=1-left/tab.clientWidth;
            	left=left*step;
    		}
    		if(left<minX){
            	var over=minX-left;
            	step=1-over/tab.clientWidth;
            	over=parseInt(step*over);
            	left=minX-over;
           }
    		if(isMove){
    			cssTransform(tabList,'translateX',left)
    		}
    		
    		var nowTime=new Date().getTime();
    	    lastDis=left-firstX;
    	    lastTimeDis=nowTime-firstTime;
    	})
    	tab.addEventListener('touchend',function(e){ 
    		var nowstartP=e.changedTouches[0];
    		var speed=lastDis/lastTimeDis;
    	    var left=cssTransform(tabList,'translateX');
    	    if(Math.abs(speed)>0.7&&speed<0){
    		  num-=1;
    	    }else if(speed>1){
    		num+=1;
    	    }else{
    		num=Math.round(left/tabNav.offsetWidth)
    	    }
    	    if(num==-1){
    	      cssTransform(tabU,'translateX',tabNav.offsetWidth/2);
    	      cssTransform(tabUs,'translateX',tabNav.offsetWidth/2);
    	      navQ.style.color='#b9b9b9';
    	      navM.style.color='#f20032';
    	      navQs.style.color='#b9b9b9';
    	      navMs.style.color='#f20032';
    	      var s=cssTransform(wrap,'translateY');
    	      if(Math.abs(disY)<Math.abs(disX)&&onOff&&s<=-topreturn){
    	      	cssTransform(wrap,'translateY',-topreturn);
    	      	onOff=false
    	      }  	        	     
    	    }
    	    if(num==0){
    	      cssTransform(tabU,'translateX',0);
    	      cssTransform(tabUs,'translateX',0);
    	      navQ.style.color='#f20032';
    	      navM.style.color='#b9b9b9';
    	      navQs.style.color='#f20032';
    	      navMs.style.color='#b9b9b9';
    	    }
            tabList.style.transition='0.3s';           
            cssTransform(tabList,'translateX',tabNav.offsetWidth*num);
           
    	})   
    	
    	navQ.addEventListener('touchend',function(e){
	    	num=0;
	    	cssTransform(tabList,'translateX',tabNav.offsetWidth*num);
	    })
	    navM.addEventListener('touchend',function(e){
	    	num=-1;
	    	cssTransform(tabList,'translateX',tabNav.offsetWidth*num);
	    })
	    navQs.addEventListener('touchend',function(e){
	    	num=0;
	    	cssTransform(tabUs,'translateX',0);
	    	navQs.style.color='#f20032';
    	    navMs.style.color='#b9b9b9';
	    	cssTransform(tabList,'translateX',tabNav.offsetWidth*num);
	    })
	    navMs.addEventListener('touchend',function(e){
	    	num=-1;
	    	if(onOff){
    	      	cssTransform(wrap,'translateY',-topreturn);
    	      	onOff=false
    	     }
	    	cssTransform(tabUs,'translateX',tabNav.offsetWidth/2);
	        navQs.style.color='#b9b9b9';
    	    navMs.style.color='#f20032';
    	    cssTransform(tabList,'translateX',tabNav.offsetWidth*num);
	    })
    	
    }
    
    
    
   nMove('.navLF','.navL');
   nMove('.navLFs','.navLs'); 
   var navLFshidden=document.querySelector('.navLFs');
   navLFshidden.style.display="none";
   function nMove(navLF,navL,a){
   	    if(!Tmove) return;
		var wrap=document.querySelector(navLF);
	    var aNav=document.querySelector(navL);
	    var startY=0;
	    var startE=0;
	    var step=1;
	    var firstX=0;
	    var isMove = true;
	    var isFirst = true;
	    var firstTime=0;
	    var lastDis=0;
	    var lastTimeDis=0;
	    var stop=false;
	    cssTransform(aNav,"translateZ",0.01);
	    var minX=wrap.clientWidth-aNav.offsetWidth;
	    wrap.addEventListener('touchstart',function(e){
	    	//startY=e.changedTouches[0].pageX;
	    	startP={pageX: e.changedTouches[0].pageX,pageY: e.changedTouches[0].pageY}
	    	startE=cssTransform(aNav,'translateX');
	    	step=1;
	    	firstTime=new Date().getTime();
	    	firstX=startP.pageX; 
	    	lastDis=0;
	    	lastTimeDis=0;
	    	isMove = true;
			isFirst = true;
	    	stop=false; //解决点击之后不能拖动的问题
	    })
	    wrap.addEventListener('touchmove',function(e){
	    	if(!isMove){
	    		return
	    	}
	    	stop=true;
	    	//var newstartY=e.changedTouches[0].pageX;
	    	nowstartP=e.changedTouches[0];
    		disY=nowstartP.pageY-startP.pageY;
    	    disX=nowstartP.pageX-startP.pageX;
    	    if(disX>-5&&disX<2) return; 
    		if(isFirst){
    		isFirst=false;
    		if(Math.abs(disY)>Math.abs(disX)){
    			isMove=false;
    		   }
    	    }
	    	var left=disX+startE;
            if(left>0){
            	step=1-left/wrap.clientWidth;
            	left=left*step
            }
            if(left<minX){
            	var over=minX-left;
            	step=1-over/wrap.clientWidth;
            	over=parseInt(step*over);
            	left=minX-over;
            }
            var nowTime=new Date().getTime();
            lastDis=disX-firstX;
            lastTimeDis=nowTime-firstTime;
            //firstX=newstartY;
           // firstTime=nowTime;
            if(isMove){
            	cssTransform(aNav,'translateX',left);
            }

	    })
	    wrap.addEventListener('touchend',function(e){
	    	if(stop==false){
	    		stop=true;
	    		return
	    	}
	    	var speed=(lastDis/lastTimeDis)*300;
	    	var left=cssTransform(aNav,'translateX');
	    	var type="cubic-bezier(.34,.92,.58,.9)";
	    	var target=left+speed;
	    	var time=Math.abs(speed*0.9);
	    	time=time<300?300:time;
	    	if(target>0){
	    		target=0;
	    		type="cubic-bezier(.08,1.44,.6,1.46)";
	    	}
	    	if(target<minX){
	    		target=minX;
	    		type="cubic-bezier(.08,1.44,.6,1.46)";
	    	}
	    	aNav.style.transition=time+'ms '+type;
	    	cssTransform(aNav,'translateX',target)
	    })
	}
	
    
    tabLists();
        function tabLists(){
    	if(!stopbar) return;
    	if(!Tmove) return;
    	var tabs=document.querySelector('.tabs');
    	var navLF=document.querySelector('.navLF');
    	var navL=document.querySelector('.navL');
    	var navLs=document.querySelector('.navLs');
    	var lis=navL.querySelectorAll('a');
    	var slis=navLs.querySelectorAll('a');
    	var tabLists=document.querySelector('.tabLists');
    	var tabShows=document.querySelectorAll('.tabShows');
    	var css=document.createElement('style');
	    var style='.tabLists{width:'+tabShows.length*100+'%}';
	    style+='.tabLists .tabShows{width:'+1/tabShows.length*100+'%}';
	    css.innerHTML+=style;
	    document.head.appendChild(css);
	    lis[0].style.color='#f20032';
	    lis[0].className='navactive';
	    slis[0].style.color='#f20032';
	    slis[0].className='navactive';
	    var lineStartleft=lis[0].offsetLeft;
    	//var topreturn=tabNav.getBoundingClientRect().top;
   	    var minX=tabs.clientWidth-tabLists.offsetWidth;
   	    cssTransform(tabLists,"translateZ",0.01);
    	var startP=0;
    	var startE=0;
    	var nowstartP=0;
    	var disY=0;
    	var disX=0;
    	var num=0;
    	var step=1;
    	var isMove=true;
        var isFirst=true;
        var firstX=0;
	    var firstTime=0;
	    var lastDis=0;
	    var lastTimeDis=0;
	    var onOff=true;
	    var stopNav=true;
	    var stopjump=true;
	    
	    twolis(lis);
	    twolis(slis);
	    
	    function twolis(lis){
	     for(var i=0;i<lis.length;i++){ 
    		  	lis[i].index=i;
                lis[i].addEventListener('touchstart',function(){
                	tabLists.style.transition='none';
                	stopjump=false;
                })
                lis[i].addEventListener('touchmove',function(){
                	stopNav=false;
                	return;
                })
    		  	lis[i].addEventListener('touchend',function(){

                    if(stopNav){
                    for(var j=0;j<lis.length;j++){
    		  		   lis[j].style.color='#adadad';
    		  	       lis[j].className='';	
    		  		}
	    		  		this.style.color='#f20032';
	    		  		this.className='navactive';
	    		  		tabLists.style.transition='0.3s';
	    		  		cssTransform(tabLists,'translateX',navLF.offsetWidth*-this.index);
	                    }
			            stopNav=true;
			            stopjump=true;
    		  	})
    		  } 
    		     		  
	    }
   
    	tabs.addEventListener('touchstart',function(e){
    		tabLists.style.transition='none';
    		startP={pageX: e.changedTouches[0].pageX,pageY: e.changedTouches[0].pageY}
    		startE=cssTransform(tabLists,'translateX');
    		firstX=startE;
    	    firstTime=new Date().getTime();
    	    lastDis=0;
    	    lastTimerDis=0;
    		isMove=true;
    	    isFirst=true;
    	})
    	tabs.addEventListener('touchmove',function(e){
    		Tmove=false;
	    	if(!isMove){
	    		return
	    	}
    		nowstartP=e.changedTouches[0];
    		disY=nowstartP.pageY-startP.pageY;
    	    disX=nowstartP.pageX-startP.pageX;
    	    //console.log(disX);
    	    if(disX>-5&&disX<2) return; 
    		if(isFirst){
    		isFirst=false;
    		if(Math.abs(disY)>Math.abs(disX)){
    			isMove=false;
    		   }
    	    }
    	    var left=disX+startE;
    			
   		    if(left>0){
    			step=1-left/tabs.clientWidth;
            	left=left*step;
    		}
    		if(left<minX){
            	var over=minX-left;
            	step=1-over/tabs.clientWidth;
            	over=parseInt(step*over);
            	left=minX-over;
           }
    		if(isMove){
    			cssTransform(tabLists,'translateX',left)
    		}
    		
    		var nowTime=new Date().getTime();
    	    lastDis=left-firstX;
    	    lastTimeDis=nowTime-firstTime;
    	})
    	tabs.addEventListener('touchend',function(e){ 
    		Tmove=true;
    		var nowstartP=e.changedTouches[0];
    		var speed=lastDis/lastTimeDis;
    	    var left=cssTransform(tabLists,'translateX');
    	    var aleftm=-lis[lis.length-2].offsetWidth-lis[lis.length-1].offsetWidth;
    	    if(Math.abs(speed)>0.7&&speed<0){
    		  num-=1;
    		  
    	    }else if(speed>1){
    		num+=1;
    	    }else{
    		num=Math.round(left/navLF.offsetWidth)
    	    }
    	    //console.log(num);
    	      var nums=Math.abs(num);
	    	 if(stopjump){
	    	 	if(nums>=(tabShows.length-3)){
	    	    	cssTransform(navL,'translateX',aleftm);
	    	    	cssTransform(navLs,'translateX',aleftm);
	    	    }
	    	    if(nums<=(tabShows.length-4)&&nums>=(tabShows.length-5)){
	    	    	cssTransform(navL,'translateX',0);
	    	    	cssTransform(navLs,'translateX',0);
	    	    }
	    	 }
	    	 
	    	 twoliss(lis);
	    	 twoliss(slis)
            
            function twoliss(lis){
	            for(var i=0;i<lis.length;i++){ 
	    		  	lis[i].style.color='#adadad';
	    		  	lis[i].className='';
	    		  }   		  
	    		  lis[nums].style.color='#f20032';
	    		  lis[nums].className='navactive';
            }

              tabLists.style.transition='0.3s';           
            cssTransform(tabLists,'translateX',navLF.offsetWidth*num);
            //console.log(navLF.offsetWidth)
            

           
    	}) 
    	
    	
    }
   
}

























