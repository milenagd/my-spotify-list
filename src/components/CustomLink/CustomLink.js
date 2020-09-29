import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  padding: 0.3rem;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 1.4rem;
`;

const CustomLink = (props) => (
  <StyledLink to={props.to}>{props.children}</StyledLink>
);

export default CustomLink;
