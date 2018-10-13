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

class AnywhereCard extends Component {
  state = {};

  render() {
    return (
      <Box>
        <h2>Anywhere Card</h2>
        <p>Apr: 33.9%</p>
        <p>Balance Transfer Offer Duration: 0 months</p>
        <p>Purchase Offer Duration: 0 Months</p>
        <p>Credit Available: £300</p>
      </Box>
    );
  }
}

export default AnywhereCard;
