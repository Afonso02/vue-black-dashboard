<template>
  <base-table
    :data="table.data"
    :columns="table.columns"
    thead-classes="text-primary"
  >
  </base-table>
</template>
<script>
import { BaseTable } from "@/components";
export default {
  components: {
    BaseTable,
  },
  computed: {
    table() {
      let dataStorage =  JSON.parse(localStorage.getItem('dashboardData'));
      return dataStorage.usersTable
    },
  },
};
</script>
<style></style>
