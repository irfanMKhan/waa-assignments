import React, { useState } from 'react';
import axios from 'axios';

const SearchUsers = () => {
  const [keyword, setKeyword] = useState('');
  const [users, setUsers] = useState<any>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${keyword}`);
      setUsers(response.data.items); // Store the users found in the state
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="search-users">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search GitHub Users"
        />
        <button type="submit">Search</button>
      </form>

      {users.length > 0 && (
        <div className="user-list">
          <h3>Search Results:</h3>
          <ul>
            {users.map((user: { id: React.Key | null | undefined; html_url: string | undefined; login: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
              <li key={user.id}>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  {user.login}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchUsers;