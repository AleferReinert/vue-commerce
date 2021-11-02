<template>
    <nav class="breadcrumb">
        <ul>
            <li>
                <router-link to="/">Início</router-link>
            </li>
            <li>
                {{ currentPage }}
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Breadcrumb',
    props: [
        'currentPage'
    ]
}
</script>

<style lang="scss">
.breadcrumb {
    border-bottom: 1px solid $color-border;
    margin: 20px 0 40px;
    padding: 0 0 5px;
    letter-spacing: 0.25px;

    ul {
        font-size: 0;
    }

    li {
        display: inline-block;
        font-size: $font-14px;

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