<template>
  <header id="header-secondary">
    <div class="logo">
        <router-link to="/" title="Página inicial">
            <img src="@/assets/img/logo.png" :alt="company.name">
        </router-link>  
    </div>
</header>

</template>

<script>
import company from '@/api/company.json'

export default {
    name: 'HeaderSecondary',
    data(){
        return {
            company
        }
    }
}
</script>

<style lang="scss">
#header-secondary {
    background: #fff;
    position: sticky;
    top: 0;
    left: 0;
    right: 0; 
    z-index: 2;
    box-shadow: 0 5px 5px 0px rgba(0,0,0,0.05);
    padding: 20px 0;

    .logo {
        display: flex;
        justify-content: center;

        a {
            display: inline-block;
        }

        img {
            vertical-align: middle;
            max-height: 30px;
        }
    }
}
</style>
