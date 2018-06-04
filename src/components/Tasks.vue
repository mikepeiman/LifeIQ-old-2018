<template>
<div id="tasks">
    <Card />
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
