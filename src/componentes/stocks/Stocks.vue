<template>
    <v-layout row wrap>
        <Stocks v-for="stock in stocks" :key="stock.id" :stock="stock"/>
    </v-layout>
</template>

<script>
import Stocks from './Stock'

export default {
    components: {Stocks},
    computed: {
        stocks(){
            return this.$store.getters.stocks
        } 
    }

}
</script>

<style>

</style>