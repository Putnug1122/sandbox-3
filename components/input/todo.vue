<template>
  <div class="row my-2">
    <div class="col-md-3">
      <label class="text-capitalize" for="">Input</label>
    </div>
    <div class="col-md-9">
      <input
        :type="type"
        v-model="val"
        class="form-control"
        placeholder="Masukan Note"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: { type: String, default: '' },
    status: { type: Boolean, default: false },
  },
  computed: {
    val: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('get', value)
      },
    },
  },
}
</script>
