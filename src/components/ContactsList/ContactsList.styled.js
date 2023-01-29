import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #9baacf;
  list-style: none;
`;

export const Button = styled.button`
  padding: 4px;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem white;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #9baacf;
  &:hover {
    color: #6d5dfc;
  }
  &:active {
    box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7;
  }
`;
