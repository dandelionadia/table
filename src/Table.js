import React from 'react';
import './table.scss'

class Table extends React.Component {

    renderheaders = () => {
        const foo = this.props.data[0]
        const keys = Object.keys(foo)
        return (
            <tr>
                {keys.map((key) => (
                    <th>{key}</th>
                ))}
            </tr>
        )
    }

    render() {

        return (
            <div>
                <table className="table">
                    {this.renderheaders()}
                </table>
            </div>
        )
    }
}

export { Table }