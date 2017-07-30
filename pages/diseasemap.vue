<template>
  <section class="container">
    <div id="topbar" class="color1bg">
      <h1 id="maintitle" class="color3 font-effect-shadow-multiple">MODEL DISEASE HEATMAP</h1>
      <hr>
      <p id="saying">Explore California disease corrolations by hovering over counties.</p>
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
#heatmap {
  position: relative;
}

#topbar {
  width: 100%;
  padding: 0px;
  margin-bottom: 0px;
}
#maintitle {
  padding-top: 10px;
  margin-top: 0px;
  font-size: 64px;
  margin-bottom: 0px;
}
#saying {
  padding-bottom: 10px;
  margin-bottom: 0px;
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


