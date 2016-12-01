var React = require('react');
var Todo = require('Todo');

var AddTodo = React.createClass({

	handleOnSubmit: function(e){
		e.preventDefault();

		var todotext = this.refs.todotext.value;
		if (todotext.length>0) {
			this.refs.todotext.value='';
			this.props.storeFormData(todotext);
		}
		else this.refs.todotext.focus();
	},

	render: function() {

		return (
			<div>
			<form onSubmit={this.handleOnSubmit}>
			<input type="text" placeholder="Enter task to add to list" ref="todotext" />
			<button className="button">Add task</button>
			</form>
			</div>
		);
	}
});

module.exports = AddTodo;