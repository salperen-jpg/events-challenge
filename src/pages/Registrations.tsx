import { useLoaderData } from "react-router-dom";
import { authFetch } from "../utils/authFetch";
import { IRegistration } from "../models";
import Title from "../components/Title";
import SingleRegistration from "../components/SingleRegistration";
import { styled } from "styled-components";

export const loader = async ({ params: { id } }: any) => {
  const response = await authFetch(`/events/${id}/regform/registrations`);
  return response.data.result;
};

const Registrations = () => {
  const registrations: IRegistration[] | any = useLoaderData();

  return (
    <Wrapper>
      <Title title='Registrations' />
      <div className='registration-center'>
        <form className='form'>
          <input type='text' name='' id='' placeholder='search for email...' />
          <button type='submit' className='btn submit-btn'>
            search
          </button>
        </form>
        <div className='registrations'>
          <h3>
            {registrations.length} registration
            {registrations.length > 1 ? "'s" : ""} found
          </h3>
          <div className='regis-center'>
            {registrations.map((regis: IRegistration, index: number) => {
              return (
                <SingleRegistration key={regis.uuid} index={index} {...regis} />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Registrations;

const Wrapper = styled.div`
  .registration-center {
    display: grid;
    gap: 1.5rem;
  }
  @media (min-width: 900px) {
    .registration-center {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }
  }
  h3 {
    margin-bottom: 1rem;
    text-align: right;
  }
  .form {
    width: 100%;
    background-color: var(--white);
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    align-self: self-start;
    input,
    .submit-btn {
      padding: 0.5rem 1rem;
      font-family: inherit;
      outline: none;
      appearance: none;
      border: transparent;
      font-size: 1rem;
    }
    input {
      flex: 1;
      background: var(--grey-50);
    }
    input::placeholder {
      letter-spacing: var(--spacing);
      text-transform: capitalize;
    }
    .submit-btn {
      border: transparent;
      background-color: var(--primary-500);
      color: var(--white);
      border-radius: 0;
    }
  }
`;
