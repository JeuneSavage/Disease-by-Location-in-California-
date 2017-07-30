<template>
  <div id="outershell">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> 
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

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: white;
  border: 2px solid white;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: white;
  background-color: white;
}

.title
{
  color: white;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}

* {
  font-family: Roboto;
}

#outershell {
  max-width: 700px;
  margin: auto;
}

body{
  background-color: #8e83df;
}

</style>
