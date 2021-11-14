<template>
    <nav class="breadcrumb" aria-label="breadcrumb">
        <ol>
            <li>
                <router-link to="/">Início</router-link>
            </li>

            <li v-if="this.$route.path.indexOf('minha-conta') !== -1">
                <router-link to="/minha-conta">Minha conta</router-link>
            </li>
        
            <li>
                {{ currentPage }}
            </li>
        </ol>
        
    </nav>
</template>

<script>
export default {
    name: 'Breadcrumb',
    props: ['currentPage']
}
</script>

<style lang="scss">
.breadcrumb {
    border-bottom: 1px solid $border-color;
    margin: 0 0 30px;
    padding: 15px 0 5px;
    letter-spacing: 0.25px;

    ol {
        font-size: 0;
    }

    li {
        display: inline-block;
        font-size: $font-12px;

        + li {

            &::before {
                content: '/';
                padding: 0 5px;
                font-size: $font-10px;
            }
        }

        &:last-child {
            font-weight: 500;
        }
    }
}
</style>