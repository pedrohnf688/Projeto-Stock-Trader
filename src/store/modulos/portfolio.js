export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        comprarAcoes(state, {stockId, stockPreco, stockQuantidade}){
            const record = state.stocks.find(elemento =>elemento.id == stockId)

            if(record){
                record.stockQuantidade += stockQuantidade
            }else{
                state.stocks.push({
                    id: stockId,
                    stockQuantidade: stockQuantidade
                })
            }
            state.funds -= stockPreco * stockQuantidade
        },
        venderAcoes(state, {stockId, stockPreco, stockQuantidade}){
            const record = state.stocks.find(elemento => elemento.id == stockId)

            if(record.stockQuantidade > stockQuantidade){
                record.stockQuantidade -= stockQuantidade
            }else{
                 state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPreco * stockQuantidade
        },
        setPortfolio(state, portfolio){
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio: []

        }
    },
    actions: {
        venderAcoes({commit}, ordem){
            commit('venderAcoes', ordem)
        }
    },
    getters: {
        stockPortfolio(state, getters){
            return state.stocks.map(stock => {
                const record = getters.stocks.find(elemento => elemento.id == stock.id)
                return {
                    id: stock.id,
                    quantidade: stock.stockQuantidade,
                    name: record.name,
                    preco: record.preco 
                }
            })
        },
        funds(state){
            return state.funds
        }
    }
}