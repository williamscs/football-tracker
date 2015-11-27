import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Home from '../../components/Home'

function setup() {
  const component = TestUtils.renderIntoDocument(<Home />)
  return {
    component: component
  }
}

describe('Home component', function() {

  // beforeEach(function() {
  //   home = TestUtils.renderIntoDocument(<Home/>);
  // });

  it('contains the word React', function() {
    const { component } = setup()
    expect(React.findDOMNode(component).textContent).toContain('React');
  });

  // it('has a list of included items', function() {
  //   const items = TestUtils.scryRenderedDOMComponentsWithTag(home, 'li');
  //   expect(items.length).toBeGreaterThan(0);
  // });
});
