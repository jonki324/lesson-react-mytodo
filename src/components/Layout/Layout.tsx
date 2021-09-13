import React from 'react';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <h1>My Todo App</h1>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
