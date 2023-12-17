import {UseTestContext} from '../hooks/useTestContext'

const NotMatchPage = () => {
  const {setSearch} = UseTestContext()!

  return (
    <div className="not-match-wrap">
      <div className="not-match-page">
        <p className="">Your search did not match any results.</p>
      </div>
      <button className="btn results" onClick={() => setSearch('')}>
        Reset
      </button>
    </div>
  )
}

export default NotMatchPage