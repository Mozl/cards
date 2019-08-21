import React, { Component } from 'react';
import Form from './components/Form';
import styled from 'styled-components';


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
        <FormWrapper className="FormWrapper">
          <Form />
        </FormWrapper>
    );
  }
}

export default App;
