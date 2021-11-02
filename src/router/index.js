import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Sobre from '../views/Sobre.vue'
import PoliticaDePrivacidade from '../views/PoliticaDePrivacidade.vue'
import PerguntasFrequentes from '../views/PerguntasFrequentes.vue'
import ProdutoDetalhes from '../views/ProdutoDetalhes.vue'
import PrazosDeEntrega from '../views/PrazosDeEntrega.vue'
import TrocasEDevolucoes from '../views/TrocasEDevolucoes.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			title: 'Entrar',
			hideSearch: true,
			hideFooter: true
		}
	},
	{
		path: '/cadastro',
		name: 'Cadastro',
		component: Cadastro,
		meta: {
			title: 'Cadastro',
			hideSearch: true,
			hideFooter: true
		}
	},
	{
		path: '/sobre-nos',
		name: 'Sobre',
		component: Sobre,
		meta: {
			title: 'Sobre Nós',
		}
	},
	{
		path: '/politica-de-privacidade',
		name: 'PoliticaDePrivacidade',
		component: PoliticaDePrivacidade,
		meta: {
			title: 'Política de Privacidade',
		}
	},
	{
		path: '/perguntas-frequentes',
		name: 'PerguntasFrequentes',
		component: PerguntasFrequentes,
		meta: {
			title: 'Perguntas Frequentes',
		}
	},
	{
		path: '/produto-detalhes',
		name: 'ProdutoDetalhes',
		component: ProdutoDetalhes
	},
	{
		path: '/prazos-de-entrega',
		name: 'PrazosDeEntrega',
		component: PrazosDeEntrega,
		meta: {
			title: 'Prazos de Entrega',
		}
	},
	{
		path: '/trocas-e-devolucoes',
		name: 'TrocasEDevolucoes',
		component: TrocasEDevolucoes,
		meta: {
			title: 'Trocas e Devoluções',
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior(){
		return { x: 0, y: 0 }
	}
})

export default router
