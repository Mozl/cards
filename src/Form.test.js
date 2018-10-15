import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer.create(<Form />);
  expect(tree).toMatchSnapshot();
});

it('shows student card when student entered as Employment Status', () => {
  const wrapper = mount(<Form />);
  const statusField = wrapper.children().find('input.status');
  statusField.simulate('keydown', { which: 's' });
  statusField.simulate('keydown', { which: 't' });
  statusField.simulate('keydown', { which: 'u' });
  statusField.simulate('keydown', { which: 'd' });
  statusField.simulate('keydown', { which: 'e' });
  statusField.simulate('keydown', { which: 'n' });
  statusField.simulate('keydown', { which: 't' });
  expect(wrapper.prop('value').length).toEqual(7);
});

it('finds anywhere card', () => {
  const wrapper = mount(<Form />);
  expect(wrapper.find('AnywhereCard').length).toEqual(1);
});
