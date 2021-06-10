import React from 'react';

function Header() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 80,
        justifySelf: 'flex-end',
        alignSelf: 'flex-end',
        alignItems: 'center',
      }}
    >
      <input type="text" placeholder="id" />
      <input type="text" placeholder="password" />
      <button style={{ width: 100 }}>join</button>
    </div>
  );
}

export default Header;
