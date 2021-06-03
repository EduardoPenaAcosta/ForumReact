import React, { Fragment, useState } from 'react';



const FormSendPost = ({ handleChange, handleChangeTitle, handleAdd}) => {



    const enviarDatos = (event) =>{
        event.preventDefault();
    }

    return (
        <div className=" col-6 sinPading">
            <div className="card">
                <div className="card-header colorAutor"> Autor: </div>
                <div className="card-body">
                    <form onSubmit={enviarDatos} method="POST">
                        <label className="form-label" id="titulo">Título: </label>

                        <input 
                                id='titulo'
                                name='titulo'
                                type="text" 
                                className="form-control"
                                onChange={ (e) => handleChange(e.target.name, e.target.value)}
                        />

                        <label className="form-label" id="texto">Mensaje: </label>

                        <input  id='texto'
                                name='texto'
                                type="textarea" 
                                className="form-control" 
                                placeholder="Tu texto..."
                                onChange={ (e) => handleChange(e.target.name, e.target.value)}
                        />

                        <button type="submit" className="btn btn-primary" onclick={(e) => handleAdd()} >Nuevo post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};



export default FormSendPost;