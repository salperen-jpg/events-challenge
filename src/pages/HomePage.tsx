import { styled } from "styled-components";
import landing from "../assets/landing.jpg";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <Wrapper>
      <div className='banner'>
        <h1>Your software partner when it comes to events</h1>
        <p>
          aanmelder.nl provides reliable and practical software solutions for
          organizing successful and effective events. We accomplish this by
          transforming complex issues into user-friendly software.
        </p>
        <Link to='/events' type='button' className='btn header-btn'>
          See events
        </Link>
      </div>
    </Wrapper>
  );
};
export default HomePage;

const Wrapper = styled.header`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${landing}) center/cover no-repeat;
  min-height: 100vh;
  display: grid;
  place-items: center;
  .banner {
    width: var(--fluid-width);
    max-width: 40rem;
    h1 {
      font-family: var(--secondary-font);
      color: var(--primary-500);
    }
    p {
      color: var(--white);
      line-height: 2;
      margin-bottom: 1rem;
    }
    .header-btn {
      display: inline-block;
      padding: 1rem 1.5rem;
      animation: bounce 1s linear infinite;
    }
  }
  @media (min-width: 800px) {
    .banner {
      text-align: center;
      .header-btn {
        margin: auto;
        padding: 1.25rem 2rem;
        border: 2px solid var(--white);
      }
    }
    p {
      max-width: 28rem;
      margin-inline: auto;
    }
  }
  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
`;
