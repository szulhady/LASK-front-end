<template>
  <section class="section">
    <div class="container2">
      <!-- <div class="columns">
        <div class="column is-4 is-offset-4"> -->
          <h2 class="title has-text-centered">Register</h2>

          <Notification :message="error" v-if="error" id='notification'/>

          <v-form method="post" @submit.prevent="register">
            <div class="field">
              <!-- <label class="label">Email</label> -->
              <div class="control">
                <v-text-field
                  type="text"
                  class="input"
                  label="Full Name"
                  v-model="fullName"
                >
                </v-text-field>
              </div>
            </div>
            <div class="field">
              <!-- <label class="label">Email</label> -->
              <div class="control">
                <v-text-field
                  type="text"
                  class="input"
                  label="Student Id"
                  v-model="studentID"
                >
                </v-text-field>
              </div>
            </div>
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
            <div class="field">
              <!-- <label class="label">Password</label> -->
              <div class="control">
                <v-text-field
                  type="password"
                  class="input"
                  label="Confirm Password"
                  v-model="password2"
                ></v-text-field>
              </div>
            </div>

            <div class="control">
              <v-btn block type="submit" outlined>Register</v-btn>
            </div>
            <h3 class="title has-text-centered register">Already got an account? <router-link :to="{name: 'login'}">Login</router-link></h3>
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

  components: {
  },

  data() {
    return {
      fullName:'',
      studentID:'',
      email: '',
      password: '',
      password2:'',
      // error: null,
      error:null
    };
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('/user/register', {
          fullName: this.fullName,
          studentID: this.studentID,
          email: this.email,
          password: this.password,
          password2: this.password2
        })
        .then(response =>{
          this.error = response.data
          if(response.data[0].msg=='Success. You can log in now'){
            this.fullName=''
            this.studentID=''
            this.email=''
            this.password=''
            this.password2=''
            console.log("here")
          }
          console.log(this.error)
          // })
        })
        // .then(response =>{
        //   // console.log('here')
        //     // console.log(response)
        //     this.$auth.loginWith('local', {
        //   data: {
        //     email: this.email,
        //     password: this.password,
        //   },
          
        //   // this.$router.push('/');
        // });
        // // console.log('here2')
        // // this.$router.push('/');
        // })

        // return this.$axios.get('/api/register', (req,res)=>{
        //   console.log(req)
        // })
   
        //     await this.$auth.loginWith('local', {
        //   data: {
        //     email: this.email,
        //     password: this.password,
        //   },
        // });

        // this.$router.push('/');
      } catch (e) {
        console.log('here')
        console.log(e)
        this.error = e.response.data.message;
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
   max-width: 350px;
   /* width: 350px; */
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