<template>
    <nav id="menu-categories">
        <ul>
            <!-- Primeiro nível -->
            <li @mouseover="showCategories(index)" @mouseleave="closeCategories(index)" v-for="(category, index) in categories" :key="index">
                <router-link :to="category.link">{{ category.name }}</router-link>

                <!-- Segundo nível -->
                <template v-if="category['subcategories']">
                    <div :class="index == categoriesIndex && categoriesStatus == 'active' ? categoriesStatus : ''" class="submenu-primary" :id="`category-${index}`">
                        <ul>
                            <li v-for="(subcategoryPrimary, subindexPrimary) in category['subcategories']" :key="subindexPrimary">
                                <router-link :to="subcategoryPrimary.link">{{ subcategoryPrimary.name }}</router-link>

                                <!-- Terceiro nível -->
                                <div v-if="subcategoryPrimary['subcategories']" class="submenu-secondary">
                                    <ul>
                                        <li v-for="(subcategorySecondary, subindexSecondary) in subcategoryPrimary['subcategories']" :key="subindexSecondary">
                                            <router-link :to="subcategorySecondary.link">{{ subcategorySecondary.name }}</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </template>
            </li>
        </ul>
    </nav>
</template>
<script>
import categories from '@/api/categories.json'

export default {
    name: 'MenuDesktop',
    data(){
        return {
            categories,
            categoriesStatus: '',
            categoriesIndex: 0
        }
    },
    methods: {
        showCategories(index){
            this.categoriesStatus = 'active'
            this.categoriesIndex = index
        },
        closeCategories(index){
            this.categoriesStatus = ''
            this.categoriesIndex = index
        }
    },
    created(){
        return this.categories.map(function(category){
            Object.defineProperty(category, 'active', {value: false})
        })
    }
}
</script>
<style lang="scss">
#menu-categories {
    display: block;

    button.collapsed {
        display: none;
    }

    .only-submenu-primary .submenu-primary {

        ul {
            display: grid;
            grid-template-columns: repeat(4, max-content);
            width: max-content !important;
            padding-top: 25px;
        }
        
        a {
            font-weight: 400;
            font-size: $font-14px;
            padding: 3px 0;
            margin: 0;
            text-transform: none;

            &:hover {
                transform: translateX(1px);
            }
        }
    }
    
    > ul {
        font-size: 0;
        margin: 0 (-$column-gap);
        display: flex;
        justify-content: space-between;

        > li {
            display: inline-block;

            &:last-child > a {
                font-weight: 600;
            }

            > a:hover,
            &.active > a {

                &::after {
                    opacity: 1;
                }
            }

            > a {
                font-size: $font-12px;
                line-height: $font-17px;
                padding: 15px;
                display: inline-block;
                transition: all $transition-duration linear;
                text-transform: $capitalization;
                letter-spacing: 1px; 
                position: relative;
                color: #fff;

                &::after {
                    content: '';
                    opacity: 0;
                    position: absolute;
                    left: 8px;
                    right: 8px;
                    bottom: -1px;
                    height: 2px;
                    background: #fff;
                    transition: all 0.15s linear;
                }
            }
        }
    }

    .submenu-primary {
        background: #fff;
        position: absolute;
        top: 47px;
        left: 0;
        right: 0;
        z-index: 2;
        box-sizing: border-box;
        max-height: 0;
        transition: all 0.35s ease-in;
        overflow: hidden;

        &.active {
            max-height: 200px;
        }

        a {
            color: $black-color;
            transition: all 0.1s linear;
            display: block;
            letter-spacing: 0.4px;
            font-size: $font-14px;
        }

        > ul {
            padding: 10px 0 30px;
            display: flex;
            width: $container-large;
            margin: 0 auto;
            flex-wrap: wrap;
            grid-column-gap: $column-gap * 2;
            justify-content: center;

            > li {

                > a {
                    font-size: $font-12px;
                    font-weight: 600;
                    text-transform: $capitalization;
                    margin: 10px 0;
                    color: $secondary-color;

                    &:hover {
                        color: darken($secondary-color, 10%);
                    }
                }
            }
        }
    }

    .submenu-secondary {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        li {
            display: block;
        }

        a {
            padding: 2px 0;
            font-size: $font-14px;

            &:hover {
                color: #000;
                transform: translateX(1px);
            }
        }
    }
}

@media all and (min-width: $breakpoint-extralarge) {

    #menu-categories {
        .submenu-primary > ul {
            width: $container-extralarge;
        }
    }
}
</style>