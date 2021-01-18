<template>
  <div>
    <v-card class="elevation-12 card-border card-color">
      <v-card-title class='color'> Total Attempt </v-card-title>
        <BarChart id="trial" :accurate="trial.accurate" :acceptable="trial.acceptable" :fail="trial.fail" class="pb-7"/>
    </v-card>
  </div>
</template>

<script>
import BarChart from '~/components/BarChart.vue'

import {mapState} from "vuex";
export default {

  computed: {
    ...mapState({
      trial:(state) => state.trial
    }),
  },

  components: {
    BarChart
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