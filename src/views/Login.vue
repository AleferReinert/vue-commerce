<template>
  <main id="page-login">
        <div class="container">
            
            <div class="box-login">
                <h1 class="page-title">Entrar</h1>

                <form action="">
                    <div class="form-control">
                        <label for="form-login-email">Seu e-mail:</label>
                        <input type="text" id="form-login-email" placeholder="Ex: joaodasilva@gmail.com" class="input" required>
                    </div>
                    <div class="form-control">
                        <label for="form-login-password">Sua senha:</label>
                        <a href="" class="forgot-password">Esqueci minha senha</a>
                        <input type="password" id="form-login-password" class="input" placeholder="Mínimo de 8 caracteres" required>
                    </div>
                    <button type="submit" class="btn btn-success">Entrar</button>
                </form>

                <p class="message-to-cadaster">
                    Não tem conta ainda?<router-link to="/cadastro" class="link-register">Cadastre-se!</router-link>
                </p>
                
            </div>
            
        </div>
	</main>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style lang="scss">
#page-login {

    .box-login {
        max-width: 420px;
        margin: 0 auto $row-gap;

        .form-control {
            display: grid;
            grid-template-columns: auto auto;
            grid-template-rows: auto auto;
            margin-bottom: 20px;
            justify-content: space-between;
        }

        label {
            margin-bottom: 5px;
            font-size: $font-14px;
        }

        .input {
            grid-row: 2;
            grid-column: 1 / 3;
        }

        a {
            font-size: $font-12px;
            color: $color-link;
            align-self: center;

            &:hover {
                color: darken($color-link, 5%);
            }
        }

        .btn {
            width: 100%;
        }
    }

    .message-to-cadaster {
        text-align: center;
        margin: 25px 0;

        a {
            font-size: inherit;
            margin-left: 4px;
        }
    }
}
</style>