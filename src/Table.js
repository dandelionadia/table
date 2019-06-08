import React from 'react';
import { TableRow } from './TableRow'


class Table extends React.Component {

    renderHeaders = () => {
        const takeData = this.props.data[0].data
        const keys = Object.keys(takeData)
        return (
            <tr>
                <th width="10"></th>
                {keys.map((key) => (
                    <th>{key}</th>
                ))}
            </tr>
        )
    }

    renderChild = (kids) => {
        const childHeading = Object.keys(kids)[0]
        return (
            <tr>
                <td></td>
                <td colSpan="10" className="table--nested">
                    <h4 className="table__section">{childHeading}</h4>
                    <Table data={kids[childHeading].records} />
                </td>
            </tr>
        )
    }

    render() {

        return (
            <table className="table">
                {this.renderHeaders()}
                {this.props.data.map((row) => {

                    return (
                        <TableRow data={row} renderChildren={this.renderChild} />
                    )
                })}
            </table>
        )
    }
}

export { Table }