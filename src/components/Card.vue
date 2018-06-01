<template>
  <div id="card">
  	<header>{{ title }}</header>
  	<div v-html="content"></div>
    <input id="itemForm" v-on:keypress.enter="addItem" />
    <button v-on:click="addItem">Add item</button>
    <ul>
        <li v-for="(item, index) in items">
          <button v-on:click="deleteItem(index)">X</button>
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
          input.value = ''
        }
      },
      deleteItem: function (index) {
        this.items.splice(index, 1)
      }
    }
  }
</script>