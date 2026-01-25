import { Autocomplete, type MantineRadius, type MantineSize } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

const AUTOCOMPLETE_WORDS = [
  'hello world',
  'good morning',
  'thank you',
  'please excuse me',
  'how are you',
  'nice to meet you',
  'see you later',
  'have a good day',
  'break a leg',
  'piece of cake',
];

type SearchAutocompleteProps = {
  w: number;
  size: MantineSize;
  radius?: MantineRadius;
};

export const SearchAutocomplete: FC<SearchAutocompleteProps> = ({ w, size, radius }) => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const handleSearchSubmit = (value: string) => {
    const trimmedValue = value.trim();

    if (trimmedValue) {
      queueMicrotask(() => setSearchValue(''));
      queueMicrotask(() => setDropdownOpened(false));
      navigate(`/dictionary?q=${encodeURIComponent(trimmedValue)}`);
    }
  };

  return (
    <Autocomplete
      autoFocus
      placeholder='Search for vocabulary, phrases, idioms...'
      size={size}
      radius={radius}
      w={w}
      data={AUTOCOMPLETE_WORDS}
      value={searchValue}
      onChange={(val) => {
        setSearchValue(val);
        setDropdownOpened(val.length > 0);
      }}
      onBlur={() => setDropdownOpened(false)}
      dropdownOpened={dropdownOpened}
      clearable
      leftSection={<IconSearch size={16} />}
      onOptionSubmit={handleSearchSubmit}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
          event.preventDefault();
          handleSearchSubmit(searchValue);
        }
      }}
    />
  );
};
