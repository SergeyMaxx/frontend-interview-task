import React from 'react'
import Table from './table/table'
import Status from './status'
import {Test} from '../types'
import {formatString} from '../utils/formatString'
import Button from './button'
import market from '../assets/market.png'
import delivery from '../assets/delivery.png'
import games from '../assets/games.png'

export interface IColumn {
  path: string
  name?: string
  component?: (prop: Test) => HTMLElement | React.ReactElement
}

export interface IColumns {
  name: IColumn
  type: IColumn
  status: IColumn
  site: IColumn
  button: IColumn
}

const TestsTable = () => {
  const columns: IColumns = {
    name: {
      path: 'name',
      name: 'name',
      component: (test: Test) => {
        const siteMarker = test.siteId === 1
          ? market
          : test.siteId === 2
            ? delivery
            : games

        return (
          <div className="name-wrap">
            <img src={siteMarker} alt="siteMarker" />
            <p className="table-name">{test.name}</p>
          </div>
        )
      }
    },
    type: {
      path: 'type',
      name: 'type',
      component: (test: Test) => (
        <p className="table-type">{formatString(test.type)}</p>
      )
    },
    status: {
      path: 'status',
      name: 'status',
      component: (status: Test) => <Status {...status} />
    },
    site: {
      path: 'siteId',
      name: 'site'
    },
    button: {
      path: 'button',
      component: (test: Test) => <Button {...test} />
    }
  }

  return <Table columns={columns} />
}

export default TestsTable