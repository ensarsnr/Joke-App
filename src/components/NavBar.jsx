import React from 'react';
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import LogOut from './LogOut';
import { ConstColor } from '../constants/const_color';
const style = {
    nav: `${ConstColor.PURPLE_SPOT} bg-gray-800 h-20 flex justify-between relative w-[100%] items-center p-4`,
    heading: `text-white text-3xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Gelecek Senin</h1>
      {user ? <LogOut /> : <LogOut />}

    </div>
  );
};

export default Navbar;
