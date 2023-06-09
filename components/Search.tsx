"use client"
import { useState } from 'react';

export default function Search() {
  const [uservalue, setLikes] = useState<string>('');


  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setLikes(e.target.value);
  }

  return (
    <div>
        <input type="text" className='search-user'  name="searchfield"  onChange={handleSearch}  value={uservalue} />
      {/* <button onClick={handleClick}>Like ({likes})</button> */}
    </div>
  );
}