var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

	render: function() {

		var {todos} = this.props;

		var renderTodos = () => {

			return todos.map((todo) => {
				return (
					<Todo {...todo} key={todo.id}/> // 1. Spread operator. 2. key is for react internal tracking
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