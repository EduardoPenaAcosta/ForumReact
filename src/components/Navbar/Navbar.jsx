import React, {useState} from 'react';

import logoIndex from './../../assets/logo.png';
import Login from './Login';
import Logout from './Logout';


const Navbar = (props) => {
  const { buttonLogin} = props;

  const [user,setUser] = useState('');
  const [password,setPassword] = useState('');

  function handleChange(name,value){
    if(name =! ''){
      // Variable apra almancenar
      setUser(value)
    }
  };

  function handleChangePassword(name,value){
    if(name === '1234'){
      setPassword(value);
    }
  };

  function handleSubmit(){
    let passwordVerified = setPassword;

    if(passwordVerified === '1234'){

    }
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark  bg-dark">
        <div className="container-fluid">
          <img src={logoIndex} className="logoIndex" />

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Acerca de</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contacto</a>
              </li>
            </ul>
            <Login 
              attribute={{
                id: 'user',
                name:'user'
              }}
              handleChange = {handleChange}
              attributePass={{
                id: 'contraseña',
                name:'contraseña'
              }}
            />
            <Logout 
              buttonLogin={buttonLogin}
            />
          </div>
        </div>
      </nav>
      <div/>
    </div>
  );
};

export default Navbar;