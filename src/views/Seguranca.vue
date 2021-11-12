<template>
    <main class="page-my-account" id="page-security">
        <div class="container">
            <Breadcrumb current-page="Segurança" />

            <div class="grid">
                <MenuMyAccount />
            
                <div class="content">
                    <h1>Segurança</h1>
                </div>
            </div>
        </div>
            
    </main>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import MenuMyAccount from '@/components/MenuMyAccount.vue'

export default {
    name: 'Seguranca',
    components: {
        Breadcrumb,
        MenuMyAccount
    }
}
</script>

<style lang="scss">

</style>