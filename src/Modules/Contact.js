import styled from 'styled-components'

const ContactStyle = styled.div`
  text-shadow: 2px 2px 4px #000000;
  padding: 20px;
  position: relative;
  top: 20px;
  color: white;
  margin: 10px 10px 20px 10px;
  min-height: 100vh;

  article {
    animation-duration: 3s;
    animation-name: fadeIn;
    font-family: 'josefin-sans';
    border-color: white;
    border-style: solid;
    border-width: 1px 0px 1px 0px;
    padding: 10px 20px 20px 20px;
    width: fit-content;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.6);
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }

  .contact-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    font-size: 1.2em;
  }

  h2 {
    color: greenyellow;
  }

  h1 {
    font-family: 'spyagency';
    font-size: 2.5em;
    color: rgb(0, 20, 94);
    text-shadow: -0.5px 0 white, 0 1px white, 1px 0 white, 0 -0.5px white;
    @media screen and (max-width: 415px) {
      font-size: 2em;
    }
  }

  .contact-meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .media {
      text-align: center;
      padding: 20px;
    }
  }

  a {
    color: white;
  }
`

function Contact () {
  return (
    <ContactStyle>
      <h1>Contact Me</h1>
      <div className='contact-content'>
        <article>
          <h2>Learn More!</h2>
          <p>
            If you think I might be a good fit for your team, or you would like
            to learn more about what this super-powered web developer can do for
            you, please reach out to me... I'd love to hear from you today!
          </p>
          <div className='contact-meta'>
            <div className='media'>
              <h2>Personal:</h2>
              <p>
                (864)640-9241
                <br />
                kvdcre8r@gmail.com
              </p>
            </div>
            <div className='media'>
              <h2>LinkedIn:</h2>
              <a href='https://www.linkedin.com/in/kevinvandonkelaar'>
                linkedin.com/in/
                <br />
                kevinvandonkelaar
              </a>
            </div>
            <div className='media'>
              <h2>GitHub:</h2>
              <a href='https://github.com/kvdcre8r'>github.com/kvdcre8r</a>
            </div>
          </div>
        </article>
      </div>
    </ContactStyle>
  )
}

export default Contact
