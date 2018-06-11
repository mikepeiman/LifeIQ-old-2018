<template>
<div id="tasks">
    <Card />
    <h2>Table with calculations</h2>
    <p>This will gradually evolve into a unique tracking app idea I've been conceptually developing for many years.</p>
    <Calculator />
</div>
</template>

<script>
import Card from './Card.vue'
import Calculator from './Calculator.vue'
export default {
  components: {
    Card,
    Calculator
  },
  name: 'tasks'
}
</script>

<style>
  #tasks {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .md-button {
   width: 20px !important;
  }
</style>
