import React from 'react';
import Post from './Post';

const ListPost = (props) => {
    const { posts, onDelete } = props;

    return (
        <div className="col-6 sinPading espizq">
            <div className="row">
                <div className="card callout">
                    <h4>TextoPrueba</h4>
                    <hr className="subrayado" />
                    <p>Prueba</p>
                    <div className="container deleteContainer">
                        <div className="row justify-content-end">
                            <div className="col-11 deleteContainer ">
                                <span className="fontCursive">Written by </span>
                                <span>Prueba</span>
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

export default ListPost;