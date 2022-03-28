<template>
  <section>
    chat whit:{{msgTo.fullname}}
   
    
    <ul>
      <li v-for="(msg, idx) in msgs" :key="idx">
        <b>{{ msg.from }}:</b>{{ msg.txt }}
      </li>
    </ul>

    <form id="form">
      <select>
        <option value="">All</option>
      </select>
      <input id="input" autocomplete="off" name="txt" v-model="msg" />
      <button @click="sendMsg">Send</button>
    </form>
  </section>
</template>

<script>
export default {
   props: {
      msgTo: Object,
    },
  data() {
    return {
      msgs: [],
      msg: "",
    };
  },
  created() {
    this.msgs.push({ from: this.loggedinUser._id, to: this.to, txt: "hello" });
    socketService.on("chat getMsg", this.getMsg);
    socketService.on("chat logU", this.logU);
  },
  destroyed() {
    socketService.off("chat getMsg", this.getMsg);
    socketService.off("chat addMsg", this.addMsg);
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },

  methods: {
    addMsg(msg) {
      this.msgs.push(msg);
    },
    getMsg(msg) {
      this.msgs.push({
        from: msg.from,
        to: this.loggedinUser._id,
        txt: msg.txt,
      });
    },
    sendMsg() {
      let msg = { from: this.loggedinUser._id, to: this.msgTo.id, txt: this.msg };
      socketService.emit("chat newMsg", msg);
      this.msg = "";
    },
    logU() {
      console.log("logUUUUUUUUUUUUUUUUUUUUUUUUUUUUU");
    },
  },

  components: {},
};
</script>

<style>
body {
  margin: 0;
  padding-bottom: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
}

#form {
  background: rgba(0, 0, 0, 0.15);
  padding: 0.25rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 3rem;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
}

#input {
  border: none;
  padding: 0 1rem;
  flex-grow: 1;
  border-radius: 2rem;
  margin: 0.25rem;
}

#input:focus {
  outline: none;
}

#form > button {
  background: #333;
  border: none;
  padding: 0 1rem;
  margin: 0.25rem;
  border-radius: 3px;
  outline: none;
  color: #fff;
}

#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#messages > li {
  padding: 0.5rem 1rem;
}

#messages > li:nth-child(odd) {
  background: #efefef;
}
</style>
