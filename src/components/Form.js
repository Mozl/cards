import React, { Component } from 'react';
import styled from 'styled-components';
import AnywhereCard from './AnywhereCard';
import LiquidCard from './LiquidCard';
import StudentCard from './StudentCard';

const StyledInput = styled.input`
  margin: 0.5rem;
  align-items: left;
`;

const CardWrapper = styled.div`
  width: 100%;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      dob: '',
      status: '',
      house: '',
      postcode: '',
      income: '',
      anywhereSelected: false,
      liquidSelected: false,
      studentSelected: false
    };
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleDobChange = event => {
    this.setState({
      dob: event.target.value
    });
  };

  handleStatusChange = event => {
    this.setState({
      status: event.target.value
    });
  };

  handleHouseChange = event => {
    this.setState({
      house: event.target.value
    });
  };

  handlePostcodeChange = event => {
    this.setState({
      postcode: event.target.value
    });
  };

  handleIncomeChange = event => {
    this.setState({
      income: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  submitUserDetails = e => {
    e.preventDefault();

    const user = {
      name: this.state.name,
      dob: this.state.dob,
      status: this.state.status,
      house: this.state.house,
      postcode: this.state.postcode,
      income: this.state.income
    };
    this.props.addUser(user);
  };

  selectAnywhereCard = () => {
    this.setState({ anywhereSelected: true });
  };

  selectLiquidCard = () => {
    this.setState({ liquidSelected: true });
  };

  selectStudentCard = () => {
    this.setState({ studentSelected: true });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <StyledInput
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            Date of Birth:
            <StyledInput
              type="text"
              name="dob"
              value={this.state.dob}
              onChange={this.handleDobChange}
            />
          </label>
          <label>
            Employment Status:
            <StyledInput
              type="text"
              name="status"
              value={this.state.status}
              onChange={this.handleStatusChange}
            />
          </label>
          <label>
            House Number:
            <StyledInput
              type="text"
              name="house"
              value={this.state.house}
              onChange={this.handleHouseChange}
            />
          </label>
          <label>
            Postcode:
            <StyledInput
              type="text"
              name="postcode"
              value={this.state.postcode}
              onChange={this.handlePostcodeChange}
            />
          </label>
          <label>
            Annual Income:
            <StyledInput
              type="text"
              name="income"
              value={this.state.income}
              onChange={this.handleIncomeChange}
            />
          </label>
        </form>
        <h1>The best cards for you</h1>
        <CardWrapper>
          <AnywhereCard
            user={this.state}
            selectAnywhereCard={this.selectAnywhereCard}
            selected={this.state.anywhereSelected}
          />
          {this.state.income >= 17000 && (
            <LiquidCard
              user={this.state}
              selectLiquidCard={this.selectLiquidCard}
              selected={this.state.liquidSelected}
            />
          )}
          {this.state.status === 'student' && (
            <StudentCard
              user={this.state}
              selectStudentCard={this.selectStudentCard}
              selected={this.state.studentSelected}
            />
          )}
        </CardWrapper>
      </>
    );
  }
}

export default Form;
