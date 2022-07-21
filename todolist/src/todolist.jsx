import React, { useState } from 'react';
import Todos from './mytodos';

const MyTodoList = () => {
	const [todos, setTodos] = useState([...Todos])
	const [todoName, setTodoName] = useState('')

	function AddToDoList() {
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
			<input type="text" value={todoName} onChange={(e) => updateTodoName(e)} />
			<button className='buttonToAdd' onClick={() => AddToDoList()}>Add Todo</button>
			<ul className='list'>
				{
					todos.map((todo) => {
						return <li key={todo.id} className={todo.complited ? 'statusTrue' : 'statusFalse'}>
							{todo.task} <div className='row'><button className='buttonForDelete' onClick={() => deleteElement(todo.id)}>DELETE</button>
								< button className='buttonToChangeStatus' onClick={() => updateStatus(todo.id)}>changeStatus</button></div></li>
					})
				}
			</ul >
		</div >
	)
}

export default MyTodoList