<template>
  <main id="page-cadaster">
        <div class="container">
            
            <div class="box-cadaster">
                <div class="box-header">
                    <h1 class="page-title">Cadastro</h1>
                    <p>
                        <span class="required">*</span>
                        Campos obrigatórios
                    </p>
                </div>
                <form id="form-cadaster" @submit="checkForm" method="post" action="/">
                    <div class="cadaster-type">
                        <label>
                            <input type="radio" name="cadaster-type" v-model="cadasterType" value="person" checked>
                            Pessoa Física
                        </label>
                        <label>
                            <input type="radio" name="cadaster-type" v-model="cadasterType" value="company">
                            Pessoa Jurídica
                        </label>
                    </div>

                    <p v-if="errors.length">
                        <small>Por favor, corrija o(s) seguinte(s) erro(s):</small>
                        <ul>
                            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                        </ul>
                    </p>
                
                    <div v-if="cadasterType === 'person'" class="form-control">
                        <label for="form-cadaster-first-name">
                            <span class="required">*</span>
                            Nome:
                        </label>
                        <input type="text" id="form-cadaster-first-name" v-model="firstName" placeholder="Ex: João" class="input" required>
                    </div>
                    <div v-if="cadasterType === 'person'" class="form-control">
                        <label for="form-cadaster-last-name">
                            <span class="required">*</span>
                            Sobrenome:
                        </label>
                        <input type="text" id="form-cadaster-last-name" v-model="lastName" placeholder="Ex: da Silva" class="input" required>
                    </div>
                    <div v-if="cadasterType === 'person'" class="two-inputs">
                        <div class="form-control">
                            <label for="form-cadaster-birth-date">
                                <span class="required">*</span>
                                Data de nascimento:
                            </label>
                            <input type="text" id="form-cadaster-birth-date" v-model="birthDate" v-mask="'##/##/####'" placeholder="dd/mm/aaaa" class="input" required>
                        </div>
                        <div class="form-control">
                            <label for="form-cadaster-cpf"><span class="required">*</span>CPF:</label>
                            <input type="text" id="form-cadaster-cpf" inputmode="numeric" v-model="cpf" v-mask="'###.###.###-##'" placeholder="Ex: 555.555.555-55" class="input" required>
                        </div>
                    </div>
                    <div v-if="cadasterType === 'company'" class="form-control">
                        <label for="form-cadaster-cnpj">
                            <span class="required">*</span>
                            CNPJ:
                        </label>
                        <input type="text" inputmode="numeric" id="form-cadaster-cnpj" v-model="cnpj" v-mask="'##.###.###/####-##'" placeholder="Ex: 55.555.555/5555-55" class="input" required>
                    </div>
                    <div v-if="cadasterType === 'company'" class="form-control">
                        <label for="form-cadaster-corporate-name">
                            <span class="required">*</span>
                            Razão Social:
                        </label>
                        <input type="text" id="form-cadaster-corporate-name" v-model="corporateName" class="input" required>
                    </div>
                    <div v-if="cadasterType === 'company'" class="form-control">
                        <label for="form-cadaster-trading-name">
                            <span class="required">*</span>
                            Nome Fantasia:
                        </label>
                        <input type="text" id="form-cadaster-trading-name" v-model="tradingName" class="input" required>
                    </div>
                    <fieldset v-if="cadasterType === 'person'" class="form-control">
                        <legend>
                            <span class="required">*</span>
                            Sexo:
                        </legend>
                        <label>
                            <input type="radio" value="man" name="gender" v-model="gender" required>
                            Feminino
                        </label>
                        <label>
                            <input type="radio" value="man" name="gender" v-model="gender" required>
                            Masculino
                        </label>
                        <label>
                            <input type="radio" value="uninformed" name="gender" v-model="gender" required>
                            Não informar
                        </label>
                    </fieldset>
                    <div class="two-inputs two-inputs-whatsapp">
                        <div class="form-control">
                            <label for="form-cadaster-tel">
                                <span class="required">*</span>
                                Celular:
                            </label>
                            <input type="tel" id="form-cadaster-tel" v-model="tel" v-mask="'(##) # ####-####'" placeholder="Ex. (55) 5 5555-5555" class="input" required>
                        </div>
                        <fieldset class="form-control form-whatsapp">
                            <legend><span class="required">*</span>É Whatsapp?</legend>
                            <label>
                                <input type="radio" value="yes" v-model="whatsapp" name="whatsapp" required>
                                Sim
                            </label>
                            <label>
                                <input type="radio" value="no" v-model="whatsapp" name="whatsapp" required>
                                Não
                            </label>
                        </fieldset>
                    </div>
                    <div class="form-control">
                        <label for="form-cadaster-email">
                            <span class="required">*</span>
                            E-mail:
                        </label>
                        <input type="email" id="form-cadaster-email" v-model="email" placeholder="Ex: joaodasilva@gmail.com" class="input" required>
                    </div>
                    <div class="form-control">
                        <label for="form-cadaster-password">
                            <span class="required">*</span>
                            Senha (mínimo de 8 caracteres):
                        </label>
                        <input type="password" @keyup="passwordValidate('form-cadaster-password')" id="form-cadaster-password" v-model="password" minlength="8" class="input" required>
                    </div>
                    <div class="form-control">
                        <label for="form-cadaster-second-password">
                            <span class="required">*</span>
                            Confirme sua senha:
                        </label>
                        <input type="password" @keyup="passwordValidate('form-cadaster-second-password')" id="form-cadaster-second-password" v-model="secondPassword" minlength="8" class="input" required>
                    </div>
                    <div class="form-control checkbox-item form-control-newsletter">
                        <input type="checkbox" id="form-cadaster-newsletter" v-model="newsletterEmail">
                        <label for="form-cadaster-newsletter">Desejo receber ofertas por e-mail</label>
                    </div>
                    <div class="form-control checkbox-item">
                        <input type="checkbox" id="form-cadaster-terms" v-model="terms">
                        <label for="form-cadaster-terms">
                            <span class="required">*</span>
                            Declaro que li e aceito os <a href="">Termos de Uso</a>
                        </label>
                    </div>
                    <button type="submit" class="btn btn-success">Cadastre-se</button>
                    <p class="message-to-login">
                        Já tem cadastro?
                        <router-link to="/login">Entrar!</router-link>
                    </p>
                </form>
            </div>
        </div>
	</main>
</template>

<script>
import {mask} from 'vue-the-mask'

export default {
    name: 'Cadastro',
    directives: {mask},
    data(){
        return {
            errors: [],
            cadasterType: 'person',
            firstName: '',
            lastName: '',
            birthDate: '',
            cpf: '',
            cnpj: '',
            corporateName: '',
            tradingName: '',
            gender: '',
            tel: '',
            whatsapp: '',
            email: '',
            password: '',
            secondPassword: '',
            newsletterEmail: '',
            terms: ''
        }
    },
    methods: {
        checkForm(e) {
            this.errors = []

            if(this.cadasterType === 'person'){
                this.firstName ? true : this.errors.push('Primeiro nome é obrigatório.')
                this.lastName ? true : this.errors.push('Sobrenome é obrigatório.')
                this.birthDate ? true : this.errors.push('Data de nascimento é obrigatória.')
                this.cpf ? true : this.errors.push('CPF é obrigatório.')
                this.gender ? true : this.errors.push('Selecione o sexo.')
            }

            if(this.cadasterType === 'company'){
                this.cnpj ? true : this.errors.push('CNPJ é obrigatório.')
                this.corporateName ? true : this.errors.push('Razão social é obrigatória.')
                this.tradingName ? true : this.errors.push('Nome fantasia é obrigatório.')
            }
            
            this.tel ? true : this.errors.push('Celular é obrigatório.')
            this.whatsapp ? true : this.errors.push('Selecione se seu celular é whatsapp.')
            this.email ? true : this.errors.push('E-mail é obrigatório.')
            this.password ? true : this.errors.push('Crie uma senha.')
            this.secondPassword ? true : this.errors.push('Confirme sua senha.')

            if(this.password !== this.secondPassword){
                this.errors.push('As senhas não coincidem.')
            }

            this.terms ? true : this.errors.push('Termos de uso é obrigatório.')


            e.preventDefault();
        },
        passwordValidate(){
            if(this.password.search(/\s/g ) != -1 || this.secondPassword.search(/\s/g ) != -1){
                alert('Não é permitido espaços em sua senha')
                this.password = ''
                this.secondPassword = ''
            }
        }
    }
}
</script>

<style lang="scss">
#page-cadaster {

    .cadaster-type {
        display: flex;
        justify-content: center;
        margin: 25px 0;

        label {
            display: flex;

            + label {
                margin-left: 15px;
            }
        }

        input {
            margin-right: 4px;
        }
    }

    .page-title {
        margin-bottom: 15px;
    }

    .box-header {
        text-align: center;

        p {
            font-size: $font-14px;
        }
    }

    .form-control {
        margin-bottom: 20px;
    }

    .box-cadaster {
        max-width: 420px;
        margin: 0 auto $row-gap;

        label {
            margin-bottom: 5px;
            font-size: $font-14px;
            display: flex;
            align-items: center;

            a {
                font-size: inherit;
            }
        }

        legend {
            font-size: $font-14px;
            font-weight: 500;
            margin-bottom: 5px;
        }

        fieldset {
            
            label {
                float: left;

                + label {
                    margin-left: 10px;
                }
            }

            [type="radio"] {
                margin-right: 3px;
            }
        }

        .input {
            width: 100%;
        }

        a {
            color: $color-link;
            align-self: center;

            &:hover {
                color: darken($color-link, 5%);
            }
        }
    }

    [type="submit"] {
        width: 100%;
    }

    .two-inputs {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }

    .two-inputs-whatsapp {
        justify-content: left;
    }

    .form-whatsapp {
        display: flex;

        label {
            margin: 0;
        }
    }

    .form-control-newsletter {
        margin-bottom: 10px;
    }

    .checkbox-item {
        display: flex;

        [type="checkbox"] {
            margin-right: 5px;
        }
    }

    #form-cadaster-tel {
        width: 16ch;
        box-sizing: content-box;
    }

    #form-cadaster-terms + label a {
        margin-left: 4px;
    }

    .message-to-login {
        text-align: center;
        margin: 25px 0;
    }
}
</style>