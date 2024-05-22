/*
 =========================================================
 * Vue Black Dashboard - v1.1.3
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard
 * Copyright 2024 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from "vue-router-prefetch";
import App from "./App";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n";
import "./registerServiceWorker";
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
// Save dashboard data to local storage
const dashboardData = {
    completedTasks: "Quantidade distribuída",
    dailySales: "Daily Sales",
    performance: "Indicadores",
    simpleTable: "Saldo de Materiais",
    totalShipments: "Quantidade Recolhida",
    chartCategories: ["Accounts", "Purchases", "Sessions"],
    tasks: "Presença",
    tasks1: "Confirmação",
    today: "Nome",
    today1: "Material",
    dropdown: {
      action: "Action",
      anotherAction: "Another Action",
      somethingElse: "Something else"
    },
    usersTable: {
      title: "Simple Table",
      columns: ["Item", "Quantidade"],
      data: [
        {
          id: 1,
          item: "Alimentos não perecíveis",
          quantidade: "50 unidades"
        },
        {
          id: 2,
          item: "Roupasde Inverno",
          quantidade: "50 peças"
        },
        {
          id: 3,
          item: "Material Escolar",
          quantidade: "20 kits"
        }
      ]
    },
    taskList: [
      {
        title: "Ana Silva",
        description: "Contacto: 968******",
        done: false
      },
      {
        title: "Pedro Pontes",
        description: "Contacto: 968******",
        done: false
      },
      {
        title: "Afonso Pinheiro",
        description: "Contacto: 968******",
        done: false
      },
      {
        title: "Rogério Branco",
        description: "Contacto: 968******",
        done: false
      },
      {
        title: "Manuel Passos",
        description: "Contacto: 968******",
        done: false
      },
      {
        title: "João Ferreira",
        description: "Contacto: 968******",
        done: false
      },
      {
        title: "Diogo Leite",
        description: "Contacto: 968******",
        done: false
      }
    ],
    taskList1: [
      {
        title: "Mesas",
        description: "Quantidade: 55",
        done: false
      },
      {
        title: "Carrinhas",
        description: "Quantidade: 5",
        done: false
      },
      {
        title: "Sacos",
        description: "Quantidade: 100",
        done: false
      },
      {
        title: "Caixas",
        description: "Quantidade: 40",
        done: false
      },
      {
        title: "Panfletos",
        description: "Quantidade: 1250",
        done: false
      },
      {
        title: "Cartazes",
        description: "Quantidade: 25",
        done: false
      }
    ]
  
};

// Save the data to local storage
localStorage.setItem("dashboardData", JSON.stringify(dashboardData));
new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
