import { styled } from "styled-components";

interface ISingleRegistration {
  index: number;
  email: string;
}

const SingleRegistration: React.FC<ISingleRegistration> = ({
  index,
  email,
}) => {
  return (
    <Wrapper>
      <span className='number'>{index + 1}</span>
      <span>{email}</span>
    </Wrapper>
  );
};
export default SingleRegistration;

const Wrapper = styled.article`
  background: var(--white);
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 10px;
  position: relative;
  .number {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    display: grid;
    place-items: center;
    font-size: 0.875rem;
    background: var(--primary-500);
    color: var(--white);
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  text-align: center;
`;
