import {Site, Test} from '../types'

export const get = <T extends Test | Site>(obj: T, path: string): any => {
  const keys = path.split('.')
  let result: any = obj

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key as keyof T]
    } else {
      return null
    }
  }

  return result
}