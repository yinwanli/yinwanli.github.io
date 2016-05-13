//海底浮游的杂物
var dustObj=function()
{
	this.x=[];
	this.y=[];
	this.amp=[];
	this.angle;
	this.NO=[];
	
}
dustObj.prototype.num=30;

dustObj.prototype.init=function()
{
	
	for(var i=0;i<this.num;i++)
	{
		this.x[i]=Math.random()*canWidth;
		this.y[i]=Math.random()*canHeight;
		this.amp[i]=Math.random()*25+20;
		
		this.NO[i]=Math.floor(Math.random()*7);//[0,6]
		
	}
	this.angle=0;
}
dustObj.prototype.draw=function()
{
	this.angle+=deltaTime*0.0016;
	
	var val=Math.sin(this.angle);
	
	for(var i=0;i<this.num;i++)
	{
		var no=this.NO[i];
		cxt1.drawImage(dustPic[no],this.x[i]+this.amp[i]*val,this.y[i]);
		
	} 
}
