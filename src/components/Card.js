import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 0.1rem solid black;
  width: 15rem;
  height: 10rem;
  text-color: black;
  border-radius: 1.25rem;
  padding-bottom: 1rem;
  margin: 2rem;
`;

class Card extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Box>Info goes here</Box>;
  }
}

export default Card;
