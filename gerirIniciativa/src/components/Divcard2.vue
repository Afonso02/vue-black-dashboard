<template>
  <div class="divcard">
    <div class="divcard-header">
      <div class="heading-4">Gestão de Voluntários</div>
    </div>
    <div class="threshold-checker">
      <div class="normalizer">
        <div class="merger">
          <div class="filter">
            <div class="regressor">
              <b class="table-header">Name</b>
            </div>
            <b class="table-header1">Contacto</b>
            <b class="table-header2">Presenças</b>
          </div>
        </div>
        <form class="splitter">
          <div class="joiner">
            <div class="table-body-row-data2">
              <div class="ana-silva">Ana Silva</div>
            </div>
            <div class="table-body-row-data3">
              <div class="pedro-pontes">Pedro Pontes</div>
            </div>
            <TransformerChain
              afonsoPinheiro="Afonso Pinheiro"
              rogrioBranco="Rogério Branco"
            />
            <div class="table-body-row-data4">
              <div class="manuel-passos">Manuel Passos</div>
            </div>
            <TransformerChain
              afonsoPinheiro="João Ferreira"
              rogrioBranco="Diogo Leite"
              propMarginTop="unset"
            />
          </div>
          <div class="joiner1">
            <div class="table-body-row-data5">
              <div class="div">968******</div>
            </div>
            <div class="table-body-row-data6">
              <div class="div1">968******</div>
            </div>
            <div class="table-body-row-data-parent">
              <div class="table-body-row-data7">
                <div class="div2">968******</div>
              </div>
              <div class="table-body-row-data8">
                <div class="div3">968******</div>
              </div>
            </div>
            <div class="table-body-row-data9">
              <div class="div4">968******</div>
            </div>
            <div class="table-body-row-data-group">
              <div class="table-body-row-data10">
                <div class="div5">968******</div>
              </div>
              <div class="table-body-row-data11">
                <div class="div6">968******</div>
              </div>
            </div>
          </div>
          <div class="table-body-row-data-container">
            <div class="table-body-row-data12" />
            <div class="table-body-row-data13" />
            <div class="training-manager">
              <div class="table-body-row-data14" />
              <div class="table-body-row-data15" />
            </div>
            <div class="table-body-row-data16" />
            <div class="training-manager1">
              <div class="table-body-row-data17" />
              <div class="table-body-row-data18" />
            </div>
          </div>
          <div class="model-hub">
            <div class="data-mart">
              <button class="table-body-row-data19">
                <div class="feature-market">
                  <div class="feature-market-child" />
                  <img
                    class="model-bazaar-icon"
                    alt=""
                    src="/model-bazaar@2x.png"
                  />
                </div>
              </button>
              <div class="table-body-row-data20">
                <div class="model-hub-client" />
              </div>
            </div>
            <div class="inference-client">
              <button class="table-body-row-data21">
                <div class="data-provider">
                  <div class="data-provider-child" />
                  <img
                    class="feature-generator-icon"
                    alt=""
                    src="/model-bazaar@2x.png"
                  />
                </div>
              </button>
              <button class="table-body-row-data22">
                <div class="rectangle-parent">
                  <div class="frame-child" />
                  <img class="frame-item" alt="" src="/model-bazaar@2x.png" />
                </div>
              </button>
            </div>
            <div class="table-body-row-data23">
              <div class="classifier-factory" />
            </div>
            <div class="regressor-factory">
              <div class="table-body-row-data24">
                <div class="evaluator-factory" />
              </div>
              <button class="table-body-row-data25">
                <div class="manager-factory">
                  <div class="manager-factory-child" />
                  <img
                    class="processing-hub-icon"
                    alt=""
                    src="/model-bazaar@2x.png"
                  />
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import TransformerChain from "./TransformerChain.vue";

  export default defineComponent({
    name: "Divcard2",
    components: { TransformerChain },
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
  }
  .divcard-header {
    align-self: stretch;
    border-radius: 3.57px 3.57px 0px 0px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base-4) var(--padding-mini-7) var(--padding-smi-3);
  }
  .table-header {
    position: relative;
    line-height: 18px;
    text-transform: uppercase;
    display: inline-block;
    min-width: 36px;
  }
  .regressor {
    width: 81px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
  }
  .table-header1 {
    width: 86px;
    position: relative;
    line-height: 18px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .table-header2 {
    position: relative;
    line-height: 18px;
    text-transform: uppercase;
    display: inline-block;
    min-width: 80px;
  }
  .filter {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .merger {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-2xs) 0px var(--padding-mini);
    box-sizing: border-box;
    max-width: 100%;
  }
  .ana-silva {
    width: 125px;
    position: absolute;
    margin: 0 !important;
    top: 12.3px;
    right: -46.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: left;
    display: flex;
    align-items: center;
  }
  .table-body-row-data2 {
    align-self: stretch;
    height: 66.8px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    flex-shrink: 0;
  }
  .pedro-pontes {
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
  .table-body-row-data3 {
    align-self: stretch;
    height: 66.8px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    flex-shrink: 0;
  }
  .manuel-passos {
    width: 125px;
    position: absolute;
    margin: 0 !important;
    right: -46.9px;
    bottom: 22.1px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: left;
    display: flex;
    align-items: center;
  }
  .table-body-row-data4 {
    align-self: stretch;
    height: 66.8px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    flex-shrink: 0;
    z-index: 2;
  }
  .joiner {
    height: 467.2px;
    width: 83.1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-114xl-2);
    box-sizing: border-box;
  }
  .div {
    width: 80px;
    position: absolute;
    margin: 0 !important;
    top: 23px;
    right: -40.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: left;
    display: flex;
    align-items: center;
  }
  .table-body-row-data5 {
    align-self: stretch;
    height: 66.8px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    flex-shrink: 0;
  }
  .div1 {
    width: 80px;
    position: absolute;
    margin: 0 !important;
    top: 23px;
    right: -40.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: left;
    display: flex;
    align-items: center;
  }
  .table-body-row-data6 {
    align-self: stretch;
    height: 66.8px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    flex-shrink: 0;
  }
  .div2 {
    width: 80px;
    position: absolute;
    margin: 0 !important;
    top: 23px;
    right: -40.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: left;
    display: flex;
    align-items: center;
  }
  .table-body-row-data7 {
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
  .div3 {
    width: 80px;
    position: absolute;
    margin: 0 !important;
    top: 23px;
    right: -40.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: left;
    display: flex;
    align-items: center;
  }
  .table-body-row-data8 {
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
  .table-body-row-data-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .div4 {
    width: 80px;
    position: absolute;
    margin: 0 !important;
    top: 23px;
    right: -40.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: left;
    display: flex;
    align-items: center;
  }
  .table-body-row-data9 {
    align-self: stretch;
    height: 66.8px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    flex-shrink: 0;
    z-index: 4;
  }
  .div5 {
    width: 80px;
    position: absolute;
    margin: 0 !important;
    top: 23px;
    right: -40.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: left;
    display: flex;
    align-items: center;
  }
  .table-body-row-data10 {
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
  }
  .div6 {
    width: 80px;
    position: absolute;
    margin: 0 !important;
    top: 23px;
    right: -40.9px;
    font-size: var(--font-size-sm);
    line-height: 21px;
    font-family: var(--font-poppins);
    color: var(--color-gray-200);
    text-align: left;
    display: flex;
    align-items: center;
  }
  .table-body-row-data11 {
    align-self: stretch;
    height: 66.4px;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 8;
  }
  .table-body-row-data-group {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .joiner1 {
    height: 467.2px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-114xl-2);
    box-sizing: border-box;
    min-width: 64px;
  }
  .table-body-row-data12 {
    align-self: stretch;
    height: 66.8px;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    flex-shrink: 0;
  }
  .table-body-row-data13 {
    align-self: stretch;
    height: 66.8px;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    flex-shrink: 0;
  }
  .table-body-row-data14 {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    z-index: 1;
  }
  .table-body-row-data15 {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    z-index: 3;
  }
  .training-manager {
    align-self: stretch;
    height: 133.6px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
  }
  .table-body-row-data16 {
    align-self: stretch;
    height: 66.8px;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    box-sizing: border-box;
    flex-shrink: 0;
    z-index: 5;
  }
  .table-body-row-data17 {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    z-index: 7;
  }
  .table-body-row-data18 {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-top: 0.8px solid var(--color-gray-300);
    z-index: 9;
  }
  .training-manager1 {
    align-self: stretch;
    height: 133.2px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-shrink: 0;
  }
  .table-body-row-data-container {
    height: 467.2px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-114xl-2);
    box-sizing: border-box;
    min-width: 62px;
  }
  .feature-market-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
    width: 100%;
    height: 100%;
    display: none;
  }
  .model-bazaar-icon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .feature-market {
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
  }
  .table-body-row-data19 {
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
  .model-hub-client {
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
  }
  .table-body-row-data20 {
    align-self: stretch;
    border-top: 0.8px solid var(--color-gray-300);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-mid) var(--padding-6xl) var(--padding-lg-7);
    flex-shrink: 0;
    debug_commit: 1de1738;
    z-index: 2;
    margin-top: -0.1px;
  }
  .data-mart {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xs) 0px 0px;
  }
  .data-provider-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
    width: 100%;
    height: 100%;
    display: none;
  }
  .feature-generator-icon {
    position: absolute;
    top: 0px;
    left: 0.2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .data-provider {
    height: 30px;
    width: 30.2px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
  }
  .table-body-row-data21 {
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
  .frame-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
    width: 100%;
    height: 100%;
    display: none;
  }
  .frame-item {
    position: absolute;
    top: 0px;
    left: 0.2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .rectangle-parent {
    height: 30px;
    width: 30.2px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
  }
  .table-body-row-data22 {
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
  .inference-client {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .classifier-factory {
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
  }
  .table-body-row-data23 {
    align-self: stretch;
    border-top: 0.8px solid var(--color-gray-300);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-6xl) var(--padding-lgi-1);
    z-index: 3;
  }
  .evaluator-factory {
    height: 30px;
    width: 30px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
  }
  .table-body-row-data24 {
    align-self: stretch;
    border-top: 0.8px solid var(--color-gray-300);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-mid) var(--padding-6xl) var(--padding-lg-9);
    z-index: 4;
  }
  .manager-factory-child {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
    width: 100%;
    height: 100%;
    display: none;
  }
  .processing-hub-icon {
    position: absolute;
    top: 0px;
    left: 0.2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .manager-factory {
    height: 30px;
    width: 30.2px;
    position: relative;
    border-radius: var(--br-12xs);
    background-color: var(--color-steelblue);
  }
  .table-body-row-data25 {
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
    z-index: 5;
  }
  .regressor-factory {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .model-hub {
    height: 467.3px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-114xl-2);
    box-sizing: border-box;
    min-width: 62px;
  }
  .splitter {
    margin: 0;
    align-self: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-start;
  }
  .normalizer {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-smi-6);
    max-width: 100%;
  }
  .threshold-checker {
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
  .divcard {
    margin-right: -3px;
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

  @media screen and (max-width: 385px) {
    .filter {
      flex-wrap: wrap;
    }
  }
</style>
