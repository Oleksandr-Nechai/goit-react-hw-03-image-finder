import React, { Component } from 'react';
// import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import './App.css';

class App extends Component {
  state = {
    pictures: [],
    page: 1,
    query: '',
    largeImage: '',
    imgTags: '',
    error: null,
    showModal: false,
    isLoading: false,
  };
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  bigImage = (largeImage = '') => {
    this.setState({ largeImage });

    this.toggleModal();
  };
  onChangeQwery = ({ query }) => {
    this.setState({ query: query, page: 1, pictures: [], error: null });
  };
  render() {
    const { pictures, isLoading, error, showModal, largeImage, imgTags } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onChangeQwery} />
        {error && <p>Error</p>}
        <ImageGallery pictures={pictures} onClick={this.bigImage} />
      </div>
    );
  }
}
export default App;
