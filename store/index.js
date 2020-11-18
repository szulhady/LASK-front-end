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
    data:5
  }
    ,
    {
    description: "Attempts",
    icon: "mdi mdi-needle icon icon-user2",
    number: "4",
    cols: 4,
    class: "primary",
    data:40
    },
    {
    description: "Accuracy",
    icon: "mdi mdi-percent icon icon-user3",
    number: 0,
    cols: 4,
    class: "primary",
    data:'85%'
    }
  ]
});

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
}
