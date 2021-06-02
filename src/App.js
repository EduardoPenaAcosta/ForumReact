import React, { useState, useEffect }from 'react';
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/Navbar/Navbar';
import FormSendPost from './components/Posts/FormSendPost';
import ListPost from './components/Posts/ListPost'

const initialsPost = [
  { id: uuidv4(), authorPost: 'Alexis', title:"React Hooks", textPost: '-0,25 Por no poner bien el padding.' },
  { id: uuidv4(), authorPost: 'Alexis 2.0', title:"Usando React Fragments", textPost: 'La próxima te quito 1.5 por no poner en rojo el color.' }
];

function App() {

  const doGetPosts = () => {
    const result = JSON.parse(localStorage.getItem('postsCategories'));
    return result ? result : initialsPost;
  }

  const [posts, setPosts] = useState(doGetPosts());

  const handleAdd = () => {
    setPosts([
      ...posts,
      {id: uuidv4(), authorPost: 'Perro', title: 'Perra Elocuente', textPost: 'Perrísimo decente'}
    ]);
    localStorage.setItem('postsCategories', JSON.stringify(posts))
  }

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => posts.id !== id ));
  }

  console.log(posts);
  useEffect(() => {
      localStorage.setItem('postsCategories', JSON.stringify(posts))
  },[]);

  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
        <div className="row align-items-start">
        <FormSendPost />
        <ListPost 
                posts={posts}
                onDelete = {handleDelete}/>
        <button onClick={handleAdd}>Añadir</button>
        </div>
      </div>
    </div >
  );
};

export default App;
