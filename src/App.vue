<template>
  <USMap />
</template>

<script>
import USMap from '@/components/USMap'
export default {
  name: 'App',
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
  background-color: #FFFAFA;
  margin: 0;
  padding: 0;
}
</style>
