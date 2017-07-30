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
          county: 'Del Norte',
          position: {
            x: 13,
            y: 13
          }
        },
        {
          county: 'Siskiyou',
          position: {
            x: 25,
            y: 15
          }
        },
        {
          county: 'Modoc',
          position: {
            x: 38,
            y: 13
          }
        },
        {
          county: 'Humbdolt',
          position: {
            x: 13,
            y: 25
          }
        },
        {
          county: 'Trinity',
          position: {
            x: 18,
            y: 25
          }
        },
        {
          county: 'Shasta',
          position: {
            x: 28,
            y: 23
          }
        },
        {
          county: 'Lassen',
          position: {
            x: 39,
            y: 23
          }
        },
        {
          county: 'Mendocino',
          position: {
            x: 17,
            y: 37
          }
        },
        {
          county: 'Tehama',
          position: {
            x: 27,
            y: 30
          }
        },
        {
          county: 'Plumas',
          position: {
            x: 39,
            y: 31
          }
        },
        {
          county: 'Glenn',
          position: {
            x: 25,
            y: 35
          }
        },
        {
          county: 'Butte',
          position: {
            x: 32,
            y: 35
          }
        },
        {
          county: 'Sierra',
          position: {
            x: 40,
            y: 35
          }
        },
        {
          county: 'Lake',
          position: {
            x: 22,
            y: 40
          }
        },
        {
          county: 'Colusa',
          position: {
            x: 27,
            y: 39.5
          }
        },
        {
          county: 'Sutter',
          position: {
            x: 30,
            y: 39.5
          }
        },
        {
          county: 'Yuba',
          position: {
            x: 33,
            y: 39
          }
        },
        {
          county: 'Nevada',
          position: {
            x: 37,
            y: 38
          }
        },
        {
          county: 'Placer',
          position: {
            x: 41,
            y: 39.5
          }
        },
        {
          county: 'Sonoma',
          position: {
            x: 21,
            y: 45.5
          }
        },
        {
          county: 'Napa',
          position: {
            x: 26,
            y: 46
          }
        },
        {
          county: 'Yolo',
          position: {
            x: 29,
            y: 44
          }
        },
        {
          county: 'Sacramento',
          position: {
            x: 34,
            y: 46
          }
        },
        {
          county: 'El Dorado',
          position: {
            x: 40,
            y: 43.5
          }
        },
        {
          county: 'Solano',
          position: {
            x: 29,
            y: 48
          }
        },
        {
          county: 'Alpine',
          position: {
            x: 45,
            y: 45
          }
        },
        {
          county: 'Marin',
          position: {
            x: 22,
            y: 50
          }
        },
        {
          county: 'Contra Costa',
          position: {
            x: 29,
            y: 51.5
          }
        },
        {
          county: 'San Joaquin',
          position: {
            x: 34.5,
            y: 51
          }
        },
        {
          county: 'Calveras',
          position: {
            x: 39,
            y: 50
          }
        },
        {
          county: 'Tuolumme',
          position: {
            x: 45,
            y: 50
          }
        },
        {
          county: 'Mono',
          position: {
            x: 52.5,
            y: 51
          }
        },
        {
          county: 'San Francisco',
          position: {
            x: 24.5,
            y: 52.5
          }
        },
        {
          county: 'San Mateo',
          position: {
            x: 25.3,
            y: 56
          }
        },
        {
          county: 'Alameda',
          position: {
            x: 29.5,
            y: 54.5
          }
        },
        {
          county: 'Stanislaus',
          position: {
            x: 36,
            y: 55
          }
        },
        {
          county: 'Mariposa',
          position: {
            x: 45,
            y: 55
          }
        },
        {
          county: 'Madera',
          position: {
            x: 47,
            y: 59
          }
        },
        {
          county: 'Santa Cruz',
          position: {
            x: 28,
            y: 59.5
          }
        },
        {
          county: 'Santa Clara',
          position: {
            x: 31,
            y: 58
          }
        },
        {
          county: 'Merced',
          position: {
            x: 38.5,
            y: 58
          }
        },
        {
          county: 'Monterey',
          position: {
            x: 34,
            y: 68
          }
        },
        {
          county: 'San Benito',
          position: {
            x: 36,
            y: 64
          }
        },
        {
          county: 'Fresno',
          position: {
            x: 47,
            y: 64
          }
        },
        {
          county: 'Iniyo',
          position: {
            x: 63,
            y: 64
          }
        },
        {
          county: 'Kings',
          position: {
            x: 46,
            y: 69.5
          }
        },
        {
          county: 'Tulare',
          position: {
            x: 54,
            y: 69.5
          }
        },
        {
          county: 'San Luis Obispo',
          position: {
            x: 40,
            y: 75
          }
        },
        {
          county: 'Kern',
          position: {
            x: 55,
            y: 77
          }
        },
        {
          county: 'San Bernardino',
          position: {
            x: 75,
            y: 83
          }
        },
        {
          county: 'Santa Barbara',
          position: {
            x: 43.5,
            y: 83
          }
        },
        {
          county: 'Ventura',
          position: {
            x: 52,
            y: 85
          }
        },
        {
          county: 'Los Angeles',
          position: {
            x: 59,
            y: 85
          }
        },
        {
          county: 'Riverside',
          position: {
            x: 75,
            y: 92
          }
        },
        {
          county: 'Orange',
          position: {
            x: 63,
            y: 92.5
          }
        },
        {
          county: 'San Diego',
          position: {
            x: 71,
            y: 98
          }
        },
        {
          county: 'Imperial',
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


