window.onload=function()
{
	//导航栏选项卡切换JavaScript代码
	var oList=document.getElementsByClassName("list")[0];
	var aLi=oList.getElementsByTagName("li");
	var aDiv=document.getElementsByClassName("main");
	
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].index=i;
		aLi[i].onclick=function()
		{
			for(var i=0;i<aDiv.length;i++)
			{
				aDiv[i].style.display="none";
				aLi[i].className="";
				
			}
			this.className="active";
			aDiv[this.index].style.display="block";
		}
	}
		
		//选项卡切换jquery代码
	/*$(".list").find("li").click(function(){
		$(".list").find("li").attr("class","");
		$(".main").css("display","none");
		$(this).attr("class","active");
		$(".main").eq($(this).index()).css("display","block");
		});*/
	//选项卡切换结束
	
//中部第二个选项卡内容开始	
	//带单位排序开始
	$(".btn1").click(function(){
		var arr=["20px","60px","28px","3px"];
		$(".text1").val("");
		$(".text1").val(arr.sort(function(a,b){
			return parseInt(a)-parseInt(b);
			}));
	});
	//带单位排序结束
		
	//数组去重开始
	var arr2=[2,3,6,2,6];
	function removeDuplicate(arr)
	{
		for(var i=0;i<arr.length;i++)
		{
			for(var j=i+1;j<arr.length;j++)
			{
				if(arr[i]==arr[j])
				{
					arr.splice(i,1);
					j--;
			    }
		    }
	    }
		return arr;
	}
	$(".btn2").click(function(){
		$(".text2").val("");
		$(".text2").val(removeDuplicate(arr2));
		});
	//数组去重结束
	
	//字符串倒序开始
	$(".btn3").click(function(){
		var str="string";
		$(".text3").val("");
		$(".text3").val(str.split("").reverse().join(""));
		});
	//字符串倒序结束
	
	
	//正则邮箱检测开始
	$(".btn4").click(function(){
		var reg=/^[a-z0-9]+\w+@[a-z0-9]+\.[a-z]+$/gi;
		
		if(!$(".text4").val()){
			alert("请输入一个邮箱");
			}
		else if(reg.test($(".text4").val())){
			alert("您输入的邮箱格式正确");
			}
		else{
			alert("您输入的格式不正确");
		}
		});
	//正则邮箱检测结束
	
	
	
	//文字收缩开始
	var onOff=true;
	var str=$("#scaleSpan").html();
	$("#scaleA").click(function(){
		
		if(onOff){
		$("#scaleSpan").html(str.substring(0,50));
		$("#scaleA").html(">> 展开");
		onOff=false;
		}
		else{
			$("#scaleSpan").html(str);
			$("#scaleA").html("<< 收缩");
			onOff=true;
			}
		});
	//文字收缩结束
	
	//仿新浪微博开始
	var maxLength=140;
	$("#chatBox").find("textarea").keyup(function()
	{
		var len=$(this).val().length;
		$("#textNum").html(maxLength-len);
		
		if(parseInt($("#textNum").html())<0)
		{
			$("#textNum").html("0");
			$(this).val($(this).val().substring(0,141));
		}
	});
	$("#send").click(function()
	{
		if(maxLength==$("#textNum").html()) alert("请输入内容");
		else
		{
			var oDiv=$("<div>"+$("textarea").val()+"</div>");
			oDiv.prependTo($("#chatBoxUl"));
			
			$("textarea").val("");
			$("#textNum").html(maxLength);
			
			var iHeight=parseInt(oDiv.css("height"));
			oDiv.css("height","0");
			oDiv.animate({height:iHeight}).animate({opacity:100},300,"linear");
		}
	});
	
	//仿新浪微博结束
	
	//图片无缝滚动开始
	var oDivSS=document.getElementById("relDiv");
	var oUlSS=oDivSS.getElementsByTagName("ul")[0];
	
	var aLiSS=oUlSS.getElementsByTagName("li");
	var timerSS=null;
	var sp=4;
	oUlSS.innerHTML+=oUlSS.innerHTML;
	//oUlSS.style.width=aLiSS[0].offsetWidth*aLiSS.length+"px";
	var oPreSS=document.getElementById("pre");
	var oNextSS=document.getElementById("next");
	function slide()
	{
		oUlSS.style.left=oUlSS.offsetLeft-sp+"px";
		if(oUlSS.offsetLeft<-oUlSS.offsetWidth/2) oUlSS.style.left=0+"px";
				
		if(oUlSS.offsetLeft>0) oUlSS.style.left=-oUlSS.offsetWidth/2+"px";
	}
	timerSS=setInterval(slide,30);
	oDivSS.onmouseover=function()
		{
			clearInterval(timerSS);
		}
		
	oDivSS.onmouseout=function()
		{
			timerSS=setInterval(slide,30);
		}
	oPreSS.onclick=function(){sp=4;};
	oNextSS.onclick=function(){sp=-4;};
	//图片无缝滚动结束
	
	//从0-100数字中随机产生10个不重复的数字函数开始
	//第一种方法
	function getRandom1()
	{
		var s="";//字符串
		var next;//随机产生的数字
		for(var i=0;i<10;i++)
		{
			next=Math.round(Math.random()*100);
			if(s.indexOf(next)===-1)
			{
				s+=next+",";
				
			}
			else {i=i-1;}
			
		}
			return s.split(",").slice(0,-1);
			//return s.slice(0,-1).split(",");也可以
	}
	
	//第二种方法
	//思路:for循环从0到100的数组,然后将这101个数利用sort()随机打乱,然后通过将这个数组的length改写为10,便取到了10个不同的数
	function getRandom2()
	{
		var arr=[];
		for(var i=0;i<100;i++)
		{
			arr[i]=i;
			
		}
		arr.sort(function(a,b){return Math.random()-0.5});
		return arr.slice(0,10);
	}
	 //第三种方法：json对象,key值是唯一的,key值可以为数字
	  function getRandom3()
	  {
		  var arr=[];
		  var json={};
		  while(arr.length<10){
			var k=Math.round(Math.random()*100);
			if(!json[k]){
			  json[k]=true;
			  arr.push(k);
			  }
			}
		  return arr;
	  }
	   $(".btn5").click(function(){
		   $(".text5").val("");
		   $(".text5").val(getRandom1());
		   });
		$(".btn6").click(function(){
		   $(".text6").val("");
		   $(".text6").val(getRandom2());
		   });
		$(".btn7").click(function(){
		   $(".text7").val("");
		   $(".text7").val(getRandom3());
		   });
		//从0-100数字中随机产生10个不重复的数字函数结束
		
	//通过类选择器获取dom开始
	function getByClass(oParent,sClass){
		var aEle=oParent.getElementsByTagName("*");
		var aResult=[];
		
		for(var i=0;i<aEle.length;i++){
			if(aEle[i].className==sClass) aResult.push(aEle[i]);
			}
			return aResult;
		}	
	//通过类选择器获取dom开始
	
	//获取dom属性开始
	function getStyle(obj,attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
		}
	//获取dom属性结束
	
	//运动框架完美函数开始
	function startMove(obj,json,fnEnd)
	{
		clearInterval(obj.timer);
		obj.timer=setInterval(function()
		{
			var bStop=true;//obj的所有属性值到达运动终点才是ture；
			for(var attr in json)
			{
				//目前属性值
				var cur=0;
				if(attr=="opacity") cur=Math.round(parseFloat(getStyle(obj,attr))*100);
				else cur=parseInt(getStyle(obj,attr));
				
				//速度
				var speed=(json[attr]-cur)/6;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				
				
				//计算公式
				if(attr=="opacity"){
					obj.style.filter="alpha(opacity:"+(cur+speed)+")";
					obj.style.opacity=(cur+speed)/100;
					
					}
				else obj.style[attr]=cur+speed+"px";
				
				if(cur!=json[attr]) bStop=false;//判断终点
				
			}
				//循环结束回调函数
			if(bStop){
				clearInterval(obj.timer);
				if(fnEnd) fnEnd();
				}
		},30);
	}
	//运动框架完美函数结束
	var oWid=document.getElementById("wid");
	oWid.onmouseover=function(){
		startMove(oWid,{width:120});
		};
	oWid.onmouseout=function(){
		startMove(oWid,{width:80});
		};
	
	var oHei=document.getElementById("hei");
	oHei.onmouseover=function(){
		startMove(oHei,{height:120});
		};
	oHei.onmouseout=function(){
		startMove(oHei,{height:80});
		};
		
	var oOpa=document.getElementById("opa");
	oOpa.onmouseover=function(){
		startMove(oOpa,{opacity:20});
		};	
	oOpa.onmouseout=function(){
		startMove(oOpa,{opacity:90});
		};
		
	var oFon=document.getElementById("fon");
	oFon.onmouseover=function(){
		startMove(oFon,{fontSize:26});
		};	
	oFon.onmouseout=function(){
		startMove(oFon,{fontSize:14});
		};	
	
	var oAll=document.getElementById("all");
	oAll.onmouseover=function(){
		startMove(oAll,{width:120,height:120,opacity:20,fontSize:26});
		};	
	oAll.onmouseout=function(){
		startMove(oAll,{width:80,height:80,opacity:90,fontSize:14});
		};	
	$("#jq1").hover(function(){
		$("#jq2").slideUp(200);
		$("#jq3").fadeOut(200);
		},function(){
		$("#jq2").slideDown(200);
		$("#jq3").fadeIn(200);
		});
	
	
	$("#jq2").hover(function(){
		$("#jq1").css("background","blue");
		$("#jq3").css("background","blue");
		},function(){
			$("#jq1").css("background","red");
			$("#jq3").css("background","red");
			});
	$("#jq3").hover(function(){
		$("#jq1").fadeTo(500,0.1);
		$("#jq2").fadeTo(500,0.1);
		},function(){
			$("#jq1").fadeTo(500,1);
			$("#jq2").fadeTo(500,1);
			});
	
	//图片轮播开始
	var oImageDiv=document.getElementById("images");
	var btnPre=getByClass(oImageDiv,"pre")[0];
	var btnNext=getByClass(oImageDiv,"next")[0];
	var maskLeft=getByClass(oImageDiv,"maskLeft")[0];
	var maskRight=getByClass(oImageDiv,"maskRight")[0];
	var oSmallPic=getByClass(oImageDiv,"smallPic")[0];
	var oUlSmall=oSmallPic.getElementsByTagName("ul")[0];
	var oBigPic=getByClass(oImageDiv,"bigPic")[0];
	var oText=getByClass(oBigPic,"text")[0];
	var oNum=getByClass(oBigPic,"num")[0];
	var aLiSmall=oSmallPic.getElementsByTagName("li");
	var aLiBig=oBigPic.getElementsByTagName("li");
	var infoArr=["王 凯","刘 涛","蒋 欣","靳 东","杨 紫","王子文"];
	var nowIndex=2;
	var now=0;
	
		//遮罩和按钮显示开始
	btnPre.onmouseover=maskLeft.onmouseover=function(){
		startMove(btnPre,{opacity:100});
		}
	btnPre.onmouseout=maskLeft.onmouseout=function(){
		startMove(btnPre,{opacity:0});
		}
	btnNext.onmouseover=maskRight.onmouseover=function(){
		startMove(btnNext,{opacity:100});
		}
	btnNext.onmouseout=maskRight.onmouseout=function(){
		startMove(btnNext,{opacity:0});
		}
		//遮罩和按钮显示结束
	
		//小图点击效果和移入移出开始	
	for(var i=0;i<aLiSmall.length;i++)
	{
		aLiSmall[i].index=i;
		aLiSmall[i].onclick=function()
		{
			if(this.index==now) return;
			now=this.index;
			tab();
		};
		aLiSmall[i].onmouseover=function(){startMove(this,{opacity:100})};
		aLiSmall[i].onmouseout=function(){
			if(this.index!=now)
			startMove(this,{opacity:60});
		};
	}
		//小图点击效果和移入移出结束
	
		//切换效果关键函数
	function tab()
	{
		aLiBig[now].style.zIndex=nowIndex++;
		for(var i=0;i<aLiSmall.length;i++){
			startMove(aLiSmall[i],{opacity:60});
			}
		startMove(aLiSmall[now],{opacity:100});
		aLiBig[now].style.height=0;
		startMove(aLiBig[now],{height:320});
		oText.innerHTML=infoArr[now];
		oNum.innerHTML=now+1+"/"+aLiBig.length;
		
		if(now==0) startMove(oUlSmall,{left:0});
		else if(now==aLiSmall.length-1) startMove(oUlSmall,{left:-(now-2)*aLiSmall[0].offsetWidth});
		else startMove(oUlSmall,{left:-(now-1)*aLiSmall[0].offsetWidth});
	}
	
	
		//大图按钮点击效果开始
	btnPre.onclick=function(){
		now--;
		if(now==-1) now=aLiBig.length-1;
		tab();
		}
	btnNext.onclick=function(){
		now++;
		if(now==aLiBig.length) now=0;
		tab();
		}
		//大图按钮点击效果结束
		
		//自动播放
	var timer=setInterval(btnNext.onclick,2000);
	oImageDiv.onmouseover=function(){
		clearInterval(timer);
		}
	oImageDiv.onmouseout=function(){
		timer=setInterval(btnNext.onclick,2000);
		}
	//图片轮播结束
	
	//链式展开弹窗开始	
	var oBtn=document.getElementById('btn');
	var oBottom=document.getElementById('bottom');
	var oTop=document.getElementById('top');
	var oBtnClose=document.getElementById('btnClose');
	
	oTop.style.display='block';
	var initBottomRight=parseInt(getStyle(oBottom, 'right'));
	var initTopBottom=parseInt(getStyle(oTop, 'bottom'));
	oTop.style.display='none';
	
	oBtn.onclick=openHandler;
	oBtnClose.onclick=closeHandler;
	
	function openHandler()
	{
		startMove(oBottom, {right: 0}, function (){
			oTop.style.display='block';
			startMove(oTop, {bottom: 0});
		});
		oBtn.className='butHide';
		oBtn.onclick=closeHandler;
	}
	
	function closeHandler()
	{
		startMove(oTop, {bottom: initTopBottom}, function (){
			oTop.style.display='none';
			startMove(oBottom, {right: initBottomRight}, function (){
				oBtn.className='butShow';
			});
		});
		oBtn.onclick=openHandler;
	}
		//链式展开弹窗结束
		
	var ctl=document.getElementById("control");

	ctl.onclick=startGame;
	
	function startGame()
	{
		game();
		ctl.value="重新开始";
	}
	
	//footer部分时钟开始 
	function two(n){return n<10?"0"+n:""+n}
	function fnTime(){
		var myTime=new Date();
		var iYear=myTime.getFullYear(); 
		var iMonth=myTime.getMonth()+1;
		var iDate=myTime.getDate();
		var iDay=myTime.getDay();
		var iHour=myTime.getHours();
		var iMin=myTime.getMinutes();
		var iSec=myTime.getSeconds();
		if(iDay===0) day="星期日";
		if(iDay===1) day="星期一";
		if(iDay===2) day="星期二";
		if(iDay===3) day="星期三";
		if(iDay===4) day="星期四";
		if(iDay===5) day="星期五";
		if(iDay===6) day="星期六";
		var str= "现在时间："+iYear+"年"+two(iMonth)+"月"+two(iDate)+"日"+" "+day+" "+two(iHour)+":"+two(iMin)+":"+two(iSec);
		$("#spanTime").html(str);
		}
	fnTime();
	var timer=null;
	clearInterval(timer);
	timer=setInterval(fnTime,1000);
	//时钟结束


	var btnPage=document.getElementById("btnPage");
		var aBtnP=btnPage.getElementsByTagName("input");
		
		var pageGroup=document.getElementById("pageGroup");
		var aPage=pageGroup.getElementsByTagName("div");
		
		var nowN=0;
		
		aBtnP[0].onclick=function(){
			if(nowN==5) return;
			if(aPage[nowN].style.webkitTransform) aPage[nowN].style.webkitTransform="rotateX(-90deg)";
			else if(aPage[nowN].style.mozTransform) aPage[nowN].style.mozTransform="rotateX(-90deg)";
			else aPage[nowN].style.transform="rotateX(-90deg)";
			nowN++;
			
			if(aPage[nowN].style.webkitTransform) aPage[nowN].style.webkitTransform="rotateX(0deg)";
			else if(aPage[nowN].style.mozTransform) aPage[nowN].style.mozTransform="rotateX(0deg)";
			else aPage[nowN].style.transform="rotateX(0deg)";
			}
		aBtnP[1].onclick=function(){
			if(nowN==0) return;
			if(aPage[nowN].style.webkitTransform) aPage[nowN].style.webkitTransform="rotateX(90deg)";
			else if(aPage[nowN].style.mozTransform) aPage[nowN].style.mozTransform="rotateX(90deg)";
			else aPage[nowN].style.transform="rotateX(90deg)";
			nowN--;
			if(aPage[nowN].style.webkitTransform) aPage[nowN].style.webkitTransform="rotateX(0deg)";
			else if(aPage[nowN].style.mozTransform) aPage[nowN].style.mozTransform="rotateX(0deg)";
			else aPage[nowN].style.transform="rotateX(0deg)";
			}




}
		
		
		
		
		