<template>
  <div id="app">
    <h1>Weathrly: Your World, Your Weather.</h1>
    <Landing/>
  </div>
</template>

<script>
import Landing from './components/Landing';

export default {
  name: 'app',
  components: {
    Landing,
  },
};
</script>

<style>
html {
  background-color:#efc5b1;
}

#app {
  text-align: center;
  font-family: 'Oswald', sans-serif;
}
</style>
