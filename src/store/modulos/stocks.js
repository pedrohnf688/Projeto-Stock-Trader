import stocks from '@/data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks){
            state.stocks = stocks
        },
        randomStock(state){
            state.stocks.forEach(stock => {
                stock.preco = Math.round(stock.preco * (1 + Math.random() -0.45))
            });
        }
    },
    actions: {
        comprarAcoes({commit}, ordem){
            commit('comprarAcoes', ordem)
        },
        initStocks({commit}){
            commit('setStocks', stocks)
        },
        randomStock({commit}){
            commit('randomStock')
        }
    },
    getters: {
        stocks(state){
            return state.stocks
        }
    }
}