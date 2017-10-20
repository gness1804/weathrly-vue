<template>
  <div class="each-weather-component">
    <h3>{{forecast.title}}</h3>
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


