import React, { useState, useEffect }from 'react';
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/Navbar/Navbar';
import FormSendPost from './components/Posts/FormSendPost';
import ListPost from './components/Posts/ListPost'

const initialsPost = [
  { id: uuidv4(), authorPost: 'Alexis', title:"React Hooks", textPost: '-0,25 Por no poner bien el padding.' },
  { id: uuidv4(), authorPost: 'Alexis 2.0', title:"Usando React Fragments", textPost: 'La próxima te quito 1.5 por no poner en rojo el color.' }
];

function App({title, textPost}) {


  /* Código del FormSend Post 
  Desde aquí se traen los datos.*/
  const [FormPost, setFormPost] = useState({});

  const onSubmit = (datos) =>{
    setFormPost(datos);
  }

  /* Agregar los posts a su adecuado... */
  const handleAdd = () => {
    setPosts([
      ...posts,
      {id: uuidv4(), authorPost: 'Perro', title: {title}, textPost: {textPost}}
    ]);
    localStorage.setItem('postsCategories', JSON.stringify(posts))
  }


  /* Obtención de los POSTS e impresión en la web */
  const doGetPosts = () => {
    const result = JSON.parse(localStorage.getItem('postsCategories'));
    return result ? result : initialsPost;
  }

  const [posts, setPosts] = useState(doGetPosts());

 

  const handleDelete = (id) => {
    setPosts(posts.filter((posts) => posts.id !== id ));
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

        <FormSendPost onSubmit={onSubmit}
                      handleAdd={handleAdd} 
        />

        <ListPost 
                posts={posts}
                onDelete = {handleDelete}
        />
        
        </div>
      </div>
    </div >
  );
};

export default App;
