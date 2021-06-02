import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const FormSendPost = () => {

    return (
        <div className=" col-6 sinPading">
            <div className="card">
                <div className="card-header colorAutor"> Autor: </div>
                <div className="card-body">
                    <form>
                        <label className="form-label" id="title">Título: </label>
                        <input id="title" type="text" className="form-control" />
                        <label className="form-label" id="message">Mensaje: </label>
                        <input id="message" type="textarea" className="form-control" rows="3" placeholder="Tu texto..." />
                        <button type="submit" className="btn btn-primary">Nuevo post</button>
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