import "./App.css";
import Navbar from "./navbar.js";
import Post from "./post.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="posts">
          <Post
            title="My First Post"
            content="This is the content of my first post."
          />
          <Post
            title="My Second Post"
            content="This is the content of my second post."
          />
        </div>
        <div className="buttons">
          <button className="custom-button">Tag Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
