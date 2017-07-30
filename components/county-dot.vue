<template>
  <div id="dot" v-tooltip.top-center="countyInfo" v-on:mouseover="setCurrentCounty(county)" v-bind:style="{top: `${position.y * 7 - 3.5}px`, left: `${position.x - 1}%`}" v-on:hover="setCurrentCounty(county)" v-on:click="setCurrentCounty(county)">{{`${county.charAt(0).toUpperCase()}${county.charAt(1).toUpperCase()}`}}</div>
</template>
<script>
export default {
  props: {
    county: {
      type: String,
      default: 'default county name'
    },
    position: {
      type: Object,
      default: {}
    }
  },
  computed: {
    countyInfo () {
      let name = this.$store.state.currentCounty.name
      let str = `${name}: `
      let risks = this.$store.state.currentCounty.risks
      risks = risks.sort(function (riskA, riskB) {
        return (riskA.rate - riskB.rate)
      })
      for (let riskkey in risks) {
        if (riskkey < 5) {
          str = `${str} ${risks[riskkey].name}(${risks[riskkey].rate * 100}%) `
        }
      }
      return str
    }
  },
  methods: {
    setCurrentCounty (county) {
      this.$store.commit('replace', county)
    }
  }
}
</script>
<style>
  #dot {
    position: absolute;
    border-radius: 15px;
    padding: 5px;
    background-color: #f38630;
    font-size: 10px;
    box-shadow: 2px 2px 1px #888888;
  }
.tooltip {
  display: block !important;
  padding: 4px;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip tooltip-arrow {
  display: none;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}
</style>
