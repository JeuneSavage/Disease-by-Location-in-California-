<template>
  <section class="container">
    <div id="topbar">
      <h1 id="maintitle">Model Disease Heatmap</h1>
    </div>
    <p>This heatmap represents some of the diseases that counties are likely to highly represent.</p>
    <p>Current selected county: {{currentCountyName}}</p>
    <div id="heatmap">
      <svg-possible-heatmap></svg-possible-heatmap>
    </div>
  </section>
</template>

<script>
import SvgPossibleHeatmap from '~/components/svg-possible-heatmap'

export default {
  components: {
    SvgPossibleHeatmap
  },
  computed: {
    currentCountyName () {
      return this.$store.state.currentCounty.name
    }
  }
}
</script>

<style scoped>

#topbar {
  width: 100%;
  padding: 5px;
  background-color: #aaffff;
}
#maintitle {
  padding-top: 10px;
  font-size: 48px;
}

.container {
  padding-top: 0px;
}

h1 {
  padding-top: 15px;
}

hr {
  width: 80%;
  color: #555555;
  box-shadow: none;
}

</style>


