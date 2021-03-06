import React, { Component } from 'react';
import styled from 'styled-components';
import AnywhereCard from './AnywhereCard';
import LiquidCard from './LiquidCard';
import StudentCard from './StudentCard';

export const StyledInput = styled.input`
  @media only screen and (max-width: 400px) {
    width: 85%;
  }

  width: 50%;
  margin-top: 0.5rem;
  border: 0.1rem solid black;
  border-radius: 0.4rem;
  padding: 0.5rem;
`;

StyledInput.displayName = 'StyledInput';

const DropDown = styled.select`
  @media only screen and (max-width: 400px) {
    width: 85%;
  }

  width: 50%;
  margin-top: 0.5rem;
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

FormField.displayName = 'FormField';

const CreditTotal = styled.h3`
  margin: 1rem;
`;

CreditTotal.displayName = 'CreditTotal';

const Title = styled.h1`
  margin: 1rem;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      income: '',
      anywhereSelected: true,
      liquidSelected: true,
      studentSelected: true,
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
    const { anywhereSelected, totalCredit } = this.state;
    this.setState({
      anywhereSelected: !anywhereSelected,
      totalCredit: totalCredit + this.anywhereCredit
    });
    if (!anywhereSelected) {
      this.setState({
        totalCredit: totalCredit - this.anywhereCredit
      });
    }
  };

  selectLiquidCard = () => {
    const { liquidSelected, totalCredit } = this.state;
    this.setState({
      liquidSelected: !liquidSelected,
      totalCredit: totalCredit + this.liquidCredit
    });
    if (!liquidSelected) {
      this.setState({
        totalCredit: totalCredit - this.liquidCredit
      });
    }
  };

  selectStudentCard = () => {
    const { studentSelected, totalCredit } = this.state;
    this.setState({
      studentSelected: !studentSelected,
      totalCredit: totalCredit + this.studentCredit
    });
    if (!studentSelected) {
      this.setState({
        totalCredit: totalCredit - this.studentCredit
      });
    }
  };

  render() {
    const {
      handleSubmit,
      studentCredit,
      selectStudentCard,
      handleStatusChange,
      handleIncomeChange,
      liquidCredit,
      selectAnywhereCard,
      anywhereCredit,
      selectLiquidCard
    } = this;
    const {
      status,
      income,
      anywhereSelected,
      liquidSelected,
      studentSelected,
      totalCredit
    } = this.state;
    return (
      <>
        <FormWrapper onSubmit={handleSubmit}>
          <FormField>
            Name:
            <StyledInput type="text" name="name" />
          </FormField>
          <FormField>
            Date of Birth:
            <StyledInput type="text" name="dob" placeholder="dd/mm/yy" />
          </FormField>
          <FormField>
            Employment Status:
            <DropDown
              name="status"
              value={status}
              onChange={handleStatusChange}
            >
              <option>Select status</option>
              <option>Student</option>
              <option>Other</option>
            </DropDown>
          </FormField>
          <FormField>
            House Number:
            <StyledInput type="text" name="house" />
          </FormField>
          <FormField>
            Postcode:
            <StyledInput type="text" name="postcode" />
          </FormField>
          <FormField>
            Annual Income £:
            <StyledInput
              type="text"
              name="income"
              value={income}
              onChange={handleIncomeChange}
            />
          </FormField>
        </FormWrapper>
        <Title>The best cards for you</Title>
        <CardWrapper>
          <AnywhereCard
            className="anywhereCard"
            user={this.state}
            selectAnywhereCard={selectAnywhereCard}
            selected={anywhereSelected}
            anywhereCredit={anywhereCredit}
          />
          {income >= 17000 && (
            <LiquidCard
              user={this.state}
              selectLiquidCard={selectLiquidCard}
              selected={liquidSelected}
              liquidCredit={liquidCredit}
            />
          )}
          {status === 'Student' && (
            <StudentCard
              user={this.state}
              selectStudentCard={selectStudentCard}
              selected={studentSelected}
              studentCredit={studentCredit}
            />
          )}
        </CardWrapper>
        <CreditTotal className="creditTotal">
          Total credit available to you: £{totalCredit}
        </CreditTotal>
      </>
    );
  }
}

export default Form;
