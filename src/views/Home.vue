<template>
	<main id="page-home">
		<carousel 
			class="banner-main" 
			:autoplay="true" 
			:autoplayTimeout="5000" 
			:perPage="1" 
			:loop="true"
			:centerMode="true"
			easing="linear"
			paginationPosition="bottom-overlay"
			paginationActiveColor="inherit"
			:paginationSize="12"
			:paginationPadding="10"
		>
			<slide>
				<a href="#">
					<img srcset="../assets/img/banners/banner-1-mobile.jpg 575w,
						../assets/img/banners/banner-1-desktop.jpg 2000w"
					sizes="	(max-width: 575px) 100%,
						(min-width: 576px) 100%"
					alt="Confira nossas ofertas - Produtos com até 80% de desconto">
				</a>
			</slide>
			<slide>
				<a href="#">
					<img srcset="../assets/img/banners/banner-2-mobile.jpg 575w,
						../assets/img/banners/banner-2-desktop.jpg 2000w"
					sizes="	(max-width: 575px) 100%,
						(min-width: 576px) 100%"
					alt="Linha infantil">
				</a>
			</slide>
			<slide>
				<a href="#">
					<img srcset="../assets/img/banners/banner-3-mobile.jpg 575w,
						../assets/img/banners/banner-3-desktop.jpg 2000w"
					sizes="	(max-width: 575px) 100%,
						(min-width: 576px) 100%"
					alt="Lançamentos 2021">
				</a>
			</slide>
		</carousel>

		<section class="products">
			<div class="container">
				<ul class="list-products">
					<li v-for="(n, index) in 16" :key="index">
						<Products />
					</li>
				</ul>
			</div>
		</section>
		<Newsletter />
	</main>
</template>

<script>
import Products from '@/components/Products.vue'
import Newsletter from '@/components/Newsletter.vue'

export default {
	name: 'Home',
	components: {
		Products,
		Newsletter
	}
}
</script>

<style lang="scss">
#page-home {
    
    .banner-main {
        margin-bottom: $row-gap;

		.VueCarousel-dot--active {
			background-color: $color-primary !important;
		}

		.VueCarousel-dot:focus {
			outline: none;
		}
    }

	.list-products {
		display: grid;
		grid-template-columns: 1fr;
		grid-column-gap: $column-gap;
		grid-row-gap: $column-gap * 3;
		margin-bottom: $row-gap;
	}

	@media all and (min-width: $breakpoint-small) {

		.list-products {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media all and (min-width: $breakpoint-medium) {

		.list-products {
			grid-template-columns: repeat(3, 1fr);   
		}
	}

	@media all and (min-width: $breakpoint-large) {

		.list-products {
			grid-template-columns: repeat(4, 1fr);   
		}
	}
}
</style>
