import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';


describe("Counter Testing", () => {

  let wrapper  =  shallow(<Counter />);
  
  test('renders learn react link', () => {
    //console.log(wrapper.debug());
    expect(wrapper.find("h1").text()).toContain("React Counter App");
  });

  test("render a button with test of `increment`", () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });

  test("render the initial value of state in a div", () => {
     expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

});


