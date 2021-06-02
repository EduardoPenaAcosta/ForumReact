import React from 'react';


const Login = () => {
    return(
        <form class="d-flex">
                  <input className="form-control espaciador" type="text" placeholder="Usuario"></input>
                  <input  type="password" className="form-control espaciador" placeholder="Password"/>
                  <button className="form-control btn btn-warning" type="submit">Login</button>
        </form>
    );
};


export default Login;