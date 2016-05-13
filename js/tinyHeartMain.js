var can1;
var can2;

var cxt1;
var cxt2;

var lastTime;
var deltaTime;
var bgPic=new Image();

var canHeight;
var canWidth

var fruit;

var ane;
var mom;
var mx;
var my;

var baby;
var babyTail=[];
var babyEye=[];
var babyBody=[];

var momTail=[];
var momEye=[];
var momBodyOrange=[];
var momBodyBlue=[];

var data;
var wave;
var halo;

var dust;
var dustPic=[];


//window.onload=game;
function game()
{
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}

function init()
{
	can1=document.getElementById("canvas1");
	cxt1=can1.getContext("2d");//baby,mom,gameover,score,dust,wave,halo
	can2=document.getElementById("canvas2");
	cxt2=can2.getContext("2d");//anemone,fruit,background,
	
	can1.addEventListener("mousemove",onMouseMove,false);
	
	canWidth=can1.width;
	canHeight=can1.height;
	bgPic.src="src/background.jpg";
	
	ane=new aneObj();
	ane.init();
	
	fruit=new fruitObj();
	fruit.init();
	
	mom=new momObj();
	mom.init();
	
	mx=canWidth*0.5;
	my=canHeight*0.5;
	
	baby=new babyObj();
	baby.init();
	
	for(var i=0;i<8;i++)
	{ 
		babyTail[i]=new Image();
		babyTail[i].src="src/babyTail"+i+".png";
	}
	for(var i=0;i<2;i++)
	{ 
		babyEye[i]=new Image();
		babyEye[i].src="src/babyEye"+i+".png";
		
	}
	for(var i=0;i<20;i++)
	{ 
		babyBody[i]=new Image();
		babyBody[i].src="src/babyFade"+i+".png";
	}
	
	
	for(var i=0;i<8;i++)
	{ 
		momTail[i]=new Image();
		momTail[i].src="src/bigTail"+i+".png";
	}
	for(var i=0;i<2;i++)
	{ 
		momEye[i]=new Image();
		momEye[i].src="src/bigEye"+i+".png";
	}
	data=new dataObj();
	for(var i=0;i<8;i++)
	{ 
		momBodyOrange[i]=new Image();
		momBodyBlue[i]=new Image();
		momBodyOrange[i].src="src/bigSwim"+i+".png";
		momBodyBlue[i].src="src/bigSwimBlue"+i+".png";
	}
	
	cxt1.fillStyle="white";
	cxt1.font="20px verdana";
	cxt1.textAlign="center";
	
	wave=new waveObj();
	wave.init();
	
	halo=new haloObj();
	halo.init();
	
	
	for(var i=0;i<7;i++)
	{ 
		dustPic[i]=new Image();
		dustPic[i].src="src/dust"+i+".png";
	}
	
	dust=new dustObj();
	dust.init();
	
	

}
function gameloop()
{
	requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if(deltaTime>40) deltaTime=40;
	drawBackground();
	
	ane.draw();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	cxt1.clearRect(0,0,canWidth,canHeight);//不清除，画的鱼会很粗
	mom.draw();
	baby.draw();
	momFruitsCollision();
	momBabyCollision();
	
	data.draw();
	wave.draw();
	
	halo.draw();
	dust.draw();
	
	
}
function onMouseMove(e)
{
	if(!data.gameOver)
	{
	
		//在ie下可以用event.offsetX, evnet.offsetY，在Firefox下是event.layerX, event.layerY
		if(e.offSetX||e.layerX)
		{
			mx=e.offSetX==undefined?e.layerX:e.offSetX;
			my=e.offSetY==undefined?e.layerY:e.offSetY;
		}
	}
}