var React = require('react');

var TodoList = require('TodoList');

var Main = React.createClass({

	getInitialState: function(){

		return {
			todos: [{id: 1, text: 'masturbate'}, {id: 2, text: 'take a shit'}, {id: 3, text: 'wipe ass'}, {id: 4, text: 'suck dick'}]
		}
	},

	render: function() {

		var {todos} = this.state;

		return (
			<div>
			<h1>Noni</h1>
			<TodoList todos={todos}/>
			</div>
		);
	}
});

module.exports = Main;