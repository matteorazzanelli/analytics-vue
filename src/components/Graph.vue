<template>
  <div class="main-graph">
    <h1 style="text-align:center">{{ title }} {{ activeStat }}</h1>
    <div v-if="activeStat == ''">
      No data. Click on indicators
    </div>
    <div v-else>
      <Line id="my-chart-id" :options="chartOptions" :data="chartData"/>
    </div>
  </div>
</template>

<script setup>

import {ref, onUpdated, computed} from "vue"
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js'

// emit and props
const props = defineProps({
  title: {type: String, required: true},
  graph: {type: String, required: true},
  history: {type: Object, required: true}
})

// data
ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, LineElement, PointElement)
const activeStat = ref('');
const chartOptions = ref({"responsive": true})

// methods

// computed
const chartData = computed(()=>{
  // define
  let cd = {
    "labels": [],
    "datasets": [{
      label: '',
      data: [],
      borderWidth: 3,
      pointBorderWidth: 6,
      borderColor: 'rgb(52, 19, 144)',
      tension: 0.1
    }]
  }
  // fill
  cd.datasets[0].label = props.graph
  for(const key in props.history){
    cd.labels.push(key)
    cd.datasets[0].data.push(props.history[key]) 
  }
  return cd
})

// lifecycle hooks
onUpdated(() => {
  activeStat.value = props.graph
})

// setup code
</script>

<style scoped>
.main-graph{
  background-color: lightgray;
  border-radius: 10px;
  width: 100%;
}

</style>
