import styled from "styled-components";

export const MainStyle = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
`;

export const FormStyle = styled.div`
  top: 0;
  overflow: hidden;
  position: sticky;
  font-family: open-sans;
  text-shadow: 2px 2px 4px #000000;
  color: lightcyan;
  background-color: #244273;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #244273 #f1f1f1;
  min-width: 150px;
  height: 95vh;
  padding: 0px 0px 10px 10px;
  border: 2px solid white;
  font-size: 0.8em;
  margin-right: 20px;

  p {
    margin: 0px;
  }
  h3 {
    border-bottom: 2px solid lightcyan;
    margin-bottom: 5px;
    margin-right: 10px;
  }
  .resume-section {
    padding-bottom: 20px;
  }
  input {
    font-size: 0.8em;
    width: 90%;
  }
  textarea {
    font-size: 1em;
    width: 91%;
  }

  select {
    color: rgb(62, 92, 126);
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 3px 5px 3px 0px;
    margin-bottom: 5px;
    width: 94%;
    &:focus {
      outline: none;
      border-color: #30599b;
      background-color: white;
    }
  }

  button {
    background-color: #30599b;
    color: white;
    border: 1px solid white;
    padding: 5px;
    margin-top: 10px;
    margin-right: 7px;
    cursor: pointer;
    &:hover {
      background-color: #1c3359;
    }
  }

  .top-buttons {
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    position: sticky;
    background-color: #244273;
    padding-bottom: 10px;
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  background-color: #30599b;
  background-image: url("../../assets/blue-office-background.jpg");
  background-position-x: center;
  background-size: contain;
  border: 2px solid white;
  border-radius: 5px;

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
`;

export default Container;
