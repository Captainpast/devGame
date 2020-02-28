// javaScript documnet

addEventListener("DOMContentLoaded" , function() {
  game.start()
})

addEventListener("keydown" , function(event) {
  if (event.keyCode == 32) {
    player.jump()
  }
})
