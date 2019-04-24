import React, { useState } from 'react';
import HamBurgerIcon from './hambugerIcon';
import Menu from './menu';

const NavbarLeft = () => {

  const [collapsed, setcollapsed] = useState(false);
  const toggle = () => setcollapsed(!collapsed);

  return (
    <div className="theme-nav-left">
      <HamBurgerIcon click={toggle} open={collapsed}/>
      <Menu open={collapsed} />
    </div>
  )
}
export default NavbarLeft;
