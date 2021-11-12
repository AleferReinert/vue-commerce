<template>
    <main class="page-my-account" id="page-my-payment-cards">
        <div class="container">
            <Breadcrumb current-page="Meus cartões" />

            <div class="grid">
                <MenuMyAccount />
            
                <div class="content">
                    <h1>Meus Cartões</h1>
                </div>
            </div>
        </div>
            
    </main>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import MenuMyAccount from '@/components/MenuMyAccount.vue'

export default {
    name: 'MeusCartoes',
    components: {
        Breadcrumb,
        MenuMyAccount
    }
}
</script>

<style lang="scss">

</style>