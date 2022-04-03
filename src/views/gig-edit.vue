<template>
  <section class="page-content-container">
    <section v-if="gigToEdit" class="edit-gig-container">
      <section class="gig-edit-form-left">
        <section class="section-one">
          <div class="gig-title grid-div">
            <h3>Gig Title</h3>
            <el-input
              type="textarea"
              v-model="gigToEdit.title"
              class="title-input"
              placeholder="I will do something i'm really good at"
            ></el-input>
          </div>

          <h3>Gig Description</h3>
          <el-input
            class="gig-description-textarea"
            type="textarea"
            v-model="gigToEdit.description"
            placeholder="Describe your gig"
          ></el-input>
        </section>
        <section class="section-two">
          <div class="category-group-form">
            <h3>Category</h3>
            <el-select v-model="gigToEdit.categories" placeholder="Category">
              <el-option
                v-for="item in categories"
                :key="item.label"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </div>
          <div class="delivery-time-form">
            <h3>Dellvery Time (Days)</h3>
            <el-input
              type="number"
              placeholder="Dellvery Time"
              v-model.number="gigToEdit.avgResponceTime"
            ></el-input>
          </div>
          <div class="gig-price-form">
            <h3>Price ($)</h3>
            <el-input
              type="number"
              placeholder="Price"
              v-model.number="gigToEdit.price"
            ></el-input>
          </div>
        </section>
        <section class="section-three">
          <img-upload class="image-uploader" @save="saveImg" />
          <img v-for="img in imgUrls" :key="img" :src="img" alt="" class="image-upload-display">
        </section>
      </section>
      <section class="gig-edit-form-right">
        <section class="section-four">
          <h3>Package Description:</h3>
          <el-input
            type="textarea"
            v-model="gigToEdit.description"
            placeholder="Describe your package gig"
            class="package-description-input"
          ></el-input>
          <div class="revision grid-div">
            <h3>Revisions:</h3>
          </div>
        </section>
        <div class="btn-div">
          <button @click="save">Create Gig</button>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import { gigService } from "../services/gig-service.js";
import imgUpload from "../components/img-upload.vue";

export default {
  components: {
    imgUpload,
  },
  data() {
    return {
      gigToEdit: null,
      imgUrls: [],
      categories: [
        "logo",
        "arts and crafts",
        "data entry",
        "marketing",
        "research and summeries",
      ],
      imgUrls: [],
      userAvatar: null,
    };
  },
  created() {
    this.loadGig();
  },
  computed: {
    gigId() {
      return this.$route.params.id;
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  methods: {
    saveImg(imgUrl) {
      this.gigToEdit.productImgs.push(imgUrl);
      this.imgUrls.push(imgUrl)
    },
    setAvatar(imgUrl) {
      this.userAvatar = imgUrl;
    },
    async loadGig() {
      if (this.gigId) {
        const gig = await gigService.getById(this.gigId);
        this.gigToEdit = JSON.parse(JSON.stringify(gig));
      } else {
        console.log("ein");

        this.gigToEdit = gigService.getEmptyGig();
      }
    },
    async save() {
      if (this.gigToEdit._id) {
        try {
          await this.$store.dispatch({
            type: "updateGig",
            gig: this.gigToEdit,
          });
          this.$router.push("/seller");
        } catch (err) {
          console.log("Editing Error (gig-edit):", err);
        }
      } else {
        try {
          this.gigToEdit.category = [this.gigToEdit.category];
          this.gigToEdit.owner = {
            _id: this.loggedinUser._id,
            fullname: this.loggedinUser.username,
            imgUrl: this.loggedinUser.imgUrl,
            username: this.loggedinUser.fullname,
            level: this.loggedinUser.level,
          };
          const savedGig = await this.$store.dispatch({
            type: "addGig",
            gig: this.gigToEdit,
          });
          this.gigToEdit = gigService.getEmptyGig();
          this.$router.push("/seller");
        } catch (err) {
          console.log("Adding Error (gig-edit):", err);
        }
      }
    },
  },
};
</script>

<style></style>
