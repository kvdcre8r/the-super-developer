import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-scroll'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyledButton = styled.button`
  animation: ${fadeIn} 1s ease-in-out;
  animation-delay: 8s;
  animation-fill-mode: forwards;
  opacity: 0;
  animation-fill-mode: forwards;
  font-size: 32px;
  font-family: 'spyagency';
  padding: 10px;
  border-width: 1px 2px 2px 1px;
  border-style: solid;
  border-color: yellow;
  border-radius: 5px;
  background-color: rgb(0, 25, 117);
  position: relative;
  top: 50px;
  color: yellow;
  text-shadow: -1px 0 darkblue, 0 1px darkblue, 1px 0 darkblue, 0 -1px darkblue;

  cursor: pointer;
  &:hover {
    background-color: blue;
  }
  @media screen and (max-width: 415px) {
    font-size: 20px;
  }
`

const Button = ({ to, text }) => {
  return (
    <Link to={to} smooth={true} duration={500}>
      <StyledButton>{text}</StyledButton>
    </Link>
  )
}

export default Button
