<template>
  <main id="page-product">
        <div class="container">
            <Breadcrumb :current-page="productData.title" />
            
            <div class="page-content">
                <div class="product-images">
                    <div class="carousel-product owl-carousel">
                        <a href="" v-for="(n, index) in 5" :key="index">
                            <img :src="`../assets/img/products/product-1-img-${++index}.jpg`" alt="">
                        </a>
                    </div>
                </div>
                <div class="product-image-master">
                    <img src="@/assets/img/products/product-1-img-1.jpg" alt="">
                </div>
                <div class="product-infos">
                    <h1 class="title">{{ productData.title }}</h1>
                    <Rating rating="4.1" quantity="5" />
                    <p class="price-original">De <span>{{ originalPrice }}</span></p>
                    <p class="price-final">
                        Por 
                        <span class="price">{{ priceWithDiscountPercentage }} </span>
                        <span class="discount">({{ salesRules.discountPercentage }}% off)</span>
                    </p>

                    <form action="">
                        <div class="fieldset fieldset-size">
                            <fieldset>
                                <legend>
                                    Selecione um tamanho:
                                </legend>
                                <div>
                                    <label v-for="(size, index) in productData.sizes" :key="index">
                                        <input type="radio" name="size" :value="size" required>
                                        <span class="size">{{ size }}</span>
                                    </label>
                                </div>
                            </fieldset>
                        </div>

                        <div class="fieldset fieldset-color">
                            <fieldset>
                                <legend>
                                    Selecione uma cor:
                                </legend>
                                <div>
                                    <label v-for="(color, index) in productData.colors" :key="index" :title="color.name">
                                        <input type="radio" name="color" :value="color.value" :style="`background: ${color.value}`">
                                        <font-awesome-icon icon="check" />
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                        <button type="submit" class="btn btn-success btn-buy">
                            <font-awesome-icon icon="shopping-cart" />
                            Adicionar ao carrinho
                        </button>
                    </form>
                    <form action="">
                        <input type="hidden" name="favorite" value="false">
                        <button type="submit" class="btn btn-default btn-favorites btn-add-favorites" title="Adicionar aos favoritos">
                            <font-awesome-icon icon="heart" />
                            Adicionar a lista de desejos
                        </button>
                    </form>
                    <form action="" id="shipping-calculate">
                        <label for="zip-code">Calcular frete e prazo</label>
                        <input type="text" class="input" placeholder="Digite seu CEP" v-mask="'#####-###'" id="zip-code">
                        <button type="submit" class="btn btn-default">Calcular</button>
                        <a href="https://buscacepinter.correios.com.br/app/localidade_logradouro/index.php" target="_blank">Não sei meu CEP</a>                        
                    </form>
                </div>

                <section id="more-information">
                    <div>
                        <h2 class="title">Descrição</h2>
                        <font-awesome-icon icon="plus" class="icon-collapsed" />
                        <font-awesome-icon icon="minus" class="icon-show" />
                    </div>
                    <div id="product-description">
                        <p>{{ productData.description }}</p>
                    </div>
                    <div>
                        <h2 class="title">Informações Técnicas</h2>
                        <font-awesome-icon icon="plus" class="icon-collapsed" />
                        <font-awesome-icon icon="minus" class="icon-show" />
                    </div>
                    <div id="product-technical-information">
                        <ul>
                            <li v-for="(info, index) in productData.technicalInformations" :key="index">
                                <span>{{ info.name }}:</span>
                                <span>{{ info.value }}</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>

            <section id="related-products">
                <header class="header-section">
                    <h1 class="title">Produtos Relacionados</h1>
                </header>

                <div class="list-products" id="carousel-related-products">
                    <carousel class="list-products" 
                        :paginationEnabled="false" 
                        :navigationEnabled="true" 
                        :perPageCustom="[[768, 2], [992, 4]]"
                        >
                        <slide v-for="(n, index) in 16" :key="index">
                            <Products />
                        </slide>
                    </carousel>
                </div>
            </section>
		</div>
	</main>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb';
import Products from '@/components/Products';
import productData from '@/api/product.json';
import salesRules from '@/api/salesRules.json';
import formatedMoney from '@/mixins/formatedMoney.js';
import { mask } from 'vue-the-mask';
import Rating from '@/components/Rating.vue';

export default {
    name: 'ProdutoDetalhes',
    components: {
        Breadcrumb,
        Products,
        Rating
    },
    directives: {
        mask: (el, binding) => {
            if (!binding.value) return
            mask(el, binding);
        }
    },
    mixins: [formatedMoney],
    data(){
        return {
            productData,
            salesRules
        }
    },
    computed: {
        originalPrice(){
            return this.formatedMoney(this.productData.price);
        },
        priceWithDiscountPercentage(){
            return this.formatedMoney(this.discountPercentage(this.productData.price));
        }
    }
}
</script>

<style lang="scss">
#page-product {

    .breadcrumb {
        margin-bottom: 20px;
    }

    .product-images {
        overflow: hidden;
    }

    .product-image-master {
        display: none;
    }

    .carousel-product {

        .owl-dots {
            position: static;
            margin-top: 15px;

            > button {
                margin: 0 5px;
            }
        }
    }

    .product-infos {

        .title {
            font-size: $font-18px;
            font-weight: 600;
            margin: 25px 0 15px;
            text-transform: $capitalization;
        }

        .price-original {
            font-size: $font-14px;
            font-weight: 400;
            color: rgba(0,0,0,0.45);
            align-self: end;

            span {
                text-decoration: line-through;
                font-size: $font-14px;
            }
        }

        .price-final {
            font-size: $font-14px;

            .price {
                font-weight: 700;
                font-size: $font-22px;
                color: $success-color;
            }

            .discount {
                font-size: $font-12px;
                text-transform: $capitalization;
            }
        }

        .fieldset {
            margin-top: 15px;

            legend {
                font-size: $font-14px;
                margin-bottom: 2px;
            }

            label {
                display: flex;
                float: left;
                position: relative;
                justify-content: center;
                align-items: center;
                font-size: $font-12px;

                + label {
                    margin-left: -1px;
                }
            }

            [type=radio] {
                position: absolute;
                z-index: -1;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                &::after {
                    border-radius: 0;
                }
            }
        }

        .fieldset-size {
            
            label {
                $size: 30px;
                height: $size;
                line-height: $size;
                padding: 0 10px;
                min-width: $size;
                text-transform: uppercase;
                box-sizing: border-box;
            }

            input[type="radio"]::after {
                transition: all .15s linear;
            }

            input:checked::after {
                background: $success-color;
                border-top-color: $success-color;
                border-bottom-color: $success-color;
            }

            input:checked + .size {
                color: #fff;
            }
        }

        .fieldset-color {

            svg {
                opacity: 0;
                color: #fff;
                width: 20px;
                height: 16px;
                transition: all 0.15s linear;
            }

            input[value="white"],
            input[value="yellow"] {

                &:checked + svg {
                    color: $black-color;
                }
            }

            label {
                font-size: 0;
                border-radius: 100%;
                width: 30px;
                height: 30px;
                margin: 0 5px 5px 0;
            }

            [type=radio] {
                border-radius: 100%;
                border: 1px solid $border-color;

                &::after {
                    background: transparent;
                    border: 0;
                }

                &:checked + svg {
                    opacity: 1;
                }
            }
        }

        .btn-buy {
            width: 100%;
            margin: 10px 0;
        }

        .btn-favorites {
            width: 100%;
        }
    }
}

#shipping-calculate {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    padding: 15px 0;
    margin: 20px 0 0;

    label {
        display: block;
        font-size: $font-14px;
        margin-bottom: 5px;
    }

    input {
        width: 130px;

        &:focus {
            border-color: $border-color;
        }
    }

    .btn {
        margin-left: -1px;
        background: $border-color;
    }

    a {
        text-decoration: underline;
        font-size: $font-10px;
        margin-left: 10px;
        color: $link-color;
    }
}

#more-information {
    border-bottom: 1px solid $border-color;
    margin: $row-gap 0;

    > div {
        padding: 15px 0;
        border-top: 1px solid $border-color;

        .title, svg {
            font-size: $font-16px;
            font-weight: 600;
            color: $black-color;
        }
    }
}

#product-description {

    p {
        font-size: $font-14px;
        line-height: $font-20px;
    }
}

#product-technical-information {
    li {
        display: grid;
        grid-template-columns: 120px auto;
        padding: 10px 5px;
        font-size: $font-14px;

        &:nth-child(odd) {
            background: rgba(0,0,0,0.035);
        }
    }
}

#related-products {
    display: none;
}

#carousel-related-products {

    .VueCarousel-inner {
        margin: 0 (-$column-gap / 2);
    }

    .VueCarousel-slide > a {
        margin: 0 ($column-gap / 2);
    }
}

@media all and (min-width: $breakpoint-small) {

    #page-product {

        .page-content {
            display: grid;
            grid-template-columns: 260px auto;
            grid-template-rows: auto auto;
            grid-column-gap: $column-gap;

            .product-images {
                grid-column: 1;
                grid-row: 1;
            }

            .product-infos {
                grid-column: 2;
                grid-row: 1;

                .title {
                    margin-top: 0;
                }
            }
        }
    }

    #more-information {
        grid-column: 1 / 4;
        grid-row: 2;

        svg {
            display: none !important;
        }
    }

    #related-products {
        display: block;
        margin-bottom: $row-gap;

        .list-products {
            display: block;
            grid-template-columns: none;
            grid-column-gap: 0;
            grid-row-gap: 0;
        }
    }
}

@media all and (min-width: $breakpoint-medium) {

    #page-product {

        .page-content {
            grid-template-columns: 330px auto;
        }
    }

    #related-products {
    }
}

@media all and (min-width: $breakpoint-large) {

    // Carousel vertical
    $qtd-items: 3;
    $margin: 5px;
    $size-item: 120px;
    $button-nav-width: 20px;
    $button-nav-height: 12.5px;
    $size-items-area: (($qtd-items - 1) * $margin) + ($qtd-items * $size-item);
    $size-full-area: $size-items-area + ($button-nav-height * 2) + ($margin * 2);

    #page-product {

        .page-content {
            grid-template-columns: $size-item $size-full-area auto;

            .product-images {
                grid-column: 1;
                height: $size-full-area;
            }
            
            .product-image-master {
                display: block;
                grid-column: 2;
            } 

            .product-infos {
                grid-column: 3;
            }
        }
    }

    #more-information {
        grid-column: 1 / 4;
    }

    #related-products {
    }
}

@media all and (min-width: $breakpoint-extralarge) {

    // Carousel vertical
    $qtd-items: 3;
    $margin: 5px;
    $size-item: 150px;
    $button-nav-width: 20px;
    $button-nav-height: 12.5px;
    $size-items-area: (($qtd-items - 1) * $margin) + ($qtd-items * $size-item);
    $size-full-area: $size-items-area + ($button-nav-height * 2) + ($margin * 2);

    #page-product {

        .page-content {
            grid-template-columns: $size-item $size-full-area auto;

            .product-images {
                height: $size-full-area;
            }
        }
    }

    #related-products {
        margin-bottom: $row-gap;
    }
}
</style>