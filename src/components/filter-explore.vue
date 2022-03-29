<template>
  <section>
    <div class="filter-explore-container">

    <section class="filter-explore-search">
      Search seller:
      <el-input
        v-model="filterBy.seller"
        @input="setFilter"
        placeholder="Filter by seller"
      />
      </section>
    <section class="filter-explore-sortby">
      <div>
        Sory By:
         <el-select
        v-model="filterBy.sortBy"
      placeholder="Select"
      style="width: 240px"
      @change="setFilter"
      
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        
      />
         

    </el-select>
      </div>
     

    <div class="slider-demo-block">
      Price range:
      <el-slider
        v-model="filterBy.price"
        range
        show-stops
        :max="250"
        @change="setFilter"
      />
    </div>
    </section>
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
        price: ref([0, 250]),
        sortBy: "",
      },
      options : [
  {
    value: 'Price',
    label: 'Price',
  },
  {
    value: 'rate',
    label: 'rate',
  },
  {
    value: 'title',
    label: 'title',
  },
      ]
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
