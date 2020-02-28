// javaScript documnet

game.loop = function() {
  obstacle.move()
  setTimeout(function () {
    game.loop()
  }, 10);
}


obstacle.move = function() {
  for (var i = 0; i < obstacle.s.length; i++) {
    let obj = obstacle.s[i]
    if (obj.offsetLeft > 0) {
      obj.style.left = (obj.offsetLeft -1)+"px"
    } else {
      if (obj.offsetWidth > 0) {
        obj.style.width = (obj.offsetWidth -1)+"px"
      } else {
        obj.remove()
        obstacle.s.splice(i, 1);
        console.log(obstacle.s);
      }
    }
  }
}

player.jump = function() {

  for (var i = 0; i < 70; i++) {
    player.is.style.bottom = i + "px"
  }

}
