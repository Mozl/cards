import React, { Component } from 'react';
import Form from './components/Form';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';

const FormWrapper = styled.div`
  @media only screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

class App extends Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <FormWrapper className="FormWrapper">
          <Form />
        </FormWrapper>
      </Provider>
    );
  }
}

export default App;
