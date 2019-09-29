<template>
      <v-layout row wrap>
        <Stocks v-for="stock in stocks" :key="stock.id" :stock="stock"/>
    </v-layout>
</template>

<script>
import {mapGetters} from 'vuex'
import Stocks from './Stock'

export default {
    components: {Stocks},
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    }
}
</script>

<style>

</style>