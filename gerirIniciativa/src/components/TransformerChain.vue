<template>
  <div class="transformer-chain">
    <div class="table-body-row-data">
      <div class="afonso-pinheiro">{{afonsoPinheiro}}</div>
    </div>
    <div class="table-body-row-data1" :style="tableBodyRowDataStyle">
      <div class="rogrio-branco">{{rogrioBranco}}</div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "TransformerChain",
    props: {
      afonsoPinheiro: { type: String },
      rogrioBranco: { type: String },
      propMarginTop: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      tableBodyRowDataStyle() {
        return {
          marginTop: this.propMarginTop,
        };
      },
    },
  });
</script>
<style scoped>
  .afonso-pinheiro {
    width: 125px;
    position: absolute;
    margin: 0 !important;
    top: 12.3px;
    right: -46.9px;
    line-height: 21px;
    display: flex;
    align-items: center;
  }
  .table-body-row-data {
    align-self: stretch;
    height: 66.8px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .rogrio-branco {
    width: 125px;
    position: absolute;
    margin: 0 !important;
    top: 12.5px;
    right: -46.9px;
    line-height: 21px;
    display: flex;
    align-items: center;
  }
  .table-body-row-data1 {
    align-self: stretch;
    height: 66.8px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 1;
  }
  .transformer-chain {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--color-gray-200);
    font-family: var(--font-poppins);
  }
</style>
