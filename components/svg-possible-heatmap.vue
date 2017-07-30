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
        },
        {
          county: 'testplace4',
          position: {
            x: 13,
            y: 25
          }
        },
        {
          county: 'testplace5',
          position: {
            x: 18,
            y: 25
          }
        },
        {
          county: 'testplace6',
          position: {
            x: 28,
            y: 23
          }
        },
        {
          county: 'testplace7',
          position: {
            x: 39,
            y: 23
          }
        },
        {
          county: 'testplace8',
          position: {
            x: 17,
            y: 37
          }
        },
        {
          county: 'testplace9',
          position: {
            x: 27,
            y: 30
          }
        },
        {
          county: 'testplace10',
          position: {
            x: 39,
            y: 31
          }
        },
        {
          county: 'testplace11',
          position: {
            x: 25,
            y: 35
          }
        },
        {
          county: 'testplace12',
          position: {
            x: 32,
            y: 35
          }
        },
        {
          county: 'testplace13',
          position: {
            x: 40,
            y: 35
          }
        },
        {
          county: 'testplace14',
          position: {
            x: 22,
            y: 40
          }
        },
        {
          county: 'testplace15',
          position: {
            x: 27,
            y: 39.5
          }
        },
        {
          county: 'testplace16',
          position: {
            x: 30,
            y: 39.5
          }
        },
        {
          county: 'testplace17',
          position: {
            x: 33,
            y: 39
          }
        },
        {
          county: 'testplace18',
          position: {
            x: 37,
            y: 38
          }
        },
        {
          county: 'testplace19',
          position: {
            x: 41,
            y: 39.5
          }
        },
        {
          county: 'testplace20',
          position: {
            x: 21,
            y: 45.5
          }
        },
        {
          county: 'testplace21',
          position: {
            x: 26,
            y: 46
          }
        },
        {
          county: 'testplace22',
          position: {
            x: 29,
            y: 44
          }
        },
        {
          county: 'testplace23',
          position: {
            x: 34,
            y: 46
          }
        },
        {
          county: 'testplace24',
          position: {
            x: 40,
            y: 43.5
          }
        },
        {
          county: 'testplace25',
          position: {
            x: 29,
            y: 48
          }
        },
        {
          county: 'testplace26',
          position: {
            x: 45,
            y: 45
          }
        },
        {
          county: 'testplace27',
          position: {
            x: 22,
            y: 50
          }
        },
        {
          county: 'testplace28',
          position: {
            x: 29,
            y: 51.5
          }
        },
        {
          county: 'testplace29',
          position: {
            x: 34.5,
            y: 51
          }
        },
        {
          county: 'testplace30',
          position: {
            x: 39,
            y: 50
          }
        },
        {
          county: 'testplace31',
          position: {
            x: 45,
            y: 50
          }
        },
        {
          county: 'testplace32',
          position: {
            x: 52.5,
            y: 51
          }
        },
        {
          county: 'testplace33',
          position: {
            x: 24.5,
            y: 52.5
          }
        },
        {
          county: 'testplace34',
          position: {
            x: 25.3,
            y: 56
          }
        },
        {
          county: 'testplace35',
          position: {
            x: 29.5,
            y: 54.5
          }
        },
        {
          county: 'testplace36',
          position: {
            x: 36,
            y: 55
          }
        },
        {
          county: 'testplace37',
          position: {
            x: 45,
            y: 55
          }
        },
        {
          county: 'testplace38',
          position: {
            x: 47,
            y: 59
          }
        },
        {
          county: 'testplace39',
          position: {
            x: 28,
            y: 59.5
          }
        },
        {
          county: 'testplace40',
          position: {
            x: 31,
            y: 58
          }
        },
        {
          county: 'testplace41',
          position: {
            x: 38.5,
            y: 58
          }
        },
        {
          county: 'testplace42',
          position: {
            x: 34,
            y: 68
          }
        },
        {
          county: 'testplace43',
          position: {
            x: 36,
            y: 64
          }
        },
        {
          county: 'testplace44',
          position: {
            x: 47,
            y: 64
          }
        },
        {
          county: 'testplace45',
          position: {
            x: 63,
            y: 64
          }
        },
        {
          county: 'testplace46',
          position: {
            x: 46,
            y: 69.5
          }
        },
        {
          county: 'testplace47',
          position: {
            x: 54,
            y: 69.5
          }
        },
        {
          county: 'testplace48',
          position: {
            x: 40,
            y: 75
          }
        },
        {
          county: 'testplace49',
          position: {
            x: 55,
            y: 77
          }
        },
        {
          county: 'testplace50',
          position: {
            x: 75,
            y: 83
          }
        },
        {
          county: 'testplace51',
          position: {
            x: 43.5,
            y: 83
          }
        },
        {
          county: 'testplace52',
          position: {
            x: 52,
            y: 85
          }
        },
        {
          county: 'testplace53',
          position: {
            x: 59,
            y: 85
          }
        },
        {
          county: 'testplace54',
          position: {
            x: 75,
            y: 92
          }
        },
        {
          county: 'testplace55',
          position: {
            x: 63,
            y: 92.5
          }
        },
        {
          county: 'testplace56',
          position: {
            x: 71,
            y: 98
          }
        },
        {
          county: 'testplace57',
          position: {
            x: 81,
            y: 98
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


