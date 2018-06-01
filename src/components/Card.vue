<template>
  <div id="card">
  	<header>{{ title }}</header>
  	<div v-html="content"></div>
      <form class="form-field">
        <md-field class="flex-field">
          <label>Enter a new item</label>
          <md-input id="itemForm" v-model="inputField" v-on:keyup.enter="addItem"></md-input>
          <span class="md-helper-text">Add an item to your list</span>
        </md-field>
        <md-button v-on:click="addItem" class="md-icon-button md-raised md-primary">
          <md-icon>+</md-icon>
        </md-button>
      </form>
      <!-- <div>
        <input id="itemForm" v-on:keyup.enter="addItem">
        <button v-on:click="addItem">Add Dinosaur</button>
      </div> -->
    <ul class="list-style-none">
        <li v-for="(item, index) in items">
          <md-button v-on:click="deleteItem(index)">X</md-button>
          {{ item.text }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {
      title: "Mike's cool card",
      content: "This is some <strong>critical</strong> info about <em>critical</em> stuff. It's critical. Cool.",
      inputField: '',
      items: [
        { text: 'Apples' },
        { text: 'Oranges' },
        { text: 'Peaches' }
      ]
    }
  },
  methods: {
    addItem: function () {
      var input = document.getElementById('itemForm')
      if (input.value !== '') {
        this.items.push({
          text: input.value
        })
        console.log('item ' + input.value + ' added')
        input.localValue = ''
        input.model = ''
        this.inputField = ''
        // this.input.value = ''
      }
    },
    deleteItem: function (index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.list-style-none {
  list-style-type: none;
}
.md-icon-button {
  width: 4em;
  height: 4em;  
  font-weight: 900;  
  color: white;
  background: #336699;
  align-self: center;
}
.form-field {
  display: flex;
  justify-content: center;
  /* align-content: center;  
  align-items: center;
  width: 50%; */
}
.flex-field {
  width: 20em;  
}
.entry {
  background: blue;
}
</style>
