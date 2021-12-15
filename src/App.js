import React, { Component } from 'react';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import { productsApi } from './shared/service/Api';
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
    finish: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, isLoading, page } = this.state;
    if (prevState.query !== query || (isLoading && prevState.page < page)) {
      this.fetchProducts();
    }
  }
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  async fetchProducts() {
    const { page, query } = this.state;
    this.setState({ isLoading: true });
    try {
      const { data } = await productsApi.searchPictures(page, query);
      this.setState(({ pictures, page }) => {
        const newState = {
          pictures: [...pictures, ...data.hits],
          isLoading: false,
          error: null,
        };
        if (data.hits.length < 11) {
          newState.finish = true;
        }
        return newState;
      });
    } catch (error) {
      this.setState({
        isLoading: false,
        error,
      });
    }
  }

  bigImage = (largeImage = '') => {
    this.setState({ largeImage });

    this.toggleModal();
  };
  onChangeQwery = ({ query }) => {
    this.setState({ query: query, page: 1, pictures: [], error: null });
  };
  loadMore = () => {
    this.setState(({ page }) => ({
      isLoading: true,
      page: page + 1,
    }));
  };
  render() {
    const { pictures, isLoading, error, showModal, largeImage, imgTags, finish } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQwery} />
        {error && <p>Error</p>}
        <ImageGallery pictures={pictures} onClick={this.bigImage} />
        {!finish && pictures.length > 11 && !isLoading && <Button onClick={this.loadMore} />}
        {isLoading && <Loader />}
        {showModal && (
          <Modal showModal={this.bigImage}>
            <img src={largeImage} alt={imgTags} />
          </Modal>
        )}
      </div>
    );
  }
}
export default App;
