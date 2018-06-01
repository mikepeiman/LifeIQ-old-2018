import Vue from 'Vue'
import MaterialInput from 'vue-material-input'

const vm = new Vue({
  el: '#app', // note that `#app` must be presented in the html
  template: (
    '<form><p>Hello, {{ username }}</p>' +
      '<MaterialInput name="name" v-model="username">Your name</MaterialInput>' +
    '</form>'
  ),
  data () {
    return {
      username: 'admin'
    }
  },
  components: {
    MaterialInput
  }
})