//海底背景绘制
function drawBackground()
{	
	//bgPic.onload=function(){cxt2.drawImage(bgPic,0,0,canWidth,canHeight);} 会出现绘制的海葵globalAlpha失效？
	cxt2.save();
	
	cxt2.drawImage(bgPic,0,0,canWidth,canHeight);
	
	cxt2.restore();
	
	
	 
}