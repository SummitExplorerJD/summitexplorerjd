import { Outlet } from 'react-router-dom';
import { FC } from 'react';

const Layout: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
};

export default Layout;