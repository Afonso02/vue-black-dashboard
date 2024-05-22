
import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from "vue-router-prefetch";
import App from "./App";
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
    doacoes:"50Kg de arroz, 40Kg de massa, ...",
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
          item: "Roupas de Inverno",
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
        presenca: "Ausente"
      },
      {
        title: "Pedro Pontes",
        description: "Contacto: 968******",
        presenca: "Ausente"
      },
      {
        title: "Afonso Pinheiro",
        description: "Contacto: 968******",
        presenca: "Ausente"
      },
      {
        title: "Rogério Branco",
        description: "Contacto: 968******",
        presenca: "Ausente"
      },
      {
        title: "Manuel Passos",
        description: "Contacto: 968******",
        presenca: "Ausente"
      },
      {
        title: "João Ferreira",
        description: "Contacto: 968******",
        presenca: "Ausente"
      },
      {
        title: "Diogo Leite",
        description: "Contacto: 968******",
        presenca: "Ausente"
      }
    ],
    taskList1: [
      {
        title: "Mesas",
        description: "Quantidade: 55",
        presenca: "Ausente"
      },
      {
        title: "Carrinhas",
        description: "Quantidade: 5",
        presenca: "Ausente"
      },
      {
        title: "Sacos",
        description: "Quantidade: 100",
        presenca: "Ausente"
      },
      {
        title: "Caixas",
        description: "Quantidade: 40",
        presenca: "Ausente"
      },
      {
        title: "Panfletos",
        description: "Quantidade: 1250",
        presenca: "Ausente"
      },
      {
        title: "Cartazes",
        description: "Quantidade: 25",
        presenca: "Ausente"
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
