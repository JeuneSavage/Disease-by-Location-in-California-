<template>
  <section class="container">
    <div id="topbar">
      <h1 id="maintitle">Model Disease Heatmap</h1>
    </div>
    <p>This heatmap represents some of the diseases that counties are likely to highly represent.</p>
    <div id="heatmap">
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>

#topbar {
  width: 100%;
  padding: 5px;
  background-color: #aaffff;
}
#maintitle {
  padding-top: 10px;
  font-size: 48px;
}

#heatmap {
  width: 95%;
  height: 690px;
  margin: auto;
  background-color: #dddddd;
}
.container {
  padding-top: 0px;
}

h1 {
  padding-top: 15px;
}

hr {
  width: 80%;
  color: #555555;
  box-shadow: none;
}

</style>


