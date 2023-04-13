import React from 'react';
import { createContext } from 'react';

export const Cart = createContext();

export function Context({ children }) {
  const [post, setPost] = React.useState([]);
  const [visible,setVisible] =React.useState(true)

  React.useEffect(() => fetchData(), []);

  function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((data) => setPost(data));
  }

  return <Cart.Provider value={{post,visible,setVisible}}>{children}</Cart.Provider>;
}
