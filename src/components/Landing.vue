<template>
  <div class="landing">
    <h2>{{ msg }}</h2>
    <div class="input-container">
      <CityStateInput
        v-if="mode === 'cityState'"
        v-on:setCity="setCity"
      >
      </CityStateInput>
      <ZipInput v-if="mode === 'zip'"></ZipInput>
    </div>
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
      city: '',
      state: '',
      zip: '',
    };
  },
  methods: {
    setCity: function (city) {
      this.city = city;
    },
    setCityMode: function () {
      this.mode = 'cityState';
    },
    setZipMode: function () {
      this.mode = 'zip';
    },
  },
};
</script>

<style scoped>

</style>
