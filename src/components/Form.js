import React, { Component } from 'react';
import styled from 'styled-components';
import AnywhereCard from './AnywhereCard';
import LiquidCard from './LiquidCard';
import StudentCard from './StudentCard';

const StyledInput = styled.input`
  @media only screen and (max-width: 400px) {
    width: 85%;
  }

  width: 50%;
  margin-top: 0.5rem;
  border: 0.1rem solid black;
  border-radius: 0.4rem;
  padding: 0.5rem;
`;

const CardWrapper = styled.div`
  @media only screen and (max-width: 400px) {
    width: 85%;
  }

  width: 50%;
  margin: 1rem;
`;

const FormWrapper = styled.form`
  margin: 1rem;
  width: 80%;
  border-radius: 1rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const CreditTotal = styled.h3`
  margin: 1rem;
`;

const Title = styled.h1`
  margin: 1rem;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      income: '',
      anywhereSelected: false,
      liquidSelected: false,
      studentSelected: false,
      totalCredit: 0
    };
  }

  anywhereCredit = 300;
  liquidCredit = 3000;
  studentCredit = 1200;

  handleStatusChange = event => {
    this.setState({
      status: event.target.value
    });
  };

  handleIncomeChange = event => {
    this.setState({
      income: event.target.value
    });
  };

  selectAnywhereCard = () => {
    this.setState({
      anywhereSelected: true,
      totalCredit: this.state.totalCredit + this.anywhereCredit
    });
  };

  selectLiquidCard = () => {
    this.setState({
      liquidSelected: true,
      totalCredit: this.state.totalCredit + this.liquidCredit
    });
  };

  selectStudentCard = () => {
    this.setState({
      studentSelected: true,
      totalCredit: this.state.totalCredit + this.studentCredit
    });
  };

  render() {
    return (
      <>
        <FormWrapper onSubmit={this.handleSubmit}>
          <FormField>
            Name:
            <StyledInput
              type="text"
              name="name"
              onChange={this.handleNameChange}
            />
          </FormField>
          <FormField>
            Date of Birth:
            <StyledInput
              type="text"
              name="dob"
              onChange={this.handleDobChange}
              placeholder="dd/mm/yy"
            />
          </FormField>
          <FormField>
            Employment Status:
            <StyledInput
              type="text"
              name="status"
              value={this.state.status}
              onChange={this.handleStatusChange}
              placeholder="full/part time or student"
            />
          </FormField>
          <FormField>
            House Number:
            <StyledInput
              type="text"
              name="house"
              onChange={this.handleHouseChange}
            />
          </FormField>
          <FormField>
            Postcode:
            <StyledInput
              type="text"
              name="postcode"
              onChange={this.handlePostcodeChange}
            />
          </FormField>
          <FormField>
            Annual Income £:
            <StyledInput
              type="text"
              name="income"
              value={this.state.income}
              onChange={this.handleIncomeChange}
            />
          </FormField>
        </FormWrapper>
        <Title>The best cards for you</Title>
        <CardWrapper>
          <AnywhereCard
            user={this.state}
            selectAnywhereCard={this.selectAnywhereCard}
            selected={this.state.anywhereSelected}
            anywhereCredit={this.anywhereCredit}
          />
          {this.state.income >= 17000 && (
            <LiquidCard
              user={this.state}
              selectLiquidCard={this.selectLiquidCard}
              selected={this.state.liquidSelected}
              liquidCredit={this.liquidCredit}
            />
          )}
          {this.state.status === 'student' && (
            <StudentCard
              user={this.state}
              selectStudentCard={this.selectStudentCard}
              selected={this.state.studentSelected}
              studentCredit={this.studentCredit}
            />
          )}
        </CardWrapper>
        <CreditTotal>
          Total credit available to you: £{this.state.totalCredit}
        </CreditTotal>
      </>
    );
  }
}

export default Form;
