import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h2`
    font-size: 90px; 
    text-align: center;
    margin: 10px;
`


export const GoHomeLink = styled(Link)`
  padding: 8px 16px;
  text-decoration: none;
  color:  orangered;
  font-weight: 500;
  max-width: 150px;
  text-align: center;
  font-size: 12px;
`;