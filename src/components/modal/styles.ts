import styled from 'styled-components';

export const Template = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background: rgba(154, 204, 217, 0.34);
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 100px;

  & > div {
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
    margin-left: 35%;
    margin-right: 35%;

    & > span {
      font-weight: 700;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;

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
`;
