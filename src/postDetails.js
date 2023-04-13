import React, { useContext } from 'react';
import { Cart } from './context';

export default function PostDetails() {
  const { post } = useContext(Cart);

  return (
    <div>
      {post.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {post.map((p) => (
              <tr key={p.id}>
                <td>{p.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
