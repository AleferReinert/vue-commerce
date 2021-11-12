import Vue from 'vue'
import App from './App.vue'

import router from './router'

// Vue Carousel
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock, faMapMarkerAlt, faLongArrowAltLeft, faUser, faAngleDown, faAngleUp, faSignOutAlt, faSignInAlt, faShoppingCart, faBars, faHeart, faTimes, faUserPlus, faMinus, faPlus, faCheck} from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram, faWhatsapp, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faLock, faMapMarkerAlt, faCreditCard, faLongArrowAltLeft, faUser, faAngleDown, faAngleUp, faSignOutAlt, faSignInAlt, faShoppingCart, faBars, faHeart, faTimes, faFacebook, faInstagram, faWhatsapp, faPinterest, faTwitter, faUserPlus, faMinus, faPlus, faCheck)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Detecta se ta usando dispositivo mobile
import VueMobileDetection from 'vue-mobile-detection'
Vue.use(VueMobileDetection)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')