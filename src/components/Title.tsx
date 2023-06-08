import styled from "styled-components";

interface ITitle {
  title: string;
}

const Title: React.FC<ITitle> = ({ title }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <div className='underline'></div>
    </Wrapper>
  );
};
export default Title;

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  font-family: var(--secondary-font);
  h2 {
    color: var(--grey-500);
  }
  .underline {
    height: 0.25rem;
    width: 5rem;
    background: var(--primary-900);
    margin: 0.5rem auto;
  }
`;
