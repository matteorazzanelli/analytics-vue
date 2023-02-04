<template>
  <div class="analyitcs">
    <Graph @changeGraph="changeKpi" title='Main Graph' :graph="graph_to_show"/>
    <div class="categories">
      <div v-for="i in properties_name.length" :key="i">
        <!-- i starts from 1, vectors from 0 -->
        <Category :kpi_name=properties_name[i-1] :kpi_value='properties_num[i-1]'/>
      </div>
    </div>
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
  props: {},
  setup(props, context){

    const properties_name = ref([
      'Subscriptions', 'Impressions', 'Clicks', 'Avg Time'
    ]);

    const properties_num = ref([
    '1', '2', '3', '4'
    ])

    const graph_to_show = ref('')

    const changeKpi = (kpi) => {
      console.log('Arrived ',kpi)
      graph_to_show = kpi
    }

    return {changeKpi, properties_name, properties_num, graph_to_show}
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
.categories {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
</style>