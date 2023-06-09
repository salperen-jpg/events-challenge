import { useLoaderData } from "react-router-dom";
import { authFetch } from "../utils/authFetch";
import { IRegistration } from "../models";
import Title from "../components/Title";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Form from "../components/Form";
import RegistrationsComp from "../components/RegistrationsComp";

export const loader = async ({ params: { id } }: any) => {
  const response = await authFetch(`/events/${id}/regform/registrations`);
  return response.data.result;
};

const Registrations = () => {
  const data: IRegistration[] | any = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [registrations, setRegistrations] = useState(data);

  const filteredRegistrations = registrations.filter(
    (registration: IRegistration) => registration.email.includes(searchTerm)
  );

  return (
    <Wrapper>
      <Title title='Registrations' />
      <Link to='/events' className='btn back-btn'>
        back events
      </Link>
      <Form searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className='registration-center'>
        <RegistrationsComp filteredRegistrations={filteredRegistrations} />
      </div>
    </Wrapper>
  );
};
export default Registrations;

const Wrapper = styled.div`
  h3 {
    margin-bottom: 1rem;
  }

  .form {
    max-width: 30rem;
    margin-inline: auto;
    margin-bottom: 2rem;
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
