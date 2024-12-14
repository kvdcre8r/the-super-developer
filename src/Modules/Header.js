import styled from "styled-components";

const HeaderStyle = styled.header`
  text-shadow: 2px 2px 4px #000000;
  padding: 20px;
  position: relative;
  top: 50px;
  text-align: center;
  font-family: 'josefin-sans';
  color: white;
  margin: 10px;

  .text-container {
    height: 100vh;

  h1 {
    font-family: 'spyagency';
    font-size: 3em;
    color: rgb(0, 20, 94);
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  }
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <div className="text-container">
        <h1>Kevin VanDonkelaar</h1>
        <h2>THE SUPER DEVELOPER!</h2>
        <h3>Here to save the day, one web solution at a time.</h3>
      </div>
      {/* add START button */}
    </HeaderStyle>
  );
}

export default Header;
