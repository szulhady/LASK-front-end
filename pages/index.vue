<template>
    <div >
    <!-- <h2 class='header'>DASHBOARD</h2> -->
    <CardSummary :cards="cards" class="pb-7 mt-4"/>
    <!-- <CardData  class="pb-3"/> -->
    <!-- <v-row>
      <v-col cols=7>
    <Table class="pb-7"/>
      </v-col>
            <v-col cols=5>
    <TimelineSummary class="pb-7"/>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
import CardSummary from '~/components/CardSummary.vue'

import {mapState} from "vuex";

export default {
  middleware: 'auth',
    computed: {
    ...mapState({
      cards:(state) => state.cards
    }),
  },
  components: {
    CardSummary
  }
}
</script>
