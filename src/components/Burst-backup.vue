<template>
  <div id="burst">
    <h1>Burst! Logo animation</h1>
    <!--control btn-->
    <button onclick="pause()">Pause</button>
    <button onclick="play()" >Play</button>
    <button onclick="restart()">Restart</button>
    <button onclick="reverse()">Reverse</button>
    <button onclick="once()">loop once</button>
    <button onclick="infinity()">loop infinity</button>
    <button onclick="timeScale(.1)">speed .1x</button>
    <button onclick="timeScale(.25)">speed .25x</button>
    <button onclick="timeScale(1)">speed 1x</button>
    <button onclick="timeScale(4)">speed 4x</button>
    <button onclick="timeScale(10)">speed 10x</button>
    <br>

    <div class="container">
      <img class="character" src="https://firebasestorage.googleapis.com/v0/b/mikepeiman-experiment.appspot.com/o/burst-logo-B-spritesheet-7200w.svg?alt=media&token=15efa1e1-d849-4e01-9360-c8f3c31e3bdd" >
    </div>
    <!-- <img class="sprite" id="burst-sprite" src="../assets/burst-svg-sprite.svg"> -->
      <iframe height='auto' scrolling='no' title='GSAP Simple sprite animation - Burst Creative Group logo' src='//codepen.io/mikepeiman/embed/mKrZVG/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; height: 450px;'>See the Pen <a href='https://codepen.io/mikepeiman/pen/mKrZVG/'>GSAP Simple sprite animation - Burst Creative Group logo</a> by Mike Peiman (<a href='https://codepen.io/mikepeiman'>@mikepeiman</a>) on <a href='https://codepen.io'>CodePen</a>.
      </iframe>
  </div>
</template>

<script>
import { TweenMax, TweenLite, SteppedEase } from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js'
// import SteppedEase from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js'

// var $ = window.jQuery = require('jquery')
// var mySVG = $('#burst-sprite')
// mySVG.setAttribute('width', '50%')
// mySVG.hide()

// import { TweenMax, TweenLite, SteppedEase } from 'gsap/TweenMax'
var M1 = TweenMax.to('.character', 1, {repeat: -1, x: -7205, ease: SteppedEase.config(30)})
M1.play()
// Control functions ( you can add whatever you want )
function play() { M1.play() }
function pause() { M1.pause() }
function restart(){ M1.restart() }
function reverse(){ M1.reverse() }
function once(){ M1.repeat(1) }
function infinity(){ M1.repeat(-1) }

function timeScale(X){ 
  TweenLite.to([M1], 1, {timeScale: X})
}
</script>
<script>
export default {
  name: 'Burst'
}
</script>

<style>
html,
body {
  height: 100%;
}
.container {
  width: 7225px;  
  height: 227.673px;  
  overflow:hidden;
  left: 100px;
  margin-left: 100px;
  padding: 0 10px;
}
</style>
