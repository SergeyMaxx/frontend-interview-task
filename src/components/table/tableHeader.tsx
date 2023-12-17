import {IColumns} from '../testsTable'
import {ITableProps} from './table'
import {UseTestContext} from '../../hooks/useTestContext'
import arrow from '../../assets/arrow.svg'

type HandleSort = (item: string) => void

const TableHeader = ({columns}: ITableProps) => {
  const {sortBy, setSortBy} = UseTestContext()!

  const handleSort: HandleSort = item => {
    if (sortBy.path === item) {
      setSortBy({
        ...sortBy,
        order: sortBy.order === 'asc' ? 'desc' : 'asc'
      })
    } else {
      setSortBy({path: item, order: 'asc'})
    }
  }

  const createArrow = sortBy.order === 'asc'
    ? <img className="up down" src={arrow} alt="arrow" />
    : <img className="up" src={arrow} alt="arrow" />

  return (
    <thead>
      <tr>
        {Object.keys(columns).map(column => (
          <th
            className="table-header"
            key={column}
            onClick={() => handleSort(columns[column as keyof IColumns].path)}
          >
            {columns[column as keyof IColumns].name}
            {(sortBy.path === columns[column as keyof IColumns].path)
              ? createArrow
              : null
            }
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader