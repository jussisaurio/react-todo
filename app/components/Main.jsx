var React = require('react');
var uuid = require('node-uuid');
var SearchTodos = require('SearchTodos');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var Main = React.createClass({

	handleSearch: function(showCompleted, text){
		this.setState({
			showCompleted: showCompleted,
			searchtext: text.toLowerCase()
		});
	},

	handleAddTodo: function(text){
		
		this.setState({
			todos: [...this.state.todos, {id: uuid(), text: text, completed: false}]
		});
	},

	handleToggle: function(id) {

		var {todos} = this.state;

		var changingTodo = todos.filter(function (todo) {
    		return todo.id === id;
		})[0];

		if(todos[todos.indexOf(changingTodo)].completed===false) todos[todos.indexOf(changingTodo)].completed=true;
		else todos[todos.indexOf(changingTodo)].completed=false;

		this.setState({

			todos: todos
		});
	},

	getInitialState: function(){

		return {
			showCompleted: false,
			todos: [
			{id: uuid(), text:'käy paskal', completed: true},
			{id: uuid(), text:'käy kusel', completed: true},
			{id: uuid(), text:'syö', completed: false}
			]
		}
	},

	render: function() {

		var {todos, showCompleted} = this.state;

		return (
			<div>
			<h1>Noni</h1>
			<SearchTodos onSearch={this.handleSearch}/>
			<TodoList showCompleted={showCompleted} handleToggle={this.handleToggle} todos={todos}/>
			<AddTodo storeFormData={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = Main;