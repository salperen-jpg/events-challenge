import moment from "moment";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCalendar, FaArrowRight } from "react-icons/fa";
interface ISingleEvent {
  name: string;
  first_day: string;
  last_day: string;
  self: string;
}

const SingleEvent: React.FC<ISingleEvent> = ({
  name,
  first_day,
  last_day,
  self,
}) => {
  const firstMoment = moment(first_day).format("MMMM do YYYY");
  const lastMoment = moment(last_day).format("MMMM do YYYY");
  const extractedID = self.split("/")[2];

  return (
    <Wrapper key={name}>
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, labore?
      </p>
      <p className='date'>
        <FaCalendar className='icon' /> {firstMoment} - {lastMoment}
      </p>
      <div className='btn-container'>
        <Link to={self} className='btn contact-btn'>
          contacts
        </Link>
        <Link
          to={`/events/registrations/${extractedID}`}
          className='btn detailed-btn'
        >
          registrations
          <FaArrowRight />
        </Link>
      </div>
    </Wrapper>
  );
};
export default SingleEvent;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  background: var(--white);
  border-left: 5px solid var(--primary-500);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  h3 {
    color: var(--primary-900);
  }
  p {
    font-size: 0.875rem;
    line-height: 1.5;
    max-width: 25rem;
  }
  .date {
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .icon {
      color: var(--grey-500);
      font-size: 1.2rem;
    }
  }
  .btn-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .contact-btn {
    background-color: transparent;
  }
  .detailed-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    align-self: flex-end;
    background-color: transparent;
    color: var(--grey-500);
    text-decoration: underline;
    padding: 0.5rem 1rem;

    svg {
      animation: slideToRight 3s linear infinite;
      font-size: 0.75rem;
      color: var(--primary-900);
    }
  }
  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-2);
  }

  @keyframes slideToRight {
    to {
      opacity: 0;
      transform: translateX(300%);
    }
  }
`;
