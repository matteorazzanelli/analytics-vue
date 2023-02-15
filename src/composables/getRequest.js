
import { ref } from 'vue'
import axios from 'axios'

export default async function useAxiosGet(url) {
  const data = ref(null)
  const error = ref(null)

  try{
    let result = await axios.get(url)
    if(result.status != 200)
      throw Error('No data available')
    data.value = result.data
  }
  catch(err){
    console.log(err.message)
    error.value = err.message
  }

  return { data, error }
}
//////////////////////////////////////////////////////////////////
// import axios from 'axios'
// const getStats = async (stats, error) => {
  
//   try{
//     let data = await axios.get('https://ott-fogliata.github.io/vuejs-s2i-repository/stats.json')
//     if(data.status!=200)
//       throw Error('No data available')
//     stats.value = data.data
//   }
//   catch(err){
//     console.log(err.message)
//     error.value = err.message
//   }
// }
// // export default getStats;

// //////////////////////////////////////////////////////////////////
// import axios from 'axios'
// const getMarkers = async (markers, error) => {
//   try{
//     let data = await axios.get('http://localhost:3000/marker')
//     if(data.status!=200)
//       throw Error('No data available')
//     markers.value = data.data
//   }
//   catch(err){
//     console.log(err.message)
//     error.value = err.message
//   }
// }
// // export default getMarkers