import { Template } from './styles.ts';

const Footer = () => {
  return (
    <Template>
      <div>
        <span>Разработчик: Федосеев Д.С.</span>
        <br />
        <a href='https://github.com/FedoseevDS/ts-online-chat' rel='noreferrer' target='_blank'>
          GitHub: https://github.com/FedoseevDS/ts-online-chat
        </a>
      </div>
    </Template>
  );
};

export default Footer;
