
import { ref } from 'vue'
import axios from 'axios'

export default async function useAxiosGet(url) {
  // state encapsulated and managed by the composable
  const data = ref(null)
  const error = ref(null)

  // reusable axios.get function
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

  // expose managed state as return value
  return { data, error }
}