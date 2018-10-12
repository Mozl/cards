import React, { Component } from 'react';
import '../App.css';
import Form from './Form';
import styled from 'styled-components';
import Card from './Card';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: left;

  @media only screen and (max-width: 400px) {
    width: 70%;
  }
`;

class App extends Component {
  state = {
    users: {}
  };

  addFish = () => {
    const users = { ...this.state.users };
  };

  render() {
    return (
      <>
        <FormWrapper className="FormWrapper">
          <Form />
        </FormWrapper>
        <Card addFish={this.addFish} />
      </>
    );
  }
}

export default App;
