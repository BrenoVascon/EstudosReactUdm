
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [{
      id: 1,
      title: 'o titulo 1',
      body: 'o corpo 1'
    },
    {
      id: 1,
      title: 'o titulo 2',
      body: 'o corpo 2'
    },
    {
      id: 1,
      title: 'o titulo 3',
      body: 'o corpo 3'
    },
  ]
};
  
timeoutUpdate = null; 

componentDidMount(){
 this.handleTimeout();
}

componentDidUpdate (){
  this.handleTimeout();
}

componentWillUnmount(){
  clearTimeout(this.timeoutUpdate);
}

handleTimeout = () => {
  const { posts, counter} = this.state;
  posts[0].title = 'O titulo mudou';
  
  setTimeout(() => {
    this.state({ posts, counter: counter + 1 });
  },5000);
}

  render() {
    const { posts } = this.state;
  return (
    <div className="App">
      {posts.map(post =>(
        <div key= {post.id}>
          <h1>{post.title}</h1>
          <h1>{post.body}</h1>
        </div>
      ))}
    </div>
  );
  }
}
export default App;
