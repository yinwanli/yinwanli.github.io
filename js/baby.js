//小鱼
function babyObj()
{
	this.x;
	this.y;
	this.angle;
	//this.babyEye=new Image();
	//this.babyBody=new Image();
	//this.babyTail=new Image();
	
	this.babyTailTimer=0;
	this.babyTailCount=0;  
	
	this.babyEyeTimer=0;
	this.babyEyeCount=0;
	this.babyEyeInterval=1000;
	
	this.babyBodyTimer=0;
	this.babyBodyCount=0;  
	

}
babyObj.prototype.init=function()
{
	this.x=canWidth*0.5-50;
	this.y=canHeight*0.5+50;
	this.angle=0;
	//this.babyEye.src="src/babyEye0.png";
	//this.babyBody.src="src/babyFade0.png";
	//this.babyTail.src="src/babyTail0.png";
}
babyObj.prototype.draw=function()
{
	
	this.x=lerpDistance(mom.x,this.x,0.97);
	this.y=lerpDistance(mom.y,this.y,0.97);
	
	var deltaY=mom.y-this.y;
	var deltaX=mom.x-this.x;
	
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(beta,this.angle,0.6);
	
	//摇尾巴
	this.babyTailTimer+=deltaTime;
	if(this.babyTailTimer>50)
	{
		this.babyTailCount=(this.babyTailCount+1)%8;
		this.babyTailTimer%=50;
	}
	
	//眨眼睛
	this.babyEyeTimer+=deltaTime;
	if(this.babyEyeTimer>this.babyEyeInterval)
	{
		this.babyEyeCount=(this.babyEyeCount+1)%2;
		this.babyEyeTimer%=this.babyEyeInterval;
		if(this.babyEyeCount==0) this.babyEyeInterval=Math.random()*1500+2000;
		else this.babyEyeInterval=200;
	}
	
	//小鱼身体变化
	this.babyBodyTimer+=deltaTime;
	if(this.babyBodyTimer>300)
	{
		this.babyBodyCount+=1;
		this.babyBodyTimer%=300;
		if(this.babyBodyCount>19)
		{
			this.babyBodyCount=19;
			//game over
			data.gameOver=true;
		}
		
	}
	
	cxt1.save();
	cxt1.translate(this.x,this.y);
	cxt1.rotate(this.angle);
	
	var babyTailCount=this.babyTailCount;
	
	cxt1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width*0.5+25,-babyTail[babyTailCount].height*0.5);
	
	var babyBodyCount=this.babyBodyCount;
	cxt1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width*0.5,-babyBody[babyBodyCount].height*0.5);
	
	var babyEyeCount=this.babyEyeCount;
	cxt1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width*0.5,-babyEye[babyEyeCount].height*0.5);
	/*cxt1.drawImage(this.babyTail,-this.babyTail.width*0.5+25,-this.babyTail.height*0.5);
	cxt1.drawImage(this.babyBody,-this.babyBody.width*0.5,-this.babyBody.height*0.5);
	cxt1.drawImage(this.babyEye,-this.babyEye.width*0.5,-this.babyEye.height*0.5);*/
	
	cxt1.restore();
	
}