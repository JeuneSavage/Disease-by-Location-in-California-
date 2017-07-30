import Vuex from 'vuex'

const store = () =>
  new Vuex.Store({
    state: {
      currentCountyName: 'default store county.'
    },
    mutations: {
      replace (state, newCountyName) {
        state.currentCountyName = newCountyName
      }
    }
  })

export default store
