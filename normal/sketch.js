var pos=[];
var posi=0;
var vencedor=0;

let xis=0;
let bolinha=0;
let k=0;

let i=true;

//function desenharX(var a, var b);

function setup() {
    // put setup code here
    createCanvas(1200,600);

    frameRate(60);

    k=0;

    pos=[0,0,0,0,0,0,0,0,0,0];  
}

function draw() {
    // put drawing code here

    background(0);

    if(vencedor===0)
    {
    	strokeWeight(1);
    	stroke(185);

    	fill(0,0,0,0);

   		textSize(32);

   		text('Vez de:', 700,110);

   		if(k===0)
   		{
   			strokeWeight(2);
    		stroke(255,255,255,255);
    		fill(184,134,11,255);

    		rect(843,85,60,30,10,10,10,10);

    		if(mouseX>843 && mouseX<903 && mouseY>60 && mouseY<115)
    		{
    			strokeWeight(2);
    			stroke(255,255,255,255);
    			fill(218,157,16,123);

    			rect(843,85,60,30,10,10,10,10);
    		}

    		strokeWeight(0.3);
    		stroke(0);

    		fill(0,0,0,255);
    		textSize(15);

    		text('Sortear', 848,105);
   		}

    	if(k===1)
    	{	
    		stroke(255,0,0, 255);
			strokeWeight(10);

    		line(835,60,915,140);
    		line(835,140,915,60);
    	}
    	if(k===2)
    	{	
    		fill(0,0,0,0);
    		stroke(0, 0,255, 255);
    		strokeWeight(10);

    		circle(875,100,80);
    	}
	}
    strokeWeight(0);
    stroke(0);
	fill(50);

	if(vencedor===0)
	{
		if(mouseX<200 && mouseY<200 && mouseY>15 && mouseX>15)
		{
			rect(15,15,185,185,10,0,0,0);
		}
		if(mouseX>200 && mouseX<400 && mouseY<200 && mouseY>15)
		{
			rect(200,15,200,185);
		}
		if(mouseX>400 && mouseY<200 && mouseY>15 && mouseX<585)
		{
			rect(400,15,185,185,0,10,0,0);
		}
		if(mouseX<200 && mouseY>200 && mouseY<400 && mouseX>15)
		{
			rect(15,200,185,200);
		}
		if(mouseX>200 && mouseX<400 && mouseY>200 && mouseY<400)
		{
			rect(200,200,200,200);
		}
		if(mouseX>400 && mouseY>200 && mouseY<400 && mouseX<585)
		{
			rect(400,200,185,200);
		}
		if(mouseY>400 && mouseX<200 && mouseX>15 && mouseY<585)
		{
			rect(15,400,185,185,0,0,0,10);
		}
		if(mouseY>400 && mouseX>200 && mouseX<400 && mouseY<585)
		{
			rect(200,400,200,185);
		}
    	if(mouseY>400 && mouseX>400 && mouseX<585 && mouseY<585	)
    	{
    		rect(400,400,185,185,0,0,10,0);
    	}
	}



    stroke(123);
	strokeWeight(8);
    line(200,15,200,585);
    line(400,15,400,585);
    line(15,200,585,200);
    line(15,400,585,400);

    
    stroke(255,0,0, 255);
	strokeWeight(15);

    if(pos[1]===1)
    {
    	line(25,25,175,175);
    	line(25,175,175,25);
    }
    if(pos[2]===1)
    {
    	line(225,25,375,175);
    	line(225,175,375,25);
    }
    if(pos[3]===1)
    {
    	line(425,25,575,175);
    	line(425,175,575,25);
    }
    if(pos[4]===1)
    {
    	line(25,225,175,375);
    	line(25,375,175,225);
    }
    if(pos[5]===1)
    {
    	line(375,225,225,375);
    	line(225,225,375,375);
    }
    if(pos[6]===1)
    {
    	line(425,225,575,375);
    	line(425,375,575,225);
    }
    if(pos[7]===1)
    {
    	line(25,425,175,575);
    	line(25,575,175,425);
    }
    if(pos[8]===1)
    {
    	line(225,425,375,575);
    	line(225,575,375,425);
    }
    if(pos[9]===1)
    {
    	line(425,425,575,575);
    	line(425,575,575,425);
    }

    fill(0,0,0,0);
    stroke(0, 0,255, 255);

    if(pos[1]===2)
    {
    	circle(100,100,150);
    }
    if(pos[2]===2)
    {
    	circle(300,100,150);
    }
    if(pos[3]===2)
    {
    	circle(500,100,150);
    }
    if(pos[4]===2)
    {
    	circle(100,300,150);
    }
    if(pos[5]===2)
    {
    	circle(300,300,150);
    }
    if(pos[6]===2)
    {
    	circle(500,300,150);
    }
    if(pos[7]===2)
    {
    	circle(100,500,150);
    }
    if(pos[8]===2)
    {
    	circle(300,500,150);
    }
    if(pos[9]===2)
    {
    	circle(500,500,150);
    }

    if(k===1 && posi!==0)
    {
    	pos[posi]=1;
    	k=2;
    	posi=0;
    }

    if(k===2 && posi!==0)
    {
    	pos[posi]=2;
    	k=1;
    	posi=0;
    }

    strokeWeight(17);
    stroke(255,255,0,185);

    if(pos[1]!==0 && pos[2]!==0 && pos[3]!==0 && pos[4]!==0 && pos[5]!==0 && pos[6]!==0 && pos[7]!==0 && pos[8]!==0 && pos[9]!==0)
    {
    	vencedor=3;
    }	

    if(pos[1]===1 && pos[2]===1 && pos[3]===1)
    {
    	vencedor=1;
    	line(15,100,585,100); 
    }
    else if(pos[4]===1 && pos[5]===1 && pos[6]===1)
    {
    	vencedor=1;
    	line(15,300,585,300); 
    }
    else if(pos[7]===1 && pos[8]===1 && pos[9]===1)
    {
    	vencedor=1;
    	line(15,500,585,500); 
    }
    else if(pos[1]===1 && pos[4]===1 && pos[7]===1)
    {
    	vencedor=1;
    	line(100,15,100,585); 
    }
    else if(pos[2]===1 && pos[5]===1 && pos[8]===1)
    {
    	vencedor=1;
    	line(300,15,300,585); 
    }
    else if(pos[3]===1 && pos[6]===1 && pos[9]===1)
    {
    	vencedor=1;
    	line(500,15,500,585); 
    }
    else if(pos[1]===1 && pos[5]===1 && pos[9]===1)
    {
    	vencedor=1;
    	line(15,15,585,585); 
    }
    else if(pos[3]===1 && pos[5]===1 && pos[7]===1)
    {
    	vencedor=1;
    	line(585,15,15,585); 
    }

    if(pos[1]===2 && pos[2]===2 && pos[3]===2)
    {
    	vencedor=2;
    	line(15,100,585,100); 
    }
    else if(pos[4]===2 && pos[5]===2 && pos[6]===2)
    {
    	vencedor=2;
    	line(15,300,585,300); 
    }
    else if(pos[7]===2 && pos[8]===2 && pos[9]===2)
    {
    	vencedor=2;
    	line(15,500,585,500); 
    }
    else if(pos[1]===2 && pos[4]===2 && pos[7]===2)
    {
    	vencedor=2;
    	line(100,15,100,585); 
    }
    else if(pos[2]===2 && pos[5]===2 && pos[8]===2)
    {
    	vencedor=2;
    	line(300,15,300,585); 
    }
    else if(pos[3]===2 && pos[6]===2 && pos[9]===2)
    {
    	vencedor=2;
    	line(500,15,500,585); 
    }
    else if(pos[1]===2 && pos[5]===2 && pos[9]===2)
    {
    	vencedor=2;
    	line(15,15,585,585); 
    }
    else if(pos[3]===2 && pos[5]===2 && pos[7]===2)
    {
    	vencedor=2;
    	line(585,15,15,585); 
    }

    

    if(vencedor===1)
    {
    	strokeWeight(1);
    	stroke(185);

    	fill(255,255,255,255);

    	textSize(32);

    	text('Vencedor:', 680,310);

    	stroke(255,0,0, 255);
		strokeWeight(15);

    	line(850,225,1000,375);
    	line(850,375,1000,225);
    }
    if(vencedor===2)
    {
    	strokeWeight(1);
    	stroke(185);

    	fill(255,255,255,255);

    	textSize(32);

    	text('Vencedor:', 680,310);

    	fill(0,0,0,0);
    	stroke(0, 0,255, 255);
		strokeWeight(15);

    	circle(925,300,150);
    }
    if(vencedor===3)
    {
    	strokeWeight(1);
    	stroke(185);

    	fill(255,255,255,255);

    	textSize(40);

    	text('Velha!!', 780,310);
    }

    if(vencedor!==0)
    {
    	strokeWeight(2);
    	stroke(255,255,255,255);
    	fill(184,134,11,255);

    	rect(800,450,230,75,25,25,25,25);

    	if(mouseX>800 && mouseX<1030 && mouseY>450 && mouseY<525)
    	{
    		strokeWeight(2);
    		stroke(255,255,255,255);
    		fill(212,154,13,123);

    		rect(800,450,230,75,25,25,25,25);
    	}

    	strokeWeight(1);
    	stroke(0,0,0,255);
    	fill(0,0,0,255);

    	textSize(40);

    	text('Reiniciar', 838,500);
    }

    if(i===true && vencedor===1)
    {
    	xis++;
    	i=false;
    }
    if(i===true && vencedor===2)
    {
    	bolinha++;
    	i=false;
    }

    strokeWeight(1);
   	stroke(255,255,255,255);
    fill(255,255,255,255);


    textSize(25);

    text('Placar', 1025,50);

    text('X', 1052,94);

    textSize(40);

    text(+bolinha,1000,100);
    text(+xis,1127,100);

    stroke(255,0,0, 255);
	strokeWeight(5);

    line(1100,75,1120,95);
    line(1100,95,1120,75);

    stroke(0,0,255,255);
    fill(0,0,0,0);

    circle(984,85,20);

}

function mouseClicked() {
	if(vencedor===0 && k!==0)
	{
		if(mouseX<200 && mouseY<200 && mouseY>15 && mouseX>15 && pos[1]===0)
		{
			posi=1;
		}
		if(mouseX>200 && mouseX<400 && mouseY<200 && mouseY>15 && pos[2]===0)
		{
			posi=2;
		}
		if(mouseX>400 && mouseY<200 && mouseY>15 && mouseX<585 && pos[3]===0)
		{
			posi=3;
		}
		if(mouseX<200 && mouseY>200 && mouseY<400 && mouseX>15 && pos[4]===0)
		{
			posi=4;
		}
		if(mouseX>200 && mouseX<400 && mouseY>200 && mouseY<400 && pos[5]===0)
		{
			posi=5;
		}
		if(mouseX>400 && mouseY>200 && mouseY<400 && mouseX<585 && pos[6]===0)
		{
			posi=6;
		}
		if(mouseY>400 && mouseX<200 && mouseX>15 && mouseY<585 && pos[7]===0)
		{
			posi=7;
		}
		if(mouseY>400 && mouseX>200 && mouseX<400 && mouseY<585 && pos[8]===0)
		{
			posi=8;
		}
    	if(mouseY>400 && mouseX>400 && mouseX<585 && mouseY<585	&& pos[9]===0)
    	{
    		posi=9;
    	}
	}
	
	if(mouseX>800 && mouseX<1030 && mouseY>450 && mouseY<525 && vencedor!==0)
    {
    	k=0;
   		pos=[0,0,0,0,0,0,0,0,0,0];

    	posi=0;

    	vencedor=0;

    	i=true;
    }
	

	if(mouseX>843 && mouseX<903 && mouseY>60 && mouseY<115 && k===0)
	{
		k=random([1,2]);
	}
}