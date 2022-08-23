import { useEffect, useState } from 'react';
import SearchInput, { SearchItem } from '../../components/SearchInput';
import { useCitiesByQuery } from '../../queries/placeQueries';

const Search = ({
  onSelectItem,
}: {
  onSelectItem: (selectedItem: SearchItem) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, refetch } = useCitiesByQuery(searchTerm);
  const items = data ?? [];

  useEffect(() => {
    if (searchTerm.length > 0) {
      refetch();
    }
  }, [searchTerm]);

  const onSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <SearchInput
      onSearch={onSearch}
      items={items}
      onSelectItem={onSelectItem}
    />
  );
};

export default Search;
