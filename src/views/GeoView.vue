<template>
  <div class="geo">
    <h1>Geographical informations</h1>
    <h3>Where the most traffic comes from</h3>
    <Map></Map>
  </div>
</template>


<script>
import Map from '@/components/Map.vue'

export default {
  name: 'GeoView',
  components: { Map },
  setup(){ }
}
</script>

<style scoped>
.geo{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>