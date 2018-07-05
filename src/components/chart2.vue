<template>
  <div id="single-blog">
    <div class="chart-inner"><h3>График 3</h3>
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <line-chart class="chart" :data="chartData2"></line-chart>
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
      chartData2:[]
    }
  },
    methods:{
        getInfo: function(){
            this.$http.get('https://coincap.io/history/1day/BTC').then(function(response){
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

<style>

</style>
