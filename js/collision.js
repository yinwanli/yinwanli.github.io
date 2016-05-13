//大鱼吃果实
function momFruitsCollision()
{	if(!data.gameOver)
	{
		for(var i=0;i<fruit.num;i++)
		{
			if(fruit.alive[i])
			{
				var dis=calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);//距离的平方
				if(dis<900) 
				{
					fruit.dead(i);
					data.fruitNum++;
					mom.momBodyCount++;
					if(mom.momBodyCount>7) mom.momBodyCount=7;
					
					if(fruit.fruitType[i]=="blue") data.double=2;
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}
	}
	
}

//大鱼喂小鱼
function momBabyCollision()
{
	
	if(data.fruitNum>0&&!data.gameOver)
	{ 
		var dis=calLength2(mom.x, mom.y, baby.x, baby.y);
		if(dis<900)
		{
			baby.babyBodyCount=0;//身体恢复到第0张图片，能量饱满
			//data.reset();
			mom.momBodyCount=0;
			data.addScore();
			halo.born(baby.x,baby.y);
		}
	}
	
	
}