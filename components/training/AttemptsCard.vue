<template>
  <div>
    <v-card class="elevation-12 card-border card-color">
      <v-card-title class='color'> Attemps </v-card-title>
        <BarChartTraining :id="id" :accurate="accurate" :acceptable="acceptable" :fail="fail" class="pb-7"/>
    </v-card>
  </div>
</template>

<script>
import BarChartTraining from '~/components/training/BarChartTraining.vue'


export default {

  components: {
    BarChartTraining
  },
    props: [
    "id",
    "accurate",
    "acceptable",
    "fail"
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