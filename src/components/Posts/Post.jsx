import React from 'react';


const Post = ({ id, authorPost, textPost, onDelete }) => {


    return (
        <div className="row">
            <div className="card callout">
                <h5>TextoPrueba</h5>
                <hr className="subrayado" />
                <p>Prueba</p>
                <div className="container deleteContainer">
                    <div className="row justify-content-end">
                        <div className="col-11 deleteContainer ">
                            <span className="fontCursive">Written by </span>
                            <strong>Prueba</strong>
                        </div>
                        <div className="col-1">
                            <button type="button" className="btn bi bi-trash botonBasura" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Post;