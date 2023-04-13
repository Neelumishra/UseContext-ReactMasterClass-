import React, { useContext } from 'react';

import { Cart } from './context';

export default function PostDetails() {
  const {post} = useContext(Cart);
  console.log(post);
  return (
    <div>
      {post.length &&
        post.map((e) => (
          <table>
            <tr>
              <th>Body</th>
             
            </tr>
            <tr>
              <td>{e.body}</td>
              


            </tr>
          </table>
        ))}
    </div>
  );
}
