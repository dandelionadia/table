import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosTrash } from "react-icons/io"

class TableRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            remove: false
        }
    }

    handleRowClick = () => {
        const { isOpen } = this.state
        this.setState({
            isOpen: !isOpen
        })
    }

    onRemove = () => {
        this.setState({
            remove: true
        })
    }

    render() {
        const { data: row, renderChildren } = this.props
        const { isOpen, remove } = this.state
        const hasChildren = row.kids && Object.keys(row.kids).length > 0

        if (remove) {
            return null
        }

        return (
            <>
                <tr className="table__row">
                    <td onClick={this.handleRowClick}>{hasChildren && (isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />)}</td>

                    {Object.values(row.data).map((item) => (
                        <td>{item}</td>
                    ))}
                    <td onClick={this.onRemove}><IoIosTrash /></td>
                </tr>
                {hasChildren && isOpen && renderChildren(row.kids)}
            </>
        )
    }
}

export { TableRow }