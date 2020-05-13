import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Functional from './components/Functional'


class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      picture: '', 
      name: '',
      favPokemon: "Garbador",
      message: "Guten Tag, WR1!"
    }
    this.updatePicture = this.updatePicture.bind(this);
    this.updateName = this.updateName.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  updatePicture(value){
    this.setState({
      picture: value
    });
  };

  updateName(value){
    this.setState({
      name: value
    });
  };

  addFriend(){
    const {picture, name, friends} = this.state
    const newFriend = {picture,name}
    this.setState({
      friends: [...friends, newFriend],
      picture: '',
      name: ''
    });
  };

  render(){
    console.log(this.state)
    const friends = this.state.friends.map((friend, index) => {
      return <div key={`friend-${index}`}>
        <img alt='friend-pic' src={friend.picture} width="200px"/>
        <span>{friend.name}</span>
      </div>
    })
    return (
      <div className="App">
          <Header propName="test test hello WR1!" favPokemon={this.state.favPokemon}/>
          <Functional
            picture = {this.state.picture}
            name = {this.state.name}
            addFriend = {this.addFriend}
            updateName = {this.updateName} 
            updatePicture = {this.updatePicture} 
            myMessage={this.state.message}/>
          {friends}
      </div>
    );
  }
}

export default App;
