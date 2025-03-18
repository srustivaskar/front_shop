import React, { useState } from 'react';

function FormExample() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeToken = `jwt-${user}-${Date.now()}`;
    localStorage.setItem('jwt', fakeToken);
    setToken(fakeToken);
    alert(`Hello ${user}, token saved successfully!`);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setToken(null);
    alert("You've logged out successfully!");
  };

  return (
    <div>
      {!token ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter the name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Hello {user}, you are logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default FormExample;
