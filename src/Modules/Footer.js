import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  position: relative;

  .footer {
    height: 45px;
    background-color: rgba(0, 0, 0, 0.8);
    font-size: 12px;
    display: flex;
    justify-content: center;

    div {
      text-align: center;
      padding: 15px;
      color: gray;

      a {
        color: inherit;
        text-decoration: none;
        &:hover {
          color: white;
          text-decoration: underline;
        }
      }
    }
  }
`

function Footer () {
  return (
    <FooterStyle>
      <div className='footer'>
        <div className='name'>
          The Super Developer v3.0 | &copy; 2024 Kevin VanDonkelaar | Previous
          versions available here:{' '}
          <a href='https://kevin-vandonkelaar-personal-website.github.io/kvdcre8r/'>
            v1.0
          </a>
          , v2.0
        </div>
      </div>
    </FooterStyle>
  )
}

export default Footer
