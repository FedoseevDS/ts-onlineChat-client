import { useEffect, useState } from 'react';

import { Auth, Template } from './styles.ts';

const Main: React.FC = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:5010/chat')
      .then((res) => res.json())
      // .then((res) => console.log('res', res));
      .then((res) => setData(res.message));
    // .then((res) => console.log('res', res));
  }, []);

  console.log('data', data);

  return (
    <Template>
      <Auth>
        {/* <span>Для входа в онлайн чат введите свой ник</span> */}
        <span>{data}</span>
        <form>
          <input placeholder='Введите ник' type='text' />
          <button>Войти</button>
        </form>
      </Auth>
    </Template>
  );
};

export default Main;
