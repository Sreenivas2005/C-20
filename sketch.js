var f_rect,m_rect;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  f_rect = createSprite(400,200,50,50);
   f_rect.shapeColor = "green";
   f_rect.debug = true;

  m_rect = createSprite(400,300,50,100);
  m_rect.debug = true;
  m_rect.shapeColor = "green";

}


function draw() {

  
  background(0,0,0);
  m_rect.x=World.mouseX  
  m_rect.y = World.mouseY;
if(m_rect.x-f_rect.x<m_rect.width/2+f_rect.width/2  && 
  f_rect.x-m_rect.x<m_rect.width/2+f_rect.width/2 &&
  m_rect.y-f_rect.y<m_rect.height/2+f_rect.height/2 &&
  f_rect.y-m_rect.y<m_rect.height/2+f_rect.height/2)
  {
  m_rect.shapeColor ="red";
  f_rect.shapeColor = "red";
}
else
{
  f_rect.shapeColor = "green";
  m_rect.shapeColor = "green";

}


  drawSprites();
}