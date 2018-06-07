<template>
<div id="tasks">
    <Card />
    <h2>Table with calculations</h2>
    <p>This will gradually evolve into a unique tracking app idea I've been conceptually developing for many years.</p>
    <Card2 />
</div>
</template>

<script>
import Card from './Card.vue'
import Card2 from './Card2.vue'
export default {
  components: {
    Card,
    Card2
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
