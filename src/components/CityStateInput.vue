<template>
  <div class="city-state-input">
    <input
      type="text"
      v-model="city"
      placeholder="Enter City"
    />
  </div>
</template>

<script>
export default {
  name: 'CityStateInput',
  data() {
    return {
      city: '',
    };
  },
};
</script>

<style scoped>

</style>


