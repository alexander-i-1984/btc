<template>
  <div id="single-blog">
    <div class="chart-inner"><h3>График 1</h3>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
      It has roots in a piece of classical Latin literature from 45 BC,
       making it over 2000 years old. Richard McClintock, 
       a Latin professor at Hampden-Sydney College in Virginia, 
       looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of 
        the word in classical literature, discovered the undoubtable source. 
        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de 
        Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
        written in 45 BC. This book is a treatise on the theory of ethics, 
        very popular during the Renaissance. The first line of Lorem Ipsum, 
        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <line-chart class="chart" :data="chartData0"></line-chart>
    </div>
    <router-link to="/"><h4>Назад</h4></router-link>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loaded: false,
      showError: false,
      chartData0:[]
    }
  },
    methods:{
        getInfo: function(){
            this.$http.get('https://coincap.io/history/1day/BTC').then(function(response){
            this.chartData0 = response.data.market_cap
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

<style>

</style>
