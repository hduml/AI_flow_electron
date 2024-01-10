<template>
  <div>
    <div v-for="index in layout_num" :key="index" class="row">
      <label>{{ `Label ${index}` }}</label>
      <input type="text" :id="`input-${index}`" />
      <label>Unit</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    layout_num: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
}
</style>
