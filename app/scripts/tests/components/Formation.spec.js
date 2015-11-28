import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Formation from '../../components/Formation/Formation'

function setup() {
  const component = TestUtils.renderIntoDocument(<Formation />)
  return {
    component: component
  }
}

describe('Formation component', function() {

  // beforeEach(function() {
  //   Formation = TestUtils.renderIntoDocument(<Formation/>);
  // });

  it('contains the word React', function() {
    const { component } = setup()
    expect(React.findDOMNode(component).textContent).toContain('React');
  });

  // it('has a list of included items', function() {
  //   const items = TestUtils.scryRenderedDOMComponentsWithTag(Formation, 'li');
  //   expect(items.length).toBeGreaterThan(0);
  // });
});