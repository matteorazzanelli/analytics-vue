import axios from 'axios'

const getMarkers = async (markers, error) => {
  
  try{
    let data = await axios.get('http://localhost:3000/marker')
    if(data.status!=200)
      throw Error('No data available')
    markers.value = data.data
  }
  catch(err){
    console.log(err.message)
    error.value = err.message
  }
}

export default getMarkers