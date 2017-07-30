<template>
  <div id="outershell">
    <head>
    <link href="https://fonts.googleapis.com/css?family=Roboto&effect=shadow-multiple" rel="stylesheet">
    </head>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}
 
body {
  height: 800px;
  padding-bottom: 0px;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
  font-family: "Roboto-Thin-Italic";
}

* {
  font-family: "Roboto";
}

#outershell {
  max-width: 700px;
  margin: auto;
  height: auto;
}

.color1 {
  color: #EEE5A4;
}
.color2 {
  color: #D4C866;
}
.color3 {
  color: #BFB436;
}
.color4 {
  color: #5C7428;
}
.color5 {
  color: #38120f;
}
.color1bg {
  background-color: #EEE5A4;
}
.color2bg {
  background-color: #D4C866;
}
.color3bg {
  background-color: #BFB436;
}
.color4bg {
  background-color: #5C7428;
}
.color5bg {
  background-color: #38120f;
}
</style>
