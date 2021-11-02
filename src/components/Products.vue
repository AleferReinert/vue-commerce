<template>
    <router-link to="/produto-detalhes" class="product">
        <img class="image" width="330" height="330" src="@/assets/img/products/product-1-img-1.jpg" alt="">
        <h2 class="title">Camiseta Adidas Trefoil</h2>
        <div class="price-original"><span>R$ 99,90</span></div>
        <div class="price-final"><span>R$ 89,90</span></div>
        <div class="discount">{{ this.salesRules.discountPercentage }}% off</div>

        <form action="">
            <input type="hidden" name="favorite" value="">
            <button type="submit" class="btn-favorites btn-add-favorites" title="Adicionar aos favoritos">
                <span class="far fa-heart"></span>
            </button>
        </form>
    </router-link>
</template>

<script>
import salesRules from '@/api/salesRules.json'

export default {
    name: 'Products',
    data(){
        return {
            salesRules
        }
    }
}
</script>

<style lang="scss">
.product {
    display: grid;
    position: relative;
    grid-template-rows: auto 1.3fr 1fr 1fr;
    align-items: center;
    text-align: center;

    > * {
        transition: all 0.085s linear;
    }

    .image {
        width: 100%;
        max-width: 100%;
        background: #dedede;
        opacity: 0.92;
    }

    .title {
        font-weight: 400;
        font-size: $font-14px;
        white-space: nowrap;
        text-overflow: ellipsis;
        align-self: end; 
    }

    .price-original {
        font-size: $font-12px;
        font-weight: 400;
        color: rgba(0,0,0,0.45);
        align-self: end;

        span {
            text-decoration: line-through;
        }
    }

    .price-final {
        font-size: $font-12px;
        color: $color-secondary;
        grid-row: 4;

        span {
            font-weight: 700;
            font-size: $font-14px;
        }
    }

    .discount {
        position: absolute;
        right: 0;
        bottom: 87px;
        color: #fff;
        text-transform: $capitalization;
        padding: 6px 8px;
        background: rgba(0, 0, 0, 0.25);
        font-weight: 300;
        font-size: $font-16px;
    }

    .btn-favorites {
        position: absolute;
        right: 0px;
        top: 0px;
        padding: 10px;
        opacity: 0;
        color: #fff;
        font-size: 18px;

        &:hover {
            color: red;
        }
    }

    .btn-remove-favorites {
        color: red;
        opacity: 1;
        transform: scale(0.75);

        &:hover {
            transform: scale(1);
        }
    }

    &:hover {

        .discount {
            background: rgba(0, 0, 0, 0.35);
        }
        .image,
        .btn-favorites {
            opacity: 1;
        }

        .price-final {
            color: $color-primary;
        }
    }
}
</style>