import styled from 'styled-components';

export const Template = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > div:nth-child(2) {
    display: flex;
    gap: 15px;
  }
`;

export const Button = styled.div`
  display: flex;
  gap: 15px;

  & button {
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
    width: 100px;
    background: green;
    color: white;
    cursor: pointer;

    &:hover {
      background: #79c589;
    }
  }

  & div {
    align-self: center;
    display: flex;
    justify-content: center;
    flex: 1;

    & span {
      font-weight: 700;
    }
  }
`;

export const SideBar = styled.div`
  border: 1px solid green;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 200px;
  max-height: 600px;
  overflow-y: auto;

  & > span {
    font-weight: 700;
    text-align: center;
  }
`;

export const LinkChat = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px 0;
`;

export const BodyChat = styled.div`
  border: 1px solid green;
  border-radius: 10px;
  flex: 1 2;
  padding: 5px 10px;

  & span {
    font-weight: 700;
  }
`;
