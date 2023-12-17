import {formatString} from '../utils/formatString'

export interface IStatus {
  status: string
  id?: number
}

const Status = ({status}: IStatus) => {
  return (
    <span className={'status ' + status}>
      {formatString(status)}
    </span>
  )
}

export default Status