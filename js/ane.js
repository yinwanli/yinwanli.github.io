//海葵
var aneObj=function()
{
	this.rootx=[];
	this.headx=[];
	this.heady=[];
	this.angle=0;//头部变化正弦函数角度
	this.amp=[];//amplitude 
	
	
	 
}
aneObj.prototype.num=50;
aneObj.prototype.init=function()
{
	for(var i=0;i<this.num;i++)
	{
		this.rootx[i]=i*16+Math.random()*20;
		this.headx[i]=this.rootx[i];
		this.heady[i]=canHeight-250+Math.random()*50;
		this.amp[i]=Math.random()*50+50;
	}
	
}
aneObj.prototype.draw=function()
{
	this.angle+=deltaTime*0.0008;
	var val=Math.sin(this.angle);
	//console.log(val);
	cxt2.save();
	cxt2.globalAlpha=0.6;
	cxt2.lineWidth=20;
	cxt2.lineCap="round";
	cxt2.strokeStyle="#3b154e";
	
	for(var i=0;i<this.num;i++)
	{
		cxt2.beginPath();
		cxt2.moveTo(this.rootx[i],canHeight);
		this.headx[i]=this.rootx[i]+val*this.amp[i];
		cxt2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);//二次贝塞尔曲线
		
		cxt2.stroke();
	}
	//cxt2.closePath();
	cxt2.restore();
}