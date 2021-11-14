<template>
    <main class="page-my-account" id="page-my-orders">
        <div class="container">
            <Breadcrumb current-page="Minhas compras" />

            <div class="grid">
                <MenuMyAccount />
            
                <div class="content">
                    <h1>Minhas compras</h1>
                </div>
            </div>
        </div>
            
    </main>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';
import MenuMyAccount from '@/components/MenuMyAccount.vue';

export default {
    name: 'MinhasCompras',
    components: {
        Breadcrumb,
        MenuMyAccount
    }
}
</script>

<style lang="scss">

</style>