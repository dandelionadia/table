import React from 'react';

import { Table } from './Table.js'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          name: 'name name',
          number: '3'
        },
        {
          name: 'no name',
          number: '99'
        }
      ]
    }
  }

  componentDidMount() {
    // get data from backend
    fetch('http://localhost:3004/data').then((response) => {
      // change data format to json
      return response.json()
    }).then((data) => {
      // change state
      this.setState({
        data: data
      })
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="App" >
        <Table data={data} />
      </div>
    );
  }
}

export { App };
