import React, { Component } from "react";

import TodoItem from "./TodoItem";
import "./style.css"

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.manageEnter = this.manageEnter.bind(this);
    this.state = {
      list: [],
      inputValue: ''
    }
  }

  manageEnter(e) {
    if(e.keyCode === 13) {
      this.handleBtnClick()
    }
  }

  handleBtnClick() {
    if (this.state.inputValue === 0 || !!this.state.inputValue)
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }))
  }

  handleInputChange(e) {
		const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleDelete(index) {
    this.setState((prevState) => {
			const list = [...prevState.list]
    	list.splice(index, 1)
			return {list}
		})
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            deleteItem={this.handleDelete} 
            key={index} 
            content={item} 
            index={index} 
          />
        )
      })
    )
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="task">Task name</label>
          <input id="task" className="input-area" value={this.state.inputValue} onChange={this.handleInputChange} onKeyDown={this.manageEnter} />
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </div>
    )
  }
}

export default TodoList;
