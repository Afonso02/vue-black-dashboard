<template>
    <div class="wrapper login_wrapper register_wrapper">
        <div class="container p-0 pt-5 pb-5">
            <div class="card shadow">
                <div class="card-body pb-0">
                    <div class="login-form">
                        <form @submit.prevent="guardarDados" class="row">
                            <div class="form-group col-6 mb-5">
                                <span><i class="fa fa-user"></i></span>
                                <input v-model="nome" type="text" class="form-control" placeholder="Primeiro e Último Nome" required>
                            </div>
                            <div class="form-group col-6 mb-5">
                                <span><i class="fa fa-user"></i></span>
                                <input v-model="numero" type="text" class="form-control" placeholder="Número de Telemóvel" required>
                            </div>
                            <div class="form-group col-6 mb-5">
                                <span><i class="fa fa-envelope"></i></span>
                                <input v-model="email" type="email" class="form-control" placeholder="Email" required>
                            </div>
                            <div class="form-group col-6 mb-5">
                                <span><i class="fa fa-lock"></i></span>
                                <input v-model="pass" type="password" class="form-control" placeholder="PalavraPass" required>
                            </div>
                            <div class="form-group col-6 mb-3">
                                <span><i class="fa fa-lock"></i></span>
                                <input v-model="confirmPass" type="password" class="form-control" placeholder="Confirmar PalavraPass" required>
                            </div>
                            <div class="form-group col-12 mb-3">
                                <button type="submit" class="login-btn btn">Registar</button>
                            </div>
                        </form>
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
            nome: '',
            numero: '',
            email: '',
            pass: '',
            confirmPass: ''
        };
    },
    methods: {
        guardarDados() {
            if (!this.nome || !this.numero || !this.email || !this.pass || !this.confirmPass) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            if (this.pass !== this.confirmPass) {
                alert('As senhas não coincidem!');
                return;
            }
            const data = {
                nome: this.nome,
                numero: this.numero,
                email: this.email,
                pass: this.pass
            };
            localStorage.setItem('dados', JSON.stringify(data));
            alert('Dados guardados com sucesso!');
            this.$router.push({ name: 'Ajudas Humanitárias' });
        }
    }
};
</script>
