<template>
  <div class="analyitcs">
    <Graph title='KPI : ' :graph="graph_to_show" :history="history"/>
    <Category @changeGraph="changeKpi"/>
  </div>
</template>

<script setup>

import {ref} from "vue"
import Graph from '@/components/Graph.vue'
import Category from '@/components/Category.vue'

// data
const graph_to_show = ref('')
const history = ref([])

// methods
const changeKpi = (kpi_history, kpi_name) => {
  // the two keys are the history and the total
  graph_to_show.value = kpi_name
  history.value = kpi_history
  console.log('Arrived ',graph_to_show.value, history.value)
}

// computed

// lifecycle hooks

// setup code
</script>

<style scoped>
.analyitcs{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

</style>