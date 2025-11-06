import { createApp } from "vue";
import App from "./App.vue";
import router from './router/index.js'
import '@/scss/style.scss';

//import '@/style.css';


createApp(App)
  .use(router) 
  .mount('#app')
