import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modulos/stocks'
import portfolio from './modulos/portfolio'
import actions from './modulos/acoes'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {stocks, portfolio}
})