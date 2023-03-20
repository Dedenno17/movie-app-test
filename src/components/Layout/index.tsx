import React, { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-primaryBlack">
      <Header />
      <main className="max-w-[1440px] mx-auto min-h-screen px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
