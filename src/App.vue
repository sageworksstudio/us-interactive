<template>
  <USMap/>
</template>

<script>
  import USMap from './components/US-Map.vue'
  export default {
    name: 'us-interactive',
    components: {
      USMap
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
</style>
