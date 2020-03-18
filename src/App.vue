<template>
    <div id="app">
        <Map/>
    </div>
</template>

<script>
    import Map from './components/Map.vue'
    export default {
        name: 'us-interactive',
        components: {
            Map
        }
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
    }
</style>
