<template>
  <div id="barOfCountry" class="color2bg color5">
    <h3>{{county.name}}</h3>
    <p>Risks</p>
    <div class="risksList">
      <div v-for="(risk, index) in county.risks" :key="index" class="risksListItem">
        <p>{{risk.name}}: {{risk.probability}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    county: {
      type: Object,
      default () {
        return {
          name: 'default',
          risks: [
            {name: 'hi', rate: 'bye'}
          ]
        }
      }
    }
  }
}
</script>

<style scoped>

#barOfCountry {
  padding: 3px;
}

p, h3, h1 {
  color: #f38630;
}
</style>
