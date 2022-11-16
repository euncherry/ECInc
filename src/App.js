import React, { useState } from 'react';
import AppRouter from './router';
import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    scroll-behavior: smooth;
    background-color: ${(props) => (props.role === 'ADMIN' ? '#f6f6f6' : '#e3f0fa')};;
  }
`;

function App() {
  const [user, setUser] = useState({
    role: 'ADMIN',
  });
  return (
    <>
      <GlobalStyle role={user.role} />
      <AppRouter user={user} setUser={setUser} />
    </>
  );
}

export default App;
