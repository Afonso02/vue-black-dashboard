<template>
  <div class="card shadow">
    <div class="header-images d-flex justify-content-between">
      <div>
        <img src="/assets/images/login-img.png" alt="" class="img-fluid top-img" style="height: 300px;">
      </div>
    </div>
    <div class="card-body" style="padding-bottom: 200px;">
      <h4 class="card-title">Login</h4>
      <div class="login-form">
        <form @submit.prevent="login">
          <div class="form-group mb-5">
            <span><i class="fa fa-envelope"></i></span>
            <input v-model="email" type="email" class="form-control" placeholder="Email" required>
          </div>
          <div class="form-group mb-3">
            <span><i class="fa fa-lock"></i></span>
            <input v-model="password" type="password" class="form-control" placeholder="Password" required>
          </div>
          <div class="d-flex mb-3 justify-content-between">
            <div class="forget-password">
              <router-link :to="{ name: 'Recuperar Palavra Pass' }">
                <base-button style="font-size: 10px; padding: 2px;">Esqueceu-se da palavrapass?</base-button>
              </router-link>
            </div>
          </div>
          <div>
            <button type="submit" class="login-btn btn">Login</button>
            <router-link :to="{ name: 'Registar' }">
              <button type="button" class="login-btn btn">Register</button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
    <div class="shadow-color"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert('Por favor, preencha todos os campos!');
        return;
      }

      const utilizadores = JSON.parse(localStorage.getItem('utilizadores')) || [];
      const utilizador = utilizadores.find(user => user.email === this.email && user.pass === this.password);

      if (utilizador) {
        localStorage.setItem('currentUserId', utilizador.id);
        alert('Login bem-sucedido!');
        this.$router.push({ name: 'Ajudas Humanitárias' }); // Altere para o nome da sua rota de destino
      } else {
        alert('Email ou senha incorretos!');
      }
    }
  }
};
</script>
