<template>
  <div
    class="each-weather-component"
    v-bind:style="mainContainer"
  >
    <h3>{{forecast.title}}</h3>
    <img
      v-bind:src="forecast.icon_url"
    />
    <p>{{forecast.fcttext}}</p>
  </div>
</template>

<script>
import styles from '../styles/EachWeatherComponent-styles';

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
      mainContainer: styles.mainContainer,
    };
  },
};
</script>

<style scoped>

</style>


