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
          type="password"
          v-model="model.pass"
        >
        </base-input>
      </div>
    </div>
    <base-button slot="footer" type="primary" fill @click="guardarDados">Guardar</base-button>
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
      const currentUserId = localStorage.getItem('currentUserId');
      if (!currentUserId) {
        alert('Nenhum utilizador autenticado.');
        return;
      }

      const utilizadores = JSON.parse(localStorage.getItem('utilizadores')) || [];
      const utilizador = utilizadores.find(user => user.id === currentUserId);

      if (utilizador) {
        this.model.nome = utilizador.nome;
        this.model.email = utilizador.email;
        this.model.numero = utilizador.numero;
        this.model.pass = utilizador.pass;
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
    }
  }
};
</script>
