var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {

	it ('should exist', ()=>{
		expect (Todo).toExist();
	});

	it ('should call onToggle prop with id on click', ()=>{

		var spy=expect.createSpy();
		var mockTodo={id:555, text:'test', completed:true};

		var todo = TestUtils.renderIntoDocument(<Todo {...mockTodo} onToggle={spy}/>);

		$el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);

		expect (spy).toHaveBeenCalledWith(555);
	});
});