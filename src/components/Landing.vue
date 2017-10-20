<template>
  <div class="landing">
    <h2>{{ msg }}</h2>
    <div class="input-container">
      <CityStateInput
        v-if="mode === 'cityState'"
        v-on:setCity="setCity"
        v-on:setState="setState"
      >
      </CityStateInput>
      <ZipInput
        v-if="mode === 'zip'"
        v-on:setZip="setZip"
      >
      </ZipInput>
    </div>
    <button v-on:click="getWeather">Get Weather!</button>
    <div class="mode-selection-container">
      <p>Please choose a mode:</p>
      <button v-on:click="setCityMode">City and State</button>
      <button v-on:click="setZipMode">Zip</button>
    </div>
  </div>
</template>

<script>
import CityStateInput from './CityStateInput';
import ZipInput from './ZipInput';
import zipIsValid from '../helpers/zipIsValid';

export default {
  name: 'Landing',
  components: {
    CityStateInput,
    ZipInput,
  },
  data() {
    return {
      msg: 'Please select a location.',
      mode: 'cityState',
      city: 'Austin',
      state: 'TX',
      zip: '78757',
    };
  },
  methods: {
    getWeather: function () {
      const { city, state, zip } = this;
      if ((!city || !state) || !zipIsValid(zip)) {
        alert('Error: you are missing necessary data. Please check your input and try again.');
        // return;
      }
    },
    setCity: function (city) {
      this.city = city;
    },
    setCityMode: function () {
      this.mode = 'cityState';
    },
    setState: function (state) {
      this.state = state;
    },
    setZip: function (zip) {
      this.zip = zip.toString();
    },
    setZipMode: function () {
      this.mode = 'zip';
    },
  },
};
</script>

<style scoped>

</style>
