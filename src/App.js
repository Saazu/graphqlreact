import React from 'react';
import './App.css';
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Persons from './Persons'

const ALL_PERSONS = gql`
{
  allPersons {
    name,
    phone,
    id
  }
}
`

const App = () => {
  return (
    <Query query={ALL_PERSONS}>
      {(result) => <Persons result={result} />}
    </Query>
  )
}

export default App;
