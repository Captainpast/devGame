// javaScript documnet

var game = {}

game.start = function() {
  player.create()
  obstacle.spawning(levels)
  game.loop()
}


var player = {}

player.is = null
player.create = function() {
  player.is = document.createElement("div")
  player.is.classList.add("player")

  document.getElementById("area").appendChild(player.is)
}


var obstacle = {}

obstacle.s = []
obstacle.create = function(height, width) {
  let obj = document.createElement("div")
  obj.classList.add("obstacles")
  obj.style.height = height +"px"
  obj.style.width = width +"px"

  obj.style.right = "0px"
  obj.style.bottom = "0px"

  obstacle.s.push(obj)
  document.getElementById("area").appendChild(obj)

  return obstacle.s.length -1;
}
obstacle.spawning = function(level) {
  console.log(level);
  for (var i = 0; i < level.length; i++) {
    setTimeout(function (level) {
      obstacle.create(level.height, level.width)
    }, level[i].time, level[i]);
  }
}

var levels = [
  {
    "height": 70,
    "width": 40,
    "time": 0
  },
  {
    "height": 50,
    "width": 30,
    "time": 2000
  }
]
