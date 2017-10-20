<template>
  <div class="zip-input">
    <input
      type="number"
      v-model="zip"
      v-on:change="onZipChange"
      placeholder="Enter Zip"
    />
    <img
      src="../assets/cancel-circle.png"
      alt="Clear text"
      v-on:click="clearZip"
      v-bind:style="cancelIcon"
      title="Clear zip"
    />
  </div>
</template>

<script>
import styles from '../styles/ZipInput-styles';

export default {
  name: 'ZipInput',
  data() {
    return {
      zip: 78757,
      cancelIcon: styles.cancelIcon,
    };
  },
  methods: {
    clearZip: function () {
      this.zip = null;
    },
    onZipChange: function () {
      this.$emit('setZip', this.zip);
    },
  },
};
</script>

<style scoped>

</style>
