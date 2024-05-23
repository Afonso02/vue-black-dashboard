<template>
    <div class="wrapper login_wrapper register_wrapper">
        <div class="container p-0 pt-5 pb-5">
            <div class="card shadow">
                <div class="card-body pb-0">
                    <div class="login-form">
                        <form @submit.prevent="guardarDados" class="row">
                            <div class="form-group col-6 mb-5">
                                <span><i class="fa fa-id-badge"></i></span>
                                <input v-model="id" type="text" class="form-control" placeholder="ID" required>
                            </div>
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
            id: '',
            nome: '',
            numero: '',
            email: '',
            pass: '',
            confirmPass: ''
        };
    },
    methods: {
        guardarDados() {
            if (!this.id || !this.nome || !this.numero || !this.email || !this.pass || !this.confirmPass) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            if (this.pass !== this.confirmPass) {
                alert('As senhas não coincidem!');
                return;
            }

            const data = {
                id: this.id,
                nome: this.nome,
                numero: this.numero,
                email: this.email,
                pass: this.pass
            };

            // Recuperar os usuários existentes no localStorage ou inicializar um array vazio
            const utilizadores = JSON.parse(localStorage.getItem('utilizadores')) || [];

            // Verificar se o ID já está registrado
            const idExists = utilizadores.some(user => user.id === this.id);
            if (idExists) {
                alert('Este ID já está registrado!');
                return;
            }

            // Verificar se o email já está registrado
            const emailExists = utilizadores.some(user => user.email === this.email);
            if (emailExists) {
                alert('Este email já está registrado!');
                return;
            }

            // Verificar se o número de telemóvel já está registrado
            const numeroExists = utilizadores.some(user => user.numero === this.numero);
            if (numeroExists) {
                alert('Este número de telemóvel já está registrado!');
                return;
            }

            // Adicionar o novo usuário à lista
            utilizadores.push(data);

            // Armazenar a lista atualizada de usuários no localStorage
            localStorage.setItem('utilizadores', JSON.stringify(utilizadores));

            alert('Dados guardados com sucesso!');
            this.$router.push({ name: 'Login' });
        }
    }
};
</script>
