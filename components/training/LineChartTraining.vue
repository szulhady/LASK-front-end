<template >
  <div class="container-chart">
    <div
      class="chart"
      :id="id"
      style="width: 100%;height:260px"
      :data="data"
      :xAxis="xAxis"
    ></div>
  </div>
</template>
<script>
// import { mapState, mapMutations } from "vuex";
export default {

  data() {
    return {
      // sensorUnit:["mg/l",'°C',"unit","ppt","mg/l"],
    };
  },

  mounted() {
     var option2= {
       grid: {
        left: 70,
        // top: 0,
        // right: 0,
        // bottom: 0
      },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: { show: true, title: "Save" },
        //   },
        // },
        legend: {
          data: ["Pressure"],
          textStyle: {
            fontSize: 12,
          },
        },
        xAxis: {
          name: "Time",
          offset: 20,
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 12,
          },
          axisLabel: {
            fontSize: 12,
            verticalAlign: "bottom",
          },
          type: "category",
          data: this.xAxis,
        },
        yAxis: {
          nameTextStyle: {
            fontSize: 12,
          },
          name: "Pressure",
          type: "value",
          min: 0,
          max: 100,
          axisLabel: {
            // formatter: "{value} cm",
            fontSize: 12,
          },
        },

        series: [
          {
            //min data set
            name: "Pressure",
            data: this.data,
            type: "line",
            fontSize: 30,
            color: "#36c25b",
            areaStyle: {color:'rgba(135, 211, 124, 1)'},  
            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
          },
        ],
      }
     var myChart = this.$echarts.init(document.getElementById(this.id));

    myChart.setOption(option2, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },

  updated() {

    var option= {
      grid: {
       left: 70,
        // top: 0,
        // right: 0,
        // bottom: 0
      },  
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: { show: true, title: "Save" },
        //   },
        // },
        legend: {
          data: ["Pressure"],
          textStyle: {
            fontSize: 12,
          },
        },
        xAxis: {
          name: "Time",
          offset: 20,
          nameLocation: "center",
          nameTextStyle: {
            fontSize: 12,
          },
          axisLabel: {
            fontSize: 12,
            verticalAlign: "bottom",
          },
          type: "category",
          data: this.xAxis,
        },
        yAxis: {
          nameTextStyle: {
            fontSize: 12,
          },
          name: "Pressure",
          type: "value",
          min: 0,
          max: 100,
          axisLabel: {
            // formatter: "{value} cm",
            fontSize: 12,
          },
        },

        series: [
          {
            //min data set
            name: "Pressure",
            data: this.data,
            type: "line",
            fontSize: 30,
            color: "#36c25b",
            areaStyle: {color:'rgba(135, 211, 124, 1)'},            

            label: {
              color: "black",
              fontSize: 15,
              formatter: function (d) {
                return d.name + d.data;
              },
            },
          },
        ],
      }
    var myChart = this.$echarts.init(document.getElementById(this.id));

    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },

    props: [
    "id",
    "data",
    "xAxis",
  ],

  
};
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

