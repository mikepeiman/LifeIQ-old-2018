<template>
  <div id="protovue-grid">
    <v1-intro title="Protovue prototyping framework" version="v1">
      <p>Just another tool I'm checking out.</p>
      <p>Seems a bit buggy to begin with, but admittedly they are in alpha stage.</p>
      <p>Anyhow, it's a grid, that's for sure.</p>
    </v1-intro>
    <v1-chart height="300" />
    <!-- <v1-grid guides size="12x10" gap="10"></v1-grid> -->
    <v1-avatar count="5" x="6" />
    <!-- <v1-nav links="5" y="5" /> -->
    <v1-cell class="cell-1" id="cell-1" size="12x2" x="5" y="5" border />
    
    
    <!-- <v1-footer links="5" /> -->
  </div>
</template>

<script>
  export default {
    name: 'Protopage'
  }
</script>

<style scoped>
#cell-1 {
  background: red;
  border-color: rgba(0,50,100,1);
}
.cell-1 {
  background: red;
  border-color: rgba(0,50,100,1);
}
</style>


