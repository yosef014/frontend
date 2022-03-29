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
      <!-- //slider -->
    <div class="slider-demo-block">
  <el-popover
    placement="bottom-end"
    :title="priceRender"
    :width="200"
    trigger="hover"
  >
     <el-slider
        v-model="filterBy.price"
        :step="5"
        show-stops
        :show-tooltip="false"
        :max="250"
        @change="setFilter"
      />
    <template #reference>
      <el-button>Budget</el-button>
    </template>
  </el-popover>
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
      visible:false,
      filterBy: {
        seller: "",
        price: "",
        // price: ref([0, 250]),
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
  computed: {
     priceRender() {
      if (this.filterBy.price === 300) return "Any";
      else return `Price ${this.filterBy.price}`;
    },
  },

  methods: {
    setFilter() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy));
      this.$store.dispatch({ type: "setFilter", filterBy });
    },
  },
};
</script>
