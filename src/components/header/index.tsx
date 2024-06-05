import { Logo, Template, Title, User } from './styles.ts';

const img =
  'https://russia-dropshipping.ru/800/600/http/d1tlrxy0mfxnyo.cloudfront.net/thumbnail/3449/ff82d2a1-1372-4605-bccc-60ad71d85775.png';

const Header = () => {
  return (
    <Template>
      <Logo to='/'>
        <img alt='Логотип' src={img} />
      </Logo>
      <div />
      <Title>
        <span>Живой чат</span>
      </Title>
      {/* <User>Крокодил</User> */}
    </Template>
  );
};

export default Header;
