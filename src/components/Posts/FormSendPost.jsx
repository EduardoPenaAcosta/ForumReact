import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const FormSendPost = ({onSubmit, handleAdd }) => {

    const initPost = {
        
        title: '',
        textPost: ''
    };

    const [post, setPostState] = useState(initPost);

    const handleChange = (e) => {
        setPostState({
            ...post,
            [e.target.name]:
                e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
    }

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
                                id="title" 
                                type="text" 
                                className="form-control"
                                name="title"
                                value={post.title}
                                onChange={handleChange} 
                        />

                        <label className="form-label" id="textPost">Mensaje: </label>

                        <input  id="textPost" 
                                type="textarea" 
                                className="form-control" 
                                rows="3" 
                                placeholder="Tu texto..." 
                                name="textPost"
                                value={post.textPost}
                                onChange={handleChange} 
                        />

                        <button type="submit" className="btn btn-primary" onClick = {() => handleAdd()}>Nuevo post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

FormSendPost.propTypes = {
    input: PropTypes.string.isRequired
};

export default FormSendPost;