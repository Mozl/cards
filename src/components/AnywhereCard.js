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
  cursor: pointer;
`;

class AnywhereCard extends Component {
  render() {
    return (
      <Wrapper>
        <CardName onClick={this.props.selectAnywhereCard}>
          <h2>Anywhere Card</h2>
        </CardName>

        {this.props.selected && (
          <Box className="box">
            <p>Apr: 33.9%</p>
            <p>Balance Transfer Offer Duration: 0 months</p>
            <p>Purchase Offer Duration: 0 Months</p>
            <p>Credit Available: £{this.props.anywhereCredit}</p>
          </Box>
        )}
      </Wrapper>
    );
  }
}

export default AnywhereCard;
