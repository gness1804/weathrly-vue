<template>
  <div
    class="no-weather-component"
    v-bind:style="mainContainer"
  >
    <p
      v-bind:style="mainText"
    >
    No Weather to Show! Please enter either a US city and state or a valid 5 digit US zip code. Sorry, international locations are not currently supported.
    </p>
  </div>
</template>

<script>
import styles from '../styles/NoWeatherComponent-styles';

export default {
  name: 'NoWeatherComponent',
  data() {
    return {
      mainContainer: styles.mainContainer,
      mainText: styles.mainText,
    };
  },
};
</script>

<style scoped>

</style>
