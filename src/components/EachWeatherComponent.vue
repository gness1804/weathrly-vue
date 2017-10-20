<template>
  <div class="each-weather-component">
    <p>I am the Each Weather component.</p>
  </div>
</template>

<script>
export default {
  name: 'EachWeatherComponent',
  props: {
    forecast: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>

</style>


