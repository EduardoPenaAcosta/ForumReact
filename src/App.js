import React, { useState, useEffect }from 'react';
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/Navbar/Navbar';
import FormSendPost from './components/Posts/FormSendPost';
import ListPost from './components/Posts/ListPost'

const initialsPost = [
  { id: uuidv4(), authorPost: 'Alexis', textPost: '-0,25 Por no poner bien el padding.' },
  { id: uuidv4(), authorPost: 'Jose Carlos', textPost: 'La próxima te quito 1.5 por no poner en rojo el color.' }
];

function App({author,textPost}) {

  const doGetPosts = () => {
    const result = JSON.parse(localStorage.getItem('posts'));
    return result ? result : initialsPost;
  };

  const [posts, setPosts] = useState(doGetPosts());

  const handleAdd = () => {
    setPosts([
      ...posts,
      { id: uuidv4(), name: {author} },
      { id: uuidv4(), textPost : {textPost} }
    ]);
    localStorage.setItem('categories', JSON.stringify(posts));
  };

  const handleDelete = (id) => {
        setPosts(posts.filter((posts) => posts.id !== id));
      };

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, []); 

  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
        <div className="row align-items-start">
        <FormSendPost />
        <ListPost 
            Posts={posts} 
            onDelete={handleDelete}
        />
        </div>
      </div>
    </div >
  );
};

export default App;
