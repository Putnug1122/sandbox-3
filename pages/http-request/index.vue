<template>
  <div>
    <h1 class="text-center">HTTP REQUEST</h1>
    <items-button @click.native="addClass" />
    <div class="row">
      <div class="col-md-3" v-for="(kelas, i) in listClass" :key="i">
        <class-item
          :name="kelas.name"
          :desc="kelas.description"
          :img="kelas.img"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listClass: [],
    }
  },
  mounted() {
    this.GET_CLASS()
  },
  methods: {
    async GET_CLASS() {
      const listKelas = await this.$axios.$get('api/class')
      this.listClass = listKelas.data
    },
  },
}
</script>
