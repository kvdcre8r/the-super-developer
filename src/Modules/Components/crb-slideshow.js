import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const SlideshowStyle = styled.div`
  .slideshow {
    position: relative;
    width: 60%;
    display: flex;
    justify-content: center;
    .slide {
      position: absolute;
      width: 16em;
      height: 12em;
      aspect-ratio: 4/3;
      object-fit: cover;
      flex: 1;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      border: 2px solid white;
      border-radius: 5px;
    }

    .slide.active {
      opacity: 1;
    }
  }
  /* @media screen and (max-width: 700px) {
    .slideshow-container {
      align-items: center;

      .slideshow {
        width: 80%;
        height: 13rem;
        .slide {
          width: 15em;
          height: 12em;
        }
      }
    }
  }

  @media screen and (max-width: 550px) {
    .slideshow-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .slideshow {
        width: 80%;
      }
    }
  } */
`

const images = [
  '../assets/Screenshot-Resume-Builder-new.png',
  '../assets/Screenshot-Resume-Builder-new2.png',
  '../assets/Screenshot-Resume-Builder-new3.png'
]

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <SlideshowStyle>
      <div className='slideshow'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </SlideshowStyle>
  )
}

export default Slideshow
