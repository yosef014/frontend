import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/scss/styles.scss";
import ElementPlus from "element-plus";
import imgUpload from "./components/img-upload.vue";
import login from "./components/login.vue";
import signUp from "./components/sign-up.vue";
import VueUniversalModal from "vue-universal-modal";
import "vue-universal-modal/dist/index.css";
import "element-plus/dist/index.css";
// import VueMeta from 'vue-meta'
// navigator.serviceWorker.register('../sw.js');



const app = createApp(App);
// app.use(VueMeta)
app.use(router);
app.use(store);
app.use(ElementPlus);
app.use(VueUniversalModal, {
  teleportTarget: "#modals",
});


app.component("login", login);
app.component("signUp", signUp);
app.component("imgUpload", imgUpload);

app.mount("#app");
