import { createApp } from "vue";
import App from "./app.vue";

// 全局引入
import pacsDesign from "@pacsdesignvue/components";

const app = createApp(App);
app.use(pacsDesign);
app.mount("#app");