<template>
    <p class="rating" :title="`${rating} de 5 estrelas - ${quantity} avaliações`">
        {{ rating }}
        <span class="stars">
            <span class="stars-empty">
                <font-awesome-icon v-for="(i, index) in 5" :key="index" :icon="['far','star']" />
            </span>
            <span class="stars-full" :style="starsWidth">
                <font-awesome-icon v-for="(i, index) in 5" :key="index" :icon="['fa','star']" />
            </span>
        </span>
        
        <a href="" class="quantity-text">({{ quantity }} avaliações)</a>
    </p>
</template>

<script>
export default {
    name: 'Rating',
    props: ['rating','quantity'],
    data(){
        return {
            starsWidth: 0
        }
    },
    methods: {
        getStarsWidth(){
            let onlyStarWidth = document.querySelector('.rating > .stars').offsetWidth / 5;
            let starsWidth = (this.rating * onlyStarWidth).toFixed(2);
            return starsWidth;
        }
    },
    mounted(){
        this.starsWidth = `max-width: ${this.getStarsWidth()}px`;
    }
}
</script>

<style lang="scss">
.rating {
    font-size: $font-12px;
    display: flex;
    align-items: center;

    svg {
        color: #ffcb37;
    }

    .stars {
        position: relative;
        margin: 0 5px;
    }

    .stars-full {
        position: absolute;
        left: 0;
        bottom: 0;
        width: max-content;
        overflow: hidden;
        white-space: nowrap;
    }

    .quantity-text {
        opacity: 0.8;

        &:hover {
            opacity: 0.9;
        }
    }
}
</style>