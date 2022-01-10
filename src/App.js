import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";
import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ButtonLoadMore from "./components/Button";
import ModalWindow from "./components/Modal";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [filteredResults, setFilteredResults] = useState(null);

  const handleFormSubmit = (name) => {
    setQuery(name);
  };

  const handleLoadingUpd = (results) => {
    setLoadMore(false);
    setResults(results);
  };

  const handleOnClick = (loadMore) => {
    setLoadMore(loadMore);
  };

  const toggleModal = (id) => {
    setShowModal((showModal) => !showModal);
    setFilteredResults(results.filter((result) => result.id === id)[0]);
  };

  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery
        query={query}
        onUpd={handleLoadingUpd}
        loadMore={loadMore}
        onClick={toggleModal}
      />
      {showModal && (
        <ModalWindow filteredResults={filteredResults} onClose={toggleModal} />
      )}
      {results.length > 0 && <ButtonLoadMore onClick={handleOnClick} />}
    </div>
  );
}

App.propTypes = {
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
