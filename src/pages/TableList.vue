<template>
  
</template>
<script>
import { BaseTable } from "@/components";
const tableColumns = ["Item", "Quantidades em Armazém"];
const tableData = [
  {
    id: 1,
    name: "Alimentos não perecíveis",
    country: "50 unidades",
  },
  {
    id: 2,
    name: "Minerva Hooper",
    salary: "$23,789",
    country: "Curaçao",
    city: "Sinaai-Waas",
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    salary: "$56,142",
    country: "Netherlands",
    city: "Baileux",
  },
  {
    id: 4,
    name: "Philip Chaney",
    salary: "$38,735",
    country: "Korea, South",
    city: "Overland Park",
  },
  {
    id: 5,
    name: "Doris Greene",
    salary: "$63,542",
    country: "Malawi",
    city: "Feldkirchen in Kärnten",
  },
  {
    id: 6,
    name: "Mason Porter",
    salary: "$98,615",
    country: "Chile",
    city: "Gloucester",
  },
  {
    id: 7,
    name: "Jon Porter",
    salary: "$78,615",
    country: "Portugal",
    city: "Gloucester",
  },
];

export default {
  components: {
    BaseTable,
  },
  data() {
    return {
      table1: {
        title: "Saldo de Materiais",
        columns: [...tableColumns],
        data: [...tableData],
      },
      table2: {
        title: "Table on Plain Background",
        columns: [...tableColumns],
        data: [...tableData],
      },
    };
  },
};
</script>
<style></style>
