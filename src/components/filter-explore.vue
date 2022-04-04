<template>
  <section v-if="!isLoading">
    <div class="filter-explore-container">
      <!-- // filter by sort  -->

      <div class="seller-search-container">
        <p>Search Seller</p>
        <el-input
          class="filter-explore-search"
          v-model="filterBy.seller"
          @input="setFilter"
          placeholder="Filter by seller"
        />
      </div>

      <div class="filter-explore-sortby">
        <p>Sort By</p>
        <el-select
          v-model="filterBy.sortBy"
          placeholder="Select"
          @change="setFilter"
        >
          <el-option
            class="filter-explore-sortby"
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <!-- //filter by budget price -->
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
          <template class="budget-btn" #reference>
            <el-button>Budget</el-button>
          </template>
        </el-popover>

        <!-- // filter by best seller -->
      </div>
      <div class="sortby-pro-seller-container">
        <el-switch
          class="pro-seller-switch"
          v-model="filterBy.level"
          @change="setFilter"
        />
        <p>Pro Services</p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      visible: false,
      filterBy: {
        seller: "",
        price: "250",
        // price: ref([0, 250]),
        sortBy: "",
        level: false,
      },
      options: [
        {
          value: "Price",
          label: "Price",
        },
        {
          value: "Rate",
          label: "Rate",
        },
        {
          value: "Title",
          label: "Title",
        },
      ],
    };
  },
  components: {},
  async created() {},
  computed: {
    priceRender() {
      if (this.filterBy.price === "250") return "Price: Any";
      else return `Price: ${this.filterBy.price}$`;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },

  methods: {
    setFilter() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy));
      this.$store.dispatch({ type: "setFilter", filterBy });
      this.$store.dispatch({ type: "isLoading", isLoading: false });
    },
  },
};
</script>
