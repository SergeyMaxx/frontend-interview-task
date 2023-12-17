import {IStatus} from './status'
import {useNavigate} from 'react-router-dom'

const Button = ({status, id}: IStatus) => {
  const navigate = useNavigate()
  const finOrRes = status === 'DRAFT' ? 'finalize' : 'results'

  return (
    <button
      onClick={() => navigate(`/${finOrRes}/${id}`)}
      className={'btn ' + finOrRes}
    >
      {finOrRes}
    </button>
  )
}

export default Button