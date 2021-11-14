<template>
    <main class="page-my-account" id="page-my-addresses">
        <div class="container">
            <Breadcrumb current-page="Meus endereços" />

            <div class="grid">
                <MenuMyAccount />
            
                <div class="content">
                    <h1>Meus endereços</h1>
                </div>
            </div>
        </div>
            
    </main>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';
import MenuMyAccount from '@/components/MenuMyAccount.vue';

export default {
    name: 'MeusEnderecos',
    components: {
        Breadcrumb,
        MenuMyAccount
    }
}
</script>

<style lang="scss">

</style>