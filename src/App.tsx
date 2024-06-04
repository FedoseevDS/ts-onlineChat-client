import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/footer/index.tsx';
import Header from './components/header/index.tsx';
import Layout from './components/layout/index.tsx';
import Main from './pages/main/index.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route element={<Main />} path='/' />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
