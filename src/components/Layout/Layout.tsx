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
            <li>
              <Link to="/users">User List Page</Link>
            </li>
            <li>
              <Link to="/profile">My Profile Page</Link>
            </li>
            <li>
              <Link to="/login">Login Page</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
