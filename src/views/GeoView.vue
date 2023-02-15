<template>
  <div class="geo">
    <h2 style="flex-wrap: wrap;">Geographical informations</h2>
    <h3>Where the most traffic comes from</h3>
    <Map></Map>
  </div>
</template>


<script setup>
import Map from '@/components/Map.vue'
</script>

<style scoped>
.geo{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
</style>