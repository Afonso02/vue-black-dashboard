<template>
    <div class="wrapper login_wrapper register_wrapper">
      <div class="container p-0 pt-5 pb-5">
        <div class="card shadow">
          <div class="card-body pb-0">
            <div class="login-form">
              <form @submit.prevent="submitForm" v-if="!submitted">
                <div class="form-group col-6 mb-5">
                  <h4>Insira o seu email</h4>
                  <span><i class="fa fa-envelope"></i></span>
                  <input v-model="email" type="email" class="form-control" placeholder="Email" required>
                </div>
                <div class="form-group col-6 mb-5">
                  <h4>Insira o seu número de Telemóvel</h4>
                  <span><i class="fa fa-envelope"></i></span>
                  <input v-model="numero" type="text" class="form-control" placeholder="Número" required>
                </div>
                <div class="form-group col-12 mb-3">
                  <button type="submit" class="login-btn btn">Submeter</button>
                </div>
              </form>
              <div id="xx" class="form-group col-6 mb-5" v-if="submitted">
                <h4>Reponha a Palavra Pass</h4>
                <span><i class="fa fa-lock"></i></span>
                <input v-model="newPass" type="password" class="form-control" placeholder="Nova Palavra Pass" required>
                <br>
                <span><i class="fa fa-lock"></i></span>
                <input v-model="confirmNewPass" type="password" class="form-control" placeholder="Confirmar Nova Palavra Pass" required>
                <div v-if="passwordMatchError" class="text-danger">A nova palavra-passe não pode ser igual à antiga.</div>
                <br>
                <button @click="updatePassword" class="login-btn btn">Submeter Nova Palavra-Passe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        numero: '',
        pass: '',
        confirmPass: '',
        newPass: '',
        confirmNewPass: '',
        submitted: false,
        passwordMatchError: false
      };
    },
    methods: {
      submitForm() {
        const utilizadores = JSON.parse(localStorage.getItem('utilizadores')) || [];
        const user = utilizadores.find(user => user.email === this.email && user.numero === this.numero);
  
        if (!user) {
          alert('Email ou número de telemóvel não encontrados!');
          return;
        }
  
        this.pass = user.pass; // Armazenar a palavra-passe atual
        this.submitted = true;
      },
      updatePassword() {
        if (this.newPass === this.pass) {
          this.passwordMatchError = true;
          return;
        }
  
        const utilizadores = JSON.parse(localStorage.getItem('utilizadores')) || [];
        const index = utilizadores.findIndex(user => user.email === this.email && user.numero === this.numero);
  
        if (index !== -1) {
          utilizadores[index].pass = this.newPass;
          localStorage.setItem('utilizadores', JSON.stringify(utilizadores));
          alert('Palavra-passe atualizada com sucesso!');
          this.$router.push({ name: 'Login' });
        } else {
          alert('Erro ao atualizar a palavra-passe!');
        }
      }
    }
  };
  </script>
  