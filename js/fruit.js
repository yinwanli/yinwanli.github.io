//海葵果实
var fruitObj=function()
{
	this.alive=[];//boolean
	this.x=[];//产生果实的位置横坐标
	this.y=[];//产生果实的位置纵坐标
	this.aneNum=[];
	this.r=[];//果实的半径，随时间变大
	this.spd=[];//每个果实都有自己的成长速度和上浮速度
	this.fruitType=[];
	this.orange=new Image();
	this.blue=new Image();
}
fruitObj.prototype.num=30;

fruitObj.prototype.dead=function(i)
{
	this.alive[i]=false;
}

fruitObj.prototype.init=function()
{
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.aneNum[i]=0;
		this.spd[i]=Math.random()*0.017+0.003;//[0.003,0.02)
		
		this.fruitType[i]="";
		}
	this.orange.src="src/fruit.png";
	this.blue.src="src/blue.png";
}
fruitObj.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
		
		if(this.alive[i])
		{
			if(this.fruitType[i]=="blue")
			{
				var pic=this.blue;
			}
			else
			{
				var pic=this.orange;
			}
			if(this.r[i]<=14)//半径小于某个值
			{
				var N=this.aneNum[i];
				
				this.x[i]=ane.headx[N];
				this.y[i]=ane.heady[N];
				this.r[i]+=this.spd[i]*deltaTime;//成长阶段
				
			}
			else
			{
				this.y[i]-=this.spd[i]*6*deltaTime;//成熟上漂
				
			}
			cxt2.drawImage(pic,this.x[i]-this.r[i]*0.5,this.y[i]-this.r[i]*0.5,this.r[i],this.r[i]);
			if(this.y[i]<10) this.alive[i]=false;
		}
	}
}
fruitObj.prototype.born=function(i)
{
	this.aneNum[i]=Math.floor(Math.random()*ane.num);
	
	this.r[i]=0;
	this.alive[i]=true;
	var ran=Math.random();//ran在某个数值一下的概率为蓝色果实的比例
	if(ran<0.2)
	{
		this.fruitType[i]="blue";//blue活着orange
	}
	else
	{
		this.fruitType[i]="orange";
	}
}

//保证屏幕上至少有15个果实
function fruitMonitor()       
{
	var aliveNum=0;//活着的果实数量
	for(var i=0;i<fruit.num;i++)
	{
		if(fruit.alive[i]) aliveNum++;
		
	}
	if(aliveNum<15)	
	{
		sendFruit();
		return;
	}
}


function sendFruit()
{
	for(var i=0;i<fruit.num;i++)
	{
		if(!fruit.alive[i])
		{
			fruit.born(i);
			return;
		}
	}
}






/*fruitObj.prototype.update=function(){
	var num=0;
	for(var i=0;i<this.num;i++){
		if(this.alive[i]) num++;
		
		}
	
	}*/