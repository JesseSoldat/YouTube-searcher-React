import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
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
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }


  render() {
    return (
      <div className="col-xs-12">
        <SearchBar onSearchTermChanged={this.videoSearch} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
