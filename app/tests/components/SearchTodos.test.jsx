var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var SearchTodos = require('SearchTodos');

describe('SearchTodos', () => {

	it ('should exist', ()=>{
		expect (SearchTodos).toExist();
	});

	it ('should call onSearch function when textarea value changes', ()=>{
		var spy = expect.createSpy();
		var searchtodos = TestUtils.renderIntoDocument(<SearchTodos onSearch={spy}/>);

		var $el = $(ReactDOM.findDOMNode(searchtodos));

		searchtodos.refs.searchtext.value='a';

		TestUtils.Simulate.change(searchtodos.refs.searchtext);
		// without [0] would just get the jquery selector, [0] gets the first element of array ie actual dom node
		
		expect (spy).toHaveBeenCalledWith(false, 'a');
	});

	it ('should call onSearch function when checkbox value changes', ()=>{
		var spy = expect.createSpy();
		var searchtodos = TestUtils.renderIntoDocument(<SearchTodos onSearch={spy}/>);

		var $el = $(ReactDOM.findDOMNode(searchtodos));

		searchtodos.refs.showCompleted.checked=true;

		TestUtils.Simulate.change(searchtodos.refs.showCompleted);
		// without [0] would just get the jquery selector, [0] gets the first element of array ie actual dom node
		
		expect (spy).toHaveBeenCalledWith(true, '');
	});

});