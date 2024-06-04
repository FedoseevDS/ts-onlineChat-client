import { Header } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Template = styled(Header)`
  display: flex;
  align-items: center;
  background: none;
  padding: 0 30px;
  border-bottom: 2px solid green;
  border-radius: 10px;
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  height: 90%;
  width: 150px;
  border: 2px solid;
  border-radius: 100%;
  cursor: pointer;
  background: rgb(121, 197, 137, 0.3);

  &:hover {
    color: #1677ff;
  }

  & img {
    height: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & span {
    font-size: 30px;
    font-weight: 500;
  }
`;
