<template>
    <main id="page-login">
        <div class="container">
            <div class="box-login">
                <h1 class="page-title">Entrar</h1>

                <form action="">
                    <customInput 
                        label="E-mail" 
                        name="email" 
                        v-model="email" 
                        placeholder="Ex: joaodasilva@gmail.com" 
                        required
                    />
                    <customInput 
                        label="Sua senha" 
                        type="password" 
                        name="password" 
                        v-model="password" 
                        placeholder="Mínimo de 8 caracteres"
                        linkLabel="Esqueci minha senha"
                        linkHref="/"
                        required 
                    />
                    
                    <button type="submit" class="btn btn-success">Entrar</button>
                </form>

                <p class="message-to-cadaster">
                    Não tem conta ainda?
                    
                    <router-link to="/cadastro" class="link-register">
                        Cadastre-se!
                    </router-link>
                </p>
            </div>
        </div>
    </main>
</template>

<script>
import customInput from '@/components/CustomInput.vue';

export default {
    name: 'Login',
    components: {
        customInput
    },
    data(){
        return {
            email: '',
            password: ''
        }
    }
}
</script>

<style lang="scss">
#page-login {

    .page-title {
        text-align: center;
    }

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
            color: $link-color;
            align-self: center;

            &:hover {
                color: darken($link-color, 5%);
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