import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import Button from './Button'

const AboutStyle = styled.div`
  text-shadow: 2px 2px 4px #000000;
  padding: 20px;
  position: relative;
  top: 20px;
  color: white;
  margin: 10px;
  min-height: 100vh;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

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

  h1 {
    font-family: 'spyagency';
    font-size: 2.5em;
    color: rgb(0, 20, 94);
    text-shadow: -0.5px 0 white, 0 1px white, 1px 0 white, 0 -0.5px white;
    @media screen and (max-width: 415px) {
      font-size: 2em;
    }
  }

  .about-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    font-size: 1.2em;
    li {
      padding: 3px;
    }

    .intro {
      width: 100%;
      color: greenyellow;
      font-family: monospace;
    }

    .col2 {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      flex-grow: 1;
      width: 70%;

      .mission {
        color: rgb(255, 119, 0);
        height: auto;
        font-size: 1.2em;
        padding: 10px 50px;
        text-transform: uppercase;
        text-align: center;
      }

      .superpowers {
        width: 40%;
        height: auto;
        color: rgb(255, 0, 255);
        flex-grow: 1;
      }

      .training {
        width: 40%;
        height: auto;
        flex-grow: 1;
        color: greenyellow;
      }

      .toolbelt {
        width: 40%;
        height: auto;
        flex-grow: 1;
        color: rgb(0, 162, 255);

        .tools {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          .tools-lists {
            display: flex;
            flex-wrap: wrap;

            .tools-list {
              padding: 0px 30px;

              li {
                padding: 3px;
                font-size: 1.2em;
                list-style: none;

                .fa-solid {
                  font-size: 0.8em;
                  padding-top: 5px;
                }

                p {
                  margin: 0;
                  padding-right: 15px;
                  color: white;
                }
              }
            }
          }
        }
      }
    }
    .details {
      font-size: 0.8em;
      width: 20%;
      flex-grow: 1;
      color: tan;

      img {
        height: 140px;
        width: 140px;
      }
      h4 {
        margin: 10px 0 5px 0;
      }
      p {
        margin: 0;
      }
    }
  }

  .continue-btn {
    text-align: center;
    margin-top: 25vh;
    margin-bottom: 55vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

function About () {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  return (
    <AboutStyle>
      <h1>About Your Hero</h1>
      <div className='about-content'>
        <article
          className='intro'
          ref={aboutRef}
          style={{ animationPlayState: aboutInView ? 'running' : 'paused' }}
        >
          <p>Somewhere near St. Louis, Missouri, not too long ago...</p>
          <p>
            ... a mild-mannered father of three was considering a career change,
            when suddenly, he was bitten by the web dev bug!
          </p>
          <p>
            Unrecongnized design talents and developing skills emerged, sparking
            a passion for enhancing the user experience that grows to this very
            day...
          </p>
        </article>
        <div className='col2'>
          <article
            className='mission'
            style={{ animationPlayState: aboutInView ? 'running' : 'paused' }}
          >
            <h2>THE MISSION:</h2>
            <p>
              to work with fellow tech-professional superheroes to create,
              develop, and maintain innovative websites that go above and beyond
              the client's needs.
            </p>
          </article>
          <article
            className='superpowers'
            style={{ animationPlayState: aboutInView ? 'running' : 'paused' }}
          >
            <h2>SUPERPOWERS:</h2>
            <li>Creativity</li>
            <li>Analytical Thinking</li>
            <li>Leadership</li>
            <li>Organization</li>
            <li>Loyality</li>
            <li>Client-Empathy</li>
            <li>Attention-To-Detail</li>
          </article>
          <article
            className='training'
            style={{ animationPlayState: aboutInView ? 'running' : 'paused' }}
          >
            <h2>TRAINING:</h2>
            <li>
              2024 Graduate of Fullstack Academy's Web Development Bootcamp
            </li>
            <li>
              4+ years as a stay-at-home dad, honing skills in patience,
              problem-solving, and multitasking
            </li>
            <li>15+ years retail management experience</li>
          </article>
          <article
            className='toolbelt'
            style={{ animationPlayState: aboutInView ? 'running' : 'paused' }}
          >
            <h2>TOOLBELT:</h2>
            <div className='tools'>
              <div className='tools-lists'>
                <ul className='tools-list'>
                  <li>
                    <p className='fa-brands fa-html5'></p>HTML 5
                  </li>
                  <li>
                    <p className='fa-brands fa-css3-alt'></p>CSS 3
                  </li>
                  <li>
                    <p className='fa-brands fa-js'></p>Javascript
                  </li>
                  <li>
                    <p className='fa-brands fa-react'></p>React
                  </li>
                </ul>
                <ul className='tools-list'>
                  <li>
                    <p className='fa-brands fa-github'></p>Github
                  </li>
                  <li>
                    <p className='fa-brands fa-node-js'></p>Node.js
                  </li>
                  <li>
                    <p className='fa-solid fa-code'></p>VsCode
                  </li>
                  <li>
                    <p className='fa-solid fa-terminal'></p>CLI
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        <article
          className='details'
          style={{ animationPlayState: aboutInView ? 'running' : 'paused' }}
        >
          <img src='../profilePic.png' alt='Kevin VanDonkelaar' />
          <h2>CHARACTER BIO:</h2>
          <h4>Location:</h4>
          <li>O'Fallon, MO</li>
          <h4>Birthplace:</h4>
          <li>Greenville, SC</li>
          <h4>Favorite GUI:</h4>
          <li>Android</li>
          <h4>Favorite Movies:</h4>
          <li>The Matrix</li>
          <li>The Star Wars Saga</li>
          <li>The Princess Bride</li>
          <h4>Favorite Books:</h4>
          <li>Ender's Game</li>
          <li>The Hobbit</li>
          <li>Mistborn</li>
          <li>Harry Potter</li>
          <li>Percy Jackson</li>
          <h4>Hobbies:</h4>
          <li>Spending time with his amazing family</li>
          <li>Puzzles, Legos, Disc Golf, Chess, Anything Sci-Fi</li>
          <li>Enjoying the outdoors</li>
        </article>
      </div>
      <div className='continue-btn'>
        <Button to='portfolio' text='Next: Portfolio' />
      </div>
    </AboutStyle>
  )
}

export default About
