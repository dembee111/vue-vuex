<template>
    <div class="col-sm-6 col-md-4">
        <div class="card border-success mb-3" style="max-width: 20rem;">
            <div class="card-header border-success">{{ stock.name }} <small class="text-success">(Price: {{ stock.price }} | Quantity: {{ stock.quantity }} )</small></div>
            <div class="card-body text-success">
                <div class="float-left w-50">
                    <input 
                            type="number" 
                            class="form-control " 
                            v-model.number="quantity" 
                            placeholder="Quantity" 
                            :class="{danger: insufficientQuantity}">
                </div>
                <div class="float-right">
                    <button 
                        class="btn btn-success"
                        @click="sellStock" 
                        :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                        >{{ insufficientQuantity ? 'Not enough': 'Sell'}}</button>
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

import {mapActions} from 'vuex';
export default {
    props: ['stock'],
    data(){
        return {
            quantity: 0
        }
    },    
    computed: {
        insufficientQuantity(){
            return this.quantity > this.stock.quantity;
        }
    },
    methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
}
</script>