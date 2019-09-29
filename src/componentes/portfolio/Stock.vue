<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{stock.name}} <small>(Preço: {{stock.preco | currency}} Qtd {{stock.quantidade}})</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" 
                :error="quantidadeInsuficiente || !Number.isInteger(quantidade)" 
                v-model.number="quantidade"/>
                <v-btn class="blue darken-3 white--text" 
                :disabled="quantidadeInsuficiente || quantidade <= 0 || !Number.isInteger(quantidade)" 
                @click="venderAcoes">{{quantidadeInsuficiente ? 'Insuficiente':'Vender'}}</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props: ['stock'],
    data(){
        return {
            quantidade: 0
        }
    },
    computed: {
        quantidadeInsuficiente(){
            return this.quantidade > this.stock.quantidade
        }
    },
    methods: {
        ...mapActions({ venderAcoesActions:'venderAcoes'}),
        venderAcoes(){
            const ordem = {
                stockId: this.stock.id,
                stockPreco: this.stock.preco,
                stockQuantidade: this.quantidade
            }
            this.venderAcoesActions(ordem)
           //this.$store.dispatch('venderAcoes', ordem)
            this.quantidade = 0
        }
    }
    
}
</script>

<style>

</style>