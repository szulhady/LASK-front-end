<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="side-bar"
    >
    <h2 class='brand-header'><v-icon class="mdi-rotate-180 brand-icon">mdi-needle</v-icon>LASK</h2>
    <hr class="logo-seperator">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div class='user-name' v-if="loggedInUser">
        <!-- <v-icon>mdi-account-circle</v-icon> -->
        <h4>{{loggedInUser.username}}</h4>
      </div>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon v-if="loggedInUser">mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-scroll-y-transition>
      <div class='layer' v-if="rightDrawer" id="layer"></div>
    </v-scroll-y-transition>
    <v-scroll-y-transition>
    <v-card class='logout elevation-12' v-if="rightDrawer" >
      <v-card-title>
        Logout
      </v-card-title>
      <hr class='hr'>
      <v-card-subtitle>
        Are you sure?
      </v-card-subtitle>
      <div class='btn-div'>
        <v-btn @click='logout' class='success logout-btn'>Yes</v-btn>
        <v-btn @click='cancel' class='error logout-btn'>Cancel</v-btn>
      </div>
    </v-card>
    </v-scroll-y-transition>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list >
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-logout
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';



export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Training',
          to: '/training'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Dashboard'
    }
  },
    computed: {
    ...mapGetters(['loggedInUser', 'isAuthenticated' ]),
  },
  methods: {
    logout : async function() {
      await this.$auth.logout();
      this.rightDrawer = false;
    },
    cancel : function() {
      this.rightDrawer = false;
    },
    track: function() {
      window.onclick = (event) => {
        const modal = document.getElementById('layer')
        if( event.target == modal){
          this.rightDrawer = false;
        }
      } 
    }
  },
  mounted() {
    this.track();
  }
}
</script>


<style >

/* background */
.v-application{
  background: rgb(220,217,221)!important;
}

/* side-bar */
.side-bar{
  background: rgb(241,242,245) !important;
   /* background: #271F40 !important; */
  /* background: #5e6b7e !important; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  max-height:100% !important;
  font-family: "Oxygen";
}

.brand-header{
  text-align: center;
  margin: 10px ;
  color:rgb(23,34,50)!important;
}

.brand-icon{
  padding-right:10px
}

.logo-seperator{
  margin: 10px 30px;
}

.v-list-item{
 margin: 10px 20px;
}

.v-list-item .v-list-item__title{
  color:rgb(85,116,132) !important;
  font-size: 0.9rem;
  margin: 12px;
  padding: 0!important;
}

 i.v-icon.v-icon {
  color:rgb(85,116,132);
  font-size: 1.5rem;
  /* padding-left: 20px ; */
} 

 .v-list-item--active .v-list-item__title {
    color: #fff !important;
}

.v-list-item--active{
  background:  rgb(85,116,132) !important;
  /* margin: 0 20px  ; */
  border-radius: 5px;
  opacity: 1;
}

.v-list-item--active .v-list-item__action{
  color:   #fff !important;
}

/* top-nav */
.user-name{
  display: flex;
}

/* logout */
.logout{
  position:absolute;
  top: 40%;
  left: 45%;
  z-index: 9999;
  width:300px
}

.hr{
    margin: 0 20px;
    border-top: 1px solid rgb(189, 199, 199);
}

.btn-div{
  display: flex;
  justify-content: flex-end;
}

.logout-btn{
  width: 100px;
  margin-right:10px;
  margin-bottom:10px;
}

/* layer */

.layer{
  position:absolute;
  width: 100%;
  height: 100%;
  background: black ;
  opacity: 0.6;
  z-index: 999;
}
</style>