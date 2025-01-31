import { createGlobalStyle } from 'styled-components'
import { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0 auto;
        background-color: rgb(0, 19, 87);
        animation: ${fadeIn} 2s ease-in-out;
        box-sizing: border-box;
        background-color: #30599b;
        background-image: url("../../assets/blue-code-bkgd.jpg");
        background-size: contain;
        font-family: 'josefin-sans';

        .App {

            @media screen and (max-width: 550px) {
                font-size: 0.9em;
            }
            @media screen and (max-width: 415px) {
                font-size: 0.8em;
            }

            @font-face {
                font-family: "spyagency";
                src: url(../../assets/spyagency.ttf);
            }
            @font-face {
                font-family: "champion";
                src: url(../../assets/champion.ttf);
            }
            @font-face {
                font-family: "open-sans";
                src: url(../../assets/OpenSans.ttf);
            }
            @font-face {
                font-family: "courgette";
                src: url(../../assets/courgette.ttf);
            }
            @font-face {
                font-family: "josefin-sans";
                src: url(../../assets/JosefinSans.ttf);
            }
        }
    }
`

export default GlobalStyles
