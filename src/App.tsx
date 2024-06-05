import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/footer/index.tsx';
import Header from './components/header/index.tsx';
import Layout from './components/layout/index.tsx';
import Chat from './pages/chat/index.tsx';
import Main from './pages/main/index.tsx';
import store from './store/index.ts';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Header />
          <Routes>
            <Route element={<Main />} path='/' />
            <Route element={<Chat />} path='/chat' />
          </Routes>
          <Footer />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
