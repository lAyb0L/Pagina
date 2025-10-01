function setup() {
  createCanvas(600, 400); //tamaño del cuadrado en general
}
function draw() {
  background("lightcyan"); //contorno del cuadrado (osea el cielo)
    fill("gold"); //primer circulo 

  stroke("yellow"); //contorno del circulo 

  strokeWeight(10);//grueso de el segundo circulo del sol 

  circle(500, 120, 100); //posicion del circulo
    stroke("lime");//la linea negra es el contorno

  strokeWeight(2);//contorno de adentro :v

  fill("lime"); //se dice que color es 

  rect(0, 200, 600, 200); //tamaño del rectangulo
    textSize(50) //tamaño de el texto
  text("👪", mouseX, mouseY) // se mueve el emoji
  text("🏳‍🌈",90, 250) //se mantiene el emoji fijo solo cambia la posicion
   text("❌",90, 250)
}