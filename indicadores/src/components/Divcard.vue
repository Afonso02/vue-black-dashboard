<template>
  <section class="divcard2">
    <header class="divcard-header">
      <div class="heading-4">Saldo de materiais</div>
    </header>
    <div class="responsive-table">
      <div class="divtable-responsive">
        <div class="table-body">
          <div class="data-alimentos-nao-pereciveis">
            <div class="roupas-inverno">
              <b class="table-header">Item</b>
            </div>
            <b class="table-header1">Quantidade em armazém</b>
          </div>
        </div>
        <div class="frame-parent">
          <div class="table-body-row-data-parent">
            <div class="table-body-row-data">
              <div class="alimentos-no-perecveis">Alimentos não perecíveis</div>
            </div>
            <div class="table-body-row-data1" />
            <div class="table-body-row-data2" />
            <div class="table-body-row-data3">
              <div class="unidades">50 unidades</div>
            </div>
          </div>
          <div class="table-body-row-data-group">
            <div class="table-body-row-data4">
              <div class="roupas-de-inverno">Roupas de Inverno</div>
            </div>
            <div class="table-body-row-data5" />
            <div class="table-body-row-data6" />
            <div class="table-body-row-data7">
              <div class="peas">50 peças</div>
            </div>
          </div>
        </div>
        <div class="table-body-row-data-container">
          <div class="table-body-row-data8">
            <div class="material-escolar">Material Escolar</div>
          </div>
          <div class="table-body-row-data9" />
          <div class="table-body-row-data10" />
          <button class="table-body-row-data11">
            <div class="kits">20 kits</div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Divcard",
  });
</script>
<style scoped>
  .heading-4 {
    width: 298px;
    position: relative;
    line-height: 24.65px;
    font-weight: 100;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    white-space: nowrap;
  }
  .divcard-header {
    align-self: stretch;
    border-radius: 3.57px 3.57px 0px 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base-4) var(--padding-mini-7) var(--padding-smi-3);
    flex-shrink: 0;
    debug_commit: 1de1738;
    top: 0;
    z-index: 99;
    position: sticky;
    text-align: left;
    font-size: var(--font-size-mid);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }
  .table-header {
    align-self: stretch;
    position: relative;
    line-height: 18px;
    text-transform: uppercase;
  }
  .roupas-inverno {
    width: 76px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
    box-sizing: border-box;
  }
  .table-header1 {
    width: 157px;
    position: relative;
    line-height: 18px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .data-alimentos-nao-pereciveis {
    width: 343px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 106%;
    flex-shrink: 0;
    gap: var(--gap-xl);
  }
  .table-body {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-sm-1) var(--padding-6xs);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-xs);
  }
  .alimentos-no-perecveis {
    position: absolute;
    margin: 0 !important;
    top: 11.9px;
    right: -109.9px;
    line-height: 21px;
  }
  .table-body-row-data {
    height: 66.8px;
    width: 83.1px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .table-body-row-data1 {
    height: 66.8px;
    flex: 1;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    min-width: 64px;
  }
  .table-body-row-data2 {
    height: 66.8px;
    flex: 1;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    min-width: 61px;
  }
  .unidades {
    position: absolute;
    margin: 0 !important;
    top: 22.9px;
    left: -30.8px;
    line-height: 21px;
    display: inline-block;
    min-width: 92px;
  }
  .table-body-row-data3 {
    height: 66.8px;
    width: 68.3px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .table-body-row-data-parent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .roupas-de-inverno {
    width: 163px;
    position: absolute;
    margin: 0 !important;
    top: 12.1px;
    right: -86.9px;
    line-height: 21px;
    display: flex;
    align-items: center;
  }
  .table-body-row-data4 {
    height: 66.8px;
    width: 83.1px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .table-body-row-data5 {
    height: 66.8px;
    flex: 1;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    min-width: 64px;
  }
  .table-body-row-data6 {
    height: 66.8px;
    flex: 1;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    min-width: 61px;
  }
  .peas {
    position: absolute;
    margin: 0 !important;
    bottom: 22.7px;
    left: -11.8px;
    line-height: 21px;
    display: inline-block;
    min-width: 69px;
  }
  .table-body-row-data7 {
    height: 66.8px;
    width: 68.3px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .table-body-row-data-group {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame-parent {
    width: 344.1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 104%;
    flex-shrink: 0;
  }
  .material-escolar {
    width: 137px;
    position: absolute;
    margin: 0 !important;
    top: 12.3px;
    right: -60.9px;
    line-height: 21px;
    display: flex;
    align-items: center;
  }
  .table-body-row-data8 {
    height: 66.8px;
    width: 83.1px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .table-body-row-data9 {
    height: 66.8px;
    flex: 1;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    min-width: 64px;
    z-index: 1;
  }
  .table-body-row-data10 {
    height: 66.8px;
    flex: 1;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    min-width: 61px;
    z-index: 1;
  }
  .kits {
    width: 50.9px;
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: left;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .table-body-row-data11 {
    cursor: pointer;
    border: none;
    padding: var(--padding-2xl) var(--padding-6xs) var(--padding-4xl);
    background-color: transparent;
    width: 68.3px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 2;
  }
  .table-body-row-data-container {
    width: 344.1px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 104%;
    flex-shrink: 0;
  }
  .divtable-responsive {
    width: 332.4px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xs-3) 0px var(--padding-288xl-2);
    box-sizing: border-box;
    debug_commit: 1de1738;
    max-width: 100%;
  }
  .responsive-table {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mini);
    box-sizing: border-box;
    max-width: 100%;
    flex-shrink: 0;
  }
  .divcard2 {
    align-self: stretch;
    height: 309px;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4.57px;
    background-color: var(--color-gray-100);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-238xl-3);
    box-sizing: border-box;
    gap: var(--gap-base-3);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-sm);
    color: var(--color-gray-200);
    font-family: var(--font-poppins);
  }
</style>
