<template>
  <div class="wrapper login_wrapper">
    <div class="container p-0 pt-5 pb-5">
      <div class="card shadow">
        <div class="header-images d-flex justify-content-between">
          <div>
            <img src="/assets/images/login-img.png" alt="" class="img-fluid top-img">
          </div>
          <div>
            <img src="/assets/images/burger.png" alt="" class="img-fluid burger">
          </div>
        </div>
        <div class="card-body">
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
                  <span>Forgot password?</span>
                </div>
              </div>
              <div>
                <button type="submit" class="login-btn btn">Login</button>
                <router-link :to="{ name: 'Registar' }">
                  <button class="login-btn btn">Register</button>
                </router-link>
              </div>
            </form>
          </div>
        </div>
        <div class="shadow-color">
          <img src="/assets/images/shadow.png" alt="">
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
      password: ''
    };
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert('Por favor, preencha todos os campos!');
        return;
      }
      console.log('Email:', this.email);
      console.log('Senha:', this.password);
    }
  }
};
</script>
