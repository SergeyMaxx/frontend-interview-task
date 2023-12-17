import TableHeader from './tableHeader'
import TableBody from './tableBody'
import {IColumns} from '../testsTable'

export interface ITableProps {
  columns: IColumns
}

const Table = ({columns}: ITableProps) => {
  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableBody columns={columns} />
    </table>
  )
}

export default Table