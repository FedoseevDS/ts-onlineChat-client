import styled from 'styled-components';

export const Template = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 30px 0;
`;

export const Auth = styled.div`
  border: 1px solid green;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;

  & form {
    display: flex;
    justify-content: center;
    gap: 10px;

    & input {
      border: 1px solid green;
      border-radius: 10px;
      padding: 5px 10px;

      &:focus {
        outline: 0;
      }
    }

    & button {
      border-radius: 10px;
      border: none;
      background: green;
      color: white;
      cursor: pointer;

      &:hover {
        background: #79c589;
      }
    }
  }
`;
