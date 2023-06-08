import { useLoaderData, useNavigation } from "react-router-dom";
import { authFetch } from "../utils/authFetch";
import { IEvent } from "../models";
import styled from "styled-components";
import SingleEvent from "../components/SingleEvent";
import Title from "../components/Title";
export const loader = async () => {
  const response = await authFetch("/events");
  return response.data as IEvent[];
};

const Events = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const events: IEvent[] = data.result;
  console.log(navigation);

  return (
    <Wrapper>
      <Title title='Events' />
      <div className='events-center'>
        {events.map((event) => {
          return <SingleEvent key={event.name} {...event} />;
        })}
      </div>
    </Wrapper>
  );
};
export default Events;

const Wrapper = styled.section`
  .events-center {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1rem;
  }
`;
