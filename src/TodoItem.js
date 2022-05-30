import React, {Component} from "react";

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

export default TodoItem;
