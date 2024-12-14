import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0 auto;
        min-width: 600px;
        background-color: rgb(0, 19, 87);
        
        .App {
            box-sizing: border-box;
            background-color: #30599b;
            background-image: url("../../assets/blue-code-bkgd.jpg");
            background-position-x: center;
            background-size: cover;
            /* border: 2px solid white;
            border-radius: 5px; */
            font-family: 'open-sans';

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
`;

export default GlobalStyles;
