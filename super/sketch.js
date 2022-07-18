var pos1=[];
var pos2=[];
var pos3=[];

var pos4=[];
var pos5=[];
var pos6=[];

var pos7=[];
var pos8=[];
var pos9=[];

var vez=0; //vez de quem
var res=0; //restricao de posicao
var vencedor=0;
var escolher=0;

var xis=0;
var bolinha=0;

let i=true;
var made=0;
var made2=0;

var vezA=0;
var tempor=0;
var tBase=25000;
var trest=tBase;
let cT=true;

function setup() {
    // put setup code here
    createCanvas(1200,600);

    frameRate(120);

    pos1=[0,0,0,0,0,0,0,0,0,0];
    pos2=[0,0,0,0,0,0,0,0,0,0];
    pos3=[0,0,0,0,0,0,0,0,0,0];
    
    pos4=[0,0,0,0,0,0,0,0,0,0];
    pos5=[0,0,0,0,0,0,0,0,0,0];
    pos6=[0,0,0,0,0,0,0,0,0,0];

    pos7=[0,0,0,0,0,0,0,0,0,0];
    pos8=[0,0,0,0,0,0,0,0,0,0];
    pos9=[0,0,0,0,0,0,0,0,0,0];
	   
}

function draw() {
	// put drawing code here
	
	
    ajustares();

	verificaMiniJogos();
	
	background(0);

	tempoRestante();
   												//QUADRADOS MOUSE
   	
   	stroke(0,255);
   	strokeWeight(1);
   	fill(255,60);
   												//POS1
   	if(vencedor==0 && vez!=0)
   	{
   		if(posm()==11 && pos1[0]==0 && pos1[1]==0 && (res==1 || res==0))
   		{
   				rect(30,30,52,52,5,0,0,0);
   		}
   		else if(posm()==12 && pos1[0]==0 && pos1[2]==0 &&(res==1 || res==0))
   		{
   			rect(82,30,52,52,0,0,0,0);
   		}
   		else if(posm()==13 && pos1[0]==0 && pos1[3]==0 &&(res==1 || res==0))
   		{
   			rect(134,30,52,52,0,5,0,0);
   		}

   		else if(posm()==14 && pos1[0]==0 && pos1[4]==0 &&(res==1 || res==0))
   		{
   				rect(30,82,52,52,0,0,0,0);
   		}
   		else if(posm()==15 && pos1[0]==0 && pos1[5]==0 &&(res==1 || res==0))
   		{
   			rect(82,82,52,52,0,0,0,0);
   		}
   		else if(posm()==16 && pos1[0]==0 && pos1[6]==0 &&(res==1 || res==0))
   		{
   			rect(134,82,52,52,0,0,0,0);
   		}

   		else if(posm()==17 && pos1[0]==0 && pos1[7]==0 &&(res==1 || res==0))
   		{
   			rect(30,134,52,52,0,0,0,5);
   		}
   		else if(posm()==18 && pos1[0]==0 && pos1[8]==0 &&(res==1 || res==0))
   		{
   			rect(82,134,52,52,0,0,0,0);
   		}
   		else if(posm()==19 && pos1[0]==0 && pos1[9]==0 &&(res==1 || res==0))
   		{
   			rect(134,134,52,52,0,0,5,0);
   		}
   														//POS2
   		else if(posm()==21 && pos2[0]==0 && pos2[1]==0 &&(res==2 || res==0))
   		{
   			rect(215,30,52,52,5,0,0,0);
   		}
   		else if(posm()==22 && pos2[0]==0 && pos2[2]==0 &&(res==2 || res==0))
   		{
   			rect(267,30,52,52,0,0,0,0);
   		}
   		else if(posm()==23 && pos2[0]==0 && pos2[3]==0 &&(res==2 || res==0))
   		{
   			rect(319,30,52,52,0,5,0,0);
   		}
	
   		else if(posm()==24 && pos2[0]==0 && pos2[4]==0 &&(res==2 || res==0))
   		{
   			rect(215,82,52,52,0,0,0,0);
   		}
   		else if(posm()==25 && pos2[0]==0 && pos2[5]==0 &&(res==2 || res==0))
   		{
   			rect(267,82,52,52,0,0,0,0);
   		}
   		else if(posm()==26 && pos2[0]==0 && pos2[6]==0 &&(res==2 || res==0))
   		{
   			rect(319,82,52,52,0,0,0,0);
   		}
	
   		else if(posm()==27 && pos2[0]==0 && pos2[7]==0 &&(res==2 || res==0))
   		{
   			rect(215,134,52,52,0,0,0,5);
   		}
   		else if(posm()==28 && pos2[0]==0 && pos2[8]==0 &&(res==2 || res==0))
   		{
   			rect(267,134,52,52,0,0,0,0);
   		}
   		else if(posm()==29 && pos2[0]==0 && pos2[9]==0 &&(res==2 || res==0))
   		{
   			rect(319,134,52,52,0,0,5,0);
   		}
   													//POS3
   		else if(posm()==31 && pos3[0]==0 && pos3[1]==0 &&(res==3 || res==0))
   		{
   			rect(400,30,52,52,5,0,0,0);
   		}
   		else if(posm()==32 && pos3[0]==0 && pos3[2]==0 &&(res==3 || res==0))
   		{
   			rect(452,30,52,52,0,0,0,0);
   		}
   		else if(posm()==33 && pos3[0]==0 && pos3[3]==0 &&(res==3 || res==0))
   		{
   			rect(504,30,52,52,0,5,0,0);
   		}
	
   		else if(posm()==34 && pos3[0]==0 && pos3[4]==0 &&(res==3 || res==0))
   		{
   			rect(400,82,52,52,0,0,0,0);
   		}
   		else if(posm()==35 && pos3[0]==0 && pos3[5]==0 &&(res==3 || res==0))
   		{
   			rect(452,82,52,52,0,0,0,0);
   		}
   		else if(posm()==36 && pos3[0]==0 && pos3[6]==0 &&(res==3 || res==0))
   		{
   			rect(504,82,52,52,0,0,0,0);
   		}
	
   		else if(posm()==37 && pos3[0]==0 && pos3[7]==0 &&(res==3 || res==0))
   		{
   			rect(400,134,52,52,0,0,0,5);
   		}
   		else if(posm()==38 && pos3[0]==0 && pos3[8]==0 &&(res==3 || res==0))
   		{
   			rect(452,134,52,52,0,0,0,0);
   		}
   		else if(posm()==39 && pos3[0]==0 && pos3[9]==0 &&(res==3 || res==0))
   		{
   			rect(504,134,52,52,0,0,5,0);
   		}
   													//POS4
   		else if(posm()==41 && pos4[0]==0 && pos4[1]==0 &&(res==4 || res==0))
   		{
   			rect(30,215,52,52,5,0,0,0);
   		}
   		else if(posm()==42 && pos4[0]==0 && pos4[2]==0 &&(res==4 || res==0))
   		{
   			rect(82,215,52,52,0,0,0,0);
   		}
   		else if(posm()==43 && pos4[0]==0 && pos4[3]==0 &&(res==4 || res==0))
   		{
   			rect(134,215,52,52,0,5,0,0);
   		}
	
   		else if(posm()==44 && pos4[0]==0 && pos4[4]==0 &&(res==4 || res==0))
   		{
   			rect(30,267,52,52,0,0,0,0);
   		}
   		else if(posm()==45 && pos4[0]==0 && pos4[5]==0 &&(res==4 || res==0))
   		{
   			rect(82,267,52,52,0,0,0,0);
   		}
   		else if(posm()==46 && pos4[0]==0 && pos4[6]==0 &&(res==4 || res==0))
   		{
   			rect(134,267,52,52,0,0,0,0);
   		}
	
   		else if(posm()==47 && pos4[0]==0 && pos4[7]==0 &&(res==4 || res==0))
   		{
   			rect(30,319,52,52,0,0,0,5);
   		}
   		else if(posm()==48 && pos4[0]==0 && pos4[8]==0 &&(res==4 || res==0))
   		{
   			rect(82,319,52,52,0,0,0,0);
   		}
   		else if(posm()==49 && pos4[0]==0 && pos4[9]==0 &&(res==4 || res==0))
   		{
   			rect(134,319,52,52,0,0,5,0);
   		}
   													//POS5
   		else if(posm()==51 && pos5[0]==0 && pos5[1]==0 && (res==5 || res==0))
   		{
   			rect(215,215,52,52,5,0,0,0);
   		}
   		else if(posm()==52 && pos5[0]==0 && pos5[2]==0 && (res==5 || res==0))
   		{
   			rect(267,215,52,52,0,0,0,0);
   		}
   		else if(posm()==53 && pos5[0]==0 && pos5[3]==0 && (res==5 || res==0))
   		{
   			rect(319,215,52,52,0,5,0,0);
   		}
	
   		else if(posm()==54 && pos5[0]==0 && pos5[4]==0 && (res==5 || res==0))
   		{
   			rect(215,267,52,52,0,0,0,0);
   		}
   		else if(posm()==55 && pos5[0]==0 && pos5[5]==0 && (res==5 || res==0))
   		{
   			rect(267,267,52,52,0,0,0,0);
   		}
   		else if(posm()==56 && pos5[0]==0 && pos5[6]==0 && (res==5 || res==0))
   		{
   			rect(319,267,52,52,0,0,0,0);
   		}
	
   		else if(posm()==57 && pos5[0]==0 && pos5[7]==0 && (res==5 || res==0))
   		{
   			rect(215,319,52,52,0,0,0,5);
   		}
   		else if(posm()==58 && pos5[0]==0 && pos5[8]==0 && (res==5 || res==0))
   		{
   			rect(267,319,52,52,0,0,0,0);
   		}
   		else if(posm()==59 && pos5[0]==0 && pos5[9]==0 && (res==5 || res==0))
   		{
   			rect(319,319,52,52,0,0,5,0);
   		}
   													//POS6
   		else if(posm()==61 && pos6[0]==0 && pos6[1]==0 &&(res==6 || res==0))
   		{
   			rect(400,215,52,52,5,0,0,0);
   		}
   		else if(posm()==62 && pos6[0]==0 && pos6[2]==0 &&(res==6 || res==0))
   		{
   			rect(452,215,52,52,0,0,0,0);
   		}
   		else if(posm()==63 && pos6[0]==0 && pos6[3]==0 &&(res==6 || res==0))
   		{
   			rect(504,215,52,52,0,5,0,0);
   		}
	
   		else if(posm()==64 && pos6[0]==0 && pos6[4]==0 &&(res==6 || res==0))
   		{
   			rect(400,267,52,52,0,0,0,0);
   		}
   		else if(posm()==65 && pos6[0]==0 && pos6[5]==0 &&(res==6 || res==0))
   		{
   			rect(452,267,52,52,0,0,0,0);
   		}
   		else if(posm()==66 && pos6[0]==0 && pos6[6]==0 &&(res==6 || res==0))
   		{
   			rect(504,267,52,52,0,0,0,0);
   		}
	
   		else if(posm()==67 && pos6[0]==0 && pos6[7]==0 &&(res==6 || res==0))
   		{
   			rect(400,319,52,52,0,0,0,5);
   		}
   		else if(posm()==68 && pos6[0]==0 && pos6[8]==0 &&(res==6 || res==0))
   		{
   			rect(452,319,52,52,0,0,0,0);
   		}
   		else if(posm()==69 && pos6[0]==0 && pos6[9]==0 &&(res==6 || res==0))
   		{
   			rect(504,319,52,52,0,0,5,0);
   		}
   													//POS7
   		else if(posm()==71 && pos7[0]==0 && pos7[1]==0 &&(res==7 || res==0))
   		{
   			rect(30,400,52,52,5,0,0,0);
   		}
   		else if(posm()==72 && pos7[0]==0 && pos7[2]==0 &&(res==7 || res==0))
   		{
   			rect(82,400,52,52,0,0,0,0);
   		}
   		else if(posm()==73 && pos7[0]==0 && pos7[3]==0 &&(res==7 || res==0))
   		{
   			rect(134,400,52,52,0,5,0,0);
   		}
	
   		else if(posm()==74 && pos7[0]==0 && pos7[4]==0 &&(res==7 || res==0))
   		{
   			rect(30,452,52,52,0,0,0,0);
   		}
   		else if(posm()==75 && pos7[0]==0 && pos7[5]==0 &&(res==7 || res==0))
   		{
   			rect(82,452,52,52,0,0,0,0);
   		}
   		else if(posm()==76 && pos7[0]==0 && pos7[6]==0 &&(res==7 || res==0))
   		{
   			rect(134,452,52,52,0,0,0,0);
   		}
	
   		else if(posm()==77 && pos7[0]==0 && pos7[7]==0 &&(res==7 || res==0))
   		{
   			rect(30,504,52,52,0,0,0,5);
   		}
   		else if(posm()==78 && pos7[0]==0 && pos7[8]==0 &&(res==7 || res==0))
   		{
   			rect(82,504,52,52,0,0,0,0);
   		}
   		else if(posm()==79 && pos7[0]==0 && pos7[9]==0 &&(res==7 || res==0))
   		{
   			rect(134,504,52,52,0,0,5,0);
   		}
   													//POS8
   		else if(posm()==81 && pos8[0]==0 && pos8[1]==0 &&(res==8 || res==0))
   		{
   			rect(215,400,52,52,5,0,0,0);
   		}
   		else if(posm()==82 && pos8[0]==0 && pos8[2]==0 &&(res==8 || res==0))
   		{
   			rect(267,400,52,52,0,0,0,0);
   		}
   		else if(posm()==83 && pos8[0]==0 && pos8[3]==0 &&(res==8 || res==0))
   		{
   			rect(319,400,52,52,0,5,0,0);
   		}
	
   		else if(posm()==84 && pos8[0]==0 && pos8[4]==0 &&(res==8 || res==0))
   		{
   			rect(215,452,52,52,0,0,0,0);
   		}
   		else if(posm()==85 && pos8[0]==0 && pos8[5]==0 &&(res==8 || res==0))
   		{
   			rect(267,452,52,52,0,0,0,0);
   		}
   		else if(posm()==86 && pos8[0]==0 && pos8[6]==0 &&(res==8 || res==0))
   		{
   			rect(319,452,52,52,0,0,0,0);
   		}
	
   		else if(posm()==87 && pos8[0]==0 && pos8[7]==0 &&(res==8 || res==0))
   		{
   			rect(215,504,52,52,0,0,0,5);
   		}
   		else if(posm()==88 && pos8[0]==0 && pos8[8]==0 &&(res==8 || res==0))
   		{
   			rect(267,504,52,52,0,0,0,0);
   		}
   		else if(posm()==89 && pos8[0]==0 && pos8[9]==0 &&(res==8 || res==0))
   		{
   			rect(319,504,52,52,0,0,5,0);
   		}
   													//POS9
   		else if(posm()==91 && pos9[0]==0 && pos9[1]==0 &&(res==9 || res==0))
   		{
   			rect(400,400,52,52,5,0,0,0);
   		}
   		else if(posm()==92 && pos9[0]==0 && pos9[2]==0 &&(res==9 || res==0))
   		{
   			rect(452,400,52,52,0,0,0,0);
   		}
   		else if(posm()==93 && pos9[0]==0 && pos9[3]==0 &&(res==9 || res==0))
   		{
   			rect(504,400,52,52,0,5,0,0);
   		}
	
   		else if(posm()==94 && pos9[0]==0 && pos9[4]==0 &&(res==9 || res==0))
   		{
   			rect(400,452,52,52,0,0,0,0);
   		}
   		else if(posm()==95 && pos9[0]==0 && pos9[5]==0 &&(res==9 || res==0))
   		{
   			rect(452,452,52,52,0,0,0,0);
   		}
   		else if(posm()==96 && pos9[0]==0 && pos9[6]==0 &&(res==9 || res==0))
   		{
   			rect(504,452,52,52,0,0,0,0);
   		}
	
   		else if(posm()==97 && pos9[0]==0 && pos9[7]==0 &&(res==9 || res==0))
   		{
   			rect(400,504,52,52,0,0,0,5);
   		}
   		else if(posm()==98 && pos9[0]==0 && pos9[8]==0 &&(res==9 || res==0))
   		{
   			rect(452,504,52,52,0,0,0,0);
   		}
   		else if(posm()==99 && pos9[0]==0 && pos9[9]==0 &&(res==9 || res==0))
   		{
   			rect(504,504,52,52,0,0,5,0);
   		}
   	}

   	noFill();

    stroke(255,255,0,255);
	strokeWeight(8);

    line(200,15,200,570);
    line(385,15,385,570);
    line(15,200,570,200);
    line(15,385,570,385);

    //pos1

    if(pos1[0]==0)
    {
    	stroke(150,75,0,255);
    	strokeWeight(4);
    
    	line(30,82,186,82);
    	line(82,30,82,186);
    	line(134,30,134,186);
    	line(30,134,186,134);
	}
	else if(pos1[0]==1)
	{	
		stroke(255,0,0, 255);
		strokeWeight(15);

		line(15+25,15+25,200-24,200-24);
    	line(15+25,200-24,200-24,15+25);

	}
	else if(pos1[0]==2)
	{
		stroke(0, 0,255, 255);
		strokeWeight(15);

		circle(15+93,15+93,136);
	}
	else
	{

	}

    //pos2

    if(pos2[0]==0)
    {
    	stroke(150,75,0,255);
    	strokeWeight(4);
    
    	line(215,82,371,82);
    	line(215,134,371,134);
    	line(267,30,267,186);
    	line(319,30,319,186);
	}
	else if(pos2[0]==1)
	{	
		stroke(255,0,0, 255);
		strokeWeight(15);

		line(200+25,15+25,385-24,200-24);
    	line(200+25,200-24,385-24,15+25);	
	}
	else if(pos2[0]==2)
	{
		stroke(0, 0,255, 255);
		strokeWeight(15);

		circle(200+93,15+93,136);
	}
	else
	{

	}
    

    //pos3

    if(pos3[0]==0)
    {
    	stroke(150,75,0,255);
    	strokeWeight(4);
    
    	line(400,82,556,82);
    	line(400,134,556,134);
    	line(452,30,452,186);
    	line(504,30,504,186);
	}
	else if(pos3[0]==1)
	{	
		stroke(255,0,0, 255);
		strokeWeight(15);

		line(385+25,15+25,570-24,200-24);
    	line(385+25,200-24,570-24,15+25);
	}
	else if(pos3[0]==2)
	{
		stroke(0, 0,255, 255);
		strokeWeight(15);

		circle(385+93,15+93,136);
	}
	else
	{

	}
    

    //pos4

    if(pos4[0]==0)
    {
    	stroke(150,75,0,255);
    	strokeWeight(4);
    
    	line(30,267,186,267);
    	line(30,319,186,319);
    	line(82,215,82,371);
    	line(134,215,134,371);
	}
	else if(pos4[0]==1)
	{	
		stroke(255,0,0, 255);
		strokeWeight(15);

		line(15+25,200+25,200-24,385-24);
    	line(15+25,385-24,200-24,200+25);
	}
	else if(pos4[0]==2)
	{
		stroke(0, 0,255, 255);
		strokeWeight(15);

		circle(15+93,200+93,136);
	}
	else
	{

	}
    

    //pos5

    if(pos5[0]==0)
    {
    	stroke(150,75,0,255);
    	strokeWeight(4);
    
    	line(215,267,371,267);
    	line(215,319,371,319);
    	line(267,215,267,371);
    	line(319,215,319,371);
	}
	else if(pos5[0]==1)
	{	
		stroke(255,0,0, 255);
		strokeWeight(15);

		line(200+25,200+25,385-24,385-24);
    	line(200+25,385-24,385-24,200+25);
	}
	else if(pos5[0]==2)
	{
		stroke(0, 0,255, 255);
		strokeWeight(15);

		circle(200+93,200+93,136);
	}
	else
	{

	}
    
    //pos6

    if(pos6[0]==0)
    {
    	stroke(150,75,0,255);
    	strokeWeight(4);
    
    	line(400,267,556,267);
    	line(400,319,556,319);
    	line(452,215,452,371);
    	line(504,215,504,371);
	}
	else if(pos6[0]==1)
	{	
		stroke(255,0,0, 255);
		strokeWeight(15);

		line(385+25,200+25,570-24,385-24);
    	line(385+25,385-24,570-24,200+25);
	}
	else if(pos6[0]==2)
	{
		stroke(0, 0,255, 255);
		strokeWeight(15);

		circle(385+93,200+93,136);
	}
	else
	{

	}

    //pos7

    if(pos7[0]==0)
    {
    	stroke(150,75,0,255);
    	strokeWeight(4);
    
    	line(82,400,82,556);
    	line(134,400,134,556);
    	line(30,452,186,452);
    	line(30,504,186,504);
	}
	else if(pos7[0]==1)
	{	
		stroke(255,0,0, 255);
		strokeWeight(15);

		line(15+25,385+25,200-24,570-24);
    	line(15+25,570-24,200-24,385+25);
	}
	else if(pos7[0]==2)
	{
		stroke(0, 0,255, 255);
		strokeWeight(15);

		circle(15+93,385+93,136);
	}
	else
	{

	}
    
    //pos8

    if(pos8[0]==0)
    {
    	stroke(150,75,0,255);
    	strokeWeight(4);
    
    	line(267,400,267,556);
    	line(319,400,319,556);
    	line(215,452,371,452);
    	line(215,504,371,504);
	}
	else if(pos8[0]==1)
	{	
		stroke(255,0,0, 255);
		strokeWeight(15);

		line(200+25,385+25,385-24,570-24);
    	line(200+25,570-24,385-24,385+25);
	}
	else if(pos8[0]==2)
	{
		stroke(0, 0,255, 255);
		strokeWeight(15);

		circle(200+93,385+93,136);
	}
	else
	{

	}
    
    //pos9

    if(pos9[0]==0)
    {
    	stroke(150,75,0,255);
    	strokeWeight(4);
    
    	line(400,452,556,452);
    	line(400,504,556,504);
    	line(452,400,452,556);
    	line(504,400,504,556);
	}
	else if(pos9[0]==1)
	{	
		stroke(255,0,0, 255);
		strokeWeight(15);

		line(385+25,385+25,570-24,570-24);
    	line(385+25,570-24,570-24,385+25);
	}
	else if(pos9[0]==2)
	{
		stroke(0, 0,255, 255);
		strokeWeight(15);

		circle(385+93,385+93,136);
	}
	else
	{

	}

												//QUADRADOS PRO RES

   	strokeWeight(4);
   	stroke(255,250,250,255);

   	if(vencedor==0 && vez!=0)
   	{
   		if((res==1 ||(res==0 && pos1[0]==0)) && vencedor==0)
   		{
   			line(30,82,186,82);
    		line(82,30,82,186);
    		line(134,30,134,186);
    		line(30,134,186,134);
   		}
   		if(res==2 ||(res==0 && pos2[0]==0))
   		{
   			line(215,82,371,82);
    		line(215,134,371,134);
    		line(267,30,267,186);
    		line(319,30,319,186);
   		}
   		if(res==3 ||(res==0 && pos3[0]==0))
   		{
   			line(400,82,556,82);
    		line(400,134,556,134);
    		line(452,30,452,186);
    		line(504,30,504,186);
   		}

   		if(res==4 ||(res==0 && pos4[0]==0))
   		{
   			line(30,267,186,267);
    		line(30,319,186,319);
    		line(82,215,82,371);
    		line(134,215,134,371);
   		}
   		if(res==5 ||(res==0 && pos5[0]==0))
   		{
   			line(215,267,371,267);
    		line(215,319,371,319);
    		line(267,215,267,371);
    		line(319,215,319,371);
   		}
   		if(res==6 ||(res==0 && pos6[0]==0))
   		{
   			line(400,267,556,267);
    		line(400,319,556,319);
    		line(452,215,452,371);
    		line(504,215,504,371);
   		}

   		if(res==7 ||(res==0 && pos7[0]==0))
   		{
   			line(82,400,82,556);
    		line(134,400,134,556);
    		line(30,452,186,452);
    		line(30,504,186,504);
   		}
   		if(res==8 ||(res==0 && pos8[0]==0))
   		{
   			line(267,400,267,556);
    		line(319,400,319,556);
    		line(215,452,371,452);
    		line(215,504,371,504);
   		}
   		if(res==9 ||(res==0 && pos9[0]==0))
   		{
   			line(400,452,556,452);
    		line(400,504,556,504);
    		line(452,400,452,556);
    		line(504,400,504,556);
   		}
   	}


    stroke(255,0,0, 255);
    strokeWeight(5);
                                //  pos1
    if(pos1[1]==1 && pos1[0]==0)
    {
        line(40,40,72,72);
        line(40,72,72,40);
    }
    if(pos1[2]==1 && pos1[0]==0)
    {
        line(92,40,124,72);
        line(92,72,124,40);
        
    }
    if(pos1[3]==1 && pos1[0]==0)
    {
        line(144,40,176,72);
        line(176,40,144,72);
    }
    if(pos1[4]==1 && pos1[0]==0)
    {
        line(40,92,72,124);
        line(72,92,40,124);
    }
    if(pos1[5]==1 && pos1[0]==0)
    {
        line(92,92,124,124);
        line(124,92,92,124);
    }
    if(pos1[6]==1 && pos1[0]==0)
    {
        line(144,92,176,124);
        line(176,92,144,124);
    }
    if(pos1[7]==1 && pos1[0]==0)
    {
        line(40,144,72,176);
        line(72,144,40,176);
    }
    if(pos1[8]==1 && pos1[0]==0)
    {
        line(92,144,124,176);
        line(92,176,124,144);
    }
    if(pos1[9]==1 && pos1[0]==0)
    {
        line(144,144,176,176);
        line(144,176,176,144);
    }
                                // pos2
    if(pos2[1]==1 && pos2[0]==0)
    {
        line(225,40,257,72);
        line(257,40,225,72);
    }
    if(pos2[2]==1 && pos2[0]==0)
    {
        line(277,40,309,72);
        line(309,40,277,72);
    }
    if(pos2[3]==1 && pos2[0]==0)
    {
        line(329,40,361,72);
        line(361,40,329,72);
    }
    if(pos2[4]==1 && pos2[0]==0)
    {
        line(225,92,257,124);
        line(257,92,225,124);
    }
    if(pos2[5]==1 && pos2[0]==0)
    {
        line(277,92,309,124);
        line(309,92,277,124);
    }
    if(pos2[6]==1 && pos2[0]==0)
    {
        line(329,92,361,124);
        line(361,92,329,124);
    }
    if(pos2[7]==1 && pos2[0]==0)
    {
        line(225,144,257,176);
        line(257,144,225,176);
    }
    if(pos2[8]==1 && pos2[0]==0)
    {
        line(277,144,309,176);
        line(309,144,277,176);
    }
    if(pos2[9]==1 && pos2[0]==0)
    {
        line(329,144,361,176);
        line(361,144,329,176);
    }
                                // pos3
    if(pos3[1]==1 && pos3[0]==0)
    {
        line(410,40,442,72);
        line(442,40,410,72);
    }
    if(pos3[2]==1 && pos3[0]==0)
    {
        line(462,40,494,72);
        line(494,40,462,72);
    }
    if(pos3[3]==1 && pos3[0]==0)
    {
        line(514,40,546,72);
        line(546,40,514,72);
    }
    if(pos3[4]==1 && pos3[0]==0)
    {
        line(410,92,442,124);
        line(442,92,410,124);
    }
    if(pos3[5]==1 && pos3[0]==0)
    {
        line(462,92,494,124);
        line(494,92,464,124);
    }
    if(pos3[6]==1 && pos3[0]==0)
    {
        line(514,92,546,124);
        line(546,92,514,124);
    }
    if(pos3[7]==1 && pos3[0]==0)
    {
        line(410,144,442,176);
        line(442,144,410,176);
    }
    if(pos3[8]==1 && pos3[0]==0)
    {
        line(462,144,494,176);
        line(494,144,462,176);
    }
    if(pos3[9]==1 && pos3[0]==0)
    {
        line(514,144,546,176);
        line(546,144,514,176);
    }
                                //  pos4
    if(pos4[1]==1 && pos4[0]==0)
    {
        line(40,225,72,257);
        line(40,257,72,225);
    }
    if(pos4[2]==1 && pos4[0]==0)
    {
        line(92,225,124,257);
        line(124,225,92,257);
    }
    if(pos4[3]==1 && pos4[0]==0)
    {
        line(144,225,176,257);
        line(176,225,144,257);
    }
    if(pos4[4]==1 && pos4[0]==0)
    {
        line(40,277,72,309);
        line(72,277,40,309);
    }
    if(pos4[5]==1 && pos4[0]==0)
    {
        line(92,277,124,309);
        line(124,277,92,309);
    }
    if(pos4[6]==1 && pos4[0]==0)
    {
        line(144,277,176,309);
        line(176,277,144,309);
    }
    if(pos4[7]==1 && pos4[0]==0)
    {
        line(40,329,72,361);
        line(72,329,40,361);
    }
    if(pos4[8]==1 && pos4[0]==0)
    {
        line(92,329,124,361);
        line(124,329,92,361);
    }
    if(pos4[9]==1 && pos4[0]==0)
    {
        line(144,329,176,361);
        line(176,329,144,361);
    }
                                //  pos5
    if(pos5[1]==1 && pos5[0]==0)
    {
        line(225,225,257,257);
        line(257,225,225,257);
    }
    if(pos5[2]==1 && pos5[0]==0)
    {
        line(277,225,309,257);
        line(309,225,277,257);
    }
    if(pos5[3]==1 && pos5[0]==0)
    {
        line(329,225,361,257);
        line(361,225,329,257);
    }
    if(pos5[4]==1 && pos5[0]==0)
    {
        line(225,277,257,309);
        line(257,277,225,309);
    }
    if(pos5[5]==1 && pos5[0]==0)
    {
        line(277,277,309,309);
        line(309,277,277,309);
    }
    if(pos5[6]==1 && pos5[0]==0)
    {
        line(329,277,361,309);
        line(361,277,329,309);
    }
    if(pos5[7]==1 && pos5[0]==0)
    {
        line(225,329,257,361);
        line(257,329,225,361);
    }
    if(pos5[8]==1 && pos5[0]==0)
    {
        line(277,329,309,361);
        line(309,329,277,361);
    }
    if(pos5[9]==1 && pos5[0]==0)
    {
        line(329,329,361,361);
        line(361,329,329,361);
    }
                                //  pos6
    if(pos6[1]==1 && pos6[0]==0)
    {
        line(410,225,442,257);
        line(442,225,410,257);
    }
    if(pos6[2]==1 && pos6[0]==0)
    {
        line(462,225,494,257);
        line(494,225,462,257);
    }
    if(pos6[3]==1 && pos6[0]==0)
    {
        line(514,225,546,257);
        line(546,225,514,257);
    }
    if(pos6[4]==1 && pos6[0]==0)
    {
        line(410,277,442,309);
        line(442,277,410,309);
    }
    if(pos6[5]==1 && pos6[0]==0)
    {
        line(462,277,494,309);
        line(494,277,462,309);
    }
    if(pos6[6]==1 && pos6[0]==0)
    {
        line(514,277,546,309);
        line(546,277,514,309);
    }
    if(pos6[7]==1 && pos6[0]==0)
    {
        line(410,329,442,361);
        line(442,329,410,361);
    }
    if(pos6[8]==1 && pos6[0]==0)
    {
        line(462,329,494,361);
        line(494,329,462,361);
    }
    if(pos6[9]==1 && pos6[0]==0)
    {
        line(514,329,546,361);
        line(546,329,514,361);
    }
                                //  pos7
    if(pos7[1]==1 && pos7[0]==0)
    {
        line(40,410,72,442);
        line(40,442,72,410);
    }
    if(pos7[2]==1 && pos7[0]==0)
    {
        line(92,410,124,442);
        line(124,410,92,442);
    }
    if(pos7[3]==1 && pos7[0]==0)
    {
        line(144,410,176,442);
        line(176,410,144,442);
    }
    if(pos7[4]==1 && pos7[0]==0)
    {
        line(40,462,72,494);
        line(72,462,40,494);
    }
    if(pos7[5]==1 && pos7[0]==0)
    {
        line(92,462,124,494);
        line(124,462,92,494);
    }
    if(pos7[6]==1 && pos7[0]==0)
    {
        line(144,462,176,494);
        line(176,462,144,494);
    }
    if(pos7[7]==1 && pos7[0]==0)
    {
        line(40,514,72,546);
        line(72,514,40,546);
    }
    if(pos7[8]==1 && pos7[0]==0)
    {
        line(92,514,124,546);
        line(124,514,92,546);
    }
    if(pos7[9]==1 && pos7[0]==0)
    {
        line(144,514,176,546);
        line(176,514,144,546);
    }
                                //  pos8
    if(pos8[1]==1 && pos8[0]==0)
    {
        line(225,410,257,442);
        line(225,442,257,410);
    }
    if(pos8[2]==1 && pos8[0]==0)
    {
        line(277,410,309,442);
        line(309,410,277,442);
    }
    if(pos8[3]==1 && pos8[0]==0)
    {
        line(329,410,361,442);
        line(361,410,329,442);
    }
    if(pos8[4]==1 && pos8[0]==0)
    {
        line(225,462,257,494);
        line(257,462,225,494);
    }
    if(pos8[5]==1 && pos8[0]==0)
    {
        line(277,462,309,494);
        line(309,462,277,494);
    }
    if(pos8[6]==1 && pos8[0]==0)
    {
        line(329,462,361,494);
        line(361,462,329,494);
    }
    if(pos8[7]==1 && pos8[0]==0)
    {
        line(225,514,257,546);
        line(257,514,225,546);
    }
    if(pos8[8]==1 && pos8[0]==0)
    {
        line(277,514,309,546);
        line(309,514,277,546);
    }
    if(pos8[9]==1 && pos8[0]==0)
    {
        line(329,514,361,546);
        line(361,514,329,546);
    }
                                //  pos9
    if(pos9[1]==1 && pos9[0]==0)
    {
        line(410,410,442,442);
        line(410,442,442,410);
    }
    if(pos9[2]==1 && pos9[0]==0)
    {
        line(462,410,494,442);
        line(494,410,462,442);
    }
    if(pos9[3]==1 && pos9[0]==0)
    {
        line(514,410,546,442);
        line(546,410,514,442);
    }
    if(pos9[4]==1 && pos9[0]==0)
    {
        line(410,462,442,494);
        line(442,462,410,494);
    }
    if(pos9[5]==1 && pos9[0]==0)
    {
        line(462,462,494,494);
        line(494,462,462,494);
    }
    if(pos9[6]==1 && pos9[0]==0)
    {
        line(514,462,546,494);
        line(546,462,514,494);
    }
    if(pos9[7]==1 && pos9[0]==0)
    {
        line(410,514,442,546);
        line(442,514,410,546);
    }
    if(pos9[8]==1 && pos9[0]==0)
    {
        line(462,514,494,546);
        line(494,514,462,546);
    }
    if(pos9[9]==1 && pos9[0]==0)
    {
        line(514,514,546,546);
        line(546,514,514,546);
    }

    fill(0,0,0,0);
    stroke(0, 0,255, 255);

                                //  pos1
    if(pos1[1]==2 && pos1[0]==0)
    {
    	circle(30+26,30+26,32);
    }
    if(pos1[2]==2 && pos1[0]==0)
    {
        circle(82+26,30+26,32);
    }
    if(pos1[3]==2 && pos1[0]==0)
    {
        circle(134+26,30+26,32);
    }
    if(pos1[4]==2 && pos1[0]==0)
    {
        circle(30+26,82+26,32);
    }
    if(pos1[5]==2 && pos1[0]==0)
    {
        circle(82+26,82+26,32);
    }
    if(pos1[6]==2 && pos1[0]==0)
    {
        circle(134+26,82+26,32);
    }
    if(pos1[7]==2 && pos1[0]==0)
    {
        circle(30+26,134+26,32);
    }
    if(pos1[8]==2 && pos1[0]==0)
    {
        circle(82+26,134+26,32);
    }
    if(pos1[9]==2 && pos1[0]==0)
    {
        circle(134+26,134+26,32);
    }
                                //  pos2
    if(pos2[1]==2 && pos2[0]==0)
    {
    	circle(215+26,30+26,32);
    }
    if(pos2[2]==2 && pos2[0]==0)
    {
        circle(267+26,30+26,32);
    }
    if(pos2[3]==2 && pos2[0]==0)
    {
        circle(319+26,30+26,32);
    }
    if(pos2[4]==2 && pos2[0]==0)
    {
        circle(215+26,82+26,32);
    }
    if(pos2[5]==2 && pos2[0]==0)
    {
        circle(267+26,82+26,32);
    }
    if(pos2[6]==2 && pos2[0]==0)
    {
        circle(319+26,82+26,32);
    }
    if(pos2[7]==2 && pos2[0]==0)
    {
        circle(215+26,134+26,32);
    }
    if(pos2[8]==2 && pos2[0]==0)
    {
        circle(267+26,134+26,32);
    }
    if(pos2[9]==2 && pos2[0]==0)
    {
        circle(319+26,134+26,32);
    }
                                //  pos3
    if(pos3[1]==2 && pos3[0]==0)
    {
    	circle(400+26,30+26,32);
    }
    if(pos3[2]==2 && pos3[0]==0)
    {
        circle(452+26,30+26,32);
    }
    if(pos3[3]==2 && pos3[0]==0)
    {
        circle(504+26,30+26,32);
    }
    if(pos3[4]==2 && pos3[0]==0)
    {
        circle(400+26,82+26,32);
    }
    if(pos3[5]==2 && pos3[0]==0)
    {
        circle(450+26,82+26,32);
    }
    if(pos3[6]==2 && pos3[0]==0)
    {
        circle(504+26,82+26,32);
    }
    if(pos3[7]==2 && pos3[0]==0)
    {
        circle(400+26,134+26,32);
    }
    if(pos3[8]==2 && pos3[0]==0)
    {
        circle(452+26,134+26,32);
    }
    if(pos3[9]==2 && pos3[0]==0)
    {
        circle(504+26,134+26,32);
    }
                                //  pos4
    if(pos4[1]==2 && pos4[0]==0)
    {
    	circle(30+26,215+26,32);
    }
    if(pos4[2]==2 && pos4[0]==0)
    {
        circle(82+26,215+26,32);
    }
    if(pos4[3]==2 && pos4[0]==0)
    {
        circle(134+26,215+26,32);
    }
    if(pos4[4]==2 && pos4[0]==0)
    {
        circle(30+26,267+26,32);
    }
    if(pos4[5]==2 && pos4[0]==0)
    {
        circle(82+26,267+26,32);
    }
    if(pos4[6]==2 && pos4[0]==0)
    {
        circle(134+26,267+26,32);
    }
    if(pos4[7]==2 && pos4[0]==0)
    {
        circle(30+26,319+26,32);
    }
    if(pos4[8]==2 && pos4[0]==0)
    {
        circle(82+26,319+26,32);
    }
    if(pos4[9]==2 && pos4[0]==0)
    {
        circle(134+26,319+26,32);
    }
                                //  pos5
    if(pos5[1]==2 && pos5[0]==0)
    {
    	circle(215+26,215+26,32);
    }
    if(pos5[2]==2 && pos5[0]==0)
    {
        circle(267+26,215+26,32);
    }
    if(pos5[3]==2 && pos5[0]==0)
    {
        circle(319+26,215+26,32);
    }
    if(pos5[4]==2 && pos5[0]==0)
    {
        circle(215+26,267+26,32);
    }
    if(pos5[5]==2 && pos5[0]==0)
    {
        circle(267+26,267+26,32);
    }
    if(pos5[6]==2 && pos5[0]==0)
    {
        circle(319+26,267+26,32);
    }
    if(pos5[7]==2 && pos5[0]==0)
    {
        circle(215+26,319+26,32);
    }
    if(pos5[8]==2 && pos5[0]==0)
    {
        circle(267+26,319+26,32);
    }
    if(pos5[9]==2 && pos5[0]==0)
    {
        circle(319+26,319+26,32);
    }
                                //  pos6
    if(pos6[1]==2 && pos6[0]==0)
    {
    	circle(400+26,215+26,32);
    }
    if(pos6[2]==2 && pos6[0]==0)
    {
        circle(452+26,215+26,32);
    }
    if(pos6[3]==2 && pos6[0]==0)
    {
        circle(504+26,215+26,32);
    }
    if(pos6[4]==2 && pos6[0]==0)
    {
        circle(400+26,267+26,32);
    }
    if(pos6[5]==2 && pos6[0]==0)
    {
        circle(450+26,267+26,32);
    }
    if(pos6[6]==2 && pos6[0]==0)
    {
        circle(504+26,267+26,32);
    }
    if(pos6[7]==2 && pos6[0]==0)
    {
        circle(400+26,319+26,32);
    }
    if(pos6[8]==2 && pos6[0]==0)
    {
        circle(452+26,319+26,32);
    }
    if(pos6[9]==2 && pos6[0]==0)
    {
        circle(504+26,319+26,32);
    }
                                //  pos7
    if(pos7[1]==2 && pos7[0]==0)
    {
    	circle(30+26,400+26,32);
    }
    if(pos7[2]==2 && pos7[0]==0)
    {
        circle(82+26,400+26,32);
    }
    if(pos7[3]==2 && pos7[0]==0)
    {
        circle(134+26,400+26,32);
    }
    if(pos7[4]==2 && pos7[0]==0)
    {
        circle(30+26,452+26,32);
    }
    if(pos7[5]==2 && pos7[0]==0)
    {
        circle(82+26,452+26,32);
    }
    if(pos7[6]==2 && pos7[0]==0)
    {
        circle(134+26,452+26,32);
    }
    if(pos7[7]==2 && pos7[0]==0)
    {
        circle(30+26,504+26,32);
    }
    if(pos7[8]==2 && pos7[0]==0)
    {
        circle(82+26,504+26,32);
    }
    if(pos7[9]==2 && pos7[0]==0)
    {
        circle(134+26,504+26,32);
    }
                                //  pos8
    if(pos8[1]==2 && pos8[0]==0)
    {
    	circle(215+26,400+26,32);
    }
    if(pos8[2]==2 && pos8[0]==0)
    {
        circle(267+26,400+26,32);
    }
    if(pos8[3]==2 && pos8[0]==0)
    {
        circle(319+26,400+26,32);
    }
    if(pos8[4]==2 && pos8[0]==0)
    {
        circle(215+26,452+26,32);
    }
    if(pos8[5]==2 && pos8[0]==0)
    {
        circle(267+26,452+26,32);
    }
    if(pos8[6]==2 && pos8[0]==0)
    {
        circle(319+26,452+26,32);
    }
    if(pos8[7]==2 && pos8[0]==0)
    {
        circle(215+26,504+26,32);
    }
    if(pos8[8]==2 && pos8[0]==0)
    {
        circle(267+26,504+26,32);
    }
    if(pos8[9]==2 && pos8[0]==0)
    {
        circle(319+26,504+26,32);
    }
                                //  pos9
    if(pos9[1]==2 && pos9[0]==0)
    {
    	circle(400+26,400+26,32);
    }
    if(pos9[2]==2 && pos9[0]==0)
    {
        circle(452+26,400+26,32);
    }
    if(pos9[3]==2 && pos9[0]==0)
    {
        circle(504+26,400+26,32);
    }
    if(pos9[4]==2 && pos9[0]==0)
    {
        circle(400+26,452+26,32);
    }
    if(pos9[5]==2 && pos9[0]==0)
    {
        circle(450+26,452+26,32);
    }
    if(pos9[6]==2 && pos9[0]==0)
    {
        circle(504+26,452+26,32);
    }
    if(pos9[7]==2 && pos9[0]==0)
    {
        circle(400+26,504+26,32);
    }
    if(pos9[8]==2 && pos9[0]==0)
    {
        circle(452+26,504+26,32);
    }
    if(pos9[9]==2 && pos9[0]==0)
    {
        circle(504+26,504+26,32);
    }

    										// VERIFICA JOGO

   	strokeWeight(17);
    stroke(255,255,0,185);

    if(pos1[0]!=0 && pos2[0]!=0 && pos3[0]!=0 && pos4[0]!=0 && pos5[0]!=0 && pos6[0]!=0 && pos7[0]!=0 && pos8[0]!=0 && pos9[0]!=0)
	{
		vencedor=3;
	}

	if(pos1[0]==1 && pos2[0]==1 && pos3[0]==1)
	{
		vencedor=1;
		line(15,107,570,107);
	}
	if(pos4[0]==1 && pos5[0]==1 && pos6[0]==1)
	{
		vencedor=1;
		line(15,292,570,292);
	}
	if(pos7[0]==1 && pos8[0]==1 && pos9[0]==1)
	{
		vencedor=1;
		line(15,478,570,478);
	}

	if(pos1[0]==1 && pos4[0]==1 && pos7[0]==1)
	{
		vencedor=1;
		line(107,15,107,570);
	}
	if(pos2[0]==1 && pos5[0]==1 && pos8[0]==1)
	{
		vencedor=1;
		line(292,15,292,570);
	}
	if(pos3[0]==1 && pos6[0]==1 && pos9[0]==1)
	{
		vencedor=1;
		line(478,15,478,570);
	}

	if(pos1[0]==1 && pos5[0]==1 && pos9[0]==1)
	{
		vencedor=1;
		line(40,40,545,545)
	}
	if(pos3[0]==1 && pos5[0]==1 && pos7[0]==1)
	{
		vencedor=1;
		line(40,545,545,40);	
	}

	if(pos1[0]==2 && pos2[0]==2 && pos3[0]==2)
	{
		vencedor=2;
		line(15,107,570,107);
	}
	if(pos4[0]==2 && pos5[0]==2 && pos6[0]==2)
	{
		vencedor=2;
		line(15,292,570,292);
	}
	if(pos7[0]==2 && pos8[0]==2 && pos9[0]==2)
	{
		vencedor=2;
		line(15,478,570,478);
	}

	if(pos1[0]==2 && pos4[0]==2 && pos7[0]==2)
	{
		vencedor=2;
		line(107,15,107,570);
	}
	if(pos2[0]==2 && pos5[0]==2 && pos8[0]==2)
	{
		vencedor=2;
		line(292,15,292,570);
	}
	if(pos3[0]==2 && pos6[0]==2 && pos9[0]==2)
	{
		vencedor=2;
		line(478,15,478,570);
	}

	if(pos1[0]==2 && pos5[0]==2 && pos9[0]==2)
	{
		vencedor=2;
		line(40,40,545,545)
	}
	if(pos3[0]==2 && pos5[0]==2 && pos7[0]==2)
	{
		vencedor=2;
		line(40,545,545,40);	
	}

	if(vencedor!=0)
	{
		strokeWeight(5);
		stroke(255,150);
		fill(255,165,0);
		rect(750,425,300,125,150);
		if(posm()==101)
		{
			strokeWeight(5);
			stroke(255,150);
			fill(255,50);
			rect(750,425,300,125,150);
		}
	}
	if(vencedor==0)
	{
		strokeWeight(5);
		stroke(255,150);
		fill(255,120);
		rect(750,425,300,125,150);
	}

	strokeWeight(1);
	stroke(255,255);
	fill(0,255);
	textSize(70);
	textAlign(CENTER, CENTER);
	text("Reinciar", 750+150, 425+125/2);

	if(vencedor==0)
	{
		strokeWeight(1);
		stroke(255,255);
		fill(255,255);
		textSize(40);
		text("Vez:", 675, 110);

		if(vez==1)
		{	
			noFill();
			stroke(255,0,0, 255);
			strokeWeight(15);

			line(710+25,15+25,200+695-24,200-24);
    		line(710+25,200-24,200+695-24,15+25);
		}
		if(vez==2)
		{	
			noFill();
			stroke(0, 0,255, 255);
			strokeWeight(15);

			circle(710+93,15+93,136);
		}
		if(vez==0 && escolher!=1)
		{
			fill(255,215,0,255);
			strokeWeight(2);
			stroke(255,255);
			rect(710+25,12+25,68*2,68,10);
			rect(710+25,87+25,68*2,68,10);
			if(posm()==102)
			{
				fill(255,80);
				strokeWeight(2);
				stroke(0,80);
				rect(710+25,12+25,68*2,68,10);
			}
			if(posm()==103)
			{
				fill(255,80);
				strokeWeight(2);
				stroke(0,80);
				rect(710+25,87+25,68*2,68,10);
			}

			strokeWeight(3);
			stroke(0,255);
			fill(255,255);
			textSize(38);
			text("Sortear", 802, 73);
			strokeWeight(3);
			stroke(0,255);
			fill(255,255);
			textSize(32);
			text("Escolher", 802, 147);
		}
	}
	else if(vencedor==1)
	{
		strokeWeight(1);
		stroke(255,255);
		fill(255,255);
		textSize(40);
		text("Vencedor:", 775, 110);

		noFill();
		stroke(255,0,0, 255);
		strokeWeight(15);

		line(860+25,15+25,350+695-24,200-24);
    	line(860+25,200-24,350+695-24,15+25);
	}
	else if(vencedor==2)
	{
		strokeWeight(1);
		stroke(255,255);
		fill(255,255);
		textSize(40);
		text("Vencedor:", 775, 110);

		noFill();
		stroke(0, 0,255, 255);
		strokeWeight(15);

		circle(860+93,15+93,136);
	}
	else if(vencedor==3)
	{
		strokeWeight(10);
		stroke(255,255);
		fill(0,128,0,255);
		textSize(125);
		text("Velha !!", 850, 110);
	}

	if(i==true && vencedor==1)
    {
    	xis++;
    	i=false;
    }
    if(i==true && vencedor==2)
    {
    	bolinha++;
    	i=false;
    }

    if(escolher==1)
    {
    	if(mouseX>720 && mouseX<720+166 && mouseY>25 && mouseY<25+166)
   		{
   			fill(255,50);
   			stroke(1,0);
   			rect(803-68-15,108-68-15,2*83,2*83,10);
   		}
   		if(posm()==104)
   		{
   			fill(255,50);
   			stroke(1,0);
   			rect(935-15,40-15,2*83,2*83,10);
   		}

    	noFill();
		strokeWeight(5);
		stroke(255,125);
		rect(803-68-15,108-68-15,2*83,2*83,10);
		rect(935-15,40-15,2*83,2*83,10);

    	noFill();
		stroke(0, 0,255, 255);
		strokeWeight(15);

		circle(803,108,136);

		noFill();
		stroke(255,0,0, 255);
		strokeWeight(15);

		line(935,40,1071,176);
   		line(935,176,1071,40);
    }

    strokeWeight(2);
	stroke(255,255);
	fill(255,255);
	textSize(70);
	textAlign(CENTER, CENTER);
	text("Placar\nX", 750+150, 300);

	noFill();
	stroke(0, 0,255, 255);
	strokeWeight(10);

	circle(832,336,60);

	noFill();
	stroke(255,0,0, 255);
	strokeWeight(10);

	line(1008,306,948,366);
   	line(948,306,1008,366);

   	strokeWeight(10);
	stroke(255,255);
	fill(0,0,0, 255);
	textSize(70);
	textAlign(CENTER, CENTER);
	text(bolinha, 750, 343);

	strokeWeight(10);
	stroke(255,255);
	fill(0,0,0, 255);
	textSize(70);
	textAlign(CENTER, CENTER);
	text(xis, 1065, 343);

	if(mouseX>1195 && mouseY<5 && mouseX<1200 && mouseY>0)
	{
		background(0,255);
		if(frameCount-made>60)
		{
			made=frameCount;
			if(made2==2)
			{
				made2=0;
			}
			else if(made2==1)
			{
				made2=2;
			}
			else 
			{
				made2=1;
			}
		}

		strokeWeight(1);
		stroke(255,255);
		fill(255,255);
		textSize(200);
		textAlign(CENTER, CENTER);
		text("Made by:", 600, 150);

		if(made2==0)
		{
			fill(255,255,0,255);
			stroke(255,255,0,255);
			strokeWeight(1);
			textSize(200);

			text("Thiago", 600, 425);
		}
		if(made2==1)
		{
			fill(255,0,0, 255);
			stroke(255,0,0, 255);
			strokeWeight(1);
			textSize(200);
			
			text("HP", 600, 425);
		}
		if(made2==2)
		{
			fill(0, 0,255, 255);
			stroke(0, 0,255, 255);
			strokeWeight(1);
			textSize(200);
			
			text("Jvpo", 600, 425);
		}
	}

	
}

function mouseClicked()
{
	if(vencedor==0 && vez!=0 && (trest<tBase-2500 || !cT))
	{
		if(posm()==11 && pos1[1]==0 && pos1[0]==0 &&(res==0 || res==1))
		{
			pos1[1]=vez;
			if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=1;
		}
		else if(posm()==12 && pos1[2]==0 && pos1[0]==0 &&(res==0 || res==1))
		{
			pos1[2]=vez;
			if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=2;
		}
		else if(posm()==13 && pos1[3]==0 && pos1[0]==0 &&(res==0 || res==1))
		{
			pos1[3]=vez;
			if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=3;
		}
		else if(posm()==14 && pos1[4]==0 && pos1[0]==0 &&(res==0 || res==1))
		{
			pos1[4]=vez;
			if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=4;
		}
		else if(posm()==15 && pos1[5]==0 && pos1[0]==0 &&(res==0 || res==1))
		{
			pos1[5]=vez;
			if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=5;
		}
		else if(posm()==16 && pos1[6]==0 && pos1[0]==0 &&(res==0 || res==1))
		{
			pos1[6]=vez;
			if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=6;
		}
		else if(posm()==17 && pos1[7]==0 && pos1[0]==0 &&(res==0 || res==1))
		{
			pos1[7]=vez;
			if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=7;
		}
		else if(posm()==18 && pos1[8]==0 && pos1[0]==0 &&(res==0 || res==1))
		{
			pos1[8]=vez;
			if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=8;
		}
		else if(posm()==19 && pos1[9]==0 && pos1[0]==0 &&(res==0 || res==1))
		{
			pos1[9]=vez;
			if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=9;
		}
                            //POS2
    	else if(posm()==21 && pos2[1]==0 && pos2[0]==0 &&(res==0 || res==2))
    	{
    	    pos2[1]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=1;
    	}
    	else if(posm()==22 && pos2[2]==0 && pos2[0]==0 &&(res==0 || res==2))
    	{
    	    pos2[2]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=2;
    	}
    	else if(posm()==23 && pos2[3]==0 && pos2[0]==0 &&(res==0 || res==2))
    	{
    	    pos2[3]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=3;
    	}
    	else if(posm()==24 && pos2[4]==0 && pos2[0]==0 &&(res==0 || res==2))
    	{
    	    pos2[4]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=4;
    	}
    	else if(posm()==25 && pos2[5]==0 && pos2[0]==0 &&(res==0 || res==2))
    	{
    	    pos2[5]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=5;
    	}
    	else if(posm()==26 && pos2[6]==0 && pos2[0]==0 &&(res==0 || res==2))
    	{
    	    pos2[6]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=6;
    	}
    	else if(posm()==27 && pos2[7]==0 && pos2[0]==0 &&(res==0 || res==2))
    	{
    	    pos2[7]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=7;
    	}
    	else if(posm()==28 && pos2[8]==0 && pos2[0]==0 &&(res==0 || res==2))
    	{
    	    pos2[8]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=8;
    	}
    	else if(posm()==29 && pos2[9]==0 && pos2[0]==0 &&(res==0 || res==2))
    	{
    	    pos2[9]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=9;
    	}
                            //POS3
    	else if(posm()==31 && pos3[1]==0 && pos3[0]==0 &&(res==0 || res==3))
    	{
    	    pos3[1]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=1;
    	}
    	else if(posm()==32 && pos3[2]==0 && pos3[0]==0 &&(res==0 || res==3))
    	{
    	    pos3[2]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=2;
    	}
    	else if(posm()==33 && pos3[3]==0 && pos3[0]==0 &&(res==0 || res==3))
    	{
    	    pos3[3]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=3;
    	}
    	else if(posm()==34 && pos3[4]==0 && pos3[0]==0 &&(res==0 || res==3))
    	{
    	    pos3[4]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=4;
    	}
    	else if(posm()==35 && pos3[5]==0 && pos3[0]==0 &&(res==0 || res==3))
    	{
    	    pos3[5]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=5;
    	}
    	else if(posm()==36 && pos3[6]==0 && pos3[0]==0 &&(res==0 || res==3))
    	{
    	    pos3[6]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=6;
    	}
    	else if(posm()==37 && pos3[7]==0 && pos3[0]==0 &&(res==0 || res==3))
    	{
    	    pos3[7]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=7;
    	}
    	else if(posm()==38 && pos3[8]==0 && pos3[0]==0 &&(res==0 || res==3))
    	{
    	    pos3[8]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=8;
    	}
    	else if(posm()==39 && pos3[9]==0 && pos3[0]==0 &&(res==0 || res==3))
    	{
    	    pos3[9]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=9;
    	}
                            //POS4
    	else if(posm()==41 && pos4[1]==0 && pos4[0]==0 &&(res==0 || res==4))
    	{
    	    pos4[1]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=1;
    	}
    	else if(posm()==42 && pos4[2]==0 && pos4[0]==0 &&(res==0 || res==4))
    	{
    	    pos4[2]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=2;
    	}
    	else if(posm()==43 && pos4[3]==0 && pos4[0]==0 &&(res==0 || res==4))
    	{
    	    pos4[3]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=3;
    	}
    	else if(posm()==44 && pos4[4]==0 && pos4[0]==0 &&(res==0 || res==4))
    	{
    	    pos4[4]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=4;
    	}
    	else if(posm()==45 && pos4[5]==0 && pos4[0]==0 &&(res==0 || res==4))
    	{
    	    pos4[5]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=5;
    	}
    	else if(posm()==46 && pos4[6]==0 && pos4[0]==0 &&(res==0 || res==4))
    	{
    	    pos4[6]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=6;
    	}
    	else if(posm()==47 && pos4[7]==0 && pos4[0]==0 &&(res==0 || res==4))
    	{
    	    pos4[7]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=7;
    	}
    	else if(posm()==48 && pos4[8]==0 && pos4[0]==0 &&(res==0 || res==4))
    	{
    	    pos4[8]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=8;
    	}
    	else if(posm()==49 && pos4[9]==0 && pos4[0]==0 &&(res==0 || res==4))
    	{
    	    pos4[9]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=9;
    	}
                            //POS5
    	else if(posm()==51 && pos5[1]==0 && pos5[0]==0 &&(res==0 || res==5))
    	{
    	    pos5[1]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=1;
    	}
    	else if(posm()==52 && pos5[2]==0 && pos5[0]==0 &&(res==0 || res==5))
    	{
    	    pos5[2]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=2;
    	}
    	else if(posm()==53 && pos5[3]==0 && pos5[0]==0 &&(res==0 || res==5))
    	{
    	    pos5[3]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=3;
    	}
    	else if(posm()==54 && pos5[4]==0 && pos5[0]==0 &&(res==0 || res==5))
    	{
    	    pos5[4]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=4;
    	}
    	else if(posm()==55 && pos5[5]==0 && pos5[0]==0 &&(res==0 || res==5))
    	{
    	    pos5[5]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=5;
    	}
    	else if(posm()==56 && pos5[6]==0 && pos5[0]==0 &&(res==0 || res==5))
    	{
    	    pos5[6]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=6;
    	}
    	else if(posm()==57 && pos5[7]==0 && pos5[0]==0 &&(res==0 || res==5))
    	{
    	    pos5[7]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=7;
    	}
    	else if(posm()==58 && pos5[8]==0 && pos5[0]==0 &&(res==0 || res==5))
    	{
    	    pos5[8]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=8;
    	}
    	else if(posm()==59 && pos5[9]==0 && pos5[0]==0 &&(res==0 || res==5))
    	{
    	    pos5[9]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=9;
    	}
                            //POS6
    	else if(posm()==61 && pos6[1]==0 && pos6[0]==0 &&(res==0 || res==6))
    	{
    	    pos6[1]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=1;
    	}
    	else if(posm()==62 && pos6[2]==0 && pos6[0]==0 &&(res==0 || res==6))
    	{
    	    pos6[2]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=2;
    	}
    	else if(posm()==63 && pos6[3]==0 && pos6[0]==0 &&(res==0 || res==6))
    	{
    	    pos6[3]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=3;
    	}
    	else if(posm()==64 && pos6[4]==0 && pos6[0]==0 &&(res==0 || res==6))
    	{
    	    pos6[4]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=4;
    	}
    	else if(posm()==65 && pos6[5]==0 && pos6[0]==0 &&(res==0 || res==6))
    	{
    	    pos6[5]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=5;
    	}
    	else if(posm()==66 && pos6[6]==0 && pos6[0]==0 &&(res==0 || res==6))
    	{
    	    pos6[6]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=6;
    	}
    	else if(posm()==67 && pos6[7]==0 && pos6[0]==0 &&(res==0 || res==6))
    	{
    	    pos6[7]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=7;
    	}
    	else if(posm()==68 && pos6[8]==0 && pos6[0]==0 &&(res==0 || res==6))
    	{
    	    pos6[8]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=8;
    	}
    	else if(posm()==69 && pos6[9]==0 && pos6[0]==0 &&(res==0 || res==6))
    	{
    	    pos6[9]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=9;
    	}
                            //POS7
    	else if(posm()==71 && pos7[1]==0 && pos7[0]==0 &&(res==0 || res==7))
    	{
    	    pos7[1]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=1;
    	}
    	else if(posm()==72 && pos7[2]==0 && pos7[0]==0 &&(res==0 || res==7))
    	{
    	    pos7[2]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=2;
    	}
    	else if(posm()==73 && pos7[3]==0 && pos7[0]==0 &&(res==0 || res==7))
    	{
    	    pos7[3]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=3;
    	}
    	else if(posm()==74 && pos7[4]==0 && pos7[0]==0 &&(res==0 || res==7))
    	{
    	    pos7[4]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=4;
    	}
    	else if(posm()==75 && pos7[5]==0 && pos7[0]==0 &&(res==0 || res==7))
    	{
    	    pos7[5]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=5;
    	}
    	else if(posm()==76 && pos7[6]==0 && pos7[0]==0 &&(res==0 || res==7))
    	{
    	    pos7[6]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=6;
    	}
    	else if(posm()==77 && pos7[7]==0 && pos7[0]==0 &&(res==0 || res==7))
    	{
    	    pos7[7]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=7;
    	}
    	else if(posm()==78 && pos7[8]==0 && pos7[0]==0 &&(res==0 || res==7))
    	{
    	    pos7[8]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=8;
    	}
    	else if(posm()==79 && pos7[9]==0 && pos7[0]==0 &&(res==0 || res==7))
    	{
    	    pos7[9]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=9;
    	}
                            //POS8
    	else if(posm()==81 && pos8[1]==0 && pos8[0]==0 &&(res==0 || res==8))
    	{
    	    pos8[1]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=1;
    	}
    	else if(posm()==82 && pos8[2]==0 && pos8[0]==0 &&(res==0 || res==8))
    	{
    	    pos8[2]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=2;
    	}
    	else if(posm()==83 && pos8[3]==0 && pos8[0]==0 &&(res==0 || res==8))
    	{
    	    pos8[3]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=3;
    	}
    	else if(posm()==84 && pos8[4]==0 && pos8[0]==0 &&(res==0 || res==8))
    	{
    	    pos8[4]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=4;
    	}
    	else if(posm()==85 && pos8[5]==0 && pos8[0]==0 &&(res==0 || res==8))
    	{
    	    pos8[5]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=5;
    	}
    	else if(posm()==86 && pos8[6]==0 && pos8[0]==0 &&(res==0 || res==8))
   		{
        pos8[6]=vez;
        if(vez==1){vez=2;}
        else{vez=1;}
        res=6;
    	}
    	else if(posm()==87 && pos8[7]==0 && pos8[0]==0 &&(res==0 || res==8))
    	{
    	    pos8[7]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=7;
    	}
    	else if(posm()==88 && pos8[8]==0 && pos8[0]==0 &&(res==0 || res==8))
    	{
    	    pos8[8]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=8;
    	}
    	else if(posm()==89 && pos8[9]==0 && pos8[0]==0 &&(res==0 || res==8))
    	{
    	    pos8[9]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=9;
    	}
    	                        //POS9
    	else if(posm()==91 && pos9[1]==0 && pos9[0]==0 &&(res==0 || res==9))
    	{
    	    pos9[1]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=1;
    	}
    	else if(posm()==92 && pos9[2]==0 && pos9[0]==0 &&(res==0 || res==9))
    	{
    	    pos9[2]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=2;
    	}
    	else if(posm()==93 && pos9[3]==0 && pos9[0]==0 &&(res==0 || res==9))
    	{
    	    pos9[3]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=3;
    	}
    	else if(posm()==94 && pos9[4]==0 && pos9[0]==0 &&(res==0 || res==9))
    	{
    	    pos9[4]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=4;
    	}
    	else if(posm()==95 && pos9[5]==0 && pos9[0]==0 &&(res==0 || res==9))
    	{
    	    pos9[5]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=5;
    	}
    	else if(posm()==96 && pos9[6]==0 && pos9[0]==0 &&(res==0 || res==9))
    	{
    	    pos9[6]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=6;
    	}
    	else if(posm()==97 && pos9[7]==0 && pos9[0]==0 &&(res==0 || res==9))
    	{
    	    pos9[7]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=7;
    	}
    	else if(posm()==98 && pos9[8]==0 && pos9[0]==0 &&(res==0 || res==9))
    	{
    	    pos9[8]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=8;
    	}
    	else if(posm()==99 && pos9[9]==0 && pos9[0]==0 &&(res==0 || res==9))
    	{
    	    pos9[9]=vez;
    	    if(vez==1){vez=2;}
    	    else{vez=1;}
    	    res=9;
    	}
    }

    if(posm()==101 && vencedor!=0)
    {
    	pos1=[0,0,0,0,0,0,0,0,0,0];
    	pos2=[0,0,0,0,0,0,0,0,0,0];
    	pos3=[0,0,0,0,0,0,0,0,0,0];
    
    	pos4=[0,0,0,0,0,0,0,0,0,0];
    	pos5=[0,0,0,0,0,0,0,0,0,0];
    	pos6=[0,0,0,0,0,0,0,0,0,0];

    	pos7=[0,0,0,0,0,0,0,0,0,0];
    	pos8=[0,0,0,0,0,0,0,0,0,0];
    	pos9=[0,0,0,0,0,0,0,0,0,0];

    	vez=0;
    	res=0;
    	vencedor=0;

    	i=true;
    }

    if(mouseX>720 && mouseX<720+166 && mouseY>25 && mouseY<25+166 && escolher==1)
   	{
   		vez=2;
   		escolher=0;
   	}
   	if(posm()==104 && escolher==1)
   	{
   		vez=1;
   		escolher=0;
   	}

    if(posm()==102 && vez==0 && escolher!=1)
    {
    	vez=random([1,2]);
    }
    if(posm()==103 && vez==0 && escolher!=1)
    {
    	escolher=1;
    }
	if(posm()==105 && vencedor==0 && vez==0)
	{
		cT=!cT;
	}
    
}	
	
function posm()
{
                                                                    //  POS1
	if(mouseX>30 && mouseX<82 && mouseY>30 && mouseY<82)
	{
		return 11;
	}
	else if(mouseX>82 && mouseX<134 && mouseY>30 && mouseY<82)
	{
		return 12;
	}
	else if(mouseX>134 && mouseX<186 && mouseY>30 && mouseY<82)
	{
		return 13;
	}
	else if(mouseX>30 && mouseX<82 && mouseY>82 && mouseY<134)
	{
		return 14;
	}
	else if(mouseX>82 && mouseX<134 && mouseY>82 && mouseY<134)
	{
		return 15;
	}
	else if(mouseX>134 && mouseX<186 && mouseY>82 && mouseY<134)
	{
		return 16;
	}
	else if(mouseX>30 && mouseX<82 && mouseY>134 && mouseY<186)
	{
		return 17;
	}
	else if(mouseX>82 && mouseX<134 && mouseY>134 && mouseY<186)
	{
		return 18;
	}
	else if(mouseX>134 && mouseX<186 && mouseY>134 && mouseY<186)
	{
		return 19;
	}
                                                                    //  POS2
    else if(mouseX>215 && mouseX<267 && mouseY>30 && mouseY<82)
    {
        return 21;
    }
    else if(mouseX>267 && mouseX<319 && mouseY>30 && mouseY<82)
    {
        return 22;
    }
    else if(mouseX>319 && mouseX<371 && mouseY>30 && mouseY<82)
    {
        return 23;
    }
    else if(mouseX>215 && mouseX<267 && mouseY>82 && mouseY<134)
    {
        return 24;
    }
    else if(mouseX>267 && mouseX<319 && mouseY>82 && mouseY<134)
    {
        return 25;
    }
    else if(mouseX>319 && mouseX<371 && mouseY>82 && mouseY<134)
    {
        return 26;
    }
    else if(mouseX>215 && mouseX<267 && mouseY>134 && mouseY<186)
    {
        return 27;
    }
    else if(mouseX>267 && mouseX<319 && mouseY>134 && mouseY<186)
    {
        return 28;
    }
    else if(mouseX>319 && mouseX<371 && mouseY>134 && mouseY<186)
    {
        return 29;
    }
                                                                    //  POS3
    else if(mouseX>400 && mouseX<452 && mouseY>30 && mouseY<82)
    {
        return 31;
    }
    else if(mouseX>452 && mouseX<504 && mouseY>30 && mouseY<82)
    {
        return 32;
    }
    else if(mouseX>504 && mouseX<556 && mouseY>30 && mouseY<82)
    {
        return 33;
    }
    else if(mouseX>400 && mouseX<452 && mouseY>82 && mouseY<134)
    {
        return 34;
    }
    else if(mouseX>452 && mouseX<504 && mouseY>82 && mouseY<134)
    {
        return 35;
    }
    else if(mouseX>504 && mouseX<556 && mouseY>82 && mouseY<134)
    {
        return 36;
    }
    else if(mouseX>400 && mouseX<452 && mouseY>134 && mouseY<186)
    {
        return 37;
    }
    else if(mouseX>452 && mouseX<504 && mouseY>134 && mouseY<186)
    {
        return 38;
    }
    else if(mouseX>504 && mouseX<556 && mouseY>134 && mouseY<186)
    {
        return 39;
    }
                                                                    //  POS4
    else if(mouseX>30 && mouseX<82 && mouseY>215 && mouseY<267)
    {
        return 41;
    }
    else if(mouseX>82 && mouseX<134 && mouseY>215 && mouseY<267)
    {
        return 42;
    }
    else if(mouseX>134 && mouseX<186 && mouseY>215 && mouseY<267)
    {
        return 43;
    }
    else if(mouseX>30 && mouseX<82 && mouseY>267 && mouseY<319)
    {
        return 44;
    }
    else if(mouseX>82 && mouseX<134 && mouseY>267 && mouseY<319)
    {
        return 45;
    }
    else if(mouseX>134 && mouseX<186 && mouseY>267 && mouseY<319)
    {
        return 46;
    }
    else if(mouseX>30 && mouseX<82 && mouseY>319 && mouseY<371)
    {
        return 47;
    }
    else if(mouseX>82 && mouseX<134 && mouseY>319 && mouseY<371)
    {
        return 48;
    }
    else if(mouseX>134 && mouseX<186 && mouseY>319 && mouseY<371)
    {
        return 49;
    }
                                                                    //  POS5
    else if(mouseX>215 && mouseX<267 && mouseY>215 && mouseY<267)
    {
        return 51;
    }
    else if(mouseX>267 && mouseX<319 && mouseY>215 && mouseY<267)
    {
        return 52;
    }
    else if(mouseX>319 && mouseX<371 && mouseY>215 && mouseY<267)
    {
        return 53;
    }
    else if(mouseX>215 && mouseX<267 && mouseY>267 && mouseY<319)
    {
        return 54;
    }
    else if(mouseX>267 && mouseX<319 && mouseY>267 && mouseY<319)
    {
        return 55;
    }
    else if(mouseX>319 && mouseX<371 && mouseY>267 && mouseY<319)
    {
        return 56;
    }
    else if(mouseX>215 && mouseX<267 && mouseY>319 && mouseY<371)
    {
        return 57;
    }
    else if(mouseX>267 && mouseX<319 && mouseY>319 && mouseY<371)
    {
        return 58;
    }
    else if(mouseX>319 && mouseX<371 && mouseY>319 && mouseY<371)
    {
        return 59;
    }
                                                                    //  POS6
    else if(mouseX>400 && mouseX<452 && mouseY>215 && mouseY<267)
    {
        return 61;
    }
    else if(mouseX>452 && mouseX<504 && mouseY>215 && mouseY<267)
    {
        return 62;
    }
    else if(mouseX>504 && mouseX<556 && mouseY>215 && mouseY<267)
    {
        return 63;
    }
    else if(mouseX>400 && mouseX<452 && mouseY>267 && mouseY<319)
    {
        return 64;
    }
    else if(mouseX>452 && mouseX<504 && mouseY>267 && mouseY<319)
    {
        return 65;
    }
    else if(mouseX>504 && mouseX<556 && mouseY>267 && mouseY<319)
    {
        return 66;
    }
    else if(mouseX>400 && mouseX<452 && mouseY>319 && mouseY<371)
    {
        return 67;
    }
    else if(mouseX>452 && mouseX<504 && mouseY>319 && mouseY<371)
    {
        return 68;
    }
    else if(mouseX>504 && mouseX<556 && mouseY>319 && mouseY<371)
    {
        return 69;
    }
                                                                    //  POS7
    else if(mouseX>30 && mouseX<82 && mouseY>400 && mouseY<452)
    {
        return 71;
    }
    else if(mouseX>82 && mouseX<134 && mouseY>400 && mouseY<452)
    {
        return 72;
    }
    else if(mouseX>134 && mouseX<186 && mouseY>400 && mouseY<452)
    {
        return 73;
    }
    else if(mouseX>30 && mouseX<82 && mouseY>452 && mouseY<504)
    {
        return 74;
    }
    else if(mouseX>82 && mouseX<134 && mouseY>452 && mouseY<504)
    {
        return 75;
    }
    else if(mouseX>134 && mouseX<186 && mouseY>452 && mouseY<504)
    {
        return 76;
    }
    else if(mouseX>30 && mouseX<82 && mouseY>504 && mouseY<556)
    {
        return 77;
    }
    else if(mouseX>82 && mouseX<134 && mouseY>504 && mouseY<556)
    {
        return 78;
    }
    else if(mouseX>134 && mouseX<186 && mouseY>504 && mouseY<556)
    {
        return 79;
    }
                                                                    //  POS8
    else if(mouseX>215 && mouseX<267 && mouseY>400 && mouseY<452)
    {
        return 81;
    }
    else if(mouseX>267 && mouseX<319 && mouseY>400 && mouseY<452)
    {
        return 82;
    }
    else if(mouseX>319 && mouseX<371 && mouseY>400 && mouseY<452)
    {
        return 83;
    }
    else if(mouseX>215 && mouseX<267 && mouseY>452 && mouseY<504)
    {
        return 84;
    }
    else if(mouseX>267 && mouseX<319 && mouseY>452 && mouseY<504)
    {
        return 85;
    }
    else if(mouseX>319 && mouseX<371 && mouseY>452 && mouseY<504)
    {
        return 86;
    }
    else if(mouseX>215 && mouseX<267 && mouseY>504 && mouseY<556)
    {
        return 87;
    }
    else if(mouseX>267 && mouseX<319 && mouseY>504 && mouseY<556)
    {
        return 88;
    }
    else if(mouseX>319 && mouseX<371 && mouseY>504 && mouseY<556)
    {
        return 89;
    }
                                                                    //  POS9
    else if(mouseX>400 && mouseX<452 && mouseY>400 && mouseY<452)
    {
        return 91;
    }
    else if(mouseX>452 && mouseX<504 && mouseY>400 && mouseY<452)
    {
        return 92;
    }
    else if(mouseX>504 && mouseX<556 && mouseY>400 && mouseY<452)
    {
        return 93;
    }
    else if(mouseX>400 && mouseX<452 && mouseY>452 && mouseY<504)
    {
        return 94;
    }
    else if(mouseX>452 && mouseX<504 && mouseY>452 && mouseY<504)
    {
        return 95;
    }
    else if(mouseX>504 && mouseX<556 && mouseY>452 && mouseY<504)
    {
        return 96;
    }
    else if(mouseX>400 && mouseX<452 && mouseY>504 && mouseY<556)
    {
        return 97;
    }
    else if(mouseX>452 && mouseX<504 && mouseY>504 && mouseY<556)
    {
        return 98;
    }
    else if(mouseX>504 && mouseX<556 && mouseY>504 && mouseY<556)
    {
        return 99;
    }

    if(mouseX>750 && mouseX<750+300 && mouseY>425 && mouseY<425+125)
    {
    	return 101;
    }
    if(mouseX>735 && mouseX<871 && mouseY>37 && mouseY<68+37)
    {
    	return 102;
    }
    if(mouseX>735 && mouseX<871 && mouseY>112 && mouseY<112+68)
    {
    	return 103;
    }

    if(mouseX>920 && mouseX<920+166 && mouseY>25 && mouseY<25+166)
    {
    	return 104;
    }

	if(dist(mouseX,mouseY,1065+125/2,425+125/2)<=130/2)
    {
    	return 105;
    }
}

function verificaMiniJogos()
{
	if(pos1[0]==0)									//POS1
	{
		if(pos1[1]!=0 && pos1[2]!=0 && pos1[3]!=0 && pos1[4]!=0 && pos1[5]!=0 && pos1[6]!=0 && pos1[7]!=0 && pos1[8]!=0 && pos1[9]!=0)
		{
			pos1[0]=3;
		}

		if(pos1[1]==1 && pos1[2]==1 && pos1[3]==1)
		{
			pos1[0]=1;
		}
		if(pos1[4]==1 && pos1[5]==1 && pos1[6]==1)
		{
			pos1[0]=1;
		}
		if(pos1[7]==1 && pos1[8]==1 && pos1[9]==1)
		{
			pos1[0]=1;
		}

		if(pos1[1]==1 && pos1[4]==1 && pos1[7]==1)
		{
			pos1[0]=1;
		}
		if(pos1[2]==1 && pos1[5]==1 && pos1[8]==1)
		{
			pos1[0]=1;
		}
		if(pos1[3]==1 && pos1[6]==1 && pos1[9]==1)
		{
			pos1[0]=1;
		}

		if(pos1[1]==1 && pos1[5]==1 && pos1[9]==1)
		{
			pos1[0]=1;
		}
		if(pos1[3]==1 && pos1[5]==1 && pos1[7]==1)
		{
			pos1[0]=1;
		}

		if(pos1[1]==2 && pos1[2]==2 && pos1[3]==2)
		{
			pos1[0]=2;
		}
		if(pos1[4]==2 && pos1[5]==2 && pos1[6]==2)
		{
			pos1[0]=2;
		}
		if(pos1[7]==2 && pos1[8]==2 && pos1[9]==2)
		{
			pos1[0]=2;
		}

		if(pos1[1]==2 && pos1[4]==2 && pos1[7]==2)
		{
			pos1[0]=2;
		}
		if(pos1[2]==2 && pos1[5]==2 && pos1[8]==2)
		{
			pos1[0]=2;
		}
		if(pos1[3]==2 && pos1[6]==2 && pos1[9]==2)
		{
			pos1[0]=2;
		}

		if(pos1[1]==2 && pos1[5]==2 && pos1[9]==2)
		{
			pos1[0]=2;
		}
		if(pos1[3]==2 && pos1[5]==2 && pos1[7]==2)
		{
			pos1[0]=2;
		}
	}

	if(pos2[0]==0)									//pos2
	{
		if(pos2[1]!=0 && pos2[2]!=0 && pos2[3]!=0 && pos2[4]!=0 && pos2[5]!=0 && pos2[6]!=0 && pos2[7]!=0 && pos2[8]!=0 && pos2[9]!=0)
		{
			pos2[0]=3;
		}

		if(pos2[1]==1 && pos2[2]==1 && pos2[3]==1)
		{
			pos2[0]=1;
		}
		if(pos2[4]==1 && pos2[5]==1 && pos2[6]==1)
		{
			pos2[0]=1;
		}
		if(pos2[7]==1 && pos2[8]==1 && pos2[9]==1)
		{
			pos2[0]=1;
		}

		if(pos2[1]==1 && pos2[4]==1 && pos2[7]==1)
		{
			pos2[0]=1;
		}
		if(pos2[2]==1 && pos2[5]==1 && pos2[8]==1)
		{
			pos2[0]=1;
		}
		if(pos2[3]==1 && pos2[6]==1 && pos2[9]==1)
		{
			pos2[0]=1;
		}

		if(pos2[1]==1 && pos2[5]==1 && pos2[9]==1)
		{
			pos2[0]=1;
		}
		if(pos2[3]==1 && pos2[5]==1 && pos2[7]==1)
		{
			pos2[0]=1;
		}

		if(pos2[1]==2 && pos2[2]==2 && pos2[3]==2)
		{
			pos2[0]=2;
		}
		if(pos2[4]==2 && pos2[5]==2 && pos2[6]==2)
		{
			pos2[0]=2;
		}
		if(pos2[7]==2 && pos2[8]==2 && pos2[9]==2)
		{
			pos2[0]=2;
		}

		if(pos2[1]==2 && pos2[4]==2 && pos2[7]==2)
		{
			pos2[0]=2;
		}
		if(pos2[2]==2 && pos2[5]==2 && pos2[8]==2)
		{
			pos2[0]=2;
		}
		if(pos2[3]==2 && pos2[6]==2 && pos2[9]==2)
		{
			pos2[0]=2;
		}

		if(pos2[1]==2 && pos2[5]==2 && pos2[9]==2)
		{
			pos2[0]=2;
		}
		if(pos2[3]==2 && pos2[5]==2 && pos2[7]==2)
		{
			pos2[0]=2;
		}
	}

	if(pos3[0]==0)									//pos3
	{
		if(pos3[1]!=0 && pos3[2]!=0 && pos3[3]!=0 && pos3[4]!=0 && pos3[5]!=0 && pos3[6]!=0 && pos3[7]!=0 && pos3[8]!=0 && pos3[9]!=0)
		{
			pos3[0]=3;
		}

		if(pos3[1]==1 && pos3[2]==1 && pos3[3]==1)
		{
			pos3[0]=1;
		}
		if(pos3[4]==1 && pos3[5]==1 && pos3[6]==1)
		{
			pos3[0]=1;
		}
		if(pos3[7]==1 && pos3[8]==1 && pos3[9]==1)
		{
			pos3[0]=1;
		}

		if(pos3[1]==1 && pos3[4]==1 && pos3[7]==1)
		{
			pos3[0]=1;
		}
		if(pos3[2]==1 && pos3[5]==1 && pos3[8]==1)
		{
			pos3[0]=1;
		}
		if(pos3[3]==1 && pos3[6]==1 && pos3[9]==1)
		{
			pos3[0]=1;
		}

		if(pos3[1]==1 && pos3[5]==1 && pos3[9]==1)
		{
			pos3[0]=1;
		}
		if(pos3[3]==1 && pos3[5]==1 && pos3[7]==1)
		{
			pos3[0]=1;
		}

		if(pos3[1]==2 && pos3[2]==2 && pos3[3]==2)
		{
			pos3[0]=2;
		}
		if(pos3[4]==2 && pos3[5]==2 && pos3[6]==2)
		{
			pos3[0]=2;
		}
		if(pos3[7]==2 && pos3[8]==2 && pos3[9]==2)
		{
			pos3[0]=2;
		}

		if(pos3[1]==2 && pos3[4]==2 && pos3[7]==2)
		{
			pos3[0]=2;
		}
		if(pos3[2]==2 && pos3[5]==2 && pos3[8]==2)
		{
			pos3[0]=2;
		}
		if(pos3[3]==2 && pos3[6]==2 && pos3[9]==2)
		{
			pos3[0]=2;
		}

		if(pos3[1]==2 && pos3[5]==2 && pos3[9]==2)
		{
			pos3[0]=2;
		}
		if(pos3[3]==2 && pos3[5]==2 && pos3[7]==2)
		{
			pos3[0]=2;
		}
	}

	if(pos4[0]==0)									//pos4
	{
		if(pos4[1]!=0 && pos4[2]!=0 && pos4[3]!=0 && pos4[4]!=0 && pos4[5]!=0 && pos4[6]!=0 && pos4[7]!=0 && pos4[8]!=0 && pos4[9]!=0)
		{
			pos4[0]=3;
		}

		if(pos4[1]==1 && pos4[2]==1 && pos4[3]==1)
		{
			pos4[0]=1;
		}
		if(pos4[4]==1 && pos4[5]==1 && pos4[6]==1)
		{
			pos4[0]=1;
		}
		if(pos4[7]==1 && pos4[8]==1 && pos4[9]==1)
		{
			pos4[0]=1;
		}

		if(pos4[1]==1 && pos4[4]==1 && pos4[7]==1)
		{
			pos4[0]=1;
		}
		if(pos4[2]==1 && pos4[5]==1 && pos4[8]==1)
		{
			pos4[0]=1;
		}
		if(pos4[3]==1 && pos4[6]==1 && pos4[9]==1)
		{
			pos4[0]=1;
		}

		if(pos4[1]==1 && pos4[5]==1 && pos4[9]==1)
		{
			pos4[0]=1;
		}
		if(pos4[3]==1 && pos4[5]==1 && pos4[7]==1)
		{
			pos4[0]=1;
		}

		if(pos4[1]==2 && pos4[2]==2 && pos4[3]==2)
		{
			pos4[0]=2;
		}
		if(pos4[4]==2 && pos4[5]==2 && pos4[6]==2)
		{
			pos4[0]=2;
		}
		if(pos4[7]==2 && pos4[8]==2 && pos4[9]==2)
		{
			pos4[0]=2;
		}

		if(pos4[1]==2 && pos4[4]==2 && pos4[7]==2)
		{
			pos4[0]=2;
		}
		if(pos4[2]==2 && pos4[5]==2 && pos4[8]==2)
		{
			pos4[0]=2;
		}
		if(pos4[3]==2 && pos4[6]==2 && pos4[9]==2)
		{
			pos4[0]=2;
		}

		if(pos4[1]==2 && pos4[5]==2 && pos4[9]==2)
		{
			pos4[0]=2;
		}
		if(pos4[3]==2 && pos4[5]==2 && pos4[7]==2)
		{
			pos4[0]=2;
		}
	}

	if(pos5[0]==0)									//pos5
	{
		if(pos5[1]!=0 && pos5[2]!=0 && pos5[3]!=0 && pos5[4]!=0 && pos5[5]!=0 && pos5[6]!=0 && pos5[7]!=0 && pos5[8]!=0 && pos5[9]!=0)
		{
			pos5[0]=3;
		}

		if(pos5[1]==1 && pos5[2]==1 && pos5[3]==1)
		{
			pos5[0]=1;
		}
		if(pos5[4]==1 && pos5[5]==1 && pos5[6]==1)
		{
			pos5[0]=1;
		}
		if(pos5[7]==1 && pos5[8]==1 && pos5[9]==1)
		{
			pos5[0]=1;
		}

		if(pos5[1]==1 && pos5[4]==1 && pos5[7]==1)
		{
			pos5[0]=1;
		}
		if(pos5[2]==1 && pos5[5]==1 && pos5[8]==1)
		{
			pos5[0]=1;
		}
		if(pos5[3]==1 && pos5[6]==1 && pos5[9]==1)
		{
			pos5[0]=1;
		}

		if(pos5[1]==1 && pos5[5]==1 && pos5[9]==1)
		{
			pos5[0]=1;
		}
		if(pos5[3]==1 && pos5[5]==1 && pos5[7]==1)
		{
			pos5[0]=1;
		}

		if(pos5[1]==2 && pos5[2]==2 && pos5[3]==2)
		{
			pos5[0]=2;
		}
		if(pos5[4]==2 && pos5[5]==2 && pos5[6]==2)
		{
			pos5[0]=2;
		}
		if(pos5[7]==2 && pos5[8]==2 && pos5[9]==2)
		{
			pos5[0]=2;
		}

		if(pos5[1]==2 && pos5[4]==2 && pos5[7]==2)
		{
			pos5[0]=2;
		}
		if(pos5[2]==2 && pos5[5]==2 && pos5[8]==2)
		{
			pos5[0]=2;
		}
		if(pos5[3]==2 && pos5[6]==2 && pos5[9]==2)
		{
			pos5[0]=2;
		}

		if(pos5[1]==2 && pos5[5]==2 && pos5[9]==2)
		{
			pos5[0]=2;
		}
		if(pos5[3]==2 && pos5[5]==2 && pos5[7]==2)
		{
			pos5[0]=2;
		}
	}

	if(pos6[0]==0)									//pos6
	{
		if(pos6[1]!=0 && pos6[2]!=0 && pos6[3]!=0 && pos6[4]!=0 && pos6[5]!=0 && pos6[6]!=0 && pos6[7]!=0 && pos6[8]!=0 && pos6[9]!=0)
		{
			pos6[0]=3;
		}

		if(pos6[1]==1 && pos6[2]==1 && pos6[3]==1)
		{
			pos6[0]=1;
		}
		if(pos6[4]==1 && pos6[5]==1 && pos6[6]==1)
		{
			pos6[0]=1;
		}
		if(pos6[7]==1 && pos6[8]==1 && pos6[9]==1)
		{
			pos6[0]=1;
		}

		if(pos6[1]==1 && pos6[4]==1 && pos6[7]==1)
		{
			pos6[0]=1;
		}
		if(pos6[2]==1 && pos6[5]==1 && pos6[8]==1)
		{
			pos6[0]=1;
		}
		if(pos6[3]==1 && pos6[6]==1 && pos6[9]==1)
		{
			pos6[0]=1;
		}

		if(pos6[1]==1 && pos6[5]==1 && pos6[9]==1)
		{
			pos6[0]=1;
		}
		if(pos6[3]==1 && pos6[5]==1 && pos6[7]==1)
		{
			pos6[0]=1;
		}

		if(pos6[1]==2 && pos6[2]==2 && pos6[3]==2)
		{
			pos6[0]=2;
		}
		if(pos6[4]==2 && pos6[5]==2 && pos6[6]==2)
		{
			pos6[0]=2;
		}
		if(pos6[7]==2 && pos6[8]==2 && pos6[9]==2)
		{
			pos6[0]=2;
		}

		if(pos6[1]==2 && pos6[4]==2 && pos6[7]==2)
		{
			pos6[0]=2;
		}
		if(pos6[2]==2 && pos6[5]==2 && pos6[8]==2)
		{
			pos6[0]=2;
		}
		if(pos6[3]==2 && pos6[6]==2 && pos6[9]==2)
		{
			pos6[0]=2;
		}

		if(pos6[1]==2 && pos6[5]==2 && pos6[9]==2)
		{
			pos6[0]=2;
		}
		if(pos6[3]==2 && pos6[5]==2 && pos6[7]==2)
		{
			pos6[0]=2;
		}
	}

	if(pos7[0]==0)									//pos7
	{
		if(pos7[1]!=0 && pos7[2]!=0 && pos7[3]!=0 && pos7[4]!=0 && pos7[5]!=0 && pos7[6]!=0 && pos7[7]!=0 && pos7[8]!=0 && pos7[9]!=0)
		{
			pos7[0]=3;
		}

		if(pos7[1]==1 && pos7[2]==1 && pos7[3]==1)
		{
			pos7[0]=1;
		}
		if(pos7[4]==1 && pos7[5]==1 && pos7[6]==1)
		{
			pos7[0]=1;
		}
		if(pos7[7]==1 && pos7[8]==1 && pos7[9]==1)
		{
			pos7[0]=1;
		}

		if(pos7[1]==1 && pos7[4]==1 && pos7[7]==1)
		{
			pos7[0]=1;
		}
		if(pos7[2]==1 && pos7[5]==1 && pos7[8]==1)
		{
			pos7[0]=1;
		}
		if(pos7[3]==1 && pos7[6]==1 && pos7[9]==1)
		{
			pos7[0]=1;
		}

		if(pos7[1]==1 && pos7[5]==1 && pos7[9]==1)
		{
			pos7[0]=1;
		}
		if(pos7[3]==1 && pos7[5]==1 && pos7[7]==1)
		{
			pos7[0]=1;
		}

		if(pos7[1]==2 && pos7[2]==2 && pos7[3]==2)
		{
			pos7[0]=2;
		}
		if(pos7[4]==2 && pos7[5]==2 && pos7[6]==2)
		{
			pos7[0]=2;
		}
		if(pos7[7]==2 && pos7[8]==2 && pos7[9]==2)
		{
			pos7[0]=2;
		}

		if(pos7[1]==2 && pos7[4]==2 && pos7[7]==2)
		{
			pos7[0]=2;
		}
		if(pos7[2]==2 && pos7[5]==2 && pos7[8]==2)
		{
			pos7[0]=2;
		}
		if(pos7[3]==2 && pos7[6]==2 && pos7[9]==2)
		{
			pos7[0]=2;
		}

		if(pos7[1]==2 && pos7[5]==2 && pos7[9]==2)
		{
			pos7[0]=2;
		}
		if(pos7[3]==2 && pos7[5]==2 && pos7[7]==2)
		{
			pos7[0]=2;
		}
	}

	if(pos8[0]==0)									//pos8
	{
		if(pos8[1]!=0 && pos8[2]!=0 && pos8[3]!=0 && pos8[4]!=0 && pos8[5]!=0 && pos8[6]!=0 && pos8[7]!=0 && pos8[8]!=0 && pos8[9]!=0)
		{
			pos8[0]=3;
		}

		if(pos8[1]==1 && pos8[2]==1 && pos8[3]==1)
		{
			pos8[0]=1;
		}
		if(pos8[4]==1 && pos8[5]==1 && pos8[6]==1)
		{
			pos8[0]=1;
		}
		if(pos8[7]==1 && pos8[8]==1 && pos8[9]==1)
		{
			pos8[0]=1;
		}

		if(pos8[1]==1 && pos8[4]==1 && pos8[7]==1)
		{
			pos8[0]=1;
		}
		if(pos8[2]==1 && pos8[5]==1 && pos8[8]==1)
		{
			pos8[0]=1;
		}
		if(pos8[3]==1 && pos8[6]==1 && pos8[9]==1)
		{
			pos8[0]=1;
		}

		if(pos8[1]==1 && pos8[5]==1 && pos8[9]==1)
		{
			pos8[0]=1;
		}
		if(pos8[3]==1 && pos8[5]==1 && pos8[7]==1)
		{
			pos8[0]=1;
		}

		if(pos8[1]==2 && pos8[2]==2 && pos8[3]==2)
		{
			pos8[0]=2;
		}
		if(pos8[4]==2 && pos8[5]==2 && pos8[6]==2)
		{
			pos8[0]=2;
		}
		if(pos8[7]==2 && pos8[8]==2 && pos8[9]==2)
		{
			pos8[0]=2;
		}

		if(pos8[1]==2 && pos8[4]==2 && pos8[7]==2)
		{
			pos8[0]=2;
		}
		if(pos8[2]==2 && pos8[5]==2 && pos8[8]==2)
		{
			pos8[0]=2;
		}
		if(pos8[3]==2 && pos8[6]==2 && pos8[9]==2)
		{
			pos8[0]=2;
		}

		if(pos8[1]==2 && pos8[5]==2 && pos8[9]==2)
		{
			pos8[0]=2;
		}
		if(pos8[3]==2 && pos8[5]==2 && pos8[7]==2)
		{
			pos8[0]=2;
		}
	}

	if(pos9[0]==0)									//pos9
	{
		if(pos9[1]!=0 && pos9[2]!=0 && pos9[3]!=0 && pos9[4]!=0 && pos9[5]!=0 && pos9[6]!=0 && pos9[7]!=0 && pos9[8]!=0 && pos9[9]!=0)
		{
			pos9[0]=3;
		}

		if(pos9[1]==1 && pos9[2]==1 && pos9[3]==1)
		{
			pos9[0]=1;
		}
		if(pos9[4]==1 && pos9[5]==1 && pos9[6]==1)
		{
			pos9[0]=1;
		}
		if(pos9[7]==1 && pos9[8]==1 && pos9[9]==1)
		{
			pos9[0]=1;
		}

		if(pos9[1]==1 && pos9[4]==1 && pos9[7]==1)
		{
			pos9[0]=1;
		}
		if(pos9[2]==1 && pos9[5]==1 && pos9[8]==1)
		{
			pos9[0]=1;
		}
		if(pos9[3]==1 && pos9[6]==1 && pos9[9]==1)
		{
			pos9[0]=1;
		}

		if(pos9[1]==1 && pos9[5]==1 && pos9[9]==1)
		{
			pos9[0]=1;
		}
		if(pos9[3]==1 && pos9[5]==1 && pos9[7]==1)
		{
			pos9[0]=1;
		}

		if(pos9[1]==2 && pos9[2]==2 && pos9[3]==2)
		{
			pos9[0]=2;
		}
		if(pos9[4]==2 && pos9[5]==2 && pos9[6]==2)
		{
			pos9[0]=2;
		}
		if(pos9[7]==2 && pos9[8]==2 && pos9[9]==2)
		{
			pos9[0]=2;
		}

		if(pos9[1]==2 && pos9[4]==2 && pos9[7]==2)
		{
			pos9[0]=2;
		}
		if(pos9[2]==2 && pos9[5]==2 && pos9[8]==2)
		{
			pos9[0]=2;
		}
		if(pos9[3]==2 && pos9[6]==2 && pos9[9]==2)
		{
			pos9[0]=2;
		}

		if(pos9[1]==2 && pos9[5]==2 && pos9[9]==2)
		{
			pos9[0]=2;
		}
		if(pos9[3]==2 && pos9[5]==2 && pos9[7]==2)
		{
			pos9[0]=2;
		}
	}
}

function ajustares()
{
	if(res==1 && pos1[0]!=0)
	{
		res=0;
	}
	if(res==2 && pos2[0]!=0)
	{
		res=0;
	}
	if(res==3 && pos3[0]!=0)
	{
		res=0;
	}
	if(res==4 && pos4[0]!=0)
	{
		res=0;
	}
	if(res==5 && pos5[0]!=0)
	{
		res=0;
	}
	if(res==6 && pos6[0]!=0)
	{
		res=0;
	}
	if(res==7 && pos7[0]!=0)
	{
		res=0;
	}
	if(res==8 && pos8[0]!=0)
	{
		res=0;
	}
	if(res==9 && pos9[0]!=0)
	{
		res=0;
	}
}

function tempoRestante()
{
	if(vencedor==0 && vez!=0)
	{
		strokeWeight(5);
		stroke(255,150);
		fill(255,120);
		rect(1065,425,125,125,150);
	}
	else
	{
		strokeWeight(5);
		stroke(255,150);
		fill(255,165,0);
		rect(1065,425,125,125,150);
		
		if(posm()==105)
		{
			strokeWeight(5);
			stroke(255,150);
			fill(255,50);
			rect(1065,425,125,125,150);
		}
	}
	
	if(cT)
	{
		if(vencedor==0 && vez!=0)
		{
			if(vezA!=vez)
			{
				vezA=vez;
				tempor=millis();
			}

			trest=tBase-(millis()-tempor);

			if(trest<=0)
			{
				vez+=1;
				if(vez==3)
				vez=1;
				res=0;
				trest=0;
			}
		}

		if(escolher==0 && vencedor==0)
		{
			stroke(0,0);
			fill(map(trest,tBase,0,0,255),map(trest,tBase,0,255,0),0);
			rect(934,100,map(trest,tBase,0,200,0),35);

			noFill();
			stroke(192);
			strokeWeight(4);
			rect(934,100,200,35);
			

			fill(0);
			stroke(255);
			textSize(30);
			strokeWeight(3);
			text(round(trest/1000),1033,75);
			fill(255);
			strokeWeight(0);
			text("Tempo Restante:",1033,35);
		}
	}

	strokeWeight(1);
	stroke(255);
	fill(0);
	textSize(50);
	textAlign(CENTER, CENTER);
	if(cT)
	text("T:on", 750+380, 425+125/2);
	else
	text("T:off", 750+380, 425+125/2);
}