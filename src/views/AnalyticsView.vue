<template>
  <div class="analyitcs">
    <Graph msg="Main Graph"/>
    <div class="categories">
      <Category @changeGraph="changeKpi" msg="Subcriptions" num="1"/>
      <Category @changeGraph="changeKpi" msg="Impressions" num="2"/>
      <Category @changeGraph="changeKpi" msg="Clicks" num="3"/>
      <Category @changeGraph="changeKpi" msg="Avg Time" num="4"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Graph from '@/components/Graph.vue'
import Category from '@/components/Category.vue'


export default {
  name: 'AnalyticsView',
  components: { Graph, Category },
  props: {},
  setup(props, context){
    const changeKpi = (kpi) => {
      console.log('Arrived ',kpi)
    }

    return {changeKpi}
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