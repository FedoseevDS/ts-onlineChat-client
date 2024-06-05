import { Button, Template } from './styles.ts';

const Modal = ({ children, onClose, onOpen, title }) => {
  if (!onOpen) {
    return;
  }

  return (
    <Template>
      <div>
        <span>Добавить чат</span>
        <div>{children}</div>
        <Button>
          <button onClick={() => onClose(false)}>Создать</button>
          <button onClick={() => onClose(false)}>Отменить</button>
        </Button>
      </div>
    </Template>
  );
};

export default Modal;
