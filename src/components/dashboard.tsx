import TestsTable from './testsTable'
import {UseTestContext} from '../hooks/useTestContext'
import NotMatchPage from './notMatchPage'
import glass from '../assets/glass.svg'

const Dashboard = () => {
  const {search, setSearch, sortedTest} = UseTestContext()!

  return (
    <div className="container">
      <h1 className="dash-header">Dashboard</h1>
      <div className="dash-container">
        <label htmlFor="search">
          <img src={glass} alt="glass" />
          <input
            type="text"
            id="search"
            onChange={e => setSearch(e.target.value)}
            placeholder="What test are you looking for?"
            value={search}
          />
        </label>
        <span className="result-qty">{sortedTest.length} items</span>
      </div>
      {sortedTest.length
        ? <TestsTable />
        : <NotMatchPage />
      }
    </div>
  )
}
export default Dashboard