<template>
    <div class="col-sm-6 col-md-4">
        <div class="card border-success mb-3" style="max-width: 21rem;">
            <div class="card-header border-success">{{ stock.name }} <small class="text-success">(Price: {{ stock.price }} )</small></div>
            <div class="card-body text-success">
                <div class="float-left w-50">
                    <input 
                            type="number" 
                            :class="{danger: insufficientFunds, }"
                            class="form-control" 
                            v-model.number="quantity" 
                            placeholder="Quantity"                            
                            >
                </div>
                <div class="float-right">
                    <button 
                        class="btn btn-success"
                        @click="buyStock" 
                        :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)">
                        {{ insufficientFunds ? 'no Funds' : 'Buy'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger{
        border-color: red;
    }
</style>

<script>
export default {
    props: ['stock'],
    data(){
        return {
            quantity: 0
        }
    },
    computed: {
        funds(){
            return this.$store.getters.funds;
        },
        insufficientFunds(){
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
        buyStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };            
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    }
}
</script>
