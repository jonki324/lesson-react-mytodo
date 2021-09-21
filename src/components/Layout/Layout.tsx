import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useAppSelector } from '../../app/hooks';
import { selectIsAuthenticated } from '../../features/user/userSlice';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  console.log('layout component');
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const linkList = [
    { title: 'Todo List Page', url: '/todos' },
    { title: 'Counter Page', url: '/counter' },
    { title: 'User List Page', url: '/users' },
    { title: 'My Profile Page', url: '/profile' },
  ];
  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h5"
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'block' } }}
              >
                My Todo App
              </Typography>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ mr: 2, backgroundColor: 'white', display: { xs: 'none', md: 'block' } }}
              />
              {linkList.map((link, index) => (
                <Typography
                  key={index}
                  variant="h6"
                  component="div"
                  sx={{ mr: 3, display: { xs: 'none', md: 'block' } }}
                >
                  <Link component={RouterLink} to={link.url} color="inherit" underline="none">
                    {link.title}
                  </Link>
                </Typography>
              ))}
              <Box sx={{ flexGrow: 1 }} />
              <Box>
                {isAuthenticated ? (
                  <Button color="inherit" href="/logout">
                    Logout
                  </Button>
                ) : (
                  <Button color="inherit" href="/login">
                    Login
                  </Button>
                )}
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
      <main>
        <Container maxWidth="xl">{children}</Container>
      </main>
    </>
  );
};

export default Layout;
