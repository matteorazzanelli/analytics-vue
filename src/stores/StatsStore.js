import { defineStore } from "pinia";

export const useStatsStore = defineStore('statsStore', {
  state: () => ({
    stats: {},
    loaded: false
  }),
  getters:{
    isLoaded(){
      return this.loaded;
    },
    getImpressions(){
      return this.stats['impressions']['total'];
    },
    getAllStats(){
      return this.stats;
    }
  },
  actions: {
    setValues(obj){
      for (const key of Object.keys(obj)){
        this.stats[key] = {
          'history': obj[key]['history'],
          'total': obj[key]['total']
        }
      }
    },
    increment(kpi, value) {
      this.stats[kpi]['total'] += value
    },
    markLoaded(){
      this.loaded = true;
    }
  }
})