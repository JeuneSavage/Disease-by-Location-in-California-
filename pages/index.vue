<template>
  <section class="container">
    <div>
      <h1 id="title" class="color3 font-effect-shadow-multiple">California Disease Predictor by County</h1>
    </div>
    <h3 >We use Machine Learning to advance statewide public health awareness of disease risk.</h3>
    <div id="leftpg">
      <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
      <p id="credits">Built on Nuxt Express-Template</p>
    </div>
    <div id="rightpg">
      <br>
      <div id="button1">
      <nuxt-link class="color4" :to="'/searchcounty'">search by country.</nuxt-link>
      </div>
      <br>
      <div id="button2">
      <nuxt-link class="color4" :to="'/diseasemap'">view heatmap.</nuxt-link>
      </div>
    </div>
    <div id="clearer"></div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
#button1 {
  padding: 6px;
  border-radius: 5px;
  background-color: #EEE5A4;
}

#button2 {
  padding: 6px;
  border-radius: 5px;
  background-color: #EEE5A4;
}
#title {
  margin: 0px;
}

#leftpg {
  float: left;
}

#rightpg {
  float: right;
}

#clearer {
  margin-bottom: 20px;
  height: 20px;
  clear: both;
}

h1 {
  font-size: 64px;
  margin-top: 10px;
}
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}

.container {
  padding-top: 0px;
  padding: 0px;
}
#credits {
  padding-top: 0px;
}
.links {
}
</style>
