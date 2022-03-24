<template>
  <div>
    <div>
      <label for="">SIGN UP</label>
      <form @submit.prevent="signup">
        <input
          type="text"
          v-model="signupCred.fullname"
          placeholder="Enter full name"
        />
        <input
          type="text"
          v-model="signupCred.username"
          placeholder="Enter username"
        />
        <input
          type="password"
          v-model="signupCred.password"
          placeholder="Enter password"
        />
        <button>Signup Now!</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
        signupCred: { username: "", password: "", fullname: "" },
      };
    },
    methods: {
      async signup() {
        try {
          await this.$store.dispatch({
            type: "signup",
            userCred: this.signupCred,
          });
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
</script>

<style></style>
