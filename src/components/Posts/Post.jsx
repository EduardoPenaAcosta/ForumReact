import React from 'react';


const Post = ({ id, authorPost, textPost, onDelete }) => {


    return (
        <div>
            <div className="row">
                <div className="card callout">
                    <h4>TextoPrueba</h4>
                    <hr className="subrayado" />
                    <p>Prueba</p>
                    <div className="container deleteContainer">
                        <div className="row justify-content-end">
                            <div className="col-11 deleteContainer fontCursive">
                                <p>Written by Prueba</p>
                            </div>
                            <div className="col-1">
                                <button type="button" className="btn btn-link bi bi-trash botonBasura" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Post;