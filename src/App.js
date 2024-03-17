// App.js
import React from 'react';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Blog</h1>
      </header>
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;
