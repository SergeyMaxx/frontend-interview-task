import React from 'react'
import {UseTestContext} from '../hooks/useTestContext'
import {useNavigate, useParams} from 'react-router-dom'
import back from '../assets/back.svg'

type TestPageProps = {
  header: string
}

const TestPage = ({header}: TestPageProps) => {
  const {sortedTest} = UseTestContext()!
  const {testId} = useParams()
  const navigate = useNavigate()
  const findById = sortedTest.find(s => s.id === +testId!)

  return (
    <div className="container res">
      <div>
        <h1 className="page-header">{header}</h1>
        <p className="page-name">{findById && findById.name}</p>
      </div>
      <div className="back-wrap" onClick={() => navigate('/')}>
        <img src={back} alt="back" />
        <button className="back">
          Back
        </button>
      </div>
    </div>
  )
}

export default TestPage