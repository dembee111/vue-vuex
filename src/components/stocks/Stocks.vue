<template>
    <div class="row no-gutters mt-5">
        <app-stock v-for="stock in stocks" v-bind:key="stock.id" :stock="stock"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';

export default {    
    components: {
        appStock: Stock
    },
    computed: {
        stocks(){
            return this.$store.getters.stocks;
        }
    }
}
</script>>