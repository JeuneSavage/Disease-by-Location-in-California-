<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <br>
    <nuxt-link :to="'/searchcounty'">search by country.</nuxt-link>
    <br>
    <nuxt-link :to="'/diseasemap'">view heatmap.</nuxt-link>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
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
</style>
