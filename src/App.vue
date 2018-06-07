<template>
  <div id="app">
    <header>
      <span><router-link to="/">Home</router-link></span>
      <span><router-link to="Tasks">Tasks</router-link></span>
      <span><router-link to="Timer">Timer</router-link></span>
      <span><router-link to="Game">Game</router-link></span>
      <span><router-link to="Burst">Burst</router-link></span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Tasks from './components/Tasks.vue'
import Timer from './components/Timer.vue'
import Game from './components/Game.vue'
import Burst from './components/Burst.vue'
import Vue from 'vue'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

export default {
  components: {
    Card,
    Tasks,
    Timer,
    Game,
    Burst
  },
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  padding: 0.5em;
  background-color: #35495E;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
}

header span {
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding: 0.65em;
  margin: 1em;
  background: white;
  border-radius: 10px;
  text-decoration: none;
}
header span:hover {
    background: #ccddff;
    text-decoration: none;
  }
.md-theme-default a:not(.md-button):hover {
  text-decoration: none;
}
</style>
