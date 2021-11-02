<template>
  <header id="header">
    <b-collapse v-if="$isMobile()" id="menu-mobile" class="hidden">
        <button class="btn-close-menu-mobile" v-b-toggle.menu-mobile>
            <font-awesome-icon icon="times" />
        </button>
        <nav class="nav-login">
            <ul>
                <li v-if="authenticated">
                    <button type="button" v-b-toggle="'list-profile'">
                        <font-awesome-icon icon="user" />
                        Olá, João
                        <font-awesome-icon icon="angle-down" class="icon-collapsed" />
                        <font-awesome-icon icon="angle-up" class="icon-show" />
                    </button>
                    <b-collapse id="list-profile">
                        <ul>
                            <li><router-link to="">Meus Dados</router-link></li>
                            <li><router-link to="">Meus Pedidos</router-link></li>
                            <li><router-link to="">Lista de Desejos</router-link></li>
                        </ul>
                    </b-collapse>
                </li>
                <li v-if="authenticated">
                    <router-link to="">
                        <font-awesome-icon icon="sign-out-alt" />
                        Sair
                    </router-link>
                </li>
                <li v-if="!authenticated"><router-link to="/cadastro">Cadastre-se</router-link></li>
                <li v-if="!authenticated"><router-link to="/login">Entrar</router-link></li>
            </ul>
        </nav>
        <MenuCategoriesMobile />
    </b-collapse>

    <div class="bar-top">
        <div class="container">
            <carousel class="carousel-header" :autoplay="true" :autoplayTimeout="5000" :perPage="1" :paginationEnabled="false" :loop="true">
                <slide>Frete grátis para sul e sudeste</slide>
                <slide>Produtos com até 70% de desconto</slide>
                <slide>Parcele em até 10x sem juros no cartão</slide>
            </carousel>
            <nav>
                <ul>
                    <li v-if="authenticated">
                        <button @click="toggleMyAccount" type="button">
                            <font-awesome-icon icon="user" />
                            Olá, João
                        </button>
                        <transition name="fade">
                            <ul v-show="dropdownMyAccount" class="dropdown-account">
                                <li><router-link to=""><font-awesome-icon icon="user" />Meus Dados</router-link></li>
                                <li><router-link to=""><font-awesome-icon icon="shopping-cart" />Meus Pedidos</router-link></li>
                                <li><router-link to=""><font-awesome-icon icon="heart" />Lista de Desejos</router-link></li>
                            </ul>
                        </transition>
                    </li>
                    <li v-if="authenticated">
                        <router-link to="">
                            <font-awesome-icon icon="sign-out-alt" />
                            Sair
                        </router-link>
                    </li>
                    <li v-if="!authenticated">
                        <router-link to="/cadastro">
                            <font-awesome-icon icon="user-plus" />
                            Cadastre-se
                        </router-link>
                    </li>
                    <li v-if="!authenticated">
                        <router-link to="/login">
                            <font-awesome-icon icon="sign-in-alt" />
                            Entrar
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="bar-middle">
        <div class="container">
            <div class="column">
                <button class="btn-menu-mobile" v-b-toggle.menu-mobile>
                    <font-awesome-icon icon="bars" />
                </button>
            </div>
            <div class="column">
                <div class="logo">
                    <router-link to="/" title="Página inicial">
                        <img src="@/assets/img/logo.png" :alt="company.name">
                    </router-link>  
                </div>
            </div>
            <div class="column">
                <b-collapse class="search" id="header-search">
                    <form action="">
                        <input type="search" placeholder="Digite sua busca..." class="input">
                        <button type="submit" class="btn btn-submit">
                            <svg class="svg-search" viewBox="0 0 32 32"><g><path d="M29.71,28.29l-10-10a10,10,0,1,0-1.42,1.42l10,10ZM4,12a8,8,0,1,1,8,8A8,8,0,0,1,4,12Z"/></g></svg>
                        </button>
                    </form>
                </b-collapse>
            </div>
            <div class="column">
                <button class="btn-show-search-mobile" type="button" title="Pesquisar" v-b-toggle.header-search>
                    <svg class="svg-search" viewBox="0 0 32 32"><g><path d="M29.71,28.29l-10-10a10,10,0,1,0-1.42,1.42l10,10ZM4,12a8,8,0,1,1,8,8A8,8,0,0,1,4,12Z"/></g></svg>
                </button>
                <router-link to="" class="favorites" title="Lista de desejos (2 itens)">
                    Lista de desejos
                    <svg class="svg-heart" enable-background="new 0 0 48 48" viewBox="0 0 48 48"><path clip-rule="evenodd" d="M24.804,43.648L24,44l-0.804-0.352C12.862,37.313,2,22.893,2,14.884  C2.035,8.326,7.404,3.002,14,3.002c4.169,0,7.849,2.128,10,5.349c2.151-3.221,5.831-5.349,10-5.349c6.596,0,11.965,5.324,12,11.882  C46,22.893,35.138,37.313,24.804,43.648z M34,4.993c-3.354,0-6.469,1.667-8.335,4.46L24,11.946l-1.665-2.494  C20.469,6.66,17.354,4.993,14,4.993c-5.484,0-9.971,4.442-10,9.891c0,7.064,10.234,20.808,20,26.917  c9.766-6.109,20-19.852,20-26.907C43.971,9.435,39.484,4.993,34,4.993z" fill-rule="evenodd"/></svg>
                </router-link>
            </div>
            <div class="column">
                <router-link to="" class="cart" title="Meu carrinho de compras">
                    <span class="quantity">18</span>
                    <svg class="svg-shopping-bag" enable-background="new 0 0 48 48" viewBox="0 0 48 48"><path clip-rule="evenodd" d="M43,46H5c-2.209,0-4-1.791-4-4l4-24c0.678-3.442,2.668-4,4.877-4h2.652  C14.037,7.052,18.602,2,24,2s9.963,5.052,11.471,12h2.652c2.209,0,4.199,0.558,4.877,4l4,24C47,44.209,45.209,46,43,46z M24,4  c-4.352,0-8.045,4.178-9.418,10h18.837C32.045,8.178,28.353,4,24,4z M41,18c-0.308-1.351-0.957-2-2.37-2h-2.828  C35.925,16.976,36,17.975,36,19c0,0.552-0.447,1-1,1s-1-0.448-1-1c0-1.027-0.069-2.031-0.201-3H14.201C14.07,16.969,14,17.973,14,19  c0,0.552-0.447,1-1,1s-1-0.448-1-1c0-1.025,0.075-2.024,0.197-3H9.369C7.957,16,7.309,16.649,7,18L3,42c0,1.104,0.896,2,2,2h38  c1.104,0,2-0.896,2-2L41,18z" fill-rule="evenodd"/></svg>
                </router-link>
            </div>
        </div>
    </div>
    <div v-if="!$isMobile()" class="bar-bottom">
        <div class="container">
            <MenuCategoriesDesktop />
        </div>
    </div>
</header>

</template>

<script>
import MenuCategoriesDesktop from '@/components/MenuCategoriesDesktop.vue';
import MenuCategoriesMobile from '@/components/MenuCategoriesMobile.vue';
import company from '@/api/company.json'

export default {
    name: 'Header',
    data(){
        return {
            authenticated: false,
            dropdownMyAccount: false,
            searchMobile: false,
            company
        }
    },
    components: {
        MenuCategoriesDesktop,
        MenuCategoriesMobile
    },
    methods: {
        toggleMyAccount(){
            this.dropdownMyAccount = !this.dropdownMyAccount;
        },
        toggleSearchMobile(){
            this.searchMobile = !this.dropdownMyAccount;
        }
    }
}
</script>

<style lang="scss">
#menu-mobile {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100% !important;
    background: rgba(0,0,0,0.85);
    z-index: 2;
    display: grid;
    grid-template-rows: max-content;
    grid-template-columns: 1fr max-content;
    transition: left 0.25s linear;

    &.hidden {
        left: -100%;
    }

    &.show {
        left: 0;
    }

    .btn-close-menu-mobile {
        grid-column: 2;
        align-self: flex-start;
        padding: 0 10px;

        svg {
            color: #fff;
            font-size: $font-26px;
            padding: 15px;
        }
    }

    .nav-login {
        background: #fff;
        border-bottom: 4px solid $color-border;
        grid-column: 1;
        grid-row: 1;

        > ul {

            > li {
                border-bottom: 1px solid $color-border;

                > a,
                > button {
                    color: #000;
                    display: block;
                    padding: $column-gap;
                    position: relative;
                    width: 100%;
                    text-align: left;
                    font-size: $font-16px;

                    [class*="icon-"] { 
                        position: absolute;
                        right: $column-gap;
                        top: $column-gap;
                        line-height: 19px;
                    }
                }
            }
        }
    }

    #list-profile {
        transition: all 0.25s linear;
        overflow: hidden;

        > ul {
            background: $color-border;
            padding: 10px 0;
        }

        a {
            display: block;
            padding: 10px ($column-gap * 3);
        }
    }
}

#header {
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0; 
    z-index: 2;
    box-shadow: 0 5px 5px 0px rgba(0,0,0,0.05);

    .bar-top {
        background: rgba(0,0,0,0.035);
        font-size: $font-12px;

        .carousel-header {
            text-align: center;
            padding: 10px 0;
            overflow: hidden;
            text-transform: $capitalization;
        }

        nav {
            display: none;
        }
    }

    .dropdown-account {
        background: #fff;
        position: absolute;
        right: 0;
        border: 1px solid $color-border;
        text-align: left;
        top: calc(100% + 8px);
        z-index: 2;
        width: max-content;
        font-size: $font-13px;
        letter-spacing: 0.5px;
        color: rgba(0,0,0,0.65);

        li + li {
            border-top: 1px solid fade($color-border, 50%);
        }

        a {
            display: block;
            padding: 12px 15px;
            transition: all 0.15s linear;

            svg {
                width: 17px;
                text-align: center;
                margin-right: 3px;
                transition: all 0.15s linear;
            }
            
            &:hover {
                color: #000;
            }
        }

        // Seta
        $arrow-width: 5px;
        $arrow-height: 5px;

        &::before,
        &::after {
            content: '';
            display: block;
            border-width: $arrow-height $arrow-width;
            border-style: solid;
            border-color: transparent transparent #fff;
            position: absolute;
            top: -($arrow-height * 2);
            right: 10px;
            cursor: pointer;
        }

        &::before {
            border-width: ($arrow-height + 1) ($arrow-width + 1);
            top: -(($arrow-height * 2) + 2);
            right: 9px;
            border-color: transparent transparent $color-border;
        }
    }

    .bar-middle {
        padding: 15px 0;
        position: relative;
        background: #fff;
        
        .container {
            display: grid;
            grid-template-columns: max-content auto 0 max-content max-content;
            align-items: center;
            grid-column-gap: $column-gap;
        }

        .btn-menu-mobile {
            font-size: $font-20px;
        }

        .logo {

            a {
                display: inline-block;
            }

            img {
                max-height: 34px;
                vertical-align: middle;
            }
        }

        .btn-show-search-mobile {

            svg {
                width: 30px;
                height: 30px;
            }
        }

        .cart, 
        .favorites {
            position: relative;
            display: inline-block;
        }

        .favorites {
            display: none;
        }

        .quantity {
            $size: 20px;

            background: $color-primary;
            border-radius: 100%;
            text-align: center;
            color: #fff;
            width: $size;
            height: $size;
            position: absolute;
            top: -6px;
            right: -10px;
            font: 400 #{$font-10px}/#{$size} $font-primary;
        }

        .svg-heart, 
        .svg-shopping-bag {
            $size: 30px;
            
            width: $size;
            height: $size;

            path {
                color: inherit;
            }
        }
    }

    .bar-bottom {
        background: #fff;
        position: relative;
        transition: all 0.15s linear;
        z-index: -1;
    }

    #header-search {
        position: absolute;
        top: 55px;
        left: 0;
        right: 0;
        background:  #fff;
        transition: all 0.25s linear;
        overflow: hidden;

        form {
            font-size: 0;
        }

        .input {
            width: 100%;
            border-color: transparent;
            background: rgba(0,0,0,0.05);
            height: 50px;
            border-radius: 0;
        }

        .btn {
            position: absolute;
            top: 0;
            right: 0;
            height: 50px;

            .svg-search {
                $size: 26px;

                width: $size;
                height: $size;

                path {
                    fill: #000;
                }
            }
        }
    }
}

@media all and (min-width: $breakpoint-medium) {

    #header {

        .bar-middle {

            .container {
                grid-template-columns: max-content max-content auto max-content max-content;
                grid-column-gap: $column-gap * 2;
            }

            .btn-show-search-mobile {
                display: none;
            }

            .favorites {
                display: block;
                line-height: 30px;

                svg {
                    float: right;
                    margin-left: 5px;
                }
            }
        }

        #header-search {
            display: block !important;
            position: relative;
            top: auto;
            left: auto;
            right: auto;
            background: transparent;

            .input {
                height: 40px;
                border-color: $color-border;
                background: #fff;
                border-radius: $form-radius;
            }

            .btn {
                height: 40px;

                .svg-search {

                    path {
                        fill: rgba(0,0,0,0.85);
                    }
                }
            }
        }
    }
}


@media all and (min-width: $breakpoint-large) {

    #header {

        .bar-top {

            .container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                align-items: center;
            }

            .carousel-header {
                grid-column: 2;
            }

            nav {
                display: block;
                text-align: right;
                grid-column: 3;
    
                > ul > li {
                    position: relative;
                    display: inline-block;
    
                    + li {
                        margin-left: 20px;
                    }
    
                    > a {
                        display: inline-block;
        
                        svg {
                            margin-right: 3px;
                        }
                    }
                }
            }
        }

        .bar-middle {
            padding: 20px 0;

            .container {
                grid-template-columns: max-content auto max-content max-content;

                .column {
                    grid-row: 1;

                    &:first-child {
                        display: none;
                    }
                }
            }

            .logo {

                img {
                    max-height: 40px;
                }
            }

            .favorites {
                display: block;
            }
        }

        .bar-bottom {
            position: relative;
            background: $color-primary;
        }
    }
}
</style>
