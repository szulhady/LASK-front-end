<template>
  <div>
    <v-card class="elevation-12 card-border card-color">
      <v-card-title class='color'> Success Rate Trends </v-card-title>
        <LineChart id="success" :data="trends.successRate" :xAxis="trends.date" class="pb-7"/>
    </v-card>
  </div>
</template>

<script>
import LineChart from '~/components/LineChart.vue'

import {mapState} from "vuex";
export default {

  computed: {
    ...mapState({
      trends:(state) => state.trends
    }),
  },

  components: {
    LineChart
  },

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