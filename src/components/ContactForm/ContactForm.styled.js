import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorText = styled(ErrorMessage)`
  font-weight: 400;
  font-size: 14px;
  color: red;
`;

export const Label = styled.label`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  margin-bottom: 20px;
  color: #9baacf;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  min-width: 300px;
  padding-left: 20px;
  height: 40px;
  font-family: inherit;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7;
  background: none;
  color: #6d5dfc;
  :focus {
    outline: none;
    box-shadow: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff;
  }
`;

export const Button = styled.button`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  border: none;
  border-radius: 0.5rem;
  text-transform: uppercase;
  background-color: #6d5dfc;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #e4ebf5;
  box-shadow: inset 0.2rem 0.2rem 1rem #8abdff,
    inset -0.2rem -0.2rem 1rem #5b0eeb, 0.3rem 0.3rem 0.6rem #c8d0e7,
    -0.2rem -0.2rem 0.5rem white;
  &:hover {
    color: #ffffff;
  }
  &:active {
    box-shadow: inset 0.2rem 0.2rem 1rem #5b0eeb,
      inset -0.2rem -0.2rem 1rem #8abdff;
  }
`;
