interface IForm {
  searchTerm: string;
  setSearchTerm: (a: string) => void;
}

const Form: React.FC<IForm> = ({ searchTerm, setSearchTerm }) => {
  return (
    <form className='form' onSubmit={(e) => e.preventDefault()}>
      <input
        type='text'
        placeholder='search for email...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type='submit' className='btn submit-btn'>
        search
      </button>
    </form>
  );
};
export default Form;
