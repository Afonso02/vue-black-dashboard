<template>
  <section class="divcard1">
    <div class="divcard-header1">
      <div class="heading-41">Gestão de Materiais</div>
    </div>
    <div class="divcard-inner">
      <div class="frame-container">
        <div class="frame-wrapper">
          <div class="frame-div">
            <div class="table-header-row-cell-wrapper">
              <b class="table-header3">Material</b>
            </div>
            <b class="table-header4">Quantidade</b>
            <b class="table-header5">Confirmação</b>
          </div>
        </div>
        <form class="frame-form">
          <div class="frame-parent1">
            <TransformerChain
              afonsoPinheiro="Mesas"
              rogrioBranco="Carrinhas"
              propMarginTop="-0.1px"
            />
            <div class="table-body-row-data26">
              <div class="sacos">Sacos</div>
            </div>
            <div class="table-body-row-data27">
              <div class="caixas">Caixas</div>
            </div>
            <TransformerChain
              afonsoPinheiro="Panfletos"
              rogrioBranco=" Cartazes"
              propMarginTop="-0.1px"
            />
            <div class="table-body-row-data28">
              <div class="boa-disposio">Boa Disposição</div>
            </div>
          </div>
          <div class="frame-parent2">
            <div class="table-body-row-data-parent1">
              <div class="table-body-row-data29">
                <div class="div7">55</div>
              </div>
              <div class="table-body-row-data30">
                <div class="div8">5</div>
              </div>
            </div>
            <div class="table-body-row-data31">
              <div class="div9">100</div>
            </div>
            <div class="table-body-row-data32">
              <div class="div10">40</div>
            </div>
            <div class="table-body-row-data-parent2">
              <div class="table-body-row-data33">
                <div class="div11">1250</div>
              </div>
              <div class="table-body-row-data34">
                <div class="div12">25</div>
              </div>
            </div>
            <div class="table-body-row-data35">
              <div class="div13">9999</div>
            </div>
          </div>
          <div class="frame-parent3">
            <div class="table-body-row-data-parent3">
              <div class="table-body-row-data36" />
              <div class="table-body-row-data37" />
            </div>
            <div class="table-body-row-data38" />
            <input class="table-body-row-data39" type="text" />
            <div class="table-body-row-data-parent4">
              <div class="table-body-row-data40" />
              <div class="table-body-row-data41" />
            </div>
            <div class="table-body-row-data42" />
          </div>
          <div class="frame-parent4">
            <div class="table-body-row-data-parent5">
              <button class="table-body-row-data43">
                <div class="rectangle-group">
                  <div class="frame-inner" />
                  <img class="group-icon" alt="" src="/model-bazaar@2x.png" />
                </div>
              </button>
              <div class="table-body-row-data44">
                <div class="table-body-row-data-child" />
              </div>
            </div>
            <button class="table-body-row-data45">
              <div class="rectangle-container">
                <div class="rectangle-div" />
                <img class="rectangle-icon" alt="" src="/model-bazaar@2x.png" />
              </div>
            </button>
            <button class="table-body-row-data46">
              <div class="rectangle-parent1">
                <div class="frame-child1" />
                <img class="frame-child2" alt="" src="/model-bazaar@2x.png" />
              </div>
            </button>
            <div class="table-body-row-data-parent6">
              <div class="table-body-row-data47">
                <div class="table-body-row-data-item" />
              </div>
              <div class="table-body-row-data48">
                <div class="matrix-multiplication" />
              </div>
            </div>
            <button class="table-body-row-data49">
              <div class="scalar-multiplication">
                <div class="scalar-multiplication-child" />
                <img
                  class="dot-product-icon"
                  alt=""
                  src="/model-bazaar@2x.png"
                />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
  import { defineComponent } from "vue";
  import TransformerChain from "./TransformerChain.vue";

  export default defineComponent({
    name: "Divcard1",
    components: { TransformerChain },
  });
</script>
<style scoped>
  .heading-41 {
    width: 298px;
    position: relative;
    line-height: 24.65px;
    font-weight: 100;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .divcard-header1 {
    align-self: stretch;
    border-radius: 3.57px 3.57px 0px 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base-4) var(--padding-mini-7) var(--padding-smi-3);
  }
  .table-header3 {
    position: relative;
    line-height: 18px;
    text-transform: uppercase;
    display: inline-block;
    min-width: 70px;
  }
  .table-header-row-cell-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-2xs) 0px 0px;
  }
  .table-header4 {
    position: relative;
    line-height: 18px;
    text-transform: uppercase;
    display: inline-block;
    min-width: 86px;
  }
  .table-header5 {
    position: relative;
    line-height: 18px;
    text-transform: uppercase;
    display: inline-block;
    min-width: 100px;
  }
  .frame-div {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .frame-wrapper {
    width: 357px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-12xs);
    box-sizing: border-box;
    max-width: 100%;
    flex-shrink: 0;
  }
  .sacos {
    width: 125px;
    position: absolute;
    margin: 0 !important;
    top: 12.2px;
    right: -46.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: left;
    display: flex;
    align-items: center;
  }
  .table-body-row-data26 {
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
  .caixas {
    width: 125px;
    position: absolute;
    margin: 0 !important;
    top: 12.5px;
    right: -46.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: left;
    display: flex;
    align-items: center;
  }
  .table-body-row-data27 {
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
  .boa-disposio {
    width: 125px;
    position: absolute;
    margin: 0 !important;
    top: 12.1px;
    right: -46.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: left;
    display: flex;
    align-items: center;
  }
  .table-body-row-data28 {
    align-self: stretch;
    height: 66.4px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .frame-parent1 {
    width: 83.1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .div7 {
    width: 80px;
    position: absolute;
    margin: 0 !important;
    top: 23px;
    right: -35.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .table-body-row-data29 {
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
  .div8 {
    width: 80px;
    position: absolute;
    margin: 0 !important;
    top: 23px;
    right: -35.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .table-body-row-data30 {
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
    margin-top: -0.1px;
  }
  .table-body-row-data-parent1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .div9 {
    width: 80px;
    position: absolute;
    margin: 0 !important;
    top: 23px;
    right: -35.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .table-body-row-data31 {
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
  .div10 {
    width: 80px;
    position: absolute;
    margin: 0 !important;
    top: 23px;
    right: -35.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .table-body-row-data32 {
    align-self: stretch;
    height: 66.8px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 2;
  }
  .div11 {
    width: 80px;
    position: absolute;
    margin: 0 !important;
    top: 23px;
    right: -35.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .table-body-row-data33 {
    align-self: stretch;
    height: 66.8px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 4;
  }
  .div12 {
    width: 80px;
    position: absolute;
    margin: 0 !important;
    top: 23px;
    right: -35.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .table-body-row-data34 {
    align-self: stretch;
    height: 66.8px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 6;
    margin-top: -0.1px;
  }
  .table-body-row-data-parent2 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .div13 {
    width: 80px;
    position: absolute;
    margin: 0 !important;
    top: 23px;
    right: -35.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .table-body-row-data35 {
    align-self: stretch;
    height: 66.4px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .frame-parent2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 64px;
  }
  .table-body-row-data36 {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
  }
  .table-body-row-data37 {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    z-index: 1;
    margin-top: -0.1px;
  }
  .table-body-row-data-parent3 {
    align-self: stretch;
    height: 133.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .table-body-row-data38 {
    align-self: stretch;
    height: 66.8px;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    z-index: 1;
  }
  .table-body-row-data39 {
    border: none;
    outline: none;
    background-color: transparent;
    align-self: stretch;
    height: 66.8px;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    min-width: 56px;
    z-index: 3;
  }
  .table-body-row-data40 {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    z-index: 5;
  }
  .table-body-row-data41 {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    z-index: 7;
    margin-top: -0.1px;
  }
  .table-body-row-data-parent4 {
    align-self: stretch;
    height: 133.5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .table-body-row-data42 {
    align-self: stretch;
    height: 66.4px;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    z-index: 1;
  }
  .frame-parent3 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 62px;
  }
  .frame-inner {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
    width: 100%;
    height: 100%;
  }
  .group-icon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .rectangle-group {
    height: 30px;
    width: 30px;
    position: relative;
  }
  .table-body-row-data43 {
    cursor: pointer;
    border: none;
    padding: var(--padding-mid) var(--padding-6xl) var(--padding-lgi);
    background-color: transparent;
    align-self: stretch;
    border-top: 0.8px solid var(--color-gray-300);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
    debug_commit: 1de1738;
  }
  .table-body-row-data-child {
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
  }
  .table-body-row-data44 {
    align-self: stretch;
    border-top: 0.8px solid var(--color-gray-300);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-mid) var(--padding-6xl) var(--padding-lg-6);
    flex-shrink: 0;
    debug_commit: 1de1738;
    z-index: 2;
    margin-top: -0.2px;
  }
  .table-body-row-data-parent5 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xs) 0px 0px;
  }
  .rectangle-div {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
    width: 100%;
    height: 100%;
    display: none;
  }
  .rectangle-icon {
    position: absolute;
    top: 0px;
    left: 0.2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .rectangle-container {
    height: 30px;
    width: 30.2px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
  }
  .table-body-row-data45 {
    cursor: pointer;
    border: none;
    padding: var(--padding-mid) var(--padding-6xl) var(--padding-lg-5);
    background-color: transparent;
    align-self: stretch;
    border-top: 0.8px solid var(--color-gray-300);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame-child1 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
    width: 100%;
    height: 100%;
    display: none;
  }
  .frame-child2 {
    position: absolute;
    top: 0px;
    left: 0.2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .rectangle-parent1 {
    height: 30px;
    width: 30.2px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
  }
  .table-body-row-data46 {
    cursor: pointer;
    border: none;
    padding: var(--padding-base) var(--padding-6xl) var(--padding-lgi-3);
    background-color: transparent;
    align-self: stretch;
    border-top: 0.8px solid var(--color-gray-300);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 2;
  }
  .table-body-row-data-item {
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
  }
  .table-body-row-data47 {
    align-self: stretch;
    border-top: 0.8px solid var(--color-gray-300);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-6xl) var(--padding-lgi-1);
    z-index: 3;
  }
  .matrix-multiplication {
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
  }
  .table-body-row-data48 {
    align-self: stretch;
    border-top: 0.8px solid var(--color-gray-300);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-mid) var(--padding-6xl) var(--padding-lg-8);
    z-index: 4;
    margin-top: -0.1px;
  }
  .table-body-row-data-parent6 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .scalar-multiplication-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
    width: 100%;
    height: 100%;
    display: none;
  }
  .dot-product-icon {
    position: absolute;
    top: 0px;
    left: 0.2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .scalar-multiplication {
    height: 30px;
    width: 30.2px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
  }
  .table-body-row-data49 {
    cursor: pointer;
    border: none;
    padding: var(--padding-mid) var(--padding-6xl) var(--padding-lg-3);
    background-color: transparent;
    align-self: stretch;
    border-top: 0.8px solid var(--color-gray-300);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame-parent4 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 62px;
  }
  .frame-form {
    margin: 0;
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-start;
    flex-shrink: 0;
  }
  .frame-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-smi-6);
    max-width: 100%;
  }
  .divcard-inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xl) 0px var(--padding-mini);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-xs);
    color: var(--color-gray-200);
  }
  .divcard1 {
    align-self: stretch;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4.57px;
    background-color: var(--color-gray-100);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-4xs-7);
    box-sizing: border-box;
    gap: var(--gap-7xl-3);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-mid);
    color: var(--color-white);
    font-family: var(--font-poppins);
  }

  @media screen and (max-width: 378px) {
    .frame-div {
      flex-wrap: wrap;
    }
  }
</style>
