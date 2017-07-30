<template>
  <div id="dot" v-tooltip.top-center="county" v-bind:style="{top: `${position.y * 7 - 3.5}px`, left: `${position.x - 1}%`}" v-on:click="setCurrentCounty(county)"></div>
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
    width: 15px;
    height: 15px;
    background-color: #ff0000;
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
