import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 0.1rem solid black;
  display: flex;
  flex-direction: column;
  text-color: black;
  border-radius: 1.25rem;
  padding: 1rem;
  margin-top: 1rem;
`;

const Wrapper = styled.div``;

const CardName = styled.div`
  display: flex;
  padding-left: 0.5rem;
  border: 0.1rem solid black;
  border-radius: 1.25rem;
  margin: 1rem 0 1rem 0;
  cursor: pointer;
  color: ${({ selected }) => (selected ? 'black' : 'white')};
  background-color: ${({ selected }) => (selected ? 'white' : 'grey')};
`;

CardName.displayName = 'StudentCardName';

class StudentCard extends Component {
  render() {
    const { selectStudentCard, selected, studentCredit } = this.props;
    return (
      <Wrapper>
        <CardName onClick={selectStudentCard} selected={selected}>
          <h2>Student Life</h2>
        </CardName>
        {!selected && (
          <Box>
            <p>Apr: 18.9%</p>
            <p>Balance Transfer Offer Duration: 0 months</p>
            <p>Purchase Offer Duration: 6 Months</p>
            <p>Credit Available: £{studentCredit}</p>
          </Box>
        )}
      </Wrapper>
    );
  }
}

export default StudentCard;
