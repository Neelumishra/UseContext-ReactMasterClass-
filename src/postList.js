import React, { useContext } from 'react';
import './style.css';
import { Cart } from './context';

export default function postList() {
  const {post} = useContext(Cart);
  
  return (
    <div>
      {post.length &&
        post.map((e) => (
          <table>
            <tr>
              <th>UseId</th>
              <th>Id</th>
              <th>Title</th>
            </tr>
            <tr>
              <td>{e.userId}</td>
              <td>{e.id}</td>
              <td>{e.title}</td>


            </tr>
          </table>
        ))}
    </div>
  );
}
