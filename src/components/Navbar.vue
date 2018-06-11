<template>
  <nav class="navbar navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://mikepeiman-experiment.firebaseapp.com/#/">
        <img src="../assets/lifewardlabs-logo-light-v1.1.png" alt="Bulma: a modern CSS framework based on Flexbox" width="auto">
      </a>
      <a role="button" class="navbar-burger burger" @click="toggleMenu" :class="{'is-active': navIsActive}" data-target="mainNav" aria-label="menu" aria-expanded="false" >
        <span class="icon">
          <i class="fas fa-twitter" aria-hidden="true"></i>
        </span>
              <a class="navbar-item">
        <router-link class="navbar-link" to="/">Home</router-link>
      </a>
      <a class="navbar-item">
        <router-link class="navbar-link" to="Tasks">Tasks</router-link>
      </a>
      <a class="navbar-item">
        <router-link class="navbar-link" to="Timer">Timer</router-link>
      </a>
      <a class="navbar-item">
        <router-link class="navbar-link" to="Game">Game</router-link>
      </a>
      <a class="navbar-item">
        <router-link class="navbar-link" to="Burst">Burst</router-link>
      </a>
      <a class="navbar-item">
        <router-link class="navbar-link" to="Protovue-grid">Protovue Grid</router-link>
      </a>
      </a>
    </div>
 

    <div class="navbar-menu">
      <a class="navbar-item">
        <router-link class="navbar-link" to="/">Home</router-link>
      </a>
      <a class="navbar-item">
        <router-link class="navbar-link" to="Tasks">Tasks</router-link>
      </a>
      <a class="navbar-item">
        <router-link class="navbar-link" to="Timer">Timer</router-link>
      </a>
      <a class="navbar-item">
        <router-link class="navbar-link" to="Game">Game</router-link>
      </a>
      <a class="navbar-item">
        <router-link class="navbar-link" to="Burst">Burst</router-link>
      </a>
      <a class="navbar-item">
        <router-link class="navbar-link" to="Protovue-grid">Protovue Grid</router-link>
      </a>
        <div class="navbar-start">
        </div>
        <div class="navbar-end">
        </div>
    </div>

  </nav>
</template>


<script>
  export default {
    name: 'Navbar',
    data () {
      return {
        navIsActive: false
      }
    },
    methods: {
      toggleMenu: function () {
        this.navIsActive = !this.navIsActive
      }
    }
  }
</script>

<style scoped>
  .navbar {
    background: #eee;
  }
</style>

