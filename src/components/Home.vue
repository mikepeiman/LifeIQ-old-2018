<template>
    <div id="home">
      <Hello />
    </div>
</template>

<script>
import Hello from './Hello.vue'
import Card from './Card.vue'
import Tasks from './Tasks.vue'
import Timer from './Timer.vue'
import Burst from './Burst.vue'
import Protopage from './Protopage.vue'

export default {
  components: {
    Hello,
    Card,
    Tasks,
    Timer,
    Burst,
    Protopage
  },
  name: 'home'
}
</script>

<style>
  #home {
    display: flex;
    flex-direction: column;
    justify-content: center;  
  }
</style>
