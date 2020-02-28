// javaScript documnet

game.loop = function() {
  obstacle.move()
  setTimeout(function() {
    game.loop()
  }, 10);
}

obstacle.move = function() {
  var speed = 3
  for (var i = 0; i < obstacle.s.length; i++) {
    let obj = obstacle.s[i]
    if (obj.offsetLeft > 0) {
      obj.style.left = (obj.offsetLeft -speed)+"px"
    } else {
      if (obj.offsetWidth > 0) {
        if (obj.offsetWidth -speed > 0) {
          obj.style.width = (obj.offsetWidth -speed)+"px"
        } else {
          obj.style.width = "0px"
        }
      } else {
        obj.remove()
        obstacle.s.splice(i, 1);
        console.log(obstacle.s);
      }
    }
  }
}

player.jump = function() {
  var speed = 3
  var heigt = 130
  for (var i = 0; i < heigt; i++) {
     setTimeout(function(px) {
      if (px < heigt-1) {
        player.is.style.bottom = px + "px"
      } else {
        for (var j = 0; j < heigt; j++) {
          setTimeout(function(px) {
            player.is.style.bottom = px + "px"
          }, j*-speed*(j/-j), heigt-j);
        }
      }
    }, i*speed*(i/i), i);
  }
}
