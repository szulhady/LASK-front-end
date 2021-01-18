<template>
  <div>
    <v-card class="elevation-12 card-border card-color">
      <v-card-title class='color'> Pressure Applied </v-card-title>
        <LineChartTraining :id="id" :data="data" :xAxis="xAxis" class="pb-7"/>
    </v-card>
  </div>
</template>

<script>
import LineChartTraining from '~/components/training/LineChartTraining.vue'


export default {

  components: {
    LineChartTraining
  },
    props: [
    "id",
    "data",
    "xAxis",
  ],
}
</script>

<style scoped>
.card-border{
  border-radius:8px;
}

.card-color{
background: rgb(245,243,246);
}

</style>