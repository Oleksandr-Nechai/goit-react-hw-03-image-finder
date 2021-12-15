import React, { Component } from 'react';
import Modal from './components/Modal';
import './App.css';

class App extends Component {
  state = {
    pictures: [],
    page: 1,
    query: '',
    largeImage: '',
    imgTags: '',
    error: '',
    showModal: true,
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

  render() {
    //const visibleContacts = this.getVisibleContacts();
    const { pictures, isLoading, error, showModal, largeImage, imgTags } = this.state;
    return (
      <div>
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
