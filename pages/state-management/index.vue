<template>
  <div>
    <h1 class="text-center">State Management</h1>
    <!-- <h3>{{ listClass }}</h3> -->
    <div class="row">
      <div class="col-md-4" v-for="(menu, i) in listClass" :key="i">
        <class-item
          :name="menu.name"
          :desc="menu.description"
          :img="menu.img"
        />
      </div>
    </div>
  </div>
</template>
<script>
import request from '../../mixins/request.vue'
export default {
  mixins: [request],
  data() {
    return {
      // listClass: this.$store.state.class.class,
    }
  },
  computed: {
    listClass() {
      return this.$store.state.class.class
    },
  },
  mounted() {
    this.GET_CLASS()
  },
  methods: {
    async GET_CLASS() {
      const listData = await this.requestGet('/api/class')
      console.log(listData)
      this.$store.dispatch('class/setClass', listData.data)
    },
  },
}
</script>
