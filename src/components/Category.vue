<template>
  <div class="categories">
    <div v-if="error!=''">{{error}}</div>
    <div v-for="i in Object.keys(stats).length" :key="i">
      <!-- i starts from 1, vectors from 0 -->
      <div class="category-slot" @click="changeMeasure">
        <div class="category-name">{{ Object.keys(stats)[i-1] }}</div>
        <div class="category-number">{{ stats[Object.keys(stats)[i-1]].total }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import getStats from '@/composables/getStats';
import {ref} from "vue"


export default {
  name: 'Category',
  emits: ['changeGraph'],
  setup(props, context){

    const stats = ref('')
    const error = ref('')

    // load data
    getStats(stats, error)

    // if clicked emit an events to change the graph shown
    const changeMeasure = () => {
      console.log('clicked ',props.kpi_name);
      context.emit('changeGraph', props.kpi_name);
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
  /* flex-wrap: wrap; */
}
.category-slot{
  background-color: lightgrey;
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
  background-color: rgb(168, 167, 167);
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