import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/scss/styles.scss";
import ElementPlus from "element-plus";
import imgUpload from "./components/img-upload.vue";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus);
app.component("imgUpload", imgUpload);

app.mount("#app");
