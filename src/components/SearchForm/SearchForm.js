import { useNavigate } from 'react-router-dom';
import {
  SearchFormSection,
  SearchInput,
  SearchButton,
} from './SearchForm.styled';

const SearchForm = () => {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    // if (!event.currentTarget.value) {
    //   return console.log(`Oops, type something`);
    // }

    navigate('/search');
  };

  return (
    <>
      <SearchFormSection onSubmit={handleSubmit}>
        <SearchInput placeholder="Beef" searchQuery="" name="search" />
        <SearchButton type="submit">Search</SearchButton>
      </SearchFormSection>
    </>
  );
};

export default SearchForm;
