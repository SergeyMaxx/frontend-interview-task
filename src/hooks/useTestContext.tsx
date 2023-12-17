import React, {ReactNode, useContext, useEffect, useState} from 'react'
import {ISort, Site, Test} from '../types'
import testsService from '../services/tests.service'
import sitesService from '../services/sites.service'
import {orderBy} from '../utils/orderBy'

interface TestProviderProps {
  children: ReactNode
}

export interface TestContextType {
  sortedTest: Test[]
  setTests: React.Dispatch<React.SetStateAction<Test[] | undefined>>
  sites: Site[] | undefined
  setSites: React.Dispatch<React.SetStateAction<Site[] | undefined>>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  sortBy: ISort
  setSortBy: React.Dispatch<React.SetStateAction<ISort>>
}

const TestContext = React.createContext<TestContextType | null>(null)
export const UseTestContext = () => useContext(TestContext)

const TestProvider: React.FC<TestProviderProps> = ({children}) => {
  const [tests, setTests] = useState<Test[]>()
  const [sites, setSites] = useState<Site[]>()
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<ISort>({path: 'name', order: 'asc'})
  const [sortedTest, setSortedTest] = useState<Test[]>([])

  const downloadTests = async () => {
    setTests(await testsService.getTests())
  }

  const downloadSites = async () => {
    setSites(await sitesService.getSites())
  }

  useEffect(() => {
    downloadTests()
    downloadSites()
  }, [])

  useEffect(() => {
    if (tests && sites) {
      const filteredTest = search
        ? tests.filter(t => t.name.toLowerCase().includes(search.toLowerCase()))
        : tests

      setSortedTest(orderBy(filteredTest, sortBy.path as keyof Test, sortBy.order))
    }
  }, [tests, sites, search, sortBy])


  return (
    <TestContext.Provider value={{
      sortedTest,
      setTests,
      sites,
      setSites,
      search,
      setSearch,
      sortBy,
      setSortBy
    }}>
      {tests && sites ? children : <h3>Loading...</h3>}
    </TestContext.Provider>
  )
}

export default TestProvider