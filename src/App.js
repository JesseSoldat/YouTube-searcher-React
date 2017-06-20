import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAqATbr65c9EON9JW6nSf5yEiHK-mtpdPg';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('attack on titan');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      console.log(videos);
    });
  }


  render() {
    return (
      <div className="App">
        <SearchBar onSearchTermChanged={this.videoSearch} />
       
      </div>
    );
  }
}

export default App;
