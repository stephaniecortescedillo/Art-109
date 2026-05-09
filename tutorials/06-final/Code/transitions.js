

//clicking

function mousePressed() {

  for (let p of pd) {

    if (
      mouseX > p.x &&
      mouseX < p.x + p.w &&
      mouseY > p.y &&
      mouseY < p.y + p.h
    ) {

      message = p.text;
    }
  }
}