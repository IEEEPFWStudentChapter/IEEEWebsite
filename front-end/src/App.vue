<template>
<div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld/> -->
  <router-view></router-view>
  <Club/>
</div>
</template>

<script>
import Club from './views/Club'

export default {
  name: 'App',
  components: {
    Club
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
