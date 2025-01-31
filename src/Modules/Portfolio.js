import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-scroll'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const PortfolioStyle = styled.div`
  text-shadow: 2px 2px 4px #000000;
  padding: 20px;
  position: relative;
  top: 20px;
  color: white;
  margin: 10px;
  min-height: 100vh;

  article {
    animation: ${fadeIn} 1s ease-in-out;
    border-color: white;
    border-style: solid;
    border-width: 1px 0px 1px 0px;
    padding: 10px 20px 20px 20px;
    width: fit-content;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.6);
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 700px) {
      flex-direction: column;
    }

    a {
      color: greenyellow;
      padding-right: 10px;
    }
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

  .portfolio-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    font-size: 1.2em;

    .name-pic {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h2 {
      color: greenyellow;
    }

    li {
      padding: 3px;
    }

    .images {
      animation: ${fadeIn} 2s ease-in-out;
      width: 40vw;
      border-radius: 3px;
      padding: 1px;
      border: 2px solid white;
      margin: 10px;
    }

    .portfolio-descs {
      animation: ${fadeIn} 2s ease-in-out;
      padding-left: 20px;
    }
  }

  .continue-btn {
    text-align: center;
    margin-top: 25vh;
    margin-bottom: 55vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    a {
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
      font-family: 'spyagency';

      &:hover {
        background-color: blue;
      }

      @media screen and (max-width: 415px) {
        font-size: 20px;
      }
    }
  }
`

function Portfolio () {
  const { ref: portfolioRef, inView: portfolioInView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  return (
    <PortfolioStyle>
      <h1>Portfolio</h1>
      <div className='portfolio-content' ref={portfolioRef}>
        <article
          style={{ animationPlayState: portfolioInView ? 'running' : 'paused' }}
        >
          <div className='name-pic'>
            <h2>Custom Resume Builder</h2>
            <img
              className='images'
              src='../assets/Screenshot-Resume-Builder.png'
              alt='screenshot of my resume builder project'
              style={{
                animationPlayState: portfolioInView ? 'running' : 'paused'
              }}
            />
          </div>
          <div className='portfolio-descs'>
            <p>
              Current project in development, a resume builder application that
              allows users to create and customize their own resumes
            </p>
            <a href='https://kvdeveloper-resume-builder.netlify.app/'>
              Website
            </a>
            <a href='https://github.com/kvdcre8r/my-resume-builder'>
              Github Repo
            </a>
            <ul>
              <li>
                Receives user input and dynamically generates a resume based on
                the information provided
              </li>
              <li>
                Allows users to customize the layout, style, and content of
                their resume
              </li>
              <li>
                Will feature the ability to save, print, and export resumes in
                various formats
              </li>
            </ul>
          </div>
        </article>
        <article
          style={{ animationPlayState: portfolioInView ? 'running' : 'paused' }}
        >
          <div className='name-pic'>
            <h2>My Live Resume</h2>
            <img
              className='images'
              src='../assets/Screenshot-My-Live-Resume-2.png'
              alt='screenshot of my live resume project'
              style={{
                animationPlayState: portfolioInView ? 'running' : 'paused'
              }}
            />
          </div>
          <div className='portfolio-descs'>
            <p>
              Interactive resume webpage meticulously crafted to highlight the
              journey and skills of an aspiring web developer
            </p>
            <a href='https://kevin-vandonkelaar-live-resume.netlify.app/'>
              Website
            </a>
            <a href='https://github.com/kvdcre8r/my_react_resume'>
              Github Repo
            </a>
            <ul>
              <li>Constructed with HTML, CSS, JavaScript, React, and Node</li>
              <li>
                Showcases creativity and expertise in layout design and user
                interface functionality
              </li>
              <li>
                Features dynamic content, responsive behavior, modular
                components, reusable code, and more
              </li>
            </ul>
          </div>
        </article>
        <article
          style={{ animationPlayState: portfolioInView ? 'running' : 'paused' }}
        >
          <div className='name-pic'>
            <h2>My Personal Website</h2>
            <img
              className='images'
              src='../assets/Screenshot-My-Personal-Site.png'
              alt='screenshot of my personal website project'
              style={{
                animationPlayState: portfolioInView ? 'running' : 'paused'
              }}
            />
          </div>
          <div className='portfolio-descs'>
            <p>
              Personal brand website demonstrating the knowledge and skills
              necessary for success in web development and design
            </p>
            <a href='https://github.com/Kevin-VanDonkelaar-Personal-Website/kvdcre8r'>
              Github Repo
            </a>
            <a href='https://kevin-vandonkelaar-personal-website.github.io/kvdcre8r/'>
            v1.0
          </a>
          <a href='https://the-super-devloper-v2.netlify.app/'>
            v2.0
          </a>
            <ul>
              <li>
                Single page application featuring themed sections presenting
                bio, portfolio, and contact information
              </li>
              <li>
                {' '}
                Unique superhero design produces easy-to-follow, functional, and
                engaging user experience
              </li>
              <li>
                {' '}
                Implements various CSS techniques including flexbox, floating
                backgrounds, and responsive behaviors
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div className='continue-btn'>
        <Link to='contact' smooth={true} duration={500}>
          Next: Contact Info
        </Link>
      </div>
    </PortfolioStyle>
  )
}

export default Portfolio
