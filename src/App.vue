<template>
	<div id="app">
		<Header v-if="!$route.meta.hideSearch" />
		<HeaderSecondary v-if="$route.meta.hideSearch" />

		<router-view path="$router.key" />
		
		<Footer v-if="!$route.meta.hideFooter" />
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import HeaderSecondary from '@/components/HeaderSecondary.vue'
import Footer from '@/components/Footer.vue'
import company from '@/api/company.json'

export default {
	name: 'app',
	data(){
		return {
			company
		}
	},
	components: {
		Header,
		HeaderSecondary,
		Footer
	},
	mounted() {
		setTimeout(function(){
			let headerHeight = document.getElementsByTagName('header')[0].offsetHeight
			document.getElementsByTagName('body')[0].style['padding-top'] = `${headerHeight}px`
		}, 500)
	},
	computed: {
		pageTitle: function() {
			return this.$route.meta.title;
		}
	},
	watch: {
        $route: {
            immediate: true,
            handler(to) {
				if(to.meta.title){
					document.title = `${this.company.name} - ${to.meta.title}`
				} else {
					document.title = this.company.name
				}
            }
        },
    }
}
</script>

<style lang="scss">
	main {
		min-height: 400px;
	}
</style>
