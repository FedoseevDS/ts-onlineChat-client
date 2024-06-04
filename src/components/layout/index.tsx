import { ReactNode } from 'react';

import { Template } from './styles.ts';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Template>{children}</Template>;
};

export default Layout;
