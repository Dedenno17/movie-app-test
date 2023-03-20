import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="w-full min-h-screen bg-primaryBlack">{children}</div>;
};

export default Layout;
