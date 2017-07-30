<template>
<div id="heatmapBox">
  <img id="image" src="../assets/img/caltrans.png" alt="nope" class="overlay"/>
  <svg id="overlay-grid" class="overlay" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="smallGrid" width="7" height="7" patternUnits="userSpaceOnUse">
      <path d="M 7 0 L 0 0 0 7" fill="none" stroke="gray" stroke-width="0.5"/>
    </pattern>
    <pattern id="grid" width="70" height="70" patternUnits="userSpaceOnUse">
      <rect width="70" height="70" fill="url(#smallGrid)"/>
      <path d="M 70 0 L 0 0 0 70" fill="none" stroke="gray" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="url(#grid)" />
</svg>
<div>
  <div v-for="(dot, index) in countyDots" :key="index">
    <county-dot :county="dot.county" :position="dot.position"></county-dot>
  </div>
</div>
</div>
</template>

<script>
import CountyDot from '~/components/county-dot'
export default {
  data () {
    return {
      countyDots: [
        {
          county: 'testplace',
          position: {
            x: 13,
            y: 13
          }
        },
        {
          county: 'testplace2',
          position: {
            x: 25,
            y: 15
          }
        },
        {
          county: 'testplace3',
          position: {
            x: 38,
            y: 13
          }
        }
      ]
    }
  },
  components: {
    CountyDot
  }
}
</script>

<style scoped>

#heatmapBox {
  position: relative;
  width: 100%;
  height: 800px;
  background-color: #ccc;
}

#image {

}

#overlay-grid {
}

.overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 800px;
}

</style>


