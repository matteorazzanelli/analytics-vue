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

<script>
import getStats from '@/composables/getStats';
import {ref, onMounted} from "vue"

export default {
  name: 'Category',
  emits: ['changeGraph'],
  setup(props, context){

    const stats = ref('')
    const error = ref('')
    const loaded = ref(false)

    const delay = ref(2000); // 2 seconds

    onMounted(async () => {
      // load data
      console.log('+++++++')
      console.log(loaded.value)
      console.log('+++++++')
      if(!loaded.value){
        await getStats(stats, error)
        loaded.value = true;
      }
      console.log('onMounted in Category')
      // set interval to update impression every 2 seconds
      setInterval(() => {
        console.log('-----------')
        stats.value['impressions']['total'] += 5;
        console.log(stats.value['impressions']['total'])
        console.log('-----------')
      }, delay.value);
    })

    // if clicked emit an events to change the graph shown
    const changeMeasure = (kpi_name) => {
      console.log('clicked : ', kpi_name, stats.value[kpi_name].history)
      context.emit('changeGraph', stats.value[kpi_name].history, kpi_name);
    }

    return {stats, error, changeMeasure}
  }
}
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