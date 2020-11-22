import React from 'react';

import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplashApi from '../api/unsplash';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplashApi.get('/search/photos', {
      params: {
        query: term
      }
    })
      .catch(err => { throw new Error('error') });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '2rem' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />

        <ImageList images={this.state.images} />
      </div>
    )
  }
};

export default App;