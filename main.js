// javaScript documnet

var game = {}

game.start = function() {
  player.create()
  obstacle.create(70, 40)
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
