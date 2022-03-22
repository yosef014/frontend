<template>
  <h1>hello im details</h1>
</template>

<script>
  import { gigService } from "../services/gig-service";
  export default {
    data() {
      return {
        gig: null,
      };
    },
    async created() {
      const { id } = this.$route.params;
      this.gig = await gigService.getById(id);
      console.log(this.gig);
    },
  };
</script>

<style></style>
