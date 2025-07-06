'use client';

import { ChangeEvent, useState } from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='책 이름을 입력해주세요...'
        value={searchValue}
        onChange={handleInputChange}
      />
      <button>검색</button>
    </div>
  );
};
export default SearchBar;
