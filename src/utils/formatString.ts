export const formatString = (str: string): string => {
  return str.length > 3
    ? str.slice(0, 1) + str.slice(1).toLowerCase().replace('_', '-')
    : str
}