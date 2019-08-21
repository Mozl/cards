import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';
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

it('finds status input', () => {
  const wrapper = mount(<Form />);
  expect(wrapper.find('StyledInput.status').children().length).toEqual(1);
});

it('checks state when student written in status field', () => {
  const wrapper = mount(<Form />);
  wrapper.setState({ status: 'student' });
  expect(wrapper.state().status).toEqual('student');
});

it('Student card appears when student written in status field', () => {
  const wrapper = mount(<Form />);
  wrapper.setState({ status: 'student' });
  expect(wrapper.find('StudentCardName').length).toEqual(1);
});

it('finds anywhere card', () => {
  const wrapper = mount(<Form />);
  expect(wrapper.find('AnywhereCard').length).toEqual(1);
});

it('adds anywhere credit (£300) to total when card clicked', () => {
  const wrapper = mount(<Form />);
  wrapper
    .find('AnywhereCardName')
    .children()
    .simulate('click');
  const creditTotal = wrapper.find('CreditTotal').text();
  expect(creditTotal).toEqual('Total credit available to you: £300');
});

it('adds student credit (£1200) to total when card clicked', () => {
  const wrapper = mount(<Form />);
  wrapper.setState({ status: 'student' });
  wrapper
    .find('StudentCardName')
    .children()
    .simulate('click');
  const creditTotal = wrapper.find('CreditTotal').text();
  expect(creditTotal).toEqual('Total credit available to you: £1200');
});

it('adds liquid credit (£3000) to total when card clicked', () => {
  const wrapper = mount(<Form />);
  wrapper.setState({ income: 1231243342342 });
  wrapper
    .find('LiquidCardName')
    .children()
    .simulate('click');
  const creditTotal = wrapper.find('CreditTotal').text();
  expect(creditTotal).toEqual('Total credit available to you: £3000');
});

it('returns total back to £0 after toggling card off', () => {
  const wrapper = mount(<Form />);
  wrapper
    .find('AnywhereCardName')
    .children()
    .simulate('click');
  wrapper
    .find('AnywhereCardName')
    .children()
    .simulate('click');
  const creditTotal = wrapper.find('CreditTotal').text();
  expect(creditTotal).toEqual('Total credit available to you: £0');
});

it('returns total back to £0 after toggling card off', () => {
  const wrapper = mount(<Form />);
  wrapper.setState({ status: 'student' });
  wrapper
    .find('StudentCardName')
    .children()
    .simulate('click');
  wrapper
    .find('StudentCardName')
    .children()
    .simulate('click');
  const creditTotal = wrapper.find('CreditTotal').text();
  expect(creditTotal).toEqual('Total credit available to you: £0');
});

it('returns total back to £0 after toggling card off', () => {
  const wrapper = mount(<Form />);
  wrapper.setState({ income: 123123455345345 });
  wrapper
    .find('LiquidCardName')
    .children()
    .simulate('click');
  wrapper
    .find('LiquidCardName')
    .children()
    .simulate('click');
  const creditTotal = wrapper.find('CreditTotal').text();
  expect(creditTotal).toEqual('Total credit available to you: £0');
});
