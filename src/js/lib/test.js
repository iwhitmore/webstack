import React from 'react'
import TestUtils, {Simulate} from 'react-addons-test-utils'
import chai, {assert, expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {jsdom} from 'jsdom'


chai.should()
chai.use(sinonChai)


// Setup jsdom environment for browserless testing
if (typeof(window) === 'undefined') {
  const doc = jsdom('<!doctype html><html><body></body></html>')
  const win = doc.defaultView
  global.localStorage = {}
  global.sessionStorage = {}

  global.document = doc
  global.window = win

  propagateToGlobal(win)
}


function propagateToGlobal (window) {
  for (var key in window) {
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue
    global[key] = window[key]
  }
}


function render(element) {
  const node = TestUtils.renderIntoDocument(element)

  return {
    getClass: TestUtils.findRenderedDOMComponentWithClass.bind(null, node),
    getType: TestUtils.findRenderedComponentWithType.bind(null, node),
    getTag: TestUtils.findRenderedDOMComponentWithTag.bind(null, node),
    getClasses: TestUtils.scryRenderedDOMComponentsWithClass.bind(null, node),
    getTypes: TestUtils.scryRenderedComponentsWithType.bind(null, node),
    getTags: TestUtils.scryRenderedDOMComponentsWithTag.bind(null, node),
    node: node,
  }
}


export {
  React,
  chai,
  sinon,
  sinonChai,
  assert,
  expect,
  Simulate,
  render,
}
