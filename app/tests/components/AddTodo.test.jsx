var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {

	it ('should exist', ()=>{
		expect (AddTodo).toExist();
	});

	it ('should call storeFormData function when given valid string', ()=>{
		var spy = expect.createSpy();
		var addtodo = TestUtils.renderIntoDocument(<AddTodo storeFormData={spy}/>);

		var $el = $(ReactDOM.findDOMNode(addtodo));

		addtodo.refs.todotext.value='test';

		TestUtils.Simulate.submit($el.find('form')[0]); 
		// without [0] would just get the jquery selector, [0] gets the first element of array ie actual dom node
		
		expect (spy).toHaveBeenCalledWith('test');
	});

	it ('should NOT call storeFormData function when given invalid string', ()=>{
		var spy = expect.createSpy();
		var addtodo = TestUtils.renderIntoDocument(<AddTodo storeFormData={spy}/>);

		var $el = $(ReactDOM.findDOMNode(addtodo));

		addtodo.refs.todotext.value='';

		TestUtils.Simulate.submit($el.find('form')[0]); 
		// without [0] would just get the jquery selector, [0] gets the first element of array ie actual dom node
		
		expect (spy).toNotHaveBeenCalled();
	});

});