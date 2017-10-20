<template>
  <div class="landing">
    <h2>{{ msg }}</h2>
    <div class="input-container">
      <p v-if="mode === 'cityState'">I should appear only in cityState mode.</p>
      <p v-if="mode === 'zip'">I should appear only in zip mode.</p>
    </div>
    <div class="mode-selection-container">
      <p>Please choose a mode:</p>
      <button v-on:click="setCityMode">City and State</button>
      <button v-on:click="setZipMode">Zip</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      msg: 'Please select a location.',
      mode: 'cityState',
    };
  },
  methods: {
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
