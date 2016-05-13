//分数计数系统
var dataObj=function()
{
	this.fruitNum=0;
	this.double=1;
	this.score=0;
	this.gameOver=false;
	this.alpha=0;//gameover字体透明度
	
	
}
/*dataObj.prototype.reset=function()
{
	this.fruitNum=0;
	this.double=1;
}*/
dataObj.prototype.draw=function()
{ 
	var w=can1.width;
	var h=can1.height;
	/*cxt1.fillStyle="white";
	cxt1.font="20px verdana";
	cxt1.textAlign="center";*/
	//cxt1.fillText("num:"+this.fruitNum,canWidth*0.5,canHeight-50);
	//cxt1.fillText("double:"+this.double,canWidth*0.5,canHeight-80);
	cxt1.save();
	cxt1.shadowBlur=10;
	cxt1.shadowColor="white";
	cxt1.fillText("得分："+this.score,canWidth*0.5,canHeight-70);
	if(data.gameOver)
	{
		this.alpha+=deltaTime*0.002;
		if(this.alpha>1) this.alpha=1;
		cxt1.fillStyle="rgba(255,255,255,"+this.alpha+")";
		cxt1.fillText("GAME OVER !!!",canWidth*0.5,canHeight*0.5);
		
		
	}
	cxt1.restore();
}
dataObj.prototype.addScore=function()
{
	this.score+=this.fruitNum*100*this.double;
	this.fruitNum=0;
	this.double=1;
}