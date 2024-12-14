import styled from "styled-components";

const NavStyle = styled.nav`
.nav {
  height: 45px;
  background-color: rgb(0, 25, 117);
  font-size: 14px;
  div {
    display: inline-block;
    position: absolute;
    left: 0;
    padding: 15px;
    color: white;
  }
  ul {
    position: absolute;
    right: 5px;
    li {
      display: inline;
      a {
        color: white;
        padding: 5px;
      }
    }
  }
}

`;

function Nav() {
  return (
    <NavStyle>
      <div className="nav">
        <div>Kevin VanDonkelaar</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="./about.html">About</a></li>
          <li><a href="./portfolio.html">Portfolio</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </ul>
      </div>
    </NavStyle>
  );
}

export default Nav;