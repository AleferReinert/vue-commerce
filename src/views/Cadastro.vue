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
            <form id="form-cadaster" method="post">
                <div class="cadaster-type">
                    <label>
                        <input type="radio" name="cadaster-type" v-model="cadasterType" value="person" required checked>
                        Pessoa Física
                    </label>
                    <label>
                        <input type="radio" name="cadaster-type" v-model="cadasterType" value="company" required>
                        Pessoa Jurídica
                    </label>
                </div>

                <template v-if="cadasterType === 'person'">
                    <customInput label="Nome" name="first-name" v-model="firstName" placeholder="Ex: João" required />
                    <customInput label="Sobrenome" name="last-name" v-model="lastName" placeholder="Ex: da Silva" required />

                    <div class="two-inputs">
                        <customInput label="Data de nascimento" type="date" name="birth-date" v-model="birthDate" placeholder="dd/mm/aaaa" mask="##/##/####" required />
                        <customInput label="CPF" name="cpf" v-model="cpf" inputMode="numeric" placeholder="Ex: 555.555.555-55" mask="###.###.###-##" required />
                    </div>
                </template>

                <template v-if="cadasterType === 'company'">
                    <customInput label="CNPJ" name="cnpj" v-model="cnpj" inputMode="numeric" placeholder="Ex: 55.555.555/5555-55" mask="##.###.###/####-##" required />
                    <customInput label="Razão Social" name="corporate-name" v-model="corporateName" required />
                    <customInput label="Nome Fantasia" name="tradingName" v-model="tradingName" required />
                </template>

                <fieldset v-if="cadasterType === 'person'" class="form-control">
                    <legend>
                        <span class="required">*</span>
                        Sexo:
                    </legend>
                    <label>
                        <input type="radio" value="woman" name="gender" v-model="gender" required>
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
                    <customInput label="Celular" type="tel" name="tel" v-model="tel" inputMode="tel" mask="(##) # ####-####" placeholder="Ex. (55) 5 5555-5555" required />
                    
                    <fieldset class="form-control form-whatsapp">
                        <legend><span class="required">*</span>É Whatsapp?</legend>
                        <label>
                            <input type="radio" v-model="whatsapp" id="whatsapp" name="whatsapp" required>
                            Sim
                        </label>
                        <label>
                            <input type="radio" value="no" v-model="whatsapp" name="whatsapp" required>
                            Não
                        </label>
                    </fieldset>
                </div>

                <customInput label="E-mail" type="email" name="email" v-model="email" inputMode="email" placeholder="Ex: joaodasilva@gmail.com" required />
                <customInput label="Senha (mínimo de 8 caracteres)" type="password" name="password" v-model="password" required />
                <customInput label="Confirme sua senha" type="password" name="second-password" v-model="secondPassword" required />
                
                <div class="form-control checkbox-item form-control-newsletter">
                    <input type="checkbox" id="newsletter" v-model="newsletterEmail">
                    <label for="newsletter">Desejo receber ofertas por e-mail.</label>
                </div>
                <div class="form-control checkbox-item">
                    <input type="checkbox" id="terms" v-model="terms">
                    <label for="terms">
                        <span class="required">*</span>
                        Declaro que li e aceito os <a href="">Termos de Uso</a>.
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
import customInput from '@/components/CustomInput.vue'

export default {
    name: 'Cadastro',
    components: {
        customInput
    },
    data(){
        return {
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
            terms: false
        }
    },
    watch: {
        tel(){
            this.whatsapp !== 'no' ? this.whatsapp = this.tel : ''
        },
        whatsapp(){
            this.whatsapp === null ? this.whatsapp = this.tel : ''
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
        text-align: center;
        margin-bottom: 15px;
    }

    .box-header {
        text-align: center;

        p {
            font-size: $font-14px;
        }
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
            color: $link-color;
            align-self: center;

            &:hover {
                color: darken($link-color, 5%);
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

    #tel {
        width: 16ch;
        box-sizing: content-box;
    }

    #terms + label a {
        margin-left: 4px;
    }

    .message-to-login {
        text-align: center;
        margin: 25px 0;
    }
}
</style>