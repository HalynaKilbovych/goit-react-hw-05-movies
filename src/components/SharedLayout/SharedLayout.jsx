import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner'
import { Container, Header, Link } from './SharedLayout.styled';


export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <Suspense fallback={<BallTriangle/>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};