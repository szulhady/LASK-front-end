<template>
  <div>
    <v-card class='flex-direction card-border card-color elevation-12'>
      <v-col cols=7>
        <v-card-title>
          Training Session
        </v-card-title>
        <v-card-subtitle>
          Start Time: {{time}}
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
    </v-card>
  </div>
</template>

<script>


export default {

    props: [
    "time"
    ]
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