import React, { useContext } from 'react';
import { Cart } from './context';
import './style.css';

export default function PostList() {
  const { post } = useContext(Cart);

  return (
    <div>
      {post.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {post.map((p) => (
              <tr key={p.id}>
                <td>{p.userId}</td>
                <td>{p.id}</td>
                <td>{p.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
