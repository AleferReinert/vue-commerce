<template>
  <main id="page-cart">
        <div class="container">
            <div v-if="cartItems === 0" id="empty-cart">
                <h1>Seu carrinho está vazio</h1>
                <p>Quando você adicionar produtos ao seu carrinho, eles serão listados aqui.</p>
            </div>
            <div v-else class="grid">
                <div id="column-cart">
                    <div class="page-header">
                        <h1>Meu carrinho</h1>
                        <span class="quantity">{{ cartItems }} itens</span>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th colspan="2">Produto</th>
                                <th>Quantidade</th>
                                <th>Valor</th>
                                <th>Remover</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(product, index) in cartItems" :key="index">
                                <td>
                                    <img :alt="Product.title" src="@/assets/img/products/product-1-img-1.jpg">
                                </td>
                                <th scope="row">
                                    {{ Product.title }}
                                </th>
                                <td>
                                    <button type="button">-</button>
                                    <input class="input quantity" type="text" inputmode="numeric" min="1">
                                    <button type="button">+</button>
                                </td>
                                <td>
                                    {{ originalPrice }}
                                </td>
                                <td>
                                    <button type="button" title="Remover">
                                        <font-awesome-icon icon="times" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <router-link to="/" class="btn-link">
                        <font-awesome-icon icon="long-arrow-alt-left" />
                        Continuar comprando
                    </router-link>
                </div>
                <div id="column-summary">
                    <h2>Resumo</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Subtotal</th>
                                <td>R$ 299,99</td>
                            </tr>
                            <tr>
                                <th>Descontos</th>
                                <td>R$ 0,00</td>
                            </tr>
                            <tr>
                                <th>Valor total</th>
                                <td>
                                    R$ 299,99 <br>
                                    <small>Em até 12x de R$ 24,99 sem juros</small>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <router-link to="/" class="btn btn-success">Continuar</router-link>
                </div>
            </div>
		</div>
            
	</main>
</template>

<script>
import Product from '@/api/product.json'
import formatedMoney from '@/mixins/formatedMoney.js'

export default {
    name: 'Carrinho',
    mixins: [formatedMoney],
    data(){
        return {
            Product,
            cartItems: 4
        }
    },
    computed: {
        originalPrice(){
            return this.formatedMoney(this.Product.price)
        },
        priceWithDiscountPercentage(){
            return this.formatedMoney(this.discountPercentage(this.Product.price))
        }
    }
}
</script>
<style lang="scss">
#empty-cart {
    text-align: center;

    h1 {
        font-size: $font-22px;
        margin-bottom: 15px;
    }
}


#page-cart {
    padding: 50px 0;

    .page-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;

        h1 {
            font-size: $font-20px;
        }

        .quantity {
            font-size: $font-14px;
            font-weight: 500;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: auto 400px;
        column-gap: 30px;
    }
}

#column-cart {

    table {
        text-align: center;
        margin-bottom: 45px;
        font: 600 $font-14px $font-primary;

        img {
            width: 80px;
        }

        tr {
            border-bottom: 1px solid $border-color;
        }

        th, td {
            padding: 10px;
        }

        thead th {
            font-weight: 500;
            font-size: $font-12px;
            padding-bottom: 3px;

            &:first-child {
                text-align: left;
            }
        }

        tbody td:first-child {
            text-align: left;
            width: 80px;
        }

        tbody th {
            text-align: left;
        }

        .quantity {
            width: 50px;
            margin: 0 5px;
            padding-left: 0;
            padding-right: 0;
            text-align: center;
        }
    }
}

#column-summary {
    padding: 15px;
    background: #f6f6f6;

    h2 {
        font-size: $font-18px;
    }

    table {
        margin: 15px 0;
        font-size: $font-14px;
        font-weight: 500;

        small {
            font-weight: 400;
        }

        tr {
            border-top: 1px solid $border-color;
        }

        th {
            text-align: left;
            opacity: 0.85;
        }

        td {
            text-align: right;
            padding: 15px 0;
            font-weight: 600;
        }
    }

    .btn {
        width: 100%;
    }
}
</style>