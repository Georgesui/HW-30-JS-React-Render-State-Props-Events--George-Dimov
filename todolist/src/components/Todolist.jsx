import React, { useState } from 'react';
import Todos from './Todos';
import UserList from './UserList'
import UserForm from './UserForm';

const TodoList = () => {
	const [todos, setTodos] = useState([...Todos])
	const [todoName, setTodoName] = useState('')

	function addToDoList() {
		if (todoName !== '') {
			setTodos([...todos, { task: todoName, id: Math.floor(Math.random() * 100), complited: false }])
			setTodoName('');
		}
	}

	function updateTodoName(e) {
		setTodoName(e.target.value)
	}

	function updateStatus(id) {
		const newList = todos.map((elem) => {
			if (elem.id === id) {
				const updatedElement = {
					...elem,
					complited: !elem.complited
				}
				return updatedElement
			}
			return elem
		})
		setTodos(newList)
	}

	function deleteElement(id) {
		const listAfterDelete = todos.filter((el) => el.id !== id)
		setTodos(listAfterDelete)
	}


	return (
		<div className='container'>
			<UserForm todoName={todoName} addTaskInTodo = {addToDoList} updateState = {updateTodoName}></UserForm>
	<UserList todos={todos} onDelete={deleteElement} onChangeStatus ={updateStatus}></UserList>
		</div >
	)
}

export default TodoList