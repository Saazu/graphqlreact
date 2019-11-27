import React from 'react';
import './App.css';
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'

const query = gql`
{
  allPersons {
    name,
    phone,
    address {
      street,
      city
    }
    id
  }
}
`

const App = (props) => {
  const results = useQuery(query)
  console.log(results)
  return (
    <div>
      test
    </div>
  )
}

export default App;
