import Vue from 'vue'

export default {
    loadDados({commit}) {
        Vue.prototype.$http('data.json').then(res => {
            const data = res.data
            if(data){
                commit('setStocks',data.stocks)
                commit('setPortfolio',{
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                })
            }
        })
    }
}