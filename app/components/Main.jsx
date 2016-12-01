var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var Main = React.createClass({

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
			noOfTodos: 0,
			todos: [{}]
		}
	},

	render: function() {

		var {todos} = this.state;

		return (
			<div>
			<h1>Noni</h1>
			<TodoList todos={todos}/>
			<AddTodo storeFormData={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = Main;