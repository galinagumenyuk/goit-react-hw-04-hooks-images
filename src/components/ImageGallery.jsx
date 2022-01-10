import {useState, useEffect, useRef} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import Item from "./ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";
import getImages from "./api";

export default function ImageGallery({query, onUpd, loadMore, onClick}) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  let page = useRef(1);

  useEffect(() => {
    setResults([]);
    page.current = 1;
  }, [query]);
  
  useEffect(() => {
    if (query !== "") {
      setLoading(true);
    }
  }, [query]);

  useEffect(() => {
    if (query === "") {
      return;
    }
    getImages(
      query,
      page.current,
      (results) => {
        setResults(prevState => prevState.concat(results));
        onUpd(results);
        setLoading(false);
        page.current += 1;
      },
    );
  }, [query]);

  useEffect(() => {
    if (loadMore) {
      getImages(
      query,
      page.current,
      (results) => {
        setResults(prevState => prevState.concat(results));
        onUpd(results);
        setLoading(false);
        page.current += 1;
      });
    }
  }, [loadMore]);
  
  return (
    <div>
      {loading && (
        <Loader
        type="ThreeDots"
        color=" #3f51b5"
        height={100}
        width={100}
        timeout={3000} //3 secs
       />
      )}
      <Gallery>
        {results &&
          results.map((item) => (
            <Item
              key={item.id}
              image={item}
              onClick={() => onClick(item.id)}
            />
          ))}
      </Gallery>
    </div>
  );
}

 ImageGallery.propTypes = {
    results: PropTypes.array,
    loading: PropTypes.bool,
    handleResults: PropTypes.func,
  };