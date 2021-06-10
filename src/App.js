import './App.css';
import React, { Component } from 'react'
import {inject, observer } from "mobx-react";

@inject('Store')
@observer
class App extends Component { 
  render() {
    const { Store } = this.props
    return (
      <div>
        <h1>mobx</h1>
        {Store.todos.map(todo => (
          <li>{todo}</li>
        ))}
        <button onClick = {() => Store.addtodo()}>Add todo</button>
        <h2>Total todos-{Store.count}</h2>
      </div>
    )
  }
}
export default App;



// const App = observer(({store}) => (
//   <div>
//     <h1>mobx</h1>
//     {store.todos[0]}
//     <button onClick = {() => store.addtodo()}>Add todo</button>
  
//   </div>
// )) 
    
// export default App;
