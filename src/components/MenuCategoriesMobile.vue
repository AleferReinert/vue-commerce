<template>
    <nav id="menu-categories-mobile">
        
        <ul>
            <!-- Primeiro nível -->
            <li v-for="(category, index) in categories" :key="index" :data-id="`category-${index}`">
                <router-link :to="category.link">{{ category.name }}</router-link>

                <!-- Segundo nível -->
                <template v-if="category['subcategories']">
                    <button type="button" :data-toggle="`category-${index}`">
                        <CollapseIcons />
                    </button>

                    <div class="submenu-primary" :id="`category-${index}`">
                        <ul>
                            <li v-for="(subcategoryPrimary, subindexPrimary) in category['subcategories']" :key="subindexPrimary">
                                <router-link :to="subcategoryPrimary.link">{{ subcategoryPrimary.name }}</router-link>

                                <!-- Terceiro nível -->
                                <button v-if="subcategoryPrimary['subcategories']" type="button" :data-toggle="`subcategory-primary-${subindexPrimary}`">
                                    <CollapseIcons />
                                </button>

                                <div v-if="subcategoryPrimary['subcategories']" class="submenu-secondary" :id="`subcategory-primary-${subindexPrimary}`">
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
import CollapseIcons from '@/components/CollapseIcons.vue'

export default {
    name: 'MenuCategoriesMobile',
    components: {
        CollapseIcons
    },
    data(){
        return {
            categories
        }
        
    },
    async created() {
        await this.prepareCategories()
    },
    methods: {
        prepareCategories(){

            this.categories.forEach(element => {
                
                this.categories.push({... element, visible: false})
                console.log(element)
            })
        }
    }
}
</script>
<style lang="scss">
#menu-categories-mobile {
    background: #fff;
    overflow-y: auto;
    grid-column: 1;
    grid-row: 2;

    > ul {
        margin-left: 0;

        > li {
            border-bottom: 1px solid $border-color;
            display: grid;
            grid-template-columns: auto 50px;

            > a {
                color: #000;
                display: block;
                padding: $column-gap;
            }

            button {
                display: flex;
                justify-content: center;
                align-items: center;

                svg {
                    width: 10px;
                    height: 16px;
                }
            }
        }
    }

    .submenu-primary {
        grid-column: 1 / 3;
        border-top: 1px solid $border-color;
        background: rgba(0, 0, 0, 0.05);
        transition: all 0.25s linear;
        overflow: hidden;

        > ul {

            > li {
                display: grid;
                grid-template-columns: auto 50px;
                padding-left: ($column-gap * 2);

                > a {
                    display: block;
                    padding: 10px 0;
                    color: rgba(0,0,0,0.85);
                }

                + li {
                    border-top: 1px solid $border-color;
                }

                button {
                    opacity: 0.5;
                }
            }
        }
    }

    .submenu-secondary {
        transition: all $transition-duration linear;
        overflow: hidden;
        grid-column: 1 % 3;
        padding: 0 0 10px $column-gap;

        a {
            display: block;
            font-size: $font-14px;
            padding: 5px 0;

            &:hover {
                transform: translateX(2px);
            }
        }
    }
}
</style>