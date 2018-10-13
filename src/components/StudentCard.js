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
  margin: 2rem;
`;

const Wrapper = styled.div``;

class StudentCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        {this.props.user.status === 'student' && (
          <Box>
            <h2>Student Life</h2>
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
