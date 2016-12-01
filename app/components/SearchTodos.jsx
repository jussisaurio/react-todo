var React = require('react');
var Todo = require('Todo');

var SearchTodos = React.createClass({

	handleOnChange: function(e){

		var searchtext = this.refs.searchtext.value;
		var showCompleted = this.refs.showCompleted.checked;
		
		this.props.onSearch(showCompleted, searchtext);
	},

	render: function() {

		return (
			<div>
			<div>
			<input type="search" onChange={this.handleOnChange} placeholder="Search for a task in the list" ref="searchtext" />
			</div>
			<div>
			<label>
			<input type="checkbox" onChange={this.handleOnChange} ref="showCompleted" />Show completed tasks
			</label>
			</div>
			</div>
		);
	}
});

module.exports = SearchTodos;