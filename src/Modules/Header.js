import styled from "styled-components";

const HeaderStyle = styled.header`
  font-size: 1.5em;
  background-color: #30599b;
  padding: 20px;
  text-align: center;
  color: white;
  margin: 10px;
  border: 2px solid white;
  border-radius: 3px;
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
      <h1>Custom Resume Builder</h1>
      <p>a KVDeveloper creation</p>
    </HeaderStyle>
  );
}

export default Header;
