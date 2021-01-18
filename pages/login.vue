<template>
  <section class="section">
    <div class="container2">
      <!-- <div class="columns">
        <div class="column is-4 is-offset-4"> -->
          <h2 class="title has-text-centered">Welcome back!</h2>

          <Notification :message="error" v-if="error" id='notification'/>

          <v-form method="post" @submit.prevent="login">

            <div class="field">
              <!-- <label class="label">Email</label> -->

              <div class="control">
                <v-text-field
                  type="email"
                  class="input"
                  label="Email"
                  v-model="email"
                >
                </v-text-field>
              </div>
            </div>

            <div class="field">
              <!-- <label class="label">Password</label> -->

              <div class="control">
                <v-text-field
                  type="password"
                  class="input"
                  label="Password"
                  v-model="password"
                ></v-text-field>
              </div>
            </div>

            <div class="control">
              <v-btn block type="submit" outlined>Log In</v-btn>
            </div>
            <h3 class="title has-text-centered register">No account? <router-link :to="{name: 'register'}">Please register</router-link></h3>
          </v-form>

          <!-- <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
            </p>
          </div> -->
        <!-- </div>
      </div> -->
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification';

export default {
  // middleware: 'guest',

  components: {
    Notification,
  },

  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then(response =>{
        this.$router.push('/');
        })
  
      } catch (e) {
        this.error = [{msg:"Email/password is incorrect"}];
      }
    },

    track: function() {
      window.onclick = (event) => {
        const modal = document.getElementById('notification')
        if( event.target != modal){
          this.error = null;
        }
      } 
    }
  },

    mounted() {
    this.track();
  }
};
</script>

<style scoped>
 .container2{
   margin: 50px auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   max-width: 300px;
   align-items: center;
 }

 .control{
  outline: 1px;
  width: 250px;
 }

.register{
  margin-top:10px;
  font-size: 15px!important;
}

 a{
   color: cadetblue;
   text-decoration: none;
 }
</style>