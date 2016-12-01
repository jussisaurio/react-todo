var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {

	it ('should exist', ()=>{
		expect (TodoList).toExist();
	});

	it ('should render one todo component for each todos array item', ()=>{
		
		var todos =[{id:1, text:'s'},{id:2, text:'f'},{id:3, text:'a'}];

		var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todolist, Todo);
		// how many rendered components in todolist with type Todo
		// 'scry' means 'find all elements', apparently some kind of inside joke within the react team...?

		expect (todosComponents.length).toBe(todos.length);
	});
});