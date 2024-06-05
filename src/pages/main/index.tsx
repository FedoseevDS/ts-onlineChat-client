import { useCallback, useEffect, useState } from 'react';

import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Socket, connect } from 'socket.io-client';

import { addUser } from '../../store/users/index.ts';

import { Auth, Input, Template } from './styles.ts';

const socket: Socket = connect('http://localhost:5004');

interface ChangeEvent<T = HTMLInputElement> {
  target: T;
}

const Main: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [users, setUsers] = useState<string[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    socket.on('users', (data) => {
      setUsers(data);
    });
  }, []);

  const onOpenChat = useCallback(() => {
    if (users.includes(username)) {
      setIsError(true);
      setUsername('');
      return;
    }

    dispatch(addUser({ id: nanoid(), name: username, room: 'common' }));
    navigate('/chat');
    setUsername('');
  }, [navigate, dispatch, username, users]);

  const onChange = useCallback(({ target: { value } }: ChangeEvent) => {
    if (value) {
      setIsError(false);
    }

    setUsername(value);
  }, []);

  return (
    <Template>
      <Auth>
        <span>Для входа в живой чат введите свой ник</span>
        <div>
          <Input>
            <input
              name='username'
              placeholder='Введите ник'
              type='text'
              value={username}
              onChange={onChange}
            />
            {isError && <span>Такой ник уже существует</span>}
          </Input>
          <button disabled={!username} onClick={onOpenChat}>
            Войти
          </button>
        </div>
      </Auth>
    </Template>
  );
};

export default Main;
