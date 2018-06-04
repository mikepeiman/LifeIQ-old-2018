<template>
  <div id="card2" class="grid-container-1">
      <form class="grid-container-2 grid-column-2 flex-container">
        <md-field class="input-field grid-column-2 ">
          <md-input id="num1" v-model="num1" v-on:keyup.enter="calcItems"></md-input>
          <span class="md-helper-text">Number</span>
        </md-field>
        <md-button class="md-icon-button md-raised md-primary" id="operationButton1">
          <md-icon>X</md-icon>
        </md-button>
        <md-field class="input-field grid-column-3">
          <md-input id="num2" v-model="num2" v-on:keyup.enter="addItem2"></md-input>
          <span class="md-helper-text">Number</span>
        </md-field>
        <md-button v-on:click="calcItems" class="md-icon-button md-raised md-primary" id="calcButton">
          <md-icon>=</md-icon>
        </md-button>
        <md-field class="output-field grid-column-4">
          <md-input id="result"></md-input>
          <span class="md-helper-text">Result</span>
        </md-field>
      </form>
    <ul class="list-style-none flex-column item-list grid-column-4">
        <li v-for="(item, index) in results" class="list-item">
          <div class="item-text">{{ item.text }}</div>
          <md-button v-on:click="deleteItem2(index)" class="md-button">X</md-button>          
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Card2',
  data () {
    return {
      num1: '',
      num2: '',
      results: [
        { text: '' }
      ]
    }
  },
  methods: {
    calcItems: function () {
      var num1 = document.getElementById('num1')
      var num2 = document.getElementById('num2')
      if (num1.value !== '' && num2.value !== '') {
        this.results.push({
          text: num1.value + ' * ' + num2.value + ' = ' + num1.value * num2.value
        })
        this.num1 = ''
        this.num2 = ''
        // input.value = ''
      }
    },
    deleteItem2: function (index) {
      this.results.splice(index, 1)
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
  max-width: 2.5em !important;
  color: white;
  background: $color-primary-accent; //#336699;
  align-self: flex-start;
}
#addButton2 {
  margin-top: 10px;
}
#operationButton1 {
  margin-top: 10px;
  color: red;
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
  grid-template-columns: 15% 15% 15% 15%;
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
.input-field {
  width: 5em;
  border-left: 1px solid $color-primary-accent;
  border-right: 1px solid $color-primary-accent;
  border-top: 1px solid $color-primary-accent;
  text-decoration: none;
  padding-left: 5px;
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
