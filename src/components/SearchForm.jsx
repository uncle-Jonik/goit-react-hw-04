import toast from 'react-hot-toast';

export const SearchForm = ({ onSearch }) => {
  const hendelSubmit = e => {
    e.preventDefault();
    onSearch(e.target.elements.query.value);

    if (e.target.elements.query.value.trim() === '') {
      toast.error('EMPTY STRING');
      return;
    }
    e.target.reset();
  };

  return (
    <>
      <header>
        <form onSubmit={hendelSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
};
