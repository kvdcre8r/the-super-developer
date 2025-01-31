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

const NavStyle = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  position: sticky;
  z-index: 1000;

  .nav {
    animation: ${fadeIn} 1s ease-in-out;
    animation-delay: 8s;
    opacity: 0;
    animation-fill-mode: forwards;
    height: 45px;
    background-color: rgb(0, 25, 117);
    font-size: 16px;
    display: flex;
    align-items: center;
    img {
      height: 30px;
      width: 30px;
      padding: 10px;
    }
    div {
      display: inline-block;
      position: absolute;
      left: 0;
      padding: 15px;
      color: white;
    }
    .name {
      color: white;
      padding: 5px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
      @media screen and (max-width: 420px) {
        display: none;
      }
    }
    .pic {
      margin: 5px;
      cursor: pointer;
    }

    ul {
      position: absolute;
      right: 5px;
      li {
        display: inline;
        a {
          color: white;
          padding: 5px;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`

function Nav () {
  return (
    <NavStyle>
      <div className='nav'>
        <Link to='header' smooth={true} duration={500} className='pic'>
        <img src='../profilePic.png' alt='Kevin VanDonkelaar' />
        </Link>
        <Link to='header' smooth={true} duration={500} className='name'>
          Kevin VanDonkelaar
        </Link>
        <ul>
          <li>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to='portfolio' smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </NavStyle>
  )
}

export default Nav
