import Vue from 'vue'
import './plugins/vuetify'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.filter('currency', valor => {
	return "R$ " + valor.toLocaleString()
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
