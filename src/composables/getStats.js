import axios from 'axios'

const getStats = async (stats, error) => {
  
  try{
    let data = await axios.get('https://ott-fogliata.github.io/vuejs-s2i-repository/stats.json')
    if(data.status!=200)
      throw Error('No data available')
    stats.value = data.data
  }
  catch(err){
    console.log(err.message)
    error.value = err.message
  }
}

export default getStats;