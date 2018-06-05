<template>
      <ul class="list-style-none flex-column item-list">
          <li v-for="(item, index) in results" v-if="item.value1 !== null" class="list-item">
            <div class="item-text">{{ item.value1 }}</div>
            <div class="item-text">{{ item.value2 }}</div>
            <div class="item-text">{{ item.result }}</div>
            <md-button v-on:click="deleteResult(index)" class="md-button">X</md-button>          
          </li>
      </ul>
</template>

<script>
  export default {
    name: 'CalculateResultsList',
    data () {
      return {
        num1: '',
        num2: '',
        results: [
          {
            value1: null,
            value2: null,
            result: null
          }]
      }
    },
    methods: {
      calcItems: function () {
        var num1 = document.getElementById('num1')
        var num2 = document.getElementById('num2')
        if (num1.value !== '' && num2.value !== '') {
          this.results.push({
            value1: num1.value,
            value2: num2.value,
            result: num1.value * num2.value
          })
          this.value1 = ''
          this.value2 = ''
        }
      },
      deleteResult: function (index) {
        this.results.splice(index, 1)
      }
    }
}
</script>
