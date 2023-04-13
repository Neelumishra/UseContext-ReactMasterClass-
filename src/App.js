import React from 'react';
import './style.css';
import PostList from "./postList" 
import  PostDetails from "./postDetails" 
import React, { useContext } from 'react';
import { Cart } from './context';

export default function App() {
  const {visible,setVisible} = useContext(Cart);
  
  return (
    <div>
      {visible?(<PostList/>):(<PostDetails/>)}
      <button onClick={()=>setVisible(!visible)}>List</button>

    </div>
  );
}
