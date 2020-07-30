<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success"> 
        <div class="container">
            <router-link class="navbar-brand" to="/">Stock Trader</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <router-link to="/portfolio" class="nav-item active" activeClass="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
                <router-link to="/stocks" class="nav-item active" activeClass="active" tag="li"><a class="nav-link">Stocks</a></router-link>         
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">                        
                        <a class="nav-link" href="#">Funds: {{ funds | currency }}</a>
                    </li>
                    <li class="nav-item active">                        
                        <a class="nav-link" href="#" @click="endDay">End Day</a>
                    </li>
                    <li 
                        class="nav-item dropdown active" 
                        :class="{show: isDropdownOpen}"
                        @click="isDropdownOpen = !isDropdownOpen">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save & Load
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
                        <a class="dropdown-item" href="#" @click="saveData">Save Data</a>                        
                        </div>
                    </li>
                </ul>                    
            </div>
        </div>
    </nav>

    
</template>

<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return {
            isDropdownOpen: false
        }
    },
    computed: {
        funds(){
            return this.$store.getters.funds;
        }
    },
    methods: {
        ...mapActions({
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData'
        }),
        endDay(){
            this.randomizeStocks();
        },
        saveData(){
            const data = {
                funds: this.$store.getters.funds,
                stockPortfolio: this.$store.getters.stockPortfolio,
                stocks: this.$store.getters.stocks
            };
            this.$http.put('data.json', data);
        },
        loadData(){
            this.fetchData();
        }
    }
}
</script>>