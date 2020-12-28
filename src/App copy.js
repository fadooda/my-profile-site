import React from 'react'


import io from 'socket.io-client'
class App extends React.Component {
  constructor(){
    super()
    this.state={
      messages: []
    }
    this.sendMessage=this.sendMessage.bind(this)
  }
  componentDidMount()
  {
    this.socket = io("http://localhost:5000")
    this.socket.on('message',(message)=>{
      this.setState({messages: [message, ...this.state.messages]})
    })
  }

  sendMessage(event){
    const body= event.target.value
    if (event.keyCode===13 && body){
      let message={
        body,
        from: 'Me'
      }
      this.setState({messages : [message, ...this.state.messages]})
      this.state.emit("message", message)
    }
  }

  render()
  {
    return (
      <div className="App">
          <input type="text" onKeyUp={this.sendMessage} placeholder="enter message"/>
          {this.state.messages.map((message)=>{
            return (<p>message - {message.body} from {message.from} </p>)
          })}
      </div>
    );
  }

}

export default App;
