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
        <v-card class="model elevation-12">
          <Model :value="value" :colorData="colorData"/>
        </v-card>
      </v-col>
    </v-row>
  <!-- </v-row> -->
 
</template>

<script>


import Model from '~/components/training/Model'
let colormap = require( 'colormap' )

let colors;

export default {
data(){
  return{
    value:0,
    colors:0,
    colorData:0
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
  }
},
components:{
  Model
},
mounted(){
  setInterval( this.data2, 50)
  this.color();
},

watch: {
  value: function(val) {
    // console.log(val)
    // console.log(this.colors)
    this.colorData = this.colors[val]
    console.log(this.colorData)
  }
}

}
</script>


<style scoped>

.model{
  border-radius: 10px;
}
</style>
