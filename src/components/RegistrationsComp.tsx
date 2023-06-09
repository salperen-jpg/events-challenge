import { IRegistration } from "../models";
import SingleRegistration from "../components/SingleRegistration";
import { styled } from "styled-components";

interface IRegistrationComp {
  filteredRegistrations: IRegistration[];
}

const RegistrationsComp: React.FC<IRegistrationComp> = ({
  filteredRegistrations,
}) => {
  if (filteredRegistrations.length === 0) {
    return <h3>No registration found...</h3>;
  }
  return (
    <Wrapper>
      <h3>
        {filteredRegistrations.length} registration
        {filteredRegistrations.length > 1 ? "'s" : ""} found
      </h3>
      <div className='regis-center'>
        {filteredRegistrations.map((regis: IRegistration, index: number) => {
          return (
            <SingleRegistration key={regis.uuid} index={index} {...regis} />
          );
        })}
      </div>
    </Wrapper>
  );
};
export default RegistrationsComp;

const Wrapper = styled.div`
  .regis-center {
    display: grid;
    gap: 1rem 2rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
