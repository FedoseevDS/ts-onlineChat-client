import styled from 'styled-components';

export const Template = styled.div`
  & input {
    width: 100%;
    border-radius: 10px;
    border: 1px solid green;
    padding: 5px 10px;

    &:focus {
      outline: 0;
    }
  }
`;
