import React from 'react';

class Table extends React.Component {

    render() {

        return (
            <div>
                {this.props.data.map((item) => {
                    return (
                        <ul>
                            <li>{item.name}</li>
                            <li>{item.number}</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}

export { Table }