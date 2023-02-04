<template>
  <div class="main-graph">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Graph',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-graph{
  background-color: gray;
  border-radius: 10px;
}

</style>
