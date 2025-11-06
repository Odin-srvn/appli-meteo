import { createApp } from "vue";
import App from "./App.vue";
import layout from "./views/layout.vue";
import '@/scss/style.scss';

import '@/style.css';


createApp(App).mount("#app");
createApp(layout).mount("#layout");