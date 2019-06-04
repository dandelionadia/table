import React from 'react';

class Table extends React.Component {
    renderHeaders = () => {
        const takeData = this.props.data[0].data
        const keys = Object.keys(takeData)
        return (
            <tr>
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
                <td colSpan="10" className="table--nested">
                    <h4>{childHeading}</h4>
                    <Table data={kids[childHeading].records} />
                </td>
            </tr>
        )
    }

    render() {

        return (
            <table className="table">
                {this.renderHeaders()}
                {this.props.data.map((row) => (
                    <>
                        <tr className="table__row">
                            {Object.values(row.data).map((item) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                        {
                            row.kids && Object.keys(row.kids).length > 0 && this.renderChild(row.kids)
                        }
                    </>
                ))}
            </table>
        )
    }
}

export { Table }