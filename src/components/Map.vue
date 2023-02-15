<template>
  <div style="width: 100%; height: 600px" ref="mapDiv"></div>
</template>

<script setup>
import { Loader } from '@googlemaps/js-api-loader'
import getMarkers from '@/composables/getMapMarkers'
import { ref, onMounted } from 'vue'

// data
const markers = ref('')
const error = ref('')
const currPos = ref({
  lat: 41.29246,
  lng: 12.5736108,
})
const loader = new Loader({ apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY })
const mapDiv = ref(null)
let map = ref(null)

// methods

// compted

// lifecycle hooks
onMounted(async () => {
  // load data
  await getMarkers(markers, error)
  await loader.load()

  map.value = new google.maps.Map(mapDiv.value, {
    center: currPos.value,
    zoom: 6
  })
  for(let i = 0; i < markers.value.length; i ++){
    new google.maps.Marker({
      position: markers.value[i],
      map: map.value,
    })
  }
  
})

// setup code
</script>

<style scoped>

</style>