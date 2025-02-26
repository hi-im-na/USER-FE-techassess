import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { VueQueryPlugin, QueryClient } from "@tanstack/vue-query";
// router
import router from "@/router/routes";

// import css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "vue3-toastify/dist/index.css";
import "@/styles/style.css";
import "@/styles/index.css";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5,
    },
  },
});

const app = createApp(App);
const pinia = createPinia();
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: "light",
    },
  },
});
app.use(pinia);
app.use(router);
app.use(VueQueryPlugin, { queryClient });
app.mount("#app");
