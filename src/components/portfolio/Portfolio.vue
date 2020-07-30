<template>   
        <div class="row mt-5">  
            <app-sell-stock v-for="stock in stocks" :stock="stock" v-bind:key="stock.id"></app-sell-stock>
        </div>    
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock.vue';

export default {
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'            
        })        
    },
    components: {
        appSellStock: Stock
    }
}
</script>