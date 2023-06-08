import { IContact } from "../models";
import { FaUserAlt } from "react-icons/fa";
import styled from "styled-components";
const SingleContact: React.FC<IContact> = ({
  email,
  name: { firstname, lastname, sex, title },
}) => {
  return (
    <Wrapper>
      <div className='icon-container'>
        <FaUserAlt className='icon' />
      </div>
      <a className='email' href={`mailto:${email}`}>
        {email}
      </a>
      <h4>
        {title} {sex}. {firstname} {lastname}
      </h4>
    </Wrapper>
  );
};
export default SingleContact;

const Wrapper = styled.article`
  padding: 2.5rem;
  background: var(--white);
  border-radius: 10px;
  text-align: center;
  .icon-container {
    width: 3.5rem;
    height: 3.5rem;
    display: grid;
    place-items: center;
    margin: auto;
    border-radius: 50%;
    background-color: var(--primary-900);
    margin-bottom: 1rem;
    transition: var(--transition);
    svg {
      font-size: 1.75rem;
      color: var(--primary-50);
    }
  }
  .email {
    display: inline-block;
    color: var(--grey-500);
    margin-bottom: 0.5rem;
  }
  h4 {
    text-transform: capitalize;
  }
  &:hover .icon-container {
    transform: translateY(-5px);
  }
`;
