import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          return response.json();
        }
      })
      .then(data => setPosts(data))
      .catch(error => setError('Data fetching failed'));
  }, []);

  if (error) {
    return <div className='Error'>{error}</div>;
  }
  return (
    <div className='card'>
      <h1>blogPost</h1>
      <ul>
{posts.map((post,index) => (
  <dd key={post.id} >
    <h2>{index + 1}.{post.title}</h2>
    <p>{post.body}</p>
  </dd>
))}
</ul>
      
    </div>
  );
}

export default App;
