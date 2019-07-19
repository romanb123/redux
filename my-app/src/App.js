import React from 'react';
import Home from './components/home';
import Count from './components/Counter';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Counter() {
  return <Count />;
}
function Index() {
  return <Home />;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/about">about</a>
              <a className="nav-item nav-link" href="/users">users</a>
              <a className="nav-item nav-link" href="/counter">counter</a>
            </div>
          </div>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <Route path="/counter/" component={Counter} />
      </div>
    </Router>
  );
}

export default App;
