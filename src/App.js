import React from 'react';
import { Table } from './Table.js'
import './style.scss';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          "Identification number": "34",
          "Name": "Joqmo",
          "Gender": "female",
          "Risk": "BITES",
          "Hair length": "6.2000000000",
          "IQ": "98",
          "Admission date": "Mon Dec 13 00:00:00 CET 1993",
          "Last breakdown": "Wed Dec 24 07:14:50 CET 2014",
          "Yearly fee": "67035",
          "Knows the Joker?": "true"
        },
        {
          "Identification number": "38",
          "Name": "Julliane",
          "Gender": "m",
          "Risk": "EVIL_EYE",
          "Hair length": "1.0000000000",
          "IQ": "100",
          "Admission date": "Wed Aug 05 00:00:00 CEST 1992",
          "Last breakdown": "Wed Oct 29 12:59:39 CET 2014",
          "Yearly fee": "57167",
          "Knows the Joker?": "true"
        }
      ]
    }
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
