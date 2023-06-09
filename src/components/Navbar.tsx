import NavbarLinks from "../utils/NavbarLinks";
import styled from "styled-components";
import logo from "../assets/logo.webp";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <Wrapper>
      <div className='section-center nav-center'>
        <Link to='/'>
          <img src={logo} alt='aanmelder' className='logo' />
        </Link>
        <div className='nav-links'>
          {NavbarLinks.map((link) => {
            const { id, text, url } = link;
            return (
              <NavLink
                to={url}
                key={id}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {text}
              </NavLink>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  background-color: var(--white);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    width: 8rem;
  }
  .nav-links {
    display: flex;
    gap: 1rem;
  }
  .nav-link {
    text-transform: capitalize;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--grey-500);
    font-family: var(--secondary-font);
  }
  .active {
    color: var(--primary-900);
  }
`;
