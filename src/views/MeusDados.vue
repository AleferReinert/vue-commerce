<template>
    <main class="page-my-account" id="page-my-data">
        <div class="container">
            <Breadcrumb current-page="Meus dados" />

            <div class="grid">
                <MenuMyAccount />
            
                <div class="content">
                    <h1>Meus dados</h1>
                </div>
            </div>
        </div>
            
    </main>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';
import MenuMyAccount from '@/components/MenuMyAccount.vue';

export default {
    name: 'MeusDados',
    components: {
        Breadcrumb,
        MenuMyAccount
    }
}
</script>

<style lang="scss">

</style>