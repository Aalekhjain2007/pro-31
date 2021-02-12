  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;

  var engine,world
  var drops=[]
  var maxDrops=100;
  var umbrella1
  var rand
  var Thunder
  var thunder1,thunder2,thunder3,thunder4
  var thunderCreateFrame=0;
 
  function preload(){
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png");
    thunder3=loadImage("3.png");
    thunder4=loadImage("4.png");
  }

  function setup(){
      var canvas=createCanvas(500,700)
    engine = Engine.create();
    world = engine.world;

    rand=Math.round(random(1,4));
    if(frameCount%80===0){
      thunderCreateFrame=frameCount;
       Thunder=createSprite(random(10,370),random(10,30),10,10)
       switch(rand){
         case 1:Thunder.addImage(thunder1);
         break;
         case 2:Thunder.addImage(thunder2);
         break;
         case 3:Thunder.addImage(thunder3);
         break;
         case 4:Thunder.addImage(thunder4);
         break;
         default:break;
       }
       Thunder.scale=0.9;
    }
  if(thunderCreateFrame+10===frameCount&&Thunder){
     Thunder.destroy();
  }

  
    
    umbrella1=new umbrella(200,500,60,60)
 
  
    if(frameCount%100===0){
      for(var i=0; i<maxDrops;i++){
        drops.push(new drop(random(0,400),random(0,400),4,4));
       }
     }
     Engine.run(engine)
  }

  function draw(){
    background("green")
    Engine.update(engine)
   
    
    umbrella1.display();

    for(var i=0 ; i<maxDrops ; i++){
    drops[i].display();
    drops[i].update()
    }
drawSprites();
  }   

