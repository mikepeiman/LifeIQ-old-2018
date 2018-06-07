<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
    <p>My home on the web for exploring app concepts and code experiements.</p>
    <h2>Essential Links</h2>
    <ul>
      <li><a class="essential-link" href="http://mikepeiman.com" target="_blank" rel="noopener">My Personal Blog</a></li>
      <li><a class="essential-link" href="http://catalystweb.design" target="_blank" rel="noopener">My Design Agency</a></li>
      <li><a class="essential-link" href="https://vuejs.org/" target="_blank" rel="noopener">VueJS</a></li>
      <li><a class="essential-link" href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome VueJS Resources</a></li>
    </ul>
    <h2>Technologies baked in:</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://vuematerial.io/" target="_blank" rel="noopener">vuematerial</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: "Mike Peiman's Experiments"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #05BDCD;
}

.essential-link {
  background: #05BDCD;
  padding: 10px;
  border-radius: 10px;
  color: white !important;
}
.essential-link:hover {
  background: #666;
}
</style>
