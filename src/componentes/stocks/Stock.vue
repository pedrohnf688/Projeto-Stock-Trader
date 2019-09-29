<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{stock.name}} <small>(Preço: {{stock.preco | currency}})</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" 
                :error="insuficienteFunds || !Number.isInteger(quantidade)" 
                v-model.number="quantidade"/>
                <v-btn class="green darken-3 white--text" :disabled="quantidade <= 0 || 
                !Number.isInteger(quantidade) || insuficienteFunds" 
                @click="comprarAcoes">{{insuficienteFunds ? 'Saldo Insuficiente':'Comprar'}}</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: ['stock'],
    data(){
        return {
            quantidade: 0
        }
    },
    computed: {
        funds(){
            return this.$store.getters.funds
        },
        insuficienteFunds(){
            return this.quantidade * this.stock.preco > this.funds
        }
    },
    methods: {
        comprarAcoes(){
            const ordem = {
                stockId: this.stock.id,
                stockPreco: this.stock.preco,
                stockQuantidade: this.quantidade
            }
           this.$store.dispatch('comprarAcoes', ordem)

            this.quantidade = 0
        }
    }
    
}
</script>

<style>

</style>