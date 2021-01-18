export const state = () => ({
  logoImg:"ppug-logo.png",
  logoDesc:'PPUG',
  cards:[
    {
    description: "Sessions",
    icon: "mdi mdi-account icon icon-user",
    number: "4",
    cols: 4,
    class: "primary",
    data:0
  }
    ,
    {
    description: "Attempts",
    icon: "mdi mdi-needle icon icon-user2",
    number: "4",
    cols: 4,
    class: "primary",
    data:0
    },
    {
    description: "Success Rate",
    icon: "mdi mdi-percent icon icon-user3",
    number: 0,
    cols: 4,
    class: "primary",
    data:'0%'
    }
  ],
  auth:{
    loggedIn:false,
    user:""
  },
  user:{
    sessions:0,
    attempts:0,
    accuracy:0
  },
  status: [
  ],
  trends:{
    date:[],
    successRate:[]
  },
  trial:{
    accurate:0,
    acceptable:0,
    fail:0
  }
});

export const mutations = {

  getDataCardSummary(state, payload) {
    state.user.sessions=payload.sessions
    state.user.accuracy=payload.accuracy
    state.user.attempts=payload.attempts



    state.cards[0].data=payload.sessions
    state.cards[1].data=payload.attempts
    state.cards[2].data=payload.accuracy+'%'
   
  },

  getDataAll(state, payload) {
    state.status=payload
  },

  getDataTrends(state, payload) {
    state.trends=payload
  },

  getDataTrial(state, paylaod) {
    // console.log(paylaod)
    state.trial=paylaod
  },

  resetState(state){
    state.user={
      sessions:0,
      attempts:0,
      accuracy:0
    },
    state.status= [
    ],
    state.trends={
      date:[],
      successRate:[]
    },
    state.trial={
      accurate:0,
      acceptable:0,
      fail:0
    }
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}
