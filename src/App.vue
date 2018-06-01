<template>
  <div id="app">
    <header>
      <span>LifeIQ Progressive WebApp</span>
    </header>
<!--     <item-image />
    <item-title />
    <item-description /> -->
    <main>
      <!-- <img src="./assets/logo.png" alt="Vue.js PWA"> -->
      <router-view></router-view>
    </main>
    <input id="mui-input" />
  </div>
</template>

<script>
import Item from './components/Item.vue'
import 'vue-material/dist/vue-material.css'
// import ItemTitle from './components/ItemTitle.vue'
// import ItemDescription from './components/ItemDescription.vue'
// import ItemImage from './components/ItemImage.vue'

export default {
  components: {
    Item
    // ItemImage,
    // ItemTitle,
    // ItemDescription
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
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
