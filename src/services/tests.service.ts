import axios from 'axios'
import config from '../config.json'
import {Test} from '../types'

const httpTests = axios.create({
  baseURL: config.apiEndpoint
})

const testsService = {
  getTests: async (): Promise<Test[]> => {
    const {data} = await httpTests.get('tests/')
    return data
  },
  getTest: async (id: number): Promise<Test> => {
    const {data} = await httpTests.get(`tests/${id}`)
    return data
  }
}

export default testsService