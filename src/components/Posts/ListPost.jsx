import React from 'react';
import Post from './Post';

const ListPost = (props) => {
    const { posts, onDelete } = props;

    return (
        <div className="col-6 sinPading espizq">
            <Post />
            <Post />
        </div>
    );
};

export default ListPost;