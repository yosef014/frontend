<template>
  <section>
    <section class="">
      <el-input
        v-model="filterBy.seller"
        @input="setFilter"
        placeholder="Filter by seller"
      />

      <div>
        <el-radio-group v-model="filterBy.sortBy" @change="setFilter">
          <el-radio-button label="title" />
          <el-radio-button label="Price" />
          <el-radio-button label="rate" />
        </el-radio-group>
      </div>
    </section>

    <div class="slider-demo-block">
      <el-slider
        v-model="filterBy.price"
        range
        show-stops
        :max="250"
        @change="setFilter"
      />
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      filterBy: {
        seller: "",
        price: ref([80, 150]),
        sortBy: "",
      },
    };
  },
  components: {},
  async created() {},
  computed: {},

  methods: {
    setFilter() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy));
      this.$store.dispatch({ type: "setFilter", filterBy });
    },
  },
};
</script>
