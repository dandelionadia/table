import React from 'react';
import { Table } from './Table.js'
import './style.scss';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          data: {
            "Identification number": "34",
            "Name": "Joqmo",
            "Gender": "female",
            "Risk": "BITES",
            "Hair length": "6.2000000000",
            "IQ": "98",
            "Admission date": "Mon Dec 13 00:00:00 CET 1993",
            "Last breakdown": "Wed Dec 24 07:14:50 CET 2014",
            "Yearly fee": "67035",
            "Knows the Joker?": "true",
          },
          kids: {
            name: {
              "records": [
                {
                  "data": {
                    "Relative ID": "1007",
                    "Patient ID": "34",
                    "Is alive?": "true",
                    "Frequency of visits": "29"
                  },
                  kids: {
                    has_fone: {
                      records: [
                        {
                          data: {
                            "Relative ID": "1007",
                            "Patient ID": "34",
                            "Is alive?": "true",
                            "Frequency of visits": "29"
                          },
                          kids: {}
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
        },
        {
          data: {
            "Identification number": "34",
            "Name": "Joqmo",
            "Gender": "female",
            "Risk": "BITES",
            "Hair length": "6.2000000000",
            "IQ": "98",
            "Admission date": "Mon Dec 13 00:00:00 CET 1993",
            "Last breakdown": "Wed Dec 24 07:14:50 CET 2014",
            "Yearly fee": "67035",
            "Knows the Joker?": "true",
          }
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
