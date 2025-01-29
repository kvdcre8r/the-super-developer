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

    @media screen and (max-width: 550px) {
      font-size: 0.7em;
    }

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
        @media screen and (max-width: 340px) {
        font-size: 2.5em;
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
        @media screen and (max-width: 550px) {
        font-size: 2em;
      }

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

    a {
      animation: ${fadeIn} 0.5s ease-in-out;
      animation-delay: 8s;
      opacity: 0;
      animation-fill-mode: forwards;
      font-size: 32px;
      padding: 10px;
      border-width: 1px 2px 2px 1px;
      border-style: solid;
      border-color: yellow;
      border-radius: 5px;
      background-color: rgb(0, 25, 117);
      position: relative;
      top: 50px;
      color: yellow;
      text-shadow: -1px 0 darkblue, 0 1px darkblue, 1px 0 darkblue,
        0 -1px darkblue;
      cursor: pointer;

      &:hover {
        background-color: blue;
      }

      @media screen and (max-width: 415px) {
        font-size: 2.5em;
      }
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
        <Link to='about' smooth={true} duration={500}>
          Enter
        </Link>
      </div>
    </HeaderStyle>
  )
}

export default Header
