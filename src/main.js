<<<<<<< HEAD
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/scss/styles.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
=======
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/scss/styles.scss'

>>>>>>> 73e337fb351c58fe5669caf1b09aa14572ff1976

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ElementPlus);

<<<<<<< HEAD
app.mount("#app");
=======
const app = createApp(App)

app.use(router)
app.use(store)



app.mount('#app')
>>>>>>> 73e337fb351c58fe5669caf1b09aa14572ff1976
