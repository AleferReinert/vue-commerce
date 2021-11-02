// Formata para o real brasileiro
import salesRules from '@/api/salesRules.json'

export default {
    name: 'formatedMoney',
    data(){
        return {
            salesRules
        }
    },
    methods: {
        formatedMoney(price){
            Math.round(price).toString()
            price = price.replace(/\D/g, '');
            price = price.replace(/(\d{1,2})$/, ',$1');
            price = price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            price = price != '' ? 'R$ ' + price : '';

            return price
        },
        discountPercentage(price){
            return Math.round((price / 100) * (100  - this.salesRules.discountPercentage)).toString()
        }
    }
}