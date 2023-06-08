import styled from "styled-components";
import notFound from "../assets/not-found.svg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={notFound} alt='' />
        <h3>Oops!</h3>
        <p>We don't seem to find the page you look for...</p>
        <Link to='/' className='btn back-btn'>
          back home
        </Link>
      </div>
    </Wrapper>
  );
};
export default Error;

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-color: var(--primary-50);
  .container {
    text-align: center;
    width: var(--fluid-width);
    max-width: 30rem;
  }

  h3 {
    margin: 1rem 0;
  }
  p {
    color: var(--grey-500);
    margin-bottom: 1rem;
  }
  .back-btn {
    display: inline-block;
  }
`;
