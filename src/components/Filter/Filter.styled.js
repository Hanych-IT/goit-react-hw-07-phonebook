import styled from 'styled-components';

export const Label = styled.label`
  margin-left: 100px;
  min-width: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  margin-bottom: 20px;
  color: #9baacf;
`;

export const FindInput = styled.input`
  box-sizing: border-box;
  width: 300px;
  height: 40px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-left: 20px;
  font-family: inherit;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7;
  background: none;
  color: #6d5dfc;
  ::placeholder {
    color: #bec8e4;
  }

  :focus {
    outline: none;
    box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
  }
`;
