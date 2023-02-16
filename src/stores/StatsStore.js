import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useStatsStore = defineStore('statsStore', () => {

  // data
  const stats = ref({});
  const loaded = ref(false);

  // methods
  function setValues(obj){
    for (const key of Object.keys(obj)){
      console.log(key)
      console.log(stats)
      stats.value[key] = {
        'history': obj[key]['history'],
        'total': obj[key]['total']
      }
    }
  }

  function increment(kpi, value){
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