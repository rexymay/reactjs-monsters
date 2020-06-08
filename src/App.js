import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  handleSearchInputChange = (e) => {
    e.preventDefault();
    this.setState({ searchField: e.target.value });
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  render() {
    // destructure class variables
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    const handleSearchInputChange = this.handleSearchInputChange
    // end destructure

    return (
      <div className="App">
        <h1>Monsters RectJS App</h1>
        <SearchBox 
          placeholder="search for monsters"
          handleChange={handleSearchInputChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
