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

  & > div {
    display: flex;
    justify-content: center;
    gap: 10px;

    & button {
      padding: 5px 10px;
      border-radius: 10px;
      border: none;
      background: green;
      color: white;
      cursor: pointer;
      align-self: start;

      &:disabled {
        background: grey;

        &:hover {
          background: grey;
          cursor: no-drop;
        }
      }

      &:hover {
        background: #79c589;
      }
    }
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & input {
    border: 1px solid green;
    border-radius: 10px;
    padding: 5px 10px;

    &:focus {
      outline: 0;
    }
  }

  & span {
    color: red;
    font-size: 10px;
    text-align: center;
  }
`;
