import React, { useState, useEffect } from "react";
import "../../styles/App.css";
import Form from "./Form";
import Todolist from "./Todolist";

const App = () => {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	useEffect(() => {
		filterHandler();
	}, [todos]);

	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter(todo => todo.completed === true));
				break;
			case "uncompleted":
				setFilteredTodos(
					todos.filter(todo => todo.completed === false)
				);
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	return (
		<div className="App">
			<header>
				<h1>My To Do List</h1>
			</header>
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
				setStatus={setStatus}
				
			/>
			<Todolist todos={todos} setTodos={setTodos} setFilteredTodos={setFilteredTodos} />
		</div>
	);
};
export default App;
