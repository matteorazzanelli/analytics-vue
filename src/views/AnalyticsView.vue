<template>
  <div class="analyitcs">
    <Graph title='Main Graph' :graph=graph_to_show />
    <Category @changeGraph="changeKpi"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Graph from '@/components/Graph.vue'
import Category from '@/components/Category.vue'

import {ref} from "vue"


export default {
  name: 'AnalyticsView',
  components: { Graph, Category },
  setup(){

    const graph_to_show = ref('')

    const changeKpi = (kpi) => {
      graph_to_show.value = kpi
      console.log('Arrived ',graph_to_show.value)
    }

    return {changeKpi, graph_to_show}
  }
}
</script>

<style scoped>
.analyitcs{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

</style>