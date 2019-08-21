import React from 'react';
import Form from './components/Form';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions';

const FormWrapper = styled.div`
  @media only screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

const App = () => {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <>
      <FormWrapper className="FormWrapper">
        <Form />
      </FormWrapper>
      <div>Counter: {counter}</div>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <button onClick={() => dispatch(login())}>Log In</button>
      {isLogged ?
        <div>Information i shouldn't see if I'm not logged in</div>
        :
      ''
      }
    </>
  );
}

export default App;
