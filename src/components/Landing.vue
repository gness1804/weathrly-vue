<template>
  <div class="landing">
    <p>Data courtesy of:</p>
    <a
      v-bind:href="link"
      target="_blank"
      noopener
      noreferrer
    >
      <img
        src="../assets/logo.jpg"
        alt="Weather Underground logo"
        v-bind:style="logo"
      />
    </a>
    <h2 v-bind:style="h2">{{ msg }}</h2>
    <div class="input-container">
      <CityStateInput
        v-if="mode === 'cityState'"
        v-on:setCity="setCity"
        v-on:setState="setState"
        v-on:clearCity="clearCity"
      >
      </CityStateInput>
      <ZipInput
        v-if="mode === 'zip'"
        v-on:setZip="setZip"
        v-on:clearZip="clearZip"
      >
      </ZipInput>
    </div>
    <button
      v-on:click="getWeather"
      v-bind:style="getWeatherButton"
      class="get-weather-button"
    >
    Get Weather!
    </button>
    <div class="mode-selection-container">
      <h3 v-bind:style="h3">Please choose a mode:</h3>
      <button
        v-on:click="setCityMode"
        v-bind:style="setCityModeButton"
        class="set-city-mode-button"
      >
      City and State
      </button>
      <button
        v-on:click="setZipMode"
        v-bind:style="setZipModeButton"
        class="set-zip-mode-button"
      >
      Zip
      </button>
    </div>
    <div
      class="weather-container"
      v-if="weather.length > 0"
      v-bind:style="weatherContainer"
      >
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
import styles from '../styles/Landing-styles';

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
      h2: styles.h2,
      link: 'https://www.wunderground.com/',
      logo: styles.logo,
      getWeatherButton: styles.getWeatherButton,
      h3: styles.h3,
      setCityModeButton: styles.setCityModeButton,
      setZipModeButton: styles.setZipModeButton,
      weatherContainer: styles.weatherContainer,
    };
  },
  methods: {
    clearCity: function () {
      this.city = '';
    },
    clearZip: function () {
      this.zip = '';
    },
    getWeather: function () {
      const { city, state, zip, mode } = this;
      let url;
      if ((!city || !state) || !zipIsValid(zip)) {
        alert('Error: you are missing necessary data. Please check your input and try again.');
        return;
      }
      if (mode === 'cityState') {
        url = `https://api.wunderground.com/api/47fe8304fc0c9639/forecast/q/${state}/${city.toUpperCase()}.json`;
      } else {
        url = `https://api.wunderground.com/api/47fe8304fc0c9639/forecast/q/${zip}.json`;
      }
      axios.get(url)
        .then((data) => {
          if (data && data.data && data.data.forecast && typeof data.data.forecast !== 'undefined') {
            this.weather = data.data.forecast.txt_forecast.forecastday;
          } else {
            alert('Oops! Location data was invalid. Please check your location input and try again.');
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
  .get-weather-button:hover,
  .set-city-mode-button:hover,
  .set-zip-mode-button:hover {
    background-color:#8787ea !important;
    border-color: #8787ea !important;
    cursor: pointer;
  }
</style>
