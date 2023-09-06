import React, { useState, useEffect } from 'react';
import axios from 'axios'
export const Todos = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const fetchTodos = async () => {
			const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
			console.log(data);
			setTodos(data);
		};

		fetchTodos();
	}, []);

	return (
		<div>
			<h2>Tareas</h2>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<input type="checkbox" checked={todo.completed} readOnly />
						<span>{todo.title}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
export default Todos;
