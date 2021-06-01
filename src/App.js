import React, { useState, useEffect }from 'react';
import { v4 as uuidv4 } from 'uuid';

import Navbar from './components/Navbar/Navbar';
import FormSendPost from './components/Posts/FormSendPost';
import ListPost from './components/Posts/ListPost'

const initialsPost = [
  { id: uuidv4(), authorPost: 'Alexis', textPost: '-0,25 Por no poner bien el padding.' },
  { id: uuidv4(), authorPost: 'Alexis 2.0', textPost: 'La próxima te quito 1.5 por no poner en rojo el color.' }
];

function App() {

  const doGetPosts = () => {
    const result = JSON.parse(localStorage.getItem('Posts'));
    return result ? result : initialsPost;
  }

  const [thisPosts, setPosts] = useState(doGetPosts());

  const handleAdd = () => {
    setPosts([
      ...thisPosts,
      {id: uuidv4(), name: 'algo'}
    ]);
    localStorage.setItem('thisPosts', JSON.stringify(thisPosts))
  }

  const handleDelete = (id) => {
    setPosts(thisPosts.filter((thisPosts) => thisPosts.id !== id ));
  }

 

  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
        <div className="row align-items-start">
        <FormSendPost />
        <ListPost/>
        </div>
      </div>
    </div >
  );
};

export default App;
