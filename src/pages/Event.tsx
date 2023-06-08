import { useLoaderData, useNavigation, Link } from "react-router-dom";
import { authFetch } from "../utils/authFetch";
import { IContact } from "../models";
import SingleContact from "../components/SingleContact";
import styled from "styled-components";
import Title from "../components/Title";

export const loader = async ({ params: { id } }: any) => {
  const response = await authFetch(`/events/${id}/contacts`);
  return response.data.result as IContact[];
};

const Event = () => {
  const contacts: any | IContact[] = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) {
    return (
      <Wrapper>
        <div className='loading'></div>
      </Wrapper>
    );
  }

  if (contacts.length < 1) {
    return (
      <Wrapper>
        <Link to='/events' className='btn back-btn'>
          back events
        </Link>
        <h3>No registration has been found</h3>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Title title='Contacts' />
      <Link to='/events' className='btn back-btn'>
        back events
      </Link>
      <div className='contact-center'>
        {contacts.map((contact: IContact, index: number) => {
          return <SingleContact key={index} {...contact} />;
        })}
      </div>
    </Wrapper>
  );
};
export default Event;

const Wrapper = styled.div`
  .contact-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  .back-btn {
    display: inline-block;
    margin-bottom: 2rem;
  }
`;
