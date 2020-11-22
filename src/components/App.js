import React from 'react';
import axios from 'redaxios';


import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID PytwXLTtCi4_Gro57KB3FueJQQuVYOcsJdMmpN9pNj4'
      }
    })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '2rem' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
};

export default App;