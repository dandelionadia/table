import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

class TableRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    handleRowClick = () => {
        const { isOpen } = this.state
        this.setState({
            isOpen: !isOpen
        })
    }

    render() {
        const { data: row, renderChildren } = this.props
        const { isOpen } = this.state
        const hasChildren = row.kids && Object.keys(row.kids).length > 0

        return (
            <>
                <tr className="table__row">
                    <td onClick={this.handleRowClick}>{hasChildren && (isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />)}</td>

                    {Object.values(row.data).map((item) => (
                        <td>{item}</td>
                    ))}
                </tr>
                {hasChildren && isOpen && renderChildren(row.kids)}
            </>
        )
    }
}

export { TableRow }