<template>
  <div id="app">
    <Navbar />
    <main>      
      <router-view></router-view>
    </main>
    <!-- <v1-grid guides size="10x12" gap="10"></v1-grid> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Card from './components/Card.vue'
import Tasks from './components/Tasks.vue'
import Timer from './components/Timer.vue'
import Game from './components/Game.vue'
import Burst from './components/Burst.vue'
import Protopage from './components/Protopage.vue'

import Vue from 'vue'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import Buefy from 'buefy'
import "buefy/lib/buefy.css"
import "./style.css"
Vue.use(Buefy)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)


export default {
  components: {
    Navbar,
    Card,
    Tasks,
    Timer,
    Game,
    Burst,
    Protopage
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
