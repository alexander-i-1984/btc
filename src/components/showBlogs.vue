<template>
    <div class="main-chart">
        <h1>Все графики криптовалют</h1>
        <router-link to="chart0">
            <div class="chart-inner">
                    <line-chart class="chart" :data="chartData0"></line-chart>
            </div>
        </router-link> 
        <router-link to="chart1">
            <div class="chart-inner">
                    <line-chart class="chart" :data="chartData1"></line-chart>
            </div>
        </router-link> 
         <router-link to="chart2">
            <div class="chart-inner">
                    <line-chart class="chart" :data="chartData2"></line-chart>
            </div>
        </router-link> 
  </div>
</template>

<script>

export default {

    data() {
        return {
            loaded: false,
            showError: false,
            chartData0:[],
            chartData1:[],
            chartData2:[]
        }
    },
    methods:{
        getInfo: function(){
            this.$http.get('https://coincap.io/history/1day/BTC').then(function(response){
            this.chartData0 = response.data.market_cap
            this.chartData1 = response.data.volume
            this.chartData2 = response.data.price
            this.loaded = true
            }, function(error){
            console.log(error.statusText);
            });
            }
    },
        mounted: function () {
             this.getInfo();
    }
}
</script>

<style scoped>
    .main-chart {
        max-width: 680px;
        margin: 30px auto;
    }
    .chart-inner {
        margin: 30px 0;
        padding: 15px;
        background-color: #ccc;
        cursor: pointer;
    }
</style>
