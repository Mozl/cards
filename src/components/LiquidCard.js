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

const Wrapper = styled.div``;

class LiquidCard extends Component {
  render() {
    const { selectLiquidCard, selected, liquidCredit } = this.props;
    return (
      <Wrapper>
        <CardName onClick={selectLiquidCard} selected={selected}>
          <h2>Liquid Life</h2>
        </CardName>
        {!selected && (
          <Box>
            <p>Apr: 33.9%</p>
            <p>Balance Transfer Offer Duration: 12 months</p>
            <p>Purchase Offer Duration: 6 Months</p>
            <p>Credit Available: £{liquidCredit}</p>
          </Box>
        )}
      </Wrapper>
    );
  }
}

export default LiquidCard;
