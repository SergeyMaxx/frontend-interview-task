import {get} from '../../utils/getData'
import {Site, Test} from '../../types'
import {IColumns} from '../testsTable'
import {ITableProps} from './table'
import {UseTestContext} from '../../hooks/useTestContext'

const TableBody = ({columns}: ITableProps) => {
  const {sortedTest, sites} = UseTestContext()!

  const renderContent = (item: Test | Site, column: keyof IColumns): any => {
    if (column === 'site' && 'siteId' in item) {
      const site = sites?.find(s => s.id === item.siteId)
      return site
        ? site.url.replace(/(https?:\/\/)?(www\.)?/, ' ')
        : 'No site'
    }

    const component = columns[column].component

    if (component) {
      if (typeof component === 'function') {
        return component(item as Test)
      }
      return component
    }
    return get(item, columns[column].path)
  }

  return (
    <tbody>
    {sortedTest.map(item => (
      <tr className="table-row" key={item.id}>
        {Object.keys(columns).map(column => (
          <td className="table-type" key={column}>
            {renderContent(item, column as keyof IColumns)}
          </td>
        ))}
      </tr>
    ))}
    </tbody>
  )
}

export default TableBody