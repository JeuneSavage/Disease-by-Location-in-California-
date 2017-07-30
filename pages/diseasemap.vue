<template>
  <section class="container">
    <div id="topbar">
      <h1 id="maintitle" class="color3 font-effect-shadow-multiple">Model Disease Heatmap</h1>
      <p>Explore disease corrolations by hovering over counties.</p>
      <!--<p>Current selected county: {{currentCountyName}}</p>-->
    </div>
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
}
#maintitle {
  padding-top: 10px;
  font-size: 64px;
}

.container {
  padding-top: 0px;
  height:800px;
}

h1 {
  padding-top: 15px;
}

hr {
  width: 80%;
  box-shadow: none;
}

</style>


