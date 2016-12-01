var React = require('react');

var SearchTodos = require('SearchTodos');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var Main = React.createClass({

	handleSearch: function(completed, text){
		this.setState({
			showCompleted: completed,
			searchtext: text.toLowerCase()
		})
	},

	handleAddTodo: function(text){
		
		var {noOfTodos, todos} = this.state;
		noOfTodos++;
		todos.push({id: noOfTodos, text: text});

		this.setState({
			noOfTodos: noOfTodos,
			todos: todos
		});
	},

	getInitialState: function(){

		return {
			showCompleted: false,
			noOfTodos: 0,
			todos: [{}]
		}
	},

	render: function() {

		var {todos} = this.state;

		return (
			<div>
			<h1>Noni</h1>
			<SearchTodos onSearch={this.handleSearch}/>
			<TodoList todos={todos}/>
			<AddTodo storeFormData={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = Main;