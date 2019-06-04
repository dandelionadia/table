import React from 'react';
import { Table } from './Table.js'
import './style.scss';
import DataJson from './data.json';

class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <Table data={DataJson} />
      </div>
    );
  }
}

export { App };
