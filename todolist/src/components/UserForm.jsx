function UserForm ({todoName,addTaskInTodo,updateState}) {
	return (<><input type="text" value={todoName} onChange={(e) => updateState(e)}/>
	<button className='buttonToAdd' onClick={() => addTaskInTodo()}>Add Todo</button></>)
}

export default UserForm