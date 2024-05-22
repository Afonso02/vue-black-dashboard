<template>
  <card>
    <h5 slot="header" class="title">Editar Perfil</h5>
    <div class="row">
      <div class="col-md-3 px-md-1">
        <base-input
          label="Nome"
          v-model="model.nome"
        >
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input
          label="Email"
          type="email"
          v-model="model.email"
        >
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input
          label="Telemóvel"
          type="tel"
          v-model="model.numero"
        >
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input
          label="Palavrapass"
          type="tel"
          v-model="model.pass"
        >
        </base-input>
      </div>
    </div>
    <base-button slot="footer" type="primary" fill @click="guardarDados()">Guardar</base-button>
  </card>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {
          nome: '',
          email: '',
          numero: '',
          pass: ''
        };
      },
    },
  },
  mounted() {
    this.carregarDados();
  },
  methods: {
    carregarDados() {
      const dados = JSON.parse(localStorage.getItem('dados'));
      if (dados) {
        this.model.nome = dados.nome;
        this.model.email = dados.email;
        this.model.numero = dados.numero;
        this.model.pass = dados.pass;
      }
    },
    guardarDados() {
      localStorage.setItem('dados', JSON.stringify(this.model));
      alert('Dados guardados com sucesso!');
    }
  }
};
</script>

<style>
/* Seu estilo aqui */
</style>
