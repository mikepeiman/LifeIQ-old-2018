<template>
<div id="tasks">
    <Card />
</div>
</template>

<script>
import Card from './Card.vue'
export default {
  components: {
    Card
  },
  name: 'tasks'
}
</script>

<style>
  #tasks {
    display: flex;
    justify-content: center;  
  }
  .md-button {
    width: 20px !important;
  }
</style>
