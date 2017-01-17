document.addEventListener('touchstart',function(e){
	e.preventDefault();
})

window.addEventListener('load',function(){
var myScroll;

(function(){ //解决a标签转跳
	var a=document.querySelectorAll('a');
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
	}
})();
	
(function(){
 	var header_right=document.querySelector('.header_right'),
 	    maorbycar=document.querySelector('.maorbycar'),
 	    onoff=true;
 	header_right.addEventListener('touchstart',function(e){
 		e.stopPropagation();
 		if(onoff){
 			maorbycar.style.display='block';
 			onoff=false;
 		}else{
 			maorbycar.style.display='none';
 			onoff=true;
 		} 		
 	})
 	document.addEventListener('touchstart',function(e){
 		e.stopPropagation();
 		maorbycar.style.display='none';
 		onoff=true;
 	})
})();
  
(function(){
  var aList=document.querySelector('.nav_list'),
      aLi=aList.querySelectorAll('li'),
      onoff=0;
  aList.style.width=aLi[0].offsetWidth*aLi.length+50+'px';
  tab();
  myScroll=new IScroll('.nav_All',{scrollX:true,scrollY:false});
  myScroll.on('scrollStart',function(){
  	  	  onoff++;
  })
    myScroll.on('scrollEnd',function(){
  	  	  onoff=0;
  	  	  tab();
  })
 
function tab(){
 	for(var i=0;i<aLi.length;i++){   		
	  	aLi[i].addEventListener('touchend',function(){
	  		if(onoff<1){
	  		 for(var i=0;i<aLi.length;i++){
	  		     aLi[i].className='';
	  		     aLi[i].style.color='#505151';
	  		 }
	  		this.className='nav_list_active';
	  		this.style.color='#804ff6';
	  	  }
	  	})
    }
 } 
 
})();

(function(){
	var nav=document.querySelector('.left_nav'),
	    more=document.querySelector('.nav_right_A'),
	    contentAll=document.querySelector('.left_nav_content'),
	    returnLeft=document.querySelector('.left_nav_return'),
	    c_left=document.querySelector('.l_n_c_left'),
	    aLi=c_left.querySelectorAll('li'),
	    left=0,
	    onoff=0;
	    
	    aLi[0].style.background='#fff';
	    aLi[0].style.borderRight='#fff';
	    
	    more.addEventListener('touchstart',function(){
			nav.style.display='block';
			left=contentAll.offsetWidth;
			contentAll.style.transition='0.5s';
			cssTransform(contentAll,'translateX',left);
			
			myScroll = new IScroll(c_left, {
				scrollX:false, 
				scrollbars:true,
				fadeScrollbars: true,
			});
		
			 myScroll.on('scrollStart',function(){
			  	  	  onoff++;
			  })
			 myScroll.on('scrollEnd',function(){
			  	  	  onoff=0;
			  	  	  tab();
			  })
		})
	
	    returnLeft.addEventListener('touchstart',function(){
			contentAll.style.transition='0.5s';
			cssTransform(contentAll,'translateX',-left);
			setTimeout(function(){
				nav.style.display='none';
			},500)		
})
	
 
function tab(){
 	for(var i=0;i<aLi.length;i++){   		
	  	aLi[i].addEventListener('touchend',function(){
	  		if(onoff<1){
	  		 for(var i=0;i<aLi.length;i++){
	  		     aLi[i].style.background='#eee';
	  		     aLi[i].style.borderRight='#e3e3e3';
	  		 }
	  		this.style.background='#fff';
	  		this.style.borderRight='#fff';
	  	  }
	  	})
    }
 }
	
})();
   
(function(){
			TouchSlide({ 
			slideCell:"#slideBox",
			titCell:".hd ul", 
			mainCell:".bd ul", 
			effect:"leftLoop", 
			autoPage:true,
			autoPlay:true
		});
})();

(function(){  //整页拖动or图片延迟加载  
	var clients=document.documentElement.clientHeight,
	    wrap=document.querySelector('#wrapper');
        
	myScroll = new IScroll('#wrapper', {
		scrollX:false, 
		scrollbars: 'custom',
		resizeScrollbars: false,//改变滚动条的宽高
		fadeScrollbars: true,
	});
	
    choose_s('.wait_load1');//图片延迟加载
    choose_s('.wait_load2');
    choose_s('.wait_load3');
    choose_s('.wait_load4');
    choose_s('.wait_load5');
    choose_s('.wait_load6');
    choose_s('.wait_load7');
    
    function choose_s(ele){ 
    	var ele=document.querySelectorAll(ele);
        myScroll.on('scroll',function(){//在原码中加入scroll（滚动中触发）
          tiaojian(this.y-clients,-getPos(ele[0]).top,ele);
		})
        myScroll.on('scrollEnd',function(){	
	       tiaojian(this.y-clients,-getPos(ele[0]).top,ele);
		})
                
	    function getPos(obj) {
			var pos = {top:0};
				while (obj) {
					pos.top += obj.offsetTop;
					obj = obj.offsetParent;
				 }	
				return pos;
	        }       
    }
        
    function tiaojian(allsum,tops,ele){ 
	     if(allsum<tops){
			for(var i=0;i<ele.length;i++){
				ele[i].style.opacity=1;			
				ele[i].setAttribute('src',ele[i].getAttribute('xsrc'));
				ele[i].style.transition='opacity 2s';	
			}
		  }
    }
	
})();

Hmove('.n_c_list','.nav_content1');
Hmove('.n_c_list2','.nav_content2');
function Hmove(a,b){
  var aList=document.querySelector(a);
  var aT=document.querySelector(b);
  var aLi=aList.querySelectorAll('li');
  aList.style.width=aLi[0].offsetWidth*aLi.length+'px';
	myScroll = new IScroll(aT, {
		scrollX: true,		
        bounce:false,	
	});
}


})

























