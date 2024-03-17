// // App.js
// import React from 'react';
// import PostList from './components/PostList';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to My Blog</h1>
//       </header>
//       <main>
//         <PostList />
//       </main>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import WriteArticlePage from './components/WriteArticlePage';
import ArticleDetailPage from './components/ArticleDetailPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Blog</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/write-article" component={WriteArticlePage} />
          <Route exact path="/article/:id" component={ArticleDetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
