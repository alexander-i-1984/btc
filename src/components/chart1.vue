<template>
  <div id="single-blog">
    <div class="chart-inner"><h3>График 2</h3>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <line-chart class="chart" :data="chartData1"></line-chart>
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
      chartData1:[]
    }
  },
    methods:{
        getInfo: function(){
            this.$http.get('https://coincap.io/history/1day/BTC').then(function(response){
            this.chartData1 = response.data.volume
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
