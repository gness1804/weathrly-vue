<template>
  <div class="zip-input">
    <input
      type="number"
      v-model="zip"
      v-on:change="onZipChange"
      placeholder="Enter Zip"
    />
  </div>
</template>

<script>
export default {
  name: 'ZipInput',
  data() {
    return {
      zip: 78757,
    };
  },
  methods: {
    onZipChange: function () {
      this.$emit('setZip', this.zip);
    },
  },
};
</script>

<style scoped>

</style>
