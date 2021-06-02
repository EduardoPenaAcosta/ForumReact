import React, { useState, useEffect } from 'react';



const FormSendPost = ({atTitulo, atPost, onSubmit, handleAdd }) => {

    const initPost = {
        title: '',
        textPost: ''
    };

    const [post, setPostState] = useState(initPost);


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(post);
    };

    return (
        <div className=" col-6 sinPading">
            <div className="card">
                <div className="card-header colorAutor"> Autor: </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label className="form-label" id="title">Título: </label>

                        <input 
                                id={atTitulo.id} 
                                name={atTitulo.name}
                                type="text" 
                                className="form-control"
                        />

                        <label className="form-label" id="textPost">Mensaje: </label>

                        <input  id={atPost.id} 
                                name={atPost.name}
                                type="textarea" 
                                className="form-control" 
                                rows="3" 
                                placeholder="Tu texto..." 
                        />

                        <button type="submit" className="btn btn-primary" onClick = {() => handleAdd(atTitulo.name, atPost.namet)}>Nuevo post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};



export default FormSendPost;