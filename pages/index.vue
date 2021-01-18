<template>
    <div >
    <!-- <h2 class='header'>DASHBOARD</h2> -->
    <CardSummary class="pb-2 mt-4"/>
    <!-- <CardData  class="pb-3"/> -->
    <v-row>
      <v-col cols=6>
        <BarChartCard/>
      </v-col>
      <v-col cols=6>
        <TrendsCard/>
      </v-col>
      <v-col cols=12>
        <Table class="pb-2"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardSummary from '~/components/CardSummary.vue'
import Table from '~/components/Table.vue'
import TrendsCard from '~/components/TrendsCard.vue'
import BarChartCard from '~/components/BarChartCard.vue'


import {mapState, mapMutations} from "vuex";

export default {
  middleware: 'auth',
  methods: {

    getUserDataSummary: function (id) {
      this.$axios
      // .$get(`https://ppug2-seaic.herokuapp.com/api/daily/`,{params:{
      .$get(`/user/summary`,{params:{
      id:id,
      }})
      .then((response) => {
        // console.log(response)
        let data={};
        let trial={};
        let accurate=0;
        let acceptable=0;
        let fail=0;
        let attempts=0;
        let pass=0;
        let accuracy=0;
        let sessions=0;
        // let avg=[];
        // let hour=[];
        // response.forEach((item) => {
          if(response[0].accurate){
            accurate =  response[0].accurate
            acceptable =  response[0].acceptable
            fail = response[0].fail
            attempts = response[0].attempts
            pass = response[0].pass
            accuracy = (pass/attempts*100).toFixed(2)
            sessions = response[0].sessions
            trial={accurate,acceptable,fail}
          }
    

          
          // accurate.push(item.accurate)
          
          // max.push(item.max);
          // avg.push(item.avg);
          // min.push(item.min);
          // hour.push(item.hour);
        // });
        
        // console.log(response)
        data={accurate,acceptable,fail,attempts,pass,accuracy,sessions}
        this.getDataCardSummary(data)
        this.getDataTrial(trial)
        // console.log(data)
        // this.getDaily(data)
        })
        .catch((error) => {
          console.log(error);
        });
    },


    getUserDataAll: function (id) {
      this.$axios
      // .$get(`https://ppug2-seaic.herokuapp.com/api/daily/`,{params:{
      .$get(`/user/all`,{params:{
      id:id,
      }})
      .then((response) => {
        let successRate=[];
        let date=[];
        let data;
        let accuracy=0
        response.forEach((item) => {
          accuracy = (item.pass/item.attempts*100).toFixed(2)
          successRate.push(accuracy)
          date.push(item.date);
        });
        data={successRate,date}
        // console.log(data)
        this.getDataAll(response)
        this.getDataTrends(data)
        })
        .catch((error) => {
          console.log(error);
        });
    },

    ...mapMutations({
      getDataCardSummary:"getDataCardSummary",
      getDataAll:"getDataAll",
      getDataTrends:'getDataTrends',
      getDataTrial:'getDataTrial'
    }),

  },
    computed: {
    ...mapState({
      cards:(state) => state.cards,
      users:(state) => state.auth,
      trends:(state) => state.trends
    }),
    // ...mapGetters(['loggedInUser']),

  },
  components: {
    CardSummary,
    Table,
    TrendsCard,
    BarChartCard
  },
  mounted(){
    // console.log(this.users)
  },
  async mounted(){
    // console.log(this.users.user.userId)
    this.getUserDataSummary(this.users.user.userId)
    this.getUserDataAll(this.users.user.userId)
  }
}
</script>
