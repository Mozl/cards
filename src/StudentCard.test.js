import React from 'react';
import ReactDOM from 'react-dom';
import StudentCard from './components/StudentCard';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StudentCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<StudentCard />);
  expect(tree).toMatchSnapshot();
});

it('prop selected changes', () => {
  const wrapper = mount(<StudentCard selected={false} />);
  wrapper.setProps({ selected: true });
  expect(wrapper.props().selected).toEqual(true);
});
