import axios from 'axios'
import config from '../config.json'

const httpTests = axios.create({
  baseURL: config.apiEndpoint
})

const sitesService = {
  getSites: async () => {
    const {data} = await httpTests.get('sites/')
    return data
  }
}

export default sitesService