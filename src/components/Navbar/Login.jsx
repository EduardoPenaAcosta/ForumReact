import React from 'react';


const Login = ({attribute,attributePass, handleChange, handleSubmit, param,  buttonLogin}) => {
    return(
        <form class="d-flex">
                  <input
                         id={attribute.id}
                         name={attribute.name}
                         className="form-control espaciador" 
                         type="text"
                         placeholder="Usuario"
                         onChange={(e) => handleChange(e.target.name,e.target.value)}
                        />
                  <input  
                         id= {attributePass.id}
                         name= {attributePass.name}
                         onChange={(e) => handleChange(e.target.name, e.target.value)}
                         type="password"
                         className="form-control espaciador"
                         placeholder="Password"
                        />
                  <button className="form-control btn btn-warning" type="submit" 
                  onClick = {() => handleSubmit}>Login</button>
        </form>
    );
};


export default Login;