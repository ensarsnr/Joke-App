import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const style = {
  container: `flex h-screen`,
  login: `m-auto bg-slate-500 p-4 rounded-lg shadow-lg`,
  button: ``
}

function LoginPage() {
  const [login, setLogin] = useState(true);
  const changeLogin = login ? "Hesabın yoksa tıkla" : "Hesabın varsa tıkla";
  return (
    <div className={style.container}>
      <div className={style.login}>
      {login ? <Login /> : <Register />}
      <button className='rounded-xl p-2 w-[100%] text-white' onClick={() => setLogin(!login)} >{changeLogin}</button>
      </div>
    </div>
  );
}

export default LoginPage;
