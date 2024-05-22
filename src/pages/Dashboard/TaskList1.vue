<template>
  <base-table :data="tableData" thead-classes="text-primary">
    <template slot-scope="{ row, index }">
      <td>
        <base-button @click="presente(row.title)" style="font-size: 12px; padding: 10px;">✅</base-button>
        <base-button @click="ausente(row.title)" style="font-size: 12px; padding: 10px;">❌</base-button>
        <p class="text-muted">{{ row.presenca }}</p>
      </td>
      <td>
        <p class="title">{{ row.title }}</p>
        <p class="text-muted">{{ row.description }}</p>
      </td>
    </template>
  </base-table>
</template>

<script>
import BaseTable from "@/components/BaseTable";

export default {
  components: {
    BaseTable,
  },
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.loadTableData();
  },
  methods: {
    loadTableData() {
      let dataStorage = JSON.parse(localStorage.getItem('dashboardData'));
      if (dataStorage && dataStorage.taskList1) {
        this.tableData = dataStorage.taskList1;
      }
    },
    presente(title) {
      let dataStorage = JSON.parse(localStorage.getItem('dashboardData'));
      if (dataStorage && dataStorage.taskList1) {
        const task = dataStorage.taskList1.find(task => task.title === title);
        if (task) {
          task.presenca = "Presente";
          localStorage.setItem('dashboardData', JSON.stringify(dataStorage));
          this.loadTableData();
        } else {
          console.error(`Task with title ${title} not found`);
        }
      } else {
        console.error('Erro ao acessar o localStorage ou taskList1');
      }
    },
    ausente(title) {
      let dataStorage = JSON.parse(localStorage.getItem('dashboardData'));
      if (dataStorage && dataStorage.taskList1) {
        const task = dataStorage.taskList1.find(task => task.title === title);
        if (task) {
          task.presenca = "Ausente";
          localStorage.setItem('dashboardData', JSON.stringify(dataStorage));
          this.loadTableData();
        } else {
          console.error(`Task with title ${title} not found`);
        }
      } else {
        console.error('Erro ao acessar o localStorage ou taskList1');
      }
    }
  }
};
</script>
