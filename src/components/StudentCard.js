import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 0.1rem solid black;
  width: 15rem;
  display: flex;
  flex-direction: column;
  text-color: black;
  border-radius: 1.25rem;
  padding-bottom: 1rem;
`;

const Wrapper = styled.div`
  margin: 1rem 0 0 1rem;
`;

const CardName = styled.div`
  display: flex;
  padding-left: 0.5rem;
  border: 0.1rem solid black;
  border-radius: 1.25rem;
  margin: 1rem 0 1rem 0;
`;

class StudentCard extends Component {
  render() {
    return (
      <Wrapper>
        <CardName onClick={this.props.selectStudentCard}>
          <h2>Student Life</h2>
        </CardName>
        {this.props.selected && (
          <Box>
            <p>Apr: 18.9%</p>
            <p>Balance Transfer Offer Duration: 0 months</p>
            <p>Purchase Offer Duration: 6 Months</p>
            <p>Credit Available: £1200</p>
          </Box>
        )}
      </Wrapper>
    );
  }
}

export default StudentCard;
