<template>
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <card type="tasks" :header-classes="{ 'text-right': isRTL }">
        <template slot="header">
          <h6 style="padding-left: 12px" class="title d-inline">
            {{ $t("dashboard.tasks") }}
          </h6>
          <p style="padding-left: 46px" class="card-category d-inline">{{ $t("dashboard.today") }}</p>
        </template>
        <div class="table-full-width table-responsive">
          <task-list></task-list>
        </div>
      </card>
    </div>
    <div class="col-lg-6 col-md-12">
      <card type="tasks" :header-classes="{ 'text-right': isRTL }">
        <template slot="header">
          <h6 class="title d-inline">
            {{ $t("dashboard.tasks1") }}
          </h6>
          <p style="padding-left: 38px" class="card-category d-inline">{{ $t("dashboard.today1") }}</p>
        </template>
        <div class="table-full-width table-responsive">
          <TaskList1></TaskList1>
        </div>
      </card>
    </div>
    <div class="col-lg-6 col-md-12">
      <card :header-classes="{ 'text-right': isRTL }">
        <div class="col-md-3 px-md-1">
          <h3>Banco Alimentar - Porto</h3>
        </div>
        <div class="col-md-3 px-md-1">
          <p class="title">Responável:</p>
          <p class="title">{{ model.nome }}</p>
          <br>
        </div>
        <div class="col-md-3 px-md-1">
          <base-input
            label="Doações"
            placeholder="Escrever aqui as doações."
            v-model="model1.doacoes"
          >
          </base-input>
        </div>
        <div class="col-md-3 px-md-1">
          <button @click="guardarDadosDoacoes" class="btn btn-primary" style="font-size: 15px; padding: 10px;">Guardar Dados</button>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";
import TaskList from "./Dashboard/TaskList";
import TaskList1 from "./Dashboard/TaskList1";
import UserTable from "./Dashboard/UserTable";
import config from "@/config";

export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {
          nome: ''
        };
      },
    },
    model1: {
      type: Object,
      default: () => {
        return {
          doacoes: ''
        };
      },
    },
  },
  components: {
    LineChart,
    BarChart,
    TaskList,
    TaskList1,
    UserTable,
  },
  data() {
    return {
    };
  },
  mounted() {
    this.carregarDados();
    this.carregarDadosDoacoes();
  },
  computed: {
    enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
    bigLineChartCategories() {
      return this.$t("dashboard.chartCategories");
    },
  },
  methods: {
    carregarDados() {
      const currentUserId = localStorage.getItem('currentUserId');
      if (!currentUserId) {
        alert('Nenhum utilizador autenticado.');
        return;
      }

      const utilizadores = JSON.parse(localStorage.getItem('utilizadores')) || [];
      const utilizador = utilizadores.find(user => user.id === currentUserId);

      if (utilizador) {
        this.model.nome = utilizador.nome;
      } else {
        alert('Utilizador não encontrado.');
      }
    },
    guardarDados() {
      const currentUserId = localStorage.getItem('currentUserId');
      if (!currentUserId) {
        alert('Nenhum utilizador autenticado.');
        return;
      }

      const utilizadores = JSON.parse(localStorage.getItem('utilizadores')) || [];
      const utilizadorIndex = utilizadores.findIndex(user => user.id === currentUserId);

      if (utilizadorIndex !== -1) {
        utilizadores[utilizadorIndex] = { ...utilizadores[utilizadorIndex], ...this.model };
        localStorage.setItem('utilizadores', JSON.stringify(utilizadores));
        alert('Dados guardados com sucesso!');
      } else {
        alert('Utilizador não encontrado.');
      }
    },
    carregarDadosDoacoes() {
      const dashboardData = JSON.parse(localStorage.getItem('dashboardData'));
      if (dashboardData) {
        this.model1.doacoes = dashboardData.doacoes;
      }
    },
    guardarDadosDoacoes() {
      let dashboardData = JSON.parse(localStorage.getItem('dashboardData'));
      if (!dashboardData) {
        dashboardData = {};
      }
      dashboardData.doacoes = this.model1.doacoes;
      localStorage.setItem('dashboardData', JSON.stringify(dashboardData));
      alert('Dados guardados com sucesso!');
    },
  },
  beforeDestroy() {
    if (this.$rtl.isRTL) {
      this.i18n.locale = "en";
      this.$rtl.disableRTL();
    }
  },
};
</script>

<style></style>
