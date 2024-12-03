<template>
  <Layout />
</template>

<script>
import Layout from '@/components/layout/index.vue'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
</style>
