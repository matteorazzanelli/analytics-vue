<template>
  <div class="main-graph">
    <h1>{{ title }}</h1>
    <div v-if="active_stat == ''">
      Loading...
    </div>
    <div v-else>
      No data. Click on indicators
    </div>
  </div>
</template>

<script>
import {ref} from "vue"

export default {
  name: 'Graph',
  props: {
    title: {type: String, required: true},
    graph: {type: String, required: true}
  },
  setup(props, context){
    // vars
    const active_stat = ref(props.graph);
    

    return {active_stat}
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
