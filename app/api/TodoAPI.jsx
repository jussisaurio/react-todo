var uuid = require('node-uuid');
var $ = require('jquery');

module.exports = {

	setTodos: function(todos) {
		if (!$.isArray(todos)) return;

		localStorage.setItem('todos', JSON.stringify(todos));
		return todos;
	},

	getTodos: function() {

		var stringTodos = localStorage.getItem('todos');

		var todos = [];

		try {
			todos = JSON.parse(stringTodos);
		}
		catch (e) {
			console.log('Error: ' + e);
		}

		return $.isArray(todos) ? todos : [];
	}
};