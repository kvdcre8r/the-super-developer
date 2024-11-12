import styled from "styled-components";

const HeaderStyle = styled.header`
  font-size: 1.5em;
  text-shadow: 2px 2px 4px #000000;
  background-color: #244273;
  padding: 20px;
  text-align: center;
  color: white;
  margin: 10px;
  border: 2px solid white;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  h1 {
    font-family: courgette;
    margin: 0;
  }
  p {
    font-family: open-sans;
    font-size: 0.8em;
    margin: 0;
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <h1>Presto Resume Builder</h1>
      <p>a KVDeveloper creation</p>
    </HeaderStyle>
  );
}

export default Header;
