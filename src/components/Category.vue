<template>
  <div class="categories">
    <div v-if="error!=''">{{error}}</div>
    <div v-for="i in Object.keys(stats).length" :key="i">
      <!-- i starts from 1, vectors from 0 -->
      <!-- link stats to the click event -->
      <div class="category-slot" @click="changeMeasure(Object.keys(stats)[i-1])">
        <div class="category-name">{{ Object.keys(stats)[i-1] }}</div>
        <div class="category-number">{{ stats[Object.keys(stats)[i-1]].total }}</div>
        <!-- the assumption is that 'total' should exist -->
      </div>
    </div>
  </div>
</template>

<script setup>

import {ref, onMounted} from "vue"
import useAxiosGet from '@/composables/getRequest';
import { useStatsStore } from '@/stores/StatsStore';

// emit and props
const emit = defineEmits(['changeGraph'])

// data
const stats = ref('')
const error = ref('')
const delay = 2000; // 2 seconds
const statsStore = useStatsStore() // init pinia store

// methods
const changeMeasure = (kpiName) => {
  // if clicked emit an events to change the graph shown
    console.log('clicked : ', kpiName, stats.value[kpiName].history)
    emit('changeGraph', stats.value[kpiName].history, kpiName);
}

// computed

// lifecycle hooks
onMounted(async () => {
  // load data only once and store value
  if(!statsStore.isLoaded){
    console.log('NO')
    // retrieve and store values
    let res = await useAxiosGet('https://ott-fogliata.github.io/vuejs-s2i-repository/stats.json')
    stats.value = res.data.value;
    error.value = res.data.vaue;
    statsStore.setValues(stats.value)
    // set the state as already loaded to load only once
    statsStore.markLoaded()

    // set interval to update impression every 2 seconds
    setInterval(() => {
      // TODO: check if impression exists
      statsStore.increment('impressions', 5)
      console.log(statsStore.getImpressions)
    }, delay); 
  }
    // load values since timer is set on statsStore
    stats.value = statsStore.getAllStats;
})

// setup code
</script>

<style scoped>
.categories {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.category-slot{
  background-color: #0faf87;
  color: white;
  width: 200px;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  box-shadow: 3px 3px 3px rgb(109, 107, 107);
  transition: background-color box shadow 0.2s;
}
.category-slot:hover {
  background-color: #0a7b5f;
}
.category-slot:active {
  box-shadow: none;
}

.category-name{
  font-weight: bold;
}

.category-number{
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 32px;
}
</style>