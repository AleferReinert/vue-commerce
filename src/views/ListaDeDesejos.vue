<template>
  <main id="page-favorites">
        <div class="container">
            <div v-if="favoriteItems === 0" id="empty-favorites">
                <h1>Sua lista de desejos está vazia</h1>
                <p>Quando você favoritar os produtos desejados, eles serão listados aqui.</p>
            </div>
            <template v-else>
                <div class="page-header">
                    <h1>Lista de desejos</h1>
                    <span class="quantity">{{ favoriteItems }} itens</span>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th colspan="2">Produto</th>
                            <th>Valor</th>
                            <th>Remover</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in favoriteItems" :key="index">
                            <td>
                                <img :alt="Product.title" src="@/assets/img/products/product-1-img-1.jpg">
                            </td>
                            <th scope="row">
                                {{ Product.title }}
                            </th>
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
            </template>
		</div>
	</main>
</template>

<script>
import Product from '@/api/product.json';
import formatedMoney from '@/mixins/formatedMoney.js';

export default {
    name: 'ListaDeDesejos',
    mixins: [formatedMoney],
    data(){
        return {
            Product,
            favoriteItems: 4
        }
    },
    computed: {
        originalPrice(){
            return this.formatedMoney(this.Product.price);
        }
    }
}
</script>

<style lang="scss">
#empty-favorites {
    text-align: center;

    h1 {
        font-size: $font-22px;
        margin-bottom: 15px;
    }
}


#page-favorites {
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
</style>