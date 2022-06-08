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
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

export default TodoItem;
