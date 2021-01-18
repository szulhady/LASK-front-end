<template>
  <!-- <v-row> -->
    <!-- <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col> -->
    <v-row>
      <v-col cols=7>
        <v-row>
          <v-col id="model2">
            <v-card class="model elevation-12">
              <Model :value="value" :colorData="colorData"/>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <!-- <v-card class='flex-direction card-border card-color'>
              <v-col cols=7>
                <v-card-title>
                  Training Session
                </v-card-title>
                <v-card-subtitle>
                  Start Time: {{realTime}}
                </v-card-subtitle>
              </v-col>
              <v-col cols=5 class='btn-flex'>
                <v-btn class='success btn-size'>
                  Submit
                </v-btn>
                <v-btn class='error btn-size'>
                  Reset
                </v-btn>
              </v-col>
            </v-card> -->
            <SubmitCard :time="realTime"/>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols=5>
        <v-row>
          <v-col>
            <PressureCard id="pressure" :data="pressureArray" :xAxis="timeArray"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <AttemptsCard id="attemps" accurate="10" acceptable="4" fail="4"/>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  <!-- </v-row> -->
 
</template>

<script>


import Model from '~/components/training/Model'
let colormap = require( 'colormap' )

import PressureCard from '~/components/training/PressureCard'
import AttemptsCard from '~/components/training/AttemptsCard'
import SubmitCard from '~/components/training/SubmitCard'

let colors;

export default {
data(){
  return{
    value:0,
    colors:0,
    colorData:0,
    realTime:"",
    timeArray:[],
    pressureData:"",
    pressureArray:[],
  }
},
middleware: 'auth',
methods:{
  data1:function() {
    this.value=Math.floor(Math.random()*10);
    // console.log( this.value )
  },
  data2: function() {
    if(this.value<72){
    this.value = this.value + 1;
    }else{
      this.value = 0;
    }

  },
  color: function() {
    this.colors = colormap({
    colormap: 'jet',
    nshades: 72,
    format: 'hex',
    alpha: 1
    })
    // console.log(colors)
  },

  adddata: function () {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    this.realTime = h + ":" + m + ":" + s;
    // this.getCurrentTimeArray(this.realTime)
  },

},
components:{
  Model,
  PressureCard,
  AttemptsCard,
  SubmitCard
},
mounted(){
  setInterval( this.data2, 50)
  setInterval( this.adddata, 1000)
  this.color();
   setInterval( this.resizeCanvasToDisplaySize, 10)

},

watch: {
  value: function(val) {
    // console.log(val)
    // console.log(this.colors)
    this.colorData = this.colors[val]
    // console.log(this.colorData)
  },
  realTime: function(val) {
    this.pressureData = (Math.random()*30).toFixed(2)
    if(this.timeArray.length>=10){
      this.pressureArray.splice(0,1);
      this.pressureArray.push(this.pressureData)
      this.timeArray.splice(0,1);
      this.timeArray.push(this.realTime);
    }else{
      this.pressureArray.push(this.pressureData)
      this.timeArray.push(this.realTime)
    }
    // console.log(this.timeArray)
  },
}

}
</script>


<style >

.model{
  border-radius: 10px;
  width:100%;
  position:relative;
}

.flex-direction{
  display: flex;
  /* justify-content: center; */
  align-items: center;

}

.btn-flex{
  display: flex;
  justify-content: space-around;
}

.btn-size{
  width: 40%;
}

.card-border{
  border-radius:8px;
}

.card-color{
background: rgb(245,243,246);
}

</style>
