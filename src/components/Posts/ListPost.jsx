import React from 'react';
import Post from './Post';

const ListPost = (props) => {
    const { posts, onDelete } = props;
    return (
        <div className="row col-6">
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                id={post.id}
                authorPost={post.authorPost}
                title={post.title}
                textPost={post.textPost}
                onDelete={onDelete}
                />
            );
          })}
        </div>
      );
    };

export default ListPost;