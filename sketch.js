const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function setup() {
  createCanvas(window.outerWidth / 2, window.outerHeight / 2);
  engine = Engine.create();
  world = engine.world;




  ground = new Ground(window.outerWidth / 4, window.outerHeight / 2 - 10, window.outerWidth / 2, 20)


  //One
  pendulum1 = new Ball(400, 380, 60, 60)
  sling1 = new Sling(pendulum1.body, { x: 400, y: 150 })

  //Two
  pendulum2 = new Ball(460, 380, 60, 60)
  sling2 = new Sling(pendulum2.body, { x: 460, y: 150 })

  //Three
  pendulum3 = new Ball(520, 380, 60, 60)
  sling3 = new Sling(pendulum3.body, { x: 520, y: 150 })

  //Four
  pendulum4 = new Ball(580, 380, 60, 60)
  sling4 = new Sling(pendulum4.body, { x: 580, y: 150 })

  //Five
  pendulum5 = new Ball(640, 380, 60, 60)
  sling5 = new Sling(pendulum5.body, { x: 640, y: 150 })
}

function draw() {
  background(0);
  Engine.update(engine);



  ground.display();

  //1
  pendulum1.display();
  sling1.display();

  //2
  pendulum2.display();
  sling2.display();

  //3
  pendulum3.display();
  sling3.display();

  //4
  pendulum4.display();
  sling4.display();

  //5
  pendulum5.display();
  sling5.display();


}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}