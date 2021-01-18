<template>
  <div class="container-chart">
    <div
      class="chart"
      :id="id"
      style="width: 100%;height:280px"
      :accurate="accurate"
      :acceptable="acceptable"
      :fail="fail"
    ></div>
  </div>
</template>

<script>
export default {

  mounted(){
    const option = {
             grid: {
              left: 100,
              top: 20,
              right: 80,
              bottom: 40
            },
            xAxis: {name: 'Trial'},
            yAxis: [{type: 'category',
                    data: ["Fail", "Acceptable", "Accurate"]}],
            series: [
                  {
                    type: 'bar',
                    encode: {
                      // Map the "amount" column to X axis.
                      x: 'Trial',
                      // Map the "product" column to Y axis
                      y: 'product'
                    },
                    data: [
                      {
                        value: this.fail,
                        itemStyle: {color:'#c73a3a',
                                    // borderColor:"red",
                                    // borderWidth:2,
                                    // shadowBlur:5,
                                     opacity: 0.8}
                      },
                      {   
                        value:this.acceptable,
                        itemStyle: {color:'#3a41c7',
                                    // shadowBlur:5,
                                     opacity: 0.8},
                      },
                      {
                        value: this.accurate,
                        itemStyle: { color: "#30ab61",
                                      // shadowBlur:5,
                                       opacity: 0.8},
                      }
                    ],
                  }
                ]

              };
            var myChart = this.$echarts.init(document.getElementById(this.id));
            myChart.setOption(option, true);
            window.addEventListener("resize", function () {
            myChart.resize();
            });    
    },

    updated(){
          const option = {
            grid: {
              left: 100,
              top: 20,
              right: 80,
              bottom: 40
            },
            xAxis: {name: 'Trial'},
            yAxis: [{type: 'category',
                    data: ["Fail", "Acceptable", "Accurate"]}],
            series: [
                  {
                    type: 'bar',
                    encode: {
                      // Map the "amount" column to X axis.
                      x: 'amount',
                      // Map the "product" column to Y axis
                      y: 'product'
                    },
                    data: [
                      {
                        value: this.fail,
                        itemStyle: {color:'#c73a3a',
                                    // borderColor:"red",
                                    // borderWidth:2,
                                    // shadowBlur:5,
                                     opacity: 0.8}
                      },
                      {   
                        value:this.acceptable,
                        itemStyle: {color:'#3a41c7',
                                    // shadowBlur:5,
                                     opacity: 0.8},
                      },
                      {
                        value: this.accurate,
                        itemStyle: { color: "#30ab61",
                                      // shadowBlur:5,
                                       opacity: 0.8},
                      }
                    ],
                  }
                ]

              };
            var myChart = this.$echarts.init(document.getElementById(this.id));
            myChart.setOption(option, true);
            window.addEventListener("resize", function () {
            myChart.resize();
            });  
    },
    props: [
      "id",
      "accurate",
      "acceptable",
      "fail",
    ],

}
</script>

<style scoped>
.container-chart {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.chart {
  padding: 0 auto;
}
</style>

