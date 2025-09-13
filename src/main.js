import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { initDb } from './services/cartDb'; // Import initDb

// Initialize the database
initDb().then(() => {
  createApp(App).use(router).mount('#app');
}).catch(err => {
  console.error("Failed to initialize database:", err);
});