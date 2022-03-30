<template>
  <section class="chat">
    <div class="chat-box-msgs">
      <div class="chat-box-header">
        <img :src="msgTo.imgUrl">
        conversation with: <b>{{ msgTo.fullname }} </b> 
        <p v-if="userTyping"> {{ userTyping }} is typing..</p>
      </div>

      <ul>
        <li v-for="(msg, idx) in msgs" :key="idx">
          <span>{{ msg.from }}:</span>
          {{ msg.txt }}
        </li>
      </ul>
    </div>
    <div>
      <form @submit.prevent="sendMsg">
        <input
          @input="typing"
          type="text"
          v-model="msg.txt"
          placeholder="Type your message.."
        />
        <button>Send</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    msgTo: Object,
  },
  data() {
    return {
      msg: {
        from: this.$store.getters.loggedinUser?.fullname || "Guest",
        txt: "",
      },
      msgs: [],
      topic: this.msgTo._id,
      userTyping: "",
    };
  },
  created() {
    socketService.emit("chat topic", this.topic);
    socketService.on("chat addMsg", this.addMsg);
    socketService.on("chat userTyping", this.setTyping);
  },
  destroyed() {
    socketService.off("chat addMsg", this.addMsg);
    socketService.off("chat userTyping", this.isTyping);
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },

  methods: {
    sendMsg() {
      socketService.emit("chat newMsg", this.msg);
      // next line for when broadcasting from server
      const msg = JSON.parse(JSON.stringify(this.msg));
      this.addMsg(msg);

      this.$emit("msgSent");
      this.doneTyping();
      this.msg.txt = "";
    },
    addMsg(msg) {
      if (this.$route.name =='user-page') {
        console.log('u in user page');
      this.msgs.push(msg);
      }else{
        alert('u have new mag to see from',msg.from)
        console.log('u no on user page');
      }

    },
    setTyping({ username, isDoneTyping }) {
      if (isDoneTyping) return (this.userTyping = "");
      // if doneTyping then set this.userTyping = ''
      this.userTyping = username;
      console.log("this.userTyping", this.userTyping);
    },
    typing() {
      console.log("typing...");
      const username = this.msg.from;
      if (!this.msg.txt.length) return this.doneTyping();
      socketService.emit("chat typing", { username });
    },
    doneTyping() {
      const username = this.msg.from;
      socketService.emit("chat typing", {
        username,
        isDoneTyping: true,
      });
    },
  },
  watch: {
    msgTo(newQuestion, oldQuestion) {
      socketService.emit("chat topic", newQuestion._id);
    },
  },

  components: {},
};
</script>

<style></style>
