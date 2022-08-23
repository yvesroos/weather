import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { useClickOutside, useDebounce } from '../../hooks';
import LoadingSpinner from '../LoadingSpinner';
import { Input, SearchElement, SearchResult, SuggestionItem } from './styled';
import { SearchProps } from './types';

const SearchInput: React.FC<SearchProps> = ({
  onSearch,
  onSelectItem,
  items,
  maxResults = 5,
  isLoading,
  placeholder
}) => {
  const suggestionRef = useRef<HTMLDivElement>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const debounceSearch = useDebounce(onSearch, 700);
  const hasSuggestions = showSuggestions && !!items?.length;

  const hideSuggestion = () => {
    setShowSuggestions(false);
  };

  useClickOutside(suggestionRef, hideSuggestion);

  useEffect(() => {
    if (!items) {
      return;
    }
    setShowSuggestions(true);
  }, [items]);

  const handleOnSelect = (index: number) => () => {
    onSelectItem(items![index]);
    setSearchTerm(items![index].label);
    hideSuggestion();
  };

  const onSearchInputChanged = (e: FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
    debounceSearch(e.currentTarget.value);
  };

  return (
    <SearchElement>
      <Input
        value={searchTerm}
        onChange={onSearchInputChanged}
        placeholder={placeholder}
        type="text"
      />
      {isLoading && <LoadingSpinner />}
      {hasSuggestions && (
        <SearchResult ref={suggestionRef} role="list">
          {items?.slice(0, maxResults)?.map((item, index) => (
            <SuggestionItem
              role="listitem"
              key={item.label}
              onClick={handleOnSelect(index)}
            >
              {item.label}
            </SuggestionItem>
          ))}
        </SearchResult>
      )}
    </SearchElement>
  );
};

export default SearchInput;
