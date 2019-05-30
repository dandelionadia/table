import React from 'react';

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
                    {this.props.data.map((row) => (
                        <tr className="table__row">
                            {Object.values(row).map((item) => (
                                <td>{item}</td>
                            ))}
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}

export { Table }