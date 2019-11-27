import React from 'react';
import './App.css';
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

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
      {(result) => {
        if (result.loading) {
          return <div>Loading</div>
        }
        return (
          <div>
            {result.data.allPersons.map(p => p.name).join(', ')}
          </div>
        )
      }}
    </Query>
  )
}

export default App;
