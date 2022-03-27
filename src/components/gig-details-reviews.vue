<template>
    <div v-if="gig" class="gig-details-reviews">
      <el-input
            type="textarea"
            v-model="reviewToAdd.review"
            placeholder="What was your goal in buying this Gig? How did the seller help you achieve it?"
          ></el-input>
          <button @click="addReview()">add</button>
      <h4>Reviews: </h4>
        
      <ul>
        <li v-for="review in gig.reviewers" :key="review">
            <p>publisher : <b>
                {{review.username}}
                {{review.name}}
                <br>
          <p>{{ review.review }}</p>

                <br>
                <br>
                <br>
            </b>
            </p>
        </li>
      </ul>  
      </div>
</template>

<script>
import { gigService } from "../services/gig-service";
export default {
    name:'gig-details-review',
    data() {
        return {
        gig:null,  
        reviewToAdd: {
        review: "",
        },    
        }
    },
    created() {
      this.loadGig();
    },
    computed: {
      loggedInUser() {
        return this.$store.getters.loggedinUser;
      },
    },
    methods: {
      async loadGig() {
        const { id } = this.$route.params;
        this.gig = await gigService.getById(id);
      },
     async addReview() {
      const review = this.reviewToAdd;
      review.username = this.loggedInUser.username;
      review.fullname = this.loggedInUser.fullname;
      review.reviewAt = Date.now();
      review.imgUrl = this.loggedInUser.imgUrl
      this.gig.reviewers.push(review)
      await this.$store.dispatch({type:'updateGig', gig:this.gig})
       },
    },
}
</script>

<style>

</style>