import img404 from '../images/img404.jpg';
import { useLocation } from 'react-router-dom';
import { Wrapper, GoHomeLink, Title } from './Page404.styled';

export const Page404 = () => {
    const location = useLocation();

  return (
    <Wrapper>
      <Title>404</Title>
      <p>
        Sorry, we can't find this page! But don't worry, it's still great!
      </p>
      <GoHomeLink to={`/`} state={{ from: location }}>Take me home
      </GoHomeLink>
      <img src={img404} alt="404" style={{ display: 'block', margin: 'auto' }} />
      
    </Wrapper>
  );
};