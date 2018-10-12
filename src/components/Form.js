import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 0.5rem;
  align-items: left;
`;

class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }

  nameRef = React.createRef();
  dobRef = React.createRef();
  statusRef = React.createRef();
  houseRef = React.createRef();
  postcodeRef = React.createRef();
  incomeRef = React.createRef();

  createUser = e => {
    e.preventDefault();

    const user = {
      name: this.nameRef.current.value,
      dob: parseFloat(this.dobRef.current.value),
      status: this.statusRef.current.value,
      house: this.houseRef.current.value,
      postcode: this.postcodeRef.current.value,
      income: this.incomeRef.current.value
    };
    this.props.addUser(user);
  };

  render() {
    return (
      <form>
        <label>
          Name:
          <StyledInput type="text" name="name" ref={this.nameRef} />
        </label>
        <label>
          Date of Birth:
          <StyledInput type="text" name="dob" ref={this.dobRef} />
        </label>
        <label>
          Employment Status:
          <StyledInput type="text" name="status" ref={this.statusRef} />
        </label>
        <label>
          House Number:
          <StyledInput type="text" name="house" ref={this.houseRef} />
        </label>
        <label>
          Postcode:
          <StyledInput type="text" name="postcode" ref={this.postcodeRef} />
        </label>
        <label>
          Annual Income:
          <StyledInput type="text" name="income" ref={this.incomeRef} />
        </label>
        <StyledInput type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
