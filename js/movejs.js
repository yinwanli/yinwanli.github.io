function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
	}

/*function startMove(obj, json, fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//假设：所有值都已经到了
		
		for(var attr in json)
		{
			var cur=0;
			
			if(attr=='opacity')
			{
				cur=Math.round(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				cur=parseInt(getStyle(obj, attr));
			}
			
			var speed=(json[attr]-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(cur!=json[attr])
				bStop=false;
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}
		}
		
		if(bStop)
		{
			clearInterval(obj.timer);
						
			if(fnEnd)fnEnd();
		}
	}, 30);
}
*/
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
				var speed=(json[attr]-cur)/5;
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
				if(fnEnd)fnEnd();
				}
		},30);
	}