import React from 'react';


const Post = ({ id, authorPost, title, textPost, onDelete , onSubmit }) => {
    return (
        <div className="row">
            <div className="card callout">
                <h5>{title}</h5>
                <hr className="subrayado" />
                <p>{textPost}</p>
                <div className="container deleteContainer">
                    <div className="row justify-content-end">
                        <div className="col-11 deleteContainer ">
                            <span className="fontCursive">Written by </span>
                            <strong>{authorPost}</strong>
                        </div>
                        <div className="col-1">
                            <button type="button" onClick = {() => onDelete(id)} className="btn bi bi-trash botonBasura" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Post;