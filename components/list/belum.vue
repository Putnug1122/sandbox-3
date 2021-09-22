<template>
  <div>
    <div class="container">
      <div class="col">
        <input type="checkbox" name="item" id="item" v-model="val" />
        <label for="item">{{ value }}</label>
        <button class="btn btn-secondary"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // name: { type: String, default: '' },
    status: { type: Boolean, default: false },
    value: { type: String, default: 'Belajar REST API' },
  },
  computed: {
    val: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit('input', newVal)
      },
    },
  },
}
</script>
