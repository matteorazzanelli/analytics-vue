<template>
  <div class="main-graph">
    <h1>{{ title }}</h1>
    <p>{{ graph_to_show }}</p>
  </div>
</template>

<script>
export default {
  name: 'Graph',
  props: {
    title: String,
    graph_to_show: String
  },
  setup(props, context){

    return {}
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
