import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useStatsStore = defineStore('statsStore', () => {

  // data
  const stats = ref({});
  const loaded = ref(false);
  const date = new Date();
  let currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  // methods
  function setValues(obj){
    
    for (const key of Object.keys(obj)){
      stats.value[key] = {
        'history': obj[key]['history'],
        'total': obj[key]['total']
      }
      // add today as a new data field
      stats.value[key]['history'][currentDate] = 0
    }    
  }

  function increment(kpi, value){
    stats.value[kpi]['history'][currentDate] += value
    stats.value[kpi]['total'] += value;
  }

  function markLoaded(){
    loaded.value = true;
  }
  

  // computed
  const isLoaded = computed(()=>{return loaded.value;})
  const getImpressions = computed(()=>{return stats.value['impressions']['total'];})
  const getAllStats = computed(()=>{return stats.value;})

  return {
    stats, loaded,
    setValues, increment, markLoaded,
    isLoaded, getImpressions, getAllStats
  }

})