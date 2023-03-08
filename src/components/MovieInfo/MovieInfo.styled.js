import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  gap: 50px;

  > img { 
    height: 500px;
  }
`;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 50%; 
`;

export const BackButton = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  text-transform: capitalize;
  color: white;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: #ec9706;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #ec9706;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid orangered;
  text-decoration: none;
  color: white;
  font-weight: 500;
  max-width: 150px;
  text-align: center;
  &.active {
    color: white;
    background-color: orangered;
  }
`;
