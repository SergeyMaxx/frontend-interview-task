import {Test} from '../types'

const statusOrderAsc = ['ONLINE', 'PAUSED', 'STOPPED', 'DRAFT']
const statusOrderDesc = ['DRAFT', 'STOPPED', 'PAUSED', 'ONLINE']

export const orderBy = (array: Test[], key: keyof Test, order: string): Test[] => {
  if (key === 'status') {
    const orderMap = order === 'asc' ? statusOrderAsc : statusOrderDesc
    return array.sort((a, b) => {
      let indexA = orderMap.indexOf(a[key])
      let indexB = orderMap.indexOf(b[key])
      indexA = indexA === -1 ? orderMap.length : indexA
      indexB = indexB === -1 ? orderMap.length : indexB

      if (indexA < indexB) return -1
      if (indexA > indexB) return 1
      return 0
    })
  } else {
    return array.sort((a, b) => {
      if (order === 'asc') {
        if (a[key] < b[key]) return -1
        if (a[key] > b[key]) return 1
      } else {
        if (a[key] > b[key]) return -1
        if (a[key] < b[key]) return 1
      }
      return 0
    })
  }
}