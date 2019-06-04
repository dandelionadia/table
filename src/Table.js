import React from 'react';
import { IoIosArrowForward } from "react-icons/io";


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
                    const hasChildren = row.kids && Object.keys(row.kids).length > 0
                    return (
                        <>
                            <tr className="table__row">
                                <td>{hasChildren && <IoIosArrowForward />}</td>
                                {Object.values(row.data).map((item) => (
                                    <td>{item}</td>
                                ))}
                            </tr>
                            {hasChildren && this.renderChild(row.kids)}
                        </>
                    )
                })}
            </table>
        )
    }
}

export { Table }