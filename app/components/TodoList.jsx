var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

	handleComplete: function(){

	},

	render: function() {

		var {todos, handleToggle, showCompleted} = this.props;

		var renderTodos = () => {

			if (showCompleted===false) {
				todos = todos.filter((todo) => {

					return todo.completed===false;
				});
			}

			return todos.map((todo) => {
				return (
					<Todo onToggle={handleToggle} key={todo.id} {...todo} /> // 1. Spread operator. 2. key is for react internal tracking
				);
			});
		};

		return (
			<div>
			{renderTodos()}
			</div>
		);
	}
});

module.exports = TodoList;