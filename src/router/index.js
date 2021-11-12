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
import Carrinho from '../views/Carrinho.vue'
import ListaDeDesejos from '../views/ListaDeDesejos.vue'
import MeusDados from '../views/MeusDados.vue'
import MinhasCompras from '../views/MinhasCompras.vue'
import Seguranca from '../views/Seguranca.vue'
import MeusEnderecos from '../views/MeusEnderecos.vue'
import MeusCartoes from '../views/MeusCartoes.vue'

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
	},
	{
		path: '/carrinho',
		name: 'Carrinho',
		component: Carrinho,
		meta: {
			title: 'Carrinho',
		}
	},
	{
		path: '/lista-de-desejos',
		name: 'ListaDeDesejos',
		component: ListaDeDesejos,
		meta: {
			title: 'Lista de Desejos',
		}
	},
	{
		path: '/minha-conta',
		redirect: '/minha-conta/meus-dados',
	},
	{
		path: '/minha-conta/meus-dados',
		name: 'MeusDados',
		component: MeusDados,
		meta: {
			title: 'Minha Conta - Meus Dados',
		}
	},
	{
		path: '/minha-conta/minhas-compras',
		name: 'MinhasCompras',
		component: MinhasCompras,
		meta: {
			title: 'Minha Conta - Minhas Compras',
		}
	},
	{
		path: '/minha-conta/seguranca',
		name: 'Seguranca',
		component: Seguranca,
		meta: {
			title: 'Minha Conta - Segurança',
		}
	},
	{
		path: '/minha-conta/meus-enderecos',
		name: 'MeusEnderecos',
		component: MeusEnderecos,
		meta: {
			title: 'Minha Conta - Meus Endereços',
		}
	},
	{
		path: '/minha-conta/meus-cartoes',
		name: 'MeusCartoes',
		component: MeusCartoes,
		meta: {
			title: 'Minha Conta - Meus Cartões',
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	//base: process.env.BASE_URL,
	base: '/',
	routes,
	scrollBehavior(){
		return { x: 0, y: 0 }
	}
})

export default router