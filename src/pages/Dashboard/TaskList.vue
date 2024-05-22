<template>
  <base-table :data="tableData" thead-classes="text-primary">
    <template slot-scope="{ row }">
      <td>
        <base-checkbox @change="saveTableData()" v-model="row.done"></base-checkbox>
      </td>
      <td>
        <p class="title">{{ row.title }}</p>
        <p class="text-muted">{{ row.description }}</p>
      </td>
    </template>
  </base-table>
</template>
<script>
import { BaseTable } from "@/components";
export default {
  components: {
    BaseTable,
  },
  computed: {
    tableData() {
      let dataStorage =  JSON.parse(localStorage.getItem('dashboardData'));
      return dataStorage.taskList
    },
  },
  methods: {
    saveTableData() {
      dataStorage.taskList = data;
      localStorage.setItem('dashboardData', JSON.stringify(dataStorage));
    }
  }
};
</script>
