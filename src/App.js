import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ButtonLoadMore from "./components/Button";
import ModalWindow from "./components/Modal";

class App extends React.Component {
  static propTypes = {
    query: PropTypes.string,
    results: PropTypes.array,
    loadMore: PropTypes.bool,
    showModal: PropTypes.bool,
    filteredResults: PropTypes.array,
    handleFormSubmit: PropTypes.func,
    handleLoadingUpd: PropTypes.func,
    handleOnClick: PropTypes.func,
    toggleModal: PropTypes.func,
  };

  state = {
    query: "",
    results: [],
    loadMore: false,
    showModal: false,
    filteredResults: null,
  };

  handleFormSubmit = ({ name }) => {
    this.setState({ query: name });
  };

  handleLoadingUpd = (results) => {
    this.setState({ results });
    this.setState({ loadMore: false });
  };

  handleOnClick = (loadMore) => {
    this.setState({ loadMore });
  };

  toggleModal = (id) => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));

    this.setState({
      filteredResults: this.state.results.filter(
        (result) => result.id === id
      )[0],
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          query={this.state.query}
          onUpd={this.handleLoadingUpd}
          loadMore={this.state.loadMore}
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <ModalWindow
            filteredResults={this.state.filteredResults}
            onClose={this.toggleModal}
          />
        )}
        {this.state.results.length > 0 && (
          <ButtonLoadMore onClick={this.handleOnClick} />
        )}
      </div>
    );
  }
}

export default App;
