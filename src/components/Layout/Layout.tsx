import React from 'react';
import { Link } from 'react-router-dom';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <h1>My Todo App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/todos">Todo List Page</Link>
            </li>
            <li>
              <Link to="/counter">Counter Page</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
