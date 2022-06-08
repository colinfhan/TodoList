import React, {Component} from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }

    render() {
        const { content } = this.props;
        return (
            <li onClick={this.handleDelete}>{content}</li>
        )
    }

}

TodoItem.propTypes = {
    content: PropTypes.string.isRequired,
    deleteItem: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

TodoItem.defaultProps = {
    content: 'Default content'
}

export default TodoItem;
