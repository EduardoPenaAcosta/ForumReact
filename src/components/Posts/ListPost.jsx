import React from 'react';
import Post from './Post';

const ListPost = (props) => {
    const { posts, onDelete } = props;
    return (
        <div className="row col-6">
          {posts.map((category) => {
            return (
              <Post 
                key={posts.id}
                id={posts.id}
                authorPost={posts.authorPost}
                title={posts.title}
                textPost={posts.textPost}
                onDelete={onDelete}
                />
            );
          })}
        </div>
      );
    };

export default ListPost;