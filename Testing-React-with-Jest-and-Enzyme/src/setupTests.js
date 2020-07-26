// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import Enzyme, { shallow, render, mount, configure } from 'enzyme'
import '@testing-library/jest-dom/extend-expect'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'
import sinon from 'sinon'

/**
 * Set the default serializer for jest to be the from enzyme-to-json
 * This produces an easier to read serialized format.
 */
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// React 16 Enzyme adaptor
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions avilable in all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;