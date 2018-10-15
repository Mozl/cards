import React from 'react';
import ReactDOM from 'react-dom';
import LiquidCard from './components/LiquidCard';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LiquidCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<LiquidCard />);
  expect(tree).toMatchSnapshot();
});

it('prop selected changes', () => {
  const wrapper = mount(<LiquidCard selected={false} />);
  wrapper.setProps({ selected: true });
  expect(wrapper.props().selected).toEqual(true);
});
