import Vuex from 'vuex'
import Counties from '~/county-data'

const store = () =>
  new Vuex.Store({
    state: {
      currentCounty: {
        name: 'default store county.',
        risks: [
          { name: 'cancer', probability: 0.999 }
        ]
      }
    },
    mutations: {
      replace (state, newCountyName) {
        let nextCounty = Counties.filter(function (county) {
          return (county.name === newCountyName)
        })
        // console.log(nextCounty)
        if (nextCounty && nextCounty.length === 1) {
          state.currentCounty = nextCounty[0]
        } else {
          state.currentCounty = {
            name: newCountyName,
            risks: []
          }
        }
      }
    }
  })

export default store
