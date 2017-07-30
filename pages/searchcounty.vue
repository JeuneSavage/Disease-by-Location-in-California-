<template>
  <section class="container">
    <h3>Find a county with it's risks of diseases</h3>
    <input v-model="searchCounty" placeholder="Enter a county" v-on:keyup.enter="getCountyInfo(searchCounty)"/>
    <button v-on:click="getCountyInfo(searchCounty)">Search</button>
    <div v-if="areCounties">
      <p v-if="displayedCountyList.length > 1">Found {{displayedCountyList.length}} counties.</p>
      <p v-if="displayedCountyList.length === 1">Found {{displayedCountyList.length}} county.</p>
      <div v-for="(county, index) in displayedCountyList" :key="index">
        <county-panel :county="county"></county-panel>
      </div>
    </div>
    <div v-if="!areCounties">
      <p>{{statusMsg}}</p>
    </div>
    
  </section>
</template>

<script>
import CountyPanel from '~/components/county-panel'
import axios from '~/plugins/axios'

export default {
  data () {
    return {
      statusMsg: 'search for a county in California!',
      searchCounty: 'county',
      displayedCountyList: [
      ]
    }
  },
  computed: {
    areCounties: function () {
      return this.displayedCountyList.length !== 0
    }
  },

  methods: {
    async getCountyInfo (countyToSearch) {
      let { data } = await axios.get('/api/counties/name/' + countyToSearch)
      this.displayedCountyList = []
      if (data && data.length) {
        this.statusMsg = ''
        for (let datakey in data) {
          this.displayedCountyList.push(data[datakey])
        }
        console.log(data)
      } else {
        this.statusMsg = 'no counties found...'
      }
    }
  },
  components: {
    CountyPanel
  }
}
</script>

<style scoped>
</style>
