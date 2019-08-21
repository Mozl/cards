import React from 'react';
import ReactDOM from 'react-dom';
import AnywhereCard from '../components/AnywhereCard';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AnywhereCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<AnywhereCard />);
  expect(tree).toMatchSnapshot();
});

it('prop selected changes', () => {
  const wrapper = mount(<AnywhereCard selected={false} />);
  wrapper.setProps({ selected: true });
  expect(wrapper.props().selected).toEqual(true);
});

it('has a credit of 300', () => {
  const wrapper = mount(<AnywhereCard selected={false} anywhereCredit={300} />);
  expect(wrapper.props().anywhereCredit).toBe(300);
});
