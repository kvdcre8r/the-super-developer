import React from 'react'
import styled, { keyframes } from 'styled-components'
import Button from './Button'

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const HeaderStyle = styled.header`
  text-shadow: 2px 2px 4px #000000;
  padding: 70px 30px 30px 30px;
  text-align: center;
  font-family: 'spyagency';
  color: rgb(0, 20, 94);

  .text-container {
    height: 90vh;
    text-shadow: -1px 0 lightgreen, 0 1px lightgreen, 1px 0 lightgreen,
      0 -1px lightgreen;

    h2:nth-child(1) {
      animation: ${slideIn} 1s ease-in-out;
      animation-delay: 1s;
      opacity: 0;
      animation-fill-mode: forwards;
    }

    h1 {
      animation: ${slideIn} 1s ease-in-out;
      animation-delay: 2.5s;
      opacity: 0;
      animation-fill-mode: forwards;
      font-family: 'spyagency';
      font-size: 3em;
      color: rgb(0, 17, 76);
      text-shadow: -1px 0 rgb(255, 119, 0), 0 2.5px rgb(255, 119, 0),
        2.5px 0 rgb(255, 119, 0), 0 -1px rgb(255, 119, 0);

      @media screen and (max-width: 500px) {
        font-size: 2.5em;
      }
      @media screen and (max-width: 400px) {
        font-size: 2em;
      }
      @media screen and (max-width: 320px) {
        font-size: 1.8em;
      }
    }

    h2:nth-child(3) {
      animation: ${slideIn} 1s ease-in-out;
      animation-delay: 4s;
      opacity: 0;
      animation-fill-mode: forwards;
    }

    h2 {
      text-shadow: -0.5px 0 lightgreen, 0 1px lightgreen, 1px 0 lightgreen,
        0 -0.5px lightgreen;
    }

    h3 {
      animation: ${slideIn} 1s ease-in-out;
      animation-delay: 5.5s;
      opacity: 0;
      animation-fill-mode: forwards;
      text-shadow: -0.5px 0 lightgreen, 0 1px lightgreen, 1px 0 lightgreen,
        0 -0.5px lightgreen;
      position: relative;
      top: 15px;
    }
  }
`

function Header () {
  return (
    <HeaderStyle>
      <div className='text-container'>
          <h2>introducing ...</h2>
          <h1>Kevin VanDonkelaar</h1>
          <h2>The Super Developer !</h2>
          <h3>Saving the day, one web solution at a time.</h3>
          <Button to='about' text='Enter' />
      </div>
    </HeaderStyle>
  )
}

export default Header
