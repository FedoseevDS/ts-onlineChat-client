import { useCallback, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Socket, connect } from 'socket.io-client';

import Input from '../../components/input/index.tsx';
import Modal from '../../components/modal/index.tsx';
import { RootState } from '../../store/index.ts';

import { BodyChat, Button, LinkChat, SideBar, Template } from './styles.ts';

interface ChatItem {
  name: string;
  path: string;
}

interface StatusState {
  message: string;
  user: string;
}

const listChat: ChatItem[] = [
  { name: 'first', path: '/*' },
  { name: 'second', path: '/*' },
  { name: 'third', path: '/*' },
  { name: 'fourth', path: '/*' },
  { name: 'fifth', path: '/*' },
];

const socket: Socket = connect('http://localhost:5004');

const Chat: React.FC = () => {
  const users = useSelector((state: RootState) => state.allUsers);

  const [status, setStatus] = useState<StatusState | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onCreateChat = useCallback(() => {
    setIsOpenModal((e) => !e);
  }, []);

  useEffect(() => {
    socket.emit('common', users[users.length - 1]);
  }, [users]);

  useEffect(() => {
    socket.on('message', ({ message, user }) => {
      setStatus({ message, user: user.name });
    });
  }, []);

  return (
    <Template>
      <Button>
        <button onClick={onCreateChat}>Создать чат</button>
        <button>Удалить чат</button>
        <div>
          <span>{status ? `${status.message} "${status.user}"` : ''}</span>
        </div>
      </Button>
      <div>
        <SideBar>
          <span>Выберите комнату</span>
          {listChat.map(({ name, path }, index) => (
            <LinkChat key={name + path}>
              <input type='checkbox' />
              <div>{index + 1}</div>
              <Link to={path}>{name}</Link>
            </LinkChat>
          ))}
        </SideBar>
        <BodyChat>
          <span>First</span>
          <div>чат</div>
        </BodyChat>
      </div>
      <Modal onClose={setIsOpenModal} onOpen={isOpenModal}>
        <Input />
      </Modal>
    </Template>
  );
};

export default Chat;
