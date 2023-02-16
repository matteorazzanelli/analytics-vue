<template>
  <div class="analyitcs">
    <Graph title='KPI : ' :graph="graphToShow" :history="history"/>
    <Category @changeGraph="changeKpi"/>
  </div>
</template>

<script setup>

import {ref} from "vue"
import Graph from '@/components/Graph.vue'
import Category from '@/components/Category.vue'

// data
const graphToShow = ref('')
const history = ref([])

// methods
const changeKpi = (kpiHistory, kpiName) => {
  // the two keys are the history and the total
  graphToShow.value = kpiName
  history.value = kpiHistory
  console.log('Arrived ',graphToShow.value, history.value)
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