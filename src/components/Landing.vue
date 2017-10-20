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
    <div class="weather-container" v-if="weather.length > 0">
      <each-weather-component
        v-for="forecast of weather"
        v-bind:key="forecast.id"
        v-bind:forecast="forecast"
      >
      </each-weather-component>
    </div>
    <no-weather-component
      v-else
    >
    </no-weather-component>
  </div>
</template>

<script>
import axios from 'axios';
import CityStateInput from './CityStateInput';
import ZipInput from './ZipInput';
import EachWeatherComponent from './EachWeatherComponent';
import NoWeatherComponent from './NoWeatherComponent';
import zipIsValid from '../helpers/zipIsValid';

export default {
  name: 'Landing',
  components: {
    CityStateInput,
    ZipInput,
    EachWeatherComponent,
    NoWeatherComponent,
  },
  data() {
    return {
      weather: [],
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
        return;
      }
      axios.get(`https://api.wunderground.com/api/47fe8304fc0c9639/forecast/q/${state}/${city.toUpperCase()}.json`)
        .then((data) => {
          if (data && data.data && data.data.forecast && typeof data.data.forecast !== 'undefined') {
            this.weather = data.data.forecast.txt_forecast.forecastday;
          }
        })
        .catch((err) => { throw new Error(err); });
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
