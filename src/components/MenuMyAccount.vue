<template>
<aside id="menu-my-account">
    <nav>
        <ul>
            <li>
                <router-link :class="currentRouteName === 'MeusDados' ? 'active' : ''" to="/minha-conta/meus-dados">
                    <font-awesome-icon icon="user" />
                    Meus dados
                </router-link>
            </li>
            <li>
                <router-link :class="currentRouteName === 'MinhasCompras' ? 'active' : ''" to="/minha-conta/minhas-compras">
                    <font-awesome-icon icon="shopping-cart" />
                    Minhas compras
                </router-link>
            </li>
            <li>
                <router-link :class="currentRouteName === 'Seguranca' ? 'active' : ''" to="/minha-conta/seguranca">
                    <font-awesome-icon icon="lock" />
                    Segurança
                </router-link>
            </li>
            <li>
                <router-link :class="currentRouteName === 'MeusEnderecos' ? 'active' : ''" to="/minha-conta/meus-enderecos">
                    <font-awesome-icon icon="map-marker-alt" />
                    Meus endereços
                </router-link>
            </li>
            <li>
                <router-link :class="currentRouteName === 'MeusCartoes' ? 'active' : ''" to="/minha-conta/meus-cartoes">
                    <font-awesome-icon :icon="['far','credit-card']" />
                    Meus cartões
                </router-link>
            </li>
        </ul>
    </nav>
</aside>
</template>

<script>
export default {
    name: 'MenuMyAccount',
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    }
}
</script>

<style lang="scss">
    #menu-my-account {
        border: 1px solid $border-color;
        min-width: 180px;

        svg {
            width: 14px;
        }

        a {
            display: flex;
            padding: 15px;
            border-top: 0;
            font-size: $font-12px;
            font-weight: 500;
            z-index: 1;
            position: relative;
            transition: all .15s linear;
            gap: 5px;
            align-items: center;

            &:hover {
                background: #fafafa;
            }

            &::before {
                content: '';
                display: block;
                width: 3px;
                position: absolute;
                left: -1px;
                top: -1px;
                bottom: -1px;
                transition: all .15s linear;
            }
        }

        li + li {
            border-top: 1px solid $border-color;
        }

        .active {
            font-weight: 600;
            background: #fafafa;
            cursor: default;

            &::before {
                background-color: $primary-color;
            }
        }
    }
</style>