<template>
  <div>
    <v-card class="elevation-12 card-border card-color">
      <v-card-title class='color'> Training Sessions</v-card-title>
      <v-data-table
        :headers="headers"
        :items="status"
        :items-per-page="5"

      ></v-data-table>
      <!-- hide-default-footer -->
      <!-- <hr class='hr'> -->
      <!-- <v-row> -->
        <!-- <v-col class="flex-card"> -->
          <!-- <v-icon  class='mdi mdi-refresh' size="20" color="grey"></v-icon> -->
          <!-- <v-card-subtitle class='card-subtitle'>{{duration}}</v-card-subtitle> -->
        <!-- </v-col> -->
      <!-- </v-row> -->
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      headers: [
        {
          text: "Date",
          align: "start",
          sortable: false,
          value: "date",
        },
        { text: "Attempts", value: "attempts" },
        { text: "Accurate", value: "accurate" },
        { text: "Acceptable", value: "acceptable" },
        { text: "Pass", value: "pass" },
        { text: "Fail", value: "fail" },
        { text: "Success rate (%)", value: "success" },
      ],
    };
  },
    computed: {
    ...mapState({
      status:(state)=> state.status,
      // duration: (state) => state.duration,
    }),
  },
};
</script>

<style scoped>

.card-border{
  border-radius:8px;
}

.card-color{
background: rgb(245,243,246);
}

.v-data-table {
  background:  rgb(240,244,230);
} 

.hr{
  margin: 0 20px;
  border-top: 1px solid rgb(189, 199, 199);
}

.card-subtitle{
  padding-left:20px ;
}

.flex-card{
  display:flex;
  padding: 0 15px;
}

.v-card__subtitle {
  padding: 12px;
}


</style>