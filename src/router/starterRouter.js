// Import Vue and Router
import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "../layout/starter/SampleLayout.vue";
import login from "@/pages/Typography.vue";
import Starter from "../layout/starter/SamplePage.vue";

// Initialize Vue Router
Vue.use(Router);

// Define routes
const routes = [
  {
    path: "/",
    name: "Login",
    component: login,
  },
];

// Create Vue Router instance
const router = new Router({
  routes,
});

// Save data to local storage
const data = [
  {
    id: 1,
    item: "Alimentos não perecíveis",
    quantidade: "50 unidades",
  },
  {
    id: 2,
    item: "Roupasde Inverno",
    quantidade: "50 peças",
  },
  {
    id: 3,
    item: "Material Escolar",
    quantidade: "20 kits",
  },
];

// Convert data to JSON string and save to local storage
localStorage.setItem("initiativeData", JSON.stringify(data));

// Export Vue Router instance
export default router;
