<template>
  <section class="container">
    <div id="topbg" class="color1bg">
      <h1 id="title" class="color3 font-effect-shadow-multiple">California Disease Model by County</h1>
    </div>
    <div id="picarea">
      <h3 id="moresaying">We use Machine Learning to advance statewide public health awareness of disease risk.</h3>
      <div id="leftpg">
      </div>
      <div id="rightpg">
        <br>
        <div id="button1">
        <nuxt-link class="color4" :to="'/searchcounty'">search by country</nuxt-link>
        </div>
        <div id="button2">
        <nuxt-link class="color4" :to="'/diseasemap'">view heatmap</nuxt-link>
        </div>
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
  display: inline-block;
  margin: auto;
  margin-right: 20px;
}

#topbg {
  margin: 0px; 
}
#button2 {
  padding: 6px;
  border-radius: 5px;
  display: inline-block;
  background-color: #EEE5A4;
  margin: auto;
}
#title {
  margin: 0px;
}
#moresaying {
  padding-top: 10px;
  margin-top: 0px;
}

#picarea {
  background-image: url("../static/feild.jpg");
  width: 100%;
  height: 500px;
  background-position-x: -120px;
}

#clearer {
  margin-bottom: 20px;
  height: 20px;
  clear: both;
}

h1 {
  font-size: 48px;
  margin-top: 10px;
  padding: 10px;
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
