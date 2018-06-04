<template>
  <div id="card" class="grid-container-1">
      <form class="grid-container-2 grid-column-2 flex-container">
        <md-field class="flex-field">
          <label>Enter a new item</label>
          <md-input id="itemForm" v-model="inputField" v-on:keyup.enter="addItem"></md-input>
          <span class="md-helper-text">Add an item to your list</span>
        </md-field>
        <md-button v-on:click="addItem" class="md-icon-button md-raised md-primary" id="addButton">
          <md-icon>+</md-icon>
        </md-button>
      </form>
    <ul class="list-style-none flex-column item-list grid-column-3">
        <li v-for="(item, index) in items" v-if="item.text !== null" class="list-item">
          <div class="item-text">{{ item.text }}</div>
          <md-button v-on:click="deleteItem(index)" class="md-button">X</md-button>          
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      inputField: '',
      items: [
        { text: 'Apples' },
        { text: 'Oranges' },
        { text: 'Peaches' },
        { text: null },
        { text: 'Fifth' }
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
        this.inputField = ''
        // input.value = ''
      }
    },
    deleteItem: function (index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<style  lang="scss" scoped>
$color-primary: #00ccff;
$color-primary-accent: adjust-color($color-primary, $lightness: -10);


.list-style-none {
  list-style-type: none;
}
.md-button, .md-ripple {
  min-width: 2.5em !important;
  color: white;
  background: $color-primary-accent; //#336699;
  align-self: flex-start;
}
#addButton {
  margin-top: 20px;
}
.md-icon {
  padding-bottom: 0.3em;
}
@media screen and (min-width: 900px) {
  .grid-container-1 {
  display: grid;
  grid-template-columns: 5% 45% 45% 5%;
  grid-template-rows: 100%;
  }
}
.grid-container-1 {
  display: grid;
  grid-template-columns: 15% 35% 35% 15%;
  grid-template-rows: 100%;
}
.grid-container-2 {
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 100%;
}
.grid-column-1 {
  grid-column-start: 1;
}
.grid-column-2 {
  grid-column-start: 2;
}
.grid-column-3 {
  grid-column-start: 3;
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.flex-column {
  flex-direction: column;
}
.flex-field {
  width: 20em;  
}
.entry {
  background: blue;
}
ul {
  display: flex;
  /* align-items: center; */
  /* align-content: center; */
  justify-content: center;
}
.item-list {
  background: rgba(0,0,0,0.25);
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
  display: flex;
}
.list-item {
  display: flex;
  justify-content: space-between;
}
.item-text {
  align-self: center;
  justify-self:center;
  padding: 1em;
}
</style>
