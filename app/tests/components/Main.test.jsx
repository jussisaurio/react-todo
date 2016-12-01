var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Main = require('Main');
var Todo = require('Todo');
var TodoList = require('TodoList');

describe('Main', () => {

	it ('should exist', ()=>{
		expect (Main).toExist();
	});

	it ('should add todo to todos state, when handleAddTodo called', ()=>{

		var text = 'Saatana';

		var main = TestUtils.renderIntoDocument(<Main/>);

		main.setState({todos:[]});

		main.handleAddTodo(text);

		expect (main.state.todos[0].text).toBe('Saatana');
	});

	it ('handleToggle should toggle completed value when called', ()=>{

		var spy = expect.createSpy();

		var mockTodo={id:666, text:'test', completed:false};

		var main = TestUtils.renderIntoDocument(<Main/>);
		main.setState({todos: [mockTodo]});

		expect(main.state.todos[0].completed).toBe(false);

		main.handleToggle(666);

		expect(main.state.todos[0].completed).toBe(true);

	});
});